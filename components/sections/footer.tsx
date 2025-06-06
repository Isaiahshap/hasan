"use client";

import React from "react";
import { DEVELOPER_EMAIL } from "../../lib/constants";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-secondary/50 border-t border-border">
      <div className="container-custom">
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Site concept & build by{" "}
            <a 
              href={`mailto:${DEVELOPER_EMAIL}`}
              className="text-primary hover:text-red-400 transition-colors font-medium"
            >
              yeshaya.dev
            </a>
          </p>
          
          <p className="text-xs text-muted-foreground opacity-70">
            This is a satire project. But also a real pitch. Let&apos;s talk.
          </p>
          
          <div className="pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground/60">
              © 2025 • Built with rage and TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 