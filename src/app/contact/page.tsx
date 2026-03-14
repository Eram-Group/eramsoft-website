"use client";

import { useState } from "react";
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
    map: "https://www.google.com/maps/search/Business+Bay+Dubai+UAE",
  },
  {
    city: "Riyadh",
    label: "Saudi Arabia",
    address: "Al Olaya District, Riyadh, KSA",
    phone: "+966 55 412 7890",
    hours: "Sun – Thu: 9 AM – 6 PM",
    image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&q=80",
    map: "https://www.google.com/maps/search/Al+Olaya+District+Riyadh+KSA",
  },
  {
    city: "Cairo",
    label: "Egypt",
    address: "Smart Village, 6th of October, Cairo",
    phone: "+20 10 2345 6789",
    hours: "Sun – Thu: 10 AM – 7 PM",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80",
    map: "https://www.google.com/maps/search/Smart+Village+6th+of+October+Cairo",
  },
];

const faqs = [
  {
    q: "What services does Eram Soft offer?",
    a: "We specialize in mobile app development, web development, UI/UX design, custom software solutions, and cloud services. Whether you need a full product build or support with a specific phase, we\u2019ve got you covered.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary based on scope and complexity. A simple mobile app may take 6\u201310 weeks, while larger enterprise solutions can span several months. We\u2019ll provide a detailed timeline after our discovery session.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "We work with both. From early-stage startups looking to build their MVP to established enterprises needing scalable solutions \u2014 our team adapts to your stage and budget.",
  },
  {
    q: "What is your development process?",
    a: "We follow an agile methodology: discovery & planning, UI/UX design, iterative development sprints, QA testing, deployment, and ongoing support. You\u2019ll have full visibility at every stage.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Absolutely. We offer maintenance packages that include bug fixes, performance monitoring, feature updates, and security patches to keep your product running smoothly.",
  },
  {
    q: "How can I request a quote?",
    a: "Simply fill out the contact form above or email us at info@eramsoft.com with a brief description of your project. We\u2019ll get back to you within 24 hours with next steps.",
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);


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
            <p className="ct-tag">
              Contact Us
            </p>
            <h1 className="ct-hero-h1">
              Let&apos;s Build Something{" "}
              <span className="ct-accent">Great Together</span>
            </h1>
            <p className="ct-hero-sub">
              Have a project in mind? A question about our services? Or just
              want to say hello? We&apos;d love to hear from you &mdash;
              let&apos;s start a conversation.
            </p>

            <div className="ct-hero-divider" aria-hidden="true" />

            <div className="ct-hero-email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>info@eramsoft.com</span>
            </div>

            <p className="ct-hero-note">
              We respond within <span className="ct-accent">24 hours</span>.
              <br />
              Find our offices below.
            </p>
          </div>

          {/* ── Right — Contact Form ── */}
          <div className="ct-hero-right">
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

        {/* ═══════════════════════════════════════
            BRANCHES — Full-bleed Image Cards
            ═══════════════════════════════════════ */}
        <section className="ct-branches">
          <div className="ct-branches-head">
            <p className="ct-tag">Our Offices</p>
            <h2 className="ct-section-title">
              Find Us <span className="ct-accent">Worldwide</span>
            </h2>
          </div>

          <div className="ct-b2-grid">
            {branches.map((b, i) => (
              <a key={b.city} href={b.map} target="_blank" rel="noopener noreferrer" className="ct-b2-card">
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

                    {/* Map link indicator */}
                    <div className="ct-b2-map-link">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        </section>

        <div className="ct-thread" aria-hidden="true" />

        {/* ═══════════════════════════════════════
            FAQ
            ═══════════════════════════════════════ */}
        <section className="ct-faq">
          <div className="ct-branches-head">
            <p className="ct-tag">FAQ</p>
            <h2 className="ct-section-title">
              Frequently Asked <span className="ct-accent">Questions</span>
            </h2>
          </div>

          <div className="ct-faq-list">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={`ct-faq-item ${isOpen ? "ct-faq-item--open" : ""}`}>
                  <button
                    className="ct-faq-trigger"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="ct-faq-q">{f.q}</span>
                    <span className="ct-faq-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  <div className="ct-faq-body">
                    <p className="ct-faq-a">{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="ct-thread" aria-hidden="true" />

        {/* ═══════════════════════════════════════
            FAQ Option B — Split Panel
            ═══════════════════════════════════════ */}
        <section className="ct-faq">
          <div className="ct-branches-head">
            <p className="ct-tag">Option B</p>
            <h2 className="ct-section-title">
              Frequently Asked <span className="ct-accent">Questions</span>
            </h2>
          </div>

          <div className="ct-faqb">
            {/* Left — Question tabs */}
            <div className="ct-faqb-tabs">
              {faqs.map((f, i) => (
                <button
                  key={i}
                  className={`ct-faqb-tab ${openFaq === i ? "ct-faqb-tab--active" : ""}`}
                  onClick={() => setOpenFaq(i)}
                >
                  <span className="ct-faqb-num">0{i + 1}</span>
                  <span className="ct-faqb-q">{f.q}</span>
                  <svg className="ct-faqb-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Right — Answer panel */}
            <div className="ct-faqb-panel">
              <div className="ct-faqb-panel-glow" aria-hidden="true" />
              {openFaq !== null ? (
                <>
                  <span className="ct-faqb-panel-num">0{openFaq + 1}</span>
                  <h3 className="ct-faqb-panel-q">{faqs[openFaq].q}</h3>
                  <div className="ct-faqb-panel-divider" />
                  <p className="ct-faqb-panel-a">{faqs[openFaq].a}</p>
                </>
              ) : (
                <>
                  <span className="ct-faqb-panel-num">01</span>
                  <h3 className="ct-faqb-panel-q">{faqs[0].q}</h3>
                  <div className="ct-faqb-panel-divider" />
                  <p className="ct-faqb-panel-a">{faqs[0].a}</p>
                </>
              )}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
