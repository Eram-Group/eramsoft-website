'use client';

import './hero-software-house.css';

export default function HeroSoftwareHouse() {
  return (
    <section className="hero-p">
      {/* ── Background layers ── */}
      <div className="hero-p__aurora" />
      <div className="hero-p__sphere" />
      <div className="hero-p__grid" />
      <div className="hero-p__grain" />
      <div className="hero-p__orb hero-p__orb--1" />
      <div className="hero-p__orb hero-p__orb--2" />
      <div className="hero-p__orb hero-p__orb--3" />
      <div className="hero-p__arc hero-p__arc--1" />
      <div className="hero-p__arc hero-p__arc--2" />
      <div className="hero-p__h-line" />

      {/* ── Floating glass cards ── */}
      <div className="hero-p__card hero-p__card--1">
        <span className="hero-p__card-dot hero-p__card-dot--green" />
        <div className="hero-p__card-text">
          <span className="hero-p__card-label">99.9% Uptime</span>
          <span className="hero-p__card-sub">All systems operational</span>
        </div>
      </div>

      <div className="hero-p__card hero-p__card--2">
        <div className="hero-p__card-icon">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path
              d="M5.333 2L2 6.667l3.333 4.666M10.667 2L14 6.667l-3.333 4.666"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="hero-p__card-text">
          <span className="hero-p__card-label">Clean Architecture</span>
          <span className="hero-p__card-sub">Scalable by design</span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="hero-p__container">
        <div className="hero-p__eyebrow">
          <span className="hero-p__eyebrow-line" />
          Software Development Studio
          <span className="hero-p__eyebrow-line" />
        </div>

        <h1 className="hero-p__headline">
          <span className="hero-p__headline-line">
            <span>We engineer</span>
          </span>
          <span className="hero-p__headline-line">
            <em className="hero-p__serif">digital products</em>
          </span>
          <span className="hero-p__headline-line">
            <span>with precision.</span>
          </span>
        </h1>

        <p className="hero-p__subtitle">
          Scalable applications built with clean architecture, modern
          technology, and an unwavering commitment to craft.
        </p>

        <div className="hero-p__actions">
          <button className="hero-p__btn hero-p__btn--primary">
            Start Your Project
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path
                d="M3.333 8h9.334M8.667 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="hero-p__btn hero-p__btn--ghost">
            View Case Studies
          </button>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="hero-p__bottom">
        <div className="hero-p__bottom-inner">
          <div className="hero-p__stats">
            <div className="hero-p__stat">
              <span className="hero-p__stat-num">150+</span>
              <span className="hero-p__stat-label">Projects Shipped</span>
            </div>
            <div className="hero-p__stat">
              <span className="hero-p__stat-num">40+</span>
              <span className="hero-p__stat-label">Engineers</span>
            </div>
            <div className="hero-p__stat">
              <span className="hero-p__stat-num">98%</span>
              <span className="hero-p__stat-label">Client Retention</span>
            </div>
          </div>

          <div className="hero-p__scroll">
            <span className="hero-p__scroll-text">Scroll</span>
            <span className="hero-p__scroll-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
