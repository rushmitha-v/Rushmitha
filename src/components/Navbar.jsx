import React, { useState, useEffect } from 'react';
import { 
  Send, 
  User, 
  Briefcase, 
  Award, 
  Code, 
  FolderGit2, 
  Sparkles, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Palette, 
  Download, 
  MessageCircle,
  Check
} from 'lucide-react';
import { useTheme, ACCENT_PALETTES } from '../context/ThemeContext';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const { theme, toggleTheme, accent, setAccent, triggerConfetti } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // 1. Check if near bottom of document -> Contact is active
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      if (docHeight - scrollBottom < 100) {
        setActiveSection('contact');
        return;
      }

      // 2. Sections in visual order down the page
      const sectionIds = ['home', 'projects', 'case-study', 'about', 'experience', 'skills', 'certifications', 'contact'];
      const probeY = Math.min(window.innerHeight * 0.38, 350);

      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= probeY && rect.bottom > probeY) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    setPaletteOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrandClick = () => {
    triggerConfetti({ particleCount: 50, spread: 60 });
    scrollTo('home');
  };

  const navItems = [
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'case-study', label: 'Case Studies', icon: Sparkles },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'certifications', label: 'Certs', icon: Award }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: '12px',
      left: 0,
      right: 0,
      zIndex: 150,
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none',
      padding: '0 12px'
    }}>
      {/* Desktop & Tablet Main Nav Bar */}
      <nav 
        className="glass-nav desktop-nav"
        style={{
          pointerEvents: 'auto',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: scrolled ? '6px 18px' : '8px 22px',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          maxWidth: '98vw'
        }}
      >
        {/* RV Home Brand Link with celebration physics */}
        <button 
          onClick={handleBrandClick}
          title="Rushmitha Varshini — Portfolio Home"
          style={{
            background: activeSection === 'home' 
              ? 'rgba(139, 92, 246, 0.18)' 
              : 'transparent',
            border: activeSection === 'home' 
              ? '1px solid var(--border-glow)' 
              : '1px solid transparent',
            color: 'inherit',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.925rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 12px 5px 6px',
            borderRadius: '9999px',
            marginRight: '2px',
            transition: 'all 0.25s ease'
          }}
        >
          <span style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.78rem',
            color: '#fff',
            fontWeight: 800,
            boxShadow: '0 2px 8px var(--glow-violet)'
          }}>
            RV
          </span>
          <span className="nav-brand-text">Rushmitha</span>
        </button>

        {/* Dynamic Desktop Navigation Items */}
        <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {navItems.map(({ id, label, icon: Icon }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  background: isActive 
                    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.32) 0%, rgba(6, 182, 212, 0.25) 100%)' 
                    : 'transparent',
                  border: isActive 
                    ? '1px solid var(--border-glow)' 
                    : '1px solid transparent',
                  color: isActive 
                    ? '#ffffff' 
                    : 'rgba(255, 255, 255, 0.88)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)',
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                <Icon size={13} style={{ color: isActive ? 'var(--color-primary)' : 'currentColor', transition: 'color 0.2s', flexShrink: 0 }} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Designer Palette Theme Switcher (Interactive Playroom) */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setPaletteOpen(!paletteOpen)}
            title="Switch Designer Colorway Palette"
            aria-label="Palette theme picker"
            style={{
              background: paletteOpen ? 'rgba(139, 92, 246, 0.25)' : 'rgba(255, 255, 255, 0.06)',
              border: paletteOpen ? '1px solid var(--color-primary)' : '1px solid var(--border-subtle)',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              marginLeft: '2px',
              flexShrink: 0
            }}
          >
            <Palette size={15} />
          </button>

          {/* Palette Popup Picker */}
          {paletteOpen && (
            <div
              style={{
                position: 'absolute',
                top: '42px',
                right: 0,
                background: 'rgba(13, 17, 26, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--border-glow)',
                borderRadius: '14px',
                padding: '12px',
                width: '190px',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.8)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                zIndex: 200
              }}
            >
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '0 4px' }}>
                Designer Palettes
              </div>
              {Object.values(ACCENT_PALETTES).map((pal) => (
                <button
                  key={pal.id}
                  onClick={() => {
                    setAccent(pal.id);
                    setPaletteOpen(false);
                    triggerConfetti({ particleCount: 35 });
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    background: accent === pal.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    border: accent === pal.id ? `1px solid ${pal.primary}` : '1px solid transparent',
                    color: '#ffffff',
                    fontSize: '0.8rem',
                    fontWeight: accent === pal.id ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: pal.primary, boxShadow: `0 0 6px ${pal.primary}` }} />
                    <span>{pal.name}</span>
                  </div>
                  {accent === pal.id && <Check size={13} style={{ color: pal.primary }} />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dark / Light Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label="Toggle dark/light mode"
          id="theme-toggle-btn"
          style={{
            background: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
            border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.12)',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme === 'dark' ? '#f59e0b' : 'var(--color-primary)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginLeft: '2px',
            flexShrink: 0
          }}
        >
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        {/* Contact CTA Button (Desktop) */}
        <button
          onClick={() => scrollTo('contact')}
          className="nav-contact-desktop"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '9999px',
            fontSize: '0.82rem',
            fontWeight: 700,
            marginLeft: '4px',
            cursor: 'pointer',
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            background: activeSection === 'contact'
              ? 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)'
              : 'rgba(255, 255, 255, 0.08)',
            border: activeSection === 'contact'
              ? '1px solid rgba(255, 255, 255, 0.45)'
              : '1px solid var(--border-subtle)',
            color: activeSection === 'contact' ? '#ffffff' : 'inherit'
          }}
        >
          <Send size={12} style={{ color: activeSection === 'contact' ? '#ffffff' : 'var(--color-primary)' }} />
          <span>Contact</span>
        </button>

        {/* Mobile Hamburger Toggle Button (Visible on <= 900px) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-hamburger-btn"
          aria-label="Toggle mobile menu"
          style={{
            background: mobileMenuOpen ? 'rgba(139, 92, 246, 0.25)' : 'transparent',
            border: '1px solid var(--border-subtle)',
            borderRadius: '8px',
            padding: '6px',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-main)',
            cursor: 'pointer',
            marginLeft: '4px'
          }}
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Fullscreen Glass Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          className="mobile-nav-drawer glass-card"
          style={{
            pointerEvents: 'auto',
            position: 'fixed',
            top: '64px',
            left: '12px',
            right: '12px',
            background: theme === 'dark' ? 'rgba(10, 14, 23, 0.98)' : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(25px)',
            border: '1px solid var(--border-glow)',
            borderRadius: '20px',
            padding: '20px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            maxHeight: '85vh',
            overflowY: 'auto',
            zIndex: 140
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: '#fff', fontWeight: 800 }}>
                RV
              </span>
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>Navigation</span>
            </div>

            {/* Quick Dark Mode & Palette */}
            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                onClick={toggleTheme}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent)',
                  cursor: 'pointer'
                }}
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  cursor: 'pointer'
                }}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Links list */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', padding: '6px 0' }}>
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  background: activeSection === id ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  border: activeSection === id ? '1px solid var(--color-primary)' : '1px solid var(--border-subtle)',
                  color: 'var(--text-main)',
                  fontSize: '0.9rem',
                  fontWeight: activeSection === id ? 700 : 500,
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <Icon size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Designer Palettes Selection on Mobile */}
          <div style={{ paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              Colorway Theme
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
              {Object.values(ACCENT_PALETTES).map((pal) => (
                <button
                  key={pal.id}
                  onClick={() => {
                    setAccent(pal.id);
                    triggerConfetti({ particleCount: 30 });
                  }}
                  style={{
                    padding: '8px 4px',
                    borderRadius: '8px',
                    background: accent === pal.id ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                    border: accent === pal.id ? `2px solid ${pal.primary}` : '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: pal.primary }} />
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-main)', fontWeight: 600 }}>{pal.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Action CTAs */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary"
              style={{ flex: 1, justifyContent: 'center', padding: '12px', fontSize: '0.9rem' }}
            >
              <Send size={14} />
              <span>Get In Touch</span>
            </button>

            <a
              href="https://wa.me/61434455126"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 18px',
                borderRadius: '9999px',
                background: '#25D366',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 700
              }}
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
