import React, { useState, useEffect } from 'react';
import { Send, User, Briefcase, Award, Code, FolderGit2, Sparkles, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
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
      top: '16px',
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none',
      padding: '0 16px'
    }}>
      <nav 
        className="glass-nav"
        style={{
          pointerEvents: 'auto',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: scrolled ? '7px 24px' : '9px 30px',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
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
            marginRight: '6px',
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
            fontSize: '0.8rem',
            color: '#fff',
            fontWeight: 800
          }}>
            RV
          </span>
          <span style={{ display: window.innerWidth < 640 ? 'none' : 'inline' }}>Rushmitha</span>
        </button>

        {/* Dynamic Navigation Items */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'nowrap' }}>
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
                  padding: '6px 13px',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  boxShadow: isActive 
                    ? (theme === 'dark' ? '0 0 16px rgba(139, 92, 246, 0.4)' : '0 2px 10px rgba(124, 58, 237, 0.18)') 
                    : 'none'
                }}
              >
                <Icon size={14} style={{ color: isActive ? (theme === 'dark' ? '#38bdf8' : '#7c3aed') : 'currentColor', transition: 'color 0.2s', flexShrink: 0 }} />
                <span style={{ whiteSpace: 'nowrap' }}>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Contact CTA Button */}
        <button
          onClick={() => scrollTo('contact')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 15px',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginLeft: '6px',
            cursor: 'pointer',
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            background: activeSection === 'contact'
              ? 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)'
              : (theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'),
            border: activeSection === 'contact'
              ? '1px solid rgba(255, 255, 255, 0.45)'
              : (theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.1)'),
            color: activeSection === 'contact' ? '#ffffff' : 'inherit',
            boxShadow: activeSection === 'contact'
              ? '0 0 22px rgba(139, 92, 246, 0.6)'
              : 'none'
          }}
        >
          <Send size={13} style={{ color: activeSection === 'contact' ? '#ffffff' : (theme === 'dark' ? '#c4b5fd' : '#7c3aed') }} />
          <span>Contact</span>
        </button>

        {/* Theme Toggle Button (Light / Dark Mode) */}
        <button
          onClick={toggleTheme}
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label="Toggle dark/light mode"
          id="theme-toggle-btn"
          style={{
            background: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
            border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.12)',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme === 'dark' ? '#f59e0b' : '#6366f1',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            marginLeft: '8px',
            boxShadow: theme === 'dark' ? '0 0 12px rgba(245, 158, 11, 0.25)' : '0 2px 8px rgba(0, 0, 0, 0.08)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </nav>
    </header>
  );
}
