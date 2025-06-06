"use client";

import React, { useState, useEffect } from "react";
import { ScrollTriggerAnimation } from "../animations/scroll-trigger";
import { PRESS_LOGOS } from "../../lib/constants";

export const PressSection: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [hoveredPress, setHoveredPress] = useState<string | null>(null);

  const satiricalQuotes = [
    {
      quote: "Louder than a Twitch DMCA strike.",
      source: "The Internet Archive",
    },
    {
      quote: "The Karl Marx of Hot Takes.",
      source: "Political Science Twitter",
    },
    {
      quote: "If AOC streamed Call of Duty, she'd still lose to Hasan.",
      source: "Gaming Journalism Complex",
    },
    {
      quote: "More influential than your local city council.",
      source: "Municipal Politics Weekly",
    },
    {
      quote: "Single-handedly keeping political discourse alive on Twitch.",
      source: "Platform Studies Quarterly",
    },
  ];

  const pressAnnotations = {
    "TYT": "Twitter Flame Wars → Ongoing since 2018",
    "CNN": "Guest appearances → Confusion levels: Maximum",
    "Fox News": "Enemy status → Confirmed daily",
    "MSNBC": "Ideological sparring → Professional development",
    "BBC": "International recognition → Global leftist icon",
    "Vice": "Cultural coverage → Gen Z political awakening",
  };

  useEffect(() => {
    // Auto-rotating quotes
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % satiricalQuotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);



  return (
    <section id="press" className="py-16 bg-background/50 relative overflow-hidden">
      {/* Digital red carpet background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-red-950/5 to-background" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-px h-48 bg-primary/30" />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-32 bg-primary/20 rotate-45" />
        <div className="absolute top-1/2 right-0 w-2 h-24 bg-primary/10" />
      </div>

      <div className="container-custom relative z-10">
        <ScrollTriggerAnimation animation="fadeInUp" duration={1}>
          <h2 className="text-5xl md:text-7xl font-heading font-black mb-12 uppercase tracking-tight leading-[0.9] text-center">
            PRESS & <span className="text-primary">MEDIA</span>
          </h2>
        </ScrollTriggerAnimation>

        {/* Rotating quote carousel - reduced spacing */}
        <ScrollTriggerAnimation animation="fadeInUp" delay={0.2}>
          <div className="text-center mb-12 relative">
            <div key={currentQuote} className="space-y-4">
              <blockquote className="text-3xl md:text-5xl font-medium text-foreground mb-4 max-w-5xl mx-auto leading-tight">
                &ldquo;{satiricalQuotes[currentQuote].quote}&rdquo;
              </blockquote>
              <cite className="text-lg text-muted-foreground font-light italic">
                — {satiricalQuotes[currentQuote].source}
              </cite>
            </div>
            
            {/* Quote indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {satiricalQuotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentQuote 
                      ? "bg-primary scale-125" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollTriggerAnimation>

        {/* Floating press cards - reduced spacing */}
        <ScrollTriggerAnimation animation="fadeInUp" delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {PRESS_LOGOS.map((press, index) => (
              <ScrollTriggerAnimation 
                key={press.name}
                animation="magneticHover" 
                delay={0.05 * index}
              >
                <div
                  className="group relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg p-6 h-24 flex items-center justify-center cursor-pointer hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  onMouseEnter={() => setHoveredPress(press.name)}
                  onMouseLeave={() => setHoveredPress(null)}
                >
                  <div className="text-center">
                    <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                      {press.name}
                    </span>
                  </div>
                  
                  {/* Hover annotation */}
                  {hoveredPress === press.name && pressAnnotations[press.name as keyof typeof pressAnnotations] && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20 px-3 py-2 bg-background border border-border rounded-lg text-xs text-muted-foreground whitespace-nowrap shadow-lg animate-in slide-in-from-bottom-2 duration-200">
                      {pressAnnotations[press.name as keyof typeof pressAnnotations]}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border" />
                    </div>
                  )}
                </div>
              </ScrollTriggerAnimation>
            ))}
          </div>
        </ScrollTriggerAnimation>

        {/* Featured mentions with reduced stagger and spacing */}
        <ScrollTriggerAnimation animation="staggerUp" delay={0.6} stagger={0.08}>
          <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-lg p-6 max-w-6xl mx-auto">
            <h3 className="font-heading text-2xl font-black mb-4 text-primary text-center uppercase tracking-wide">
              📺 FEATURED ON
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-background/70 border border-border/30 rounded-lg p-4 group hover:border-primary/50 transition-all duration-300">
                <div className="font-bold text-primary text-lg mb-1 group-hover:scale-105 transition-transform">TYT</div>
                <div className="text-muted-foreground text-sm">Former Host</div>
                <div className="text-xs text-muted-foreground/60 mt-1 italic">Where the progressive pipeline began</div>
              </div>
              <div className="bg-background/70 border border-border/30 rounded-lg p-4 group hover:border-primary/50 transition-all duration-300">
                <div className="font-bold text-primary text-lg mb-1 group-hover:scale-105 transition-transform">H3 Podcast</div>
                <div className="text-muted-foreground text-sm">Regular Guest</div>
                <div className="text-xs text-muted-foreground/60 mt-1 italic">Chaos coordination specialist</div>
              </div>
              <div className="bg-background/70 border border-border/30 rounded-lg p-4 group hover:border-primary/50 transition-all duration-300">
                <div className="font-bold text-primary text-lg mb-1 group-hover:scale-105 transition-transform">TwitchCon</div>
                <div className="text-muted-foreground text-sm">Panel Speaker</div>
                <div className="text-xs text-muted-foreground/60 mt-1 italic">Live political education sessions</div>
              </div>
              <div className="bg-background/70 border border-border/30 rounded-lg p-4 group hover:border-primary/50 transition-all duration-300">
                <div className="font-bold text-primary text-lg mb-1 group-hover:scale-105 transition-transform">Twitter Drama</div>
                <div className="text-muted-foreground text-sm">Always Trending</div>
                <div className="text-xs text-muted-foreground/60 mt-1 italic">Professional discourse accelerator</div>
              </div>
            </div>
          </div>
        </ScrollTriggerAnimation>
      </div>
    </section>
  );
}; 