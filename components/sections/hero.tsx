"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { ScrollTriggerAnimation } from "../animations/scroll-trigger";
import { ExternalLink, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const typedElementRef = useRef<HTMLSpanElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);


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

    // Chat message animations
    if (typedElementRef.current) {
      // No longer using typed.js, will use static content with animations
    }

    // Twitch/Hasan themed background animations
    if (backgroundRef.current) {
      const bg = backgroundRef.current;
      
      // Create floating chat bubbles
      const chatMessages = [
        // Political Hasan
        "This is literally capitalism.",
        "Bro, it's class war.",
        "Landlords do not *do* anything.",
        "This country is so cooked.",
        "That's what the CIA wants you to think.",
        "The system is designed this way.",
        "That's not a bug, it's a feature.",
        "Neoliberal brain rot.",
        "We're living in a dystopia.",
        "Nationalize it.",
        
        // Hasan React Energy
        "Pause.",
        "Okay, I'm pausing again.",
        "I'm cooking, shut up.",
        "Let him cook.",
        "This guy is unironically right.",
        "What the fuck is he saying, dude?",
        "This is giving 2016 YouTube atheist vibes.",
        "Ben Shapiro is molding rn.",
        "This dude's a fucking idiot.",
        "Bro just said the quiet part out loud.",
        
        // Signature Self-References
        "I'm a himbo, okay?",
        "I'm the hot socialist.",
        "Chat, I am always right.",
        "This is a react stream, deal with it.",
        "I'm not a debate bro.",
        "I'm not even malding.",
        "I'm built different.",
        "I'm literally Turkish.",
        "My community is better than yours.",
        
        // Twitch / Meta Hasan
        "Mods? Mods??",
        "Mods, ban that guy.",
        "You're being parasocial again.",
        "Chat is actually insufferable today.",
        "Touch grass.",
        "This is why I don't read chat.",
        "We've literally watched this before.",
        "Oh my god, you frogs.",
        "Stop backseating.",
        "I will end the stream.",
        
        // Deep Lore & Recurring Bits
        "Kaiya is asleep.",
        "Time for a top-of-the-hour ad break.",
        "I forgot to run the ad.",
        "This reminds me of the time I was on TYT.",
        "This is some Valorant Andy shit.",
        "I'm not a tankie, shut the fuck up."
      ];
      const chatBubbles: HTMLElement[] = [];
      const isMobile = window.innerWidth < 768;
      const bubbleCount = isMobile ? 8 : 15;
      for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        const message = chatMessages[Math.floor(Math.random() * chatMessages.length)];
        bubble.textContent = message;
        bubble.style.position = 'absolute';
        bubble.style.padding = '8px 12px';
        bubble.style.background = 'rgba(145, 70, 255, 0.04)';
        bubble.style.border = '1px solid rgba(145, 70, 255, 0.15)';
        bubble.style.borderRadius = '8px';
        bubble.style.color = 'rgba(145, 70, 255, 0.4)';
        bubble.style.fontSize = '12px';
        bubble.style.fontWeight = 'bold';
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${Math.random() * 100}%`;
        bubble.style.pointerEvents = 'none';
        bubble.style.willChange = 'transform, opacity';
        
        // Add smooth CSS animation
        const animationDuration = Math.random() * 10 + 15;
        const floatDistance = Math.random() * 30 + 20;
        bubble.style.animation = `float-${i} ${animationDuration}s ease-in-out infinite`;
        
        // Create unique keyframes for each bubble
        const style = document.createElement('style');
        style.textContent = `
          @keyframes float-${i} {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(${floatDistance}px, -${floatDistance/2}px) rotate(${Math.random() * 10 - 5}deg); }
            50% { transform: translate(-${floatDistance/2}px, -${floatDistance}px) rotate(${Math.random() * 10 - 5}deg); }
            75% { transform: translate(-${floatDistance}px, ${floatDistance/2}px) rotate(${Math.random() * 10 - 5}deg); }
          }
        `;
        document.head.appendChild(style);
        
        bg.appendChild(bubble);
        chatBubbles.push(bubble);
      }

      // Create Hasan-themed text elements
      const hasanTerms = ['ANDY', 'EAT THE RICH', 'AMERICA DESERVED', 'RENT FREE', 'SOCIALIST KING', 'HEAD EMPTY'];
      const symbolElements: HTMLElement[] = [];
      const symbolCount = isMobile ? 4 : 8;
      for (let i = 0; i < symbolCount; i++) {
        const symbol = document.createElement('div');
        symbol.textContent = hasanTerms[Math.floor(Math.random() * hasanTerms.length)];
        symbol.style.position = 'absolute';
        symbol.style.fontSize = `${Math.random() * 12 + 14}px`;
        symbol.style.color = `rgba(239, 68, 68, ${Math.random() * 0.2 + 0.1})`;
        symbol.style.fontWeight = 'bold';
        symbol.style.textTransform = 'uppercase';
        symbol.style.left = `${Math.random() * 100}%`;
        symbol.style.top = `${Math.random() * 100}%`;
        symbol.style.pointerEvents = 'none';
        symbol.style.letterSpacing = '0.1em';
        symbol.style.willChange = 'transform, opacity';
        
        // Add smooth CSS animation for symbols
        const animationDuration = Math.random() * 15 + 20;
        const floatDistance = Math.random() * 40 + 30;
        symbol.style.animation = `symbol-float-${i} ${animationDuration}s ease-in-out infinite`;
        
        // Create unique keyframes for each symbol
        const style = document.createElement('style');
        style.textContent = `
          @keyframes symbol-float-${i} {
            0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
            33% { transform: translate(${floatDistance}px, -${floatDistance * 0.7}px) rotate(${Math.random() * 15 - 7.5}deg) scale(1.1); }
            66% { transform: translate(-${floatDistance * 0.8}px, ${floatDistance * 0.5}px) rotate(${Math.random() * 15 - 7.5}deg) scale(0.9); }
          }
        `;
        document.head.appendChild(style);
        
        bg.appendChild(symbol);
        symbolElements.push(symbol);
      }

      // Create Twitch purple particles
      const particles: HTMLElement[] = [];
      const particleCount = isMobile ? 10 : 20;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = `${Math.random() * 4 + 2}px`;
        particle.style.backgroundColor = `rgba(145, 70, 255, ${Math.random() * 0.3 + 0.15})`;
        particle.style.borderRadius = '50%';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.willChange = 'transform, opacity';
        
        // Add smooth CSS animation for particles
        const animationDuration = Math.random() * 8 + 12;
        const floatDistance = Math.random() * 20 + 15;
        particle.style.animation = `particle-float-${i} ${animationDuration}s ease-in-out infinite`;
        
        // Create unique keyframes for each particle
        const style = document.createElement('style');
        style.textContent = `
          @keyframes particle-float-${i} {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
            50% { transform: translate(${floatDistance}px, -${floatDistance}px) scale(1.2); opacity: 1; }
          }
        `;
        document.head.appendChild(style);
        
        bg.appendChild(particle);
        particles.push(particle);
      }

      // Only use GSAP for entrance animations
      chatBubbles.forEach((bubble, index) => {
        gsap.set(bubble, { opacity: 0, scale: 0 });
        gsap.to(bubble, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.7)"
        });
      });

      symbolElements.forEach((symbol, index) => {
        gsap.set(symbol, { opacity: 0, scale: 0 });
        gsap.to(symbol, {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: index * 0.2 + 1,
          ease: "elastic.out(1, 0.5)"
        });
      });

      particles.forEach((particle, index) => {
        gsap.set(particle, { opacity: 0 });
        gsap.to(particle, {
          opacity: 1,
          duration: 0.5,
          delay: index * 0.05 + 2,
          ease: "power2.out"
        });
      });

      // Subtle mouse interaction (optional)
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        
        bg.style.transform = `translate(${x}px, ${y}px)`;
      };

      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }

    return () => {
      // Cleanup handled by GSAP animations
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-900/20 via-black to-red-900/20">
      {/* Twitch/Hasan themed background */}
      <div ref={backgroundRef} className="absolute inset-0 pointer-events-none opacity-90" />
      
      {/* Animated overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-red-500/10 animate-pulse-slow" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tr from-red-500/5 via-transparent to-purple-500/5" />
      
      {/* Content - Mobile First */}
      <div className="relative z-10 container-custom px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl pt-16 sm:pt-20">
          {/* Mobile hero image - appears first on mobile */}
          <div className="lg:hidden w-full flex justify-center mb-4">
            <ScrollTriggerAnimation animation="scaleIn" delay={0.5}>
              <div className="relative w-48 h-60 sm:w-56 sm:h-72 rounded-xl overflow-hidden border-3 border-primary/40 shadow-xl">
                <img 
                  src="/hasan.png" 
                  alt="Hasan Piker" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute top-2 left-2 px-2 py-1 bg-red-500/90 backdrop-blur-sm rounded-full text-white text-xs font-bold uppercase">
                  🔴 LIVE
                </div>
              </div>
            </ScrollTriggerAnimation>
          </div>

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Main headline - mobile optimized */}
            <div ref={titleRef} className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-black leading-[0.9] sm:leading-[0.85] uppercase tracking-[0.05em] sm:tracking-[0.1em] lg:tracking-[0.15em]">
                <div className="word block sm:inline-block sm:mr-2 lg:mr-4 text-foreground mb-1 sm:mb-0">THE</div>
                <div className="word block sm:inline-block sm:mr-2 lg:mr-4 text-primary mb-1 sm:mb-0">OFFICIAL</div>
                <div className="word block sm:inline-block sm:mr-2 lg:mr-4 text-foreground mb-1 sm:mb-0">UNOFFICAL</div>
                <div className="word block sm:inline-block sm:mr-2 lg:mr-4 text-primary mb-1 sm:mb-0">HASAN</div>
                <div className="word block sm:inline-block text-foreground">SITE</div>
              </h1>
            </div>
          
            {/* Mobile-optimized subtitle */}
            <ScrollTriggerAnimation animation="fadeInUp" delay={1.2}>
              <div className="mb-6 space-y-4">
                {/* Tags - mobile optimized */}
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3">
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 font-bold text-xs sm:text-sm uppercase tracking-wide">
                    🔴 LIVE
                  </span>
                  <span className="text-red-400 font-bold text-sm sm:text-base">TURKISH HIMBO</span>
                  <span className="text-muted-foreground hidden sm:inline">•</span>
                  <span className="text-red-400 font-bold text-sm sm:text-base">LANDLORD SLAYER</span>
                  <span className="text-muted-foreground hidden sm:inline">•</span>
                  <span className="text-red-400 font-bold text-sm sm:text-base">BASED KING</span>
                </div>
                
                {/* Main tagline - mobile responsive */}
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight px-2 sm:px-0">
                  Where capitalism goes to die and chat goes to{" "}
                  <span className="text-primary italic">mald</span>
                </div>
              </div>
              
              {/* Info tags - mobile stacked */}
              <div className="mb-6 flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground/80 uppercase tracking-[0.1em] font-medium">
                <span>Political Streamer</span>
                <span className="text-primary">•</span>
                <span className="text-center">Daily at 11AM PT</span>
                <span className="text-primary">•</span>
                <span className="text-center">Probably Yelling Right Now</span>
              </div>
            </ScrollTriggerAnimation>

            {/* Mobile-optimized CTA */}
            <ScrollTriggerAnimation animation="fadeInUp" delay={1.6}>
              <div className="flex flex-col items-center lg:items-start gap-4 mb-16 sm:mb-20">
                <Button
                  size="lg"
                  onClick={() => window.open('https://twitch.tv/hasanabi', '_blank')}
                  className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 flex items-center justify-center gap-3 sm:gap-4 group relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <ExternalLink size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-bold tracking-[0.05em]">ENTER THE STREAM</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                {/* Quote - mobile centered */}
                <div className="text-center lg:text-left max-w-sm lg:max-w-none">
                  <div className="text-xs sm:text-sm text-muted-foreground italic leading-relaxed px-4 sm:px-0">
                  CNN won’t cover this. But your FBI agent is watching.
                  </div>
                </div>
              </div>
            </ScrollTriggerAnimation>
          </div>
          
          {/* Right side - Hasan image */}
          <ScrollTriggerAnimation animation="slideInRight" delay={1.8}>
            <div className="hidden lg:block relative">
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img 
                  src="/hasan.png" 
                  alt="Hasan Piker" 
                  className="w-full h-full object-cover object-center"
                />
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-purple-500/10" />
                
                {/* Floating labels */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-red-500/90 backdrop-blur-sm rounded-full text-white text-sm font-bold uppercase tracking-wide">
                  🔴 HIMBO
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-purple-500/90 backdrop-blur-sm rounded-full text-white text-sm font-bold uppercase tracking-wide">
                  BASED KING
                </div>
              </div>
              
              {/* Decorative elements around image */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-red-500/20 rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-purple-500/20 rounded-full animate-pulse delay-500" />
            </div>
          </ScrollTriggerAnimation>
        </div>
      </div>
    </section>
  );
}; 