import React, { useState } from 'react';
import { Send, Mail, MapPin, Check, Copy, MessageSquare, Sparkles, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const email = 'Rushmithavarshini33@gmail.com';
  const whatsappNumber = '+61 434 455 126';
  const location = 'Melbourne, Victoria, Australia';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setSubmitted(true);
    
    // Confetti celebration effect
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#25D366', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']
    });

    // Format all filled data into clean, structured WhatsApp text message
    const formattedMessage = `*New Portfolio Inquiry for Rushmitha Varshini*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email || 'Not provided'}
📌 *Subject:* ${formData.subject || 'Design & Engineering Collaboration'}

💬 *Message:*
${formData.message}

───────────────
_Sent directly from Portfolio Website_`;

    const whatsappUrl = `https://wa.me/61434455126?text=${encodeURIComponent(formattedMessage)}`;

    // Optional background Netlify Form sync if deployed
    try {
      const netlifyBody = new URLSearchParams({
        'form-name': 'contact',
        ...formData
      }).toString();

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: netlifyBody
      }).catch(() => {});
    } catch (err) {}

    // Open WhatsApp directly in a new tab with the pre-filled message
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 450);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="portfolio-section" style={{ minHeight: '100vh', justifyContent: 'center' }}>
      <div className="section-badge">
        <Send size={14} />
        Get In Touch
      </div>
      <h2 className="section-title">Let's Build Something Exceptional</h2>
      <p className="section-subtitle">
        Whether you are seeking a thoughtful UI/UX designer, an engineering problem-solver, or a full-stack collaborator in Melbourne or globally.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '32px',
        maxWidth: '1100px'
      }}>
        {/* Contact Info & Direct Links Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
              Direct Contact
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '24px' }}>
              I am open to full-time engineering & design roles, contract collaborations, and consulting opportunities.
            </p>

            {/* WhatsApp Direct Card */}
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981'
                }}>
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-emerald)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>WhatsApp Direct</div>
                  <a 
                    href={`https://wa.me/61434455126?text=${encodeURIComponent("Hi Rushmitha, I saw your portfolio and would like to connect!")}`}
                    target="_blank" 
                    rel="noreferrer"
                    style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <a
                href={`https://wa.me/61434455126?text=${encodeURIComponent("Hi Rushmitha, I saw your portfolio and would like to connect!")}`}
                target="_blank" 
                rel="noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: '#ffffff',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 10px rgba(37, 211, 102, 0.3)'
                }}
              >
                <span>Chat</span>
              </a>
            </div>

            {/* Email Card with Copy button */}
            <div style={{
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(124, 58, 237, 0.15)',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)'
                }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</div>
                  <div style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '0.875rem' }}>{email}</div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border-subtle)',
                  color: copied ? 'var(--color-emerald)' : 'var(--text-main)',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Location Card */}
            <div style={{
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(2, 132, 199, 0.12)',
                border: '1px solid rgba(2, 132, 199, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-secondary)'
              }}>
                <MapPin size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</div>
                <div style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '0.925rem' }}>{location}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Form Card */}
        <div className="glass-card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MessageSquare size={18} style={{ color: '#25D366' }} />
            Send a Direct Message
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '24px' }}>
            Fill out the details below — submitting will format your inquiry and connect directly to my WhatsApp.
          </p>

          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '6px', fontWeight: 600 }}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Morgan"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-main)',
                  outline: 'none',
                  fontSize: '0.95rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '6px', fontWeight: 600 }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-main)',
                  outline: 'none',
                  fontSize: '0.95rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '6px', fontWeight: 600 }}>
                Subject / Project Type
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Design Collaboration / Opportunity"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-main)',
                  outline: 'none',
                  fontSize: '0.95rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '6px', fontWeight: 600 }}>
                Your Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project, timeline, or position..."
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-main)',
                  outline: 'none',
                  fontSize: '0.95rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '14px',
                marginTop: '8px',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 6px 25px rgba(37, 211, 102, 0.45)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              {submitted ? (
                <>
                  <Check size={18} />
                  <span>Connecting to WhatsApp...</span>
                </>
              ) : (
                <>
                  <MessageCircle size={18} />
                  <span>Send Directly to WhatsApp</span>
                </>
              )}
            </button>

            <div style={{
              fontSize: '0.785rem',
              color: 'var(--text-dim)',
              textAlign: 'center',
              marginTop: '4px'
            }}>
              Formats your details and connects directly to <strong>Rushmitha on WhatsApp</strong>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
