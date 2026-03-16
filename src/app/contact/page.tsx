"use client";

import { useState } from "react";
import { OfficesGrid } from "@/components/sections/Offices";
import { useReveal } from "@/hooks/useReveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
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
  const pageRef = useReveal();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);


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
    <div ref={pageRef} className="ct-page">
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
          <div className="ct-hero-left" data-reveal="up">
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

            <div className="ct-hero-divider" aria-hidden="true">
              <span className="ct-hero-divider-dot" />
            </div>

            <div className="ct-hero-icons">
              <a href="mailto:info@eramsoft.com" className="ct-icon-btn" aria-label="Email us">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="ct-icon-label">Email</span>
              </a>
              <a href="tel:+971548882484" className="ct-icon-btn" aria-label="Call us">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span className="ct-icon-label">Phone</span>
              </a>
              <a href="https://wa.me/971548882484" target="_blank" rel="noopener noreferrer" className="ct-icon-btn ct-icon-btn--wa" aria-label="WhatsApp">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="ct-icon-label">WhatsApp</span>
              </a>
            </div>

            <p className="ct-hero-note">
              We respond within <span className="ct-accent">24 hours</span>.
              <br />
              Find our offices below.
            </p>
          </div>

          {/* ── Right — Contact Form ── */}
          <div className="ct-hero-right" data-reveal="up" style={{ "--delay": "0.15s" } as React.CSSProperties}>
            <form className="ct-form" onSubmit={handleSubmit} noValidate>
              <div className="ct-form-accent" aria-hidden="true" />
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
        <section className="of-embedded">
          <div className="of-embedded-head">
            <p className="ct-tag">Our Offices</p>
            <h2 className="ct-section-title">
              Find Us <span className="ct-accent">Worldwide</span>
            </h2>
          </div>
          <OfficesGrid />
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

          <FaqAccordion items={faqs} classPrefix="ct-faq" />
        </section>


      </div>
    </div>
  );
}
