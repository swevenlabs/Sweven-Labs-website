import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../../data/site';
import { PRAJAIAN_CAFE_DATA_URI } from '../../assets/imagesData';
import { ProjectCaseStudy } from '../../types';
import { ProjectModal } from '../portfolio/ProjectModal';
import { SectionDnaCanvas } from '../ui/SectionDnaCanvas';
import { ArrowUpRight, Sparkles, ExternalLink, Github, Terminal, Activity, Cpu, Play, LayoutList, Layers } from 'lucide-react';

interface PortfolioProps {
  onStartProject: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onStartProject }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'deck'>('list');
  const [hoveredProject, setHoveredProject] = useState<ProjectCaseStudy | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTabMap, setActiveTabMap] = useState<Record<string, 'preview' | 'ast' | 'metrics'>>({});

  // Focus on top 3 editorial projects
  const topProjects = siteConfig.projects.slice(0, 3);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTab = (projectId: string, tab: 'preview' | 'ast' | 'metrics') => {
    setActiveTabMap(prev => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="work" className="py-28 bg-black relative border-t border-white/10 selection:bg-purple-900 overflow-hidden">
      {/* Neon Violet Kinetic DNA Wave Background */}
      <SectionDnaCanvas opacity={0.45} />

      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating Mouse Cursor Media Preview Portal for List View */}
      <AnimatePresence>
        {hoveredProject && viewMode === 'list' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed pointer-events-none z-[9995] hidden lg:block w-[380px] h-[240px] rounded-2xl bg-zinc-950/95 border border-purple-500/50 p-4 shadow-[0_0_50px_rgba(157,78,221,0.4)] backdrop-blur-2xl overflow-hidden"
            style={{
              left: `${mousePos.x + 24}px`,
              top: `${mousePos.y - 120}px`
            }}
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3 text-[10px] font-mono text-purple-300">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span>{hoveredProject.clientType}</span>
              </span>
              <span className="text-emerald-400 font-bold">ACTIVE PREVIEW</span>
            </div>

            <div className="h-[160px] rounded-xl bg-zinc-900 border border-white/10 p-3 flex flex-col justify-between relative overflow-hidden group/portal">
              <img 
                src={hoveredProject.image} 
                alt={hoveredProject.title} 
                className="absolute inset-0 w-full h-full object-cover object-top opacity-90 transition-transform duration-500 group-hover/portal:scale-105" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/prajaian-cafe.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="font-heading text-lg font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  {hoveredProject.title}
                </span>
                <span className="px-2 py-0.5 rounded bg-purple-600 text-white font-mono text-[9px] font-bold">
                  {hoveredProject.year}
                </span>
              </div>

              <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-zinc-300">
                <span className="bg-black/70 px-2 py-0.5 rounded border border-white/10">{hoveredProject.technologies.slice(0, 2).join(' + ')}</span>
                <span className="text-emerald-400 font-bold bg-black/70 px-2 py-0.5 rounded border border-emerald-500/30">prajaianscafe.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header with View Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-purple-400 uppercase block mb-3 font-semibold">
              Featured Case Study & System Architecture
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Shaped & Shipped
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* View Switcher Controls */}
            <div className="flex items-center gap-1 bg-zinc-950 p-1.5 rounded-full border border-white/10">
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs transition-all cursor-pointer ${
                  viewMode === 'list' ? 'bg-purple-600 text-white font-semibold shadow-[0_0_15px_rgba(157,78,221,0.4)]' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <LayoutList className="w-3.5 h-3.5" />
                <span>Editorial List</span>
              </button>
              <button
                onClick={() => setViewMode('deck')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs transition-all cursor-pointer ${
                  viewMode === 'deck' ? 'bg-purple-600 text-white font-semibold shadow-[0_0_15px_rgba(157,78,221,0.4)]' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Deck Stack</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Awwwards Editorial List View */}
        {viewMode === 'list' && (
          <div className="space-y-4 mb-16">
            {topProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                data-cursor-text="EXPLORE"
                className="group relative p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-purple-500/60 transition-all duration-300 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-zinc-900/90 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 flex-1">
                  <span className="font-mono text-2xl sm:text-3xl text-purple-400 font-light group-hover:text-purple-300 transition-colors">
                    0{idx + 1}
                  </span>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                      <span className="text-purple-300 font-semibold">{project.clientType}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-4xl font-bold text-white group-hover:text-purple-200 group-hover:translate-x-2 transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-xs text-zinc-400 font-light max-w-xl line-clamp-2">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Direct Project Image Card Preview */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
                  {project.image && (
                    <div className="relative w-full sm:w-64 h-36 rounded-2xl overflow-hidden border border-purple-500/40 bg-black shadow-[0_0_25px_rgba(157,78,221,0.3)] shrink-0">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = PRAJAIAN_CAFE_DATA_URI;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-2.5">
                        <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1.5 bg-black/85 px-2.5 py-1 rounded-full border border-emerald-500/40">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>prajaianscafe.com</span>
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between sm:justify-center gap-3">
                    <div className="hidden md:flex flex-col gap-1">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span key={tech} className="px-2.5 py-0.5 rounded bg-zinc-900 border border-white/5 font-mono text-[10px] text-zinc-300 text-center">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 group-hover:bg-purple-600 group-hover:border-purple-500 text-zinc-300 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Deck-Stacking Showcase Cards */}
        <div className="space-y-12">
          {topProjects.map((project, idx) => {
            const activeTab = activeTabMap[project.id] || 'preview';

            return (
              <div
                key={project.id}
                className="sticky top-28 z-10 transition-all duration-300"
                style={{ top: `${100 + idx * 20}px` }}
              >
                <div 
                  data-cursor-text="EXPLORE"
                  className="group relative rounded-3xl bg-zinc-950/95 border border-white/15 hover:border-purple-500/50 p-8 sm:p-10 transition-all duration-500 sweven-glow-hover shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Left Info Column */}
                    <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 font-mono text-xs text-purple-400">
                          <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 font-bold">
                            0{idx + 1} / 0{topProjects.length}
                          </span>
                          <span className="text-zinc-600">•</span>
                          <span className="text-zinc-300 font-semibold">{project.clientType}</span>
                          <span className="text-zinc-600">•</span>
                          <span className="text-zinc-500">{project.year}</span>
                        </div>

                        <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white group-hover:text-purple-200 transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-zinc-300 font-light text-sm sm:text-base leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      {/* Deliverables & Stack */}
                      <div className="space-y-4 pt-4 border-t border-white/10">
                        <span className="font-mono text-[11px] text-purple-400 uppercase tracking-wider block font-semibold">
                          Core Architecture & Impact
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.impact.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-[11px] font-mono text-purple-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="pt-4 flex flex-wrap items-center gap-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-semibold uppercase tracking-wider shadow-[0_0_20px_rgba(157,78,221,0.5)] transition-all cursor-pointer"
                          >
                            <span>Launch Product</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-purple-500/40 text-zinc-300 hover:text-white font-mono text-xs transition-colors cursor-pointer"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Repository</span>
                          </a>
                        )}

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors cursor-pointer py-2"
                        >
                          <span>Full Case Study</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Right Interactive Simulated Product Viewport */}
                    <div className="lg:col-span-6 rounded-2xl bg-zinc-900/90 border border-white/10 overflow-hidden flex flex-col justify-between shadow-2xl relative min-h-[320px] sm:min-h-[380px]">
                      {/* Window Top Controls */}
                      <div className="px-4 py-3 bg-zinc-950/90 border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                          <span className="font-mono text-[10px] text-zinc-500 ml-2 truncate">
                            {project.title.toLowerCase().replace(/\s+/g, '-')}.app/v2
                          </span>
                        </div>

                        {/* Viewport Mode Switcher */}
                        <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-lg border border-white/5">
                          <button
                            onClick={() => toggleTab(project.id, 'preview')}
                            className={`px-2.5 py-1 rounded text-[10px] font-mono transition-colors cursor-pointer ${
                              activeTab === 'preview' ? 'bg-purple-600 text-white' : 'text-zinc-400 hover:text-white'
                            }`}
                          >
                            Demo
                          </button>
                          <button
                            onClick={() => toggleTab(project.id, 'ast')}
                            className={`px-2.5 py-1 rounded text-[10px] font-mono transition-colors cursor-pointer ${
                              activeTab === 'ast' ? 'bg-purple-600 text-white' : 'text-zinc-400 hover:text-white'
                            }`}
                          >
                            AST
                          </button>
                          <button
                            onClick={() => toggleTab(project.id, 'metrics')}
                            className={`px-2.5 py-1 rounded text-[10px] font-mono transition-colors cursor-pointer ${
                              activeTab === 'metrics' ? 'bg-purple-600 text-white' : 'text-zinc-400 hover:text-white'
                            }`}
                          >
                            Metrics
                          </button>
                        </div>
                      </div>

                      {/* Interactive Viewport Canvas */}
                      <div className="p-6 flex-1 flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-zinc-950 to-zinc-900">
                        {activeTab === 'preview' && (
                          <div className="space-y-3 animate-fade-in">
                            <div className="relative rounded-xl overflow-hidden group/img border border-purple-500/30 aspect-video bg-black shadow-[0_0_25px_rgba(157,78,221,0.2)]">
                              <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = PRAJAIAN_CAFE_DATA_URI;
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3.5">
                                <div className="flex items-center justify-between w-full font-mono text-xs">
                                  <span className="text-white font-bold flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    prajaianscafe.com
                                  </span>
                                  {project.liveUrl && (
                                    <a 
                                      href={project.liveUrl} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="px-3 py-1 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-mono text-[10px] uppercase font-bold flex items-center gap-1 shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all cursor-pointer"
                                    >
                                      <span>Visit Cafe</span>
                                      <ExternalLink className="w-3 h-3" />
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                              <div className="p-2.5 rounded-xl bg-zinc-950 border border-white/5">
                                <span className="text-[9px] text-zinc-500 block uppercase">DEPLOYMENT</span>
                                <span className="font-bold text-white text-xs">Vercel + Railway</span>
                              </div>
                              <div className="p-2.5 rounded-xl bg-zinc-950 border border-white/5">
                                <span className="text-[9px] text-zinc-500 block uppercase">MEDIA ENGINE</span>
                                <span className="font-bold text-purple-300 text-xs">Cloudinary Dynamic</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeTab === 'ast' && (
                          <div className="p-4 rounded-xl bg-black border border-purple-500/20 font-mono text-xs text-purple-300 space-y-1.5 overflow-x-auto leading-relaxed">
                            <div className="text-zinc-500">// System AST Graph Node</div>
                            <div><span className="text-purple-400">const</span> pipeline = <span className="text-indigo-300">new</span> SwevenPipeline(&#123;</div>
                            <div className="pl-4">engine: <span className="text-emerald-300">'GenAI-Vector-V2'</span>,</div>
                            <div className="pl-4">typeSafety: <span className="text-amber-300">true</span>,</div>
                            <div className="pl-4">streamLatency: <span className="text-purple-300">'&lt;25ms'</span></div>
                            <div>&#125;);</div>
                            <div className="text-emerald-400 pt-1">// Handshake verified OK</div>
                          </div>
                        )}

                        {activeTab === 'metrics' && (
                          <div className="space-y-3 font-mono text-xs text-zinc-300">
                            <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-white/5">
                              <span className="flex items-center gap-2">
                                <Activity className="w-4 h-4 text-purple-400" /> API Latency
                              </span>
                              <span className="text-emerald-400 font-bold">18ms avg</span>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-white/5">
                              <span className="flex items-center gap-2">
                                <Cpu className="w-4 h-4 text-purple-400" /> CPU Allocation
                              </span>
                              <span className="text-purple-300 font-bold">12% Peak</span>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-white/5">
                              <span className="flex items-center gap-2">
                                <Terminal className="w-4 h-4 text-purple-400" /> Security Audit
                              </span>
                              <span className="text-emerald-400 font-bold">PASS 100/100</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Viewport Footer */}
                      <div className="px-4 py-2.5 bg-zinc-950 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                        <span>SWEVEN-SIMULATOR v2.6</span>
                        <span className="text-purple-400 cursor-pointer hover:underline" onClick={() => setSelectedProject(project)}>
                          Click to expand case study →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Confidential Build Banner */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-zinc-950/90 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(157,78,221,0.15)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading text-xl font-bold text-white">Need a confidential custom build?</h4>
              <p className="text-zinc-400 font-light text-xs sm:text-sm">We execute custom NDA software for stealth startups & enterprise products.</p>
            </div>
          </div>
          <button
            onClick={onStartProject}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-[0_0_30px_rgba(157,78,221,0.6)] text-white font-mono text-xs font-semibold uppercase tracking-wider shrink-0 transition-all cursor-pointer"
          >
            Request NDA Build
          </button>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={onStartProject}
      />
    </section>
  );
};


