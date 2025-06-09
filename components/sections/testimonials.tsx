"use client";

import React, { useRef, useEffect } from "react";
import { ScrollTriggerAnimation } from "../animations/scroll-trigger";
import { Quote, Star } from "lucide-react";
import { gsap } from "gsap";

export const TestimonialsSection: React.FC = () => {
  const dividerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Donald J. Trump",
      title: "45th & 47th President",
      content: "This is my favorite stream. Hasan makes the best political content, tremendous content. Nobody does leftist takes like Hasan. MAGNIFICENT!",
      rating: 5
    },
    {
        name: "Zionist #8472",
        title: "Hasbara Task Force",
        content: "We sent 14 trolls to disrupt chat. All converted. One now mods.",
        rating: 5
      },
    {
      name: "Grimes",
      title: "Artist & Visionary",
      content: "Why are your biceps so big?",
      rating: 5
    },
    {
      name: "Asmongold",
      title: "Twitch Goblin",
      content: "Every time Hasan bathes, a piece of me dies. The dirt builds character. The oil is sacred. Twitch isn’t ready for this clean freak.",
      rating: 1
    }
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
    <section id="testimonials" className="py-32 bg-background relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-red-900/15 to-blue-900/10 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent" />
        
        {/* Moving gradient blobs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '5s' }} />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-red-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '7s' }} />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '6s' }} />
      </div>

      <div className="container-custom relative z-10">
        <ScrollTriggerAnimation animation="fadeInUp" duration={1}>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 max-w-4xl mx-auto leading-[0.9] uppercase tracking-tight">
              WHAT THE{" "}
              <span className="text-primary">ELITE</span>{" "}
              SAY
            </h2>
                          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Even world leaders can&apos;t resist the Hasan experience
              </p>
          </div>
        </ScrollTriggerAnimation>

        {/* Red laser divider */}
        <ScrollTriggerAnimation animation="fadeInUp" delay={0.2}>
          <div ref={dividerRef} className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-20" />
        </ScrollTriggerAnimation>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollTriggerAnimation 
              key={testimonial.name}
              animation="fadeInUp" 
              delay={0.3 + (index * 0.15)}
            >
              <div className="group relative backdrop-blur-xl bg-background/60 border border-white/10 rounded-2xl p-8 shadow-2xl hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] h-full">
                {/* Glassmorphic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent rounded-2xl" />
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Quote icon */}
                  <div className="flex justify-between items-start mb-6">
                    <Quote size={32} className="text-primary/60 group-hover:text-primary transition-colors" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className="text-yellow-500 fill-current group-hover:scale-110 transition-transform" 
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial content */}
                  <blockquote className="text-lg leading-relaxed text-foreground mb-8 flex-grow italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  {/* Author info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <div>
                      <div className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>

                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                </div>
              </div>
            </ScrollTriggerAnimation>
          ))}
        </div>

        {/* Bottom quote */}
        <ScrollTriggerAnimation animation="fadeInUp" delay={1.0}>
          <div className="mt-20 text-center">
            <div className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
              &ldquo;These testimonials are 100% real and definitely not satirical in any way whatsoever.&rdquo;
            </div>
            <div className="text-xs text-muted-foreground/60 mt-2">
              — Legal Department, Definitely
            </div>
          </div>
        </ScrollTriggerAnimation>
      </div>
    </section>
  );
}; 