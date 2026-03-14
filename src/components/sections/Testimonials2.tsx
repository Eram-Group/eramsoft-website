"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import AmbientEffects from "@/components/ui/AmbientEffects";
import { testimonials } from "@/data/testimonials";
import "./testimonials2.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

const staggerAvatars = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const avatarItem = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function MiniStars({ rating }: { rating: number }) {
  return (
    <div className="t2-person-stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className={`t2-person-star ${s > rating ? "t2-person-star--empty" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials2() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goTo = useCallback((i: number) => {
    setActive(i);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const current = testimonials[active];

  return (
    <section
      id="testimonials"
      className="t2-section dark-section section-top-glow relative py-14 md:py-20"
    >
      <AmbientEffects />

      <div className="t2-constellation" aria-hidden="true">
        <span /><span /><span /><span />
        <span /><span /><span /><span />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <motion.div
          className="t2-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            label="Testimonials"
            title="What Our"
            accentWord="Clients Say"
          />
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
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
                <MiniStars rating={current.rating} />
              </div>
            </div>

            <button className="t2-arrow t2-arrow--right" onClick={next} aria-label="Next testimonial">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>

          {/* ── Avatar row ── */}
          <motion.div
            className="t2-avatars-wrap"
            variants={staggerAvatars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <div className="t2-avatars">
              {testimonials.map((t, i) => (
                <motion.button
                  key={t.name}
                  className={`t2-person ${i === active ? "t2-person--active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`View testimonial from ${t.name}`}
                  variants={avatarItem}
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
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
