"use client";

import "./services.css";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="sv-section relative pt-28 pb-16 md:pt-36 md:pb-20">
      {/* Ambient glows */}
      <div className="sv-glow sv-glow--1" aria-hidden="true" />
      <div className="sv-glow sv-glow--2" aria-hidden="true" />

      {/* Noise texture */}
      <div className="sv-noise" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ── Section header ── */}
        <div className="mb-20 text-center">
          <p className="sv-label mb-4 text-xs font-bold tracking-[0.35em] uppercase sv-fadeUp [animation-delay:0.1s]">
            What We Do
          </p>
          <h2 className="sv-title mb-5 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl sv-fadeUp [animation-delay:0.25s]">
            Our{" "}
            <span className="sv-title-accent">Services</span>
          </h2>
          <div className="sv-line mx-auto mb-6 h-px w-24 sv-lineExpand [animation-delay:0.45s]" />
          <p className="sv-subtitle mx-auto max-w-lg text-base leading-relaxed md:text-lg sv-fadeUp [animation-delay:0.5s]">
            End-to-end digital solutions crafted with precision,
            from concept to deployment and beyond.
          </p>
        </div>

        {/* ── Bento grid ── */}
        <div className="sv-bento">
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`sv-card sv-card--${i + 1} sv-cardReveal`}
              style={{ animationDelay: `${0.6 + i * 0.15}s` }}
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
                    <span key={tag} className="sv-tag">
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
