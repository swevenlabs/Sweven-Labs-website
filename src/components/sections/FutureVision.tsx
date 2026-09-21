import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Layers, Cpu, Rocket } from 'lucide-react';

export const FutureVision: React.FC = () => {
  const evolutionSteps = [
    { stage: '01', title: 'Studio Builds', desc: 'Custom software for visionary clients', icon: Rocket, status: 'Active Stage' },
    { stage: '02', title: 'Software Products', desc: 'Proprietary developer utilities & micro-tools', icon: Layers, status: 'In Progress' },
    { stage: '03', title: 'SaaS Engine', desc: 'Scalable cloud engines & automated workflow suites', icon: Cpu, status: 'Pipeline' },
    { stage: '04', title: 'AI Products', desc: 'Autonomous intelligence & multimodal agents', icon: Sparkles, status: 'Horizon' }
  ];

  return (
    <section className="py-28 bg-black relative overflow-hidden border-t border-b border-white/10">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-purple-900/20 via-indigo-900/10 to-sky-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-purple-400 uppercase block mb-4">
            // Long-Term Trajectory
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Today, We Build For Others.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-500">
              Tomorrow, We Build What Comes Next.
            </span>
          </h2>
          <p className="text-zinc-400 font-body text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Sweven Labs is structured as an evolution engine—starting as a boutique studio to fund research, master emerging stacks, and launch original software products.
          </p>
        </div>

        {/* Evolution Roadmap Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {evolutionSteps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = idx === 0;

            return (
              <motion.div
                key={step.stage}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 overflow-hidden ${
                  isCurrent
                    ? 'bg-zinc-950 border border-purple-500/50 shadow-[0_0_35px_rgba(157,78,221,0.25)]'
                    : 'bg-zinc-950/50 border border-white/5 hover:border-white/20'
                }`}
              >
                {/* Stage Indicator Badge */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-bold text-purple-400">
                    STAGE {step.stage}
                  </span>
                  <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider ${
                    isCurrent 
                      ? 'bg-purple-950/80 border border-purple-500/40 text-purple-200' 
                      : 'bg-zinc-900 border border-white/5 text-zinc-500'
                  }`}>
                    {step.status}
                  </span>
                </div>

                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform ${
                    isCurrent
                      ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(157,78,221,0.5)] scale-105'
                      : 'bg-zinc-900 border border-white/10 text-zinc-400'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-zinc-400 font-light text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Flow Arrow for non-last items */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-700">
                    <ArrowRight className="w-6 h-6 text-purple-500/40" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
