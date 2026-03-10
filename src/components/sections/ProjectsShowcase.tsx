"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import "./projects-showcase.css";

export default function ProjectsShowcase() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="ps-section relative py-14 md:py-20">
      {/* Ambient effects */}
      <div className="ps-glow ps-glow--1" aria-hidden="true" />
      <div className="ps-glow ps-glow--2" aria-hidden="true" />
      <div className="ps-noise" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ── Section header ── */}
        <div className="mb-20 text-center">
          <p className="ps-label mb-4 text-xs font-bold tracking-[0.35em] uppercase ps-fadeUp [animation-delay:0.1s]">
            Case Studies
          </p>
          <h2 className="ps-heading text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl ps-fadeUp [animation-delay:0.25s]">
            Project{" "}
            <span className="ps-heading-accent">Spotlight</span>
          </h2>
        </div>

        {/* ── Project rows ── */}
        <div className="ps-list">
          {projects.slice(0, 3).map((project, i) => (
            <div
              key={project.title}
              className={`ps-row ps-row--${i % 2 === 0 ? "normal" : "reverse"} ps-fadeUp`}
              style={{ animationDelay: `${0.35 + i * 0.12}s` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* ── Image block ── */}
              <div className="ps-row-image">
                <div
                  className="ps-row-img"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="ps-row-img-overlay" />

                {/* Floating index number */}
                <span className="ps-row-index">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Category pill */}
                <span className="ps-row-cat">{project.category}</span>
              </div>

              {/* ── Content block ── */}
              <div className="ps-row-content">
                <div className="ps-row-meta">
                  <span className="ps-row-year">{project.year}</span>
                  <span className="ps-row-dot" />
                  <span className="ps-row-type">{project.category}</span>
                </div>

                <h3 className="ps-row-title">{project.title}</h3>

                <p className="ps-row-desc">{project.description}</p>

                <div className="ps-row-tags">
                  {project.tech.map((t) => (
                    <span key={t} className="ps-tag">{t}</span>
                  ))}
                </div>

                <div className="ps-row-cta">
                  <span>Explore Project</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>

              {/* ── Decorative connector line ── */}
              <div className="ps-row-connector" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* ── View All ── */}
        <div className="mt-20 flex justify-center ps-fadeUp [animation-delay:1.2s]">
          <Link href="/projects" className="ps-view-all">
            <span>Browse Full Portfolio</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
