"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { ScrollTriggerAnimation } from "../animations/scroll-trigger";
import { ExternalLink, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typed from "typed.js";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const typedElementRef = useRef<HTMLSpanElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [typedInstance, setTypedInstance] = useState<Typed | null>(null);

  useEffect(() => {
    // Stagger animation for title words
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll('.word');
      gsap.fromTo(words, 
        {
          y: 100,
          opacity: 0,
          rotationX: -90,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          delay: 0.5,
        }
      );
    }

    // Professional typed.js animation
    if (typedElementRef.current) {
      const typed = new Typed(typedElementRef.current, {
        strings: [
          "Turkish himbo.",
          "Landlord slayer.",
          "Live daily at 11AM PT (unless he's late).",
          "The Karl Marx of hot takes.",
          "Professional capitalism destroyer.",
          "GQ cover model (probably).",
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true,
      });
      setTypedInstance(typed);
    }

    // Enhanced GSAP background animations
    if (backgroundRef.current) {
      const bg = backgroundRef.current;
      
      // Create floating geometric elements
      const elements: HTMLElement[] = [];
      for (let i = 0; i < 12; i++) {
        const el = document.createElement('div');
        const size = Math.random() * 8 + 3;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.left = `${Math.random() * 100}%`;
        el.style.top = `${Math.random() * 100}%`;
        el.style.position = 'absolute';
        el.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        el.style.backgroundColor = `rgba(239, 68, 68, ${Math.random() * 0.3 + 0.1})`;
        bg.appendChild(el);
        elements.push(el);
      }

      // Create animated lines
      const lines = [];
      for (let i = 0; i < 8; i++) {
        const line = document.createElement('div');
        line.style.position = 'absolute';
        line.style.width = i % 2 === 0 ? '1px' : '2px';
        line.style.height = `${Math.random() * 300 + 150}px`;
        line.style.left = `${Math.random() * 100}%`;
        line.style.top = `${Math.random() * 100}%`;
        line.style.background = `linear-gradient(to bottom, transparent, rgba(239, 68, 68, ${Math.random() * 0.4 + 0.1}), transparent)`;
        line.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
        bg.appendChild(line);
        lines.push(line);
      }

      // Create pulsing particles
      const particles = [];
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.backgroundColor = 'rgba(239, 68, 68, 0.6)';
        particle.style.borderRadius = '50%';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        bg.appendChild(particle);
        particles.push(particle);
      }

      // Animate floating elements
      elements.forEach((el, index) => {
        gsap.set(el, { opacity: 0 });
        gsap.to(el, {
          opacity: Math.random() * 0.6 + 0.2,
          duration: 1,
          delay: index * 0.1,
          ease: "power2.out"
        });

        gsap.to(el, {
          y: `random(-150, 150)`,
          x: `random(-100, 100)`,
          rotation: `random(-180, 180)`,
          duration: `random(15, 25)`,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });

        gsap.to(el, {
          scale: `random(0.5, 1.5)`,
          duration: `random(8, 12)`,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      });

      // Animate lines
      lines.forEach((line, index) => {
        gsap.set(line, { scaleY: 0, opacity: 0 });
        gsap.to(line, {
          scaleY: 1,
          opacity: Math.random() * 0.5 + 0.2,
          duration: 2,
          delay: index * 0.3 + 1,
          ease: "power3.out",
          transformOrigin: "bottom center"
        });

        gsap.to(line, {
          rotation: `+=${Math.random() * 20 - 10}`,
          duration: `random(20, 30)`,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Animate particles
      particles.forEach((particle, index) => {
        gsap.set(particle, { opacity: 0, scale: 0 });
        gsap.to(particle, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: index * 0.05 + 2,
          ease: "back.out(1.7)"
        });

        gsap.to(particle, {
          y: `random(-50, 50)`,
          x: `random(-30, 30)`,
          duration: `random(5, 10)`,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(particle, {
          opacity: `random(0.3, 1)`,
          duration: `random(2, 4)`,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      });

      // Parallax effects
      const allElements = [...elements, ...lines, ...particles];
      gsap.to(allElements, {
        y: "-=100",
        scrollTrigger: {
          trigger: backgroundRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

      // Mouse interaction
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        gsap.to(elements, {
          x: `random(-${x * 0.1}, ${x * 0.1})`,
          y: `random(-${y * 0.1}, ${y * 0.1})`,
          duration: 2,
          ease: "power2.out"
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }

    return () => {
      if (typedInstance) {
        typedInstance.destroy();
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Enhanced GSAP background */}
      <div ref={backgroundRef} className="absolute inset-0 pointer-events-none opacity-80" />
      
      {/* Animated overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-pulse-slow" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      {/* Content - LEFT ALIGNED */}
      <div className="relative z-10 container-custom">
        <div className="max-w-6xl pt-20">
          {/* Main headline with better letter spacing */}
          <div ref={titleRef} className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black leading-[0.85] uppercase tracking-[0.1em] md:tracking-[0.15em]">
              <div className="word inline-block mr-6 text-foreground">Hasan</div>
              <div className="word inline-block text-primary">Piker</div>
            </h1>
          </div>
          
          {/* Professional typed.js subtitle */}
          <ScrollTriggerAnimation animation="fadeInUp" delay={1.2}>
            <div className="mb-6 h-12">
              <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
                <span className="text-primary font-mono">&gt;</span>{" "}
                <span ref={typedElementRef} className="typed-cursor"></span>
              </p>
            </div>
            
            <div className="mb-4 text-base text-muted-foreground/80 uppercase tracking-[0.15em] font-medium">
              Political streamer • Cultural menace • Probably yelling right now
            </div>
          </ScrollTriggerAnimation>

          {/* Enhanced CTA with micro-interactions */}
          <ScrollTriggerAnimation animation="fadeInUp" delay={1.6}>
            <div className="flex flex-col sm:flex-row gap-6 mb-20">
              <Button
                size="lg"
                onClick={() => window.open('https://twitch.tv/hasanabi', '_blank')}
                className="text-lg px-12 py-6 flex items-center gap-4 group relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <ExternalLink size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-bold tracking-[0.05em]">ENTER THE STREAM</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <div className="hidden sm:block self-end pb-2">
                <div className="text-sm text-muted-foreground italic max-w-52 leading-relaxed">
                  &ldquo;Where capitalism goes to die and chat goes to mald.&rdquo;
                </div>
              </div>
            </div>
          </ScrollTriggerAnimation>
        </div>
      </div>
    </section>
  );
}; 