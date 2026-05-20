"use client";

import Image from "next/image";
import "./clients.css";
import { logos } from "@/components/icons/ClientLogos";
import SectionHeader from "@/components/ui/SectionHeader";
import AmbientEffects from "@/components/ui/AmbientEffects";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImage } from "@/sanity/lib/types";

interface ClientItem {
  name: string;
  icon: string;
  color: string;
  type: string;
  logo?: SanityImage;
}

const THRESHOLD = 8; // ≤ 8 clients → single row, > 8 → two-row marquee

function LogoCard({
  name,
  type,
  color,
  logo,
}: {
  name: string;
  type: string;
  color: string;
  logo?: SanityImage;
}) {
  const hasLogo = Boolean(logo?.asset);
  return (
    <div className="cl-logo">
      <div className={`cl-logo-icon ${hasLogo ? "cl-logo-icon--image" : `cl-logo-icon--${color}`}`}>
        {hasLogo ? (
          <Image
            src={urlFor(logo!).url()}
            alt={`${name} logo`}
            width={80}
            height={80}
            className="cl-logo-img"
          />
        ) : (
          logos[name] ?? name[0]
        )}
      </div>
      <div>
        <div className="cl-logo-name">{name}</div>
        <div className="cl-logo-type">{type}</div>
      </div>
    </div>
  );
}

export default function Clients({ clients }: { clients: ClientItem[] }) {
  const isSingle = clients.length <= THRESHOLD;
  const row1 = isSingle ? clients : clients.slice(0, Math.ceil(clients.length / 2));
  const row2 = isSingle ? [] : clients.slice(Math.ceil(clients.length / 2));

  return (
    <section id="clients" className="cl-section dark-section section-top-glow relative pt-10 pb-14 md:pt-14 md:pb-20">
      <AmbientEffects />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div>
          <SectionHeader
            label="Trusted By"
            title="Clients &"
            accentWord="Partners"
            subtitle="We partner with forward-thinking companies across industries to deliver solutions that drive real impact."
          />
        </div>
      </div>

      {/* ── Logo rows ── */}
      <div>
        {isSingle ? (
          <div className="cl-marquee-wrap">
            <div className="cl-marquee cl-marquee--left">
              {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
                <LogoCard key={`s-${i}`} name={client.name} type={client.type} color={client.color} logo={client.logo} />
              ))}
            </div>
          </div>
        ) : (
          <div className="cl-marquee-wrap">
            <div className="cl-marquee cl-marquee--left">
              {[...row1, ...row1].map((client, i) => (
                <LogoCard key={`r1-${i}`} name={client.name} type={client.type} color={client.color} logo={client.logo} />
              ))}
            </div>
            <div className="cl-marquee cl-marquee--right cl-marquee--inset">
              {[...row2, ...row2].map((client, i) => (
                <LogoCard key={`r2-${i}`} name={client.name} type={client.type} color={client.color} logo={client.logo} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Stats ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16 mt-10">
        <div className="cl-stats">
          <div className="cl-stat">
            <div className="cl-stat-number">50<span>+</span></div>
            <div className="cl-stat-label">Clients Served</div>
          </div>
          <div className="cl-stat">
            <div className="cl-stat-number">120<span>+</span></div>
            <div className="cl-stat-label">Projects Delivered</div>
          </div>
          <div className="cl-stat">
            <div className="cl-stat-number">98<span>%</span></div>
            <div className="cl-stat-label">Retention Rate</div>
          </div>
          <div className="cl-stat">
            <div className="cl-stat-number">12<span>+</span></div>
            <div className="cl-stat-label">Industries</div>
          </div>
        </div>
      </div>
    </section>
  );
}
