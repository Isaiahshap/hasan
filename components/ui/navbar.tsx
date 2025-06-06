"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./button";
import { Menu, X, ExternalLink, Flame } from "lucide-react";
import { SOCIAL_LINKS, DEVELOPER_EMAIL } from "../../lib/constants";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "WHO HE IS" },
    { href: "#stream", label: "LIVE RAGE" },
    { href: "#press", label: "MEDIA CHAOS" },
    { href: "#contact", label: "HIRE ME" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/98 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5" 
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="group flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Flame className="text-background" size={20} />
              </div>
              <div className="text-2xl font-heading font-black text-foreground tracking-[0.15em] uppercase group-hover:text-primary transition-colors duration-300">
                HASAN
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative text-sm font-heading font-bold text-muted-foreground hover:text-foreground transition-all duration-300 tracking-[0.1em] uppercase"
                >
                  {link.label}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href={SOCIAL_LINKS.twitch}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center group-hover:bg-purple-600/40 transition-colors">
                <ExternalLink size={14} className="group-hover:rotate-12 transition-transform" />
              </div>
              <span className="text-xs font-medium tracking-wider uppercase">LIVE</span>
            </a>
            <Button
              size="sm"
              onClick={() => window.open(`mailto:${DEVELOPER_EMAIL}`, '_blank')}
              className="px-6 py-3 font-bold tracking-wide uppercase text-xs hover:scale-105 transition-all duration-300"
            >
              BUILD WITH ME
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-4 bg-background/98 backdrop-blur-xl border-t border-primary/20">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-foreground hover:text-primary transition-colors duration-200 font-heading font-bold tracking-wide uppercase border-l-2 border-transparent hover:border-primary"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-4">
                <Button
                  size="sm"
                  onClick={() => window.open(`mailto:${DEVELOPER_EMAIL}`, '_blank')}
                  className="w-full font-bold tracking-wide uppercase"
                >
                  BUILD WITH ME
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 