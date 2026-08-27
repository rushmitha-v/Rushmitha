import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, Copy, Palette, Info } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ToastNotification() {
  const { toasts } = useTheme();

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      style={{
        position: 'fixed',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        pointerEvents: 'none',
        width: '90%',
        maxWidth: '420px'
      }}
    >
      <AnimatePresence>
        {toasts.map((toast) => {
          let Icon = Info;
          let badgeBg = 'rgba(139, 92, 246, 0.2)';
          let badgeBorder = 'rgba(139, 92, 246, 0.4)';
          let iconColor = '#8b5cf6';

          if (toast.type === 'copy') {
            Icon = Copy;
            badgeBg = 'rgba(16, 185, 129, 0.2)';
            badgeBorder = 'rgba(16, 185, 129, 0.4)';
            iconColor = '#10b981';
          } else if (toast.type === 'celebrate') {
            Icon = Sparkles;
            badgeBg = 'rgba(245, 158, 11, 0.2)';
            badgeBorder = 'rgba(245, 158, 11, 0.4)';
            iconColor = '#f59e0b';
          } else if (toast.type === 'palette') {
            Icon = Palette;
            badgeBg = 'rgba(6, 182, 212, 0.2)';
            badgeBorder = 'rgba(6, 182, 212, 0.4)';
            iconColor = '#06b6d4';
          } else if (toast.type === 'success') {
            Icon = CheckCircle2;
            badgeBg = 'rgba(16, 185, 129, 0.2)';
            badgeBorder = 'rgba(16, 185, 129, 0.4)';
            iconColor = '#10b981';
          }

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                pointerEvents: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 18px',
                borderRadius: '9999px',
                background: 'rgba(15, 23, 42, 0.94)',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${badgeBorder}`,
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.65)',
                color: '#ffffff',
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.01em'
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: badgeBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: iconColor,
                  flexShrink: 0
                }}
              >
                <Icon size={15} />
              </div>
              <span>{toast.message}</span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>,
    document.body
  );
}
