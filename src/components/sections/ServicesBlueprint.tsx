'use client';

import { useEffect, useRef, useState } from 'react';
import './services-blueprint.css';

/* ══════════════════════════════════════
   Services Data
   ══════════════════════════════════════ */

const SERVICES = [
  {
    title: 'Web Development',
    desc: 'Scalable, performant web applications built with modern frameworks and clean architecture.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <ellipse cx="12" cy="12" rx="4" ry="10" />
        <path d="M2 12h20" />
        <path d="M4.5 6.5h15" />
        <path d="M4.5 17.5h15" />
      </svg>
    ),
  },
  {
    title: 'Mobile Application',
    desc: 'Native and cross-platform mobile experiences crafted for seamless user engagement.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
        <line x1="9" y1="6" x2="15" y2="6" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    desc: 'Research-driven interfaces that balance aesthetic refinement with intuitive usability.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="9" x2="9" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Cloud Solutions',
    desc: 'Resilient cloud infrastructure designed for scalability, security, and operational efficiency.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    title: 'AI & Machine Learning',
    desc: 'Intelligent systems that learn, adapt, and drive measurable business outcomes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.45 2.1-1.17 2.83L12 12" />
        <path d="M12 2a4 4 0 0 0-4 4c0 1.1.45 2.1 1.17 2.83L12 12" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 14v3" />
        <path d="M10 14l-3 4" />
        <path d="M14 14l3 4" />
        <path d="M7 18h2" />
        <path d="M15 18h2" />
        <path d="M9 21h6" />
        <circle cx="8" cy="6" r="0.5" />
        <circle cx="16" cy="6" r="0.5" />
      </svg>
    ),
  },
  {
    title: 'Quality Assurance',
    desc: 'Comprehensive testing strategies ensuring reliability, performance, and pixel-perfect delivery.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

/* ══════════════════════════════════════
   Intersection Observer Hook
   ══════════════════════════════════════ */

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ══════════════════════════════════════
   Component
   ══════════════════════════════════════ */

export default function ServicesBlueprint() {
  const header = useInView(0.3);
  const grid = useInView(0.15);
  const ornament = useInView(0.5);

  return (
    <section className="svc-bp">
      <div className="svc-bp__inner">
        {/* ── Section Header ── */}
        <div
          ref={header.ref}
          className={`svc-bp__header${header.visible ? ' svc-bp__header--visible' : ''}`}
        >
          <div className="svc-bp__header-line svc-bp__header-line--left" />
          <h2 className="svc-bp__title">
            Our <span className="svc-bp__title-accent">Services</span>
          </h2>
          <div className="svc-bp__header-line svc-bp__header-line--right" />
        </div>

        {/* ── Card Grid ── */}
        <div
          ref={grid.ref}
          className="svc-bp__grid"
        >
          {/* Vertical hairline dividers between columns */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={`div-${i}`}
              className={`svc-bp__divider${grid.visible ? ' svc-bp__divider--visible' : ''}`}
            >
              <div className="svc-bp__divider-line" />
              <div className="svc-bp__divider-diamond" />
            </div>
          ))}

          {/* Service cards */}
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              className={`svc-bp__card${grid.visible ? ' svc-bp__card--visible' : ''}`}
              style={{ '--card-i': i } as React.CSSProperties}
            >
              {/* Blueprint grid pattern (hover reveal) */}
              <div className="svc-bp__card-grid" />

              {/* Animated gold border */}
              <div className="svc-bp__card-border" />

              {/* Icon */}
              <div className="svc-bp__card-icon">
                {svc.icon}
              </div>

              {/* Decorative dash */}
              <div className="svc-bp__card-dash" />

              {/* Title */}
              <h3 className="svc-bp__card-title">{svc.title}</h3>

              {/* Description */}
              <p className="svc-bp__card-desc">{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Bottom ornament ── */}
        <div
          ref={ornament.ref}
          className={`svc-bp__ornament${ornament.visible ? ' svc-bp__ornament--visible' : ''}`}
        >
          <div className="svc-bp__ornament-line" />
          <div className="svc-bp__ornament-diamond" />
          <div className="svc-bp__ornament-line" />
        </div>
      </div>
    </section>
  );
}
