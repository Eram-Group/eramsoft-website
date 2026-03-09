'use client';

import { useEffect, useState } from 'react';

const THEMES = [
  {
    id: 'navy-orange',
    label: 'Navy & Orange',
    preview: ['#1b2a4a', '#e8853b'],
    vars: {
      '--accent': '#e8853b',
      '--accent-dark': '#d4752f',
      '--accent-rgb': '232, 133, 59',
      '--primary-dark': '#1b2a4a',
      '--primary-rgb': '27, 42, 74',
      '--hero-bg': '#0a0c12',
      '--hero-overlay-rgb': '10, 12, 18',
      '--section-bg-from': '#e8e4df',
      '--section-bg-mid': '#f0ece7',
      '--section-bg-to': '#f5f3f0',
      '--card-title': '#1b2a4a',
      '--card-desc': '#5a6375',
      '--accent-gradient-end': 'rgba(232, 133, 59, 0.3)',
    },
  },
  {
    id: 'blue-cyan',
    label: 'Blue & Cyan',
    preview: ['#0f172a', '#06b6d4'],
    vars: {
      '--accent': '#06b6d4',
      '--accent-dark': '#0891b2',
      '--accent-rgb': '6, 182, 212',
      '--primary-dark': '#0f172a',
      '--primary-rgb': '15, 23, 42',
      '--hero-bg': '#0f172a',
      '--hero-overlay-rgb': '15, 23, 42',
      '--section-bg-from': '#cbd5e1',
      '--section-bg-mid': '#e2e8f0',
      '--section-bg-to': '#f1f5f9',
      '--card-title': '#0f172a',
      '--card-desc': '#475569',
      '--accent-gradient-end': 'rgba(6, 182, 212, 0.3)',
    },
  },
  {
    id: 'charcoal-emerald',
    label: 'Charcoal & Emerald',
    preview: ['#1a1a2e', '#10b981'],
    vars: {
      '--accent': '#10b981',
      '--accent-dark': '#059669',
      '--accent-rgb': '16, 185, 129',
      '--primary-dark': '#1a1a2e',
      '--primary-rgb': '26, 26, 46',
      '--hero-bg': '#1a1a2e',
      '--hero-overlay-rgb': '26, 26, 46',
      '--section-bg-from': '#a7f3d0',
      '--section-bg-mid': '#d1fae5',
      '--section-bg-to': '#f0fdf4',
      '--card-title': '#1a1a2e',
      '--card-desc': '#4b5563',
      '--accent-gradient-end': 'rgba(16, 185, 129, 0.3)',
    },
  },
] as const;

function applyTheme(themeId: string) {
  const theme = THEMES.find((t) => t.id === themeId);
  if (!theme) return;
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

export default function ThemeSwitcher() {
  const [active, setActive] = useState('navy-orange');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setActive(saved);
      applyTheme(saved);
    }
  }, []);

  function switchTheme(id: string) {
    setActive(id);
    applyTheme(id);
    localStorage.setItem('theme', id);
    setOpen(false);
  }

  return (
    <div style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 9999 }}>
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            right: 0,
            background: 'rgba(15, 15, 20, 0.95)',
            backdropFilter: 'blur(16px)',
            borderRadius: 16,
            padding: '16px 18px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            minWidth: 200,
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <span
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.4)',
              textTransform: 'uppercase' as const,
              marginBottom: 4,
            }}
          >
            Choose Theme
          </span>
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => switchTheme(t.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '10px 14px',
                borderRadius: 10,
                border:
                  active === t.id
                    ? `1.5px solid ${t.preview[1]}`
                    : '1.5px solid rgba(255,255,255,0.06)',
                background:
                  active === t.id ? 'rgba(255,255,255,0.06)' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              <div style={{ display: 'flex', gap: 4 }}>
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: t.preview[0],
                    border: '1.5px solid rgba(255,255,255,0.15)',
                  }}
                />
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: t.preview[1],
                    border: '1.5px solid rgba(255,255,255,0.15)',
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color:
                    active === t.id ? '#fff' : 'rgba(255,255,255,0.55)',
                }}
              >
                {t.label}
              </span>
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label="Switch theme"
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: 'rgba(15, 15, 20, 0.9)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.1)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,0,0,0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </button>
    </div>
  );
}
