"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import "./projects-page.css";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(() => {
    const cats = [...new Set(projects.map((p) => p.category))];
    return ["All", ...cats];
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const els = document.querySelectorAll(".ap-reveal:not(.ap-revealed)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("ap-revealed");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <div className="ap-page">
      {/* ── Ambient layers ── */}
      <div className="ap-glow ap-glow--1" aria-hidden="true" />
      <div className="ap-glow ap-glow--2" aria-hidden="true" />
      <div className="ap-glow ap-glow--3" aria-hidden="true" />
      <div className="ap-noise" aria-hidden="true" />
      <div className="ap-grid-bg" aria-hidden="true" />
      <div className="ap-orb ap-orb--1" aria-hidden="true" />
      <div className="ap-orb ap-orb--2" aria-hidden="true" />
      <div className="ap-orb ap-orb--3" aria-hidden="true" />

      <div className="ap-container">
        {/* ── Header ── */}
        <header className="ap-header ap-reveal">
          <div className="ap-header-row">
            <div className="ap-header-text">
              <span className="ap-header-label">Portfolio</span>
              <h1 className="ap-heading">
                <span className="ap-heading-line">
                  <span className="ap-heading-thin">Selected</span>
                </span>
                <span className="ap-heading-line">
                  <span className="ap-heading-bold">Works</span>
                </span>
              </h1>
            </div>
            <div className="ap-header-counter">
              <span className="ap-count-num">
                {String(projects.length).padStart(2, "0")}
              </span>
              <span className="ap-count-sep" />
              <span className="ap-count-text">
                Projects
                <br />
                Delivered
              </span>
            </div>
          </div>
          <div className="ap-header-rule" />
          <p className="ap-subtitle">
            A curated collection of digital products we&apos;ve crafted — from
            concept through launch and beyond.
          </p>
        </header>

        {/* ── Category filters ── */}
        <nav className="ap-filters ap-reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`ap-filter-btn${
                activeFilter === cat ? " ap-filter-btn--active" : ""
              }`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* ── Project showcase ── */}
        <div className="ap-showcase">
          {filtered.map((project, i) => {
            const feat = i % 5 === 0;
            const rev = feat && Math.floor(i / 5) % 2 === 1;

            return (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className={[
                  "ap-card",
                  feat && "ap-card--feat",
                  rev && "ap-card--rev",
                  "ap-reveal",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {/* Animated gradient border on hover */}
                <span className="ap-card-border" aria-hidden="true" />

                {/* ── Image area ── */}
                <div className="ap-card-visual">
                  <div
                    className="ap-card-img"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="ap-card-shade" />
                  <div className="ap-card-badges">
                    <span className="ap-badge ap-badge--cat">
                      {project.category}
                    </span>
                    <span className="ap-badge ap-badge--yr">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* ── Content area ── */}
                <div className="ap-card-body">
                  <div className="ap-card-meta">
                    <span>{project.platform}</span>
                    <span className="ap-dot" />
                    <span className="ap-live">{project.status}</span>
                  </div>

                  <h2 className="ap-card-title">{project.title}</h2>
                  <p className="ap-card-desc">{project.description}</p>

                  <div className="ap-card-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="ap-pill">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="ap-card-foot">
                    <span className="ap-cta">
                      View Case Study
                      <svg
                        className="ap-cta-arrow"
                        width="20"
                        height="8"
                        viewBox="0 0 20 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="0" y1="4" x2="16" y2="4" />
                        <polyline points="13 1 16 4 13 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
