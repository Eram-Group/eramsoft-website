'use client';

import { useEffect, useRef, useState } from 'react';
import './services-ai-consulting.css';

const SERVICES = [
  {
    title: 'Quality Assurance & Testing',
    description: 'Comprehensive testing strategies ensuring reliability, performance, and bug-free delivery across all platforms',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: 'Mobile Application',
    description: 'Native and cross-platform mobile apps built for performance and seamless user experience',
    orange: true,
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
        <path d="M9 6h6" />
        <path d="M9 9h6" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    description: 'Research-driven interfaces and intuitive experiences that delight users and drive engagement',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <path d="M17 2h4v4" />
        <path d="M7 22H3v-4" />
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <path d="M7 13l3 3 7-7" />
      </svg>
    ),
  },
  {
    title: 'Web Development',
    description: 'High-performance websites and web applications with modern frameworks and best practices',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Consultations',
    description: 'Expert technical guidance and strategic planning to align technology with your business goals',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M12 7v2" />
        <path d="M12 13h.01" />
      </svg>
    ),
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for optimal performance and cost efficiency',
    orange: true,
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
];

const CARD_LEFT = SERVICES[0];
const COL_MID = [SERVICES[1], SERVICES[2]];
const COL_RIGHT = [SERVICES[3], SERVICES[4]];
const COL_FOUR = SERVICES[5];

/* ── Scroll-triggered reveal hook ── */
function useScrollReveal(threshold = 0.15) {
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

function Card({
  service,
  delay = 0,
}: {
  service: (typeof SERVICES)[number];
  delay?: number;
}) {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`svc-ai__card${service.orange ? ' svc-ai__card--orange' : ''}${visible ? ' svc-ai__card--visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="svc-ai__card-icon">{service.icon}</div>
      <h3 className="svc-ai__card-title">{service.title}</h3>
      <p className="svc-ai__card-desc">{service.description}</p>
      {/* Hover shimmer */}
      <div className="svc-ai__card-shimmer" />
    </div>
  );
}

export default function ServicesAIConsulting() {
  const { ref: headRef, visible: headVisible } = useScrollReveal(0.3);

  return (
    <section className="svc-ai">
      {/* Decorative elements */}
      <div className="svc-ai__pattern" aria-hidden="true" />
      <div className="svc-ai__deco-line" aria-hidden="true" />

      <div className="svc-ai__inner">
        {/* ── Column 1: heading + 1 card ── */}
        <div className="svc-ai__col svc-ai__col--left">
          <div
            ref={headRef}
            className={`svc-ai__head-group${headVisible ? ' svc-ai__head-group--visible' : ''}`}
          >
            <h2 className="svc-ai__heading">
              Our Expert
              <br />
              Services
            </h2>
            <span className="svc-ai__heading-line" />
            <a href="#services" className="svc-ai__view-btn">
              VIEW ALL SERVICES
            </a>
          </div>
          <div className="svc-ai__col-cards">
            <Card service={CARD_LEFT} delay={200} />
          </div>
        </div>

        {/* ── Column 2: 2 cards ── */}
        <div className="svc-ai__col svc-ai__col--mid">
          {COL_MID.map((s, i) => (
            <Card key={s.title} service={s} delay={100 + i * 150} />
          ))}
        </div>

        {/* ── Column 3: 2 cards ── */}
        <div className="svc-ai__col svc-ai__col--right">
          {COL_RIGHT.map((s, i) => (
            <Card key={s.title} service={s} delay={200 + i * 150} />
          ))}
        </div>

        {/* ── Column 4: 1 card ── */}
        <div className="svc-ai__col svc-ai__col--four">
          <Card service={COL_FOUR} delay={400} />
        </div>
      </div>
    </section>
  );
}
