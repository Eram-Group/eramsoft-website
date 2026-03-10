"use client";

import { useState } from "react";
import "./how-we-work2.css";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We begin by deeply understanding your vision, goals, and target audience. Through research and workshops, we define the roadmap that will guide every decision forward.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design & Prototype",
    description:
      "Our designers craft intuitive interfaces and interactive prototypes, iterating with you until every pixel feels right. No surprises — just alignment.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Development & Build",
    description:
      "We turn designs into production-ready code using modern frameworks and best practices. Agile sprints keep you in the loop at every milestone.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Testing & QA",
    description:
      "Rigorous testing across devices, browsers, and edge cases. We catch what others miss — performance audits, security checks, and accessibility reviews.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "We deploy with confidence and stay by your side. Continuous monitoring, updates, and optimization ensure your product thrives long after launch.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

export default function HowWeWork2() {
  const [active, setActive] = useState(0);

  return (
    <section id="how-we-work-2" className="h2w-section relative py-20 md:py-28">
      {/* Ambient glows */}
      <div className="h2w-glow h2w-glow--1" aria-hidden="true" />
      <div className="h2w-glow h2w-glow--2" aria-hidden="true" />
      <div className="h2w-noise" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ── Section header ── */}
        <div className="mb-16 text-center">
          <p className="h2w-label mb-4 text-xs font-bold tracking-[0.35em] uppercase h2w-fadeUp [animation-delay:0.1s]">
            Our Process
          </p>
          <h2 className="h2w-title mb-5 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl h2w-fadeUp [animation-delay:0.25s]">
            How We{" "}
            <span className="h2w-title-accent">Work</span>
          </h2>
          <div className="h2w-line mx-auto mb-6 h-px w-24 h2w-lineExpand [animation-delay:0.45s]" />
          <p className="h2w-subtitle mx-auto max-w-lg text-base leading-relaxed md:text-lg h2w-fadeUp [animation-delay:0.5s]">
            A proven process that turns ideas into exceptional digital products,
            every single time.
          </p>
        </div>

        {/* ── Split layout: Steps list + Detail panel ── */}
        <div className="h2w-split h2w-fadeUp [animation-delay:0.65s]">
          {/* Left: Step selectors */}
          <div className="h2w-steps">
            {steps.map((step, i) => (
              <button
                key={step.number}
                className={`h2w-step-btn ${active === i ? "h2w-step-btn--active" : ""}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
              >
                {/* Progress bar on active */}
                <div className="h2w-step-progress" />

                <div className="h2w-step-head">
                  <span className="h2w-step-num">{step.number}</span>
                  <span className="h2w-step-name">{step.title}</span>
                </div>

                {/* Inline description visible on mobile */}
                <p className="h2w-step-inline-desc">{step.description}</p>
              </button>
            ))}
          </div>

          {/* Right: Detail panel */}
          <div className="h2w-detail">
            <div className="h2w-detail-inner">
              {/* Icon */}
              <div className="h2w-detail-icon">
                {steps[active].icon}
              </div>

              {/* Number */}
              <span className="h2w-detail-number">{steps[active].number}</span>

              {/* Title */}
              <h3 className="h2w-detail-title">{steps[active].title}</h3>

              {/* Description */}
              <p className="h2w-detail-desc">{steps[active].description}</p>

              {/* Step indicator dots */}
              <div className="h2w-detail-dots">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    className={`h2w-detail-dot ${i === active ? "h2w-detail-dot--active" : ""} ${i < active ? "h2w-detail-dot--done" : ""}`}
                    onClick={() => setActive(i)}
                    aria-label={`Step ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
