"use client";

import React, { useRef, useEffect } from "react";
import { ScrollTriggerAnimation } from "../animations/scroll-trigger";
import { SOCIAL_LINKS } from "../../lib/constants";
import { Button } from "../ui/button";
import { ExternalLink, Radio, Users, Flame, Zap, Gamepad2 } from "lucide-react";
import { gsap } from "gsap";

export const TwitchLiveSection: React.FC = () => {
  const scheduleRef = useRef<HTMLDivElement>(null);

  const streamSchedule = [
    {
      days: "M–F",
      type: "Political Commentary",
      icon: Flame,
      description: "Daily roasting of capitalism's finest",
      time: "11AM PT",
      emoji: "🔴",
      color: "bg-red-600/20 border-red-600/30",
    },
    {
      days: "Weekends", 
      type: "Rage Gaming & Reacts",
      icon: Gamepad2,
      description: "Where controllers go to die", 
      time: "Whenever",
      emoji: "🎮",
      color: "bg-purple-600/20 border-purple-600/30",
    },
    {
      days: "Special Events",
      type: "Debate Bloodbaths",
      icon: Zap,
      description: "Intellectual gladiator combat",
      time: "On Demand",
      emoji: "⚔️",
      color: "bg-yellow-600/20 border-yellow-600/30",
    },
  ];

  useEffect(() => {
    // Stagger animation for schedule cards
    if (scheduleRef.current) {
      const cards = scheduleRef.current.querySelectorAll('.schedule-card');
      gsap.fromTo(cards, 
        {
          y: 80,
          opacity: 0,
          rotationY: -15,
        },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: scheduleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }
  }, []);

  return (
    <section id="stream" className="py-32 bg-secondary/10 relative overflow-hidden">
      {/* Background architectural elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-px h-96 bg-primary/20" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-32 bg-primary/30 rotate-45" />
        <div className="absolute top-1/2 left-1/3 w-1 h-64 bg-primary/10 -rotate-12" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header with serif drama */}
        <ScrollTriggerAnimation animation="fadeInUp" duration={1}>
          <div className="max-w-5xl mb-20">
            <h2 className="text-5xl md:text-7xl font-heading font-black mb-8 uppercase tracking-tight leading-[0.9]">
              Live on <span className="text-primary">Twitch</span>
            </h2>
            <div className="text-2xl md:text-4xl font-serif text-muted-foreground italic leading-relaxed max-w-4xl">
              Daily Political Commentary That Goes Harder Than Your Econ Professor&apos;s Midlife Crisis.
            </div>
          </div>
        </ScrollTriggerAnimation>

        <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
          {/* Left: Narrative block */}
          <ScrollTriggerAnimation animation="slideInLeft" delay={0.3} className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-foreground">
                Join millions of viewers for daily streams covering current events, political analysis, 
                and progressive commentary that makes cable news look like amateur hour.
              </p>
              
              <div className="pl-6 border-l-2 border-primary/30 space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                                     This isn&apos;t just streaming — it&apos;s live political theater where landlords get ratio&apos;d 
                   and crypto bros learn about labor theory in real time.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center gap-3">
                    <Users className="text-primary flex-shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-foreground mb-1">45K+ Live Viewers</div>
                      <div className="text-muted-foreground">Peak political discourse hours</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Radio className="text-primary flex-shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-foreground mb-1">8+ Hours Daily</div>
                      <div className="text-muted-foreground">Professional yelling sessions</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Flame className="text-primary flex-shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-foreground mb-1">Infinite Takes</div>
                      <div className="text-muted-foreground">Hot, cold, and nuclear</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ScrollTriggerAnimation animation="fadeInUp" delay={0.8}>
              <div className="pt-8">
                <Button
                  size="lg"
                  onClick={() => window.open(SOCIAL_LINKS.twitch, '_blank')}
                  className="text-lg px-10 py-6 flex items-center gap-3 group relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <Radio size={20} className="group-hover:animate-pulse" />
                  <span className="font-bold tracking-wide">JOIN THE STREAM</span>
                  <ExternalLink size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                </Button>
                <div className="text-xs text-muted-foreground mt-3 italic">
                  45K people already inhaling copium live
                </div>
              </div>
            </ScrollTriggerAnimation>
          </ScrollTriggerAnimation>

          {/* Right: Twitch embed with architectural frame */}
          <ScrollTriggerAnimation animation="slideInRight" delay={0.5} className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-video bg-background border-2 border-primary/20 rounded-lg overflow-hidden relative">
                <div className="absolute inset-2 bg-gradient-to-br from-purple-900/30 via-background to-background flex items-center justify-center rounded-md">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <Radio className="w-10 h-10 text-primary animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      🔴 LIVE NOW
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-48">
                      Professional political commentary & occasional shirt removal
                    </p>
                    <Button
                      variant="secondary"
                      onClick={() => window.open(SOCIAL_LINKS.twitch, '_blank')}
                      className="flex items-center gap-2 mt-4"
                    >
                      <ExternalLink size={16} />
                      Open in Twitch
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary/40" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary/40" />
            </div>
          </ScrollTriggerAnimation>
        </div>

        {/* Schedule cards with stagger animation */}
        <ScrollTriggerAnimation animation="fadeInUp" delay={0.6}>
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-foreground uppercase tracking-wide">
              📅 STREAMING SCHEDULE
            </h3>
          </div>
        </ScrollTriggerAnimation>

        <div ref={scheduleRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {streamSchedule.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.type}
                className={`schedule-card ${item.color} border rounded-lg p-6 group hover:scale-105 transition-all duration-300 cursor-default`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-2xl">{item.emoji}</div>
                  <IconComponent className="text-primary group-hover:rotate-12 transition-transform duration-300" size={20} />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{item.days}</div>
                    <div className="text-xs text-muted-foreground">•</div>
                    <div className="text-xs text-muted-foreground">{item.time}</div>
                  </div>
                  
                  <h4 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.type}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground italic">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}; 