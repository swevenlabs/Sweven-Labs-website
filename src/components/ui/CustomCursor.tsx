import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device supports touch/mobile or reduced motion
    const checkMobile = () => {
      const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsMobile(touchDevice || reducedMotion || window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check hovered element targets
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('a, button, [data-cursor-interactive], input, select, textarea');
      const viewEl = target.closest('[data-cursor-text]');

      if (viewEl) {
        setIsHovered(true);
        setCursorText(viewEl.getAttribute('data-cursor-text') || 'VIEW');
      } else if (interactiveEl) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Center Small Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-purple-400 rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
          opacity: isHovered && cursorText ? 0 : 1
        }}
      />

      {/* Outer Halo / Badge */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border transition-all duration-300 ease-out flex items-center justify-center font-mono text-[10px] font-bold tracking-wider text-purple-200 ${
          isHovered
            ? cursorText
              ? 'w-16 h-16 bg-purple-900/80 border-purple-400/80 backdrop-blur-md shadow-[0_0_20px_rgba(157,78,221,0.5)] scale-100'
              : 'w-12 h-12 bg-purple-500/10 border-purple-400/50 scale-110 shadow-[0_0_15px_rgba(157,78,221,0.3)]'
            : 'w-8 h-8 border-white/20 bg-transparent scale-100'
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovered ? (cursorText ? 32 : 24) : 16)}px, ${
            position.y - (isHovered ? (cursorText ? 32 : 24) : 16)
          }px, 0)`
        }}
      >
        {cursorText}
      </div>
    </>
  );
};
