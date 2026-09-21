import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectCaseStudy } from '../../types';
import { PRAJAIAN_CAFE_DATA_URI } from '../../assets/imagesData';
import { X, ExternalLink, ShieldCheck, CheckCircle2, FileText, ArrowRight, Upload, Database, BarChart3, Clock, AlertTriangle, Layers, Cpu, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onStartProject }) => {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);

  if (!project) return null;

  const workflowSteps = [
    {
      step: '01',
      title: 'Sales Report Upload',
      subtitle: 'Daily PDF Ingestion',
      description: 'The management team uploads daily PDF sales records directly through the administrative dashboard.',
      icon: Upload,
      previewTitle: 'Sales_Report_Daily.pdf',
      previewDetails: ['Ingested: 240 Receipts', 'Format: Multi-Page PDF', 'Validation: OK']
    },
    {
      step: '02',
      title: 'Data Processing',
      subtitle: 'Parser & Calculation Engine',
      description: 'The backend service parses line items, calculates tax, extracts item quantities, and maps data to MongoDB.',
      icon: Cpu,
      previewTitle: 'Processing Pipeline Node',
      previewDetails: ['Item Mapping: 100%', 'Tax Split: Calculated', 'Data Sanitization: Pass']
    },
    {
      step: '03',
      title: 'Stock & Expiry Sync',
      subtitle: 'Automated Deduction',
      description: 'Ingredient quantities are deducted from active inventory, and items nearing expiration trigger immediate alerts.',
      icon: Database,
      previewTitle: 'Inventory Stock Engine',
      previewDetails: ['Ingredients Deducted: 48 items', 'Expiry Alert: 2 items near date', 'Stock Status: Healthy']
    },
    {
      step: '04',
      title: 'Bill & Report Generation',
      subtitle: 'Financial Statements',
      description: 'Detailed billing summaries and daily profit & loss reports are generated automatically for management review.',
      icon: FileText,
      previewTitle: 'Generated Financial Summary',
      previewDetails: ['Bill Summary: Ready', 'P&L Calculation: Complete', 'PDF Export: Available']
    },
    {
      step: '05',
      title: 'Statistics & Insights',
      subtitle: 'Real-Time Analytics',
      description: 'Interactive statistics and business trend graphs update live, providing clear operational clarity.',
      icon: BarChart3,
      previewTitle: 'Executive Analytics View',
      previewDetails: ['Sales Trend: Real-Time', 'Best Sellers: Identified', 'Margin Breakdown: Active']
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-zinc-950 border border-purple-500/40 rounded-3xl p-6 sm:p-10 shadow-[0_0_80px_rgba(157,78,221,0.25)] my-8 max-h-[92vh] overflow-y-auto sweven-glass"
        >
          {/* Top Neon Laser Sheen */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-400 to-indigo-500 rounded-t-3xl" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-purple-500/40 transition-all cursor-pointer z-20"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 font-mono text-[11px] font-bold uppercase tracking-wider">
              {project.clientType}
            </span>
            <span className="text-xs font-mono text-zinc-400">
              {project.category} • {project.year}
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            {project.title}
          </h2>

          {/* Hero Project Image Showcase */}
          {project.image && (
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 mb-10 aspect-video bg-black shadow-[0_0_40px_rgba(157,78,221,0.2)] group">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = PRAJAIAN_CAFE_DATA_URI;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-4 sm:p-6">
                <div className="flex flex-wrap items-center justify-between w-full gap-3">
                  <div>
                    <span className="text-xs font-mono text-purple-300 uppercase block font-semibold">Live Client Platform</span>
                    <span className="text-white font-heading font-bold text-lg sm:text-xl">Prajaian's Resto Cafe • Kodakara</span>
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all cursor-pointer"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* CASE STUDY STRUCTURED STAGES */}
          <div className="space-y-12">

            {/* STAGE 01 — THE CHALLENGE */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs font-bold text-purple-400 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-500/30">
                  01 — THE CHALLENGE
                </span>
                <span className="h-px bg-white/10 flex-1" />
              </div>
              <p className="text-zinc-200 font-body text-sm sm:text-base leading-relaxed font-light">
                Prajaian's Resto Cafe needed a centralized inventory and business management system to track restaurant stock, monitor real-time profits and losses, identify food nearing expiry, organize sales information, and generate useful business reports into one organized digital workflow.
              </p>
            </div>

            {/* STAGE 02 — THE APPROACH & ENGINEERING EFFORT */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-white/10 relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs font-bold text-purple-400 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-500/30">
                  02 — THE APPROACH & ENGINEERING EFFORT
                </span>
                <span className="h-px bg-white/10 flex-1" />
              </div>

              <p className="text-zinc-300 font-body text-xs sm:text-sm leading-relaxed mb-6 font-light">
                Sweven Labs approached the requirement as a complete operational system rather than simply creating a visual website. We designed an end-to-end architecture covering every phase of data processing and stock management:
              </p>

              {/* Engineering Effort Progression */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 font-mono text-[10px] text-center">
                {[
                  'Problem',
                  'Understanding',
                  'System Design',
                  'Development',
                  'Data Handling',
                  'Report Generation',
                  'Final Experience'
                ].map((step, idx, arr) => (
                  <div key={step} className="p-2.5 rounded-xl bg-zinc-950 border border-purple-500/20 text-purple-200 flex flex-col justify-between items-center">
                    <span className="text-[9px] text-purple-400 font-bold mb-1">0{idx + 1}</span>
                    <span className="font-bold leading-tight">{step}</span>
                    {idx < arr.length - 1 && (
                      <span className="hidden lg:block text-purple-500 mt-1">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* STAGE 03 — THE SYSTEM */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs font-bold text-purple-400 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-500/30">
                  03 — THE SYSTEM
                </span>
                <span className="h-px bg-white/10 flex-1" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-purple-300 font-mono text-xs font-bold">
                    <Database className="w-4 h-4 text-purple-400" />
                    <span>Inventory & Stock</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    Tracks stock levels for raw ingredients and supplies with automatic stock deduction.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-300 font-mono text-xs font-bold">
                    <BarChart3 className="w-4 h-4 text-emerald-400" />
                    <span>Profit & Loss</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    Calculates net margin breakdowns from operational costs and sales report inputs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-amber-300 font-mono text-xs font-bold">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span>Food Expiry Alerts</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    Monitors perishable dates and triggers warnings prior to ingredient expiration.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-indigo-300 font-mono text-xs font-bold">
                    <Upload className="w-4 h-4 text-indigo-400" />
                    <span>Sales PDF Upload</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    Processes uploaded daily sales report files into structured database records.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-fuchsia-300 font-mono text-xs font-bold">
                    <FileText className="w-4 h-4 text-fuchsia-400" />
                    <span>Bill Generation</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    Auto-generates clean digital bills and receipt summaries from parsed sales data.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-bold">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Business Statistics</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    Provides live visual charts of top-selling dishes, daily revenue, and inventory health.
                  </p>
                </div>
              </div>
            </div>

            {/* STAGE 04 — THE WORKFLOW (INTERACTIVE SALES REPORT UPLOAD FLOW) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-purple-500/30 relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-purple-400 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-500/30">
                    04 — THE WORKFLOW
                  </span>
                  <span className="text-xs font-mono text-zinc-400">Sales Report Upload to Insights Pipeline</span>
                </div>
                <span className="text-[10px] font-mono text-purple-400 px-2.5 py-0.5 rounded bg-purple-950/80 border border-purple-500/20">
                  Sample System Visualization
                </span>
              </div>

              {/* Step Navigation Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
                {workflowSteps.map((ws, idx) => {
                  const IconComp = ws.icon;
                  const isActive = activeWorkflowStep === idx;

                  return (
                    <button
                      key={ws.step}
                      onClick={() => setActiveWorkflowStep(idx)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-purple-950/80 border-purple-400 text-white shadow-[0_0_20px_rgba(157,78,221,0.4)]'
                          : 'bg-zinc-950/80 border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between font-mono text-[10px] mb-1">
                        <span className="text-purple-400 font-bold">{ws.step}</span>
                        <IconComp className="w-3.5 h-3.5 text-purple-300" />
                      </div>
                      <div className="font-heading font-bold text-xs truncate">{ws.title}</div>
                    </button>
                  );
                })}
              </div>

              {/* Active Workflow Detail Card */}
              <div className="p-5 rounded-xl bg-zinc-950 border border-purple-500/20 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-purple-300 font-mono text-xs">
                    <span className="px-2 py-0.5 rounded bg-purple-950 border border-purple-500/30 font-bold">
                      STEP {workflowSteps[activeWorkflowStep].step}
                    </span>
                    <span>{workflowSteps[activeWorkflowStep].subtitle}</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white">
                    {workflowSteps[activeWorkflowStep].title}
                  </h3>

                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    {workflowSteps[activeWorkflowStep].description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900 border border-white/10 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-zinc-400">{workflowSteps[activeWorkflowStep].previewTitle}</span>
                    <span className="text-emerald-400 font-bold text-[10px]">SYSTEM READY</span>
                  </div>

                  <div className="space-y-1.5 text-zinc-300 text-[11px]">
                    {workflowSteps[activeWorkflowStep].previewDetails.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* STAGE 05 — THE OUTCOME */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs font-bold text-purple-400 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-500/30">
                  05 — THE OUTCOME
                </span>
                <span className="h-px bg-white/10 flex-1" />
              </div>

              <div className="space-y-3 mb-6">
                {project.impact.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-950 border border-white/5 text-xs text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                <span className="font-mono text-xs text-zinc-400 block w-full mb-1">Technologies & Infrastructure:</span>
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-md bg-purple-950/50 border border-purple-500/30 font-mono text-xs text-purple-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Actions */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-white/10 gap-4">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full font-mono text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Close Case Study
            </button>

            <button
              onClick={() => {
                onClose();
                onStartProject();
              }}
              className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(157,78,221,0.5)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Build Similar System</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

