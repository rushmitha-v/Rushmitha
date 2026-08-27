import React, { useState, useEffect } from 'react';
import { Send, User, Briefcase, Award, Code, FolderGit2, Sparkles, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'case-study', label: 'Case Study', icon: Sparkles },
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
          padding: scrolled ? '6px 20px' : '8px 24px',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          maxWidth: '96vw'
        }}
      >
        {/* RV Home Brand Link */}
        <button 
          onClick={() => scrollTo('home')}
          style={{
            background: activeSection === 'home' 
              ? (theme === 'dark' ? 'rgba(139, 92, 246, 0.18)' : 'rgba(124, 58, 237, 0.12)')
              : 'transparent',
            border: activeSection === 'home' 
              ? (theme === 'dark' ? '1px solid rgba(139, 92, 246, 0.45)' : '1px solid rgba(124, 58, 237, 0.3)')
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
            marginRight: '4px',
            transition: 'all 0.25s ease'
          }}
        >
          <span style={{
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.78rem',
            color: '#fff',
            fontWeight: 800
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
                    ? (theme === 'dark' 
                        ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.32) 0%, rgba(6, 182, 212, 0.25) 100%)' 
                        : 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(2, 132, 199, 0.12) 100%)')
                    : 'transparent',
                  border: isActive 
                    ? (theme === 'dark' ? '1px solid rgba(139, 92, 246, 0.65)' : '1px solid rgba(124, 58, 237, 0.5)')
                    : '1px solid transparent',
                  color: isActive 
                    ? (theme === 'dark' ? '#ffffff' : '#0f172a') 
                    : (theme === 'dark' ? '#94a3b8' : '#64748b'),
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
                <Icon size={13} style={{ color: isActive ? (theme === 'dark' ? '#38bdf8' : '#7c3aed') : 'currentColor', transition: 'color 0.2s', flexShrink: 0 }} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

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
              ? 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)'
              : (theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'),
            border: activeSection === 'contact'
              ? '1px solid rgba(255, 255, 255, 0.45)'
              : (theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.1)'),
            color: activeSection === 'contact' ? '#ffffff' : 'inherit'
          }}
        >
          <Send size={12} style={{ color: activeSection === 'contact' ? '#ffffff' : (theme === 'dark' ? '#c4b5fd' : '#7c3aed') }} />
          <span>Contact</span>
        </button>

        {/* Theme Toggle Button */}
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
            color: theme === 'dark' ? '#f59e0b' : '#6366f1',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginLeft: '4px',
            flexShrink: 0
          }}
        >
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        {/* Mobile Hamburger Toggle Button (Visible only on <= 880px) */}
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

      {/* Mobile Slide-Down Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          className="mobile-nav-drawer glass-card"
          style={{
            position: 'fixed',
            top: '64px',
            left: '16px',
            right: '16px',
            padding: '20px',
            zIndex: 149,
            pointerEvents: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            maxHeight: 'calc(100vh - 85px)',
            overflowY: 'auto',
            border: '1px solid rgba(139, 92, 246, 0.4)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.85)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', paddingBottom: '8px', borderBottom: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Navigation Menu
            </span>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px' }}
            >
              <X size={18} />
            </button>
          </div>

          <button
            onClick={() => scrollTo('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '10px',
              background: activeSection === 'home' ? 'rgba(139, 92, 246, 0.18)' : 'transparent',
              border: activeSection === 'home' ? '1px solid rgba(139, 92, 246, 0.4)' : '1px solid transparent',
              color: 'var(--text-main)',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            <Sparkles size={16} style={{ color: 'var(--color-primary)' }} />
            <span>Home</span>
          </button>

          {navItems.map(({ id, label, icon: Icon }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: isActive ? 'rgba(139, 92, 246, 0.18)' : 'transparent',
                  border: isActive ? '1px solid rgba(139, 92, 246, 0.4)' : '1px solid transparent',
                  color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <Icon size={16} style={{ color: isActive ? 'var(--color-secondary)' : 'currentColor' }} />
                <span>{label}</span>
              </button>
            );
          })}

          <button
            onClick={() => scrollTo('contact')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '14px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
              color: '#ffffff',
              fontSize: '0.95rem',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              marginTop: '8px'
            }}
          >
            <Send size={16} />
            <span>Get in Touch / Contact</span>
          </button>
        </div>
      )}
    </header>
  );
}

