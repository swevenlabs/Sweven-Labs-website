import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import { IntroSplash } from './components/ui/IntroSplash';
import { FloatingContactDrawer } from './components/ui/FloatingContactDrawer';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { Services } from './components/sections/Services';
import { Technology } from './components/sections/Technology';
import { Portfolio } from './components/sections/Portfolio';
import { About } from './components/sections/About';
import { Process } from './components/sections/Process';
import { WhySweven } from './components/sections/WhySweven';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';

export function App() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workSection = document.querySelector('#work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-900 selection:text-purple-100 font-body relative overflow-x-hidden">
      {/* Opening Intro Splash Screen */}
      <IntroSplash />

      {/* Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Persistent Floating Contact Drawer */}
      <FloatingContactDrawer onOpenContactForm={scrollToContact} />

      {/* Navigation */}
      <Navbar onStartProject={scrollToContact} />

      {/* Main Content */}
      <main>
        {/* Cinematic Hero */}
        <Hero 
          onStartProject={scrollToContact} 
          onExploreWork={scrollToWork} 
        />

        {/* Selected Work / Portfolio (With Live Direct Demo Links) */}
        <Portfolio onStartProject={scrollToContact} />

        {/* Core Services / Capabilities */}
        <Services onStartProject={scrollToContact} />

        {/* Engineering Stack */}
        <Technology />

        {/* Studio Ethos */}
        <About />

        {/* Execution Process */}
        <Process />

        {/* Core Principles */}
        <WhySweven />

        {/* Client & Partner Testimonials */}
        <Testimonials onStartProject={scrollToContact} />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Direct Inquiry Contact Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

