import React from 'react';
import { Logo } from '../ui/Logo';
import { siteConfig } from '../../data/site';
import { Github, Instagram, Linkedin, Mail, ArrowUpRight, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Github,
  Instagram,
  Linkedin,
  Mail
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      {/* Background Subtle Royal Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-purple-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); handleScroll('#hero'); }}
              className="inline-block"
            >
              <Logo size="lg" />
            </a>
            <p className="font-heading text-2xl font-bold text-white tracking-tight">
              Where Visions Become Technology.
            </p>
            <p className="text-zinc-400 font-body text-xs font-light max-w-sm leading-relaxed">
              <strong className="font-brand font-semibold text-purple-300">SWΞVΞN</strong> = dream / vision. <span className="font-brand font-semibold text-zinc-200">SWΞVΞN LABS</span> is an independent software studio building thoughtful digital products, intelligent software systems, and bespoke web platforms.
            </p>

            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Q3 / Q4 2026 Engineering Initiatives</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-[10px] tracking-[0.2em] text-purple-400 uppercase block mb-3 font-semibold">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#hero" onClick={(e) => { e.preventDefault(); handleScroll('#hero'); }} className="text-zinc-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#work" onClick={(e) => { e.preventDefault(); handleScroll('#work'); }} className="text-zinc-400 hover:text-white transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); handleScroll('#services'); }} className="text-zinc-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('#about'); }} className="text-zinc-400 hover:text-white transition-colors">
                  About Studio
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => { e.preventDefault(); handleScroll('#process'); }} className="text-zinc-400 hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('#contact'); }} className="text-zinc-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-mono text-[10px] tracking-[0.2em] text-purple-400 uppercase block mb-3 font-semibold">
              Direct Contact
            </span>
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-purple-300 hover:text-white transition-colors inline-flex items-center gap-2 group cursor-pointer"
            >
              <span>{siteConfig.email}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <div className="pt-4">
              <span className="font-mono text-[10px] text-zinc-500 uppercase block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {siteConfig.socials.map((social) => {
                  const Icon = iconMap[social.iconName] || Mail;

                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-zinc-950 border border-white/10 hover:border-purple-500/50 flex items-center justify-center text-zinc-400 hover:text-purple-300 transition-all cursor-pointer"
                      aria-label={social.platform}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <span>© {currentYear} <span className="font-brand font-semibold text-zinc-300">SWΞVΞN LABS</span>. All rights reserved.</span>
          <span className="text-zinc-600">Pure TypeScript & React 19 Architecture</span>
        </div>
      </div>
    </footer>
  );
};

