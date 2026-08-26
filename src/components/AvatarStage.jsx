import React, { useEffect, useRef, useState } from 'react';
import { Award, Briefcase, Play, Pause, RefreshCw, Sparkles, Sliders } from 'lucide-react';

const TOTAL_FRAMES = 75;

export default function AvatarStage() {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  const [mode, setMode] = useState('video'); // 'video' | 'scroll'
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadPercent, setLoadPercent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Animation frame counters
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);

  // 1. Preload 75 frames for scroll engine
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

  // 2. Draw Frame on Canvas for scroll scrubbing
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

    // 16:9 containment / cover
    const imgAspect = img.naturalWidth / img.naturalHeight; // 1280 / 720 = 1.777
    const canvasAspect = cw / ch;

    let dw, dh, ox, oy;
    if (canvasAspect > imgAspect) {
      dw = cw;
      dh = cw / imgAspect;
      ox = 0;
      oy = (ch - dh) / 2;
    } else {
      dh = ch;
      dw = ch * imgAspect;
      ox = (cw - dw) / 2;
      oy = 0;
    }

    ctx.drawImage(img, ox, oy, dw, dh);
  };

  // 3. Scroll tracking
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const progress = Math.min(Math.max(scrollY / (window.innerHeight * 1.6), 0), 1);
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);

      // If user scrolls down past 120px and in video mode, can automatically render frames
      if (mode === 'scroll') {
        renderFrame(targetFrameRef.current);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mode, isLoaded]);

  // 4. RAF loop for smooth frame lerping when in scroll mode
  useEffect(() => {
    if (mode !== 'scroll') return;

    let animId;
    const loop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.15;
        renderFrame(currentFrameRef.current);
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [mode, isLoaded]);

  // 5. Canvas Resize
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const w = rect.width || 540;
      const h = rect.height || 340;

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);

      renderFrame(currentFrameRef.current);
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [mode, isLoaded]);

  // 6. Interactive 3D Card Hover Tilt
  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const rotX = -y * 10;
    const rotY = x * 10;

    container.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.015, 1.015, 1.015)`;
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    if (!container) return;
    container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const toggleVideoPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div 
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto'
      }}
    >
      {/* Outer ambient glow halos matching blue & amber rim lighting */}
      <div style={{
        position: 'absolute',
        inset: '-20px',
        background: 'radial-gradient(circle at 75% 50%, rgba(245, 158, 11, 0.25) 0%, rgba(139, 92, 246, 0.3) 40%, rgba(6, 182, 212, 0.25) 75%, transparent 100%)',
        filter: 'blur(35px)',
        zIndex: 0,
        borderRadius: '2rem',
        animation: 'pulseGlow 4s ease-in-out infinite'
      }} />

      {/* Floating 3D Interactive Stage Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          aspectRatio: '16/10',
          borderRadius: '1.5rem',
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(13, 17, 26, 0.95) 100%)',
          border: '1.5px solid rgba(139, 92, 246, 0.4)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.75), 0 0 35px rgba(139, 92, 246, 0.25)',
          overflow: 'hidden',
          transition: 'transform 0.2s cubic-bezier(0.2, 0, 0.2, 1), box-shadow 0.3s ease',
          backdropFilter: 'blur(16px)'
        }}
      >
        {/* Mode 1: Native 60fps Looping Video Animation */}
        {mode === 'video' ? (
          <video
            ref={videoRef}
            src="/RushmithaAnimey.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        ) : (
          /* Mode 2: Scroll-Scrubbed 75-Frame Canvas */
          <canvas
            ref={canvasRef}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        )}

        {/* Top Status Header */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          right: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 5
        }}>
          {/* Active Status Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '5px 12px',
            borderRadius: '9999px',
            background: 'rgba(7, 9, 14, 0.8)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            fontSize: '0.725rem',
            color: '#c4b5fd',
            fontWeight: 600,
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.5)'
          }}>
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 8px #10b981',
              display: 'inline-block'
            }} />
            <span>AI Avatar Motion</span>
          </div>

          {/* Mode Switcher Toggle Pill: Live Video vs Scroll Scrub */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(7, 9, 14, 0.8)',
            backdropFilter: 'blur(12px)',
            padding: '3px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}>
            <button
              onClick={() => setMode('video')}
              style={{
                padding: '4px 10px',
                borderRadius: '9999px',
                background: mode === 'video' ? 'linear-gradient(135deg, #8b5cf6, #6366f1)' : 'transparent',
                border: 'none',
                color: mode === 'video' ? '#ffffff' : '#94a3b8',
                fontSize: '0.7rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Play size={10} />
              <span>Live Video</span>
            </button>

            <button
              onClick={() => setMode('scroll')}
              style={{
                padding: '4px 10px',
                borderRadius: '9999px',
                background: mode === 'scroll' ? 'linear-gradient(135deg, #8b5cf6, #6366f1)' : 'transparent',
                border: 'none',
                color: mode === 'scroll' ? '#ffffff' : '#94a3b8',
                fontSize: '0.7rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Sliders size={10} />
              <span>Scroll Sync</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Video Play/Pause & Subtitle */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          right: '12px',
          padding: '8px 14px',
          borderRadius: '10px',
          background: 'rgba(7, 9, 14, 0.8)',
          backdropFilter: 'blur(14px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 5
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {mode === 'video' && (
              <button
                onClick={toggleVideoPlay}
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'rgba(139, 92, 246, 0.3)',
                  border: '1px solid rgba(139, 92, 246, 0.6)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                {isPlaying ? <Pause size={12} /> : <Play size={12} />}
              </button>
            )}
            <div style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 600 }}>
              Rushmitha Varshini
            </div>
            <span style={{ color: '#64748b' }}>•</span>
            <div style={{ fontSize: '0.75rem', color: '#38bdf8' }}>
              Corporate Headshot Animation
            </div>
          </div>

          <div style={{
            fontSize: '0.7rem',
            padding: '2px 8px',
            borderRadius: '9999px',
            background: 'rgba(37, 211, 102, 0.15)',
            border: '1px solid rgba(37, 211, 102, 0.3)',
            color: '#86efac',
            fontWeight: 600
          }}>
            1080p Studio Motion
          </div>
        </div>
      </div>

      {/* Floating Orbital Achievement Badge 1 (Top-Right) */}
      <div 
        className="glass-card animate-float" 
        style={{
          position: 'absolute',
          top: '-16px',
          right: '-18px',
          zIndex: 10,
          padding: '8px 12px',
          borderRadius: '12px',
          background: 'rgba(13, 17, 26, 0.95)',
          border: '1px solid rgba(6, 182, 212, 0.45)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <div style={{
          width: '26px',
          height: '26px',
          borderRadius: '6px',
          background: 'rgba(6, 182, 212, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#38bdf8'
        }}>
          <Award size={15} />
        </div>
        <div>
          <div style={{ fontSize: '0.675rem', color: '#94a3b8', textTransform: 'uppercase' }}>Certified HFI</div>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>Usability Analyst</div>
        </div>
      </div>

      {/* Floating Orbital Achievement Badge 2 (Bottom-Left) */}
      <div 
        className="glass-card animate-float" 
        style={{
          position: 'absolute',
          bottom: '-14px',
          left: '-16px',
          zIndex: 10,
          padding: '8px 12px',
          borderRadius: '12px',
          background: 'rgba(13, 17, 26, 0.95)',
          border: '1px solid rgba(139, 92, 246, 0.45)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          animationDelay: '1.5s'
        }}
      >
        <div style={{
          width: '26px',
          height: '26px',
          borderRadius: '6px',
          background: 'rgba(139, 92, 246, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#c4b5fd'
        }}>
          <Briefcase size={15} />
        </div>
        <div>
          <div style={{ fontSize: '0.675rem', color: '#94a3b8', textTransform: 'uppercase' }}>Designing Engineer</div>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>GEE KAY VEE Hydraulics</div>
        </div>
      </div>
    </div>
  );
}
