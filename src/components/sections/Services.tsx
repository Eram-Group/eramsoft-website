"use client";

import "./services.css";
import { services } from "@/data/services";
import SectionHeader from "@/components/ui/SectionHeader";
import AmbientEffects from "@/components/ui/AmbientEffects";

export default function Services() {
  return (
    <section id="services" className="sv-section dark-section section-top-glow relative pt-20 pb-10 md:pt-24 md:pb-14">
      <AmbientEffects />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ── Section header ── */}
        <SectionHeader
          label="What We Do"
          title="Our"
          accentWord="Services"
          subtitle="End-to-end digital solutions crafted with precision, from concept to deployment and beyond."
        />

        {/* ── Bento grid ── */}
        <div className="sv-bento">
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`sv-card sv-card--${i + 1}`}
            >
              {/* Background image */}
              <div
                className="sv-card-bg"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Dark gradient overlay */}
              <div className="sv-card-overlay" />

              {/* Neon glow on hover */}
              <div className="sv-card-glow" />

              {/* Scan line effect */}
              <div className="sv-scanline" />

              {/* Arrow */}
              <div className="sv-arrow">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>

              {/* Content */}
              <div className="sv-card-content">
                <h3 className="sv-card-title">{service.title}</h3>
                <p className="sv-card-desc">{service.description}</p>
                <div className="sv-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="neon-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
