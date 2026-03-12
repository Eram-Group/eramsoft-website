"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./contact.css";

/* ══════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════ */

const services = [
  "Mobile App Development",
  "Web Development",
  "UI/UX Design",
  "Custom Software",
  "Cloud Solutions",
  "Other",
];

const branches = [
  {
    city: "Dubai",
    label: "UAE — Head Office",
    address: "Business Bay, Dubai, UAE",
    phone: "+971 54 888 2484",
    hours: "Sun – Thu: 9 AM – 6 PM",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
  },
  {
    city: "Riyadh",
    label: "Saudi Arabia",
    address: "Al Olaya District, Riyadh, KSA",
    phone: "+966 55 412 7890",
    hours: "Sun – Thu: 9 AM – 6 PM",
    image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&q=80",
  },
  {
    city: "Cairo",
    label: "Egypt",
    address: "Smart Village, 6th of October, Cairo",
    phone: "+20 10 2345 6789",
    hours: "Sun – Thu: 10 AM – 7 PM",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80",
  },
];

/* ══════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════ */

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const els = document.querySelectorAll(".ct-reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("ct-revealed");
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend / email service
    console.log("Form submitted:", form);
  };

  return (
    <div className="ct-page">
      {/* ── Ambient layers ── */}
      <div className="ct-glow ct-glow--a" aria-hidden="true" />
      <div className="ct-glow ct-glow--b" aria-hidden="true" />
      <div className="ct-glow ct-glow--c" aria-hidden="true" />
      <div className="ct-streak" aria-hidden="true" />
      <div className="ct-grain" aria-hidden="true" />
      <div className="ct-dots" aria-hidden="true" />

      {/* ═══════════════════════════════════════
          HERO + FORM — Side by Side
          ═══════════════════════════════════════ */}
      <section className="ct-hero">
        <div className="ct-hero-mesh" aria-hidden="true" />

        {/* Pulsing neon rings (behind left text) */}
        <div className="ct-hero-rings" aria-hidden="true">
          <div className="ct-ring ct-ring--1" />
          <div className="ct-ring ct-ring--2" />
          <div className="ct-ring ct-ring--3" />
        </div>

        <div className="ct-hero-row">
          {/* ── Left — Hero Text ── */}
          <div className="ct-hero-left">
            <p className="ct-tag ct-rise" style={{ animationDelay: "0.2s" }}>
              Contact Us
            </p>
            <h1 className="ct-hero-h1 ct-rise" style={{ animationDelay: "0.4s" }}>
              Let&apos;s Build Something{" "}
              <span className="ct-accent">Great Together</span>
            </h1>
            <p className="ct-hero-sub ct-rise" style={{ animationDelay: "0.6s" }}>
              Have a project in mind? A question about our services? Or just
              want to say hello? We&apos;d love to hear from you &mdash;
              let&apos;s start a conversation.
            </p>

            <div className="ct-hero-divider ct-rise" style={{ animationDelay: "0.8s" }} aria-hidden="true" />

            <div className="ct-hero-email ct-rise" style={{ animationDelay: "0.9s" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>info@eramsoft.com</span>
            </div>

            <p className="ct-hero-note ct-rise" style={{ animationDelay: "1s" }}>
              We respond within <span className="ct-accent">24 hours</span>.
              <br />
              Find our offices below.
            </p>
          </div>

          {/* ── Right — Contact Form ── */}
          <div className="ct-hero-right ct-rise" style={{ animationDelay: "0.5s" }}>
            <form className="ct-form" onSubmit={handleSubmit} noValidate>
              <div className="ct-form-glow" aria-hidden="true" />

              <h2 className="ct-form-title">Send a Message</h2>

              <div className="ct-form-grid">
                {/* Full Name */}
                <div
                  className={`ct-field ${focused === "name" ? "ct-field--focused" : ""} ${form.name ? "ct-field--filled" : ""}`}
                >
                  <label className="ct-field-label" htmlFor="ct-name">
                    Full Name
                  </label>
                  <div className="ct-field-wrap">
                    <svg className="ct-field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <input
                      id="ct-name"
                      name="name"
                      type="text"
                      className="ct-input"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div
                  className={`ct-field ${focused === "email" ? "ct-field--focused" : ""} ${form.email ? "ct-field--filled" : ""}`}
                >
                  <label className="ct-field-label" htmlFor="ct-email">
                    Email Address
                  </label>
                  <div className="ct-field-wrap">
                    <svg className="ct-field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <input
                      id="ct-email"
                      name="email"
                      type="email"
                      className="ct-input"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div
                  className={`ct-field ${focused === "phone" ? "ct-field--focused" : ""} ${form.phone ? "ct-field--filled" : ""}`}
                >
                  <label className="ct-field-label" htmlFor="ct-phone">
                    Phone <span className="ct-optional">(Optional)</span>
                  </label>
                  <div className="ct-field-wrap">
                    <svg className="ct-field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <input
                      id="ct-phone"
                      name="phone"
                      type="tel"
                      className="ct-input"
                      placeholder="+966 5X XXX XXXX"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                {/* Service */}
                <div
                  className={`ct-field ${focused === "service" ? "ct-field--focused" : ""} ${form.service ? "ct-field--filled" : ""}`}
                >
                  <label className="ct-field-label" htmlFor="ct-service">
                    Service
                  </label>
                  <div className="ct-field-wrap">
                    <svg className="ct-field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                    <select
                      id="ct-service"
                      name="service"
                      className="ct-input ct-select"
                      value={form.service}
                      onChange={handleChange}
                      onFocus={() => setFocused("service")}
                      onBlur={() => setFocused(null)}
                      required
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <svg className="ct-field-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                {/* Message — full width */}
                <div
                  className={`ct-field ct-field--full ${focused === "message" ? "ct-field--focused" : ""} ${form.message ? "ct-field--filled" : ""}`}
                >
                  <label className="ct-field-label" htmlFor="ct-message">
                    Your Message
                  </label>
                  <div className="ct-field-wrap ct-field-wrap--textarea">
                    <svg className="ct-field-icon ct-field-icon--textarea" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                    <textarea
                      id="ct-message"
                      name="message"
                      className="ct-input ct-textarea"
                      placeholder="Tell us about your project, goals, and timeline..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="ct-submit">
                <span className="ct-submit-shimmer" aria-hidden="true" />
                <span className="ct-submit-text">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BRANCHES — Our Offices
          ═══════════════════════════════════════ */}
      <div className="ct-wrap">
        <div className="ct-thread" aria-hidden="true" />

        <section className="ct-branches ct-reveal">
          <div className="ct-branches-head">
            <p className="ct-tag">Our Offices</p>
            <h2 className="ct-section-title">
              Find Us <span className="ct-accent">Worldwide</span>
            </h2>
          </div>

          <div className="ct-branches-grid">
            {branches.map((b, i) => (
              <div key={b.city} className="ct-branch" style={{ animationDelay: `${i * 0.15}s` }}>
                {/* City image */}
                <div className="ct-branch-img-wrap">
                  <Image
                    src={b.image}
                    alt={`${b.city} office`}
                    fill
                    className="ct-branch-img"
                    sizes="(max-width:900px) 100vw, 33vw"
                  />
                  <div className="ct-branch-img-overlay" aria-hidden="true" />
                  {/* Badge on top of image */}
                  <div className="ct-branch-badge">
                    <span className="ct-branch-dot" />
                    {b.label}
                  </div>
                </div>

                <div className="ct-branch-body">
                <h3 className="ct-branch-city">{b.city}</h3>

                <div className="ct-branch-details">
                  {/* Address */}
                  <div className="ct-branch-row">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{b.address}</span>
                  </div>

                  {/* Phone */}
                  <div className="ct-branch-row">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <span>{b.phone}</span>
                  </div>

                  {/* Hours */}
                  <div className="ct-branch-row">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{b.hours}</span>
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="ct-thread" aria-hidden="true" />

        {/* ═══════════════════════════════════════
            BRANCHES Option B — Full-bleed Image Cards
            ═══════════════════════════════════════ */}
        <section className="ct-branches ct-reveal">
          <div className="ct-branches-head">
            <p className="ct-tag">Option B</p>
            <h2 className="ct-section-title">
              Find Us <span className="ct-accent">Worldwide</span>
            </h2>
          </div>

          <div className="ct-b2-grid">
            {branches.map((b, i) => (
              <div key={b.city} className="ct-b2-card" style={{ animationDelay: `${i * 0.15}s` }}>
                <Image
                  src={b.image}
                  alt={`${b.city} office`}
                  fill
                  className="ct-b2-bg"
                  sizes="(max-width:900px) 100vw, 33vw"
                />
                <div className="ct-b2-overlay" aria-hidden="true" />

                <div className="ct-b2-content">
                  <div className="ct-b2-top">
                    <div className="ct-branch-badge ct-b2-badge">
                      <span className="ct-branch-dot" />
                      {b.label}
                    </div>
                  </div>

                  <div className="ct-b2-bottom">
                    <h3 className="ct-b2-city">{b.city}</h3>
                    <div className="ct-b2-info">
                      <div className="ct-b2-row">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>{b.address}</span>
                      </div>
                      <div className="ct-b2-row">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                        </svg>
                        <span>{b.phone}</span>
                      </div>
                      <div className="ct-b2-row">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>{b.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="ct-thread" aria-hidden="true" />

        {/* ═══════════════════════════════════════
            BRANCHES Option C — Vertical Panel Strips
            ═══════════════════════════════════════ */}
        <section className="ct-branches ct-reveal">
          <div className="ct-branches-head">
            <p className="ct-tag">Option C</p>
            <h2 className="ct-section-title">
              Find Us <span className="ct-accent">Worldwide</span>
            </h2>
          </div>

          <div className="ct-panels">
            {branches.map((b, i) => (
              <div key={b.city} className="ct-panel" style={{ animationDelay: `${i * 0.15}s` }}>
                <Image
                  src={b.image}
                  alt={`${b.city} office`}
                  fill
                  className="ct-panel-img"
                  sizes="(max-width:900px) 100vw, 33vw"
                />
                <div className="ct-panel-overlay" aria-hidden="true" />
                <div className="ct-panel-accent" aria-hidden="true" />

                <div className="ct-panel-content">
                  <div className="ct-panel-label">
                    <span className="ct-branch-dot" />
                    {b.label}
                  </div>
                  <h3 className="ct-panel-city">{b.city}</h3>
                  <p className="ct-panel-address">{b.address}</p>
                  <p className="ct-panel-phone">{b.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
