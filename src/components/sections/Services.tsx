import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionDnaCanvas } from '../ui/SectionDnaCanvas';
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  Layers, 
  Zap, 
  ArrowUpRight, 
  X, 
  Check 
} from 'lucide-react';

interface ServiceDetail {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  deliverables: string[];
  icon: React.ElementType;
}

const coreServices: ServiceDetail[] = [
  {
    number: '01',
    title: 'Web & Product Development',
    subtitle: 'High-performance web apps & digital platforms',
    description: 'Custom React, Next.js, and TypeScript applications built for extreme speed, search visibility, and flawless user experience.',
    technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    deliverables: ['Custom Single-Page & SSR Applications', 'Design System & Component Library', 'SEO & Performance Optimization', 'API & Integration Pipeline'],
    icon: Globe
  },
  {
    number: '02',
    title: 'Mobile Applications',
    subtitle: 'Native & cross-platform mobile experiences',
    description: 'Sleek, fluid iOS and Android applications crafted with Flutter and React Native. Built for intuitive touch interactions and high frame-rate performance.',
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    deliverables: ['iOS & Android Production Apps', 'App Store & Play Store Submissions', 'Push Notification Infrastructure', 'Offline State Synchronization'],
    icon: Smartphone
  },
  {
    number: '03',
    title: 'AI & Intelligent Systems',
    subtitle: 'GenAI integration & machine learning workflows',
    description: 'Integrating Google Gemini models, custom LLM agents, and automated semantic analysis directly into your business software.',
    technologies: ['Google GenAI SDK', 'Python', 'FastAPI', 'Vector Databases', 'LangChain', 'PyTorch'],
    deliverables: ['Custom LLM Chat & Search Engines', 'Automated Content & Document Processing', 'Predictive Analytics Modules', 'Serverless AI API Middleware'],
    icon: Cpu
  },
  {
    number: '04',
    title: 'SaaS & Digital Products',
    subtitle: 'Scalable subscription platforms & portals',
    description: 'End-to-end multi-tenant software platforms featuring user auth, subscription billing, interactive dashboards, and analytics.',
    technologies: ['Full-Stack Node.js', 'Express', 'Stripe API', 'Auth Systems', 'Drizzle ORM', 'Redis'],
    deliverables: ['Multi-Tenant User Management', 'Automated Stripe Payment Flow', 'Role-Based Access Control (RBAC)', 'Real-Time Analytics Dashboard'],
    icon: Layers
  },
  {
    number: '05',
    title: 'Automation & Custom Software',
    subtitle: 'Internal tools, API pipelines & workflows',
    description: 'Bespoke internal software tools, automated data pipelines, and third-party integrations that eliminate repetitive manual operational bottlenecks.',
    technologies: ['Python Scripts', 'REST & Webhook APIs', 'Docker Containers', 'Cloud Run', 'Google Workspace API'],
    deliverables: ['Custom Operational Dashboards', 'Automated Workflow Integrations', 'Data Extraction & Sync Engines', 'Cloud Infrastructure Deployment'],
    icon: Zap
  }
];

interface ServicesProps {
  onStartProject: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onStartProject }) => {
  const [activeService, setActiveService] = useState<ServiceDetail | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      {/* Neon Violet Kinetic DNA Wave Background */}
      <SectionDnaCanvas opacity={0.45} variant="wave" />

      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-purple-400 uppercase block mb-3 font-semibold">
              Core Capabilities
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Services
            </h2>
          </div>
          <p className="text-zinc-400 font-body text-sm sm:text-base max-w-md font-light leading-relaxed">
            Custom software solutions engineered with surgical precision, clean architecture, and modern aesthetics.
          </p>
        </div>

        {/* Editorial Scroll-Driven Services List */}
        <div className="space-y-4">
          {coreServices.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setActiveService(service)}
                className="group relative rounded-2xl p-6 sm:p-8 bg-zinc-950/80 border border-white/5 hover:border-purple-500/40 transition-all duration-500 cursor-pointer overflow-hidden sweven-glow-hover"
              >
                {/* Active Light Energy Highlight */}
                <div 
                  className={`absolute top-0 right-0 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} 
                />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                  {/* Left Number & Title */}
                  <div className="flex items-start sm:items-center gap-6">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-purple-400/80 group-hover:text-purple-300 transition-colors shrink-0">
                      {service.number}
                    </span>

                    <div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-200 transition-colors flex items-center gap-3">
                        <span>{service.title}</span>
                      </h3>
                      <p className="font-mono text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors mt-1">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right Technologies Pills & Arrow */}
                  <div className="flex items-center justify-between md:justify-end gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-white/5">
                    <div className="hidden lg:flex items-center gap-2">
                      {service.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-[10px] font-mono text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 group-hover:border-purple-400 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center text-purple-400 transition-all duration-300 shrink-0">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Animated Horizontal Accent Line */}
                <div className="mt-6 h-[1px] w-full bg-white/5 relative overflow-hidden">
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-600 transition-transform duration-500 ${
                      isHovered ? 'translate-x-0' : '-translate-x-full'
                    }`} 
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-zinc-950 border border-purple-500/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(157,78,221,0.25)] overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 rounded-xl bg-purple-950/80 border border-purple-500/40 text-purple-300">
                  {React.createElement(activeService.icon, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <span className="font-mono text-xs text-purple-400 tracking-wider">
                    Service {activeService.number}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              <p className="text-zinc-300 font-light text-sm sm:text-base mb-6 leading-relaxed">
                {activeService.description}
              </p>

              <div className="mb-6">
                <h4 className="font-mono text-xs tracking-wider text-purple-300 uppercase mb-3">
                  Scope & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs text-zinc-300 bg-zinc-900/80 p-2.5 rounded-lg border border-white/5">
                      <Check className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-mono text-xs tracking-wider text-purple-300 uppercase mb-3">
                  Technologies Included
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeService.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-md bg-purple-950/50 border border-purple-500/30 text-xs font-mono text-purple-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-4 pt-4 border-t border-white/10">
                <button
                  onClick={() => setActiveService(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-mono text-zinc-400 hover:text-white cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setActiveService(null);
                    onStartProject();
                  }}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-mono text-xs font-semibold hover:shadow-[0_0_25px_rgba(157,78,221,0.5)] transition-all cursor-pointer"
                >
                  Start This Project
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

