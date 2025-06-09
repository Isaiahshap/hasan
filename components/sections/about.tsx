"use client";

import React, { useRef, useEffect } from "react";
import { ScrollTriggerAnimation } from "../animations/scroll-trigger";
import { Button } from "../ui/button";
import { SOCIAL_LINKS } from "../../lib/constants";
import { ExternalLink, Users, Zap, Target, Flame, Info } from "lucide-react";
import { gsap } from "gsap";

export const AboutSection: React.FC = () => {

  const dividerRef = useRef<HTMLDivElement>(null);

  const satiricalStats = [
    { 
      label: "Crypto Bros Ratio'd", 
      value: "420+", 
      tooltip: "This metric resets every time he says 'neoliberal.'" 
    },
    { 
      label: "Debate Victories", 
      value: "All", 
      tooltip: "Includes Twitter flame wars and Chat debates." 
    },
    { 
      label: "Leftist Takes per Minute", 
      value: "8.3", 
      tooltip: "Peak performance reached during election streams." 
    },
    { 
      label: "Twitter Flame Wars", 
      value: "Daily", 
      tooltip: "Includes losses, wins, and questionable subtweets." 
    },
  ];

  const socialButtons = [
    { name: "Twitch", url: SOCIAL_LINKS.twitch, icon: Zap, color: "bg-purple-600" },
    { name: "YouTube", url: SOCIAL_LINKS.youtube, icon: Target, color: "bg-red-600" },
    { name: "TikTok", url: SOCIAL_LINKS.tiktok, icon: Users, color: "bg-pink-600" },
    { name: "Twitter/X", url: SOCIAL_LINKS.twitter, icon: Flame, color: "bg-gray-900" },
    { name: "Instagram", url: SOCIAL_LINKS.instagram, icon: ExternalLink, color: "bg-gradient-to-br from-purple-600 to-pink-600" },
  ];

  useEffect(() => {
    // Laser scan divider animation
    if (dividerRef.current) {
      gsap.fromTo(dividerRef.current, 
        { scaleX: 0, transformOrigin: "left center" },
        { 
          scaleX: 1, 
          duration: 1.5, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: dividerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }
  }, []);

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-purple-900/15 to-blue-900/10 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent" />
        
        {/* Moving gradient blobs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-purple-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }} />
      </div>

      <div className="container-custom relative z-10">
        <ScrollTriggerAnimation animation="fadeInUp" duration={1}>
          <h2 className="text-5xl md:text-7xl font-heading font-black mb-20 max-w-4xl leading-[0.9] uppercase tracking-tight">
            WHO THE F*CK IS{" "}
            <span className="text-primary block md:inline">HASAN PIKER</span>?
          </h2>
        </ScrollTriggerAnimation>

        {/* Asymmetrical main layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Wide text block */}
          <ScrollTriggerAnimation animation="slideInLeft" delay={0.2} className="lg:col-span-7">
            <div className="space-y-8">
              {/* Glassmorphic container for main description */}
              <div className="relative backdrop-blur-xl bg-background/60 border border-white/10 rounded-2xl p-8 shadow-2xl">
                {/* Glassmorphic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent rounded-2xl" />
                
                <div className="relative z-10 space-y-6">
                  <p className="text-2xl md:text-3xl leading-relaxed text-foreground font-light">
                    <strong className="text-primary font-black">Hasan Piker</strong> is a Turkish-American political commentator, 
                    Twitch streamer, and leftist icon.
                  </p>
                  
                  <div className="pl-6 border-l-2 border-primary/40">
                    <p className="text-xl leading-relaxed text-muted-foreground">
                      He yells at neolibs, roasts crypto bros, debates fascists, and somehow still looks good doing it.
                    </p>
                  </div>

                  <div className="text-base text-muted-foreground/90 uppercase tracking-widest font-medium">
                    Political streamer. Cultural menace. Probably yelling right now.
                  </div>
                </div>
              </div>

              {/* Red laser divider */}
              <div ref={dividerRef} className="h-px bg-gradient-to-r from-primary via-primary/60 to-transparent" />

              {/* Social buttons with hover effects */}
              <div className="pt-8">
                <h3 className="font-heading text-xl font-bold mb-6 text-foreground uppercase tracking-wide">
                  FIND HIM EVERYWHERE
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialButtons.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <ScrollTriggerAnimation key={social.name} animation="magneticHover">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => window.open(social.url, '_blank')}
                          className="flex items-center gap-3 px-6 py-3 group hover:scale-105 transition-all duration-300 border border-border/50 hover:border-primary/50"
                        >
                          <div className={`w-3 h-3 rounded-full ${social.color}`} />
                          <IconComponent size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                          <span className="font-medium">{social.name}</span>
                        </Button>
                      </ScrollTriggerAnimation>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollTriggerAnimation>

          {/* Right: Satirical stats as horizontal cards */}
          <ScrollTriggerAnimation animation="slideInRight" delay={0.4} className="lg:col-span-5">
            <div className="space-y-8">
              <h3 className="font-heading text-2xl font-black text-primary uppercase tracking-wide">
                📊 SATIRICAL STATS
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {satiricalStats.map((stat, index) => (
                  <ScrollTriggerAnimation 
                    key={stat.label}
                    animation="fadeInUp" 
                    delay={0.6 + (index * 0.1)}
                  >
                    <div className="group relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:scale-102 cursor-pointer">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="text-3xl font-black text-primary group-hover:scale-110 transition-transform duration-300">
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted-foreground uppercase tracking-wide group-hover:text-foreground transition-colors">
                            {stat.label}
                          </div>
                        </div>
                        <Info size={16} className="text-muted-foreground/50 group-hover:text-primary transition-colors" />
                      </div>
                      
                      <div className="text-xs text-muted-foreground/80 italic leading-relaxed group-hover:text-muted-foreground transition-colors">
                        {stat.tooltip}
                      </div>
                      
                      {/* Subtle gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
                    </div>
                  </ScrollTriggerAnimation>
                ))}
              </div>

              {/* Quote block */}
              <ScrollTriggerAnimation animation="fadeInUp" delay={1.2}>
                <div className="mt-8 pt-8 border-t border-border/50 text-center bg-background/60 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-sm text-muted-foreground italic">
                    &ldquo;This Site Was Funded by the Tears of Landlords.&rdquo;
                  </div>
                  <div className="text-xs text-muted-foreground/60 mt-2">
                    — Financial Disclosure, 2025
                  </div>
                </div>
              </ScrollTriggerAnimation>
            </div>
          </ScrollTriggerAnimation>
        </div>
      </div>
    </section>
  );
}; 