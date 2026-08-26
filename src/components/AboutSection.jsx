import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, GraduationCap, Compass, Layers, CheckCircle2, Cpu, Quote } from 'lucide-react';

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
    <motion.div className="glass-card" style={{ padding: '22px 24px' }} {...reveal(delay)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
        <span style={{ fontSize: '0.8rem', color: tint, fontWeight: 600, background: `${tint}1a`, padding: '2px 9px', borderRadius: '6px' }}>{period}</span>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{place}</span>
      </div>
      <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '4px' }}>{school}</h4>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{detail}</p>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="portfolio-section">
      <div className="section-badge">
        <UserCheck size={14} />
        Background & Philosophy
      </div>
      <h2 className="section-title">Engineering Precision Meets Thoughtful Design</h2>
      <p className="section-subtitle">
        Bridging the gap between robust technical systems and delightfully intuitive digital interfaces.
      </p>

      <div className="about-bento">
        {/* Narrative (spans 2 columns) */}
        <motion.div className="glass-card b-narrative" style={{ padding: '32px' }} {...reveal(0)}>
          <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: '18px' }}>
            <Compass size={22} />
          </div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '14px' }}>Multi-Disciplinary Design Engineer</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.7, marginBottom: '14px' }}>
            With a strong engineering foundation from <strong style={{ color: 'var(--text-main)' }}>RMK Engineering College</strong> and hands-on experience designing industrial systems at <strong style={{ color: 'var(--text-main)' }}>GEE KAY VEE HYDRAULICS</strong>, I specialize in transforming complex workflows into clean, accessible interfaces.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            My tenure at <strong style={{ color: 'var(--text-main)' }}>Cognizant</strong> honed my analytical mindset and programming capabilities, enabling me to collaborate effortlessly with engineering teams and turn high-fidelity Figma concepts into robust, responsive code.
          </p>
        </motion.div>

        {/* Pillars */}
        <Pillar icon={Layers} color="var(--color-secondary)" bg="rgba(6,182,212,0.15)" title="HFI Usability Standards" text="Scientific usability heuristics, cognitive ergonomics, and rigorous testing methodologies to minimize user cognitive friction." delay={0.08} />
        <Pillar icon={Cpu} color="var(--color-primary)" bg="rgba(139,92,246,0.15)" title="Industrial & Web Applications" text="Real-world industrial control interfaces, data dashboards, and modern React web applications with Python backends." delay={0.16} />
        <Pillar icon={CheckCircle2} color="var(--color-emerald)" bg="rgba(16,185,129,0.15)" title="End-to-End Product Lifecycle" text="From stakeholder research and persona mapping to wireframes, hi-fi Figma prototypes, design systems, and frontend build." delay={0.24} />

        {/* Ethos quote */}
        <motion.div className="glass-card" style={{ padding: '28px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(6,182,212,0.08))' }} {...reveal(0.2)}>
          <Quote size={22} style={{ color: 'var(--color-primary)', marginBottom: '10px' }} />
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-main)', lineHeight: 1.45 }}>
            “I design interfaces that engineers trust and operators love — where precision and empathy meet.”
          </p>
          <span style={{ color: 'var(--color-secondary)', fontSize: '0.82rem', marginTop: '10px', fontWeight: 600 }}>— Rushmitha's design ethos</span>
        </motion.div>

        {/* Education */}
        <div className="b-edu">
          <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '-4px' }}>
            <GraduationCap size={18} style={{ color: 'var(--color-secondary)' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-main)' }}>Academic Foundations</h3>
          </div>
          <EduCard period="Jul 2019 – May 2022" place="Chennai, India" school="R.M.K Engineering College" detail="Bachelor of Engineering — Electrical, Electronics & Communications Engineering" tint="#38bdf8" delay={0.08} />
          <EduCard period="Jun 2016 – May 2019" place="India" school="Murugappa Polytechnic College" detail="Diploma of Education — Electronics & Communications" tint="#c4b5fd" delay={0.16} />
        </div>
      </div>
    </section>
  );
}
