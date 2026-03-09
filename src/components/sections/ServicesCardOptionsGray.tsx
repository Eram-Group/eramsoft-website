"use client";

import Image from "next/image";
import "./services-card-options-gray.css";

const IMAGES = [
  "/download.jpeg",
  "/download (1).jpeg",
  "/download (2).jpeg",
  "/download (3).jpeg",
];

const SERVICES = [
  {
    title: "Web Development",
    description:
      "Custom websites and web apps built with modern frameworks for performance and scale.",
    image: IMAGES[0],
  },
  {
    title: "Mobile Application",
    description:
      "Native and cross-platform mobile apps crafted for seamless user experience.",
    image: IMAGES[1],
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive, research-driven interfaces that delight users and drive engagement.",
    image: IMAGES[2],
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration for optimal performance and cost.",
    image: IMAGES[3],
  },
  {
    title: "AI & Machine Learning",
    description:
      "Intelligent automation and data-driven insights to power your business forward.",
    image: IMAGES[0],
  },
  {
    title: "Quality Assurance",
    description:
      "Comprehensive testing strategies ensuring reliability and bug-free delivery.",
    image: IMAGES[1],
  },
];

export interface PaletteConfig {
  color: string;
  rgb: string;
  svcBg: string;
  svcShimmer: string;
}

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <div className="svc-card-g">
      <div className="svc-card-g__glow" />
      <div className="svc-card-g__accent" />
      <div className="svc-card-g__shimmer" />

      <div className="svc-card-g__img-wrap">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
          className="svc-card-g__img"
        />
        <div className="svc-card-g__img-overlay" />
      </div>

      <div className="svc-card-g__body">
        <h3 className="svc-card-g__title">{service.title}</h3>
        <div className="svc-card-g__divider">
          <span className="svc-card-g__divider-line" />
          <span className="svc-card-g__divider-diamond" />
        </div>
        <p className="svc-card-g__desc">{service.description}</p>
      </div>
    </div>
  );
}

export default function ServicesCardOptionsGray({ palette }: { palette: PaletteConfig }) {
  return (
    <section
      className="svc-options-g"
      style={
        {
          "--svc-bg": palette.svcBg,
          "--svc-accent": palette.color,
          "--svc-accent-rgb": palette.rgb,
          "--svc-text-rgb": "255,255,255",
          "--svc-shimmer": palette.svcShimmer,
        } as React.CSSProperties
      }
    >
      <div className="svc-options-g__grain" aria-hidden="true" />
      <div className="svc-options-g__ambient" aria-hidden="true" />

      <div className="svc-options-g__header">
        <div className="svc-options-g__eyebrow">
          <span className="svc-options-g__eyebrow-line" />
          <span className="svc-options-g__eyebrow-dot" />
          <span>What We Do</span>
          <span className="svc-options-g__eyebrow-dot" />
          <span className="svc-options-g__eyebrow-line svc-options-g__eyebrow-line--end" />
        </div>
        <h2 className="svc-options-g__title">
          Our <span>Services</span>
        </h2>
        <p className="svc-options-g__subtitle">
          End-to-end solutions crafted with precision and care
        </p>
      </div>

      <div className="svc-options-g__grid">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}
