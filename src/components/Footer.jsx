import React from 'react';
import { ArrowUp } from 'lucide-react';

const LinkedInIcon = ({ size = 14, color = 'currentColor' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkedinUrl = 'https://www.linkedin.com/in/rushmitha-varshini-ys-5039b4283';

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

        {/* Right: LinkedIn, Copyright & Smooth Back-To-Top Button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          marginRight: 'clamp(0px, 7vw, 130px)' // Comfortable spacing from floating WhatsApp trigger
        }}>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn Profile"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '4px 10px',
              borderRadius: '9999px',
              background: 'rgba(10, 102, 194, 0.15)',
              border: '1px solid rgba(10, 102, 194, 0.35)',
              color: '#0a66c2',
              fontSize: '0.75rem',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <LinkedInIcon size={12} />
            <span>LinkedIn</span>
          </a>

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
