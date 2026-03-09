'use client';

import './hero-zen.css';

export default function HeroZen() {
  return (
    <section className="zen">
      <div className="zen__inner">
        {/* ── Left: Content stack ── */}
        <div className="zen__content">
          <span className="zen__label">AI Consulting</span>

          <h1 className="zen__headline">
            Elevate your{' '}
            <span className="zen__headline-italic">digital</span>{' '}
            presence
          </h1>

          <p className="zen__description">
            Quiet strategy, deliberate craft. We shape digital experiences
            with clarity and intention.
          </p>

          <a href="#services" className="zen__cta">
            <span className="zen__cta-text">Learn more</span>
            <span className="zen__cta-arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* ── Vertical divider ── */}
        <div className="zen__divider" aria-hidden="true" />

        {/* ── Right: Geometric shape ── */}
        <div className="zen__shape-container">
          <div className="zen__shape" />
        </div>
      </div>
    </section>
  );
}
