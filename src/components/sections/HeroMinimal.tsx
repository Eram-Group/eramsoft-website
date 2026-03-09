"use client";

import Link from "next/link";
import "./hero-minimal.css";

export default function HeroMinimal() {
  return (
    <section className="hm-surface">
      {/* ── Background layers ── */}
      <div className="hm-mesh" aria-hidden="true" />
      <div className="hm-grid" aria-hidden="true" />
      <div className="hm-aurora" aria-hidden="true" />
      <div className="hm-scan" aria-hidden="true" />

      {/* ── Wave composition ── */}
      <svg
        className="hm-waves"
        viewBox="0 0 1000 1000"
        fill="none"
        preserveAspectRatio="xMaxYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hmWg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3F5B8D" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#2E365A" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="hmWg2" x1="0%" y1="20%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#3F5B8D" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#6B597F" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="hmWg3" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#6B597F" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#92A1C2" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Wave 1 — rightmost, strongest */}
        <path
          className="hm-wave hm-wave--1"
          d="M 550 0 C 480 150 620 280 530 500 C 440 720 610 850 550 1000 L 1000 1000 L 1000 0 Z"
          fill="url(#hmWg1)"
        />
        {/* Wave 2 — middle */}
        <path
          className="hm-wave hm-wave--2"
          d="M 420 0 C 350 200 530 330 440 550 C 350 770 530 880 420 1000 L 1000 1000 L 1000 0 Z"
          fill="url(#hmWg2)"
        />
        {/* Wave 3 — leftmost, lightest */}
        <path
          className="hm-wave hm-wave--3"
          d="M 310 0 C 240 180 410 360 340 540 C 270 720 430 870 310 1000 L 1000 1000 L 1000 0 Z"
          fill="url(#hmWg3)"
        />
      </svg>

      {/* ── Floating glass shapes ── */}
      <div className="hm-glass hm-glass--1" aria-hidden="true" />
      <div className="hm-glass hm-glass--2" aria-hidden="true" />
      <div className="hm-glass hm-glass--3" aria-hidden="true" />

      {/* ── Depth orbs ── */}
      <div className="hm-orb hm-orb--1" aria-hidden="true" />
      <div className="hm-orb hm-orb--2" aria-hidden="true" />
      <div className="hm-orb hm-orb--3" aria-hidden="true" />

      {/* ── Large watermark ── */}
      <div className="hm-watermark" aria-hidden="true">02</div>

      {/* ── Vertical label ── */}
      <div className="hm-vlabel" aria-hidden="true">
        <span>SOFTWARE &mdash; ENGINEERING &mdash; STUDIO</span>
      </div>

      {/* ── Corner coordinates ── */}
      <div className="hm-corner hm-corner--tl" aria-hidden="true">
        [0,0]
      </div>
      <div className="hm-corner hm-corner--br" aria-hidden="true">
        viewport.end
      </div>

      {/* ── Main content ── */}
      <div className="hm-content">
        {/* Overline */}
        <div className="hm-overline">
          <span className="hm-overline-dot" />
          <span className="hm-overline-line" />
          <span className="hm-overline-label">Engineering precision</span>
        </div>

        {/* Heading */}
        <h1 className="hm-heading">
          <span className="hm-h-line">We build</span>
          <span className="hm-h-line">
            <em className="hm-h-accent">software</em>
          </span>
          <span className="hm-h-line">
            that matters<span className="hm-cursor" />
          </span>
        </h1>

        {/* Accent rule */}
        <div className="hm-rule" aria-hidden="true" />

        {/* Body */}
        <p className="hm-body">
          From cloud architecture to product engineering &mdash; we design,
          build, and ship custom platforms with precision. Your&nbsp;vision,
          our&nbsp;craft.
        </p>

        {/* CTAs */}
        <div className="hm-ctas">
          <Link href="#contact" className="hm-btn-primary">
            <span>Start a project</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="M2.5 12.5L12.5 2.5M12.5 2.5H5M12.5 2.5v7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="#work" className="hm-btn-ghost">
            <span>View our work</span>
            <span className="hm-btn-underline" />
          </Link>
        </div>

        {/* Stats strip */}
        <div className="hm-stats">
          {[
            { value: "150+", label: "Projects shipped" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "<50ms", label: "Avg response" },
          ].map((s) => (
            <div key={s.label} className="hm-stat">
              <span className="hm-stat-value">{s.value}</span>
              <span className="hm-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hm-bottom">
        <div className="hm-scroll-indicator">
          <div className="hm-scroll-track">
            <div className="hm-scroll-thumb" />
          </div>
          <span className="hm-scroll-text">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
