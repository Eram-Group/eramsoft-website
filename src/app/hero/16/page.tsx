"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroVideoGray from "@/components/sections/HeroVideoGray";
import ServicesCardOptionsGray from "@/components/sections/ServicesCardOptionsGray";
import { PALETTES } from "@/components/sections/HeroVideoGray";

export default function Hero16Page() {
  const [themeIndex, setThemeIndex] = useState(1);

  return (
    <>
      <Navbar variant="dark" />
      <HeroVideoGray paletteIndex={themeIndex} onPaletteChange={setThemeIndex} />
      <ServicesCardOptionsGray palette={PALETTES[themeIndex]} />
    </>
  );
}
