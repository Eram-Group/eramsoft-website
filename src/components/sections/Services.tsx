"use client";

import "./services.css";

const services = [
  {
    number: "01",
    title: "Mobile Development",
    description:
      "Native and cross-platform apps engineered for performance, crafted with pixel-perfect UI and seamless user experiences.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Scalable web applications and platforms built with modern frameworks, optimized for speed and search visibility.",
    tags: ["Next.js", "React", "Node.js", "Cloud"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "QA & Testing",
    description:
      "Comprehensive quality assurance with automated testing pipelines, performance audits, and security assessments.",
    tags: ["Automation", "CI/CD", "Security", "Performance"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="sv-section relative py-28 md:py-36">
      {/* Ambient glows */}
      <div className="sv-glow sv-glow--1" aria-hidden="true" />
      <div className="sv-glow sv-glow--2" aria-hidden="true" />

      {/* Noise texture */}
      <div className="sv-noise" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ── Section header ── */}
        <div className="mb-20 text-center">
          <p className="sv-label mb-4 text-xs font-bold tracking-[0.35em] uppercase sv-fadeUp [animation-delay:0.1s]">
            What We Do
          </p>
          <h2 className="sv-title mb-5 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl sv-fadeUp [animation-delay:0.25s]">
            Our{" "}
            <span className="sv-title-accent">Services</span>
          </h2>
          <div className="sv-line mx-auto mb-6 h-px w-24 sv-lineExpand [animation-delay:0.45s]" />
          <p className="sv-subtitle mx-auto max-w-lg text-base leading-relaxed md:text-lg sv-fadeUp [animation-delay:0.5s]">
            End-to-end digital solutions crafted with precision,
            from concept to deployment and beyond.
          </p>
        </div>

        {/* ── Service cards ── */}
        <div className="sv-grid">
          {services.map((service, i) => (
            <div
              key={service.number}
              className="sv-card sv-cardReveal"
              style={{ animationDelay: `${0.6 + i * 0.18}s` }}
            >
              {/* Background image */}
              <div
                className="sv-card-bg"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Dark gradient overlay */}
              <div className="sv-card-overlay" />

              {/* Neon glow on hover */}
              <div className="sv-card-glow" />

              {/* Scan line effect */}
              <div className="sv-scanline" />

              {/* Service number */}
              <span className="sv-number">{service.number}</span>

              {/* Arrow */}
              <div className="sv-arrow">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>

              {/* Content */}
              <div className="sv-card-content">
                <div className="sv-icon-wrap">{service.icon}</div>
                <h3 className="sv-card-title">{service.title}</h3>
                <p className="sv-card-desc">{service.description}</p>
                <div className="sv-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="sv-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
