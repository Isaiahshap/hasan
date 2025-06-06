"use client";

import React from "react";
import { cn } from "../../lib/utils";
import { GlitchTextProps } from "../../types";

export const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className,
  intensity = "medium",
}) => {
  const intensityClasses = {
    low: "animate-pulse",
    medium: "glitch-text",
    high: "glitch-text animate-glitch",
  };

  return (
    <span
      className={cn(
        "relative inline-block font-heading font-bold text-shadow-glow",
        intensityClasses[intensity],
        className
      )}
      data-text={text}
    >
      {text}
    </span>
  );
}; 