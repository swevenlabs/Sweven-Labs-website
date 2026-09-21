import React, { useEffect, useRef } from 'react';

// --- NEON VIOLET KINETIC DNA LIGHT WAVE ANIMATION FOR SECTIONS (FAST & SMOOTH) ---

interface SectionDnaCanvasProps {
  opacity?: number;
}

export const SectionDnaCanvas: React.FC<SectionDnaCanvasProps> = ({ 
  opacity = 0.45
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
    };

    resize();
    window.addEventListener('resize', resize);

    // Floating Quantum DNA Orbs
    const orbCount = 14;
    const orbs: Array<{
      x: number;
      y: number;
      radius: number;
      baseRadius: number;
      vx: number;
      vy: number;
      phase: number;
    }> = [];

    for (let i = 0; i < orbCount; i++) {
      orbs.push({
        x: Math.random() * (width || 800),
        y: Math.random() * (height || 600),
        radius: Math.random() * 2.5 + 1.2,
        baseRadius: Math.random() * 2.5 + 1.2,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      const centerY = height * 0.5;

      // 1. Dual Kinetic Glowing Wave Ribbons (Neon Violet DNA Light Animation)
      const wavePointsCount = 45;

      for (let w = 0; w < 2; w++) {
        const direction = w === 0 ? 1 : -1;
        const violetGlow = w === 0 ? 'rgba(192, 132, 252, 0.22)' : 'rgba(168, 85, 247, 0.18)';
        const strokeGlow = w === 0 ? 'rgba(216, 180, 254, 0.75)' : 'rgba(192, 132, 252, 0.7)';
        const strokeLine = w === 0 ? 'rgba(168, 85, 247, 0.35)' : 'rgba(147, 51, 234, 0.3)';

        const points: Array<{ x: number; y: number; glow: boolean }> = [];

        for (let i = 0; i < wavePointsCount; i++) {
          const t = i / (wavePointsCount - 1);
          const x = t * width;

          const freq1 = Math.sin(t * Math.PI * 2.5 + time * 1.4 * direction) * (height * 0.24);
          const freq2 = Math.cos(t * Math.PI * 1.2 - time * 0.8) * (height * 0.1);

          const y = centerY + (freq1 + freq2) * (w === 0 ? 1 : 0.75);

          points.push({
            x,
            y,
            glow: i % 7 === 0,
          });
        }

        // Wide Soft Outer Glow Stroke (Fast, zero-latency 60fps)
        ctx.beginPath();
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const xc = (p1.x + p2.x) / 2;
          const yc = (p1.y + p2.y) / 2;

          if (i === 0) {
            ctx.moveTo(p1.x, p1.y);
          } else {
            ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
          }
        }
        ctx.strokeStyle = violetGlow;
        ctx.lineWidth = 10;
        ctx.stroke();

        // Sharp Core DNA Line
        ctx.strokeStyle = strokeGlow;
        ctx.lineWidth = 2.0;
        ctx.stroke();

        ctx.strokeStyle = strokeLine;
        ctx.lineWidth = 1.0;
        ctx.stroke();

        // Accent Nodes
        for (let i = 0; i < points.length; i++) {
          if (points[i].glow) {
            const pt = points[i];
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = '#f3e8ff';
            ctx.fill();
          }
        }
      }

      // 2. Floating Quantum DNA Orbs
      for (let i = 0; i < orbs.length; i++) {
        const orb = orbs[i];

        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < 0) orb.x = width;
        if (orb.x > width) orb.x = 0;
        if (orb.y < 0) orb.y = height;
        if (orb.y > height) orb.y = 0;

        const currentRadius = orb.baseRadius + Math.sin(time * 2 + orb.phase) * 0.8;

        ctx.beginPath();
        ctx.arc(orb.x, orb.y, Math.max(1, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(192, 132, 252, 0.45)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity }}
    />
  );
};
