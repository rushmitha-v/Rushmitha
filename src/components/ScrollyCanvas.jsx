import React, { useEffect, useRef, useState } from 'react';
import { Compass, Sparkles } from 'lucide-react';
import ScrollyOverlay from './ScrollyOverlay';

const TOTAL_FRAMES = 75;

export default function ScrollyCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);

  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadPercent, setLoadPercent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [autoDirection, setAutoDirection] = useState(1); // 1 = forward, -1 = reverse

  // Animation frame trackers
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const userInteractedRef = useRef(false);
  const scrollIdleTimerRef = useRef(null);

  // 1. Preload 75 frames into memory to guarantee zero flicker
  useEffect(() => {
    let loadedCount = 0;
    const imgs = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const num = String(i).padStart(3, '0');
      img.src = `/sequence/frame_${num}.webp`;

      img.onload = () => {
        loadedCount++;
        // Immediately paint frame 0 on the canvas as soon as the first frame loads
        if (i === 1) {
          renderFrame(0);
        }
        setLoadPercent(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) setIsLoaded(true);
      };

      imgs.push(img);
    }

    imagesRef.current = imgs;
  }, []);

  // 2. Draw Frame using strict object-fit: cover logic
  const renderFrame = (frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const safeIdx = Math.min(Math.max(Math.round(frameIdx), 0), TOTAL_FRAMES - 1);
    const img = imagesRef.current[safeIdx];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;

    ctx.clearRect(0, 0, cw, ch);

    // Cover math: completely fill viewport on desktop and mobile
    const imgAspect = img.naturalWidth / img.naturalHeight; // 1280 / 720 = 1.777
    const canvasAspect = cw / ch;

    let dw, dh, ox, oy;

    if (canvasAspect > imgAspect) {
      // Screen is wider than 16:9
      dw = cw;
      dh = cw / imgAspect;
      ox = 0;
      oy = (ch - dh) * 0.42; // push image down so head clears navbar
    } else {
      // Screen is taller than 16:9 (standard desktop monitors, laptops, tablets, mobile)
      dh = ch;
      dw = ch * imgAspect;
      ox = (cw - dw) * 0.5; // center horizontally
      oy = 0;
    }

    ctx.drawImage(img, ox, oy, dw, dh);
  };

  // 3. User Scroll tracking across the 500vh container
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollDistance = -rect.top;
      const totalDistance = rect.height - window.innerHeight;

      if (window.scrollY > 20) {
        userInteractedRef.current = true;
        setIsAutoPlaying(false);
      }

      // Clear any existing idle timer
      if (scrollIdleTimerRef.current) clearTimeout(scrollIdleTimerRef.current);

      // After user stops scrolling for 4 seconds, resume auto-play
      scrollIdleTimerRef.current = setTimeout(() => {
        if (window.scrollY <= 10) {
          userInteractedRef.current = false;
          setIsAutoPlaying(true);
        }
      }, 4000);

      if (totalDistance <= 0) return;

      // When user is actively scrolling, drive frame directly
      if (userInteractedRef.current || window.scrollY > 10) {
        const p = Math.min(Math.max(scrollDistance / totalDistance, 0), 1);
        setProgress(p);
        targetFrameRef.current = p * (TOTAL_FRAMES - 1);
      }
    };

    const handleWheelOrTouch = () => {
      if (window.scrollY > 15) {
        userInteractedRef.current = true;
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheelOrTouch, { passive: true });
    window.addEventListener('touchmove', handleWheelOrTouch, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheelOrTouch);
      window.removeEventListener('touchmove', handleWheelOrTouch);
      if (scrollIdleTimerRef.current) clearTimeout(scrollIdleTimerRef.current);
    };
  }, []);

  // 4. Auto-Play Animation Loop (Plays immediately upon page load)
  useEffect(() => {
    let animId;
    let lastTime = performance.now();
    const fps = 24;
    const interval = 1000 / fps;

    const autoLoop = (now) => {
      const elapsed = now - lastTime;

      if (isAutoPlaying && (!userInteractedRef.current || window.scrollY <= 10)) {
        if (elapsed >= interval) {
          lastTime = now - (elapsed % interval);

          // Smooth cinematic progression
          let nextFrame = targetFrameRef.current + (0.55 * autoDirection);
          if (nextFrame >= TOTAL_FRAMES - 1) {
            nextFrame = TOTAL_FRAMES - 1;
            setAutoDirection(-1); // Ping-pong reverse smoothly
          } else if (nextFrame <= 0) {
            nextFrame = 0;
            setAutoDirection(1); // Ping-pong forward
          }

          targetFrameRef.current = nextFrame;
          setProgress(nextFrame / (TOTAL_FRAMES - 1));
        }
      }

      animId = requestAnimationFrame(autoLoop);
    };

    animId = requestAnimationFrame(autoLoop);
    return () => cancelAnimationFrame(animId);
  }, [isAutoPlaying, autoDirection]);

  // 5. RAF Lerping loop for silky smooth frame rendering
  useEffect(() => {
    let animId;

    const loop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.005) {
        currentFrameRef.current += diff * 0.15;
        renderFrame(currentFrameRef.current);
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isLoaded]);

  // 6. Canvas Resize handler
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      renderFrame(currentFrameRef.current);
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [isLoaded]);



  return (
    <div
      ref={containerRef}
      id="home"
      style={{
        position: 'relative',
        height: '500vh',
        backgroundColor: '#07090e'
      }}
    >
      {/* Sticky Fullscreen Scrollytelling Viewport */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#07090e'
        }}
      >
        {/* Instant Fallback Hero Image (Zero Black Screen on Initial Refresh) */}
        <img
          src="/sequence/frame_001.webp"
          alt="Rushmitha Varshini Hero"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '50% 52%',
            display: 'block',
            zIndex: 0
          }}
        />

        {/* Full-Screen Canvas with Cover Logic */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'block',
            zIndex: 1
          }}
        />

        {/* Ambient Vignette & Gradient Mask for Seamless Text Integration */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, transparent 45%, rgba(7, 9, 14, 0.45) 80%, #07090e 100%), linear-gradient(to bottom, rgba(7, 9, 14, 0.3) 0%, transparent 15%, transparent 85%, #07090e 100%)',
            pointerEvents: 'none',
            zIndex: 2
          }}
        />

        {/* Parallax Typography & Section Overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 10 }}>
          <ScrollyOverlay progress={progress} />
        </div>



        {/* Scroll Progress Bar at Top */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '3px',
          width: `${progress * 100}%`,
          background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
          zIndex: 20,
          transition: 'width 0.1s linear'
        }} />

        {/* Minimal Buffering Indicator */}
        {!isLoaded && (
          <div style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            padding: '6px 14px',
            borderRadius: '9999px',
            background: 'rgba(7, 9, 14, 0.85)',
            border: '1px solid var(--border-glow)',
            color: 'var(--text-main)',
            fontSize: '0.75rem',
            zIndex: 30,
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: '2px solid var(--color-primary)',
              borderTopColor: 'transparent',
              animation: 'spin 0.8s linear infinite'
            }} />
            <span>Buffering frames ({loadPercent}%)</span>
          </div>
        )}
      </div>
    </div>
  );
}
