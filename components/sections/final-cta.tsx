"use client";

import React, { useRef, useEffect } from "react";
import { ScrollTriggerAnimation } from "../animations/scroll-trigger";
import { Button } from "../ui/button";
import { Mail, ExternalLink, Code } from "lucide-react";
import { gsap } from "gsap";

export const FinalCTASection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Card entrance animation from bottom
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, 
        {
          y: 100,
          opacity: 0,
          rotationX: -15,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.4)",
          delay: 0.5,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }
  }, []);

  return (
    <section id="contact" className="py-32 bg-secondary/20 relative overflow-hidden">
      {/* Brutalist background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-1 h-64 bg-primary/20 rotate-12" />
        <div className="absolute bottom-1/3 right-1/4 w-px h-96 bg-primary/30" />
        <div className="absolute top-1/2 left-1/3 w-2 h-32 bg-primary/10 -rotate-45" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollTriggerAnimation animation="fadeInUp" duration={1.2}>
            <h2 className="text-5xl md:text-8xl font-heading font-black mb-8 text-foreground uppercase leading-[0.85] tracking-[0.1em] md:tracking-[0.15em]">
              HASAN — I MADE THIS{" "}
              <span className="text-primary block md:inline">FOR FREE</span>
            </h2>
            <div className="text-xl md:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
              But I legit want to make you your <span className="text-primary font-bold">real site</span>. 
              This is just a taste of what we could build together.
            </div>
          </ScrollTriggerAnimation>

          <ScrollTriggerAnimation animation="fadeInUp" delay={0.3}>
            <div ref={cardRef} className="bg-background/70 backdrop-blur-sm border border-border rounded-lg p-10 max-w-4xl mx-auto mb-16">
              <h3 className="text-2xl font-heading font-black mb-8 text-primary uppercase tracking-wide">
                📞 HIT ME UP & LET&apos;S TALK
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <a 
                  href="mailto:yeshaya@yeshaya.dev?subject=Hasan Piker - Real Site Project"
                  className="group flex flex-col items-center gap-4 p-6 bg-background/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-foreground mb-2">Email</div>
                    <div className="text-muted-foreground text-sm">yeshaya@yeshaya.dev</div>
                  </div>
                </a>

                <a 
                  href="https://instagram.com/yeshaya_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-4 p-6 bg-background/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ExternalLink className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-foreground mb-2">Instagram</div>
                    <div className="text-muted-foreground text-sm">@yeshaya_</div>
                  </div>
                </a>

                <a 
                  href="https://yeshaya.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-4 p-6 bg-background/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Code className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-foreground mb-2">Portfolio</div>
                    <div className="text-muted-foreground text-sm">yeshaya.dev</div>
                  </div>
                </a>
              </div>

              <div className="text-lg text-muted-foreground leading-relaxed">
                Let&apos;s figure out how we can get you a <span className="text-primary font-semibold">dope ass site</span> that matches your energy.
                <br />
                <span className="text-sm opacity-75">This demo is just the beginning.</span>
              </div>
            </div>
          </ScrollTriggerAnimation>

          <ScrollTriggerAnimation animation="fadeInUp" delay={0.6}>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  onClick={() => window.open('mailto:yeshaya@yeshaya.dev?subject=Hasan Piker - Real Site Project', '_blank')}
                  className="text-lg px-12 py-6 flex items-center gap-3 group relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-bold tracking-[0.1em]">START THE CONVERSATION</span>
                </Button>
                
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => window.open('https://yeshaya.dev', '_blank')}
                  className="text-lg px-12 py-6 flex items-center gap-3 group border border-border/50 hover:border-primary/50"
                >
                  <ExternalLink size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-bold tracking-[0.1em]">SEE MORE WORK</span>
                </Button>
              </div>
              
              <div className="text-sm text-muted-foreground/80 italic max-w-3xl mx-auto leading-relaxed pt-8 border-t border-border/30">
                &ldquo;Built this demo with GSAP, Next.js 15, Tailwind, and way too much coffee. 
                Ready to create something even more insane for your actual brand.&rdquo;
                <br />
                <span className="text-xs opacity-60 mt-2 block">— Yeshaya, after surviving 7 hours of Twitch chat research</span>
              </div>
            </div>
          </ScrollTriggerAnimation>
        </div>
      </div>
    </section>
  );
}; 