import React, { useState, useEffect, useRef } from 'react';
import { Logo } from '../ui/Logo';
import { Menu, X, ArrowUpRight, Sparkles, Compass, Layers, Cpu, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('work');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const isNavigatingRef = useRef(false);

  // Navigation items: Work, Services, About, Contact
  const navLinks = [
    { id: 'work', name: 'Work', href: '#work', icon: Layers },
    { id: 'services', name: 'Services', href: '#services', icon: Cpu },
    { id: 'about', name: 'About', href: '#about', icon: Compass },
    { id: 'contact', name: 'Contact', href: '#contact', icon: Send }
  ];

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 25);

        if (isNavigatingRef.current) return;

        const scrollPosition = window.scrollY + 220;
        for (let i = navLinks.length - 1; i >= 0; i--) {
          const link = navLinks[i];
          const element = document.querySelector(link.href) as HTMLElement;
          if (element && element.offsetTop <= scrollPosition) {
            setActiveTab(link.id);
            break;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleNavClick = (id: string, href: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    isNavigatingRef.current = true;

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 800);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 md:px-8 py-3 sm:py-4 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          
          {/* Left Node: Brand Crest Badge with Neon Violet & Silver Aura */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleNavClick('hero', '#hero'); }}
            className={`group focus:outline-none flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl transition-all duration-300 select-none relative overflow-hidden ${
              isScrolled 
                ? 'bg-zinc-950/90 backdrop-blur-2xl border border-violet-500/30 shadow-[0_10px_30px_rgba(139,92,246,0.3),_0_0_15px_rgba(255,255,255,0.1)]' 
                : 'bg-black/85 backdrop-blur-xl border border-slate-400/20 shadow-[0_4px_25px_rgba(0,0,0,0.8)]'
            }`}
          >
            {/* Ambient Neon Violet + Silver Edge Sheen */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-slate-200/10 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <Logo size="md" />
          </a>

          {/* Center Modular Floating Deck: Neon Violet, Pitch Black & Silver Neon Segment Bar */}
          <nav 
            onMouseLeave={() => setHoveredTab(null)}
            className={`hidden md:flex items-center gap-1.5 p-1.5 rounded-full transition-all duration-300 relative ${
              isScrolled
                ? 'bg-black/95 backdrop-blur-2xl border border-violet-500/60 shadow-[0_20px_50px_rgba(0,0,0,0.98),_0_0_30px_rgba(168,85,247,0.4),_0_0_15px_rgba(226,232,240,0.25)]'
                : 'bg-black/90 backdrop-blur-xl border border-violet-500/40 shadow-[0_10px_35px_rgba(0,0,0,0.9),_0_0_20px_rgba(168,85,247,0.3)]'
            }`}
          >
            {/* Neon Violet & Silver Top Laser Line Accent */}
            <div className="absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-violet-400 to-slate-200 pointer-events-none shadow-[0_0_12px_rgba(168,85,247,0.9)]" />

            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              const isHovered = hoveredTab === link.id;

              return (
                <button
                  key={link.id}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id, link.href);
                  }}
                  onMouseEnter={() => setHoveredTab(link.id)}
                  className="relative px-5 lg:px-6 py-2.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none select-none transition-all duration-200"
                >
                  {/* Active Indicator: Neon Violet + Pitch Black + Silver Neon Ellipse */}
                  {isActive && (
                    <motion.div
                      layoutId="active-cyber-prism"
                      transition={{
                        type: 'spring',
                        stiffness: 450,
                        damping: 32,
                        mass: 0.45
                      }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-950 via-black to-slate-900 border border-violet-400/90 shadow-[0_0_25px_rgba(168,85,247,0.7),_0_0_12px_rgba(226,232,240,0.5),_inset_0_0_15px_rgba(139,92,246,0.5)] z-0 pointer-events-none overflow-hidden"
                    >
                      {/* Top Specular Silver Sheen */}
                      <div className="absolute top-0 inset-x-0 h-1/3 bg-gradient-to-b from-slate-200/30 via-violet-300/10 to-transparent pointer-events-none" />
                      {/* Bottom Glowing Violet Laser Line */}
                      <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-violet-500 via-slate-200 to-fuchsia-500 shadow-[0_0_12px_rgba(168,85,247,1)]" />
                    </motion.div>
                  )}

                  {/* Hover Backdrop Ellipse with Neon Violet Shimmer */}
                  {!isActive && isHovered && (
                    <motion.div
                      layoutId="hover-cyber-pill"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="absolute inset-0 rounded-full bg-violet-950/70 border border-violet-400/50 z-0 pointer-events-none shadow-[0_0_18px_rgba(139,92,246,0.5),_0_0_8px_rgba(226,232,240,0.3)]"
                    />
                  )}

                  {/* Link Name */}
                  <span className={`relative z-10 font-brand font-bold text-[12px] lg:text-[13px] tracking-[0.16em] uppercase transition-all duration-200 ${
                    isActive ? 'text-slate-100 scale-105 font-extrabold drop-shadow-[0_0_10px_rgba(255,255,255,0.95)]' : 'text-zinc-300 hover:text-white'
                  }`}>
                    {link.name}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right Node: Cybernetic Neon Violet + Silver Neon CTA Button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onStartProject}
              className={`relative group/btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-brand font-bold text-[11px] tracking-[0.18em] uppercase overflow-hidden transition-all duration-300 active:scale-95 cursor-pointer ${
                isScrolled
                  ? 'bg-gradient-to-r from-violet-950 via-purple-900 to-slate-900 text-white border border-violet-300 shadow-[0_0_25px_rgba(168,85,247,0.8),_0_0_12px_rgba(226,232,240,0.5)] hover:shadow-[0_0_40px_rgba(168,85,247,1)]'
                  : 'bg-black text-white border border-violet-400 hover:border-slate-200 shadow-[0_0_20px_rgba(139,92,246,0.6),_0_0_10px_rgba(226,232,240,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.9)]'
              }`}
            >
              {/* Neon Violet + Silver Shimmer Sheen */}
              <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(168,85,247,0.6),rgba(255,255,255,0.5),transparent)] -translate-x-full group-hover/btn:animate-[shimmer_1.3s_infinite]" />
              
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-violet-300 group-hover/btn:rotate-12 transition-transform duration-300" />
                <span>Start Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-200 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Navigation Toggle Button: Ellipse Shape */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden relative group/toggle z-50 p-3 rounded-full border transition-all duration-300 overflow-hidden cursor-pointer active:scale-90 ${
              mobileMenuOpen
                ? 'bg-gradient-to-r from-violet-950 via-black to-slate-900 border-violet-400 text-white shadow-[0_0_30px_rgba(168,85,247,1),_0_0_15px_rgba(226,232,240,0.6)] scale-105'
                : 'bg-gradient-to-r from-violet-950 via-black to-slate-950 border-violet-400/80 text-violet-200 hover:text-white shadow-[0_0_22px_rgba(139,92,246,0.7),_0_0_10px_rgba(226,232,240,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.95)]'
            }`}
            aria-label="Toggle navigation menu"
          >
            {/* Ambient Inner Neon Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 via-slate-300/20 to-purple-600/30 opacity-0 group-hover/toggle:opacity-100 transition-opacity pointer-events-none" />
            
            {/* Shimmer Effect */}
            <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(168,85,247,0.6),rgba(255,255,255,0.4),transparent)] -translate-x-full group-hover/toggle:animate-[shimmer_1.2s_infinite]" />

            <div className="relative z-10 flex items-center justify-center">
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-100 font-bold drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]" />
              ) : (
                <Menu className="w-5 h-5 text-slate-100 drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]" />
              )}
            </div>
          </button>

        </div>
      </header>

      {/* Full-Screen Cyber Drawer for Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-zinc-950/98 backdrop-blur-3xl md:hidden flex flex-col justify-between p-6 sm:p-8 pt-24 border-b border-violet-500/20"
          >
            {/* Background Ambient Violet Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-violet-600/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-8 relative z-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] tracking-[0.3em] text-violet-400 uppercase font-bold">
                  SWΞVΞN Navigation
                </span>
                <span className="font-mono text-[10px] text-slate-400">
                  V2.4 // LABS
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const IconComp = link.icon;
                  const isActive = activeTab === link.id;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.id, link.href);
                      }}
                      className={`font-brand text-xl sm:text-2xl font-bold tracking-[0.1em] p-4 rounded-2xl border transition-all flex items-center justify-between group ${
                        isActive 
                          ? 'bg-gradient-to-r from-violet-950 via-purple-900 to-slate-900 border-slate-200 text-white shadow-[0_0_25px_rgba(168,85,247,0.5)]' 
                          : 'bg-zinc-900/50 border-white/5 text-slate-300 hover:text-white hover:border-violet-500/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComp className={`w-5 h-5 ${isActive ? 'text-violet-300' : 'text-slate-500'}`} />
                        <span>{link.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-violet-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-white/10 relative z-10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartProject();
                }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-slate-100 via-white to-slate-200 text-zinc-950 font-brand font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(168,85,247,0.6)] active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-violet-600" />
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-950" />
              </button>

              <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-2">
                <span>Sweven Labs Studio</span>
                <span>swevenlabs.co@gmail.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};






