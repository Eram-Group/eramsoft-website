import Hero2 from "@/components/sections/Hero2";
import ServicesOrbital from "@/components/sections/ServicesOrbital";
import Clients from "@/components/sections/Clients";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import HowWeWork from "@/components/sections/HowWeWork";


export default function Home() {
  return (
    <main className="page-canvas">
      <Hero2 />

      {/* ── Section transition: Hero → Services ── */}
      <div className="st-bridge" aria-hidden="true">
        <svg
          className="st-curve"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="stCurveGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#50aaff" stopOpacity="0" />
              <stop offset="25%" stopColor="#50aaff" stopOpacity="0.07" />
              <stop offset="50%" stopColor="#64c8ff" stopOpacity="0.12" />
              <stop offset="75%" stopColor="#50aaff" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#50aaff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C360,25 720,95 1440,60"
            stroke="url(#stCurveGrad)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
        <div className="st-beam" />
        <div className="st-bloom" />
        <div className="st-motes">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <ServicesOrbital />
      <div className="section-divider" aria-hidden="true" />
      <HowWeWork />
      <div className="section-divider" aria-hidden="true" />
      <ProjectsGallery />
      <div className="section-divider" aria-hidden="true" />
      <Clients />
    </main>
  );
}
