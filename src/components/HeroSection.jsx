import React, { useRef, useState } from 'react';
import { MapPin, Send, Eye, MessageCircle, ArrowDown, Award, Briefcase, Play, Pause, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const whatsappNumber = '+61 434 455 126';
  const whatsappUrl = `https://wa.me/61434455126?text=${encodeURIComponent("Hi Rushmitha, I saw your portfolio and would like to connect!")}`;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const togglePlay = () => {
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
    <section id="home" style={{ position: 'relative', width: '100%' }}>
      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO ANIMATION STAGE (Plays First, 100% Unobstructed)        */}
      {/* ========================================================================= */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '6rem',
          paddingBottom: '2rem',
          overflow: 'hidden'
        }}
      >
        {/* Soft Ambient Glow Halos */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '900px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(6, 182, 212, 0.18) 45%, transparent 75%)',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        {/* Video Theater Frame */}
        <div 
          style={{
            position: 'relative',
            zIndex: 1,
            width: '92%',
            maxWidth: '1000px',
            aspectRatio: '16/9',
            borderRadius: '1.75rem',
            overflow: 'hidden',
            border: '1.5px solid rgba(139, 92, 246, 0.4)',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(139, 92, 246, 0.25)',
            background: '#07090e'
          }}
        >
          {/* Native Video Playback */}
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

          {/* Top Stage Bar */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            right: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 5
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(7, 9, 14, 0.8)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '0.8rem',
              color: '#c4b5fd',
              fontWeight: 600
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 10px #10b981'
              }} />
              <span>Rushmitha Varshini • AI Avatar Animation</span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '9999px',
              background: 'rgba(7, 9, 14, 0.8)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '0.75rem',
              color: '#94a3b8'
            }}>
              <MapPin size={12} style={{ color: '#f59e0b' }} />
              <span>Melbourne, Victoria</span>
            </div>
          </div>

          {/* Bottom Stage Play/Pause Controller */}
          <div style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            right: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 5
          }}>
            <button
              onClick={togglePlay}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(7, 9, 14, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
              <span>{isPlaying ? 'Pause Motion' : 'Play Motion'}</span>
            </button>

            <div style={{
              fontSize: '0.75rem',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'rgba(37, 211, 102, 0.2)',
              border: '1px solid rgba(37, 211, 102, 0.4)',
              color: '#86efac',
              fontWeight: 600
            }}>
              1080p Studio Animation
            </div>
          </div>
        </div>

        {/* Scroll Cue Prompt */}
        <div 
          onClick={() => scrollTo('hero-content')}
          style={{
            marginTop: '1.75rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 18px',
            borderRadius: '9999px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#c4b5fd',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            zIndex: 1
          }}
        >
          <ArrowDown size={14} className="animate-float" />
          <span>Scroll down for profile, experience & contact</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. PROFILE CONTENT SECTION (Displayed Below the Animation)                */}
      {/* ========================================================================= */}
      <div 
        id="hero-content"
        className="portfolio-section" 
        style={{ 
          minHeight: 'auto', 
          paddingTop: '3rem', 
          paddingBottom: '5rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}
      >
        <div className="glass-card" style={{ padding: '44px 36px', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
          {/* Status Badge */}
          <div className="section-badge" style={{ marginBottom: '1rem' }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 10px #10b981'
            }} />
            Available for Opportunities • Melbourne, Victoria
          </div>

          {/* Name Heading */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)',
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: '-0.025em',
            marginBottom: '0.75rem',
            color: '#ffffff'
          }}>
            Rushmitha Varshini
          </h1>

          {/* Subtitle / Roles */}
          <h2 style={{
            fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
            fontWeight: 600,
            color: '#38bdf8',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            <span>Designing Engineer</span>
            <span style={{ color: '#64748b' }}>•</span>
            <span style={{ color: '#c4b5fd' }}>Full-Stack UI/UX Specialist</span>
          </h2>

          {/* Bio Description */}
          <p style={{
            color: '#cbd5e1',
            fontSize: '1.05rem',
            lineHeight: 1.75,
            marginBottom: '2rem',
            maxWidth: '920px'
          }}>
            A graduate of <strong>RMK Engineering College (BE ECE)</strong> with hands-on experience designing industrial systems at <strong>GEE KAY VEE HYDRAULICS</strong> and enterprise applications at <strong>Cognizant</strong>. Certified Usability Analyst (HFI) delivering scientific user research and high-fidelity Figma architectures.
          </p>

          {/* Action Buttons: WhatsApp + View Projects + Contact */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {/* WhatsApp Direct Connect */}
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.9rem 1.75rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.95rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.35)',
                transition: 'all 0.25s ease',
                textDecoration: 'none'
              }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>

            <button onClick={() => scrollTo('projects')} className="btn-primary">
              <Eye size={16} />
              <span>View Projects</span>
            </button>
            
            <button onClick={() => scrollTo('contact')} className="btn-secondary">
              <Send size={15} />
              <span>Contact</span>
            </button>
          </div>

          {/* Highlights Row: Experience, Certified, Technical */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginBottom: '2rem'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '16px 20px'
            }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.05em', marginBottom: '4px' }}>
                Experience
              </div>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: '#ffffff' }}>
                GEE KAY VEE Hydraulics
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '16px 20px'
            }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.05em', marginBottom: '4px' }}>
                Certified
              </div>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: '#38bdf8' }}>
                HFI Usability Analyst
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '16px 20px'
            }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.05em', marginBottom: '4px' }}>
                Technical
              </div>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: '#c4b5fd' }}>
                React • Python • Figma
              </div>
            </div>
          </div>

          {/* Badges Strip & Scroll Cue */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(6, 182, 212, 0.12)',
                border: '1px solid rgba(6, 182, 212, 0.35)',
                color: '#38bdf8',
                fontSize: '0.825rem',
                fontWeight: 600
              }}>
                <Award size={15} />
                <span>Certified HFI Usability Analyst</span>
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(139, 92, 246, 0.12)',
                border: '1px solid rgba(139, 92, 246, 0.35)',
                color: '#c4b5fd',
                fontSize: '0.825rem',
                fontWeight: 600
              }}>
                <Briefcase size={15} />
                <span>Designing Engineer • GEE KAY VEE Hydraulics</span>
              </div>
            </div>

            {/* Scroll Cue */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#94a3b8',
                fontSize: '0.825rem',
                cursor: 'pointer'
              }}
              onClick={() => scrollTo('about')}
            >
              <div style={{
                width: '18px',
                height: '28px',
                borderRadius: '9px',
                border: '2px solid rgba(139, 92, 246, 0.4)',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '4px'
              }}>
                <div style={{
                  width: '3px',
                  height: '6px',
                  borderRadius: '2px',
                  background: '#8b5cf6',
                  animation: 'floatSlow 1.5s ease-in-out infinite'
                }} />
              </div>
              <span>Scroll to animate full-screen background avatar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
