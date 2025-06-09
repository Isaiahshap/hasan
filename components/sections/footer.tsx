"use client";

import React from "react";
import { DEVELOPER_EMAIL } from "../../lib/constants";

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-secondary/50 border-t border-border">
      <div className="container-custom">
        <div className="text-center space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-heading font-bold text-primary">
              Yo Hasan 👋
            </h3>
            <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
              I made this cuz you need a site dawg. I wanna make your real site.
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Hit me up -{" "}
              <a 
                href="https://www.yeshaya.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-red-400 transition-colors font-medium"
              >
                yeshaya.dev
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              Email:{" "}
              <a 
                href={`mailto:${DEVELOPER_EMAIL}`}
                className="text-primary hover:text-red-400 transition-colors font-medium"
              >
                yeshaya@yeshaya.dev
              </a>
            </p>
          </div>
          
          <div className="pt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground/60">
              © 2025 • Built with leftist rage and TypeScript
            </p>
            <p className="text-xs text-muted-foreground/50 mt-2">
              This is satire. But also a real pitch. Let&apos;s talk.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 