import React from 'react';
import { MessageCircle, ArrowDown, Award, Briefcase, Sparkles } from 'lucide-react';

export default function ScrollyOverlay({ progress }) {
  const whatsappNumber = '+61 434 455 126';
  const whatsappUrl = `https://wa.me/61434455126?text=${encodeURIComponent("Hi Rushmitha, I saw your portfolio and would like to connect!")}`;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Initial Landing Scroll Prompt (Only visible at very top 0% - 6%, then disappears)
  let scrollCueOp = 0;
  if (progress < 0.05) {
    scrollCueOp = 1;
  } else if (progress < 0.08) {
    scrollCueOp = 1 - (progress - 0.05) / 0.03;
  }

  // =========================================================================
  // Section 1: Name & Intro Card
  // HIDDEN on initial load! Appears only as user scrolls down (0.06 to 0.32)
  // =========================================================================
  let op1 = 0;
  let tr1 = 30;
  if (progress >= 0.06 && progress <= 0.32) {
    if (progress < 0.12) {
      const t = (progress - 0.06) / (0.12 - 0.06);
      op1 = t;
      tr1 = 30 * (1 - t);
    } else if (progress <= 0.26) {
      op1 = 1;
      tr1 = 0;
    } else {
      const t = (progress - 0.26) / (0.32 - 0.26);
      op1 = 1 - t;
      tr1 = -30 * t;
    }
  }

  // =========================================================================
  // Section 2: Right Aligned - Innovative Design Systems (0.34 to 0.60)
  // Appears on the open right side as head turns
  // =========================================================================
  let op2 = 0;
  let tr2 = 30;
  if (progress >= 0.34 && progress <= 0.60) {
    if (progress < 0.40) {
      const t = (progress - 0.34) / (0.40 - 0.34);
      op2 = t;
      tr2 = 30 * (1 - t);
    } else if (progress <= 0.54) {
      op2 = 1;
      tr2 = 0;
    } else {
      const t = (progress - 0.54) / (0.60 - 0.54);
      op2 = 1 - t;
      tr2 = -30 * t;
    }
  }

  // =========================================================================
  // Section 3: Left Aligned - Designing Engineer Track Record (0.62 to 0.84)
  // Appears on the open left side as she centers
  // =========================================================================
  let op3 = 0;
  let tr3 = 30;
  if (progress >= 0.62 && progress <= 0.84) {
    if (progress < 0.68) {
      const t = (progress - 0.62) / (0.68 - 0.62);
      op3 = t;
      tr3 = 30 * (1 - t);
    } else if (progress <= 0.78) {
      op3 = 1;
      tr3 = 0;
    } else {
      const t = (progress - 0.78) / (0.84 - 0.78);
      op3 = 1 - t;
      tr3 = -30 * t;
    }
  }

  // =========================================================================
  // Section 4: Center Transition CTA into Work Grid (0.85 to 1.00)
  // =========================================================================
  let op4 = 0;
  let tr4 = 30;
  if (progress >= 0.85 && progress <= 1.0) {
    if (progress < 0.90) {
      const t = (progress - 0.85) / (0.90 - 0.85);
      op4 = t;
      tr4 = 30 * (1 - t);
    } else if (progress <= 0.97) {
      op4 = 1;
      tr4 = 0;
    } else {
      const t = (progress - 0.97) / (1.0 - 0.97);
      op4 = 1 - t;
      tr4 = -30 * t;
    }
  }

  return (
    <div 
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 10,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 clamp(1.5rem, 5vw, 4rem)'
      }}
    >
      {/* ========================================================================= */}
      {/* 0% INITIAL PROMPT: Minimal Clean Scroll Cue (Disappears when scrolling)   */}
      {/* ========================================================================= */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(2rem, 5vh, 3.5rem)',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          opacity: scrollCueOp,
          transition: 'opacity 0.2s ease',
          pointerEvents: scrollCueOp > 0.5 ? 'auto' : 'none'
        }}
      >
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 18px',
          borderRadius: '9999px',
          background: 'rgba(7, 9, 14, 0.7)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#c4b5fd',
          fontSize: '0.85rem',
          fontWeight: 600,
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)'
        }}>
          <ArrowDown size={14} className="animate-float" />
          <span>Scroll down to begin story</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: NAME CARD (Appears ONLY as user scrolls, NOT directly first)    */}
      {/* ========================================================================= */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(2rem, 5vh, 4.5rem)',
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 clamp(1.5rem, 4vw, 3rem)',
          opacity: op1,
          transform: `translateY(${tr1}px)`,
          transition: 'opacity 0.15s ease-out, transform 0.15s ease-out',
          pointerEvents: op1 > 0.4 ? 'auto' : 'none'
        }}
      >
        <div style={{
          background: 'rgba(7, 9, 14, 0.68)',
          backdropFilter: 'blur(18px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '1.75rem',
          padding: '24px 36px',
          maxWidth: '820px',
          width: '100%',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(139, 92, 246, 0.25)'
        }}>
          {/* Status & Location Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 14px',
            borderRadius: '9999px',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#c4b5fd',
            fontSize: '0.8rem',
            fontWeight: 600,
            marginBottom: '10px'
          }}>
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 8px #10b981'
            }} />
            <span>Available for Opportunities • Melbourne, Victoria</span>
          </div>

          {/* Big Name */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 5vw, 3.8rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            marginBottom: '6px',
            color: '#ffffff'
          }}>
            Rushmitha Varshini
          </h1>

          {/* Subtitle */}
          <h2 style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
            fontWeight: 600,
            color: '#38bdf8',
            marginBottom: '18px'
          }}>
            Designing Engineer • Full-Stack UI/UX Specialist
          </h2>

          {/* Action Buttons: WhatsApp + View Projects */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.75rem 1.6rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.9rem',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
                textDecoration: 'none'
              }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>

            <button 
              onClick={() => scrollTo('projects')} 
              className="btn-primary"
              style={{ padding: '0.75rem 1.6rem', fontSize: '0.9rem' }}
            >
              <span>View Projects</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: RIGHT ALIGNED (0.34 to 0.60) - Innovative Design Systems       */}
      {/* ========================================================================= */}
      <div
        style={{
          position: 'absolute',
          right: 'clamp(2rem, 8vw, 7rem)',
          top: '32%',
          maxWidth: '520px',
          textAlign: 'left',
          opacity: op2,
          transform: `translateY(${tr2}px)`,
          transition: 'opacity 0.15s ease-out, transform 0.15s ease-out',
          pointerEvents: op2 > 0.4 ? 'auto' : 'none'
        }}
      >
        <div style={{
          background: 'rgba(7, 9, 14, 0.75)',
          backdropFilter: 'blur(18px)',
          border: '1px solid rgba(139, 92, 246, 0.35)',
          borderRadius: '1.5rem',
          padding: '28px 32px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(139, 92, 246, 0.2)'
        }}>
          <div style={{
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#38bdf8',
            fontWeight: 700,
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Sparkles size={14} />
            <span>Core Discipline</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: '#ffffff',
            marginBottom: '12px'
          }}>
            Innovative <br />
            <span style={{ color: '#c4b5fd' }}>Design Systems.</span>
          </h2>

          <p style={{
            color: '#cbd5e1',
            fontSize: '1.05rem',
            lineHeight: 1.65,
            marginBottom: '18px'
          }}>
            Bridging scientific user research with modern full-stack implementation. Translating complex industrial workflows into intuitive, high-converting digital products.
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{
              padding: '5px 12px',
              borderRadius: '9999px',
              background: 'rgba(6, 182, 212, 0.15)',
              border: '1px solid rgba(6, 182, 212, 0.35)',
              color: '#38bdf8',
              fontSize: '0.8rem',
              fontWeight: 600
            }}>
              Certified HFI Analyst
            </span>
            <span style={{
              padding: '5px 12px',
              borderRadius: '9999px',
              background: 'rgba(139, 92, 246, 0.15)',
              border: '1px solid rgba(139, 92, 246, 0.35)',
              color: '#c4b5fd',
              fontSize: '0.8rem',
              fontWeight: 600
            }}>
              Figma Architectures
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 3: LEFT ALIGNED (0.62 to 0.84) - Designing Engineer Track Record   */}
      {/* ========================================================================= */}
      <div
        style={{
          position: 'absolute',
          left: 'clamp(2rem, 8vw, 7rem)',
          top: '32%',
          maxWidth: '540px',
          textAlign: 'left',
          opacity: op3,
          transform: `translateY(${tr3}px)`,
          transition: 'opacity 0.15s ease-out, transform 0.15s ease-out',
          pointerEvents: op3 > 0.4 ? 'auto' : 'none'
        }}
      >
        <div style={{
          background: 'rgba(7, 9, 14, 0.75)',
          backdropFilter: 'blur(18px)',
          border: '1px solid rgba(6, 182, 212, 0.35)',
          borderRadius: '1.5rem',
          padding: '28px 32px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(6, 182, 212, 0.2)'
        }}>
          <div style={{
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#f59e0b',
            fontWeight: 700,
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Briefcase size={14} />
            <span>Track Record</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: '#ffffff',
            marginBottom: '12px'
          }}>
            Designing Engineer. <br />
            <span style={{ color: '#38bdf8' }}>Industrial & Enterprise.</span>
          </h2>

          <p style={{
            color: '#cbd5e1',
            fontSize: '1.05rem',
            lineHeight: 1.65,
            marginBottom: '18px'
          }}>
            Hands-on technical solutions at <strong>GEE KAY VEE HYDRAULICS</strong> and enterprise platform development at <strong>Cognizant</strong>. Graduated from <strong>RMK Engineering College (BE ECE)</strong>.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '10px'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '10px 14px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase' }}>Engineering</div>
              <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.875rem' }}>GEE KAY VEE</div>
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '10px 14px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase' }}>Trainee</div>
              <div style={{ color: '#38bdf8', fontWeight: 600, fontSize: '0.875rem' }}>Cognizant</div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 4: CENTER TRANSITION CTA (0.85 to 1.00)                           */}
      {/* ========================================================================= */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
          opacity: op4,
          transform: `translateY(${tr4}px)`,
          transition: 'opacity 0.15s ease-out, transform 0.15s ease-out',
          pointerEvents: op4 > 0.4 ? 'auto' : 'none'
        }}
      >
        <div style={{
          maxWidth: '750px',
          margin: '0 auto',
          background: 'rgba(7, 9, 14, 0.82)',
          backdropFilter: 'blur(22px)',
          border: '1.5px solid rgba(139, 92, 246, 0.4)',
          borderRadius: '2rem',
          padding: '40px 36px',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.9), 0 0 45px rgba(139, 92, 246, 0.3)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 14px',
            borderRadius: '9999px',
            background: 'rgba(139, 92, 246, 0.15)',
            border: '1px solid rgba(139, 92, 246, 0.4)',
            color: '#c4b5fd',
            fontSize: '0.8rem',
            fontWeight: 600,
            marginBottom: '1rem'
          }}>
            <Award size={14} />
            <span>Certified Usability Analyst • Python for Data Science</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.12,
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            Let’s Build Something <br />
            <span style={{
              background: 'linear-gradient(135deg, #38bdf8 0%, #c4b5fd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Exceptional Together.
            </span>
          </h2>

          <p style={{
            color: '#cbd5e1',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Available for UI/UX Engineering and Full-Stack Frontend roles in Melbourne, Victoria, and globally. Direct WhatsApp contact or explore interactive case studies below.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.9rem 1.8rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.95rem',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                cursor: 'pointer',
                boxShadow: '0 6px 25px rgba(37, 211, 102, 0.45)',
                textDecoration: 'none'
              }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp: {whatsappNumber}</span>
            </a>

            <button 
              onClick={() => scrollTo('projects')} 
              className="btn-primary"
              style={{ padding: '0.9rem 1.8rem' }}
            >
              <span>Explore Projects & Case Studies ↓</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
