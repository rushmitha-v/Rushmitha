import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }
});

function CountUp({ end, suffix = '', duration = 1.5 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf, start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / (duration * 1000), 1);
      setN(Math.round(end * p));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* Small circular gauge for the HMI console (always-dark industrial panel) */
function Gauge({ value, unit, color, label }) {
  const r = 32;
  const circ = 2 * Math.PI * r;
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ position: 'relative', width: '82px', height: '82px', margin: '0 auto 8px' }}>
        <svg width="82" height="82" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="41" cy="41" r={r} fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="7" />
          <motion.circle
            cx="41" cy="41" r={r} fill="none" stroke={color} strokeWidth="7" strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: circ * (1 - value / 100) }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: '#f1f5f9' }}>
          {value}<span style={{ fontSize: '0.6rem', marginLeft: '1px' }}>{unit}</span>
        </div>
      </div>
      <div style={{ fontSize: '0.7rem', color: '#7c8aa0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
    </div>
  );
}

export default function CaseStudySection() {
  const meta = ['Role · Designing Engineer', 'Client · GEE KAY VEE Hydraulics', 'Timeline · 2023–2025', 'Tools · Figma · Design Systems'];
  const steps = [
    { n: '01', h: 'Research', p: 'Contextual inquiry & usability reviews with plant operators.' },
    { n: '02', h: 'Wireframe', p: 'Task flows for diagnostics & cycle configuration.' },
    { n: '03', h: 'Design System', p: '150+ reusable Figma components, states & tokens.' },
    { n: '04', h: 'Validation', p: 'Testing against glare, lighting & response-time targets.' }
  ];
  const metrics = [
    { end: 35, suffix: '%', label: 'Faster operator response' },
    { end: 150, suffix: '+', label: 'Reusable components' },
    { end: 100, suffix: '%', label: 'Touch-optimized layouts' },
    { end: 3, suffix: '', label: 'Machine interfaces shipped' }
  ];

  return (
    <section id="case-study" className="portfolio-section">
      <div className="section-badge" style={{ background: 'rgba(6,182,212,0.14)', borderColor: 'rgba(6,182,212,0.3)', color: 'var(--color-secondary)' }}>
        <Sparkles size={14} />
        Featured Case Study
      </div>
      <h2 className="section-title">HYDRA-CORE v3.1 — Industrial HMI &amp; Telemetry</h2>
      <p className="section-subtitle">A deep dive into the operator control system designed for heavy hydraulic machinery.</p>

      {/* Meta chips */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' }}>
        {meta.map((m, i) => <span key={i} className="tag-badge">{m}</span>)}
      </div>

      {/* Challenge / Approach + HMI console */}
      <div className="cs-grid" style={{ marginBottom: '30px' }}>
        <motion.div className="glass-card" style={{ padding: '28px' }} {...reveal(0)}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '9px' }}>
            <span style={{ width: '4px', height: '18px', borderRadius: '2px', background: 'linear-gradient(var(--color-primary), var(--color-secondary))' }} />
            The Challenge
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
            Plant operators needed to read complex pressure, flow-rate and temperature telemetry at a glance — under harsh industrial lighting and glare, with zero tolerance for input errors.
          </p>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '9px' }}>
            <span style={{ width: '4px', height: '18px', borderRadius: '2px', background: 'linear-gradient(var(--color-primary), var(--color-secondary))' }} />
            The Approach
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Contextual inquiry with operators, touch-optimized ergonomic layouts, high-contrast emergency states, and a scalable Figma design system of 150+ reusable components.
          </p>
        </motion.div>

        {/* HMI Console — intentionally dark industrial panel in both themes */}
        <motion.div style={{ padding: '22px', borderRadius: '18px', background: 'linear-gradient(160deg, #0d1420, #0a0f18)', border: '1px solid rgba(6,182,212,0.22)', boxShadow: '0 20px 50px -20px rgba(0,0,0,0.6)' }} {...reveal(0.12)}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', letterSpacing: '0.1em', color: '#22d3ee', textTransform: 'uppercase' }}>HYDRA-CORE · Operator Console</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '0.68rem', color: '#4ade80', background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.35)', padding: '3px 10px', borderRadius: '9999px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
              SYSTEM NOMINAL
            </span>
          </div>
          <div className="cs-gauges" style={{ marginBottom: '16px' }}>
            <Gauge value={72} unit="bar" color="#38bdf8" label="Pressure" />
            <Gauge value={64} unit="L/m" color="#a78bfa" label="Flow Rate" />
            <Gauge value={48} unit="°C" color="#fbbf24" label="Temp" />
          </div>
          <div style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '12px 14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#7c8aa0', marginBottom: '6px' }}>
              <span>LIVE TELEMETRY</span><span style={{ color: '#4ade80' }}>▲ stable</span>
            </div>
            <svg width="100%" height="46" viewBox="0 0 320 46" preserveAspectRatio="none">
              <defs>
                <linearGradient id="cs-telemetry" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#a78bfa" /><stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
              <polyline fill="none" stroke="url(#cs-telemetry)" strokeWidth="2" points="0,34 26,30 52,36 78,20 104,26 130,12 156,22 182,10 208,24 234,16 260,28 286,14 320,22" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Process steps */}
      <div className="cs-steps" style={{ marginBottom: '30px' }}>
        {steps.map((s, i) => (
          <motion.div key={i} className="glass-card" style={{ padding: '20px' }} {...reveal(Math.min(i * 0.08, 0.32))}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: '10px' }}>{s.n}</div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>{s.h}</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{s.p}</p>
          </motion.div>
        ))}
      </div>

      {/* Outcome metrics */}
      <div className="cs-metrics">
        {metrics.map((m, i) => (
          <motion.div key={i} className="glass-card" style={{ padding: '22px', textAlign: 'center' }} {...reveal(Math.min(i * 0.08, 0.32))}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.3rem', fontWeight: 700, lineHeight: 1, background: 'linear-gradient(120deg, var(--color-primary), var(--color-secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              <CountUp end={m.end} suffix={m.suffix} />
            </div>
            <small style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '8px' }}>{m.label}</small>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
