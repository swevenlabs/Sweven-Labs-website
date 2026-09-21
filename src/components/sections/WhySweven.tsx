import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../../data/site';
import { ShieldCheck, MessageSquare, Cpu, TrendingUp, Compass } from 'lucide-react';
import { SectionDnaCanvas } from '../ui/SectionDnaCanvas';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  MessageSquare,
  Cpu,
  TrendingUp,
  Compass
};

export const WhySweven: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/10">
      {/* Neon Violet Kinetic DNA Wave Background */}
      <SectionDnaCanvas opacity={0.45} />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-purple-400 uppercase block mb-3 font-semibold">
            Core Principles
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Engineered For Impact
          </h2>
          <p className="text-zinc-400 font-body text-sm sm:text-base font-light leading-relaxed">
            Why founders, stealth teams, and businesses choose Sweven Labs as their technology partner.
          </p>
        </div>

        {/* Oversized Numbered Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pb-16 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-zinc-950/90 border border-white/10 hover:border-purple-500/40 transition-all sweven-glow-hover"
          >
            <span className="font-heading text-6xl sm:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-600 block mb-2 select-none">
              01
            </span>
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              Stay Ahead of Competitors
            </h3>
            <p className="text-zinc-400 font-body text-xs sm:text-sm font-light leading-relaxed">
              De-risk software execution with AI-accelerated workflows and precision architecture built for market speed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-zinc-950/90 border border-white/10 hover:border-purple-500/40 transition-all sweven-glow-hover"
          >
            <span className="font-heading text-6xl sm:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-600 block mb-2 select-none">
              02
            </span>
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              Direct Founder Access
            </h3>
            <p className="text-zinc-400 font-body text-xs sm:text-sm font-light leading-relaxed">
              No account manager noise or bloated bureaucracy. You interface directly with senior engineers every single day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-zinc-950/90 border border-white/10 hover:border-purple-500/40 transition-all sweven-glow-hover"
          >
            <span className="font-heading text-6xl sm:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-600 block mb-2 select-none">
              03
            </span>
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              Build Systems That Scale
            </h3>
            <p className="text-zinc-400 font-body text-xs sm:text-sm font-light leading-relaxed">
              Production-ready code bases with end-to-end type safety, automated CI/CD, and long-term maintainability.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {siteConfig.pillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.iconName] || ShieldCheck;
            const isShifted = idx % 2 === 1;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-purple-500/40 hover:bg-zinc-900/90 transition-all duration-300 flex flex-col justify-between h-full sweven-glow-hover ${
                  isShifted ? 'lg:translate-y-4' : ''
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="font-mono text-[11px] text-purple-400 mb-3">
                    {pillar.tagline}
                  </p>
                  <p className="text-zinc-400 font-light text-xs leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
