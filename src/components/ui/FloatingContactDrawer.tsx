import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Mail, ArrowUpRight, Github, Linkedin, Sparkles, Send } from 'lucide-react';
import { siteConfig } from '../../data/site';

interface FloatingContactDrawerProps {
  onOpenContactForm: () => void;
}

export const FloatingContactDrawer: React.FC<FloatingContactDrawerProps> = ({ onOpenContactForm }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Trigger Pill */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-zinc-950/90 border border-purple-500/40 text-white font-mono text-xs font-semibold uppercase tracking-wider shadow-[0_0_30px_rgba(157,78,221,0.4)] backdrop-blur-xl hover:border-purple-400 transition-all cursor-pointer"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
          </span>
          <MessageSquare className="w-4 h-4 text-purple-300 group-hover:rotate-12 transition-transform" />
          <span>Let's Talk</span>
        </motion.button>
      </div>

      {/* Slide-in Glass Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9990]"
            />

            {/* Slide-over Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-zinc-950/95 border-l border-white/10 z-[9999] p-8 flex flex-col justify-between backdrop-blur-2xl overflow-y-auto"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <span className="font-heading text-lg font-bold text-white">Direct Line</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Subtitle */}
                <div className="mb-8">
                  <span className="font-mono text-xs text-purple-400 uppercase tracking-widest block mb-2 font-semibold">
                    Sweven Labs Studio
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    Have a Vision in Mind?
                  </h3>
                  <p className="text-zinc-400 font-body text-xs leading-relaxed">
                    We respond to all project inquiries and technical briefs within 24 hours.
                  </p>
                </div>

                {/* Direct Email Card */}
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-2xl bg-zinc-900/80 border border-purple-500/30 hover:border-purple-400 flex items-center justify-between transition-all mb-6 block cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-purple-400 uppercase tracking-widest block">
                        Direct Email (Compose)
                      </span>
                      <span className="text-sm font-mono font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {siteConfig.email}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                {/* Direct Action Button */}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenContactForm();
                  }}
                  className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-semibold uppercase tracking-wider shadow-[0_0_25px_rgba(157,78,221,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer mb-8"
                >
                  <Send className="w-4 h-4" />
                  <span>Open Full Intake Form</span>
                </button>

                {/* Social Channels */}
                <div className="space-y-3">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                    Developer Channels
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://github.com/swevenlabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-purple-500/30 flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4 text-purple-400" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com/company/swevenlabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-purple-500/30 flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-purple-400" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Drawer Footer Status */}
              <div className="pt-6 border-t border-white/10 mt-8 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Build Queue Open</span>
                </span>
                <span>2026 Studio</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
