"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero2 from "@/components/sections/Hero2";

export default function Hero19Page() {
  const [isLight, setIsLight] = useState(false);

  return (
    <>
      <Navbar variant={isLight ? "light" : "dark"} />
      <Hero2 isLight={isLight} onToggle={() => setIsLight(!isLight)} />
    </>
  );
}
