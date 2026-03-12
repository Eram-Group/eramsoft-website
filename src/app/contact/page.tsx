"use client";

import { useEffect, useState } from "react";
import "./contact.css";

/* ══════════════════════════════════════════════
   HERO OPTIONS — pick one, delete the rest
   ══════════════════════════════════════════════ */

/* ── Option A — Centered Beacon ── */
function HeroOptionA() {
  return (
    <section className="ct-hero">
      <div className="ct-hero-mesh" aria-hidden="true" />

      {/* Pulsing neon rings */}
      <div className="ct-hero-rings" aria-hidden="true">
        <div className="ct-ring ct-ring--1" />
        <div className="ct-ring ct-ring--2" />
        <div className="ct-ring ct-ring--3" />
      </div>

      <div className="ct-hero-inner ct-hero-inner--center">
        <p className="ct-tag ct-rise" style={{ animationDelay: "0.2s" }}>
          Contact Us
        </p>
        <h1 className="ct-hero-h1 ct-rise" style={{ animationDelay: "0.4s" }}>
          Let&apos;s Build Something{" "}
          <span className="ct-accent">Great Together</span>
        </h1>
        <p className="ct-hero-sub ct-rise" style={{ animationDelay: "0.6s" }}>
          Have a project in mind? A question about our services? Or just want to
          say hello? We&apos;d love to hear from you &mdash; let&apos;s start a
          conversation.
        </p>
        <div className="ct-hero-divider ct-rise" style={{ animationDelay: "0.8s" }} aria-hidden="true" />
        <div className="ct-hero-scroll ct-rise" style={{ animationDelay: "1s" }}>
          <div className="ct-scroll-mouse">
            <div className="ct-scroll-dot" />
          </div>
          <span className="ct-scroll-label">Scroll to reach us</span>
        </div>
      </div>
    </section>
  );
}

/* ── Option B — Split with Constellation ── */
function HeroOptionB() {
  return (
    <section className="ct-hero">
      <div className="ct-hero-mesh" aria-hidden="true" />

      <div className="ct-hero-inner ct-hero-inner--split">
        {/* Left — Text */}
        <div className="ct-hero-text">
          <p className="ct-tag ct-rise" style={{ animationDelay: "0.2s" }}>
            Get In Touch
          </p>
          <h1 className="ct-hero-h1 ct-hero-h1--left ct-rise" style={{ animationDelay: "0.4s" }}>
            We&apos;re Ready to
            <br />
            <span className="ct-accent">Hear From You</span>
          </h1>
          <p className="ct-hero-sub ct-hero-sub--left ct-rise" style={{ animationDelay: "0.6s" }}>
            Whether you&apos;re starting a new project, need technical
            expertise, or want to explore a partnership &mdash; our team is
            here to help.
          </p>

          {/* Quick contact */}
          <div className="ct-hero-quick ct-rise" style={{ animationDelay: "0.8s" }}>
            <div className="ct-quick-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>info@eramsoft.com</span>
            </div>
            <div className="ct-quick-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>+966 XX XXX XXXX</span>
            </div>
          </div>
        </div>

        {/* Right — Constellation visual */}
        <div className="ct-hero-visual ct-rise" style={{ animationDelay: "0.5s" }}>
          <div className="ct-constellation">
            {/* Connected nodes */}
            <svg viewBox="0 0 400 400" fill="none" className="ct-constellation-svg">
              {/* Lines */}
              <line x1="200" y1="80" x2="320" y2="160" stroke="rgba(80,170,255,0.15)" strokeWidth="1" className="ct-line-draw" />
              <line x1="200" y1="80" x2="100" y2="180" stroke="rgba(80,170,255,0.12)" strokeWidth="1" className="ct-line-draw" style={{ animationDelay: "0.3s" }} />
              <line x1="320" y1="160" x2="280" y2="300" stroke="rgba(80,170,255,0.1)" strokeWidth="1" className="ct-line-draw" style={{ animationDelay: "0.5s" }} />
              <line x1="100" y1="180" x2="180" y2="320" stroke="rgba(80,170,255,0.12)" strokeWidth="1" className="ct-line-draw" style={{ animationDelay: "0.4s" }} />
              <line x1="280" y1="300" x2="180" y2="320" stroke="rgba(80,170,255,0.08)" strokeWidth="1" className="ct-line-draw" style={{ animationDelay: "0.6s" }} />
              <line x1="200" y1="80" x2="200" y2="200" stroke="rgba(80,170,255,0.1)" strokeWidth="1" className="ct-line-draw" style={{ animationDelay: "0.2s" }} />
              <line x1="200" y1="200" x2="320" y2="160" stroke="rgba(80,170,255,0.08)" strokeWidth="1" className="ct-line-draw" style={{ animationDelay: "0.7s" }} />
              <line x1="200" y1="200" x2="100" y2="180" stroke="rgba(80,170,255,0.08)" strokeWidth="1" className="ct-line-draw" style={{ animationDelay: "0.8s" }} />

              {/* Nodes */}
              <circle cx="200" cy="80" r="6" fill="rgba(80,170,255,0.3)" className="ct-node-pulse" />
              <circle cx="200" cy="80" r="2.5" fill="#50aaff" />

              <circle cx="320" cy="160" r="5" fill="rgba(80,170,255,0.25)" className="ct-node-pulse" style={{ animationDelay: "0.5s" }} />
              <circle cx="320" cy="160" r="2" fill="#82d2ff" />

              <circle cx="100" cy="180" r="5" fill="rgba(80,170,255,0.25)" className="ct-node-pulse" style={{ animationDelay: "1s" }} />
              <circle cx="100" cy="180" r="2" fill="#82d2ff" />

              <circle cx="200" cy="200" r="8" fill="rgba(80,170,255,0.2)" className="ct-node-pulse" style={{ animationDelay: "0.3s" }} />
              <circle cx="200" cy="200" r="3" fill="#50aaff" />

              <circle cx="280" cy="300" r="4" fill="rgba(80,170,255,0.2)" className="ct-node-pulse" style={{ animationDelay: "0.8s" }} />
              <circle cx="280" cy="300" r="1.5" fill="#64c8ff" />

              <circle cx="180" cy="320" r="4" fill="rgba(80,170,255,0.2)" className="ct-node-pulse" style={{ animationDelay: "1.2s" }} />
              <circle cx="180" cy="320" r="1.5" fill="#64c8ff" />

              {/* Center glow */}
              <circle cx="200" cy="200" r="40" fill="url(#nodeGlow)" className="ct-center-glow" />
              <defs>
                <radialGradient id="nodeGlow">
                  <stop offset="0%" stopColor="rgba(80,170,255,0.12)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
            </svg>

            {/* Floating labels */}
            <div className="ct-node-label ct-node-label--1 ct-rise" style={{ animationDelay: "1s" }}>
              <span className="ct-node-dot" />
              Connected
            </div>
            <div className="ct-node-label ct-node-label--2 ct-rise" style={{ animationDelay: "1.2s" }}>
              <span className="ct-node-dot" />
              Responsive
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Option C — Bold Statement + Integrated Cards ── */
function HeroOptionC() {
  return (
    <section className="ct-hero ct-hero--tall">
      <div className="ct-hero-mesh" aria-hidden="true" />

      {/* Horizontal neon beam */}
      <div className="ct-hero-beam" aria-hidden="true" />

      <div className="ct-hero-inner ct-hero-inner--stacked">
        <p className="ct-tag ct-rise" style={{ animationDelay: "0.2s" }}>
          Contact Us
        </p>

        <h1 className="ct-hero-h1 ct-hero-h1--massive ct-rise" style={{ animationDelay: "0.4s" }}>
          Let&apos;s <span className="ct-accent">Connect</span>
        </h1>

        <p className="ct-hero-sub ct-rise" style={{ animationDelay: "0.6s" }}>
          Your next big idea deserves a team that&apos;s as passionate about it
          as you are. Reach out &mdash; we respond within 24 hours.
        </p>

        {/* Integrated contact cards */}
        <div className="ct-hero-cards ct-rise" style={{ animationDelay: "0.8s" }}>
          <div className="ct-hero-card">
            <div className="ct-hero-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <span className="ct-hero-card-label">Email</span>
            <span className="ct-hero-card-value">info@eramsoft.com</span>
          </div>

          <div className="ct-hero-card">
            <div className="ct-hero-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <span className="ct-hero-card-label">Phone</span>
            <span className="ct-hero-card-value">+966 XX XXX XXXX</span>
          </div>

          <div className="ct-hero-card">
            <div className="ct-hero-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span className="ct-hero-card-label">Location</span>
            <span className="ct-hero-card-value">Riyadh, Saudi Arabia</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════ */

export default function ContactPage() {
  const [heroOption, setHeroOption] = useState<"A" | "B" | "C">("A");

  useEffect(() => {
    const els = document.querySelectorAll(".ct-reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("ct-revealed");
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="ct-page">
      {/* ── Ambient layers (same as About) ── */}
      <div className="ct-glow ct-glow--a" aria-hidden="true" />
      <div className="ct-glow ct-glow--b" aria-hidden="true" />
      <div className="ct-glow ct-glow--c" aria-hidden="true" />
      <div className="ct-streak" aria-hidden="true" />
      <div className="ct-grain" aria-hidden="true" />
      <div className="ct-dots" aria-hidden="true" />

      {/* ── Option switcher (remove after choosing) ── */}
      <div className="ct-switcher">
        <span className="ct-switcher-label">Hero Option:</span>
        {(["A", "B", "C"] as const).map((opt) => (
          <button
            key={opt}
            className={`ct-switcher-btn ${heroOption === opt ? "ct-switcher-btn--active" : ""}`}
            onClick={() => setHeroOption(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* ── Hero ── */}
      {heroOption === "A" && <HeroOptionA />}
      {heroOption === "B" && <HeroOptionB />}
      {heroOption === "C" && <HeroOptionC />}
    </div>
  );
}
