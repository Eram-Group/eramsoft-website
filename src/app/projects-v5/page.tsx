"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import "./projects-v5.css";

export default function ProjectsV5Page() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(() => {
    const cats = [...new Set(projects.map((p) => p.category))];
    return ["All", ...cats];
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  /* Scroll reveal */
  useEffect(() => {
    const els = document.querySelectorAll(".p5-reveal:not(.p5-visible)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("p5-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -30px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);


  return (
    <div className="p5-page">
      {/* Ambient */}
      <div className="p5-grain" aria-hidden="true" />
      <div className="p5-orb p5-orb--1" aria-hidden="true" />
      <div className="p5-orb p5-orb--2" aria-hidden="true" />
      <div className="p5-orb p5-orb--3" aria-hidden="true" />

      {/* Floating contact */}
      <Link href="/contact" className="p5-fab">
        <span className="p5-fab-glow" aria-hidden="true" />
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 12.5c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6H5l-3 3V4c0-.5.2-1 .6-1.4C3 2.2 3.5 2 4 2h10c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v8.5z" />
        </svg>
        <span className="p5-fab-label">Let&apos;s Talk</span>
      </Link>

      <div className="p5-container">
        {/* ── Header ── */}
        <header className="p5-header">
          {/* Top line */}
          <div className="p5-head-topline p5-reveal">
            <span className="p5-head-line" />
            <span className="p5-head-badge">
              <span className="p5-head-badge-dot" />
              Our Work
            </span>
            <span className="p5-head-line" />
          </div>

          {/* Title */}
          <h1 className="p5-head-title p5-reveal">
            <span className="p5-head-word">Projects</span>
          </h1>

          {/* Stats bar */}
          <div className="p5-head-stats p5-reveal">
            <div className="p5-head-stat">
              <span className="p5-head-stat-num">
                {String(projects.length).padStart(2, "0")}
              </span>
              <span className="p5-head-stat-label">Delivered</span>
            </div>
            <span className="p5-head-stat-sep" />
            <div className="p5-head-stat">
              <span className="p5-head-stat-num">
                {new Set(projects.map((p) => p.category)).size}
              </span>
              <span className="p5-head-stat-label">Categories</span>
            </div>
            <span className="p5-head-stat-sep" />
            <div className="p5-head-stat">
              <span className="p5-head-stat-num">
                {new Set(projects.map((p) => p.client.location.split(",").pop()?.trim())).size}
              </span>
              <span className="p5-head-stat-label">Countries</span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="p5-head-sub p5-reveal">
            Strategy, design & engineering — tailored for impact.
          </p>
        </header>

        {/* ── Filters ── */}
        <nav className="p5-controls p5-reveal">
          <div className="p5-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`p5-filter${activeFilter === cat ? " p5-filter--on" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
                {activeFilter === cat && <span className="p5-filter-bar" />}
              </button>
            ))}
          </div>
          <span className="p5-controls-count">
            Showing {filtered.length} of {projects.length}
          </span>
        </nav>

        {/* ═══ PROJECT ROWS — Alternating Layout ═══ */}
        <div className="p5-rows">
          {filtered.map((project, i) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className={`p5-row p5-reveal ${i % 2 === 1 ? "p5-row--flip" : ""}`}
              style={{ "--delay": `${0.05}s` } as React.CSSProperties}
            >
              {/* Image side */}
              <div className="p5-row-img-wrap">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 55vw"
                  className="p5-row-img"
                />
                <div className="p5-row-img-dim" />

                {/* Number overlay on image */}
                <span className="p5-row-idx" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content side */}
              <div className="p5-row-content">
                <div className="p5-row-top">
                  <span className="p5-chip">{project.category}</span>
                  <span className="p5-chip p5-chip--year">{project.year}</span>
                </div>

                <h2 className="p5-row-title">{project.title}</h2>
                <p className="p5-row-tagline">{project.tagline}</p>
                <p className="p5-row-desc">{project.description}</p>

                <div className="p5-row-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="p5-tech">{t}</span>
                  ))}
                </div>

                <div className="p5-row-footer">
                  <div className="p5-row-meta">
                    <span className="p5-row-meta-item">
                      <span className="p5-row-meta-label">Platform</span>
                      {project.platform}
                    </span>
                    <span className="p5-row-meta-item">
                      <span className="p5-row-meta-label">Duration</span>
                      {project.duration}
                    </span>
                    <span className="p5-row-meta-item">
                      <span className="p5-row-meta-label">Status</span>
                      <span className="p5-row-status">
                        <span
                          className={`p5-status-dot ${
                            project.status === "Live"
                              ? "p5-dot--live"
                              : project.status === "Beta"
                              ? "p5-dot--beta"
                              : "p5-dot--dev"
                          }`}
                        />
                        {project.status}
                      </span>
                    </span>
                  </div>

                  <span className="p5-row-cta">
                    View Case Study
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="9" x2="15" y2="9" />
                      <polyline points="11 5 15 9 11 13" />
                    </svg>
                  </span>
                </div>

                {/* Accent line */}
                <span className="p5-row-accent" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="p5-bottom p5-reveal">
          <div className="p5-bottom-line" />
          <p className="p5-bottom-text">Have a project in mind?</p>
          <Link href="/contact" className="p5-bottom-btn">
            <span>Start a Conversation</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="16" x2="16" y2="4" />
              <polyline points="8 4 16 4 16 12" />
            </svg>
          </Link>
          <div className="p5-bottom-line" />
        </div>
      </div>
    </div>
  );
}
