"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./careers.css";

/* ══════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════ */

const perks = [
  {
    title: "Remote Flexibility",
    desc: "Work from anywhere — our hybrid model lets you choose what suits you best.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
      </svg>
    ),
  },
  {
    title: "Learning Budget",
    desc: "Annual budget for courses, conferences, and certifications to keep growing.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path d="M12 14l9-5-9-5-9 5 9 5zM12 14v7" />
      </svg>
    ),
  },
  {
    title: "Health & Wellness",
    desc: "Comprehensive health insurance and wellness programs for you and your family.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Team Retreats",
    desc: "Quarterly team outings and annual retreats to recharge and bond together.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Latest Tech Stack",
    desc: "Work with cutting-edge tools — React, Next.js, Node.js, Flutter, AI, and cloud.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Growth Opportunities",
    desc: "Clear career paths, mentorship programs, and leadership development tracks.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];


const positions = [
  {
    title: "Senior React Developer",
    department: "Engineering",
    location: "Remote / Amman",
    type: "Full-time",
    description: "We are looking for a Senior React Developer to lead frontend architecture and build scalable, high-performance web applications.",
    responsibilities: [
      "Architect and develop complex React applications with TypeScript",
      "Mentor junior developers and conduct code reviews",
      "Collaborate with designers and backend engineers to deliver features",
      "Optimize application performance and ensure best practices",
    ],
    requirements: [
      "5+ years of experience with React and TypeScript",
      "Strong understanding of state management (Redux, Zustand, or Context)",
      "Experience with Next.js and server-side rendering",
      "Excellent problem-solving and communication skills",
    ],
  },
  {
    title: "Backend Engineer (Node.js)",
    department: "Engineering",
    location: "Amman, Jordan",
    type: "Full-time",
    description: "We are seeking a Backend Engineer to design and build robust APIs and services that power our client applications.",
    responsibilities: [
      "Design and implement RESTful and GraphQL APIs",
      "Build and maintain microservices architecture",
      "Optimize database queries and ensure data integrity",
      "Write unit and integration tests for backend services",
    ],
    requirements: [
      "3+ years of experience with Node.js and Express/Fastify",
      "Proficient in PostgreSQL, MongoDB, or similar databases",
      "Experience with Docker and CI/CD pipelines",
      "Understanding of security best practices",
    ],
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "We are looking for a creative UI/UX Designer to craft intuitive and visually stunning interfaces for web and mobile applications.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs in Figma",
      "Conduct user research and usability testing",
      "Develop and maintain design systems and component libraries",
      "Collaborate closely with developers to ensure pixel-perfect implementation",
    ],
    requirements: [
      "3+ years of experience in UI/UX design",
      "Strong portfolio showcasing web and mobile design work",
      "Proficient in Figma and prototyping tools",
      "Understanding of accessibility standards and responsive design",
    ],
  },
  {
    title: "DevOps Engineer",
    department: "DevOps",
    location: "Amman, Jordan",
    type: "Full-time",
    description: "We are hiring a DevOps Engineer to build and manage our cloud infrastructure, CI/CD pipelines, and deployment automation.",
    responsibilities: [
      "Design and maintain cloud infrastructure on AWS or GCP",
      "Automate deployment pipelines and monitoring systems",
      "Implement security policies and incident response procedures",
      "Optimize system performance and ensure high availability",
    ],
    requirements: [
      "3+ years of experience in DevOps or SRE roles",
      "Proficient with Docker, Kubernetes, and Terraform",
      "Experience with AWS or GCP cloud services",
      "Strong scripting skills in Bash or Python",
    ],
  },
  {
    title: "Mobile Developer (React Native)",
    department: "Engineering",
    location: "Remote / Amman",
    type: "Full-time",
    description: "We are looking for a Mobile Developer to build cross-platform mobile applications using React Native for our diverse client portfolio.",
    responsibilities: [
      "Develop and maintain React Native applications for iOS and Android",
      "Integrate with REST APIs and third-party SDKs",
      "Ensure smooth animations and optimal app performance",
      "Publish and manage apps on the App Store and Google Play",
    ],
    requirements: [
      "3+ years of experience with React Native",
      "Published apps on App Store or Google Play",
      "Experience with native modules and platform-specific code",
      "Familiarity with mobile CI/CD tools like Fastlane or EAS",
    ],
  },
  {
    title: "Project Manager",
    department: "Management",
    location: "Amman, Jordan",
    type: "Full-time",
    description: "We are seeking an experienced Project Manager to lead cross-functional teams and deliver software projects from concept to completion.",
    responsibilities: [
      "Manage project timelines, budgets, and resource allocation",
      "Coordinate between clients, designers, and development teams",
      "Conduct sprint planning, standups, and retrospectives",
      "Identify risks and implement mitigation strategies",
    ],
    requirements: [
      "3+ years of experience managing software projects",
      "Strong knowledge of Agile and Scrum methodologies",
      "Excellent communication and stakeholder management skills",
      "Experience with Jira, Asana, or similar project management tools",
    ],
  },
];


/* ══════════════════════════════════════════════
   HOOKS
   ══════════════════════════════════════════════ */

function useReveal() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!targets.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );

    requestAnimationFrame(() => {
      targets.forEach((t) => obs.observe(t));
    });

    return () => obs.disconnect();
  }, []);

  return root;
}

/* ══════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════ */

export default function CareersPage() {
  const pageRef = useReveal();
  const [expandedJob, setExpandedJob] = useState<string | null>(positions[0]?.title ?? null);

  return (
    <div ref={pageRef} className="ca-page">
      {/* ── Ambient layers ── */}
      <div className="ca-glow ca-glow--a" aria-hidden="true" />
      <div className="ca-glow ca-glow--b" aria-hidden="true" />
      <div className="ca-glow ca-glow--c" aria-hidden="true" />
      <div className="ca-grain" aria-hidden="true" />
      <div className="ca-dots" aria-hidden="true" />

      {/* ── Banner ── */}
      <div className="ca-banner">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=80"
          alt="Eram Soft office"
          fill
          className="ca-banner-img"
          sizes="100vw"
          priority
        />
        <div className="ca-banner-overlay" aria-hidden="true" />
        <div className="ca-banner-inner" data-reveal="up">
          <h1 className="ca-banner-title">Eram Soft</h1>
          <div className="ca-banner-line" aria-hidden="true" />
          <p className="ca-banner-sub">Careers</p>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="ca-wrap">

        {/* ═══════════════════════════════════════
            EMPTY STATE — No current openings
            ═══════════════════════════════════════ */}
        {positions.length === 0 && (
          <section className="ca-positions">
            <div className="ca-positions-head" data-reveal="up">
              <p className="ca-tag">Open Roles</p>
              <h2 className="ca-section-title">
                Open <span className="ca-accent">Positions</span>
              </h2>
              <p className="ca-positions-sub">
                Find your next challenge. We&apos;re looking for talented people
                who want to make an impact.
              </p>
            </div>

            <div className="ca-empty" data-reveal="up">
              <div className="ca-empty-icon" aria-hidden="true">
                <div className="ca-empty-icon-ring" />
                <div className="ca-empty-icon-ring ca-empty-icon-ring--2" />
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
              <h3 className="ca-empty-title">No Open Positions Right Now</h3>
              <p className="ca-empty-desc">
                We don&apos;t have any openings at the moment.
                Check back soon &mdash; new roles are added regularly.
              </p>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════
            OPEN POSITIONS — when jobs exist
            ═══════════════════════════════════════ */}
        {positions.length > 0 && (
          <>
            <div className="ca-thread" aria-hidden="true" />

            <section id="positions" className="ca-positions">
              <div className="ca-positions-head" data-reveal="up">
                <p className="ca-tag">Open Roles</p>
                <h2 className="ca-section-title">
                  Open <span className="ca-accent">Positions</span>
                </h2>
                <p className="ca-positions-sub">
                  Find your next challenge. We&apos;re looking for talented people
                  who want to make an impact.
                </p>
              </div>

              <div className="ca-jobs-list" data-reveal="up">
                {positions.map((job) => {
                  const isOpen = expandedJob === job.title;
                  return (
                    <div
                      key={job.title}
                      className={`ca-job-card ${isOpen ? "ca-job-card--open" : ""}`}
                    >
                      <button
                        className="ca-job-header"
                        onClick={() => setExpandedJob(isOpen ? null : job.title)}
                        aria-expanded={isOpen}
                      >
                        <div className="ca-job-left">
                          <h3 className="ca-job-title">{job.title}</h3>
                          <div className="ca-job-meta">
                            <span className="ca-job-dept">{job.department}</span>
                            <span className="ca-job-dot" aria-hidden="true" />
                            <span className="ca-job-location">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {job.location}
                            </span>
                            <span className="ca-job-dot" aria-hidden="true" />
                            <span className="ca-job-type">{job.type}</span>
                          </div>
                        </div>
                        <div className="ca-job-right">
                          <a
                            href={`mailto:careers@eramsoft.com?subject=Application: ${job.title}`}
                            className="ca-job-apply"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span className="ca-job-apply-shimmer" aria-hidden="true" />
                            Apply Now
                          </a>
                          <span className={`ca-job-chevron ${isOpen ? "ca-job-chevron--open" : ""}`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </span>
                        </div>
                      </button>

                      <div className={`ca-job-body ${isOpen ? "ca-job-body--open" : ""}`}>
                        <div className="ca-job-body-inner">
                          <p className="ca-job-description">{job.description}</p>

                          <div className="ca-job-details">
                            <div className="ca-job-detail-col">
                              <h4 className="ca-job-detail-heading">Responsibilities</h4>
                              <ul className="ca-job-detail-list">
                                {job.responsibilities.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="ca-job-detail-col">
                              <h4 className="ca-job-detail-heading">Requirements</h4>
                              <ul className="ca-job-detail-list">
                                {job.requirements.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}

        <div className="ca-thread" aria-hidden="true" />

        {/* ═══════════════════════════════════════
            WHY WORK WITH US — Split layout
            ═══════════════════════════════════════ */}
        <section className="ca-why">
          <div className="ca-why-head" data-reveal="up">
            <p className="ca-tag">Life at Eram Soft</p>
            <h2 className="ca-section-title">
              Why Work <span className="ca-accent">With Us</span>
            </h2>
          </div>

          <div className="ca-why-grid">
            {perks.map((perk, i) => (
              <div
                key={perk.title}
                className="ca-why-card"
                data-reveal="up"
                style={{ "--delay": `${i * 0.06}s` } as React.CSSProperties}
              >
                <div className="ca-why-card-icon">{perk.icon}</div>
                <h3 className="ca-why-card-title">{perk.title}</h3>
                <p className="ca-why-card-desc">{perk.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
