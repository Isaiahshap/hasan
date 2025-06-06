"use client";

import React from "react";
import { ScrollTriggerAnimation } from "../animations/scroll-trigger";
import { TOP_CLIPS } from "../../lib/constants";
import { formatNumber } from "../../lib/utils";
import { Play, Eye, Clock } from "lucide-react";

export const TopClipsSection: React.FC = () => {
  return (
    <section id="clips" className="py-24 bg-background">
      <div className="container-custom">
        <ScrollTriggerAnimation animation="fadeInUp" duration={1}>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-center mb-16">
            <span className="text-primary">TOP</span> CLIPS
          </h2>
        </ScrollTriggerAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOP_CLIPS.map((clip, index) => (
            <ScrollTriggerAnimation
              key={index}
              animation="fadeInUp"
              delay={index * 0.1}
              duration={0.8}
            >
              <div className="group cursor-pointer">
                <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden mb-4">
                  {/* Thumbnail placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🤬</div>
                      <p className="text-xs text-muted-foreground">Thumbnail</p>
                    </div>
                  </div>
                  
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {clip.duration}
                  </div>
                  
                  {/* Unhinged indicator */}
                  <div className="absolute top-2 left-2 bg-primary/90 text-white text-xs px-2 py-1 rounded-full font-bold">
                    🤬 UNHINGED
                  </div>
                </div>
                
                {/* Clip info */}
                <div className="space-y-2">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {clip.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{formatNumber(clip.views)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{clip.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollTriggerAnimation>
          ))}
        </div>

        {/* View More */}
        <ScrollTriggerAnimation animation="fadeInUp" delay={0.8}>
          <div className="text-center mt-12">
            <button className="button-secondary inline-flex items-center gap-2 group">
              <span>VIEW MORE CHAOS</span>
              <Play size={16} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </ScrollTriggerAnimation>
      </div>
    </section>
  );
}; 