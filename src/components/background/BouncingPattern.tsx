"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  size: number;
  speed: number;
  connectionDistance: number;
}

export const BouncingPattern = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(undefined);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef<Particle[]>([]);
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);

  useEffect(() => {
    const checkAnimationPreference = () => {
      const dataAnimation = document.documentElement.getAttribute("data-animation");
      setIsAnimationEnabled(dataAnimation !== "off");
    };

    checkAnimationPreference();

    const observer = new MutationObserver(checkAnimationPreference);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-animation"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gridSpacing = 75;
    const rows = Math.ceil(window.innerHeight / gridSpacing);
    const cols = Math.ceil(window.innerWidth / gridSpacing);

    const sizeConfig = {
      2: { speed: 0.5, connectionDistance: gridSpacing * 1.5 },
      4: { speed: 0.3, connectionDistance: gridSpacing * 2 },
      6: { speed: 0.2, connectionDistance: gridSpacing * 2.5 },
    };

    const sizes = [2, 4, 6] as const;
    const particles: Particle[] = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile
      ? Math.floor(rows * cols * 0.35)
      : rows * cols;
    
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const config = sizeConfig[size];
      
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: Math.cos(angle) * config.speed,
        vy: Math.sin(angle) * config.speed,
        radius: size,
        size: size,
        speed: config.speed,
        connectionDistance: config.connectionDistance,
      });
    }
    
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();

    const gridSpacing = 75;

    const isDarkTheme = () => document.documentElement.classList.contains('dark');

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX + 5.5, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const darkTheme = isDarkTheme();
      const particles = particlesRef.current;

      if (isAnimationEnabled) {
        particles.forEach((particle) => {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x <= particle.radius || particle.x >= canvas.width - particle.radius) {
            particle.vx = -particle.vx;
            particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x));
          }
          if (particle.y <= particle.radius || particle.y >= canvas.height - particle.radius) {
            particle.vy = -particle.vy;
            particle.y = Math.max(particle.radius, Math.min(canvas.height - particle.radius, particle.y));
          }
        });
      }

      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = Math.max(particle.connectionDistance, otherParticle.connectionDistance);

          if (dist < maxDist) {
            const lineOpacity = Math.max(0, 0.35 * (1 - dist / maxDist));
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = darkTheme 
              ? `rgba(255, 255, 255, ${lineOpacity})`
              : `rgba(0, 0, 0, ${lineOpacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      const mouseConnectionDistance = gridSpacing * 2;
      if (mouseRef.current.x > -9999) {
        particles.forEach((particle) => {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseConnectionDistance) {
            const lineOpacity = Math.max(0, 0.9 * (1 - dist / mouseConnectionDistance));
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = darkTheme 
              ? `rgba(255, 255, 255, ${lineOpacity})`
              : `rgba(0, 0, 0, ${lineOpacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      }

      particles.forEach((particle) => {
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        
        if (darkTheme) {
          gradient.addColorStop(0, `rgba(255, 255, 255, 0.8)`);
          gradient.addColorStop(1, `rgba(0, 0, 0, 0.3)`);
        } else {
          gradient.addColorStop(0, `rgba(0, 0, 0, 0.6)`);
          gradient.addColorStop(1, `rgba(255, 255, 255, 0.2)`);
        }
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      updateCanvasSize();
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 150);
    };

    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAnimationEnabled]);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        role="presentation"
        className={`absolute inset-0 w-full h-full opacity-100 transition-opacity duration-300 ${
          isAnimationEnabled ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};
