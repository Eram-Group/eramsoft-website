"use client";

import Image from "next/image";
import "./services-card-options.css";

const SERVICES = [
  {
    title: "Web Development",
    description:
      "Custom websites and web apps built with modern frameworks for performance and scale.",
  },
  {
    title: "Mobile Application",
    description:
      "Native and cross-platform mobile apps crafted for seamless user experience.",
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive, research-driven interfaces that delight users and drive engagement.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration for optimal performance and cost.",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Intelligent automation and data-driven insights to power your business forward.",
  },
  {
    title: "Quality Assurance",
    description:
      "Comprehensive testing strategies ensuring reliability and bug-free delivery.",
  },
];

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <div className="svc-card">
      {/* Four corner marks */}
      <div className="svc-card__corner svc-card__corner--tl" />
      <div className="svc-card__corner svc-card__corner--tr" />
      <div className="svc-card__corner svc-card__corner--bl" />
      <div className="svc-card__corner svc-card__corner--br" />

      {/* Gold border glow */}
      <div className="svc-card__glow" />

      {/* Gold accent line */}
      <div className="svc-card__accent" />

      {/* Shimmer sweep */}
      <div className="svc-card__shimmer" />

      {/* Image */}
      <div className="svc-card__img-wrap">
        <Image
          src="/e960d16fb83ab9f3cbc60a5ed11be478.jpg"
          alt={service.title}
          fill
          sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
          className="svc-card__img"
        />
        <div className="svc-card__img-overlay" />
        <div className="svc-card__img-vignette" />
      </div>

      {/* Text */}
      <div className="svc-card__body">
        <h3 className="svc-card__title">{service.title}</h3>
        <div className="svc-card__divider">
          <span className="svc-card__divider-line" />
          <span className="svc-card__divider-diamond" />
        </div>
        <p className="svc-card__desc">{service.description}</p>
        <div className="svc-card__link">
          <span>Learn More</span>
          <span className="svc-card__link-line" />
          <span>→</span>
        </div>
      </div>
    </div>
  );
}

export default function ServicesCardOptions() {
  return (
    <section className="svc-options">
      <div className="svc-options__grain" aria-hidden="true" />
      <div className="svc-options__grid-bg" aria-hidden="true" />
      <div className="svc-options__ambient" aria-hidden="true" />

      <div className="svc-options__header">
        <div className="svc-options__eyebrow">
          <span className="svc-options__eyebrow-line" />
          <span className="svc-options__eyebrow-dot" />
          <span>What We Do</span>
          <span className="svc-options__eyebrow-dot" />
          <span className="svc-options__eyebrow-line" />
        </div>
        <h2 className="svc-options__title">
          Our <span>Services</span>
        </h2>
        <p className="svc-options__subtitle">
          End-to-end solutions crafted with precision and care
        </p>
      </div>

      <div className="svc-options__grid">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}
