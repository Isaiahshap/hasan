"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { SOCIAL_LINKS } from "../../lib/constants";

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
    { href: "#copium-meter", label: "COPIUM METER" },
    { href: "#about", label: "WHO HE IS" },
    { href: "#stream", label: "LIVE RAGE" },
    { href: "#testimonials", label: "TESTIMONIALS" },
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
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30 group-hover:scale-110 group-hover:border-primary/60 transition-all duration-300">
                <img 
                  src="/logo.png" 
                  alt="Hasan Piker" 
                  className="w-full h-full object-cover object-center"
                />
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
                  className="group relative text-sm font-heading font-bold text-white hover:text-primary transition-all duration-300 tracking-[0.1em] uppercase"
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
              className="group relative flex items-center gap-3 px-4 py-2 bg-purple-600/20 backdrop-blur-sm border border-purple-600/30 rounded-full hover:bg-purple-600/30 hover:border-purple-600/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-6 h-6 bg-purple-600/40 rounded-full flex items-center justify-center group-hover:bg-purple-600/60 transition-colors">
                <ExternalLink size={14} className="text-white group-hover:rotate-12 transition-transform" />
              </div>
              <span className="text-sm font-heading font-bold tracking-wider uppercase text-white">LIVE</span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </a>
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
          <>
            {/* Black Overlay */}
            <div 
              className="md:hidden fixed z-[9999]"
              style={{ 
                backgroundColor: '#000000',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 9999
              }}
            >
              {/* Menu Content */}
              <div className="flex flex-col h-full w-full" style={{ backgroundColor: '#000000' }}>
                {/* Mobile Header */}
                <div className="px-6 py-5 border-b border-primary/40" style={{ backgroundColor: '#000000' }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30">
                        <img 
                          src="/logo.png" 
                          alt="Hasan Piker" 
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="text-2xl font-heading font-black text-white tracking-[0.15em] uppercase">
                        HASAN
                      </div>
                    </div>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:text-primary transition-colors p-2"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>
                
                {/* Navigation Links */}
                <div className="flex-1 px-6 py-8 space-y-2" style={{ backgroundColor: '#000000' }}>
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group block py-6 px-4 text-2xl font-heading font-black text-white hover:text-primary transition-all duration-300 tracking-wide uppercase rounded-xl hover:bg-primary/10 border border-transparent hover:border-primary/30"
                    >
                      <div className="flex items-center justify-between">
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          {link.label}
                        </span>
                        <div className="w-0 h-1 bg-primary group-hover:w-8 transition-all duration-300 rounded-full" />
                      </div>
                    </a>
                  ))}
                </div>
                
                {/* Bottom Actions */}
                <div className="px-6 py-8 border-t border-primary/40" style={{ backgroundColor: '#000000' }}>
                  <a
                    href={SOCIAL_LINKS.twitch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-4 bg-purple-600/20 border border-purple-600/30 rounded-2xl hover:bg-purple-600/30 hover:border-purple-600/50 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-purple-600/30 rounded-full flex items-center justify-center group-hover:bg-purple-600/50 transition-colors group-hover:scale-110">
                        <ExternalLink size={24} className="text-white group-hover:rotate-12 transition-transform" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xl font-heading font-bold tracking-wider uppercase text-white">WATCH LIVE</div>
                        <div className="text-sm text-purple-200">On Twitch</div>
                      </div>
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}; 