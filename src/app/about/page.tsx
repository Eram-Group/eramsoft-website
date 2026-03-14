"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./about.css";

/* ══════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════ */

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 30, suffix: "+", label: "Team Members" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

const values = [
  {
    num: "01",
    title: "Precision Engineering",
    desc: "Every line of code is reviewed, tested, and optimized. We don\u2019t ship shortcuts \u2014 we ship craftsmanship.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Transparent Partnership",
    desc: "No black boxes. Clear communication, honest timelines, and full visibility at every stage of development.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Relentless Quality",
    desc: "From automated testing to security audits, quality isn\u2019t an afterthought \u2014 it\u2019s our foundation.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Forward Thinking",
    desc: "Scalable architectures, modern tools, and patterns that grow with your business into the future.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

/* ══════════════════════════════════════════════
   HOOKS & COMPONENTS
   ══════════════════════════════════════════════ */

function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return { count, ref };
}

function StatItem({ stat }: { stat: (typeof stats)[0] }) {
  const { count, ref } = useCounter(stat.value);
  return (
    <div ref={ref} className="ab-stat">
      <span className="ab-stat-value">{count}{stat.suffix}</span>
      <span className="ab-stat-label">{stat.label}</span>
    </div>
  );
}

/* ══════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════ */

export default function AboutPage() {
  return (
    <div className="ab-page">
      {/* ── Ambient layers ── */}
      <div className="ab-glow ab-glow--a" aria-hidden="true" />
      <div className="ab-glow ab-glow--b" aria-hidden="true" />
      <div className="ab-glow ab-glow--c" aria-hidden="true" />
      <div className="ab-streak" aria-hidden="true" />
      <div className="ab-grain" aria-hidden="true" />
      <div className="ab-dots" aria-hidden="true" />

      {/* ═══════════════════════════════════════
          HERO — Premium Unified Intro
          ═══════════════════════════════════════ */}
      <section className="ab-hero">
        <div className="ab-hero-mesh" aria-hidden="true" />
        <div className="ab-hero-grid" aria-hidden="true" />

        {/* Floating particles */}
        <div className="ab-hero-particles" aria-hidden="true">
          <span style={{ top: "15%", left: "10%" }} />
          <span style={{ top: "25%", left: "80%" }} />
          <span style={{ top: "60%", left: "5%" }} />
          <span style={{ top: "40%", left: "90%" }} />
          <span style={{ top: "70%", left: "70%" }} />
          <span style={{ top: "10%", left: "50%" }} />
        </div>

        {/* Horizontal accent line */}
        <div className="ab-hero-accent-line" aria-hidden="true" />

        <div className="ab-hero-inner ab-hero-inner--split">
          {/* Left — Text content */}
          <div className="ab-hero-text">
            <div className="ab-hero-tag-wrap">
              <span className="ab-hero-tag-line" aria-hidden="true" />
              <p className="ab-tag">About Eram Soft</p>
            </div>
            <h1 className="ab-hero-h1">
              <span className="ab-hero-line ab-hero-line--lead">
                We Build the
              </span>
              <span className="ab-hero-line ab-hero-line--hero">
                <span className="ab-accent">Digital Backbone</span>
              </span>
              <span className="ab-hero-line ab-hero-line--lead">
                of Ambitious Businesses
              </span>
            </h1>
            <p className="ab-hero-sub">
              Since 2019, turning complex challenges into elegant digital
              solutions &mdash; from mobile apps and web platforms to cloud
              infrastructure and AI-powered tools.
            </p>

            <div className="ab-hero-divider" aria-hidden="true">
              <span className="ab-hero-divider-glow" />
            </div>

            <p className="ab-hero-how">
              &ldquo;Every project gets a{" "}
              <span className="ab-accent">dedicated team</span>, a clear
              roadmap, and full transparency &mdash; no surprises, no
              shortcuts.&rdquo;
            </p>
            <p className="ab-prose">
              We&apos;re a team of engineers, designers, and strategists who
              treat every project as our own. Our process is built on honest
              timelines, weekly demos, and iterative feedback &mdash;
              that&apos;s why 98% of our clients come back.
            </p>
          </div>

          {/* Right — Visual */}
          <div className="ab-hero-visual">
            <div className="ab-hero-frame-wrap">
              {/* Animated border glow */}
              <div className="ab-hero-frame-glow" aria-hidden="true" />
              <div className="ab-hero-frame">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                  alt="Team working on a project"
                  fill
                  className="ab-hero-img"
                  sizes="(max-width:900px) 100vw, 55vw"
                  priority
                />
                <div className="ab-hero-overlay" aria-hidden="true" />
                <div className="ab-hero-vignette" aria-hidden="true" />

                {/* Scan line effect */}
                <div className="ab-hero-scanline" aria-hidden="true" />
              </div>

              {/* Corner accents */}
              <svg className="ab-hero-corner ab-hero-corner--tl" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M0 12V1a1 1 0 011-1h11" fill="none" stroke="rgba(var(--neon-rgb),0.4)" strokeWidth="1.5" />
              </svg>
              <svg className="ab-hero-corner ab-hero-corner--br" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12v11a1 1 0 01-1 1H12" fill="none" stroke="rgba(var(--neon-rgb),0.4)" strokeWidth="1.5" />
              </svg>

              {/* Retention badge — glass */}
              <div className="ab-hero-retention">
                <div className="ab-hero-retention-pulse" aria-hidden="true" />
                <span className="ab-hero-retention-val">98%</span>
                <span className="ab-hero-retention-lbl">Client Retention</span>
              </div>

              {/* Year badge */}
              <div className="ab-hero-year">
                <span className="ab-hero-year-val">2019</span>
                <span className="ab-hero-year-lbl">Est.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar — premium glass */}
        <div className="ab-hero-stats-bar">
          <div className="ab-hero-stats-shine" aria-hidden="true" />
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} />
          ))}
        </div>
      </section>

      {/* ── Main content container ── */}
      <div className="ab-wrap">

        <div className="ab-thread" aria-hidden="true" />

        {/* ═══════════════════════════════════════
            PILLARS — Vision & Mission
            ═══════════════════════════════════════ */}
        <section className="ab-pil">
          {/* Vision */}
          <div className="ab-pil-card ab-pil-card--v">
            <div className="ab-pil-ring" aria-hidden="true">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="96" stroke="rgba(80,170,255,0.08)" strokeWidth="1" />
                <circle cx="100" cy="100" r="96" stroke="url(#pilGrad)" strokeWidth="1.5" strokeDasharray="604" className="ab-pil-arc" />
                <defs>
                  <linearGradient id="pilGrad" x1="0" y1="0" x2="200" y2="200">
                    <stop offset="0%" stopColor="#50aaff" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#82d2ff" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#50aaff" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="ab-pil-ring-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
            </div>
            <div className="ab-pil-content">
              <span className="ab-pil-tag">Vision</span>
              <h3 className="ab-pil-title">
                The partner of choice for businesses that refuse to
                compromise on <span className="ab-accent">quality</span>
              </h3>
              <p className="ab-pil-desc">
                Building software that sets new standards for performance,
                design, and reliability across the region.
              </p>
            </div>
          </div>

          {/* Center divider */}
          <div className="ab-pil-mid" aria-hidden="true">
            <div className="ab-pil-mid-line" />
            <div className="ab-pil-mid-dot" />
            <div className="ab-pil-mid-line" />
          </div>

          {/* Mission */}
          <div className="ab-pil-card ab-pil-card--m">
            <div className="ab-pil-ring" aria-hidden="true">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="96" stroke="rgba(80,170,255,0.08)" strokeWidth="1" />
                <circle cx="100" cy="100" r="96" stroke="url(#pilGrad2)" strokeWidth="1.5" strokeDasharray="604" className="ab-pil-arc" />
                <defs>
                  <linearGradient id="pilGrad2" x1="200" y1="0" x2="0" y2="200">
                    <stop offset="0%" stopColor="#82d2ff" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#50aaff" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#82d2ff" stopOpacity="0.35" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="ab-pil-ring-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
                  <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
                </svg>
              </div>
            </div>
            <div className="ab-pil-content">
              <span className="ab-pil-tag">Mission</span>
              <h3 className="ab-pil-title">
                Delivering end-to-end digital solutions with{" "}
                <span className="ab-accent">precision</span>
              </h3>
              <p className="ab-pil-desc">
                Transparent collaboration and relentless attention to detail
                &mdash; empowering our clients to lead in their industries
                through technology.
              </p>
            </div>
          </div>
        </section>

        <div className="ab-thread" aria-hidden="true" />

        {/* ═══════════════════════════════════════
            PRINCIPLES — Core Values
            ═══════════════════════════════════════ */}
        <section className="ab-pr">
          <div className="ab-pr-head">
            <p className="ab-tag">What Drives Us</p>
            <h2 className="ab-section-title">
              Our Core <span className="ab-accent">Values</span>
            </h2>
            <p className="ab-pr-sub">
              The principles that guide every decision we make
              and every line of code we write.
            </p>
            <div className="ab-pr-dots" aria-hidden="true">
              <span /><span /><span /><span />
            </div>
          </div>

          <div className="ab-pr-track">
            <div className="ab-pr-rail" aria-hidden="true" />
            {values.map((v) => (
              <div key={v.title} className="ab-pr-item">
                <div className="ab-pr-circle">
                  <div className="ab-pr-icon">{v.icon}</div>
                </div>
                <div className="ab-pr-stem" aria-hidden="true" />
                <div className="ab-pr-dot">
                  <span>{v.num}</span>
                </div>
                <h3 className="ab-pr-title">{v.title}</h3>
                <p className="ab-pr-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="ab-thread" aria-hidden="true" />

        {/* ═══════════════════════════════════════
            AURORA — CTA
            ═══════════════════════════════════════ */}
        <section className="ab-aur">
          {/* Aurora light bands */}
          <div className="ab-aur-sky" aria-hidden="true">
            <div className="ab-aur-band ab-aur-band--1" />
            <div className="ab-aur-band ab-aur-band--2" />
            <div className="ab-aur-band ab-aur-band--3" />
          </div>

          {/* Star field */}
          <div className="ab-aur-stars" aria-hidden="true">
            <span style={{ top: "12%", left: "8%" }} />
            <span style={{ top: "20%", left: "85%" }} />
            <span style={{ top: "35%", left: "22%" }} />
            <span style={{ top: "18%", left: "55%" }} />
            <span style={{ top: "45%", left: "72%" }} />
            <span style={{ top: "8%", left: "40%" }} />
            <span style={{ top: "55%", left: "12%" }} />
            <span style={{ top: "30%", left: "92%" }} />
            <span style={{ top: "50%", left: "48%" }} />
            <span style={{ top: "15%", left: "68%" }} />
          </div>

          {/* Horizon glow */}
          <div className="ab-aur-horizon" aria-hidden="true" />

          {/* Sweeping light beam */}
          <div className="ab-aur-beam" aria-hidden="true" />

          {/* Content — directly in section, no inner card */}
          <div className="ab-aur-body">
            <div className="ab-aur-badge">
              <span className="ab-aur-badge-dot" />
              Let&apos;s Talk
            </div>

            <h2 className="ab-aur-title">
              Ready to Build Something
              <br />
              <span className="ab-aur-title-accent">Exceptional</span>?
            </h2>

            <p className="ab-aur-desc">
              Let&apos;s discuss how we can bring your vision to life with
              precision engineering and world-class design.
            </p>

            <div className="ab-aur-actions">
              <Link href="/contact" className="ab-aur-btn ab-aur-btn--primary">
                <span className="ab-aur-btn-shimmer" aria-hidden="true" />
                <span className="ab-aur-btn-text">
                  Get a Free Consultation
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
              <Link href="/projects" className="ab-aur-btn ab-aur-btn--outline">
                See Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
