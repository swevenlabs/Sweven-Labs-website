import React, { useEffect, useRef } from 'react';

// --- NEON VIOLET DUAL KINETIC DNA HERO CANVAS (HIGH PERFORMANCE 60FPS) ---

export const InteractiveHeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse Tracking
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Quantum DNA Orbs
    const orbCount = 22;
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
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.8 + 1.2,
        baseRadius: Math.random() * 2.8 + 1.2,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;

      // Mouse Lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // --- 1. Dual Kinetic Glowing Wave Ribbons (Neon Violet DNA) ---
      const wavePointsCount = 55;
      const centerY = height * 0.48;

      for (let w = 0; w < 2; w++) {
        const direction = w === 0 ? 1 : -1;
        const violetGlow = w === 0 ? 'rgba(192, 132, 252, 0.25)' : 'rgba(168, 85, 247, 0.22)';
        const strokeGlow = w === 0 ? 'rgba(216, 180, 254, 0.85)' : 'rgba(192, 132, 252, 0.85)';
        const strokeLine = w === 0 ? 'rgba(168, 85, 247, 0.4)' : 'rgba(147, 51, 234, 0.35)';

        const points: Array<{ x: number; y: number; glow: boolean }> = [];

        for (let i = 0; i < wavePointsCount; i++) {
          const t = i / (wavePointsCount - 1);
          const x = t * width;

          const freq1 = Math.sin(t * Math.PI * 3 + time * 1.5 * direction) * 65;
          const freq2 = Math.cos(t * Math.PI * 1.5 - time) * 30;

          const dx = x - mouse.x;
          const dy = centerY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - dist / 320);
          const mouseLift = Math.sin(dist * 0.02 - time * 3) * influence * 60;

          const y = centerY + (freq1 + freq2) * (w === 0 ? 1 : 0.7) + mouseLift;

          points.push({
            x,
            y,
            glow: i % 7 === 0,
          });
        }

        // Outer Soft Glow Line (No shadowBlur overhead)
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
        ctx.lineWidth = 12;
        ctx.stroke();

        // Core Sharp Bright Line
        ctx.strokeStyle = strokeGlow;
        ctx.lineWidth = 2.2;
        ctx.stroke();

        ctx.strokeStyle = strokeLine;
        ctx.lineWidth = 1.0;
        ctx.stroke();

        // Accent Nodes
        for (let i = 0; i < points.length; i++) {
          if (points[i].glow) {
            const pt = points[i];
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#f3e8ff';
            ctx.fill();
          }
        }
      }

      // --- 2. Interactive Kinetic Halo Ring around Mouse ---
      ctx.save();
      ctx.translate(mouse.x, mouse.y);
      ctx.rotate(time * 0.6);

      ctx.beginPath();
      ctx.ellipse(0, 0, 90, 38, time * 0.5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(192, 132, 252, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 10]);
      ctx.stroke();
      ctx.restore();

      // --- 3. Floating Quantum Orbs ---
      for (let i = 0; i < orbs.length; i++) {
        const orb = orbs[i];

        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < 0) orb.x = width;
        if (orb.x > width) orb.x = 0;
        if (orb.y < 0) orb.y = height;
        if (orb.y > height) orb.y = 0;

        const dx = mouse.x - orb.x;
        const dy = mouse.y - orb.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let currentRadius = orb.baseRadius + Math.sin(time * 2 + orb.phase) * 1;
        if (dist < 180) {
          currentRadius += (180 - dist) * 0.03;
        }

        const fillGlow = dist < 180 ? 'rgba(233, 213, 255, 0.85)' : 'rgba(192, 132, 252, 0.45)';

        ctx.beginPath();
        ctx.arc(orb.x, orb.y, Math.max(1, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = fillGlow;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-90"
    />
  );
};
