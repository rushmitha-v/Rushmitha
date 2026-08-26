import React, { useEffect, useRef, useState } from 'react';
import ScrollyOverlay from './ScrollyOverlay';

const TOTAL_FRAMES = 75;

export default function ScrollyCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);

  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadPercent, setLoadPercent] = useState(0);

  // Animation frame trackers
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);

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
      oy = (ch - dh) * 0.42; // slightly biased towards top so head & eyes remain centered
    } else {
      // Screen is taller than 16:9 (standard desktop monitors, laptops, tablets, mobile)
      dh = ch;
      dw = ch * imgAspect;
      ox = (cw - dw) * 0.5; // center horizontally
      oy = 0;
    }

    ctx.drawImage(img, ox, oy, dw, dh);
  };

  // 3. Scroll tracking across the 500vh container
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollDistance = -rect.top;
      const totalDistance = rect.height - window.innerHeight;

      if (totalDistance <= 0) return;

      const p = Math.min(Math.max(scrollDistance / totalDistance, 0), 1);
      setProgress(p);
      targetFrameRef.current = p * (TOTAL_FRAMES - 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 4. RAF Lerping loop for silky smooth frame advancement
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

  // 5. Canvas Resize handler
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
        {/* Full-Screen Canvas with Cover Logic */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'block'
          }}
        />

        {/* Ambient Vignette & Gradient Mask for Seamless Text Integration */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, transparent 45%, rgba(7, 9, 14, 0.45) 80%, #07090e 100%), linear-gradient(to bottom, rgba(7, 9, 14, 0.3) 0%, transparent 15%, transparent 85%, #07090e 100%)',
            pointerEvents: 'none'
          }}
        />

        {/* Parallax Typography & Section Overlay */}
        <ScrollyOverlay progress={progress} />

        {/* Scroll Progress Bar at Top */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '3px',
          width: `${progress * 100}%`,
          background: 'linear-gradient(90deg, #8b5cf6, #38bdf8)',
          zIndex: 20,
          transition: 'width 0.1s linear'
        }} />

        {/* Buffering Indicator */}
        {!isLoaded && (
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            padding: '6px 14px',
            borderRadius: '9999px',
            background: 'rgba(7, 9, 14, 0.85)',
            border: '1px solid rgba(139, 92, 246, 0.4)',
            color: '#c4b5fd',
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
              border: '2px solid #8b5cf6',
              borderTopColor: 'transparent',
              animation: 'spin 0.8s linear infinite'
            }} />
            <span>Preloading 75 HD frames ({loadPercent}%)</span>
          </div>
        )}
      </div>
    </div>
  );
}
