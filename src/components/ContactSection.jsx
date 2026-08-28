import React, { useState } from 'react';
import { Send, Mail, MapPin, Check, Copy, MessageSquare, AlertCircle, Loader2, MessageCircle, Phone, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { useTheme } from '../context/ThemeContext';

const LinkedInIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_d3hltdr';
const EMAILJS_TEMPLATE_ID = 'template_ky9hp1n';
const EMAILJS_PUBLIC_KEY = 'o8zb1rwfXfZDa112F';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { showToast, triggerConfetti } = useTheme();

  const email = 'Rushmithavarshini33@gmail.com';
  const phone = '+61 434 455 126';
  const linkedinUrl = 'https://www.linkedin.com/in/rushmitha-varshini-ys-5039b4283';
  const location = 'Melbourne, Victoria, Australia';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    showToast('Email copied: Rushmithavarshini33@gmail.com', 'copy');
    triggerConfetti({ particleCount: 30, spread: 50 });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setPhoneCopied(true);
    showToast('Phone number copied: +61 434 455 126', 'copy');
    triggerConfetti({ particleCount: 30, spread: 50 });
    setTimeout(() => setPhoneCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setSending(true);
    setErrorMsg('');
    setSuccess(false);

    // Dynamic timestamp formatted nicely
    const currentTimestamp = new Date().toLocaleString('en-AU', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Australia/Melbourne'
    });

    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      email: formData.email,
      from_email: formData.email,
      reply_to: formData.email,
      title: formData.subject || 'Portfolio Collaboration Inquiry',
      subject: formData.subject || 'Portfolio Collaboration Inquiry',
      message: formData.message,
      time: currentTimestamp,
      to_email: 'Rushmithavarshini33@gmail.com'
    };

    try {
      // 1. Send email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Trigger celebration confetti
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#38bdf8']
      });

      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Auto-hide success message after 7 seconds
      setTimeout(() => setSuccess(false), 7000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      // Fallback: offer direct mailto if network or template mismatch occurs
      setErrorMsg(
        err?.text || 'Failed to send message via email service. You can also reach out directly to Rushmithavarshini33@gmail.com'
      );
    } finally {
      setSending(false);
    }
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

            {/* LinkedIn Direct Card */}
            <div style={{
              background: 'rgba(10, 102, 194, 0.08)',
              border: '1px solid rgba(10, 102, 194, 0.28)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(10, 102, 194, 0.18)',
                  border: '1px solid rgba(10, 102, 194, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0a66c2',
                  flexShrink: 0
                }}>
                  <LinkedInIcon size={20} color="#0a66c2" />
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.72rem', color: '#0a66c2', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Professional Network</div>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', wordBreak: 'break-all' }}
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <a
                href={linkedinUrl}
                target="_blank" 
                rel="noreferrer"
                style={{
                  background: '#0a66c2',
                  color: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 10px rgba(10, 102, 194, 0.25)',
                  flexShrink: 0
                }}
              >
                <ExternalLink size={14} />
                <span>Connect</span>
              </a>
            </div>

            {/* Email Card with Copy button */}
            <div style={{
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(139, 92, 246, 0.2)',
                  border: '1px solid rgba(139, 92, 246, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  flexShrink: 0
                }}>
                  <Mail size={19} />
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Direct</div>
                  <a
                    href={`mailto:${email}`}
                    style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', wordBreak: 'break-all' }}
                  >
                    {email}
                  </a>
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
                  gap: '6px',
                  flexShrink: 0
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* WhatsApp Direct Card */}
            <div style={{
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981',
                  flexShrink: 0
                }}>
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--color-emerald)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Instant Messaging</div>
                  <div style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '0.95rem' }}>WhatsApp</div>
                </div>
              </div>

              <a
                href={`https://wa.me/61434455126?text=${encodeURIComponent("Hi Rushmitha, I saw your portfolio and would like to connect!")}`}
                target="_blank" 
                rel="noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 10px rgba(37, 211, 102, 0.25)',
                  flexShrink: 0
                }}
              >
                <MessageCircle size={14} />
                <span>Chat on WhatsApp</span>
              </a>
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
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(2, 132, 199, 0.12)',
                border: '1px solid rgba(2, 132, 199, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-secondary)',
                flexShrink: 0
              }}>
                <MapPin size={19} />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</div>
                <div style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '0.925rem' }}>{location}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Form Card -> Sends Direct Email via EmailJS */}
        <div className="glass-card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Mail size={20} style={{ color: 'var(--color-primary)' }} />
            Send a Direct Email
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '20px' }}>
            Fill out the form below to send an email inquiry directly to <strong>Rushmithavarshini33@gmail.com</strong>.
          </p>

          {/* Success Banner */}
          {success && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 18px',
              borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              color: '#34d399',
              fontSize: '0.9rem',
              marginBottom: '18px'
            }}>
              <Check size={20} style={{ flexShrink: 0 }} />
              <div>
                <strong>Message Sent Successfully!</strong>
                <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Thank you for reaching out. Rushmitha will get back to you shortly.</div>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {errorMsg && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 18px',
              borderRadius: '10px',
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              color: '#f87171',
              fontSize: '0.88rem',
              marginBottom: '18px'
            }}>
              <AlertCircle size={20} style={{ flexShrink: 0 }} />
              <div>{errorMsg}</div>
            </div>
          )}

          <form 
            name="contact" 
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '6px', fontWeight: 600 }}>
                Your Name <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                disabled={sending}
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
                Email Address <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                disabled={sending}
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
                disabled={sending}
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. UI/UX Design Collaboration / Role Opportunity"
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
                Your Message <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <textarea
                name="message"
                required
                rows={4}
                disabled={sending}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project, requirements, timeline, or position..."
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
              disabled={sending}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '14px',
                marginTop: '6px',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 6px 25px rgba(139, 92, 246, 0.45)',
                cursor: sending ? 'not-allowed' : 'pointer',
                opacity: sending ? 0.75 : 1,
                transition: 'all 0.25s ease'
              }}
            >
              {sending ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : success ? (
                <>
                  <Check size={18} />
                  <span>Message Sent!</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Email</span>
                </>
              )}
            </button>

            <div style={{
              fontSize: '0.785rem',
              color: 'var(--text-dim)',
              textAlign: 'center',
              marginTop: '4px'
            }}>
              Delivered securely to <strong>rushmithavarshini33@gmail.com</strong>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

