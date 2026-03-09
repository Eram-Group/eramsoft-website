'use client';

import { useEffect, useRef } from 'react';
import './services-editorial.css';

/* ── Service data ── */

interface ServiceItem {
  number: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    number: '01',
    name: 'Web Development',
    description:
      'Crafting performant, scalable web applications with modern frameworks and clean architecture — from single-page apps to complex enterprise platforms.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    number: '02',
    name: 'Mobile Application',
    description:
      'Native and cross-platform mobile solutions engineered for fluid user experiences, offline resilience, and seamless integration with device capabilities.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
  },
  {
    number: '03',
    name: 'UI/UX Design',
    description:
      'Research-driven design that balances aesthetics with usability — wireframes, prototypes, and design systems built around real user behavior and accessibility.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '04',
    name: 'Cloud Solutions',
    description:
      'Infrastructure design, migration, and managed cloud services that give your organization elastic scale, fault tolerance, and optimized operational costs.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    number: '05',
    name: 'AI & Machine Learning',
    description:
      'From predictive models to natural language pipelines — we embed intelligence into your products with responsible, explainable, and production-grade ML systems.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.4V11h3a3 3 0 0 1 3 3v1.6c1.2.6 2 1.9 2 3.4a4 4 0 0 1-8 0c0-1.5.8-2.8 2-3.4V14a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v1.6c1.2.6 2 1.9 2 3.4a4 4 0 0 1-8 0c0-1.5.8-2.8 2-3.4V14a3 3 0 0 1 3-3h3V9.4C7.8 8.8 7 7.5 7 6a4 4 0 0 1 5-3.9" />
      </svg>
    ),
  },
  {
    number: '06',
    name: 'Quality Assurance',
    description:
      'Comprehensive testing strategies — automated suites, performance benchmarks, security audits, and CI pipelines that ensure every release ships with confidence.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

/* ── Component ── */

export default function ServicesEditorial() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Collect all elements that need scroll-reveal
    const revealTargets = section.querySelectorAll<HTMLElement>(
      '.svc-ed__header, .svc-ed__content, .svc-ed__number-block'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // Determine which visibility class to add
            if (el.classList.contains('svc-ed__header')) {
              el.classList.add('svc-ed__header--visible');
            } else if (el.classList.contains('svc-ed__content')) {
              el.classList.add('svc-ed__content--visible');
            } else if (el.classList.contains('svc-ed__number-block')) {
              el.classList.add('svc-ed__number-block--visible');
            }
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    revealTargets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="svc-ed" ref={sectionRef}>
      {/* ── Section header ── */}
      <div className="svc-ed__inner">
        <header className="svc-ed__header">
          <div className="svc-ed__eyebrow">
            <span className="svc-ed__eyebrow-dash" />
            <span className="svc-ed__eyebrow-text">What We Do</span>
            <span className="svc-ed__eyebrow-dash" />
          </div>
          <h2 className="svc-ed__title">
            Services <em>&amp;</em> Expertise
          </h2>
          <hr className="svc-ed__header-rule" />
        </header>

        {/* ── Central thread line ── */}
        <div className="svc-ed__thread" aria-hidden="true" />

        {/* ── Service items ── */}
        <div className="svc-ed__list">
          {services.map((service) => (
            <article key={service.number} className="svc-ed__item">
              {/* Number side */}
              <div className="svc-ed__number-block">
                <span className="svc-ed__big-number">{service.number}</span>
              </div>

              {/* Content side */}
              <div className="svc-ed__content">
                <div className="svc-ed__icon">{service.icon}</div>
                <h3 className="svc-ed__name">{service.name}</h3>
                <p className="svc-ed__desc">{service.description}</p>
                <span className="svc-ed__accent-dash" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
