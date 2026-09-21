import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../../data/site';
import { Plus, Minus } from 'lucide-react';
import { SectionDnaCanvas } from '../ui/SectionDnaCanvas';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 bg-black relative overflow-hidden border-t border-white/10">
      {/* Neon Violet Kinetic DNA Wave Background */}
      <SectionDnaCanvas opacity={0.45} />
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-purple-400 uppercase block mb-3 font-semibold">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Clear Answers
          </h2>
          <p className="text-zinc-400 font-body text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Everything you need to know about working with Sweven Labs, our process, and capabilities.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-zinc-950 border-purple-500/40 shadow-[0_0_20px_rgba(157,78,221,0.15)]'
                    : 'bg-zinc-950/60 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading text-lg font-semibold text-white hover:text-purple-300 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-purple-400/80">
                      0{idx + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-purple-950 text-purple-300 border-purple-500/30' : 'text-zinc-400'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-zinc-300 font-body text-sm font-light leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
