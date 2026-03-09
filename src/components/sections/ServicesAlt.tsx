"use client";

import { useState } from "react";
import "./services-alt.css";
import { services } from "@/data/services";

export default function ServicesAlt() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services-alt" className="sa-section relative py-28 md:py-36">
      {/* Ambient glows */}
      <div className="sa-glow sa-glow--1" aria-hidden="true" />
      <div className="sa-glow sa-glow--2" aria-hidden="true" />
      <div className="sa-noise" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ── Section header ── */}
        <div className="mb-20 text-center">
          <p className="sa-label mb-4 text-xs font-bold tracking-[0.35em] uppercase sa-fadeUp [animation-delay:0.1s]">
            What We Do
          </p>
          <h2 className="sa-title mb-5 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl sa-fadeUp [animation-delay:0.25s]">
            Our{" "}
            <span className="sa-title-accent">Services</span>
          </h2>
          <div className="sa-line mx-auto mb-6 h-px w-24 sa-lineExpand [animation-delay:0.45s]" />
          <p className="sa-subtitle mx-auto max-w-lg text-base leading-relaxed md:text-lg sa-fadeUp [animation-delay:0.5s]">
            End-to-end digital solutions crafted with precision,
            from concept to deployment and beyond.
          </p>
        </div>

        {/* ── Expanding panels ── */}
        <div className="sa-panels sa-fadeUp [animation-delay:0.65s]">
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`sa-panel ${hoveredIndex === i ? "sa-panel--active" : ""} ${hoveredIndex !== null && hoveredIndex !== i ? "sa-panel--dim" : ""}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background */}
              <div
                className="sa-panel-bg"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="sa-panel-overlay" />

              {/* Collapsed state — vertical title */}
              <div className="sa-panel-collapsed">
                <h3 className="sa-panel-vtitle">{service.title}</h3>
              </div>

              {/* Expanded state — full content */}
              <div className="sa-panel-expanded">
                <h3 className="sa-panel-title">{service.title}</h3>
                <p className="sa-panel-desc">{service.description}</p>
                <div className="sa-panel-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="sa-panel-tag">{tag}</span>
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
