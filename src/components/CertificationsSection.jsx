import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Languages } from 'lucide-react';

export default function CertificationsSection() {
  const certifications = [
    {
      title: 'Certified Usability Analyst (CUA)',
      issuer: 'Human Factors International (HFI Training)',
      issued: 'Issued Aug 2022',
      credentialId: 'Verified Usability Analyst',
      description: 'Mastery of cognitive psychology principles, user-centered design, usability testing methodology, and interaction standards.',
      accent: '#06b6d4'
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM',
      issued: 'Issued Jul 2023',
      credentialId: 'IBM Verified Credential',
      description: 'Proficiency in Python data structures, pandas analysis, data visualization, and computational problem solving.',
      accent: '#8b5cf6'
    },
    {
      title: 'UX Designer Certification',
      issuer: 'Besant Technologies',
      issued: 'Professional Certification',
      credentialId: 'BDZ82783',
      description: 'Comprehensive UI/UX design training including Figma wireframing, interactive prototyping, and design systems.',
      accent: '#10b981'
    },
    {
      title: 'Fullstack with Python',
      issuer: 'Besant Technologies',
      issued: 'Professional Certification',
      credentialId: 'BDZ82783',
      description: 'End-to-end fullstack development encompassing Python backend architectures, databases, and responsive web frontend.',
      accent: '#f59e0b'
    }
  ];

  const languages = [
    { name: 'Telugu', level: 'Native or bilingual proficiency', rating: 5 },
    { name: 'Tamil', level: 'Full professional proficiency', rating: 5 },
    { name: 'English', level: 'Professional working proficiency', rating: 4 },
    { name: 'Hindi', level: 'Professional working proficiency', rating: 4 }
  ];

  return (
    <section id="certifications" className="portfolio-section">
      <div className="section-badge">
        <Award size={14} />
        Credentials & Linguistic Mastery
      </div>
      <h2 className="section-title">Certifications &amp; Licenses</h2>
      <p className="section-subtitle">
        Industry-recognized certifications confirming rigorous usability analysis, design thinking, and data science capabilities.
      </p>

      {/* Certifications Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1080px', marginBottom: '48px' }}>
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="glass-card"
            style={{ padding: '26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: Math.min(index * 0.08, 0.32), ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: cert.accent }} />
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                <span style={{
                  fontSize: '0.72rem', fontWeight: 600, color: cert.accent,
                  background: `${cert.accent}1f`, padding: '3px 10px', borderRadius: '9999px', border: `1px solid ${cert.accent}44`
                }}>
                  {cert.issuer}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{cert.issued}</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>{cert.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>{cert.description}</p>
            </div>
            <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Credential ID: <strong style={{ color: 'var(--text-main)' }}>{cert.credentialId}</strong>
              </span>
              <CheckCircle size={15} style={{ color: cert.accent }} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Languages */}
      <motion.div
        className="glass-card"
        style={{ padding: '28px', maxWidth: '1080px' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '20px' }}>
          <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(139,92,246,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
            <Languages size={18} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>Multilingual Proficiency</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Effective global communication in multi-cultural and international engineering environments.</p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {languages.map((lang, idx) => (
            <div key={idx} style={{ background: 'rgba(148,163,184,0.06)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>{lang.name}</span>
                <div style={{ display: 'flex', gap: '4px' }}>
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <div key={dot} style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: dot <= lang.rating ? 'var(--color-primary)' : 'rgba(148,163,184,0.25)' }} />
                  ))}
                </div>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{lang.level}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
