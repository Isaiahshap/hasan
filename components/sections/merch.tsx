"use client";

import React from "react";
import { ScrollTriggerAnimation } from "../animations/scroll-trigger";
import { MERCH_ITEMS } from "../../lib/constants";
import { Button } from "../ui/button";
import { ShoppingCart, Star } from "lucide-react";

export const MerchSection: React.FC = () => {
  return (
    <section id="merch" className="py-24 bg-secondary/20">
      <div className="container-custom">
        <ScrollTriggerAnimation animation="fadeInUp" duration={1}>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-center mb-8">
            DRIP FOR THE{" "}
            <span className="text-primary">REVOLUTION</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Union-made apparel that pisses off your conservative relatives
          </p>
        </ScrollTriggerAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {MERCH_ITEMS.map((item, index) => (
            <ScrollTriggerAnimation
              key={index}
              animation="scaleIn"
              delay={index * 0.2}
              duration={0.8}
            >
              <div className="group bg-background border border-border rounded-lg overflow-hidden card-hover">
                <div className="aspect-square relative overflow-hidden">
                  {/* Product image placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">👕</div>
                      <p className="text-sm text-muted-foreground">
                        {item.name}
                        <br />
                        <span className="text-xs">Product Image</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="transform scale-90 group-hover:scale-100 transition-transform duration-300"
                    >
                      <ShoppingCart size={16} className="mr-2" />
                      QUICK ADD
                    </Button>
                  </div>
                  
                  {/* Union made badge */}
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    ✊ UNION MADE
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    <span>4.9</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">${item.price}</div>
                    </div>
                  </div>
                  
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full group/btn"
                  >
                    <ShoppingCart size={16} className="mr-2 group-hover/btn:animate-pulse" />
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </ScrollTriggerAnimation>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollTriggerAnimation animation="fadeInUp" delay={0.8}>
          <div className="text-center">
            <div className="bg-background border border-border rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">
                SUPPORT THE CAUSE
              </h3>
              <p className="text-muted-foreground mb-6">
                Every purchase supports progressive causes and pisses off Jeff Bezos
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  <ShoppingCart size={20} className="mr-2 group-hover:animate-bounce" />
                  BUY THE DRIP
                </Button>
                <Button variant="secondary" size="lg">
                  VIEW ALL PRODUCTS
                </Button>
              </div>
              
              {/* Satirical hover text */}
              <div className="mt-6 text-xs text-muted-foreground opacity-70 hover:opacity-100 transition-opacity">
                &quot;BUY MORE. CONSUME.&quot; - Capitalism (probably)
              </div>
            </div>
          </div>
        </ScrollTriggerAnimation>
      </div>
    </section>
  );
}; 