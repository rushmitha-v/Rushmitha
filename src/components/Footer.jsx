import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="portfolio-footer"
      style={{
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-surface)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '12px clamp(1rem, 4vw, 2.5rem)',
        marginTop: '32px'
      }}
    >
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '12px',
        fontSize: '0.825rem'
      }}>
        {/* Left: Brand Identity & Title */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          <span style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.65rem',
            color: '#ffffff',
            fontWeight: 800
          }}>
            RV
          </span>
          <span 
            className="footer-name"
            style={{ 
              fontWeight: 700, 
              color: 'var(--text-main)', 
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.01em'
            }}
          >
            Rushmitha Varshini
          </span>
          <span style={{ color: 'var(--text-dim)', opacity: 0.5 }}>•</span>
          <span style={{ color: 'var(--text-muted)' }}>
            Designing Engineer & Full-Stack UI/UX Specialist
          </span>
          <span style={{ color: 'var(--text-dim)', opacity: 0.5 }}>•</span>
          <span style={{ color: 'var(--text-dim)' }}>
            Melbourne, Victoria
          </span>
        </div>

        {/* Right: Copyright & Smooth Back-To-Top Button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          marginRight: 'clamp(0px, 7vw, 130px)' // Comfortable spacing from floating WhatsApp trigger
        }}>
          <span style={{ color: 'var(--text-dim)', fontSize: '0.785rem' }}>
            © {new Date().getFullYear()} Rushmitha Varshini
          </span>

          <button
            onClick={scrollToTop}
            title="Scroll to top"
            aria-label="Back to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 10px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-muted)',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-primary)';
              e.currentTarget.style.borderColor = 'var(--color-primary)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Top</span>
            <ArrowUp size={11} />
          </button>
        </div>
      </div>
    </footer>
  );
}
