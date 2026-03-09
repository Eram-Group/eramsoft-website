import Navbar from "@/components/layout/Navbar";
import HeroAIConsulting from "@/components/sections/HeroAIConsulting";
import ServicesAIConsulting from "@/components/sections/ServicesAIConsulting";
import Footer from "@/components/layout/Footer";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

export default function Hero10Page() {
  return (
    <>
      <Navbar variant="dark" />
      <HeroAIConsulting />
      <ServicesAIConsulting />
      <Footer />
      <ThemeSwitcher />
    </>
  );
}
