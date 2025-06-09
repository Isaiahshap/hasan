"use client";

import React, { useRef, useEffect, useState } from "react";
import { ScrollTriggerAnimation } from "../animations/scroll-trigger";
import { SOCIAL_LINKS } from "../../lib/constants";
import { Button } from "../ui/button";
import { ExternalLink, Radio, Users, Flame, Zap, Gamepad2 } from "lucide-react";
import { gsap } from "gsap";

// Fake chat messages - moved outside component to avoid re-creation
const chatPool = [
  { username: "socialist_andy", message: "COPIUM OVERDOSE", color: "text-red-400" },
  { username: "landlord_hater", message: "EAT THE RICH", color: "text-green-400" },
  { username: "poggers_viewer", message: "OMEGALUL TRUE", color: "text-blue-400" },
  { username: "malding_chatter", message: "PAUSE THE STREAM", color: "text-yellow-400" },
  { username: "based_leftist", message: "W TAKE HASAN", color: "text-purple-400" },
  { username: "ratio_king", message: "LANDLORDS MALDING", color: "text-pink-400" },
  { username: "chat_spammer", message: "TRUEEEEEE", color: "text-cyan-400" },
  { username: "political_andy", message: "AMERICA DESERVED", color: "text-orange-400" },
  { username: "himbo_enjoyer", message: "BASED KING", color: "text-emerald-400" },
  { username: "react_viewer", message: "REACT HARDER", color: "text-indigo-400" },
  { username: "debate_watcher", message: "DESTROY THEM", color: "text-red-500" },
  { username: "twitch_chatter", message: "KEKW MALDING", color: "text-yellow-500" },
  { username: "hasanabi_fan", message: "GIGACHAD TAKE", color: "text-blue-500" },
  { username: "copium_dealer", message: "WHY DO YOU HATE ISRAEL", color: "text-gray-400" },
  { username: "stream_watcher", message: "5HEAD ANALYSIS", color: "text-purple-500" }
];

export const TwitchLiveSection: React.FC = () => {
  const scheduleRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(0);
  const [chatMessages, setChatMessages] = useState<Array<{id: number, username: string, message: string, color: string}>>([]);

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
    // Animated chat messages
    const addMessage = () => {
      const randomMsg = chatPool[Math.floor(Math.random() * chatPool.length)];
      const newMessage = { ...randomMsg, id: messageIdRef.current++ };
      
      setChatMessages(prev => {
        const updated = [...prev, newMessage];
        // Keep only last 8 messages
        return updated.slice(-8);
      });
    };

    // Start with a few messages
    setTimeout(() => addMessage(), 100);
    setTimeout(() => addMessage(), 500);
    setTimeout(() => addMessage(), 1000);

    // Continue adding messages
    const interval = setInterval(addMessage, 100 + Math.random() * 1000);

    return () => clearInterval(interval);
  }, []);

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

  useEffect(() => {
    // Smooth message transitions
    if (chatRef.current && chatMessages.length > 8) {
      // Remove excess messages for smooth animation
      setChatMessages(prev => prev.slice(-8));
    }
  }, [chatMessages]);

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

          {/* Right: Fake Twitch Chat */}
          <ScrollTriggerAnimation animation="slideInRight" delay={0.5} className="lg:col-span-5">
            <div className="relative">
              <div className="bg-gray-900 border-2 border-primary/20 rounded-lg overflow-hidden relative h-96">
                {/* Full height chat messages */}
                <div 
                  ref={chatRef}
                  className="h-full overflow-y-hidden bg-gray-900 p-4 flex flex-col-reverse"
                  style={{ 
                    scrollBehavior: 'smooth',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  <div className="flex flex-col gap-3">
                    {chatMessages.map((msg, index) => (
                      <div 
                        key={msg.id} 
                        className="flex items-start gap-2 text-sm transform transition-all duration-500 ease-out"
                        style={{
                          transform: `translateY(${(chatMessages.length - 1 - index) * -2}px)`,
                          opacity: Math.max(0.3, 1 - (chatMessages.length - 1 - index) * 0.1)
                        }}
                      >
                        <span className={`font-bold text-sm ${msg.color} flex-shrink-0`}>
                          {msg.username}:
                        </span>
                        <span className="text-white/95 text-sm break-words leading-relaxed">
                          {msg.message}
                        </span>
                      </div>
                    ))}
                    
                    {/* Placeholder messages if chat is empty */}
                    {chatMessages.length === 0 && (
                      <>
                        <div className="flex items-start gap-2 text-sm opacity-50">
                          <span className="font-bold text-sm text-purple-400 flex-shrink-0">
                            welcome_bot:
                          </span>
                          <span className="text-white/70 text-sm">
                            Welcome to Hasan&apos;s chat! Please follow the rules.
                          </span>
                        </div>
                        <div className="flex items-start gap-2 text-sm opacity-30">
                          <span className="font-bold text-sm text-green-400 flex-shrink-0">
                            moderator:
                          </span>
                          <span className="text-white/70 text-sm">
                            Chat is now in slow mode.
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Floating chat info overlay */}
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white/70 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    45,231 viewers
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