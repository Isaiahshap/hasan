"use client";

import React from "react";
import { Navbar } from "../components/ui/navbar";
import { HeroSection } from "../components/sections/hero";
import { AboutSection } from "../components/sections/about";
import { TwitchLiveSection } from "../components/sections/twitch-live";
import { PressSection } from "../components/sections/press";
import { FinalCTASection } from "../components/sections/final-cta";
import { Footer } from "../components/sections/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TwitchLiveSection />
      <PressSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
