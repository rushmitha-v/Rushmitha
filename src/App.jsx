import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import ToastNotification from './components/ToastNotification';
import ScrollyCanvas from './components/ScrollyCanvas';
import ProjectsSection from './components/ProjectsSection';
import CaseStudySection from './components/CaseStudySection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        {/* Floating Navigation Header & Mobile Drawer */}
        <Navbar />

        {/* 60FPS Ambient Particle Constellation Background */}
        <ParticleBackground />

        {/* Global Toast Alert Notifications */}
        <ToastNotification />

        {/* Atmospheric Ambient Glows */}
        <div className="ambient-glow-1" />
        <div className="ambient-glow-2" />

        {/* ===================================================================== */}
        {/* Component 1 & 2: 500vh Sticky Scroller with Canvas & Parallax Overlay  */}
        {/* ===================================================================== */}
        <ScrollyCanvas />

        {/* ===================================================================== */}
        {/* Component 3: Work Grid & Case Studies (Placed after 500vh container)   */}
        {/* ===================================================================== */}
        <main className="content-layer">
          <ProjectsSection />
          <CaseStudySection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <CertificationsSection />
          <ContactSection />
        </main>

        {/* Floating WhatsApp Action Trigger */}
        <a
          href="https://wa.me/61434455126?text=Hi%20Rushmitha,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
          target="_blank"
          rel="noreferrer"
          className="floating-whatsapp-btn"
          title="Chat directly on WhatsApp"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 99,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 18px',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '0.9rem',
            textDecoration: 'none',
            boxShadow: '0 8px 30px rgba(37, 211, 102, 0.45)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            transition: 'all 0.25s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
          <span>WhatsApp</span>
        </a>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
