import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Code, Server, Terminal, Sparkles, Layers, Globe, Smartphone, Cloud, Zap } from 'lucide-react';
import { SectionDnaCanvas } from '../ui/SectionDnaCanvas';

interface TechPillar {
  name: string;
  category: string;
  description: string;
  icon: React.ElementType;
}

const featuredTechStack: TechPillar[] = [
  { name: 'React 19 & Vite', category: 'Frontend', description: 'Next-generation single-page app architecture with instant state rendering.', icon: Globe },
  { name: 'TypeScript', category: 'Language', description: 'End-to-end type safety preventing runtime state defects.', icon: Code },
  { name: 'Python & GenAI', category: 'AI Architecture', description: 'FastAPI backends with Google GenAI SDK model integration.', icon: Cpu },
  { name: 'Java & Spring Boot', category: 'Enterprise', description: 'High-throughput enterprise services & microservice architectures.', icon: Server },
  { name: 'C# & .NET Core', category: 'Enterprise Backend', description: 'Performant cross-platform backend services and API backbones.', icon: Terminal },
  { name: 'Flutter', category: 'Cross-Platform Mobile', description: 'Fluid 60 FPS mobile applications for iOS & Android from one codebase.', icon: Smartphone },
  { name: 'Node.js & Express', category: 'Server Runtime', description: 'Lightweight asynchronous API proxying & serverless functions.', icon: Zap },
  { name: 'AI & Vector Systems', category: 'Intelligent Workflows', description: 'Semantic search, LLM orchestration, and automated agent pipelines.', icon: Sparkles },
  { name: 'Cloud Native & Docker', category: 'Infrastructure', description: 'Serverless Cloud Run, Docker containers, and automated deployment.', icon: Cloud }
];

export const Technology: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'AI Architecture', 'Language', 'Enterprise', 'Cross-Platform Mobile', 'Infrastructure'];

  const filtered = activeCategory === 'All' 
    ? featuredTechStack 
    : featuredTechStack.filter(t => t.category === activeCategory);

  return (
    <section className="py-32 bg-black relative overflow-hidden border-t border-b border-white/5">
      {/* Neon Violet Vertical Helix DNA Ambient Canvas */}
      <SectionDnaCanvas opacity={0.5} variant="vertical-helix" />

      {/* Background Soft Royal Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-white/10 gap-6 mb-12">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-purple-400 uppercase block mb-3 font-semibold">
              Engineering Stack
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white">
              Technology Stack
            </h2>
          </div>
          <p className="text-zinc-400 font-body text-sm sm:text-base max-w-md font-light leading-relaxed">
            Battle-tested, high-throughput technologies selected to guarantee long-term system stability, rapid execution, and seamless maintainability.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(157,78,221,0.5)]'
                  : 'bg-zinc-950 text-zinc-400 border border-white/10 hover:text-white hover:border-purple-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Typography / Cards Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-purple-500/40 transition-all duration-300 sweven-glow-hover flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-purple-400 uppercase tracking-widest px-2.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/20">
                    {tech.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="font-body text-xs text-zinc-400 font-light leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Infinite Tool Marquee Banner */}
      <div className="relative w-full overflow-hidden py-6 bg-zinc-950/90 border-y border-white/10">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
          {[
            'React 19', 'TypeScript', 'Node.js', 'Python', 'Google Cloud', 'Gemini AI',
            'Flutter', 'Tailwind CSS', 'Vite', 'Docker', 'PostgreSQL', 'Figma', 'D3.js', 'FastAPI'
          ].concat([
            'React 19', 'TypeScript', 'Node.js', 'Python', 'Google Cloud', 'Gemini AI',
            'Flutter', 'Tailwind CSS', 'Vite', 'Docker', 'PostgreSQL', 'Figma', 'D3.js', 'FastAPI'
          ]).map((tool, idx) => (
            <div
              key={`${tool}-${idx}`}
              className="px-4 py-2 rounded-xl bg-zinc-900/80 border border-white/10 hover:border-purple-500/50 hover:bg-purple-950/40 text-zinc-400 hover:text-white font-mono text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] shrink-0 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

