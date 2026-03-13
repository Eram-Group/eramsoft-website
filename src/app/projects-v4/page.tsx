"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import "./projects-v4.css";

export default function ProjectsV4Page() {
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
    const els = document.querySelectorAll(".ap4-reveal:not(.ap4-revealed)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, idx) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.style.transitionDelay = `${idx * 0.06}s`;
            el.classList.add("ap4-revealed");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.06 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  /* 3D tilt */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const ry = ((x - cx) / cx) * 5;
      const rx = ((cy - y) / cy) * 5;
      card.style.setProperty("--rx", `${rx}deg`);
      card.style.setProperty("--ry", `${ry}deg`);
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
    },
    []
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const card = e.currentTarget;
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    },
    []
  );

  return (
    <div className="ap4-page">
      {/* ── Ambient ── */}
      <div className="ap4-grain" aria-hidden="true" />
      <div className="ap4-glow ap4-glow--1" aria-hidden="true" />
      <div className="ap4-glow ap4-glow--2" aria-hidden="true" />
      <div className="ap4-glow ap4-glow--3" aria-hidden="true" />

      {/* ── Floating contact ── */}
      <Link href="/contact" className="ap4-contact">
        <span className="ap4-contact-glow" aria-hidden="true" />
        <svg className="ap4-contact-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 12.5c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6H5l-3 3V4c0-.5.2-1 .6-1.4C3 2.2 3.5 2 4 2h10c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v8.5z" />
        </svg>
        <span className="ap4-contact-label">Let&apos;s Talk</span>
      </Link>

      <div className="ap4-container">
        {/* ── Header ── */}
        <header className="ap4-header ap4-reveal">
          <span className="ap4-header-label">
            <span className="ap4-label-pulse" />
            Portfolio
          </span>

          <h1 className="ap4-hero">
            <span className="ap4-hero-text">Works</span>
            <span className="ap4-hero-outline" aria-hidden="true">Works</span>
          </h1>

          <div className="ap4-header-bar">
            <span className="ap4-bar-count">
              {String(filtered.length).padStart(2, "0")} Projects
            </span>
            <span className="ap4-bar-rule" />
            <span className="ap4-bar-tagline">
              Precision-crafted digital experiences
            </span>
          </div>
        </header>

        {/* ── Filter tabs ── */}
        <nav className="ap4-tabs ap4-reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`ap4-tab${activeFilter === cat ? " ap4-tab--on" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* ── Uniform 3-column grid ── */}
        <div className="ap4-grid">
          {filtered.map((project, i) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className="ap4-card ap4-reveal"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Accent edge */}
              <span className="ap4-card-edge" aria-hidden="true" />

              {/* Background image */}
              <div
                className="ap4-card-bg"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Gradient overlay */}
              <div className="ap4-card-dim" />

              {/* Index */}
              <span className="ap4-card-idx">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Chips */}
              <div className="ap4-card-chips">
                <span className="ap4-chip">{project.category}</span>
                <span className="ap4-chip ap4-chip--yr">{project.year}</span>
              </div>

              {/* Bottom content */}
              <div className="ap4-card-bottom">
                <div className="ap4-card-meta">
                  <span>{project.platform}</span>
                  <span className="ap4-sep">/</span>
                  <span className="ap4-live">{project.status}</span>
                </div>

                <h2 className="ap4-card-name">{project.title}</h2>

                <div className="ap4-card-reveal">
                  <p className="ap4-card-desc">{project.description}</p>

                  <div className="ap4-card-stack">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="ap4-tech">{t}</span>
                    ))}
                  </div>

                  <span className="ap4-card-go">
                    Explore
                    <svg className="ap4-go-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="9" x2="15" y2="9" />
                      <polyline points="11 5 15 9 11 13" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
