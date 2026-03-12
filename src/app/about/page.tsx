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
  useEffect(() => {
    const els = document.querySelectorAll(".ab-reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("ab-revealed");
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

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
          HERO — Cinematic full-viewport
          ═══════════════════════════════════════ */}
      <section className="ab-hero">
        <div className="ab-hero-bg">
          <Image
            src="/about-hero.jpg"
            alt="Eram Soft team"
            fill
            className="ab-hero-img"
            sizes="100vw"
            priority
          />
          <div className="ab-hero-overlay" aria-hidden="true" />
          <div className="ab-hero-vignette" aria-hidden="true" />
          <div className="ab-hero-scan" aria-hidden="true" />
        </div>

        {/* Viewfinder frame corners */}
        <div className="ab-hero-frame" aria-hidden="true">
          <span className="ab-hero-corner ab-hero-corner--tl" />
          <span className="ab-hero-corner ab-hero-corner--br" />
        </div>

        {/* Neon orbit arcs */}
        <svg
          className="ab-hero-arcs"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="abArc1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64c8ff" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#50aaff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#64c8ff" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="abArc2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#82d2ff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#50a0ff" stopOpacity="0.03" />
            </linearGradient>
          </defs>
          <ellipse
            cx="1050" cy="380" rx="260" ry="190"
            stroke="url(#abArc1)" strokeWidth="1.2"
            strokeDasharray="1800"
            className="ab-arc ab-arc--1"
          />
          <ellipse
            cx="1020" cy="420" rx="380" ry="260"
            stroke="url(#abArc2)" strokeWidth="0.7"
            strokeDasharray="2400"
            className="ab-arc ab-arc--2"
          />
        </svg>

        {/* Hero content */}
        <div className="ab-hero-body">
          <p className="ab-tag ab-rise" style={{ animationDelay: "0.2s" }}>
            About Eram Soft
          </p>
          <h1 className="ab-hero-h1">
            <span className="ab-hero-line" style={{ animationDelay: "0.35s" }}>
              We Build the
            </span>
            <span className="ab-hero-line" style={{ animationDelay: "0.5s" }}>
              <span className="ab-accent">Digital Backbone</span>
            </span>
            <span className="ab-hero-line" style={{ animationDelay: "0.65s" }}>
              of Ambitious Businesses
            </span>
          </h1>
          <div className="ab-hero-rule" aria-hidden="true" />
          <p className="ab-hero-sub ab-rise" style={{ animationDelay: "0.9s" }}>
            Since 2019, turning complex challenges into elegant digital
            solutions &mdash; from mobile apps and web platforms to cloud
            infrastructure and AI-powered tools.
          </p>
        </div>

        {/* Stats glass bar */}
        <div className="ab-hero-stats ab-rise" style={{ animationDelay: "1.05s" }}>
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} />
          ))}
        </div>

      </section>

      {/* ── Main content container ── */}
      <div className="ab-wrap">

        <div className="ab-thread" aria-hidden="true" />

        {/* ═══════════════════════════════════════
            NARRATIVE — Editorial split
            ═══════════════════════════════════════ */}
        <section className="ab-nar ab-reveal">
          <div className="ab-nar-left">
            <p className="ab-tag">Our Story</p>
            <blockquote className="ab-nar-quote">
              &ldquo;Great software should feel{" "}
              <span className="ab-accent">invisible</span>. It should work so
              seamlessly that users forget there&apos;s engineering behind
              it.&rdquo;
            </blockquote>
            <div className="ab-nar-badge">
              <span className="ab-nar-badge-yr">2019</span>
              <span className="ab-nar-badge-lbl">Year Founded</span>
            </div>
          </div>
          <div className="ab-nar-right">
            <p className="ab-prose">
              Eram Soft was born from a simple belief: great software should
              feel invisible. It should work so seamlessly that users forget
              there&apos;s engineering behind it. Since 2019, we&apos;ve been
              turning complex challenges into elegant digital solutions &mdash;
              from mobile apps and web platforms to cloud infrastructure and
              AI-powered tools.
            </p>
            <p className="ab-prose">
              We&apos;re not a factory. We&apos;re a team of engineers,
              designers, and strategists who care deeply about craft. Every
              project gets our full attention, and every client becomes a
              long-term partner.
            </p>
            <div className="ab-nar-photo">
              <Image
                src="/about-team2.jpg"
                alt="Team collaboration"
                fill
                className="ab-nar-photo-img"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <div className="ab-nar-photo-glow" aria-hidden="true" />
            </div>
          </div>
        </section>

        <div className="ab-thread" aria-hidden="true" />

        {/* ═══════════════════════════════════════
            PILLARS — Vision & Mission
            ═══════════════════════════════════════ */}
        <section className="ab-pil ab-reveal">
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
            VM CARDS — Vision & Mission glass cards
            ═══════════════════════════════════════ */}
        <section className="ab-vm ab-vm--single ab-reveal">
          <div className="ab-vm-card ab-vm-card--combined">
            <span className="ab-vm-mark" aria-hidden="true">V&thinsp;M</span>

            <div className="ab-vm-split">
              <div className="ab-vm-half">
                <div className="ab-vm-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h2 className="ab-vm-title">Our Vision</h2>
                <p className="ab-vm-desc">
                  To be the engineering partner of choice for businesses that refuse
                  to compromise on quality &mdash; building software that sets new
                  standards for performance, design, and reliability across the
                  region.
                </p>
              </div>

              <div className="ab-vm-divider" aria-hidden="true" />

              <div className="ab-vm-half">
                <div className="ab-vm-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
                    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
                  </svg>
                </div>
                <h2 className="ab-vm-title">Our Mission</h2>
                <p className="ab-vm-desc">
                  To deliver end-to-end digital solutions with precision
                  engineering, transparent collaboration, and relentless attention
                  to detail &mdash; empowering our clients to lead in their
                  industries through technology.
                </p>
              </div>
            </div>

            <div className="ab-vm-edge" aria-hidden="true" />
          </div>
        </section>


        <div className="ab-thread" aria-hidden="true" />

        {/* ═══════════════════════════════════════
            PRINCIPLES — Core Values
            ═══════════════════════════════════════ */}
        <section className="ab-pr ab-reveal">
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
        <section className="ab-aur ab-reveal">
          {/* Aurora light bands */}
          <div className="ab-aur-sky" aria-hidden="true">
            <div className="ab-aur-band ab-aur-band--1" />
            <div className="ab-aur-band ab-aur-band--2" />
            <div className="ab-aur-band ab-aur-band--3" />
          </div>

          {/* Star field */}
          <div className="ab-aur-stars" aria-hidden="true">
            <span style={{ top: "12%", left: "8%", animationDelay: "0s" }} />
            <span style={{ top: "20%", left: "85%", animationDelay: "1.2s" }} />
            <span style={{ top: "35%", left: "22%", animationDelay: "0.6s" }} />
            <span style={{ top: "18%", left: "55%", animationDelay: "2.1s" }} />
            <span style={{ top: "45%", left: "72%", animationDelay: "0.3s" }} />
            <span style={{ top: "8%", left: "40%", animationDelay: "1.8s" }} />
            <span style={{ top: "55%", left: "12%", animationDelay: "0.9s" }} />
            <span style={{ top: "30%", left: "92%", animationDelay: "1.5s" }} />
            <span style={{ top: "50%", left: "48%", animationDelay: "2.4s" }} />
            <span style={{ top: "15%", left: "68%", animationDelay: "0.4s" }} />
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
              <Link href="/#contact" className="ab-aur-btn ab-aur-btn--primary">
                <span className="ab-aur-btn-shimmer" aria-hidden="true" />
                <span className="ab-aur-btn-text">
                  Get a Free Consultation
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
              <Link href="/#projects" className="ab-aur-btn ab-aur-btn--outline">
                See Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
