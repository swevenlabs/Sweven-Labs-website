import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Play, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { InteractiveHeroCanvas } from '../ui/InteractiveHeroCanvas';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreWork }) => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoUrl = "https://drive.google.com/file/d/1t1lDH9BB4tOqK06Rf6YXXmaQTMtG2kHs/preview";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-black flex flex-col justify-between pt-32 pb-12 overflow-hidden selection:bg-purple-900 selection:text-purple-100">
      {/* Interactive Background Energy Canvas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Dynamic Physics Particle Mesh Canvas */}
        <InteractiveHeroCanvas />

        {/* Dynamic Mouse Spotlight Light Source */}
        <div 
          className="absolute w-[900px] h-[900px] rounded-full blur-[180px] opacity-25 transition-transform duration-700 ease-out pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(157,78,221,0.55) 0%, rgba(79,70,229,0.2) 50%, transparent 80%)',
            left: `${mousePos.x * 100}%`,
            top: `${mousePos.y * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />

        {/* Ambient Royal Glow Layers */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-950/20 rounded-full blur-[160px] animate-aurora" />

        {/* Fine Architectural Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Background Watermark Emblem */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <Logo size="watermark" showText={false} />
        </div>
      </div>

      {/* Center Kinetic Headline Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 my-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          {/* Subtitle Badge - FUTURE IN MOTION */}
          <div className="flex flex-wrap items-center gap-3">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-950 border border-purple-500/30 text-xs font-mono text-purple-300 shadow-[0_0_20px_rgba(157,78,221,0.25)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span className="font-brand font-semibold tracking-[0.2em] uppercase">SWΞVΞN LABS • FUTURE IN MOTION</span>
            </motion.div>
          </div>

          {/* Line 1 - Solid Bold */}
          <div className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] uppercase">
            WE ENGINEER
          </div>

          {/* Line 2 - Outlined Kinetic Typography with Stylized Badge */}
          <div className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-stroke text-transparent leading-[1.08] uppercase flex flex-wrap items-center gap-2 sm:gap-4">
            <span>INTELLIGENT</span>
            <span className="text-xl sm:text-3xl md:text-4xl font-light text-purple-300 not-italic font-mono px-3 py-1 rounded-xl bg-purple-950/50 border border-purple-500/40 shadow-[0_0_25px_rgba(157,78,221,0.3)]">
              [SOFTWARE]
            </span>
          </div>

          {/* Line 3 - Gradient Glow Statement */}
          <div className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-500 leading-[1.08] uppercase drop-shadow-[0_0_30px_rgba(157,78,221,0.4)]">
            FOR WHAT COMES NEXT.
          </div>
        </motion.div>

        {/* Subtitle & Action Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-8 border-t border-white/10">
          <p className="lg:col-span-7 text-sm sm:text-base md:text-lg text-zinc-300 font-body font-light leading-relaxed">
            Sweven Labs is an independent software studio. We partner directly with founders and forward-thinking teams to design, architect, and ship high-throughput web platforms, mobile products, and bespoke AI systems.
          </p>

          <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
            <button
              onClick={onStartProject}
              data-cursor-text="INITIATE"
              className="px-7 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all shadow-[0_0_30px_rgba(157,78,221,0.5)] flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Initiate Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreWork}
              className="px-6 py-4 rounded-full bg-zinc-950 border border-white/10 hover:border-purple-500/40 text-zinc-300 hover:text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer text-center hover:bg-zinc-900 active:scale-95"
            >
              Explore Case Study
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Kinetic Marquee Ticker */}
      <div className="w-full relative z-10 overflow-hidden py-4 border-t border-white/10 bg-zinc-950/90">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap font-mono text-xs text-purple-300 tracking-[0.25em] uppercase">
          <span className="flex items-center gap-2 text-white font-bold"><Sparkles className="w-3.5 h-3.5 text-purple-400" /> CREATIVE ENGINEERING</span>
          <span>•</span>
          <span>AI & VECTOR ARCHITECTURE</span>
          <span>•</span>
          <span className="text-white font-bold">FULL-STACK PERFORMANCE</span>
          <span>•</span>
          <span>BESPOKE DASHBOARDS</span>
          <span>•</span>
          <span className="flex items-center gap-2 text-white font-bold"><Sparkles className="w-3.5 h-3.5 text-purple-400" /> CREATIVE ENGINEERING</span>
          <span>•</span>
          <span>AI & VECTOR ARCHITECTURE</span>
          <span>•</span>
          <span className="text-white font-bold">FULL-STACK PERFORMANCE</span>
          <span>•</span>
          <span>BESPOKE DASHBOARDS</span>
        </div>
      </div>
    </section>
  );
};


