"use client";

import Link from "next/link";
import Image from "next/image";
import "./about.css";

/* ══════════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════════ */

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "6+", label: "Years of Experience" },
  { value: "30+", label: "Team Members" },
  { value: "98%", label: "Client Retention" },
];

const values = [
  {
    title: "Precision Engineering",
    description: "We don't ship shortcuts. Every line of code is reviewed, tested, and optimized for performance and maintainability.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Transparent Partnership",
    description: "No black boxes. We keep you in the loop with clear communication, honest timelines, and full visibility at every stage.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Relentless Quality",
    description: "From automated testing to security audits, we bake quality into every step — not as an afterthought, but as a foundation.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Forward Thinking",
    description: "We build for tomorrow — choosing scalable architectures, modern tools, and patterns that grow with your business.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

const milestones = [
  { year: "2019", title: "Founded", desc: "Started as a small team of 4 engineers with a shared passion for building exceptional software." },
  { year: "2020", title: "First Enterprise Client", desc: "Delivered a fintech platform that processed $2M+ in transactions within its first quarter." },
  { year: "2021", title: "Team Growth", desc: "Expanded to 15 engineers across mobile, web, and cloud disciplines." },
  { year: "2022", title: "Regional Expansion", desc: "Opened our second office and partnered with clients across 3 countries." },
  { year: "2023", title: "30+ Team Members", desc: "Grew to a full-service digital agency with dedicated QA, DevOps, and design teams." },
  { year: "2024", title: "AI & Innovation", desc: "Launched our AI practice, integrating machine learning into client products." },
];

/* ══════════════════════════════════════════════════
   COMPONENT
   ══════════════════════════════════════════════════ */

export default function AboutPage() {
  return (
    <div className="ab-page">
      {/* Ambient glows */}
      <div className="ab-glow ab-glow--1" aria-hidden="true" />
      <div className="ab-glow ab-glow--2" aria-hidden="true" />
      <div className="ab-glow ab-glow--3" aria-hidden="true" />
      <div className="ab-noise" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-8 pb-24 md:px-12 lg:px-16">

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between mb-20 pt-4 ab-fadeUp [animation-delay:0.05s]">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={147} height={42} className="brightness-0 invert opacity-80" />
          </Link>
          <Link href="/" className="ab-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>


        {/* ════════════════════════════════════════════
            SECTION 1: HERO / OUR STORY
            Split layout — big text left, stats right
            ════════════════════════════════════════════ */}
        <section className="ab-hero ab-fadeUp [animation-delay:0.1s]">
          <div className="ab-hero-content">
            <p className="ab-label mb-4">About Us</p>
            <h1 className="ab-hero-title">
              We Build the <span className="ab-accent">Digital Backbone</span> of Ambitious Businesses
            </h1>
            <p className="ab-hero-desc">
              Eram Soft was born from a simple belief: great software should feel invisible.
              It should work so seamlessly that users forget there&apos;s engineering behind it.
              Since 2019, we&apos;ve been turning complex challenges into elegant digital solutions —
              from mobile apps and web platforms to cloud infrastructure and AI-powered tools.
            </p>
            <p className="ab-hero-desc">
              We&apos;re not a factory. We&apos;re a team of engineers, designers, and strategists
              who care deeply about craft. Every project gets our full attention, and every
              client becomes a long-term partner.
            </p>
          </div>

          <div className="ab-hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="ab-stat">
                <span className="ab-stat-value">{stat.value}</span>
                <span className="ab-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>


        <div className="section-divider ab-divider" aria-hidden="true" />


        {/* ════════════════════════════════════════════
            SECTION 2: VISION & MISSION
            Two glass cards side by side
            ════════════════════════════════════════════ */}
        <section className="ab-vm ab-fadeUp [animation-delay:0.15s]">
          <div className="ab-vm-card">
            <div className="ab-vm-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h2 className="ab-vm-title">Our Vision</h2>
            <p className="ab-vm-desc">
              To be the engineering partner of choice for businesses that refuse to
              compromise on quality — building software that sets new standards
              for performance, design, and reliability across the region.
            </p>
          </div>

          <div className="ab-vm-card">
            <div className="ab-vm-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
                <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
              </svg>
            </div>
            <h2 className="ab-vm-title">Our Mission</h2>
            <p className="ab-vm-desc">
              To deliver end-to-end digital solutions with precision engineering,
              transparent collaboration, and relentless attention to detail —
              empowering our clients to lead in their industries through technology.
            </p>
          </div>
        </section>


        <div className="section-divider ab-divider" aria-hidden="true" />


        {/* ════════════════════════════════════════════
            SECTION 3: OUR VALUES
            Offset 2x2 grid with icon cards
            ════════════════════════════════════════════ */}
        <section className="ab-values ab-fadeUp [animation-delay:0.15s]">
          <div className="ab-values-header">
            <p className="ab-label mb-3">What Drives Us</p>
            <h2 className="ab-section-title">
              Our Core <span className="ab-accent">Values</span>
            </h2>
          </div>

          <div className="ab-values-grid">
            {values.map((val, i) => (
              <div key={val.title} className="ab-value-card" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                <div className="ab-value-icon">{val.icon}</div>
                <h3 className="ab-value-title">{val.title}</h3>
                <p className="ab-value-desc">{val.description}</p>
                <span className="ab-value-num">0{i + 1}</span>
              </div>
            ))}
          </div>
        </section>


        <div className="section-divider ab-divider" aria-hidden="true" />


        {/* ════════════════════════════════════════════
            SECTION 4: OUR JOURNEY / MILESTONES
            Horizontal scrolling timeline
            ════════════════════════════════════════════ */}
        <section className="ab-journey ab-fadeUp [animation-delay:0.15s]">
          <div className="ab-journey-header">
            <p className="ab-label mb-3">Our Journey</p>
            <h2 className="ab-section-title">
              Key <span className="ab-accent">Milestones</span>
            </h2>
          </div>

          <div className="ab-timeline-track">
            {/* Horizontal line */}
            <div className="ab-timeline-rail" aria-hidden="true" />

            <div className="ab-timeline-items">
              {milestones.map((m, i) => (
                <div key={m.year} className={`ab-milestone ${i % 2 === 0 ? "ab-milestone--above" : "ab-milestone--below"}`}>
                  <div className="ab-milestone-dot" />
                  <div className="ab-milestone-card">
                    <span className="ab-milestone-year">{m.year}</span>
                    <h3 className="ab-milestone-title">{m.title}</h3>
                    <p className="ab-milestone-desc">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <div className="section-divider ab-divider" aria-hidden="true" />


        {/* ════════════════════════════════════════════
            SECTION 5: CTA
            Full-width call to action
            ════════════════════════════════════════════ */}
        <section className="ab-cta ab-fadeUp [animation-delay:0.15s]">
          <div className="ab-cta-inner">
            <h2 className="ab-cta-title">
              Ready to Build Something <span className="ab-accent">Exceptional</span>?
            </h2>
            <p className="ab-cta-desc">
              Let&apos;s discuss how we can bring your vision to life with precision engineering
              and world-class design.
            </p>
            <div className="ab-cta-actions">
              <Link href="/#services" className="ab-cta-btn ab-cta-btn--primary">
                Explore Services
              </Link>
              <Link href="/#clients" className="ab-cta-btn ab-cta-btn--secondary">
                See Our Clients
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
