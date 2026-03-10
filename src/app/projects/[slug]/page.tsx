"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import "./project-detail.css";

/* ── Icon component for features ── */
function FeatureIcon({ name }: { name: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    compass: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
    map: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="16" y1="6" x2="16" y2="22" />
      </svg>
    ),
    bell: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    chart: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    globe: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    shield: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    truck: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    tag: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
    "credit-card": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    store: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    zap: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    repeat: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
    video: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    user: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    "shopping-bag": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    award: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    "bar-chart": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
    clock: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    "qr-code": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="8" height="8" rx="1" />
        <rect x="14" y="2" width="8" height="8" rx="1" />
        <rect x="2" y="14" width="8" height="8" rx="1" />
        <rect x="14" y="14" width="4" height="4" rx="1" />
        <line x1="22" y1="14" x2="22" y2="14.01" />
        <line x1="22" y1="18" x2="22" y2="22" />
        <line x1="18" y1="22" x2="18" y2="22.01" />
      </svg>
    ),
    coffee: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    gift: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 12 20 22 4 22 4 12" />
        <rect x="2" y="7" width="20" height="5" />
        <line x1="12" y1="22" x2="12" y2="7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
    tablet: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    "pie-chart": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
    "file-text": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    "alert-triangle": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    layers: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    "message-square": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    lock: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    database: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  };

  return <>{iconMap[name] || iconMap.zap}</>;
}

/* ── Tech role mapping ── */
function getTechRole(tech: string): string {
  const roles: Record<string, string> = {
    Flutter: "Frontend",
    "React Native": "Frontend",
    "Next.js": "Frontend",
    React: "Frontend",
    Firebase: "Backend & Database",
    "Node.js": "Backend",
    PostgreSQL: "Database",
    "Google Maps": "Maps & Location",
    Stripe: "Payments",
    "QR Integration": "Hardware Integration",
    Python: "Backend & AI",
    "GPT-4": "AI / NLP Engine",
    Kubernetes: "Infrastructure",
  };
  return roles[tech] || "Core Technology";
}

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) return notFound();

  const project = projects[projectIndex];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const isMobileApp = project.category.toLowerCase().includes("mobile");

  return (
    <div className="pd-page">
      {/* Ambient glows */}
      <div className="pd-glow pd-glow--1" aria-hidden="true" />
      <div className="pd-glow pd-glow--2" aria-hidden="true" />
      <div className="pd-glow pd-glow--3" aria-hidden="true" />
      <div className="pd-glow pd-glow--4" aria-hidden="true" />

      {/* Noise texture */}
      <div className="pd-noise" aria-hidden="true" />

      {/* ── Top bar ── */}
      <nav className="pd-topbar">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Digital Backbone"
            width={130}
            height={38}
            className="brightness-0 invert opacity-80"
          />
        </Link>
        <Link href="/projects" className="pd-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>All Projects</span>
        </Link>
      </nav>

      {/* ══════════════════════════════════════
          Hero Section
         ══════════════════════════════════════ */}
      <section className="pd-hero">
        <div
          className="pd-hero-img"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="pd-hero-overlay" />
        <div className="pd-hero-scanline" aria-hidden="true" />

        <div className="pd-hero-content">
          <div className="pd-hero-badges pd-fadeUp" style={{ animationDelay: "0.3s" }}>
            <span className="pd-badge">{project.category}</span>
            <span className="pd-badge pd-badge--year">{project.year}</span>
          </div>
          <h1 className="pd-hero-title pd-fadeUp" style={{ animationDelay: "0.45s" }}>
            {project.title}
          </h1>
          <p className="pd-hero-tagline pd-fadeUp" style={{ animationDelay: "0.6s" }}>
            {project.tagline}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          Quick Stats
         ══════════════════════════════════════ */}
      <div className="pd-stats">
        <div className={`pd-stats-grid ${isMobileApp && project.status === "Live" ? "pd-stats-grid--with-downloads" : ""}`}>
          <div className="pd-stat pd-cardReveal" style={{ animationDelay: "0.7s" }}>
            <div className="pd-stat-label">Platform</div>
            <div className="pd-stat-value">{project.platform}</div>
          </div>
          <div className="pd-stat pd-cardReveal" style={{ animationDelay: "0.8s" }}>
            <div className="pd-stat-label">Status</div>
            <div className="pd-stat-value pd-stat-value--live">
              {project.status === "Live" && <span className="pd-live-dot" />}
              {project.status}
            </div>
          </div>
          {isMobileApp && project.status === "Live" && (
            <>
              <a href="#" className="pd-download pd-cardReveal" style={{ animationDelay: "0.9s" }}>
                <div className="pd-download-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.5 12.5c1.58-1.43 2.5-3.54 2.5-5.5 0-3.87-3.13-7-7-7a6.99 6.99 0 0 0-5.9 3.24" />
                    <path d="M8 15c-2.76 0-5-2.24-5-5 0-2.27 1.52-4.19 3.6-4.8" />
                    <path d="M12 2a7 7 0 0 1 5.5 11.3" />
                    <path d="M12 22V12" />
                    <path d="M8 18l4 4 4-4" />
                  </svg>
                </div>
                <div className="pd-download-info">
                  <span className="pd-download-label">Download on the</span>
                  <span className="pd-download-store">App Store</span>
                </div>
                <svg className="pd-download-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
              <a href="#" className="pd-download pd-cardReveal" style={{ animationDelay: "1s" }}>
                <div className="pd-download-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <div className="pd-download-info">
                  <span className="pd-download-label">Get it on</span>
                  <span className="pd-download-store">Google Play</span>
                </div>
                <svg className="pd-download-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </>
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════
          Overview
         ══════════════════════════════════════ */}
      <div className="pd-section">
        <p className="pd-section-label pd-fadeUp" style={{ animationDelay: "0.9s" }}>
          Overview
        </p>
        <h2 className="pd-section-title pd-fadeUp" style={{ animationDelay: "1s" }}>
          Project <span>Deep Dive</span>
        </h2>
        <div className="pd-divider pd-lineExpand" style={{ animationDelay: "1.1s" }} />

        <div className="pd-overview-grid">
          <div>
            <div className="pd-overview-block pd-fadeUp" style={{ animationDelay: "1.15s" }}>
              <div className="pd-overview-heading">The Challenge</div>
              <p className="pd-overview-text">{project.challenge}</p>
            </div>
            <div className="pd-overview-block pd-fadeUp" style={{ animationDelay: "1.25s" }}>
              <div className="pd-overview-heading">The Solution</div>
              <p className="pd-overview-text">{project.solution}</p>
            </div>
          </div>

          <div className="pd-cardReveal" style={{ animationDelay: "1.3s" }}>
            <div className="pd-client-card">
              <div className="pd-client-card-title">Client Details</div>

              <div className="pd-client-item">
                <div className="pd-client-label">Client</div>
                <div className="pd-client-value">{project.client.name}</div>
              </div>

              <div className="pd-client-item">
                <div className="pd-client-label">Industry</div>
                <div className="pd-client-value">{project.client.industry}</div>
              </div>

              <div className="pd-client-item">
                <div className="pd-client-label">Location</div>
                <div className="pd-client-value">{project.client.location}</div>
              </div>

              <div className="pd-client-item">
                <div className="pd-client-label">Services</div>
                <div className="pd-client-services">
                  {project.client.services.map((s) => (
                    <span key={s} className="pd-client-service-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          Key Features
         ══════════════════════════════════════ */}
      <div className="pd-section">
        <p className="pd-section-label">Features</p>
        <h2 className="pd-section-title">
          Key <span>Capabilities</span>
        </h2>
        <div className="pd-divider pd-lineExpand" />

        <div className="pd-features-grid">
          {project.features.map((feature, i) => (
            <div
              key={feature.title}
              className="pd-feature pd-cardReveal"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="pd-feature-scanline" />
              <div className="pd-feature-icon">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="pd-feature-title">{feature.title}</h3>
              <p className="pd-feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          Gallery
         ══════════════════════════════════════ */}
      <div className="pd-section">
        <p className="pd-section-label">Gallery</p>
        <h2 className="pd-section-title">
          App <span>Screenshots</span>
        </h2>
        <div className="pd-divider pd-lineExpand" />

        <div className="pd-gallery-wrap">
          <div className="pd-gallery-track">
            {project.gallery.map((img, i) => (
              <div
                key={i}
                className="pd-gallery-item pd-cardReveal"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="pd-device-frame">
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className={`pd-gallery-img ${!isMobileApp ? "pd-gallery-img--web" : ""}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          Tech Stack
         ══════════════════════════════════════ */}
      <div className="pd-section">
        <p className="pd-section-label">Technology</p>
        <h2 className="pd-section-title">
          Built <span>With</span>
        </h2>
        <div className="pd-divider pd-lineExpand" />

        <div className="pd-tech-grid">
          {project.tech.map((t, i) => (
            <div
              key={t}
              className="pd-tech-card pd-cardReveal"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="pd-tech-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <div className="pd-tech-info">
                <span className="pd-tech-name">{t}</span>
                <span className="pd-tech-role">{getTechRole(t)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          Testimonial
         ══════════════════════════════════════ */}
      {project.testimonial && (
        <div className="pd-testimonial">
          <div className="pd-testimonial-card pd-cardReveal">
            <div className="pd-testimonial-quote-mark">&ldquo;</div>
            <p className="pd-testimonial-text">{project.testimonial.quote}</p>
            <div className="pd-testimonial-author">{project.testimonial.author}</div>
            <div className="pd-testimonial-role">{project.testimonial.role}</div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════
          Contact CTA
         ══════════════════════════════════════ */}
      <div className="pd-cta-section">
        <div className="pd-cta-card pd-cardReveal">
          <div className="pd-cta-glow" aria-hidden="true" />
          <div className="pd-cta-scanline" aria-hidden="true" />

          <p className="pd-cta-label">Have a similar idea?</p>
          <h2 className="pd-cta-title">
            Let&apos;s build something <span>great together</span>
          </h2>
          <p className="pd-cta-desc">
            Whether you need a mobile app, web platform, or AI-powered solution — our team is ready to bring your vision to life.
          </p>

          <div className="pd-cta-actions">
            <a href="mailto:hello@digitalbackbone.dev" className="pd-cta-btn pd-cta-btn--primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Email Us</span>
            </a>
            <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="pd-cta-btn pd-cta-btn--secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          Next / Previous Navigation
         ══════════════════════════════════════ */}
      <div className="pd-nav">
        <div className="pd-nav-divider" />

        <div className="pd-nav-grid">
          <Link href={`/projects/${prevProject.slug}`} className="pd-nav-card">
            <div className="pd-nav-scanline" />
            <img
              src={prevProject.image}
              alt={prevProject.title}
              className="pd-nav-thumb"
            />
            <div>
              <div className="pd-nav-direction">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Previous Project
              </div>
              <div className="pd-nav-name">{prevProject.title}</div>
              <div className="pd-nav-category">{prevProject.category}</div>
            </div>
          </Link>

          <Link href={`/projects/${nextProject.slug}`} className="pd-nav-card pd-nav-card--next">
            <div className="pd-nav-scanline" />
            <img
              src={nextProject.image}
              alt={nextProject.title}
              className="pd-nav-thumb"
            />
            <div>
              <div className="pd-nav-direction">
                Next Project
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
              <div className="pd-nav-name">{nextProject.title}</div>
              <div className="pd-nav-category">{nextProject.category}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
