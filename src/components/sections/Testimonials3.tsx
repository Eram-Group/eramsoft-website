"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import AmbientEffects from "@/components/ui/AmbientEffects";
import { testimonials } from "@/data/testimonials";
import "./testimonials3.css";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="t3-stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className={`t3-star ${s > rating ? "t3-star--empty" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials3() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = gridRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = gridRef.current;
    if (!el) return;
    const amount = dir === "left" ? -390 : 390;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      id="testimonials-v3"
      className="t3-section dark-section section-top-glow relative py-14 md:py-20"
    >
      <AmbientEffects />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="t3-header">
          <SectionHeader
            label="Testimonials"
            title="What Our"
            accentWord="Clients Say"
          />
        </div>

        <div className="t3-grid-wrap animate-section-fadeUp [animation-delay:0.5s]">
          {/* Left arrow */}
          <button
            className={`t3-arrow t3-arrow--left ${canScrollLeft ? "t3-arrow--visible" : ""}`}
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            className={`t3-arrow t3-arrow--right ${canScrollRight ? "t3-arrow--visible" : ""}`}
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>

          <div className="t3-grid" ref={gridRef}>
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="t3-card animate-section-fadeUp"
              >
                <div className="t3-card-header">
                  <div className={`t3-avatar t3-avatar--${t.color}`}>
                    {t.avatar}
                  </div>
                  <div className="t3-info">
                    <div className="t3-name">{t.name}</div>
                    <div className="t3-role">{t.role}, {t.company}</div>
                  </div>
                </div>

                <Stars rating={t.rating} />

                <div className="t3-quote">
                  <p className="t3-quote-text">{t.comment}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="t3-scroll-hint">
            <span className="t3-scroll-hint-text">Swipe to see more</span>
            <svg className="t3-scroll-hint-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
