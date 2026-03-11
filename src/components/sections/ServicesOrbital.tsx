"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import "./services-orbital.css";
import { services } from "@/data/services";

const AUTOPLAY_INTERVAL = 3000;

export default function ServicesOrbital() {
  const [active, setActive] = useState(2);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      // Wrap around for infinite looping
      const len = services.length;
      setActive(((index % len) + len) % len);
    },
    []
  );

  const prev = useCallback(() => goTo(active - 1), [active, goTo]);
  const next = useCallback(() => goTo(active + 1), [active, goTo]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    timeoutRef.current = setTimeout(() => {
      goTo(active + 1);
    }, AUTOPLAY_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [active, paused, goTo]);

  const getPosition = (index: number): string => {
    const len = services.length;
    // Calculate shortest circular distance
    let diff = index - active;
    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;

    if (diff === 0) return "sf-card--center";
    if (diff === -1) return "sf-card--left1";
    if (diff === 1) return "sf-card--right1";
    if (diff === -2) return "sf-card--left2";
    if (diff === 2) return "sf-card--right2";
    if (diff < -2) return "sf-card--far-left";
    return "sf-card--far-right";
  };

  return (
    <section
      id="services"
      className="sf-section relative pt-20 pb-10 md:pt-24 md:pb-14"
    >
      {/* Ambient glows */}
      <div className="sf-glow sf-glow--1" aria-hidden="true" />
      <div className="sf-glow sf-glow--2" aria-hidden="true" />
      <div className="sf-noise" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ── Section header ── */}
        <div className="mb-16 text-center">
          <p className="sf-label mb-4 text-xs font-bold tracking-[0.35em] uppercase sf-fadeUp [animation-delay:0.1s]">
            What We Do
          </p>
          <h2 className="sf-title mb-5 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl sf-fadeUp [animation-delay:0.25s]">
            Our <span className="sf-title-accent">Services</span>
          </h2>
          <div className="sf-line mx-auto mb-6 h-px w-24 sf-lineExpand [animation-delay:0.45s]" />
          <p className="sf-subtitle mx-auto max-w-lg text-base leading-relaxed md:text-lg sf-fadeUp [animation-delay:0.5s]">
            End-to-end digital solutions crafted with precision, from concept to
            deployment and beyond.
          </p>
        </div>

        {/* ── 3D Fan Stage ── */}
        <div
          className="sf-stage sf-fadeUp [animation-delay:0.65s]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="sf-fan">
            {services.map((service, i) => {
              const pos = getPosition(i);
              const isCurrent = i === active;
              const len = services.length;
              let diff = i - active;
              if (diff > len / 2) diff -= len;
              if (diff < -len / 2) diff += len;

              return (
                <div
                  key={service.number}
                  className={`sf-card ${pos} ${isCurrent ? "sf-card--active" : ""}`}
                  style={{
                    zIndex: isCurrent ? 10 : 5 - Math.abs(diff),
                  }}
                  onClick={() => setActive(i)}
                >
                  {/* Background image */}
                  <div
                    className="sf-card-bg"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="sf-card-overlay" />

                  {/* Neon glow */}
                  <div className="sf-card-glow" />

                  {/* Scan line */}
                  <div className="sf-scanline" />

                  {/* Content */}
                  <div className="sf-card-content">
                    <span className="sf-card-number">{service.number}</span>
                    <div className="sf-card-info">
                      <h3 className="sf-card-title">{service.title}</h3>
                      <p className="sf-card-desc">{service.description}</p>
                      <div className="sf-card-tags">
                        {service.tags.map((tag) => (
                          <span key={tag} className="sf-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Navigation ── */}
        <div className="sf-nav sf-fadeUp [animation-delay:0.8s]">
          <button
            className="sf-nav-btn"
            onClick={prev}
            aria-label="Previous service"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="sf-dots">
            {services.map((_, i) => (
              <button
                key={i}
                className={`sf-dot ${i === active ? "sf-dot--active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Go to service ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="sf-nav-btn"
            onClick={next}
            aria-label="Next service"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
