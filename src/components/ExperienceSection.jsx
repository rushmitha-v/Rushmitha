import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Designing Engineer',
      company: 'GEE KAY VEE HYDRAULICS PRIVATE LIMITED',
      type: 'Full-time',
      duration: 'Jun 2023 - Jan 2025 · 1 yr 8 mos',
      location: 'Chennai, Tamil Nadu, India',
      description: 'Led user experience (UX) research and high-fidelity interface design using Figma for industrial hydraulic systems and technical machinery interfaces.',
      highlights: [
        'Designed human-machine interface (HMI) dashboards in Figma to streamline machine diagnostics and pressure telemetry.',
        'Conducted contextual inquiry and usability reviews with plant operators to reduce input errors and speed up cycle configuration.',
        'Collaborated with hardware and software engineering teams to guarantee production feasibility and technical accuracy.',
        'Developed standardized UI component libraries and design tokens in Figma for cross-project consistency.'
      ],
      skills: ['User Experience (UX)', 'Figma', 'Product Design', 'Industrial HMI', 'System Telemetry', 'Prototyping'],
      accent: 'var(--color-primary)'
    },
    {
      role: 'Programmer Analyst Trainee',
      company: 'Cognizant',
      type: 'Apprenticeship',
      duration: 'Jan 2022 - Jun 2022 · 6 mos',
      location: 'Remote',
      description: 'Underwent intensive technical training and contributed to programming analysis, software engineering, and database verification for enterprise applications.',
      highlights: [
        'Analyzed technical specifications and built software modules using Python and web technologies.',
        'Engineered structured MySQL relational database queries and data validation routines.',
        'Participated in agile sprints, code reviews, automated unit testing, and technical documentation.',
        'Strengthened analytical problem-solving and software architecture best practices.'
      ],
      skills: ['Python', 'SQL / MySQL', 'Data Structures', 'Software Engineering', 'Analytical Thinking', 'Agile'],
      accent: 'var(--color-secondary)'
    }
  ];

  return (
    <section id="experience" className="portfolio-section">
      <div className="section-badge">
        <Briefcase size={14} />
        Career Journey
      </div>
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-subtitle">
        Proven track record of engineering solutions, user-centered interface designs, and rigorous software development.
      </p>

      {/* Glowing vertical timeline */}
      <div style={{ position: 'relative', paddingLeft: '46px', maxWidth: '1000px' }}>
        {/* Spine */}
        <div style={{
          position: 'absolute', left: '15px', top: '8px', bottom: '8px', width: '2px',
          background: 'linear-gradient(var(--color-primary), var(--color-secondary), transparent)'
        }} />

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            style={{ position: 'relative', marginBottom: idx === experiences.length - 1 ? 0 : '28px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Glowing node */}
            <motion.div
              style={{
                position: 'absolute', left: '-37px', top: '30px', width: '16px', height: '16px', borderRadius: '50%',
                background: exp.accent, border: '3px solid var(--bg-dark)',
                boxShadow: `0 0 0 4px rgba(139,92,246,0.18), 0 0 16px ${exp.accent}`, zIndex: 2
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: idx * 0.1 + 0.2, type: 'spring', stiffness: 260, damping: 18 }}
            />

            <div className="glass-card" style={{ padding: '30px 32px', borderLeft: `4px solid ${exp.accent}` }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '5px' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>{exp.role}</h3>
                    <span style={{
                      fontSize: '0.72rem', padding: '3px 10px', borderRadius: '9999px',
                      background: 'rgba(139,92,246,0.14)', border: `1px solid ${exp.accent}`, color: exp.accent, fontWeight: 600
                    }}>
                      {exp.type}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-muted)' }}>{exp.company}</h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '5px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--text-muted)', background: 'rgba(148,163,184,0.1)', padding: '4px 10px', borderRadius: '6px' }}>
                    <Calendar size={13} style={{ color: exp.accent }} />
                    {exp.duration}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                    <MapPin size={12} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '18px' }}>{exp.description}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
                {exp.highlights.map((h, hIdx) => (
                  <div key={hIdx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <CheckCircle size={16} style={{ color: exp.accent, flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>{h}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.skills.map((s, sIdx) => (
                  <span key={sIdx} className="tag-badge">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
