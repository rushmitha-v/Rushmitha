import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, GraduationCap, Compass, Layers, CheckCircle2, Cpu, Quote, Download, ExternalLink } from 'lucide-react';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }
});

function Pillar({ icon: Icon, color, bg, title, text, delay }) {
  return (
    <motion.div className="glass-card" style={{ padding: '24px' }} {...reveal(delay)}>
      <div style={{ width: '42px', height: '42px', borderRadius: '11px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color, marginBottom: '14px' }}>
        <Icon size={20} />
      </div>
      <h4 style={{ fontSize: '1.08rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>{title}</h4>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{text}</p>
    </motion.div>
  );
}

function EduCard({ period, place, school, detail, tint, delay }) {
  return (
    <motion.div className="glass-card" style={{ padding: '20px 22px' }} {...reveal(delay)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', flexWrap: 'wrap', gap: '4px' }}>
        <span style={{ fontSize: '0.78rem', color: tint, fontWeight: 700, background: `${tint}1a`, padding: '2px 9px', borderRadius: '6px' }}>{period}</span>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{place}</span>
      </div>
      <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>{school}</h4>
      <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>{detail}</p>
    </motion.div>
  );
}

export default function AboutSection() {
  const resumeUrl = '/Rushmitha_Varshini_Resume.pdf';

  return (
    <section id="about" className="portfolio-section">
      <div className="section-badge">
        <UserCheck size={14} />
        Background & Philosophy
      </div>
      <h2 className="section-title">Engineering Precision Meets Thoughtful Design</h2>
      <p className="section-subtitle">
        Bridging the gap between robust technical systems, operations management, and delightfully intuitive digital interfaces.
      </p>

      <div className="about-bento">
        {/* Narrative (spans 2 columns) */}
        <motion.div className="glass-card b-narrative" style={{ padding: '32px' }} {...reveal(0)}>
          <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: '18px' }}>
            <Compass size={22} />
          </div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '14px' }}>Multi-Disciplinary Design Engineer</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.7, marginBottom: '14px' }}>
            With a strong foundation in <strong style={{ color: 'var(--text-main)' }}>Electronics & Communication Engineering (RMK Engineering College, Anna University)</strong> and an <strong style={{ color: 'var(--text-main)' }}>MBA in Operations Management and Information Technology (NIBM Global)</strong>, I combine engineering rigor with business acumen.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '22px' }}>
            My hands-on experience spans customer service, ERP/CRM administration, and sales operations at <strong style={{ color: 'var(--text-main)' }}>Accent Aluminium Windows and Doors (Melbourne, Australia)</strong>, industrial HMI design at <strong style={{ color: 'var(--text-main)' }}>GEE KAY VEE HYDRAULICS</strong>, and software engineering analysis at <strong style={{ color: 'var(--text-main)' }}>Cognizant</strong>.
          </p>

          {/* Attached Resume CTA Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={resumeUrl}
              download="Rushmitha_Varshini_Resume.pdf"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.875rem',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 24px rgba(139, 92, 246, 0.35)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              <Download size={16} />
              <span>Download Resume (PDF)</span>
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.06)',
                color: 'var(--text-main)',
                fontWeight: 600,
                fontSize: '0.875rem',
                border: '1px solid var(--border-subtle)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              <ExternalLink size={15} />
              <span>View PDF in New Tab</span>
            </a>
          </div>
        </motion.div>

        {/* Pillars */}
        <Pillar icon={Layers} color="var(--color-secondary)" bg="rgba(6,182,212,0.15)" title="HFI Usability Standards" text="Scientific usability heuristics, cognitive ergonomics, and rigorous testing methodologies to minimize user cognitive friction." delay={0.08} />
        <Pillar icon={Cpu} color="var(--color-primary)" bg="rgba(139,92,246,0.15)" title="Industrial & Web Applications" text="Real-world industrial control interfaces, data dashboards, and modern React web applications with Python backends." delay={0.16} />
        <Pillar icon={CheckCircle2} color="var(--color-emerald)" bg="rgba(16,185,129,0.15)" title="End-to-End Product Lifecycle" text="From stakeholder research and persona mapping to wireframes, hi-fi Figma prototypes, design systems, and frontend build." delay={0.24} />

        {/* Ethos quote */}
        <motion.div className="glass-card" style={{ padding: '28px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(6,182,212,0.08))' }} {...reveal(0.2)}>
          <Quote size={22} style={{ color: 'var(--color-primary)', marginBottom: '10px' }} />
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-main)', lineHeight: 1.45 }}>
            “I design interfaces that engineers trust and operators love — where precision, business strategy, and empathy meet.”
          </p>
          <span style={{ color: 'var(--color-secondary)', fontSize: '0.82rem', marginTop: '10px', fontWeight: 600 }}>— Rushmitha's design ethos</span>
        </motion.div>

        {/* Education */}
        <div className="b-edu">
          <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '-4px' }}>
            <GraduationCap size={18} style={{ color: 'var(--color-secondary)' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-main)' }}>Academic Foundations</h3>
          </div>
          <EduCard period="Nov 2020 – Nov 2022" place="India" school="NIBM Global" detail="Master of Business Administration (MBA) in Operations Management and Information Technology — GPA: 84/100" tint="#10b981" delay={0.06} />
          <EduCard period="Jul 2019 – May 2022" place="Chennai, India" school="RMK Engineering College (Anna University)" detail="Bachelor of Engineering (BE) — Electronics and Communication Engineering — GPA: 8.8/10" tint="#38bdf8" delay={0.12} />
          <EduCard period="May 2016 – Apr 2018" place="Chennai, India" school="Murugappa Polytechnic College (DOTE)" detail="Diploma in Electronics and Communication Engineering — GPA: 8.5/10" tint="#c4b5fd" delay={0.18} />
        </div>
      </div>
    </section>
  );
}
