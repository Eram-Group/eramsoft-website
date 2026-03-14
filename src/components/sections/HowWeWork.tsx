"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import AmbientEffects from "@/components/ui/AmbientEffects";
import "./how-we-work.css";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We begin by deeply understanding your vision, goals, and target audience. Through research and workshops, we define the roadmap that will guide every decision forward.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="how-we-work" className="hw-section dark-section section-top-glow relative py-20 md:py-28">
      <AmbientEffects />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ── Section header ── */}
        <SectionHeader
          label="Our Process"
          title="How We"
          accentWord="Work"
          subtitle="A proven process that turns ideas into exceptional digital products, every single time."
        />

        {/* ── Steps timeline ── */}
        <div className="hw-timeline">
          {/* Connecting line */}
          <div className="hw-timeline-line" aria-hidden="true" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`hw-step ${
                activeStep === i ? "hw-step--active" : ""
              } ${
                activeStep !== null && activeStep !== i ? "hw-step--dim" : ""
              }`}
              onMouseEnter={() => setActiveStep(i)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Step node (circle on the timeline) */}
              <div className="hw-step-node">
                <div className="hw-step-node-ring" />
                <div className="hw-step-node-icon">{step.icon}</div>
              </div>

              {/* Step content */}
              <div className="hw-step-content">
                <span className="hw-step-number">{step.number}</span>
                <h3 className="hw-step-title">{step.title}</h3>
                <p className="hw-step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
