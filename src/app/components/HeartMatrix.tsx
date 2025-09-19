'use client';

import { useEffect, useRef } from 'react';

interface HeartMatrixProps {
  width?: number;
  height?: number;
}

export default function HeartMatrix({ width = 400, height = 300 }: HeartMatrixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }> = [];

    // Heart parametric equation
    const getHeartPoint = (t: number) => {
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
      return { x, y };
    };

    // Create particles along heart shape
    const createHeartParticles = () => {
      for (let t = 0; t < 2 * Math.PI; t += 0.1) {
        const { x, y } = getHeartPoint(t);
        const centerX = width / 2;
        const centerY = height / 2;
        const scale = 8;
        
        particles.push({
          x: centerX + x * scale,
          y: centerY - y * scale,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          maxLife: 1
        });
      }
    };

    // Add floating particles
    const addFloatingParticles = () => {
      for (let i = 0; i < 5; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          life: Math.random() * 0.5 + 0.5,
          maxLife: 1
        });
      }
    };

    createHeartParticles();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Update life
        particle.life -= 0.01;
        
        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        
        // Draw particle
        const alpha = particle.life;
        const size = 3 * particle.life;
        
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#ff6b6b';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
      }

      // Add new floating particles occasionally
      if (Math.random() < 0.1) {
        addFloatingParticles();
      }

      // Recreate heart particles when they're all gone
      if (particles.length === 0) {
        setTimeout(() => {
          createHeartParticles();
        }, 1000);
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup if needed
    };
  }, [width, height]);

  return (
    <div className="heart-matrix-container">
      <canvas
        ref={canvasRef}
        className="heart-canvas"
        style={{
          border: '2px solid #ff6b6b',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)'
        }}
      />
      <style jsx>{`
        .heart-matrix-container {
          display: flex;
          justify-content: center;
          padding: 20px;
        }
        .heart-canvas {
          box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
        }
      `}</style>
    </div>
  );
}
