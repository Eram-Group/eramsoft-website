import Navbar from "@/components/layout/Navbar";
import HeroVideoLight from "@/components/sections/HeroVideoLight";
import ServicesCardOptions from "@/components/sections/ServicesCardOptions";
import ServicesBlueprint from "@/components/sections/ServicesBlueprint";
import ServicesEditorial from "@/components/sections/ServicesEditorial";
import ServicesConstellation from "@/components/sections/ServicesConstellation";
import About from "@/components/sections/About";

export default function Hero7Page() {
  return (
    <>
      <Navbar variant="dark" />
      <HeroVideoLight />
      <ServicesCardOptions />
      <ServicesBlueprint />
      <ServicesEditorial />
      <ServicesConstellation />
      <About />
    </>
  );
}
