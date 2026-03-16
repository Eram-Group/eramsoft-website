"use client";

import Image from "next/image";
import "./offices.css";
import SectionHeader from "@/components/ui/SectionHeader";
import AmbientEffects from "@/components/ui/AmbientEffects";

const branches = [
  {
    city: "Dubai",
    label: "UAE — Head Office",
    address: "Business Bay, Dubai, UAE",
    phone: "+971 54 888 2484",
    hours: "Sun – Thu: 9 AM – 6 PM",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    map: "https://www.google.com/maps/search/Business+Bay+Dubai+UAE",
  },
  {
    city: "Riyadh",
    label: "Saudi Arabia",
    address: "Al Olaya District, Riyadh, KSA",
    phone: "+966 55 412 7890",
    hours: "Sun – Thu: 9 AM – 6 PM",
    image:
      "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&q=80",
    map: "https://www.google.com/maps/search/Al+Olaya+District+Riyadh+KSA",
  },
  {
    city: "Cairo",
    label: "Egypt",
    address: "Smart Village, 6th of October, Cairo",
    phone: "+20 10 2345 6789",
    hours: "Sun – Thu: 10 AM – 7 PM",
    image:
      "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80",
    map: "https://www.google.com/maps/search/Smart+Village+6th+of+October+Cairo",
  },
];

function OfficesGrid() {
  return (
    <div className="of-grid">
      {branches.map((b) => (
        <a
          key={b.city}
          href={b.map}
          target="_blank"
          rel="noopener noreferrer"
          className="of-card"
        >
          <Image
            src={b.image}
            alt={`${b.city} office`}
            fill
            className="of-card-bg"
            sizes="(max-width:900px) 100vw, 33vw"
          />
          <div className="of-card-overlay" aria-hidden="true" />

          <div className="of-card-content">
            <div className="of-card-top">
              <div className="of-badge">
                <span className="of-badge-dot" />
                {b.label}
              </div>
            </div>

            <div className="of-card-bottom">
              <h3 className="of-city">{b.city}</h3>

              <div className="of-info">
                <div className="of-row">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{b.address}</span>
                </div>
                <div className="of-row">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <span>{b.phone}</span>
                </div>
                <div className="of-row">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>{b.hours}</span>
                </div>
              </div>

              <div className="of-map-link">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span>View on Google Maps</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export { OfficesGrid };

export default function Offices() {
  return (
    <section
      id="offices"
      className="of-section dark-section section-top-glow relative pt-10 pb-14 md:pt-14 md:pb-20"
    >
      <AmbientEffects />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div>
          <SectionHeader
            label="Our Offices"
            title="Find Us"
            accentWord="Worldwide"
            subtitle="With offices across the Middle East and North Africa, we're always close to where you need us."
          />
        </div>

        <OfficesGrid />
      </div>
    </section>
  );
}
