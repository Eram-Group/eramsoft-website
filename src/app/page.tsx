import Hero2 from "@/components/sections/Hero2";
import ServicesOrbital from "@/components/sections/ServicesOrbital";
import Clients from "@/components/sections/Clients";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import HowWeWork from "@/components/sections/HowWeWork";
import Testimonials2 from "@/components/sections/Testimonials2";
import Testimonials3 from "@/components/sections/Testimonials3";
import Offices from "@/components/sections/Offices";


export default function Home() {
  return (
    <main className="page-canvas">
      <Hero2 />

      <ServicesOrbital />
      <div className="section-divider" aria-hidden="true" />
      <HowWeWork />
      <div className="section-divider" aria-hidden="true" />
      <ProjectsGallery />
      <div className="section-divider" aria-hidden="true" />
      <Clients />
      <div className="section-divider" aria-hidden="true" />
      <Testimonials2 />
      <div className="section-divider" aria-hidden="true" />
      <Testimonials3 />
      <div className="section-divider" aria-hidden="true" />
      <Offices />
    </main>
  );
}
