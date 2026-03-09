"use client";

import { useRef } from "react";
import "./projects.css";

const projects = [
  {
    title: "HealthSync",
    category: "Mobile App",
    description:
      "A telemedicine platform connecting patients with doctors through real-time video consultations and AI-powered symptom tracking.",
    tech: ["React Native", "Node.js", "WebRTC"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    year: "2025",
  },
  {
    title: "TradeFlow",
    category: "FinTech Platform",
    description:
      "An institutional-grade trading dashboard with real-time market data, portfolio analytics, and automated compliance reporting.",
    tech: ["Next.js", "Python", "AWS"],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    year: "2025",
  },
  {
    title: "Nomad Workspace",
    category: "SaaS Product",
    description:
      "A collaborative workspace tool for remote teams featuring real-time document editing, task boards, and async video messaging.",
    tech: ["React", "Firebase", "Figma API"],
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
    year: "2024",
  },
  {
    title: "GreenGrid",
    category: "IoT Dashboard",
    description:
      "An energy management system visualizing real-time power consumption across smart buildings with predictive load balancing.",
    tech: ["Vue.js", "Go", "InfluxDB"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    year: "2024",
  },
  {
    title: "Lexara",
    category: "AI Platform",
    description:
      "A legal document analysis tool powered by NLP that extracts key clauses, flags risks, and generates contract summaries.",
    tech: ["Python", "GPT-4", "Kubernetes"],
    image:
      "https://images.unsplash.com/photo-1655720828018-edd71de0e245?auto=format&fit=crop&w=1200&q=80",
    year: "2024",
  },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="pj-section relative py-28 md:py-36">
      {/* Ambient glows */}
      <div className="pj-glow pj-glow--1" aria-hidden="true" />
      <div className="pj-glow pj-glow--2" aria-hidden="true" />

      {/* Noise texture */}
      <div className="pj-noise" aria-hidden="true" />

      <div className="relative z-10">
        {/* ── Section header ── */}
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="pj-label mb-4 text-xs font-bold tracking-[0.35em] uppercase pj-fadeUp [animation-delay:0.1s]">
                Our Work
              </p>
              <h2 className="pj-title text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl pj-fadeUp [animation-delay:0.25s]">
                Featured{" "}
                <span className="pj-title-accent">Projects</span>
              </h2>
            </div>

            {/* Scroll controls */}
            <div className="flex gap-3 pj-fadeUp [animation-delay:0.4s]">
              <button
                onClick={() => scroll("left")}
                className="pj-nav-btn"
                aria-label="Previous project"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="pj-nav-btn"
                aria-label="Next project"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Horizontal scroll track ── */}
        <div className="pj-track" ref={scrollRef}>
          <div className="pj-track-inner">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="pj-card pj-fadeUp"
                style={{ animationDelay: `${0.5 + i * 0.12}s` }}
              >
                {/* Image */}
                <div className="pj-card-image">
                  <div
                    className="pj-card-img"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="pj-card-img-overlay" />

                  {/* Year badge */}
                  <span className="pj-card-year">{project.year}</span>

                  {/* Category badge */}
                  <span className="pj-card-category">{project.category}</span>
                </div>

                {/* Content */}
                <div className="pj-card-body">
                  <h3 className="pj-card-title">{project.title}</h3>
                  <p className="pj-card-desc">{project.description}</p>
                  <div className="pj-card-footer">
                    <div className="pj-card-tech">
                      {project.tech.map((t) => (
                        <span key={t} className="pj-card-tech-item">{t}</span>
                      ))}
                    </div>
                    <div className="pj-card-link">
                      <span>View</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
