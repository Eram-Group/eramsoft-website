"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import AmbientEffects from "@/components/ui/AmbientEffects";
import StarRating from "@/components/ui/StarRating";
import "./testimonials2.css";

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  avatar: string;
  color: string;
}

export default function Testimonials2({ testimonials }: { testimonials: TestimonialItem[] }) {
  const len = testimonials?.length || 0;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const avatarsWrapRef = useRef<HTMLDivElement | null>(null);
  const personRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const next = useCallback(() => {
    if (len === 0) return;
    setActive((prev) => (prev + 1) % len);
  }, [len]);

  const prev = useCallback(() => {
    if (len === 0) return;
    setActive((prev) => (prev - 1 + len) % len);
  }, [len]);

  const goTo = useCallback((i: number) => {
    setActive(i);
  }, []);

  // Track section visibility — only autoplay when on-screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !isVisible || len === 0) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, isVisible, next, len]);

  // Keep the active avatar visible when the row overflows on mobile.
  useEffect(() => {
    const wrap = avatarsWrapRef.current;
    const btn = personRefs.current[active];
    if (!wrap || !btn) return;
    const wrapRect = wrap.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const targetLeft = btn.offsetLeft - wrap.clientWidth / 2 + btn.clientWidth / 2;
    if (btnRect.left < wrapRect.left || btnRect.right > wrapRect.right) {
      wrap.scrollTo({ left: targetLeft, behavior: "smooth" });
    }
  }, [active]);

  const current = testimonials?.[active];
  if (!current) return null;

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="t2-section dark-section section-top-glow relative py-14 md:py-20"
    >
      <AmbientEffects />

      <div className="t2-constellation" aria-hidden="true">
        <span /><span /><span /><span />
        <span /><span /><span /><span />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="t2-header">
          <SectionHeader
            label="Testimonials"
            title="What Our"
            accentWord="Clients Say"
          />
        </div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* ── Glass card with side arrows ── */}
          <div className="t2-card-wrap">
            <button className="t2-arrow t2-arrow--left" onClick={prev} aria-label="Previous testimonial">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="t2-glass-card">
              <svg className="t2-quote-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>

              <p className="t2-text" key={`text-${active}`}>
                {current.comment}
              </p>

              <div className="t2-card-stars" key={`stars-${active}`}>
                <StarRating rating={current.rating} className="t2-person-stars" starClassName="t2-person-star" emptyClassName="t2-person-star--empty" />
              </div>
            </div>

            <button className="t2-arrow t2-arrow--right" onClick={next} aria-label="Next testimonial">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>

          {/* ── Avatar row ── */}
          <div className="t2-avatars-wrap" ref={avatarsWrapRef}>
            <div className="t2-avatars">
              {testimonials.map((t, i) => (
                <button
                  key={`t2-${t.name}-${i}`}
                  ref={(el) => { personRefs.current[i] = el; }}
                  className={`t2-person ${i === active ? "t2-person--active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`View testimonial from ${t.name}`}
                >
                  <div className="t2-avatar-outer">
                    <div className="t2-avatar-glow" />
                    <div className="t2-avatar-ring" />
                    <div className={`t2-avatar-circle t2-avatar-circle--${t.color}`}>
                      {t.avatar}
                    </div>
                  </div>
                  <div className="t2-person-name">{t.name}</div>
                  <div className="t2-person-role">{t.role}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
