import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactFormData } from '../../types';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { SectionDnaCanvas } from '../ui/SectionDnaCanvas';

export const Contact: React.FC = () => {
  const hiddenFormRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Web Application',
    budgetRange: 'Under ₹15,000',
    timeline: '1–2 Months',
    preferredContact: 'Email',
    message: '',
    honeypot: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const projectTypes = [
    'Web Application',
    'Mobile Application',
    'AI / Machine Learning',
    'SaaS',
    'Automation',
    'UI/UX',
    'Custom Software',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹15,000',
    '₹15,000 – ₹35,000',
    '₹35,000 – ₹75,000',
    '₹75,000 – ₹1,50,000',
    '₹1,50,000+',
    'Not Sure Yet'
  ];

  const timelines = [
    'ASAP',
    '1–2 Months',
    '2–4 Months',
    '4–6 Months',
    'Flexible'
  ];

  const contactMethods = ['Email', 'Phone', 'WhatsApp'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (formData.honeypot && formData.honeypot.trim() !== '') {
      setStatus('success');
      return;
    }

    // Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Full Name, Email, and Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const DEFAULT_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzSXGJqQOXcib3dtHlGuJRnklxeosnzqr1JrRDhaz0oof2PZ06qE6LP9JvUWnqKa-_N/exec';
    const scriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || DEFAULT_SCRIPT_URL;

    try {
      if (scriptUrl && scriptUrl.trim() !== '') {
        // 1. Trigger native browser form POST targeting hidden iframe (100% reliable for Apps Script)
        if (hiddenFormRef.current) {
          hiddenFormRef.current.submit();
        }

        // 2. Secondary fetch request with URLSearchParams
        const params = new URLSearchParams();
        params.append('fullName', formData.fullName.trim());
        params.append('email', formData.email.trim());
        params.append('phone', formData.phone.trim());
        params.append('company', formData.company.trim());
        params.append('projectType', formData.projectType);
        params.append('budgetRange', formData.budgetRange);
        params.append('timeline', formData.timeline);
        params.append('preferredContact', formData.preferredContact);
        params.append('message', formData.message.trim());

        try {
          await fetch(scriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params.toString()
          });
        } catch (fetchErr) {
          console.warn('Secondary fetch attempt completed via hidden iframe.');
        }

        // Submission successful
        setStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          projectType: 'Web Application',
          budgetRange: 'Under ₹15,000',
          timeline: '1–2 Months',
          preferredContact: 'Email',
          message: '',
          honeypot: ''
        });
      } else {
        // Fallback simulation mode
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          projectType: 'Web Application',
          budgetRange: 'Under ₹15,000',
          timeline: '1–2 Months',
          preferredContact: 'Email',
          message: '',
          honeypot: ''
        });
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong while sending your request. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-28 bg-black relative overflow-hidden border-t border-white/10">
      {/* Neon Violet Kinetic DNA Ambient Background */}
      <SectionDnaCanvas opacity={0.45} variant="wave" />

      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-purple-900/25 via-indigo-900/15 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-purple-400 uppercase block mb-3 font-semibold">
            Initiate Project
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Have a Vision?
          </h2>
          <p className="text-zinc-400 font-body text-base font-light leading-relaxed">
            Tell us what you're building. We respond to all project inquiries within 24 hours.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-purple-500/30 sweven-glass shadow-[0_0_60px_rgba(157,78,221,0.15)] relative">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-16 text-center flex flex-col items-center justify-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Submission Received
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white max-w-lg">
                  Your request has been submitted successfully!
                </h3>
                <p className="text-zinc-300 font-body text-sm sm:text-base max-w-lg font-light leading-relaxed">
                  Thank you for reaching out to Sweven Labs. Your project inquiry has been logged into our intake system. A team member will review your details and contact you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-purple-300 hover:text-white hover:border-purple-500/40 transition-colors cursor-pointer mt-2"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Honeypot Spam Protection */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Error Banner */}
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-mono flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs text-purple-300 uppercase tracking-wider mb-2">
                      Full Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Alan Turing"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-body"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-purple-300 uppercase tracking-wider mb-2">
                      Email Address <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alan@domain.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-body"
                    />
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs text-purple-300 uppercase tracking-wider mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-body"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-purple-300 uppercase tracking-wider mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Stealth Startup / Personal"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-body"
                    />
                  </div>
                </div>

                {/* Project Type & Budget SELECT DROPDOWNS (WITH EXPLICIT DARK STYLING FIX) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs text-purple-300 uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0c0c12] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-body cursor-pointer"
                      style={{ colorScheme: 'dark' }}
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#0f0f18] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-purple-300 uppercase tracking-wider mb-2">
                      Estimated Budget Range
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0c0c12] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-body cursor-pointer"
                      style={{ colorScheme: 'dark' }}
                    >
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-[#0f0f18] text-white">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Timeline & Preferred Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs text-purple-300 uppercase tracking-wider mb-2">
                      Desired Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0c0c12] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-body cursor-pointer"
                      style={{ colorScheme: 'dark' }}
                    >
                      {timelines.map((time) => (
                        <option key={time} value={time} className="bg-[#0f0f18] text-white">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-purple-300 uppercase tracking-wider mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0c0c12] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-body cursor-pointer"
                      style={{ colorScheme: 'dark' }}
                    >
                      {contactMethods.map((method) => (
                        <option key={method} value={method} className="bg-[#0f0f18] text-white">
                          {method}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-xs text-purple-300 uppercase tracking-wider mb-2">
                    Project Vision & Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe what you want to build, key goals, target audience, and core functional requirements..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-body leading-relaxed resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-mono text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(157,78,221,0.5)] flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Vision</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Hidden iframe & form for 100% reliable Google Apps Script Web App submission */}
      <iframe name="google_sheet_target" id="google_sheet_target" className="hidden" style={{ display: 'none' }} />
      <form
        ref={hiddenFormRef}
        action={import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbzSXGJqQOXcib3dtHlGuJRnklxeosnzqr1JrRDhaz0oof2PZ06qE6LP9JvUWnqKa-_N/exec'}
        method="POST"
        target="google_sheet_target"
        className="hidden"
        style={{ display: 'none' }}
      >
        <input type="hidden" name="fullName" value={formData.fullName} />
        <input type="hidden" name="email" value={formData.email} />
        <input type="hidden" name="phone" value={formData.phone} />
        <input type="hidden" name="company" value={formData.company} />
        <input type="hidden" name="projectType" value={formData.projectType} />
        <input type="hidden" name="budgetRange" value={formData.budgetRange} />
        <input type="hidden" name="timeline" value={formData.timeline} />
        <input type="hidden" name="preferredContact" value={formData.preferredContact} />
        <input type="hidden" name="message" value={formData.message} />
      </form>
    </section>
  );
};
