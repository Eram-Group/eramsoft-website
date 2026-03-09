'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './hero-ai-consulting.css';

/* ── Animated counter hook ── */
function useCounter(target: number, duration = 2000, delay = 800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const timeout = setTimeout(() => {
          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }, delay);

        return () => clearTimeout(timeout);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, delay]);

  return { count, ref };
}

/* ── Floating particles ── */
function NeuralParticles() {
  return (
    <div className="hero-ai__particles" aria-hidden="true">
      {/* Animated dots */}
      {Array.from({ length: 18 }).map((_, i) => (
        <div
          key={i}
          className="hero-ai__particle"
          style={{
            left: `${8 + (i * 5.2) % 90}%`,
            top: `${12 + (i * 7.3) % 76}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${4 + (i % 4) * 1.5}s`,
          }}
        />
      ))}
      {/* Connecting lines */}
      <svg className="hero-ai__particle-lines" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <line x1="15%" y1="25%" x2="35%" y2="45%" className="hero-ai__pline" style={{ animationDelay: '0s' }} />
        <line x1="35%" y1="45%" x2="55%" y2="30%" className="hero-ai__pline" style={{ animationDelay: '0.3s' }} />
        <line x1="55%" y1="30%" x2="75%" y2="55%" className="hero-ai__pline" style={{ animationDelay: '0.6s' }} />
        <line x1="75%" y1="55%" x2="90%" y2="35%" className="hero-ai__pline" style={{ animationDelay: '0.9s' }} />
        <line x1="20%" y1="60%" x2="45%" y2="70%" className="hero-ai__pline" style={{ animationDelay: '1.2s' }} />
        <line x1="45%" y1="70%" x2="70%" y2="50%" className="hero-ai__pline" style={{ animationDelay: '1.5s' }} />
        <line x1="10%" y1="40%" x2="30%" y2="20%" className="hero-ai__pline" style={{ animationDelay: '0.5s' }} />
        <line x1="60%" y1="65%" x2="85%" y2="40%" className="hero-ai__pline" style={{ animationDelay: '1.8s' }} />
      </svg>
    </div>
  );
}

/* ── Geometric accents ── */
function GeometricAccents() {
  return (
    <div className="hero-ai__geo" aria-hidden="true">
      <div className="hero-ai__geo-hex hero-ai__geo-hex--1" />
      <div className="hero-ai__geo-hex hero-ai__geo-hex--2" />
      <div className="hero-ai__geo-ring hero-ai__geo-ring--1" />
      <div className="hero-ai__geo-ring hero-ai__geo-ring--2" />
      {/* Horizontal scan line */}
      <div className="hero-ai__scanline" />
    </div>
  );
}

/* ── Stat block with counter ── */
function StatBlock({
  icon,
  num,
  suffix,
  label,
  delay,
}: {
  icon: React.ReactNode;
  num: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { count, ref } = useCounter(num, 2200, delay);

  return (
    <div className="hero-ai__stat">
      <div className="hero-ai__stat-icon">{icon}</div>
      <span className="hero-ai__stat-num" ref={ref}>
        {count.toLocaleString()}{suffix}
      </span>
      <span className="hero-ai__stat-label">{label}</span>
    </div>
  );
}

export default function HeroAIConsulting() {
  return (
    <section className="hero-ai">
      {/* ── Background image with Ken Burns ── */}
      <div className="hero-ai__bg">
        <Image
          src="/26-1-1024x538.jpg"
          alt="AI consulting background"
          fill
          priority
          className="hero-ai__bg-img"
        />
        <div className="hero-ai__overlay" />
        {/* Grain texture */}
        <div className="hero-ai__grain" />
      </div>

      {/* ── Neural particle network ── */}
      <NeuralParticles />

      {/* ── Geometric floating accents ── */}
      <GeometricAccents />

      {/* ── Content ── */}
      <div className="hero-ai__container">
        <div className="hero-ai__content">
          {/* Eyebrow tag */}
          <div className="hero-ai__eyebrow">
            <span className="hero-ai__eyebrow-dot" />
            <span className="hero-ai__eyebrow-text">STRATEGIC AI SOLUTIONS</span>
          </div>

          <h1 className="hero-ai__headline">
            <span className="hero-ai__headline-line">
              <span className="hero-ai__headline-word">AI</span>{' '}
              <span className="hero-ai__headline-word" style={{ animationDelay: '0.15s' }}>Consulting</span>{' '}
              <span className="hero-ai__headline-word hero-ai__headline-word--accent" style={{ animationDelay: '0.3s' }}>Services</span>
            </span>
          </h1>

          <span className="hero-ai__accent-line" />

          <p className="hero-ai__subtitle">
            Our expert AI consultants work closely with you to understand your unique
            challenges and objectives — delivering intelligent solutions that transform
            your business.
          </p>

          <div className="hero-ai__cta-group">
            <a href="#quote" className="hero-ai__cta">
              <span className="hero-ai__cta-text">GET A QUOTE</span>
              <span className="hero-ai__cta-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="#services" className="hero-ai__cta-secondary">
              EXPLORE SERVICES
            </a>
          </div>
        </div>

      </div>

      {/* ── Scroll indicator ── */}
      <div className="hero-ai__scroll-hint">
        <div className="hero-ai__scroll-mouse">
          <div className="hero-ai__scroll-dot" />
        </div>
        <span className="hero-ai__scroll-text">SCROLL</span>
      </div>

      {/* ── Bottom stats curve ── */}
      <div className="hero-ai__bottom">
        <svg
          className="hero-ai__curve"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z"
            className="hero-ai__curve-path"
          />
        </svg>

        <div className="hero-ai__stats">
          <StatBlock
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
            num={200}
            suffix="+"
            label="Clients Worldwide"
            delay={600}
          />

          <div className="hero-ai__stat-divider" />

          <StatBlock
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            }
            num={1200}
            suffix="+"
            label="Projects Delivered"
            delay={900}
          />

          <div className="hero-ai__stat-divider" />

          <StatBlock
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            }
            num={14}
            suffix="+"
            label="Years Experience"
            delay={1200}
          />
        </div>
      </div>
    </section>
  );
}
