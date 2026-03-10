"use client";

import { useState } from "react";
import "./how-we-work3.css";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We begin by deeply understanding your vision, goals, and target audience. Through research and workshops, we define the roadmap that will guide every decision forward.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

export default function HowWeWork3() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="how-we-work-3" className="h3w-section relative py-20 md:py-28">
      <div className="h3w-glow h3w-glow--1" aria-hidden="true" />
      <div className="h3w-glow h3w-glow--2" aria-hidden="true" />
      <div className="h3w-noise" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ── Section header ── */}
        <div className="mb-16 text-center">
          <p className="h3w-label mb-4 text-xs font-bold tracking-[0.35em] uppercase h3w-fadeUp [animation-delay:0.1s]">
            Our Process
          </p>
          <h2 className="h3w-title mb-5 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl h3w-fadeUp [animation-delay:0.25s]">
            How We{" "}
            <span className="h3w-title-accent">Work</span>
          </h2>
          <div className="h3w-line mx-auto mb-6 h-px w-24 h3w-lineExpand [animation-delay:0.45s]" />
          <p className="h3w-subtitle mx-auto max-w-lg text-base leading-relaxed md:text-lg h3w-fadeUp [animation-delay:0.5s]">
            A proven process that turns ideas into exceptional digital products,
            every single time.
          </p>
        </div>

        {/* ── Zigzag cards ── */}
        <div className="h3w-zigzag h3w-fadeUp [animation-delay:0.65s]">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={step.number}
                className={`h3w-card ${isEven ? "h3w-card--left" : "h3w-card--right"} ${
                  active === i ? "h3w-card--active" : ""
                } ${active !== null && active !== i ? "h3w-card--dim" : ""}`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                {/* Connector to center spine */}
                <div className="h3w-connector" aria-hidden="true">
                  <div className="h3w-connector-line" />
                  <div className="h3w-connector-dot" />
                </div>

                {/* Card body */}
                <div className="h3w-card-body">
                  {/* Top row: icon + number */}
                  <div className="h3w-card-top">
                    <div className="h3w-card-icon">{step.icon}</div>
                    <span className="h3w-card-num">{step.number}</span>
                  </div>

                  <h3 className="h3w-card-title">{step.title}</h3>
                  <p className="h3w-card-desc">{step.description}</p>
                </div>
              </div>
            );
          })}

          {/* Center spine line */}
          <div className="h3w-spine" aria-hidden="true">
            <div className="h3w-spine-line" />
            <div className="h3w-spine-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
