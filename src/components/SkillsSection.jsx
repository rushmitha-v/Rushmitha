import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Sparkles } from 'lucide-react';

/* Animated radial progress ring (theme-aware via CSS variables) */
function RadialRing({ value, label, desc, gid }) {
  const r = 56;
  const circ = 2 * Math.PI * r;
  return (
    <motion.div
      className="glass-card"
      style={{ padding: '30px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center' }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div style={{ position: 'relative', width: '132px', height: '132px' }}>
        <svg width="132" height="132" style={{ transform: 'rotate(-90deg)' }}>
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-secondary)" />
            </linearGradient>
          </defs>
          <circle cx="66" cy="66" r={r} fill="none" stroke="rgba(148,163,184,0.15)" strokeWidth="11" />
          <motion.circle
            cx="66" cy="66" r={r} fill="none" stroke={`url(#${gid})`} strokeWidth="11" strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: circ * (1 - value / 100) }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 700, color: 'var(--text-main)' }}>
          {value}%
        </div>
      </div>
      <div>
        <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '4px' }}>{label}</h4>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', maxWidth: '210px' }}>{desc}</p>
      </div>
    </motion.div>
  );
}

function SkillBar({ skill, index }) {
  const pct = parseInt(skill.level, 10);
  return (
    <motion.div
      className="glass-card"
      style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3), ease: [0.16, 1, 0.3, 1] }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <h4 style={{ fontSize: '1.02rem', fontWeight: 600, color: 'var(--text-main)' }}>{skill.name}</h4>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-secondary)' }}>{skill.level}</span>
        </div>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '14px' }}>{skill.desc}</p>
      </div>
      <div style={{ width: '100%', height: '6px', background: 'rgba(148,163,184,0.15)', borderRadius: '3px', overflow: 'hidden' }}>
        <motion.div
          style={{ height: '100%', borderRadius: '3px', background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))' }}
          initial={{ width: '0%' }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const skillCategories = [
    {
      id: 'design', label: 'UI/UX & Design', icon: Palette,
      skills: [
        { name: 'UI / UX Design', level: '95%', desc: 'User-centered design, user journeys & design heuristics' },
        { name: 'Figma', level: '95%', desc: 'Auto-layout, interactive components, tokens & style guides' },
        { name: 'Usability Evaluation', level: '90%', desc: 'HFI certified cognitive walkthroughs & testing' },
        { name: 'Wireframing & Prototyping', level: '92%', desc: 'Low to high-fidelity clickable interactive prototypes' },
        { name: 'Web Application Design', level: '90%', desc: 'Responsive web systems and dashboard layouts' },
        { name: 'Industrial HMI Design', level: '88%', desc: 'Operator telemetry, valve controls & safety states' }
      ]
    },
    {
      id: 'frontend', label: 'Frontend & Web', icon: Code,
      skills: [
        { name: 'React.js', level: '88%', desc: 'Hooks, functional components, state & SPA lifecycle' },
        { name: 'HTML5 / Modern Semantics', level: '95%', desc: 'Accessible structures, SEO tags & canvas API' },
        { name: 'CSS3 / Vanilla CSS', level: '92%', desc: 'Glassmorphism, CSS grid/flexbox & smooth keyframes' },
        { name: 'JavaScript (ES6+)', level: '85%', desc: 'Async/await, DOM events, animations & API consumption' },
        { name: 'Responsive Layouts', level: '95%', desc: 'Mobile-first design across desktop, tablet & mobile' }
      ]
    },
    {
      id: 'backend', label: 'Backend & Data', icon: Database,
      skills: [
        { name: 'Python (Programming)', level: '85%', desc: 'Data structures, script automation & data manipulation' },
        { name: 'MySQL', level: '82%', desc: 'Relational schemas, queries, joins & data normalization' },
        { name: 'Python for Data Science', level: '84%', desc: 'IBM certified data visualization & analysis' },
        { name: 'Full-Stack Integration', level: '82%', desc: 'Connecting frontend clients with database backends' }
      ]
    }
  ];

  const rings = [
    { value: 95, label: 'UI / UX Design', desc: 'User-centered design, journeys & design heuristics' },
    { value: 95, label: 'Figma', desc: 'Auto-layout, interactive components & tokens' },
    { value: 95, label: 'Responsive Design', desc: 'Mobile-first across desktop, tablet & mobile' }
  ];

  const displayedSkills = activeTab === 'all'
    ? skillCategories.flatMap(c => c.skills)
    : skillCategories.find(c => c.id === activeTab)?.skills || [];

  return (
    <section id="skills" className="portfolio-section">
      <div className="section-badge">
        <Sparkles size={14} />
        Core Competencies
      </div>
      <h2 className="section-title">Technical &amp; Design Skills</h2>
      <p className="section-subtitle">
        A versatile toolkit bridging aesthetic elegance with structured technical problem solving.
      </p>

      {/* Headline radial rings */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', maxWidth: '1080px', marginBottom: '36px' }}>
        {rings.map((r, i) => (
          <RadialRing key={i} value={r.value} label={r.label} desc={r.desc} gid={`skill-ring-${i}`} />
        ))}
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
        <button
          onClick={() => setActiveTab('all')}
          style={{
            padding: '8px 16px', borderRadius: '9999px',
            background: activeTab === 'all' ? 'linear-gradient(135deg, var(--color-primary), #6366f1)' : 'rgba(148,163,184,0.08)',
            border: activeTab === 'all' ? '1px solid rgba(255,255,255,0.2)' : '1px solid var(--border-subtle)',
            color: activeTab === 'all' ? '#ffffff' : 'var(--text-muted)',
            fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s ease'
          }}
        >
          All Skills ({skillCategories.flatMap(c => c.skills).length})
        </button>
        {skillCategories.map(cat => {
          const Icon = cat.icon;
          const active = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '9999px',
                background: active ? 'linear-gradient(135deg, var(--color-primary), #6366f1)' : 'rgba(148,163,184,0.08)',
                border: active ? '1px solid rgba(255,255,255,0.2)' : '1px solid var(--border-subtle)',
                color: active ? '#ffffff' : 'var(--text-muted)',
                fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s ease'
              }}
            >
              <Icon size={14} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', maxWidth: '1080px' }}>
        {displayedSkills.map((skill, index) => (
          <SkillBar key={`${activeTab}-${skill.name}`} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}
