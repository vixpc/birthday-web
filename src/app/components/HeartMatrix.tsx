'use client';

import { useEffect, useRef } from 'react';

interface HeartMatrixProps {
  width?: number;
  height?: number;
}

export default function HeartMatrix({ width = 500, height = 350 }: HeartMatrixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      hue: number;
      size: number;
    };

    const particles: Particle[] = [];
    const stars: { x: number; y: number; r: number; phase: number }[] = [];

    const getHeartPoint = (t: number) => {
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
      return { x, y };
    };

    const centerX = width / 2;
    const centerY = height / 2 + 10;
    const scale = Math.min(width, height) / 18;

    const createHeartParticles = () => {
      for (let t = 0; t < Math.PI * 2; t += 0.06) {
        const { x, y } = getHeartPoint(t);
        particles.push({
          x: centerX + x * scale,
          y: centerY - y * scale,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          life: 1,
          maxLife: 1,
          hue: 350 + Math.random() * 20, // pink-red range
          size: 2.5 + Math.random() * 1.5,
        });
      }
    };

    const createStars = () => {
      stars.length = 0;
      const count = Math.round((width * height) / 9000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.2 + 0.4,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    createHeartParticles();
    createStars();

    // Soft trail: draw semi-transparent overlay each frame
    const drawTrail = () => {
      const grd = ctx.createLinearGradient(0, 0, width, height);
      grd.addColorStop(0, 'rgba(255, 107, 107, 0.06)');
      grd.addColorStop(1, 'rgba(255, 182, 193, 0.06)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);
    };

    const drawHeartGlow = (time: number) => {
      // Draw a glowing heart stroke beneath particles
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.scale(scale, -scale);
      ctx.beginPath();
      for (let t = 0; t <= Math.PI * 2; t += 0.02) {
        const { x, y } = getHeartPoint(t);
        if (t === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      const pulse = 0.5 + 0.5 * Math.sin(time * 0.002);
      ctx.lineWidth = 0.9 + pulse * 0.6;
      ctx.strokeStyle = 'rgba(255, 105, 180, 0.55)';
      ctx.shadowBlur = 18 + pulse * 18;
      ctx.shadowColor = 'rgba(255, 105, 180, 0.9)';
      ctx.stroke();
      ctx.restore();
    };

    const drawStars = (time: number) => {
      ctx.save();
      for (const s of stars) {
        const twinkle = 0.6 + 0.4 * Math.sin(time * 0.003 + s.phase);
        ctx.globalAlpha = twinkle * 0.8;
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * (0.8 + twinkle * 0.4), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    const animate = (time: number) => {
      // Clear with light fade to keep soft trails
      ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.fillRect(0, 0, width, height);

      drawStars(time);
      drawHeartGlow(time);
      drawTrail();

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.008;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        const alpha = Math.max(0, p.life);
        ctx.save();
        ctx.globalAlpha = alpha;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, `hsla(${p.hue}, 90%, 70%, 1)`);
        gradient.addColorStop(1, `hsla(${p.hue}, 90%, 50%, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 1.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Replenish particles to keep the heart vivid
      if (particles.length < 180) {
        for (let k = 0; k < 6; k++) {
          const t = Math.random() * Math.PI * 2;
          const { x, y } = getHeartPoint(t);
          particles.push({
            x: centerX + x * scale,
            y: centerY - y * scale,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            life: 0.7 + Math.random() * 0.6,
            maxLife: 1,
            hue: 340 + Math.random() * 30,
            size: 2 + Math.random() * 2,
          });
        }
      }

      requestAnimationFrame(animate);
    };

    // Initialize background softly
    ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.fillRect(0, 0, width, height);

    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [width, height]);

  return (
    <div className="heart-matrix-container">
      <canvas
        ref={canvasRef}
        className="heart-canvas"
        style={{
          border: '0px solid transparent',
          borderRadius: '16px',
          background: 'radial-gradient(1200px 500px at 10% 10%, rgba(255,255,255,0.09), rgba(255,255,255,0) 60%), linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        }}
      />
      <style jsx>{`
        .heart-matrix-container {
          display: flex;
          justify-content: center;
          padding: 20px;
        }
        .heart-canvas {
          box-shadow: 0 12px 28px rgba(255, 107, 107, 0.25), 0 2px 8px rgba(0,0,0,0.08);
        }
      `}</style>
    </div>
  );
}
