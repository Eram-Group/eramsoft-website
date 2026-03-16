"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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

/* ── Tech logo mapping ── */
function getTechLogo(name: string): string {
  const logos: Record<string, string> = {
    Flutter: "/tech/flutter.svg",
    "React Native": "/tech/react.svg",
    React: "/tech/react.svg",
    "Next.js": "/tech/nextjs.svg",
    Firebase: "/tech/firebase.svg",
    "Node.js": "/tech/nodejs.svg",
    PostgreSQL: "/tech/postgresql.svg",
    "Google Maps": "/tech/google-maps.svg",
    Stripe: "/tech/stripe.svg",
    "QR Integration": "/tech/qr.svg",
    Python: "/tech/python.svg",
    "GPT-4": "/tech/openai.svg",
    Kubernetes: "/tech/kubernetes.svg",
  };
  return logos[name] || "/tech/qr.svg";
}

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) return notFound();

  const project = projects[projectIndex];

  const isMobileApp = !project.category.toLowerCase().includes("platform");

  useEffect(() => {
    const els = document.querySelectorAll(".pd-reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("pd-revealed");
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="pd-page">
      {/* Ambient glows */}
      <div className="pd-glow pd-glow--1" aria-hidden="true" />
      <div className="pd-glow pd-glow--2" aria-hidden="true" />
      <div className="pd-glow pd-glow--3" aria-hidden="true" />
      <div className="pd-glow pd-glow--4" aria-hidden="true" />

      {/* Noise texture */}
      <div className="pd-noise" aria-hidden="true" />

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
          {/* Badges removed */}
          <h1 className="pd-hero-title">
            {project.title}
          </h1>
          <p className="pd-hero-tagline">
            {project.tagline}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          Quick Stats
         ══════════════════════════════════════ */}
      <div className="pd-stats">
        <div className={`pd-stats-grid ${(project.appStoreUrl || project.googlePlayUrl || project.websiteUrl) ? "pd-stats-grid--with-downloads" : ""}`}>
          <div className="pd-stat">
            <div className="pd-stat-label">Platform</div>
            <div className="pd-stat-value">{project.platform}</div>
          </div>
          <div className="pd-stat">
            <div className="pd-stat-label">Status</div>
            <div className="pd-stat-value pd-stat-value--live">
              {project.status === "Live" && <span className="pd-live-dot" />}
              {project.status}
            </div>
          </div>
          {project.appStoreUrl && (
              <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className="pd-download">
                <div className="pd-download-icon pd-download-icon--apple">
                  <svg width="20" height="20" viewBox="0 0 814 1000" fill="#ffffff">
                    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.8-82-106.7-209.5-106.7-330.5 0-194.2 126.2-297.5 250.3-297.5 65.9 0 120.9 43.3 162.2 43.3 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8.6 15.7 1.3 18.2 2.6.6 6.4 1.3 10.2 1.3 45.4 0 103.5-30.4 139.5-71.4z"/>
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
          )}
          {project.googlePlayUrl && (
              <a href={project.googlePlayUrl} target="_blank" rel="noopener noreferrer" className="pd-download">
                <div className="pd-download-icon pd-download-icon--google">
                  <svg width="18" height="20" viewBox="0 0 18 20">
                    <path d="M0.55 0.19C0.21 0.54 0 1.09 0 1.79v16.42c0 0.7 0.21 1.25 0.55 1.6L0.65 19.9 9.8 10.75v-0.1v-0.1L0.65 1.4 0.55 0.19z" fill="#4CAF50"/>
                    <path d="M12.85 13.8L9.8 10.75v-0.1v-0.1l3.05-3.05 0.1 0.06 3.61 2.05c1.03 0.59 1.03 1.55 0 2.13l-3.61 2.05-0.1 0.01z" fill="#FFBC00"/>
                    <path d="M13 13.74L9.8 10.55 0.55 19.8c0.34 0.36 0.9 0.4 1.53 0.05L13 13.74z" fill="#F44336"/>
                    <path d="M13 7.36L2.08 1.25C1.45 0.9 0.89 0.94 0.55 1.3L9.8 10.55 13 7.36z" fill="#00BCD4"/>
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
          )}
          {project.websiteUrl && (
              <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="pd-download">
                <div className="pd-download-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="pd-download-info">
                  <span className="pd-download-label">Visit the</span>
                  <span className="pd-download-store">Website</span>
                </div>
                <svg className="pd-download-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════
          Overview
         ══════════════════════════════════════ */}
      <div className="pd-section">
        <p className="pd-section-label">
          Overview
        </p>
        <h2 className="pd-section-title">
          Project <span>Deep Dive</span>
        </h2>
        <div className="pd-divider" />

        <div className="pd-overview-grid">
          <div>
            <div className="pd-overview-block">
              <div className="pd-overview-heading">The Challenge</div>
              <p className="pd-overview-text">{project.challenge}</p>
            </div>
            <div className="pd-overview-block">
              <div className="pd-overview-heading">The Solution</div>
              <p className="pd-overview-text">{project.solution}</p>
            </div>
          </div>

          <div>
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
                <div className="pd-client-label">Services</div>
                <div className="pd-client-services">
                  {project.client.services.map((s) => (
                    <span key={s} className="pd-client-service-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="pd-client-item">
                <div className="pd-client-label">Tech Stack</div>
                <div className="pd-client-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="pd-tech-tag">
                      <img src={getTechLogo(t)} alt="" className="pd-tech-tag-logo" />
                      {t}
                    </span>
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
        <div className="pd-divider" />

        <div className="pd-kc-grid">
          {project.features.map((feature, i) => (
            <div key={feature.title} className="pd-kc-card">
              <div className="pd-kc-card-glow" />
              <div className="pd-kc-card-inner">
                <div className="pd-kc-icon-wrap">
                  <div className="pd-kc-icon-ring" />
                  <div className="pd-kc-icon-box">
                    <FeatureIcon name={feature.icon} />
                  </div>
                </div>
                <h3 className="pd-kc-title">{feature.title}</h3>
                <p className="pd-kc-desc">{feature.description}</p>
              </div>
              <div className="pd-kc-card-border" />
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
        <div className="pd-divider" />

        <div className="pd-gallery-wrap">
          <div className="pd-gallery-track">
            {project.gallery.slice(0, 3).map((img, i) => (
              <div
                key={i}
                className="pd-gallery-item"
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
          Testimonial
         ══════════════════════════════════════ */}
      {project.testimonial && (
        <div className="pd-tst">
          <div className="pd-tst-glyph" aria-hidden="true">&ldquo;</div>
          <blockquote className="pd-tst-quote">
            {project.testimonial.quote}
          </blockquote>
          <div className="pd-tst-rule" aria-hidden="true" />
          <div className="pd-tst-attribution">
            <span className="pd-tst-name">{project.testimonial.author}</span>
            <span className="pd-tst-sep" aria-hidden="true" />
            <span className="pd-tst-role">{project.testimonial.role}</span>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════
          Aurora CTA
         ══════════════════════════════════════ */}
      <section className="pd-aur pd-reveal">
        {/* Aurora light bands */}
        <div className="pd-aur-sky" aria-hidden="true">
          <div className="pd-aur-band pd-aur-band--1" />
          <div className="pd-aur-band pd-aur-band--2" />
          <div className="pd-aur-band pd-aur-band--3" />
        </div>

        {/* Star field */}
        <div className="pd-aur-stars" aria-hidden="true">
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
        <div className="pd-aur-horizon" aria-hidden="true" />

        {/* Sweeping light beam */}
        <div className="pd-aur-beam" aria-hidden="true" />

        {/* Content */}
        <div className="pd-aur-body">
          <div className="pd-aur-badge">
            <span className="pd-aur-badge-dot" />
            Let&apos;s Talk
          </div>

          <h2 className="pd-aur-title">
            Ready to Build Something
            <br />
            <span className="pd-aur-title-accent">Exceptional</span>?
          </h2>

          <p className="pd-aur-desc">
            Let&apos;s discuss how we can bring your vision to life with
            precision engineering and world-class design.
          </p>

          <div className="pd-aur-actions">
            <Link href="/contact" className="pd-aur-btn pd-aur-btn--primary">
              <span className="pd-aur-btn-shimmer" aria-hidden="true" />
              <span className="pd-aur-btn-text">
                Get a Free Consultation
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
            <Link href="/#projects" className="pd-aur-btn pd-aur-btn--outline">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
