"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import AmbientEffects from "@/components/ui/AmbientEffects";
import "./faqs.css";

const faqs = [
  {
    q: "What types of projects do you work on?",
    a: "We specialize in web applications, mobile apps, SaaS platforms, and enterprise software. From MVPs for startups to large-scale systems for established companies — we adapt our approach to fit your needs and scale.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary based on scope and complexity. A focused MVP can take 6–8 weeks, while a full-featured platform typically runs 3–6 months. We provide a detailed timeline estimate after our discovery phase.",
  },
  {
    q: "What technologies do you use?",
    a: "We work with modern, battle-tested technologies including React, Next.js, React Native, Node.js, and cloud platforms like AWS and GCP. We choose the best stack for each project based on its specific requirements.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Absolutely. We offer flexible maintenance and support plans that include bug fixes, performance monitoring, security updates, and feature enhancements to keep your product running smoothly.",
  },
  {
    q: "How do you handle communication and project updates?",
    a: "Transparency is core to our process. You get a dedicated project manager, regular sprint demos, and access to our project management tools. We keep you in the loop at every stage — no surprises.",
  },
  {
    q: "What does your pricing look like?",
    a: "We offer both fixed-price and time-and-materials engagement models. After our initial discovery call, we provide a transparent proposal with clear deliverables and pricing — so you know exactly what to expect.",
  },
];

export default function Faqs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="faq-section dark-section section-top-glow relative py-20 md:py-28">
      <AmbientEffects />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked"
          accentWord="Questions"
          subtitle="Everything you need to know about working with us."
        />

        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
              >
                <button
                  className="faq-trigger"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q">{f.q}</span>
                  <span className="faq-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div className="faq-body">
                  <p className="faq-a">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
