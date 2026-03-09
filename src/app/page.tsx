import Navbar from "@/components/layout/Navbar";
import Hero2 from "@/components/sections/Hero2";
import Services from "@/components/sections/Services";
import Solutions from "@/components/sections/Solutions";
import ServicesAlt from "@/components/sections/ServicesAlt";
import ServicesCards from "@/components/sections/ServicesCards";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero2 />
      <Services />
      <Solutions />
      <ServicesAlt />
      <ServicesCards />
    </>
  );
}
