"use client";

import React, { useState, useRef, useEffect } from "react";
import { ScrollTriggerAnimation } from "../animations/scroll-trigger";

export const CopiumMeterSection: React.FC = () => {
  const [copiumLevel, setCopiumLevel] = useState(0);
  const logoRef = useRef<HTMLImageElement>(null);
  const isDragging = useRef(false);

  // Create angry logo effect based on copium level
  useEffect(() => {
    if (logoRef.current) {
      const logo = logoRef.current;
      const intensity = copiumLevel / 100;
      
      // Red filter intensity
      logo.style.filter = `
        sepia(${intensity * 100}%) 
        hue-rotate(${intensity * 180}deg) 
        saturate(${1 + intensity * 3}) 
        brightness(${1 + intensity * 0.5})
      `;
      
      // Shaking animation
      if (intensity > 0.1) {
        const shakeIntensity = Math.min(intensity * 10, 8);
        logo.style.animation = `angry-shake 0.1s infinite`;
        logo.style.setProperty('--shake-intensity', `${shakeIntensity}px`);
      } else {
        logo.style.animation = 'none';
      }
    }
  }, [copiumLevel]);

  // Add CSS for shake animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes angry-shake {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(var(--shake-intensity, 2px), calc(var(--shake-intensity, 2px) * -1)) rotate(1deg); }
        50% { transform: translate(calc(var(--shake-intensity, 2px) * -1), var(--shake-intensity, 2px)) rotate(-1deg); }
        75% { transform: translate(var(--shake-intensity, 2px), var(--shake-intensity, 2px)) rotate(1deg); }
      }
      
      .copium-slider::-webkit-slider-thumb {
        appearance: none;
        height: 28px;
        width: 28px;
        border-radius: 50%;
        background: #ef4444;
        border: 4px solid white;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        transition: all 0.2s;
      }
      
      .copium-slider::-webkit-slider-thumb:hover {
        transform: scale(1.2);
        box-shadow: 0 6px 16px rgba(239, 68, 68, 0.5);
      }
      
      .copium-slider::-webkit-slider-thumb:active {
        transform: scale(1.3);
      }
      
      .copium-slider::-moz-range-thumb {
        height: 28px;
        width: 28px;
        border-radius: 50%;
        background: #ef4444;
        border: 4px solid white;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCopiumLevel(parseInt(e.target.value));
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const getCopiumMessage = () => {
    if (copiumLevel < 10) return { text: "Hasan is surprisingly calm today... suspicious.", color: "text-green-400" };
    if (copiumLevel < 25) return { text: "Starting to get a little heated...", color: "text-yellow-400" };
    if (copiumLevel < 40) return { text: "Chat is being insufferable as usual", color: "text-orange-400" };
    if (copiumLevel < 55) return { text: "PAUSE. JUST PAUSE THE STREAM.", color: "text-red-400" };
    if (copiumLevel < 70) return { text: "This is some Valorant Andy shit", color: "text-red-500" };
    if (copiumLevel < 85) return { text: "I WILL END THE STREAM RIGHT NOW", color: "text-red-600" };
    return { text: "MAXIMUM MALD ACHIEVED", color: "text-red-500 font-black animate-pulse" };
  };

  const message = getCopiumMessage();

  return (
    <section id="copium-meter" className="py-20 sm:py-32 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-transparent to-purple-900/5" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-px h-32 bg-primary/20 rotate-45" />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-24 bg-primary/30" />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <ScrollTriggerAnimation animation="fadeInUp" duration={1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-6 uppercase tracking-tight leading-[0.9]">
              <span className="text-primary">COPIUM</span> METER
            </h2>
            <div className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Drag the slider to see how angry Hasan gets when chat starts acting up
            </div>
          </div>
        </ScrollTriggerAnimation>

        {/* Main Copium Meter */}
        <ScrollTriggerAnimation animation="scaleIn" delay={0.3}>
          <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-xl border-2 border-primary/20 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="text-center">
              
              {/* Angry Hasan Logo */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl">
                    <img 
                      ref={logoRef}
                      src="/logo.png" 
                      alt="Angry Hasan" 
                      className="w-full h-full object-cover object-center transition-all duration-100"
                    />
                  </div>
                  

                </div>
              </div>

              {/* Copium Level Display */}
              <div className="mb-8">
                <div className="text-6xl sm:text-7xl md:text-8xl font-black mb-4">
                  <span className="text-primary">{copiumLevel}</span>
                  <span className="text-muted-foreground text-4xl sm:text-5xl md:text-6xl">%</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-foreground">
                  COPIUM LEVEL
                </div>
              </div>

              {/* Slider */}
              <div className="relative mb-8">
                <div className="px-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={copiumLevel}
                    onChange={handleSliderChange}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    className="copium-slider w-full h-6 rounded-full appearance-none cursor-pointer transition-all duration-200"
                    style={{
                      background: `linear-gradient(to right, 
                        #10b981 0%, 
                        #f59e0b ${copiumLevel * 0.5}%, 
                        #ef4444 ${copiumLevel}%, 
                        #7f1d1d 100%)`
                    }}
                  />
                </div>
                
                <div className="flex justify-between text-sm sm:text-base text-muted-foreground mt-4 px-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">CHILL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">HEATED</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">MALDING</span>
                  </div>
                </div>
              </div>

              {/* Status Message */}
              <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8">
                <div className={`text-lg sm:text-xl md:text-2xl font-bold ${message.color} leading-relaxed`}>
                  {message.text}
                </div>
                
                {copiumLevel > 70 && (
                  <div className="mt-4 text-sm sm:text-base text-muted-foreground italic">
                    * Chat has been temporarily disabled for everyone&apos;s safety
                  </div>
                )}
              </div>

              {/* Fun stats based on copium level */}
              {copiumLevel > 30 && (
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                    <div className="text-2xl font-black text-red-400">{Math.floor(copiumLevel * 2.3)}</div>
                    <div className="text-xs text-red-300 uppercase tracking-wide">Mods Banned</div>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
                    <div className="text-2xl font-black text-orange-400">{Math.floor(copiumLevel * 1.7)}</div>
                    <div className="text-xs text-orange-300 uppercase tracking-wide">Pauses/Min</div>
                  </div>
                                     <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                     <div className="text-2xl font-black text-yellow-400">{Math.max(1, Math.floor(120 - copiumLevel * 1.2))}</div>
                     <div className="text-xs text-yellow-300 uppercase tracking-wide">Minutes Left</div>
                   </div>
                </div>
              )}
            </div>
          </div>
        </ScrollTriggerAnimation>

        {/* Bottom quote */}
        <ScrollTriggerAnimation animation="fadeInUp" delay={0.8}>
          <div className="text-center mt-16">
            <div className="text-muted-foreground italic text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              &ldquo;This meter is scientifically calibrated based on years of chat malding data&rdquo;
            </div>
            <div className="text-muted-foreground/60 text-sm mt-2">
              — Copium Research Institute, 2025
            </div>
          </div>
        </ScrollTriggerAnimation>
      </div>
    </section>
  );
}; 