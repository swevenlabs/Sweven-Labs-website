import React from 'react';
import { motion } from 'motion/react';
import { Compass, Terminal, Shield, Zap, Sparkles } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { SectionDnaCanvas } from '../ui/SectionDnaCanvas';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      {/* Neon Violet Kinetic DNA Wave Background */}
      <SectionDnaCanvas opacity={0.45} />
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <span className="font-mono text-xs tracking-[0.25em] text-purple-400 uppercase block mb-3 font-semibold">
            Studio Ethos
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl">
            Built for What Comes Next.
          </h2>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Main Brand Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 font-mono text-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-brand font-semibold">SWΞVΞN = Dream / Vision</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-purple-200 leading-snug">
              <span className="font-brand font-bold text-white">SWΞVΞN LABS</span> is an independent software studio focused on turning ambitious ideas into thoughtful digital products and intelligent technology.
            </h3>

            <p className="text-zinc-300 font-body text-base md:text-lg font-light leading-relaxed">
              We operate on a simple core principle: code should be engineered with surgical precision, deep respect for typography, and uncompromising performance.
            </p>

            <p className="text-zinc-400 font-body text-sm md:text-base font-light leading-relaxed">
              Without corporate bloat or account manager overhead, we collaborate directly with founders, innovators, and engineering teams to craft bespoke web applications, mobile platforms, and AI systems.
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center gap-4 text-xs font-mono text-purple-400 font-semibold">
              <span>SMALL BY DESIGN</span>
              <span className="text-zinc-600">•</span>
              <span>ENGINEERED TO SCALE</span>
            </div>
          </div>

          {/* Visual Studio Emblem Block */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-zinc-950/90 border border-purple-500/30 relative overflow-hidden flex flex-col justify-between h-96 shadow-[0_0_50px_rgba(157,78,221,0.15)]">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between relative z-10">
              <Logo size="md" />
              <span className="font-mono text-xs text-zinc-500">EST. 2026</span>
            </div>

            <div className="my-auto text-center relative z-10 py-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-[0_0_30px_rgba(157,78,221,0.4)] mb-4 p-1">
                <Logo size="lg" />
              </div>
              <p className="font-heading text-xl font-bold text-white">Where Visions Become Technology</p>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-4 border-t border-white/10 relative z-10">
              <span>Independent Studio</span>
              <span className="text-purple-400">Pure TypeScript Architecture</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Sweven */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-purple-500/40 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-heading text-lg font-bold text-white mb-1">Direct Engineering</h4>
            <p className="font-body text-xs text-zinc-400 leading-relaxed">
              Direct access to the engineers crafting your product. No middle layers.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-purple-500/40 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h4 className="font-heading text-lg font-bold text-white mb-1">Modern Stack</h4>
            <p className="font-body text-xs text-zinc-400 leading-relaxed">
              Type-safe React 19, TypeScript, Python GenAI, and cloud native services.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-purple-500/40 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-heading text-lg font-bold text-white mb-1">Honest & Direct</h4>
            <p className="font-body text-xs text-zinc-400 leading-relaxed">
              Transparent timelines, clear deliverables, and zero fluff.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-purple-500/40 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="font-heading text-lg font-bold text-white mb-1">Agile Execution</h4>
            <p className="font-body text-xs text-zinc-400 leading-relaxed">
              Rapid iteration cycles to move from prototype to production quickly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

