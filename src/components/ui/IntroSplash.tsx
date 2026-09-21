import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export const IntroSplash: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);
  const [videoDuration, setVideoDuration] = useState<number>(7.5);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrl = "https://res.cloudinary.com/bn8jj56m/video/upload/v1786607563/Seven_Labs_INTRO.mp4";

  // Attempt autoplay immediately on mount and set safety timeout
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }

    // Safety fallback timer if video fails or finishes
    const timer = setTimeout(() => {
      handleFinish();
    }, (videoDuration + 1) * 1000);

    return () => clearTimeout(timer);
  }, [videoDuration]);

  const handleFinish = () => {
    setHasEnded(true);
    setTimeout(() => setIsVisible(false), 700);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!hasEnded && (
        <motion.div
          key="intro-splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100000] bg-black flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Ambient Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/40 via-black to-indigo-950/40 z-0 pointer-events-none" />

          {/* Full-Bleed Video Container */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Top and Bottom Vignette Overlays for Cinematic Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-20 pointer-events-none" />

            {/* Direct High-Speed Cloudinary HTML5 Video Stream */}
            <video
              ref={videoRef}
              src={videoUrl}
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={handleFinish}
              onLoadedMetadata={handleLoadedMetadata}
              className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none scale-[1.02]"
            />

            {/* Top Brand Header Overlay */}
            <div className="absolute top-8 left-8 sm:left-12 z-30 flex items-center">
              <Logo size="sm" />
            </div>

            {/* Bottom Floating Progress Line synchronized with Cloudinary Video */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: videoDuration, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-purple-500 via-amber-400 to-purple-400"
              />
            </div>

            {/* Bottom Right Skip Button */}
            <button
              onClick={handleFinish}
              className="absolute bottom-8 right-8 sm:right-12 z-40 font-mono text-xs text-zinc-300 hover:text-white transition-all uppercase tracking-[0.25em] px-5 py-2.5 rounded-full border border-white/15 bg-black/70 backdrop-blur-md cursor-pointer hover:border-purple-500/50 hover:bg-black/90 active:scale-95 flex items-center gap-2"
            >
              <span>Skip Intro</span>
              <span>→</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};



