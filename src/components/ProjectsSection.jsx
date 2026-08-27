import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Sparkles, Layers, ArrowUpRight, Play, Eye, Maximize2 } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showFigmaEmbed, setShowFigmaEmbed] = useState(true);

  const figmaEmbedUrl = "https://embed.figma.com/design/gLSdZYnvOQsSF4d8pKYrt4/Rushmitha-Varshini-%E2%80%94-Projects?node-id=41-229&embed-host=share";
  const figmaDesignUrl = "https://www.figma.com/design/gLSdZYnvOQsSF4d8pKYrt4/Rushmitha-Varshini-%E2%80%94-Projects?node-id=41-229&m=dev&t=UjdJPDZ7aVl0iAOd-1";
  const figmaProtoUrl = "https://www.figma.com/proto/gLSdZYnvOQsSF4d8pKYrt4/Rushmitha-Varshini-%E2%80%94-Projects?node-id=41-229&t=UjdJPDZ7aVl0iAOd-1";

  const projects = [
    {
      title: 'HYDRA-CORE v3.1: Industrial HMI & Telemetry System',
      category: 'Industrial UX / Figma Design',
      image: '/projects/hydraulics_hmi.jpg',
      badge: 'GEE KAY VEE HYDRAULICS',
      badgeColor: '#06b6d4',
      figmaDesign: figmaDesignUrl,
      figmaProto: figmaProtoUrl,
      description: 'High-precision operator control interface designed for heavy industrial hydraulic machinery. Translates complex pressure, flow rate, and temperature telemetry into ergonomic visual components.',
      details: [
        'Designed touch-optimized layouts adhering to industrial lighting and glare conditions.',
        'Created emergency alert indicators reducing operator response times by 35%.',
        'Built a scalable design system in Figma with 150+ reusable components and states.'
      ],
      tags: ['Figma', 'UX Research', 'Industrial HMI', 'Ergonomics', 'Design Systems']
    },
    {
      title: 'StrataAnalytics: Enterprise Intelligence Platform',
      category: 'Full-Stack Web & Data Visualization',
      image: '/projects/analytics_dashboard.jpg',
      badge: 'Cognizant & Full-Stack',
      badgeColor: '#8b5cf6',
      figmaDesign: figmaDesignUrl,
      figmaProto: figmaProtoUrl,
      description: 'Enterprise data visualization suite engineered with React.js and Python. Provides real-time revenue analytics, user cohort analysis, and interactive data filtering over MySQL databases.',
      details: [
        'Implemented responsive, accessible React dashboard components with smooth micro-interactions.',
        'Integrated Python data processing pipelines to generate automated summary metrics.',
        'Structured optimized MySQL database schemas supporting rapid telemetry querying.'
      ],
      tags: ['React.js', 'Python', 'MySQL', 'Data Visualization', 'REST APIs']
    },
    {
      title: 'Meditate UX: Usability Research & Mobile Showcase',
      category: 'Certified Usability Analyst (HFI)',
      image: '/projects/usability_study.jpg',
      badge: 'HFI Certified Case Study',
      badgeColor: '#10b981',
      figmaDesign: figmaDesignUrl,
      figmaProto: figmaProtoUrl,
      description: 'Complete user experience redesign backed by formal usability testing and cognitive walkthroughs. Features wireframe user flows, design system tokens, and high-fidelity mobile prototype screens.',
      details: [
        'Conducted usability testing sessions achieving a 94% task completion rate.',
        'Created design guidelines covering typography (Montserrat), contrast ratios, and dark mode palette.',
        'Delivered high-fidelity Figma prototypes with micro-interactions and smooth transitions.'
      ],
      tags: ['Usability Testing', 'Figma', 'Wireframing', 'HFI Heuristics', 'Design System']
    }
  ];

  return (
    <section id="projects" className="portfolio-section">
      <div className="section-badge">
        <FolderGit2 size={14} />
        Featured Portfolio
      </div>
      <h2 className="section-title">Selected Design & Engineering Works</h2>
      <p className="section-subtitle">
        Explore a curated collection of industrial interfaces, web applications, and live interactive Figma design systems.
      </p>

      {/* ===================================================================== */}
      {/* Interactive Live Figma Workspace Embed Card                           */}
      {/* ===================================================================== */}
      <div 
        className="glass-card" 
        style={{
          width: '100%',
          maxWidth: '1200px',
          padding: '28px',
          marginBottom: '40px',
          border: '1px solid rgba(139, 92, 246, 0.35)',
          background: 'linear-gradient(145deg, rgba(14, 18, 27, 0.95), rgba(7, 9, 14, 0.98))'
        }}
      >
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '20px'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '3px 10px',
              borderRadius: '9999px',
              background: 'rgba(139, 92, 246, 0.15)',
              border: '1px solid rgba(139, 92, 246, 0.35)',
              color: '#c4b5fd',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '6px'
            }}>
              <Sparkles size={12} />
              <span>Live Interactive Workspace</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
              Rushmitha Varshini — Official Figma Projects
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: '4px 0 0 0' }}>
              Interact directly with the live canvas below, zoom in to inspect design tokens, or launch full prototype mode.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href={figmaProtoUrl}
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
                fontSize: '0.85rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.35)',
                transition: 'transform 0.2s ease'
              }}
            >
              <Play size={14} fill="#ffffff" />
              <span>Launch Prototype</span>
            </a>

            <a
              href={figmaDesignUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              <span>Open in Figma</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Live Responsive Figma Embed Frame */}
        <div style={{
          position: 'relative',
          width: '100%',
          paddingTop: '56.25%', // 16:9 Aspect Ratio
          borderRadius: '14px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          background: '#090d16',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6)'
        }}>
          <iframe
            title="Rushmitha Varshini - Figma Projects Canvas"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            src={figmaEmbedUrl}
            allowFullScreen
          />
        </div>
      </div>

      {/* ===================================================================== */}
      {/* Projects Grid                                                         */}
      {/* ===================================================================== */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '28px',
        maxWidth: '1200px',
        width: '100%'
      }}>
        {projects.map((project, index) => (
          <div 
            key={index}
            className="glass-card"
            style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer'
            }}
            onClick={() => setSelectedProject(project)}
          >
            {/* Image Preview Container with Hover Zoom */}
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/9',
              overflow: 'hidden',
              background: '#0e121b'
            }}>
              <img 
                src={project.image} 
                alt={`${project.title} - ${project.category} designed by Rushmitha Varshini`}
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
              />
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                padding: '4px 10px',
                borderRadius: '9999px',
                background: 'rgba(7, 9, 14, 0.85)',
                backdropFilter: 'blur(8px)',
                border: `1px solid ${project.badgeColor}66`,
                color: project.badgeColor,
                fontSize: '0.75rem',
                fontWeight: 600
              }}>
                {project.badge}
              </div>
            </div>

            {/* Content Body */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '4px', marginBottom: '12px' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {project.description}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag-badge" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    className="btn-secondary"
                    style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem', padding: '10px' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    <span>View Details</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <a
                    href={project.figmaProto}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      background: 'rgba(139, 92, 246, 0.15)',
                      border: '1px solid rgba(139, 92, 246, 0.35)',
                      color: '#c4b5fd',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      textDecoration: 'none'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Play size={12} fill="#c4b5fd" />
                    <span>Prototype</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for detailed case view */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(12px)',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }} onClick={() => setSelectedProject(null)}>
          <div 
            className="glass-card" 
            style={{ 
              maxWidth: '780px', 
              width: '100%', 
              maxHeight: '90vh', 
              overflowY: 'auto', 
              padding: '32px',
              border: '1px solid rgba(139, 92, 246, 0.4)'
            }} 
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: selectedProject.badgeColor, fontWeight: 700 }}>
                  {selectedProject.badge}
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '4px' }}>
                  {selectedProject.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: 'var(--text-main)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ✕
              </button>
            </div>

            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              style={{ width: '100%', borderRadius: '12px', marginBottom: '20px', border: '1px solid var(--border-subtle)' }} 
            />

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
              {selectedProject.description}
            </p>

            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px' }}>
              Key Accomplishments & Architecture:
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              {selectedProject.details.map((detail, dIdx) => (
                <li key={dIdx} style={{ display: 'flex', gap: '10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <span style={{ color: selectedProject.badgeColor }}>✦</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {selectedProject.tags.map((t, idx) => (
                <span key={idx} className="tag-badge">{t}</span>
              ))}
            </div>

            {/* Direct Figma Action Triggers */}
            <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '20px',
              padding: '16px',
              background: 'rgba(139, 92, 246, 0.08)',
              borderRadius: '12px',
              border: '1px solid rgba(139, 92, 246, 0.25)'
            }}>
              <a
                href={selectedProject.figmaProto || figmaProtoUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  flex: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px 18px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)'
                }}
              >
                <Play size={16} fill="#ffffff" />
                <span>Launch Figma Prototype</span>
              </a>

              <a
                href={selectedProject.figmaDesign || figmaDesignUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  padding: '12px 18px',
                  fontSize: '0.9rem'
                }}
              >
                <span>Inspect in Figma</span>
                <ExternalLink size={16} />
              </a>
            </div>

            <button 
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => setSelectedProject(null)}
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

