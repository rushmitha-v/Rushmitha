import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Play, 
  FileText, 
  Download, 
  BookOpen, 
  CheckCircle2, 
  Eye, 
  X,
  Palette,
  Compass,
  Layers,
  Box,
  Sliders,
  ShieldCheck
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ProjectsSection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalViewMode, setModalViewMode] = useState('html'); // 'html', 'pdf'
  const { triggerConfetti } = useTheme();

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  // Selected Engineering & Industrial Systems (No Figma links)
  const engineeringProjects = [
    {
      id: 'hydra-core',
      num: 'HMI',
      title: 'HYDRA-CORE v3.1: Industrial HMI & Telemetry System',
      category: 'Industrial UX / Engineering',
      tagColor: '#06b6d4',
      badgeColor: '#06b6d4',
      image: '/projects/hydraulics_hmi.jpg',
      htmlUrl: '/industrial-case-studies/case-study-1.html',
      pdfUrl: '/case-studies/pdf/08-hydra-core.pdf',
      pdfName: '08-hydra-core.pdf',
      summary: 'High-precision operator control interface designed for heavy industrial hydraulic machinery, telemetry monitoring, and safety operations at GEE KAY VEE HYDRAULICS.',
      highlights: [
        'Designed touch-optimized layouts adhering to industrial plant lighting and glare.',
        'Created emergency alert indicators reducing operator response times by 35%.',
        'Built a scalable design system in Figma with 150+ reusable components and states.'
      ],
      tags: ['Industrial HMI', 'Figma Tokens', 'Ergonomics', 'Design System', 'Telemetry']
    },
    {
      id: 'strata-analytics',
      num: 'ENG',
      title: 'StrataAnalytics: Enterprise Intelligence Platform',
      category: 'Full-Stack Web & Data Visualization',
      tagColor: '#8b5cf6',
      badgeColor: '#8b5cf6',
      image: '/projects/analytics_dashboard.jpg',
      htmlUrl: '/industrial-case-studies/case-study-2.html',
      pdfUrl: '/case-studies/pdf/09-strata-analytics.pdf',
      pdfName: '09-strata-analytics.pdf',
      summary: 'Enterprise data visualization suite engineered with React.js and Python at Cognizant. Provides real-time revenue analytics and automated database querying.',
      highlights: [
        'Implemented accessible React dashboard components with smooth keyframe animations.',
        'Integrated Python data processing pipelines to generate automated summary metrics.',
        'Structured optimized MySQL database schemas supporting rapid querying.'
      ],
      tags: ['React.js', 'Python', 'MySQL', 'REST APIs', 'Data Visualization']
    },
    {
      id: 'meditate-ux',
      num: 'HFI',
      title: 'Meditate UX: Usability Research & Mobile Showcase',
      category: 'Certified Usability Analyst (HFI)',
      tagColor: '#10b981',
      badgeColor: '#10b981',
      image: '/projects/usability_study.jpg',
      htmlUrl: '/industrial-case-studies/case-study-3.html',
      pdfUrl: '/case-studies/pdf/10-meditate-ux.pdf',
      pdfName: '10-meditate-ux.pdf',
      summary: 'Complete user experience redesign backed by formal usability testing and cognitive walkthroughs based on Human Factors International (HFI) heuristics.',
      highlights: [
        'Conducted usability testing sessions achieving a 94% task completion rate.',
        'Created design guidelines covering typography, contrast ratios, and dark mode palette.',
        'Delivered high-fidelity Figma prototypes with micro-interactions and transitions.'
      ],
      tags: ['Usability Testing', 'Figma', 'HFI Heuristics', 'Design System']
    }
  ];

  const openModal = (item, defaultMode = 'html') => {
    setSelectedItem(item);
    setModalViewMode(item.htmlUrl ? defaultMode : 'pdf');
  };

  return (
    <section id="projects" className="portfolio-section">
      <div className="section-badge">
        <FolderGit2 size={14} />
        Featured Works &amp; Figma Blueprints
      </div>
      <h2 className="section-title">Design Engineering &amp; Figma Blueprints</h2>
      <p className="section-subtitle">
        Explore interactive Figma workspaces for both the entire portfolio build architecture and live UI project prototypes, alongside the standalone 500+ component design system and engineering platforms.
      </p>

      {/* ===================================================================== */}
      {/* Figma Workspace 1: Portfolio Build Process & Master Design System (0-1)*/}
      {/* ===================================================================== */}
      <div 
        className="glass-card" 
        style={{
          width: '100%',
          maxWidth: '1200px',
          padding: '28px',
          marginBottom: '36px',
          border: '1px solid rgba(139, 92, 246, 0.4)',
          background: 'linear-gradient(145deg, rgba(14, 18, 27, 0.95), rgba(7, 9, 14, 0.98))'
        }}
      >
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '18px'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'rgba(139, 92, 246, 0.18)',
              border: '1px solid rgba(139, 92, 246, 0.4)',
              color: '#c4b5fd',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '8px'
            }}>
              <Palette size={13} />
              <span>Master Portfolio Design System &amp; Build Process</span>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
              Portfolio Build Process &amp; Architecture (Node 0-1)
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: '4px 0 0 0' }}>
              Complete architecture, layout tokens, typography scales, wireframes, and responsive component library engineered for this portfolio.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href="https://www.figma.com/proto/gLSdZYnvOQsSF4d8pKYrt4/Rushmitha-Varshini-%E2%80%94-Projects?node-id=0-1&t=UjdJPDZ7aVl0iAOd-1"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                color: '#ffffff',
                fontSize: '0.84rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(139, 92, 246, 0.35)'
              }}
            >
              <Play size={13} fill="#ffffff" />
              <span>Launch Prototype (0-1)</span>
            </a>

            <a
              href="https://www.figma.com/design/gLSdZYnvOQsSF4d8pKYrt4/Rushmitha-Varshini-%E2%80%94-Projects?node-id=0-1&m=dev&t=UjdJPDZ7aVl0iAOd-1"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '8px 16px', fontSize: '0.84rem' }}
            >
              <span>Inspect Node 0-1</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Live Responsive Figma Embed Frame */}
        <div style={{
          position: 'relative',
          width: '100%',
          paddingTop: '52%',
          borderRadius: '14px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          background: '#090d16',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6)'
        }}>
          <iframe
            title="Portfolio Build Process - Figma Node 0-1"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            src="https://embed.figma.com/proto/gLSdZYnvOQsSF4d8pKYrt4/Rushmitha-Varshini-%E2%80%94-Projects?node-id=0-1&embed-host=share"
            allowFullScreen
          />
        </div>
      </div>

      {/* ===================================================================== */}
      {/* Dedicated Standalone Live Design System View (500+ Components)        */}
      {/* ===================================================================== */}
      <div 
        className="glass-card" 
        style={{
          width: '100%',
          maxWidth: '1200px',
          padding: '28px',
          marginBottom: '36px',
          border: '1px solid rgba(56, 189, 248, 0.4)',
          background: 'linear-gradient(145deg, rgba(14, 18, 27, 0.95), rgba(7, 9, 14, 0.98))'
        }}
      >
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '18px'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'rgba(56, 189, 248, 0.15)',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              color: '#38bdf8',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '8px'
            }}>
              <Box size={13} />
              <span>Interactive Component Library · 523+ Tokens &amp; Variants</span>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
              Master Design System &amp; Live Component Explorer
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: '4px 0 0 0' }}>
              Direct interactive playground showcasing Foundation tokens (Colors, Typography, Spacing, Shadows, Radius, Glass) and Navigation, Buttons, Cards, Gauges &amp; Form elements.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href="/industrial-case-studies/demos/design-system.html"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 18px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #0284c7, #38bdf8)',
                color: '#ffffff',
                fontSize: '0.84rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(2, 132, 199, 0.35)'
              }}
            >
              <Eye size={14} />
              <span>Open Fullscreen Design System</span>
            </a>

            <a
              href="/case-studies/pdf/12-design-system-spec.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '8px 16px', fontSize: '0.84rem', gap: '6px' }}
            >
              <FileText size={14} style={{ color: '#ef4444' }} />
              <span>Design System Spec (PDF)</span>
            </a>
          </div>
        </div>

        {/* Feature Highlights Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
          marginBottom: '18px'
        }}>
          {[
            { label: 'Components', val: '523+ Elements', icon: Box, color: '#38bdf8' },
            { label: 'Foundations', val: '68 Core Tokens', icon: Sliders, color: '#8b5cf6' },
            { label: 'Accessibility', val: 'WCAG AAA Compliant', icon: ShieldCheck, color: '#10b981' },
            { label: 'Theming', val: 'Dual Light/Dark Modes', icon: Palette, color: '#f59e0b' }
          ].map((stat, sIdx) => {
            const IconComp = stat.icon;
            return (
              <div 
                key={sIdx}
                style={{
                  padding: '12px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: `${stat.color}1f`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: stat.color,
                  flexShrink: 0
                }}>
                  <IconComp size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    {stat.val}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Interactive Design System Iframe Frame */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '620px',
          borderRadius: '14px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          background: '#090d16',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6)'
        }}>
          <iframe
            title="Interactive Design System Explorer"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              background: '#090d16'
            }}
            src="/industrial-case-studies/demos/design-system.html"
          />
        </div>
      </div>

      {/* ===================================================================== */}
      {/* Figma Workspace 2: UI Projects & Interactive Prototype Canvas (41-229) */}
      {/* ===================================================================== */}
      <div 
        className="glass-card" 
        style={{
          width: '100%',
          maxWidth: '1200px',
          padding: '28px',
          marginBottom: '40px',
          border: '1px solid rgba(6, 182, 212, 0.35)',
          background: 'linear-gradient(145deg, rgba(14, 18, 27, 0.95), rgba(7, 9, 14, 0.98))'
        }}
      >
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '18px'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'rgba(6, 182, 212, 0.15)',
              border: '1px solid rgba(6, 182, 212, 0.35)',
              color: '#67e8f9',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '8px'
            }}>
              <Compass size={13} />
              <span>UI Projects &amp; Interactive Screen Prototypes</span>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
              UI Projects &amp; Screen Flows (Node 41-229)
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: '4px 0 0 0' }}>
              High-fidelity screen layouts, interactive user journeys, and component token variants for FinFlow, Verdé, Pulse, Nimbus, and Wanderlust.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href="https://www.figma.com/proto/gLSdZYnvOQsSF4d8pKYrt4/Rushmitha-Varshini-%E2%80%94-Projects?node-id=41-229&t=UjdJPDZ7aVl0iAOd-1"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: '#ffffff',
                fontSize: '0.84rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.35)'
              }}
            >
              <Play size={13} fill="#ffffff" />
              <span>Launch Prototype (41-229)</span>
            </a>

            <a
              href="https://www.figma.com/design/gLSdZYnvOQsSF4d8pKYrt4/Rushmitha-Varshini-%E2%80%94-Projects?node-id=41-229&m=dev&t=UjdJPDZ7aVl0iAOd-1"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '8px 16px', fontSize: '0.84rem' }}
            >
              <span>Inspect Node 41-229</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Live Responsive Figma Embed Frame */}
        <div style={{
          position: 'relative',
          width: '100%',
          paddingTop: '52%',
          borderRadius: '14px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          background: '#090d16',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6)'
        }}>
          <iframe
            title="UI Projects - Figma Node 41-229"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            src="https://embed.figma.com/design/gLSdZYnvOQsSF4d8pKYrt4/Rushmitha-Varshini-%E2%80%94-Projects?node-id=41-229&embed-host=share"
            allowFullScreen
          />
        </div>
      </div>

      {/* ===================================================================== */}
      {/* Engineering & Industrial Systems Grid (Without Figma buttons)         */}
      {/* ===================================================================== */}
      <div style={{ width: '100%', maxWidth: '1200px', marginBottom: '14px' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 6px 0' }}>
          Industrial &amp; Full-Stack Systems
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
          Production systems engineered for manufacturing telemetry, enterprise analytics, and usability benchmarks.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '26px',
        maxWidth: '1200px',
        width: '100%'
      }}>
        {engineeringProjects.map((item) => (
          <div 
            key={item.id}
            className="glass-card"
            style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              borderTop: `3px solid ${item.tagColor}`,
              padding: 0
            }}
            onClick={() => openModal(item, 'html')}
          >
            {/* Visual Cover Header */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '180px',
              overflow: 'hidden',
              background: `linear-gradient(135deg, ${item.tagColor}33, rgba(14,18,27,0.95))`
            }}>
              <img
                src={item.image}
                alt={`${item.title} preview`}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  transition: 'transform 0.4s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
              />
              
              {/* Floating Badges */}
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  color: '#ffffff',
                  background: item.tagColor,
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  letterSpacing: '0.06em',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.5)'
                }}>
                  {item.num}
                </span>

                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  background: 'rgba(7, 9, 14, 0.75)',
                  backdropFilter: 'blur(6px)',
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255,255,255,0.15)'
                }}>
                  {item.category}
                </span>
              </div>
            </div>

            {/* Card Content Body */}
            <div style={{ padding: '20px 22px 16px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 8px 0', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '14px' }}>
                  {item.summary}
                </p>

                {/* Key Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '16px' }}>
                  {item.highlights.slice(0, 2).map((hl, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                      <CheckCircle2 size={13} style={{ color: item.tagColor, flexShrink: 0, marginTop: '2px' }} />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag-badge" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Interactive Action Bar (Only View Details & PDF) */}
            <div style={{
              padding: '12px 20px',
              background: 'rgba(0, 0, 0, 0.22)',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px'
            }}>
              <button
                className="btn-primary"
                style={{
                  fontSize: '0.8rem',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  flex: 1,
                  justifyContent: 'center'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(item, 'html');
                }}
              >
                <Eye size={13} />
                <span>View Details</span>
              </button>

              <a
                href={item.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-pdf-badge"
                title={`Open official ${item.pdfName}`}
                onClick={(e) => e.stopPropagation()}
              >
                <FileText size={13} />
                <span>PDF</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Top-Level Portal Modal Pop-Up Viewer */}
      {selectedItem && typeof document !== 'undefined' && createPortal(
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(16px)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }} 
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="glass-card" 
            style={{ 
              maxWidth: '1080px', 
              width: '100%', 
              height: '92vh', 
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden', 
              border: `1.5px solid ${selectedItem.tagColor}`,
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.95)',
              padding: 0
            }} 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header & Tab Navigation */}
            <div style={{
              padding: '14px 20px',
              background: 'rgba(13, 17, 26, 0.95)',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    background: selectedItem.tagColor,
                    padding: '2px 8px',
                    borderRadius: '9999px'
                  }}>
                    {selectedItem.num}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: selectedItem.badgeColor, fontWeight: 700 }}>
                    {selectedItem.category}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', margin: '2px 0 0 0' }}>
                  {selectedItem.title}
                </h3>
              </div>

              {/* View Mode Switcher */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={() => setModalViewMode('html')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: modalViewMode === 'html' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                    border: modalViewMode === 'html' ? '1px solid #8b5cf6' : '1px solid var(--border-subtle)',
                    color: modalViewMode === 'html' ? '#ffffff' : 'var(--text-muted)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  <BookOpen size={13} />
                  <span>Interactive Case Study</span>
                </button>

                <button
                  onClick={() => setModalViewMode('pdf')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: modalViewMode === 'pdf' ? 'rgba(239, 68, 68, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                    border: modalViewMode === 'pdf' ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                    color: modalViewMode === 'pdf' ? '#ffffff' : 'var(--text-muted)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  <FileText size={13} />
                  <span>{selectedItem.pdfName}</span>
                </button>

                {/* Direct Open in New Tab */}
                <a
                  href={modalViewMode === 'html' ? selectedItem.htmlUrl : selectedItem.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="Open in Fullscreen Tab"
                  style={{
                    padding: '6px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none'
                  }}
                >
                  <ExternalLink size={16} />
                </a>

                {/* Close Modal Button */}
                <button 
                  onClick={() => setSelectedItem(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    color: 'var(--text-main)',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '4px'
                  }}
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Modal Body: Active View Render */}
            <div style={{ flex: 1, position: 'relative', width: '100%', height: '100%', background: '#090d16' }}>
              {modalViewMode === 'html' && (
                <iframe
                  title={`${selectedItem.title} - Interactive Case Study`}
                  src={selectedItem.htmlUrl}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    background: '#ffffff'
                  }}
                />
              )}

              {modalViewMode === 'pdf' && (
                <iframe
                  title={`${selectedItem.title} - PDF Document`}
                  src={selectedItem.pdfUrl}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    background: '#1e293b'
                  }}
                />
              )}
            </div>

            {/* Modal Footer Quick Actions */}
            <div style={{
              padding: '12px 20px',
              background: 'rgba(13, 17, 26, 0.95)',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Showing document: <strong style={{ color: 'var(--text-main)' }}>{selectedItem.pdfName}</strong>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <a
                  href={selectedItem.pdfUrl}
                  download={selectedItem.pdfName}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-main)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <Download size={13} />
                  <span>Download {selectedItem.num} PDF</span>
                </a>

                <button
                  className="btn-secondary"
                  style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                  onClick={() => setSelectedItem(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
