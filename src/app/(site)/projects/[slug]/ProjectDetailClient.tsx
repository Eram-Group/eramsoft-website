"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  Compass, Map, Bell, BarChart3, Globe, Shield, Truck, Tag,
  CreditCard, Home, Zap, Repeat, Video, User, ShoppingBag,
  Award, BarChart, Clock, QrCode, Coffee, Gift, Tablet,
  PieChart, FileText, AlertTriangle, Layers, MessageSquare,
  Lock, Database, ArrowUpRight,
} from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import MosaicCTA from "@/components/ui/MosaicCTA";
import type { SanityProject, SanityProjectListItem } from "@/sanity/lib/types";
import "./project-detail.css";

/* ── Icon component for features ── */
const FEATURE_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  compass: Compass,
  map: Map,
  bell: Bell,
  chart: BarChart3,
  globe: Globe,
  shield: Shield,
  truck: Truck,
  tag: Tag,
  "credit-card": CreditCard,
  store: Home,
  zap: Zap,
  repeat: Repeat,
  video: Video,
  user: User,
  "shopping-bag": ShoppingBag,
  award: Award,
  "bar-chart": BarChart,
  clock: Clock,
  "qr-code": QrCode,
  coffee: Coffee,
  gift: Gift,
  tablet: Tablet,
  "pie-chart": PieChart,
  "file-text": FileText,
  "alert-triangle": AlertTriangle,
  layers: Layers,
  "message-square": MessageSquare,
  lock: Lock,
  database: Database,
};

function FeatureIcon({ name }: { name: string }) {
  const Icon = FEATURE_ICONS[name] ?? Zap;
  return <Icon size={20} />;
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

export default function ProjectDetailClient({
  project,
  allProjects,
}: {
  project: SanityProject;
  allProjects: SanityProjectListItem[];
}) {
  const isMobileApp = project.galleryType
    ? project.galleryType === "mobile"
    : !project.category.toLowerCase().includes("platform");

  const hasDownloads = isMobileApp
    ? Boolean(project.appStoreUrl || project.playStoreUrl)
    : Boolean(project.websiteUrl);

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

  const heroSource = project.heroImage ?? project.image;
  const heroImageUrl = heroSource ? urlFor(heroSource).width(1400).url() : "/placeholder.jpg";

  return (
    <div className="pd-page">
      {/* Ambient glows */}
      <div className="pd-glow pd-glow--1" aria-hidden="true" />
      <div className="pd-glow pd-glow--2" aria-hidden="true" />
      <div className="pd-glow pd-glow--3" aria-hidden="true" />
      <div className="pd-glow pd-glow--4" aria-hidden="true" />

      {/* Noise texture */}
      <div className="pd-noise" aria-hidden="true" />

      {/* Hero Section */}
      <section className="pd-hero">
        <div className="pd-hero-img">
          <Image
            src={heroImageUrl}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="pd-hero-img-el"
          />
        </div>
        <div className="pd-hero-overlay" />
        <div className="pd-hero-scanline" aria-hidden="true" />

        <div className="pd-hero-content">
          <h1 className="pd-hero-title">
            {project.title}
          </h1>
          <p className="pd-hero-tagline">
            {project.tagline}
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <div className="pd-stats">
        <div className={`pd-stats-grid ${hasDownloads ? "pd-stats-grid--with-downloads" : ""}`}>
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

          {isMobileApp && project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pd-download"
              aria-label="Download on the App Store"
            >
              <div className="pd-download-icon pd-download-icon--apple">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                  <path d="M17.05 12.94c-.02-2.53 2.07-3.75 2.16-3.81-1.18-1.72-3-1.96-3.65-1.99-1.55-.16-3.03.91-3.82.91-.79 0-2.01-.89-3.31-.86-1.7.03-3.27.99-4.14 2.51-1.77 3.07-.45 7.6 1.26 10.1.84 1.22 1.84 2.59 3.15 2.54 1.27-.05 1.74-.82 3.27-.82 1.53 0 1.96.82 3.3.79 1.36-.02 2.22-1.24 3.05-2.47.96-1.41 1.36-2.79 1.38-2.86-.03-.01-2.64-1.01-2.66-4.04zM14.55 5.39c.7-.85 1.18-2.03 1.05-3.21-1.01.04-2.24.67-2.97 1.52-.65.75-1.22 1.95-1.07 3.1 1.13.09 2.28-.57 2.99-1.41z" />
                </svg>
              </div>
              <div className="pd-download-info">
                <span className="pd-download-label">Download on the</span>
                <span className="pd-download-store">App Store</span>
              </div>
              <ArrowUpRight size={16} className="pd-download-arrow" />
            </a>
          )}

          {isMobileApp && project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pd-download"
              aria-label="Get it on Google Play"
            >
              <div className="pd-download-icon pd-download-icon--google">
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#00C3FF" />
                  <path d="M16.81 8.988l-2.886 2.886L3.71 1.685a1.014 1.014 0 01.79.13l12.31 7.173z" fill="#00E676" />
                  <path d="M16.81 15.012L4.5 22.185a1.014 1.014 0 01-.79.13l10.214-10.189 2.886 2.886z" fill="#F44336" />
                  <path d="M20.522 13.012l-3.712 2.0L13.924 12l2.886-2.886 3.712 2c1.061.602 1.061 1.297 0 1.898z" fill="#FFC107" />
                </svg>
              </div>
              <div className="pd-download-info">
                <span className="pd-download-label">Get it on</span>
                <span className="pd-download-store">Google Play</span>
              </div>
              <ArrowUpRight size={16} className="pd-download-arrow" />
            </a>
          )}

          {!isMobileApp && project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pd-download"
              aria-label="Visit website"
            >
              <div className="pd-download-icon">
                <Globe size={20} />
              </div>
              <div className="pd-download-info">
                <span className="pd-download-label">Launch</span>
                <span className="pd-download-store">Visit Website</span>
              </div>
              <ArrowUpRight size={16} className="pd-download-arrow" />
            </a>
          )}
        </div>
      </div>

      {/* Overview */}
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
                <div className="pd-client-value">{project.client?.name ?? "N/A"}</div>
              </div>

              <div className="pd-client-item">
                <div className="pd-client-label">Industry</div>
                <div className="pd-client-value">{project.client?.industry ?? "N/A"}</div>
              </div>

              <div className="pd-client-item">
                <div className="pd-client-label">Services</div>
                <div className="pd-client-services">
                  {(project.client?.services ?? []).map((s) => (
                    <span key={s} className="pd-client-service-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="pd-client-item">
                <div className="pd-client-label">Tech Stack</div>
                <div className="pd-client-tech">
                  {(project.tech ?? []).map((t) => (
                    <span key={t} className="pd-tech-tag">
                      <Image src={getTechLogo(t)} alt="" width={16} height={16} className="pd-tech-tag-logo" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="pd-section">
        <p className="pd-section-label">Gallery</p>
        <h2 className="pd-section-title">
          App <span>Screenshots</span>
        </h2>
        <div className="pd-divider" />

        <div className="pd-gallery-wrap">
          <div className="pd-gallery-track">
            {(project.gallery ?? []).slice(0, 3).map((img, i) => (
              <div
                key={i}
                className="pd-gallery-item"
              >
                <div className="pd-device-frame">
                  <Image
                    src={img ? urlFor(img).width(800).url() : "/placeholder.jpg"}
                    alt={`${project.title} screenshot ${i + 1}`}
                    width={800}
                    height={isMobileApp ? 1600 : 500}
                    className={`pd-gallery-img ${!isMobileApp ? "pd-gallery-img--web" : ""}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="pd-section">
        <p className="pd-section-label">Features</p>
        <h2 className="pd-section-title">
          Key <span>Capabilities</span>
        </h2>
        <div className="pd-divider" />

        <div className={`pd-kc-grid ${(project.features ?? []).length > 6 ? "pd-kc-grid--scroll" : ""}`}>
          {(project.features ?? []).map((feature) => (
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

      {/* Testimonial */}
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

      {/* Bottom CTA — Mosaic */}
      <div className="pd-reveal">
        <MosaicCTA projects={allProjects} prefix="pd" />
      </div>
    </div>
  );
}
