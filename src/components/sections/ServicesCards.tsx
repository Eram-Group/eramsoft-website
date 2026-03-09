"use client";

import { useRef, useState, useEffect } from "react";
import "./services-cards.css";
import { services } from "@/data/services";

export default function ServicesCards() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (index: number) => {
    if (!trackRef.current) return;
    const cards = trackRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
    setActive(index);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const center = track.scrollLeft + track.offsetWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      Array.from(track.children).forEach((child, i) => {
        const el = child as HTMLElement;
        const mid = el.offsetLeft + el.offsetWidth / 2;
        const dist = Math.abs(center - mid);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActive(closest);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="services-cards" className="sc-section relative py-28 md:py-36">
      <div className="sc-glow sc-glow--1" aria-hidden="true" />
      <div className="sc-glow sc-glow--2" aria-hidden="true" />
      <div className="sc-noise" aria-hidden="true" />

      <div className="relative z-10">
        {/* ── Header ── */}
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 mb-16">
          <div>
            <p className="sc-label mb-4 text-xs font-bold tracking-[0.35em] uppercase sc-fadeUp [animation-delay:0.1s]">
              What We Do
            </p>
            <h2 className="sc-title text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl sc-fadeUp [animation-delay:0.25s]">
              Our <span className="sc-title-accent">Services</span>
            </h2>
          </div>
        </div>

        {/* ── Carousel track ── */}
        <div className="sc-track" ref={trackRef}>
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`sc-slide sc-fadeUp ${i === active ? "sc-slide--active" : ""}`}
              style={{ animationDelay: `${0.5 + i * 0.1}s` }}
            >
              {/* Image */}
              <div className="sc-slide-img-wrap">
                <div
                  className="sc-slide-img"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="sc-slide-img-overlay" />
              </div>

              {/* Content */}
              <div className="sc-slide-body">
                <h3 className="sc-slide-title">{service.title}</h3>
                <p className="sc-slide-desc">{service.description}</p>
                <div className="sc-slide-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="sc-slide-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Dots ── */}
        <div className="sc-dots sc-fadeUp [animation-delay:0.8s]">
          {services.map((_, i) => (
            <button
              key={i}
              className={`sc-dot ${i === active ? "sc-dot--active" : ""}`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to service ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
