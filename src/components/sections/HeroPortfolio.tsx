"use client";

import { useEffect, useRef } from "react";
import "./hero-portfolio.css";

export default function HeroPortfolio() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("port-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="portfolio-theme">
      {/* ── Navigation ── */}
      <nav className="port-nav">
        <ul className="port-nav-links">
          <li><a className="port-nav-link" href="#about">About</a></li>
          <li><a className="port-nav-link" href="#services">Services</a></li>
          <li><a className="port-nav-link" href="#process">Our Process</a></li>
        </ul>

        <div className="port-nav-logo">
          <div className="port-nav-logo-icon">
            <svg viewBox="0 0 48 48" fill="none">
              <rect x="8" y="12" width="32" height="24" rx="3" stroke="#c8845a" strokeWidth="2" fill="none" />
              <path d="M18 20l-4 4 4 4" stroke="#2a2a2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30 20l4 4-4 4" stroke="#c8845a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="26" y1="18" x2="22" y2="30" stroke="#2a2a2a" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            </svg>
          </div>
          <span className="port-serif" style={{ fontSize: "1.1rem", fontWeight: 600, letterSpacing: "0.02em" }}>
            DIGITAL BACKBONE
          </span>
        </div>

        <ul className="port-nav-links">
          <li><a className="port-nav-link" href="#portfolio">Portfolio</a></li>
          <li><a className="port-nav-link" href="#tech">Tech Stack</a></li>
          <li><a className="port-nav-contact-btn" href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ── Hero Section — Architectural Blueprint ── */}
      <section className="port-hero">
        <div className="port-hero-grid">
          {/* Left: Text Content */}
          <div className="port-hero-content">
            <div className="port-hero-accent-line" />
            <span className="port-hero-label">Build. Ship. Scale.</span>

            <h1 className="port-hero-heading">
              <span className="port-hero-heading-line port-hero-heading-line--1">We engineer</span>
              <span className="port-hero-heading-line port-hero-heading-line--2">software</span>
              <span className="port-hero-heading-line port-hero-heading-line--3">that powers your business</span>
            </h1>

            <p className="port-hero-subtitle">
              Full-cycle software development — from concept to deployment. Web apps, mobile platforms, cloud infrastructure &amp; enterprise solutions.
            </p>

            <div className="port-hero-actions">
              <button className="port-hero-cta">
                Start a Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="port-hero-ghost-btn">
                View Our Work
              </button>
            </div>

            <div className="port-hero-trust">
              <div className="port-hero-trust-item">
                <span className="port-hero-trust-number">50+</span>
                <span className="port-hero-trust-label">Projects</span>
              </div>
              <div className="port-hero-trust-item">
                <span className="port-hero-trust-number">8</span>
                <span className="port-hero-trust-label">Years</span>
              </div>
              <div className="port-hero-trust-item">
                <span className="port-hero-trust-number">99%</span>
                <span className="port-hero-trust-label">Uptime</span>
              </div>
            </div>
          </div>

          {/* Right: Clean image with accent frame */}
          <div className="port-hero-visual">
            <div className="port-hero-img-main">
              <img
                src="/a-finger-touches-a-digital-screen-displaying-a-web-development-interface-with-icons-representing-coding-cloud-computing-database-and-website-design-symbolizing-innovation-and-technological-advancement-photo.jpg"
                alt="Web development interface"
              />
            </div>
            <div className="port-hero-frame" />
          </div>
        </div>

        {/* Vertical scroll indicator */}
        <div className="port-scroll-vert">
          <span className="port-scroll-vert-text">Scroll</span>
          <div className="port-scroll-vert-line" />
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="port-about" id="about">
        <div className="port-about-curve-left" />
        <div className="port-about-curve-right" />

        <div className="port-about-grid">
          <div className="port-about-text port-reveal" ref={addRevealRef}>
            <span className="port-label">About Us</span>
            <h2 className="port-about-title port-serif">
              Digital Backbone, your reliable software partner
            </h2>
            <p className="port-about-paragraph">
              A full-service software house with a passion for crafting robust, scalable applications that help businesses compete and grow.
            </p>
            <p className="port-about-paragraph">
              With deep expertise in frontend &amp; backend engineering, cloud architecture, and DevOps, we bring a unique blend of technical precision, modern tooling, and product thinking to every project.
            </p>
            <p className="port-about-paragraph">
              Our mission is to turn ambitious ideas into production-ready software — building reliable APIs, intuitive interfaces, and infrastructure that scales with your success.
            </p>
          </div>

          <div className="port-about-image-wrap port-reveal" ref={addRevealRef}>
            <div className="port-about-circle">
              <img
                src="/download (2).jpeg"
                alt="Software testing"
              />
            </div>
            <div className="port-social-icons">
              <a className="port-social-icon" href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a className="port-social-icon" href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a className="port-social-icon" href="#" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="port-services" id="services">
        <div className="port-services-header port-reveal" ref={addRevealRef}>
          <span className="port-label">Services</span>
          <h2 className="port-services-title port-serif">What we do</h2>
        </div>

        <div className="port-services-grid">
          <div className="port-service-card port-reveal" ref={addRevealRef}>
            <div className="port-service-image-wrap">
              <img src="/download.jpeg" alt="Custom Software Development" />
            </div>
            <h3 className="port-service-title port-serif">Custom Development</h3>
            <p className="port-service-desc">
              Web Applications, SaaS Platforms, APIs &amp; Microservices Architecture
            </p>
            <span className="port-service-price">FROM $5,000/MO</span>
          </div>

          <div className="port-service-card port-reveal" ref={addRevealRef}>
            <div className="port-service-image-wrap">
              <img src="/e960d16fb83ab9f3cbc60a5ed11be478.jpg" alt="Mobile App Development" />
            </div>
            <h3 className="port-service-title port-serif">Mobile Apps</h3>
            <p className="port-service-desc">
              iOS &amp; Android Development, Cross-Platform Solutions, App Store Deployment
            </p>
            <span className="port-service-price">FROM $4,000/MO</span>
          </div>

          <div className="port-service-card port-reveal" ref={addRevealRef}>
            <div className="port-service-image-wrap">
              <img src="/download (3).jpeg" alt="Cloud & DevOps" />
            </div>
            <h3 className="port-service-title port-serif">Cloud &amp; DevOps</h3>
            <p className="port-service-desc">
              Cloud Migration, CI/CD Pipelines, Infrastructure as Code &amp; Monitoring
            </p>
            <span className="port-service-price">FROM $3,000/MO</span>
          </div>
        </div>
      </section>
    </div>
  );
}
