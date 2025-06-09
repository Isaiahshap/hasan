"use client";

import React from "react";
import { Navbar } from "../components/ui/navbar";
import { HeroSection } from "../components/sections/hero";
import { CopiumMeterSection } from "../components/sections/copium-meter";
import { AboutSection } from "../components/sections/about";
import { TwitchLiveSection } from "../components/sections/twitch-live";
import { TestimonialsSection } from "../components/sections/testimonials";
import { Footer } from "../components/sections/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <CopiumMeterSection />
      <AboutSection />
      <TwitchLiveSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
