import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { SectionDnaCanvas } from '../ui/SectionDnaCanvas';

interface ProcessPhase {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

const cinematicSteps: ProcessPhase[] = [
  {
    number: '01',
    title: 'DISCOVER',
    tagline: 'Vision & Feasibility Alignment',
    description: 'We unpack your product goals, technical constraints, user expectations, and architectural requirements to map out a clear software blueprint.',
    deliverables: ['Technical Architecture Blueprint', 'Scope & Feasibility Analysis', 'Data Model & API Strategy', 'Project Roadmap & Timeline']
  },
  {
    number: '02',
    title: 'DEFINE',
    tagline: 'Specification & System Design',
    description: 'Translating concepts into concrete engineering specifications, UI component hierarchies, and database schemas before writing a single line of production code.',
    deliverables: ['High-Fidelity Wireframes', 'Component Architecture Plan', 'Database & Schema Specification', 'Interactive Prototype']
  },
  {
    number: '03',
    title: 'DESIGN',
    tagline: 'Futuristic UX & Aesthetic Systems',
    description: 'Crafting editorial, futuristic visual systems with dark glass aesthetics, rich typography, responsive layouts, and fluid micro-interactions.',
    deliverables: ['Tailwind Design Tokens', 'Responsive Mobile & Desktop Views', 'Motion & Transition Library', 'Accessibility & Color Contrast Verification']
  },
  {
    number: '04',
    title: 'BUILD',
    tagline: 'Type-Safe Full-Stack Engineering',
    description: 'Surgical execution using React 19, TypeScript, Express, and GenAI APIs with continuous integration and test-driven code quality.',
    deliverables: ['Clean, Type-Safe Modular Codebase', 'Fast API Middleware & Endpoints', 'Secure Form & State Management', 'Performance & Load Optimization']
  },
  {
    number: '05',
    title: 'LAUNCH',
    tagline: 'Deployment & Continuous Support',
    description: 'Deploying your production system to Cloud Run, Vercel, or custom infrastructure with SSL certificates, monitoring, and ongoing iteration support.',
    deliverables: ['Production Cloud Deployment', 'Domain & SSL Configuration', 'Handover Documentation', 'Ongoing Studio Support']
  }
];

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      {/* Neon Violet Kinetic DNA Wave Background */}
      <SectionDnaCanvas opacity={0.45} />

      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-purple-400 uppercase block mb-3 font-semibold">
              Execution Workflow
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Process
            </h2>
          </div>
          <p className="text-zinc-400 font-body text-sm sm:text-base max-w-md font-light leading-relaxed">
            A 5-stage software engineering lifecycle designed to eliminate risk and accelerate time-to-market.
          </p>
        </div>

        {/* Desktop Timeline Stage Selector */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-12 relative">
          {/* Connecting Glowing Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-zinc-900 -translate-y-1/2 z-0" />
          <div 
            className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400 -translate-y-1/2 transition-all duration-500 z-0 shadow-[0_0_15px_rgba(157,78,221,0.8)]"
            style={{ width: `${((activeStep + 1) / 5) * 100}%` }}
          />

          {cinematicSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            const isPassed = activeStep >= idx;

            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`relative z-10 flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'bg-zinc-950 border border-purple-500/60 shadow-[0_0_30px_rgba(157,78,221,0.35)]' 
                    : isPassed 
                    ? 'bg-zinc-950/80 border border-white/10 text-zinc-300' 
                    : 'bg-zinc-950/40 border border-white/5 text-zinc-600 hover:text-zinc-400'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold mb-3 transition-all duration-300 ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(157,78,221,0.8)]'
                    : isPassed
                    ? 'bg-purple-950 border border-purple-500/40 text-purple-300'
                    : 'bg-zinc-900 text-zinc-600'
                }`}>
                  {step.number}
                </div>
                <span className={`font-heading text-xs font-bold tracking-wider uppercase transition-colors ${isActive ? 'text-white' : 'text-zinc-400'}`}>
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Detailed View */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950/90 border border-purple-500/30 relative overflow-hidden shadow-[0_0_50px_rgba(157,78,221,0.15)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-bold text-purple-400">
                  {cinematicSteps[activeStep].number}
                </span>
                <span className="text-zinc-600">•</span>
                <span className="font-mono text-xs text-purple-300 uppercase tracking-widest">
                  {cinematicSteps[activeStep].tagline}
                </span>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                {cinematicSteps[activeStep].title}
              </h3>

              <p className="text-zinc-300 font-body text-base font-light leading-relaxed">
                {cinematicSteps[activeStep].description}
              </p>

              {/* Navigation buttons */}
              <div className="flex items-center gap-4 pt-4">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className="px-5 py-2.5 rounded-full border border-white/10 text-xs font-mono text-zinc-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-white hover:border-purple-500/30 cursor-pointer"
                >
                  ← Previous
                </button>
                <button
                  disabled={activeStep === cinematicSteps.length - 1}
                  onClick={() => setActiveStep(prev => Math.min(cinematicSteps.length - 1, prev + 1))}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-mono text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(157,78,221,0.4)] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Deliverables Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-white/10">
              <div className="flex items-center gap-2 mb-4 font-mono text-xs text-purple-300 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Phase Deliverables</span>
              </div>

              <div className="space-y-3">
                {cinematicSteps[activeStep].deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950 border border-white/5 text-xs text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

