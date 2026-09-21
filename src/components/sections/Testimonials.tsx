import React from 'react';
import { ArrowUpRight, Sparkles, Quote, Star, CheckCircle2 } from 'lucide-react';
import { SectionDnaCanvas } from '../ui/SectionDnaCanvas';

interface TestimonialsProps {
  onStartProject: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onStartProject }) => {
  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden border-t border-white/10">
      {/* Neon Violet Kinetic DNA Wave Background */}
      <SectionDnaCanvas opacity={0.45} />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs tracking-[0.25em] text-purple-400 uppercase block mb-3 font-semibold">
            Verified Client Feedback
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Client Review
          </h2>
          <p className="text-zinc-400 font-body text-sm sm:text-base font-light leading-relaxed">
            Real feedback from our live project delivery.
          </p>
        </div>

        {/* Single Featured High-Impact Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950/90 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 relative overflow-hidden shadow-[0_0_50px_rgba(157,78,221,0.2)]">
            {/* Top Glow Accent */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-400 to-indigo-500" />
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-1.5 text-purple-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-purple-400 text-purple-400" />
                ))}
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-xs">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Client</span>
              </div>
            </div>

            <Quote className="w-10 h-10 text-purple-500/20 mb-4" />

            <p className="text-zinc-200 font-body text-base sm:text-lg sm:leading-relaxed font-light mb-8 italic">
              "Sweven Labs engineered a live full-stack restaurant management platform and automated inventory system for Prajaian's Resto Cafe with unmatched speed and engineering quality. The custom user dashboards, Cloudinary media delivery, and smooth deployment on Vercel and Railway made our digital operations flawless."
            </p>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-heading text-lg font-bold text-white">Prajaian's Resto Cafe</h3>
                <p className="text-xs font-mono text-purple-300">Kodakara, Kerala, India</p>
              </div>
              <a 
                href="https://www.prajaianscafe.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-purple-950/80 border border-purple-500/40 hover:border-purple-400 text-purple-200 hover:text-white font-mono text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <span>Visit Live Site</span>
                <ArrowUpRight className="w-4 h-4 text-purple-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Invitation Banner */}
        <div className="max-w-4xl mx-auto mt-16 relative z-10">
          <div className="p-8 sm:p-10 rounded-2xl bg-zinc-950/90 border border-purple-500/30 text-center sweven-glass relative overflow-hidden shadow-[0_0_40px_rgba(157,78,221,0.15)]">
            <div className="w-12 h-12 rounded-full bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 mx-auto mb-4">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="font-heading text-2xl font-bold text-white mb-2">
              Ready To Build Something Extraordinary?
            </h3>

            <p className="text-zinc-300 font-body text-xs sm:text-sm font-light leading-relaxed mb-6 max-w-xl mx-auto">
              Direct founder collaboration, fixed-scope delivery guarantees, and production-ready quality for your next software launch.
            </p>

            <button
              onClick={onStartProject}
              className="px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(157,78,221,0.5)] inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Partner With Sweven Labs</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

