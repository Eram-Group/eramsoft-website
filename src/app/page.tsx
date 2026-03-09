import Link from "next/link";

const HEROES = [
  {
    id: 1,
    name: "Centered Classic",
    description: "Clean centered layout with hex pattern background, dual CTAs, and scroll indicator.",
    style: "Light",
    tags: ["Centered", "Pattern BG", "Scroll CTA"],
    colors: { bg: "#f5f3f0", accent: "#e8853b" },
  },
  {
    id: 3,
    name: "Dark Bold",
    description: "Dark dramatic background with gradient text, glowing orbs, grid overlay, and tech marquee.",
    style: "Dark",
    tags: ["Dark", "Gradient Text", "Marquee"],
    colors: { bg: "#1a1a1a", accent: "#e8853b" },
  },
  {
    id: 5,
    name: "Video Background",
    description: "Full-screen looping video background with dark overlay, centered content, grain texture, and scroll indicator.",
    style: "Video",
    tags: ["Video BG", "Cinematic", "Full-screen", "Overlay"],
    colors: { bg: "#0a0a0a", accent: "#e8853b" },
  },
  // {
  //   id: 6,
  //   name: "Algoriza Agency",
  //   description: "Dark editorial layout with topographic SVG line art, typewriter heading, numbered navigation, and vertical social links.",
  //   style: "Dark",
  //   tags: ["Agency", "Typewriter", "SVG Art", "Editorial"],
  //   colors: { bg: "#111113", accent: "#e8853b" },
  // },
  {
    id: 7,
    name: "Video Light",
    description: "Light-mode video hero with 3D perspective entrance, warm cream overlays, and centered content.",
    style: "Light",
    tags: ["Video BG", "Light Mode", "Cinematic", "3D"],
    colors: { bg: "#d5d0c9", accent: "#b8963e" },
  },
  {
    id: 8,
    name: "Fintech Premium",
    description: "Ultra-premium dark hero with 3D gyroscope rings, gold & teal accents, glassmorphic dashboards, aurora gradients, and live financial ticker.",
    style: "Dark",
    tags: ["3D", "Fintech", "Premium", "Gold Accent"],
    colors: { bg: "#1a1c20", accent: "#e8853b" },
  },
  {
    id: 10,
    name: "AI Consulting",
    description: "Full-bleed background image hero with dark gradient overlay, left-aligned content, orange CTA, and curved navy stats bar.",
    style: "Dark",
    tags: ["Image BG", "Consulting", "Stats Bar", "AI"],
    colors: { bg: "#1b2a4a", accent: "#e8853b" },
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f3f0]">
      {/* Header */}
      <header className="border-b border-[#1a1a1a]/10 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-12">
          <div>
            <h1 className="text-2xl font-bold tracking-wider text-[#1a1a1a]">[XYZ]</h1>
            <p className="text-xs tracking-widest text-[#6b7280] uppercase">Hero Showcase</p>
          </div>
          <p className="text-sm text-[#6b7280]">
            {HEROES.length} designs
          </p>
        </div>
      </header>

      {/* Intro */}
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 lg:px-12">
        <h2 className="mb-3 text-4xl font-bold text-[#1a1a1a] md:text-5xl">
          Choose Your Hero
        </h2>
        <p className="max-w-xl text-lg text-[#6b7280]">
          Browse through different hero section designs. Click any card to
          see the full-page preview, then pick the one that fits your brand.
        </p>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HEROES.map((hero) => (
            <Link
              key={hero.id}
              href={`/hero/${hero.id}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#1a1a1a]/10 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Preview bar */}
              <div
                className="relative flex h-44 items-center justify-center"
                style={{ backgroundColor: hero.colors.bg }}
              >
                {/* Mini mockup */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="h-1 w-10 rounded-full"
                    style={{ backgroundColor: hero.colors.accent }}
                  />
                  <div className="h-2 w-24 rounded-full bg-current opacity-20"
                    style={{ color: hero.colors.bg === "#f5f3f0" ? "#1a1a1a" : "#ffffff" }}
                  />
                  <div className="h-1.5 w-16 rounded-full bg-current opacity-10"
                    style={{ color: hero.colors.bg === "#f5f3f0" ? "#1a1a1a" : "#ffffff" }}
                  />
                  <div className="mt-2 flex gap-2">
                    <div
                      className="h-5 w-14 rounded-full"
                      style={{ backgroundColor: hero.colors.accent }}
                    />
                    <div className="h-5 w-14 rounded-full border border-current opacity-20"
                      style={{ color: hero.colors.bg === "#f5f3f0" ? "#1a1a1a" : "#ffffff" }}
                    />
                  </div>
                </div>

                {/* Number badge */}
                <span className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#1a1a1a]/10 text-xs font-bold text-[#1a1a1a]/40">
                  {hero.id}
                </span>

                {/* Style badge */}
                <span className="absolute top-3 left-3 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-[#1a1a1a] uppercase backdrop-blur-sm">
                  {hero.style}
                </span>
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-1.5 text-lg font-bold text-[#1a1a1a] group-hover:text-[#e8853b] transition-colors">
                  {hero.name}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#6b7280]">
                  {hero.description}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {hero.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f5f3f0] px-2.5 py-1 text-[10px] font-medium tracking-wider text-[#6b7280] uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-[#1a1a1a]/5 px-5 py-3">
                <span className="text-xs font-semibold tracking-wider text-[#e8853b] uppercase group-hover:tracking-[0.2em] transition-all">
                  View Full Preview →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
