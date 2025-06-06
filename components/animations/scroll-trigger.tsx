"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../lib/utils";
import { AnimationProps } from "../../types";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ScrollTriggerAnimation: React.FC<AnimationProps & {
  animation?: "fadeInUp" | "slideInLeft" | "slideInRight" | "scaleIn" | "rotateIn" | "staggerUp" | "magneticHover" | "laserScan" | "counterUp";
  trigger?: string;
  start?: string;
  end?: string;
  stagger?: number;
  countTo?: number;
}> = ({
  children,
  className,
  delay = 0,
  duration = 1,
  animation = "fadeInUp",
  trigger,
  start = "top 80%",
  end = "bottom 20%",
  stagger = 0.1,
  countTo = 0,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animations = {
      fadeInUp: {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
      },
      slideInLeft: {
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
      },
      slideInRight: {
        from: { opacity: 0, x: 100 },
        to: { opacity: 1, x: 0 },
      },
      scaleIn: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
      },
      rotateIn: {
        from: { opacity: 0, rotation: -10 },
        to: { opacity: 1, rotation: 0 },
      },
      staggerUp: {
        from: { opacity: 0, y: 60, rotationX: -90 },
        to: { opacity: 1, y: 0, rotationX: 0 },
      },
      laserScan: {
        from: { scaleX: 0, transformOrigin: "left center" },
        to: { scaleX: 1, transformOrigin: "left center" },
      },
      counterUp: {
        from: { innerText: 0 },
        to: { innerText: countTo },
      },
    };

    // Set initial state based on animation type
    if (animation !== "magneticHover") {
      const animConfig = animations[animation];
      gsap.set(element, animConfig.from);
    }

    if (animation === "staggerUp") {
      const animConfig = animations[animation];
      const children = element.children;
      gsap.fromTo(children, animConfig.from, {
        ...animConfig.to,
        duration,
        stagger,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: trigger || element,
          start,
          end,
          toggleActions: "play none none reverse",
        },
      });
    } else if (animation === "counterUp") {
      gsap.to(element, {
        duration,
        delay,
        ease: "power2.out",
        innerText: countTo,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: trigger || element,
          start,
          end,
          toggleActions: "play none none reverse",
        },
      });
    } else if (animation === "magneticHover") {
      // Magnetic hover effect
      const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(element, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        });
      };

      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    } else {
      // Create scroll trigger animation
      const animConfig = animations[animation];
      gsap.to(element, {
        ...animConfig.to,
        duration,
        delay,
        ease: animation === "laserScan" ? "power4.out" : "power2.out",
        scrollTrigger: {
          trigger: trigger || element,
          start,
          end,
          toggleActions: "play none none reverse",
        },
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay, duration, animation, trigger, start, end, stagger, countTo]);

  return (
    <div ref={elementRef} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}; 