'use client';

import { useEffect, useRef } from 'react';

export function AnimatedVideoBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let time = 0;

    // Particle system for water flow effect
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      size: number;
      color: string;
    }> = [];

    // Pipe segments
    const pipes: Array<{
      x: number;
      y: number;
      width: number;
      height: number;
      angle: number;
      flow: number;
    }> = [
      { x: 100, y: 100, width: 300, height: 40, angle: 0.3, flow: 0 },
      { x: 350, y: 200, width: 250, height: 35, angle: -0.2, flow: 0 },
      { x: 200, y: 350, width: 400, height: 40, angle: 0.15, flow: 0 },
      { x: 600, y: 80, width: 280, height: 35, angle: -0.25, flow: 0 },
      { x: 700, y: 250, width: 300, height: 40, angle: 0.2, flow: 0 },
    ];

    const animate = () => {
      time += 0.016;

      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add gradient overlay
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(14, 165, 233, 0.05)');
      gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.03)');
      gradient.addColorStop(1, 'rgba(0, 217, 255, 0.02)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update pipes
      pipes.forEach((pipe, index) => {
        pipe.flow = (Math.sin(time * 0.5 + index) + 1) * 0.5;

        // Draw pipe
        ctx.save();
        ctx.translate(pipe.x, pipe.y);
        ctx.rotate(pipe.angle);

        // Outer pipe (darker)
        ctx.fillStyle = 'rgba(51, 65, 85, 0.6)';
        ctx.fillRect(0, 0, pipe.width, pipe.height);

        // Inner pipe glow
        ctx.fillStyle = `rgba(14, 165, 233, ${0.3 + pipe.flow * 0.2})`;
        ctx.fillRect(5, 8, pipe.width - 10, pipe.height - 16);

        // Flow particles inside pipe
        if (Math.random() > 0.7) {
          particles.push({
            x: Math.random() * pipe.width,
            y: pipe.height / 2,
            vx: 3 + Math.random() * 2,
            vy: (Math.random() - 0.5) * 0.5,
            life: 1,
            size: 2 + Math.random() * 2,
            color: `rgba(0, 217, 255, 1)`,
          });
        }

        ctx.restore();
      });

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;

        // Draw particle
        ctx.fillStyle = p.color.replace('1)', `${p.life})`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Remove dead particles
        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }

      // Draw water droplets falling
      ctx.fillStyle = 'rgba(6, 182, 212, 0.4)';
      for (let i = 0; i < 5; i++) {
        const x = (canvas.width / 6) * (i + 1);
        const y = ((time * 100 + i * 50) % canvas.height) - 50;
        const size = 4 + Math.sin(time * 2 + i) * 2;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();

        // Droplet trail
        ctx.strokeStyle = `rgba(14, 165, 233, ${0.3 - (y % 100) / 100})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + 30);
        ctx.stroke();
      }

      // Draw flowing water effect
      ctx.fillStyle = 'rgba(0, 217, 255, 0.1)';
      for (let i = 0; i < 3; i++) {
        const waveY = 200 + i * 150 + Math.sin(time * 0.3 + i) * 20;
        ctx.beginPath();
        ctx.moveTo(0, waveY);

        for (let x = 0; x <= canvas.width; x += 30) {
          const y = waveY + Math.sin((x * 0.01 + time * 0.5) * Math.PI) * 15;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      }}
    />
  );
}
