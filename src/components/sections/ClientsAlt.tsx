"use client";

import "./clients-alt.css";
import { clients } from "@/data/clients";
import { logos } from "@/components/icons/ClientLogos";

export default function ClientsAlt() {
  return (
    <section id="partners" className="ca-section relative py-24 md:py-32">
      {/* Ambient glows */}
      <div className="ca-glow ca-glow--1" aria-hidden="true" />
      <div className="ca-glow ca-glow--2" aria-hidden="true" />
      <div className="ca-noise" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ── Section header ── */}
        <div className="mb-16 text-center">
          <p className="ca-label mb-4 text-xs font-bold tracking-[0.35em] uppercase">
            Trusted Worldwide
          </p>
          <h2 className="ca-title mb-5 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Companies We&rsquo;ve{" "}
            <span className="ca-title-accent">Worked With</span>
          </h2>
          <div className="ca-line mx-auto mb-6 h-px w-24" />
          <p className="ca-subtitle mx-auto max-w-lg text-base leading-relaxed md:text-lg">
            We&rsquo;ve partnered with startups and enterprises to build
            reliable digital products that scale.
          </p>
        </div>

        {/* ── Constellation list ── */}
        <div className="ca-list">
          {clients.map((client, i) => {
            const side = i % 2 === 0 ? "left" : "right";
            return (
              <div
                key={client.name}
                className={`ca-row ca-row--${side}`}
              >
                <span className="ca-node" />
                <span className="ca-branch" />

                <div className={`ca-icon ca-icon--${client.color}`}>
                  {logos[client.name] ?? client.icon}
                </div>
                <div className="ca-text">
                  <span className="ca-name">{client.name}</span>
                  <span className="ca-type">{client.type}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Trust indicators ── */}
        <div className="mt-20">
          <div className="ca-trust">
            <div className="ca-trust-item">
              <span className="ca-trust-number">50<span>+</span></span>
              <span className="ca-trust-label">Clients</span>
            </div>
            <span className="ca-trust-sep" />
            <div className="ca-trust-item">
              <span className="ca-trust-number">120<span>+</span></span>
              <span className="ca-trust-label">Projects</span>
            </div>
            <span className="ca-trust-sep" />
            <div className="ca-trust-item">
              <span className="ca-trust-number">98<span>%</span></span>
              <span className="ca-trust-label">Retention</span>
            </div>
            <span className="ca-trust-sep" />
            <div className="ca-trust-item">
              <span className="ca-trust-number">12<span>+</span></span>
              <span className="ca-trust-label">Industries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
