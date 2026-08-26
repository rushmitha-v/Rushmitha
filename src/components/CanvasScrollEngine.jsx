import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 75;

export default function CanvasScrollEngine() {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Animation state for smooth interpolation
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const animationFrameId = useRef(null);

  // Preload all 75 frames into memory
  useEffect(() => {
    let loaded = 0;
    const images = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/sequence/frame_${frameNum}.webp`;

      img.onload = () => {
        loaded++;
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        console.warn(`Failed to load frame ${frameNum}`);
        loaded++;
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      imagesRef.current = [];
    };
  }, []);

  // Handle Canvas Drawing with Responsive Positioning
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const images = imagesRef.current;
    const safeIndex = Math.min(Math.max(Math.round(frameIndex), 0), TOTAL_FRAMES - 1);
    const img = images[safeIndex];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Full Background Screen Cover
    const isDesktop = window.innerWidth >= 1024;
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const screenAspect = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (screenAspect > imgAspect) {
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgAspect;
      offsetX = 0;
      offsetY = (canvasHeight - drawHeight) * 0.4;
    } else {
      drawHeight = canvasHeight;
      drawWidth = canvasHeight * imgAspect;
      offsetY = 0;
      // On desktop, bias slightly so Rushmitha's face and lighting sit in the open right half of the screen
      offsetX = isDesktop ? (canvasWidth - drawWidth) * 0.35 : (canvasWidth - drawWidth) * 0.5;
    }

    ctx.save();
    // Full, vibrant opacity so the animation shines brightly in the background
    ctx.globalAlpha = 0.88;
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();
  };

  // Continuous RAF loop with smooth lerping for butter-smooth scrolling
  useEffect(() => {
    const render = () => {
      // Smooth lerp towards target frame
      const diff = targetFrameRef.current - currentFrameRef.current;
      
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.12; // Easing factor
        drawFrame(currentFrameRef.current);
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isLoaded]);

  // Handle Window Scroll to update target frame
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight <= 0) return;

      const scrollFraction = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
      targetFrameRef.current = scrollFraction * (TOTAL_FRAMES - 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Resize canvas to device pixel ratio
  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      drawFrame(currentFrameRef.current);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isLoaded]);

  return (
    <div className="canvas-container" aria-hidden="true">
      <canvas ref={canvasRef} className="canvas-element" />
      <div className="canvas-vignette" />

      {/* Subtle loader pill while frames are caching */}
      {!isLoaded && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 999,
          background: 'rgba(13, 17, 26, 0.85)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          backdropFilter: 'blur(12px)',
          padding: '8px 16px',
          borderRadius: '9999px',
          fontSize: '0.8rem',
          color: '#c4b5fd',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
        }}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            border: '2px solid #8b5cf6',
            borderTopColor: 'transparent',
            animation: 'spin 0.8s linear infinite'
          }} />
          <span>Buffering interactive scroll frames ({loadProgress}%)</span>
        </div>
      )}
    </div>
  );
}
