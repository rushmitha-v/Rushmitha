import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const ThemeContext = createContext();

export const ACCENT_PALETTES = {
  violet: {
    id: 'violet',
    name: 'Cyber Violet',
    primary: '#8b5cf6',
    secondary: '#06b6d4',
    glow: 'rgba(139, 92, 246, 0.4)',
    accentTag: '#c4b5fd'
  },
  cyan: {
    id: 'cyan',
    name: 'Electric Cyan',
    primary: '#06b6d4',
    secondary: '#3b82f6',
    glow: 'rgba(6, 182, 212, 0.4)',
    accentTag: '#67e8f9'
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald Matrix',
    primary: '#10b981',
    secondary: '#06b6d4',
    glow: 'rgba(16, 185, 129, 0.4)',
    accentTag: '#6ee7b7'
  },
  rose: {
    id: 'rose',
    name: 'Sunset Rose',
    primary: '#f43f5e',
    secondary: '#f59e0b',
    glow: 'rgba(244, 63, 94, 0.4)',
    accentTag: '#fda4af'
  }
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('rushmitha_portfolio_theme');
      return saved === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  const [accent, setAccent] = useState(() => {
    try {
      const saved = localStorage.getItem('rushmitha_portfolio_accent');
      return ACCENT_PALETTES[saved] ? saved : 'violet';
    } catch {
      return 'violet';
    }
  });

  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-accent', accent);
    document.body.setAttribute('data-accent', accent);

    try {
      localStorage.setItem('rushmitha_portfolio_theme', theme);
      localStorage.setItem('rushmitha_portfolio_accent', accent);
    } catch (e) {}
  }, [theme, accent]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const changeAccent = (newAccent) => {
    if (ACCENT_PALETTES[newAccent]) {
      setAccent(newAccent);
      showToast(`Palette switched to ${ACCENT_PALETTES[newAccent].name}!`, 'palette');
    }
  };

  const showToast = (message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const triggerConfetti = (customOptions = {}) => {
    try {
      const activeColor = ACCENT_PALETTES[accent]?.primary || '#8b5cf6';
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.7 },
        colors: [activeColor, '#06b6d4', '#f59e0b', '#ffffff'],
        ...customOptions
      });
    } catch (err) {
      console.warn('Confetti trigger skipped', err);
    }
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      accent, 
      setAccent: changeAccent, 
      accentPalette: ACCENT_PALETTES[accent],
      toasts, 
      showToast, 
      triggerConfetti 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
