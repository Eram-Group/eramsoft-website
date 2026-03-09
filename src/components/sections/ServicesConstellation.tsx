'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import './services-constellation.css';

/* ── Services data ── */

const services = [
  {
    name: 'Web Development',
    desc: 'Scalable, performant web platforms',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <ellipse cx="12" cy="12" rx="4" ry="10" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    name: 'Mobile Application',
    desc: 'Native & cross-platform experiences',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
  },
  {
    name: 'UI/UX Design',
    desc: 'Human-centered design systems',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="4" rx="1" />
        <rect x="14" y="10" width="7" height="11" rx="1" />
        <rect x="3" y="13" width="7" height="8" rx="1" />
      </svg>
    ),
  },
  {
    name: 'Cloud Solutions',
    desc: 'Infrastructure built to scale',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    name: 'AI & Machine Learning',
    desc: 'Intelligent automation & insights',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
        <path d="M9 21h6" />
        <path d="M10 17v4" />
        <path d="M14 17v4" />
        <circle cx="9.5" cy="9" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="14.5" cy="9" r="0.8" fill="currentColor" stroke="none" />
        <path d="M9 12.5c.5.5 1.5 1 3 1s2.5-.5 3-1" />
      </svg>
    ),
  },
  {
    name: 'Quality Assurance',
    desc: 'Rigorous testing & reliability',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

/* ── Node positions matching CSS (percentage-based) ──
   6 items, 60° apart, radius 42%, starting from top (-90°)
   θ = -90° + i*60°
   x = 50 + 42*cos(θ)
   y = 50 + 42*sin(θ)
*/
const nodePositions = [
  { x: 50, y: 8 },      // 0: top
  { x: 86.4, y: 29 },   // 1: top-right
  { x: 86.4, y: 71 },   // 2: bottom-right
  { x: 50, y: 92 },     // 3: bottom
  { x: 13.6, y: 71 },   // 4: bottom-left
  { x: 13.6, y: 29 },   // 5: top-left
];

/* ── Intersection observer hook ── */
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

/* ── Main component ── */

export default function ServicesConstellation() {
  const header = useInView(0.3);
  const constellation = useInView(0.15);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  return (
    <section className="svc-const">
      {/* Background pattern */}
      <div className="svc-const__pattern" aria-hidden="true" />

      <div className="svc-const__inner">
        {/* ── Header ── */}
        <div
          ref={header.ref}
          className={`svc-const__header${header.visible ? ' svc-const__header--visible' : ''}`}
        >
          <div className="svc-const__eyebrow">
            <span className="svc-const__eyebrow-dot" />
            <span className="svc-const__eyebrow-text">What We Offer</span>
          </div>

          <h2 className="svc-const__title">
            Our Core{' '}
            <span className="svc-const__title-accent">Services</span>
          </h2>

          <span className="svc-const__accent-line" />

          <p className="svc-const__subtitle">
            Six disciplines working in concert — each one refined through
            years of delivery across industries and scale.
          </p>
        </div>

        {/* ── Constellation ── */}
        <div
          ref={constellation.ref}
          className={`svc-const__constellation${constellation.visible ? ' svc-const__constellation--visible' : ''}`}
        >
          <div className="svc-const__orbit">
            {/* SVG radial lines from center to each node */}
            <svg
              className="svc-const__lines"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
            >
              {nodePositions.map((pos, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={pos.x}
                  y2={pos.y}
                  className={`svc-const__line${hoveredIndex === i ? ' svc-const__line--shimmer' : ''}`}
                />
              ))}
            </svg>

            {/* Central diamond */}
            <div className="svc-const__center">
              <div className="svc-const__diamond">
                <span className="svc-const__diamond-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                    <line x1="12" y1="22" x2="12" y2="15.5" />
                    <line x1="22" y1="8.5" x2="12" y2="15.5" />
                    <line x1="2" y1="8.5" x2="12" y2="15.5" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Service nodes */}
            {services.map((service, i) => (
              <div
                key={i}
                className={`svc-const__node svc-const__node--${i}`}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="svc-const__node-circle">
                  {service.icon}
                </div>
                <div className="svc-const__node-info">
                  <span className="svc-const__node-name">{service.name}</span>
                  <span className="svc-const__node-desc">{service.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
