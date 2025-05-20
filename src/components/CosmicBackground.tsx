import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

interface Planet {
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
  orbitRadius: number;
}

const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const planets = useRef<Planet[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    const initStars = () => {
      stars.current = Array.from({ length: 100 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.5,
      }));
    };

    // Initialize planets
    const initPlanets = () => {
      planets.current = Array.from({ length: 5 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 0.02 + 0.01,
        angle: Math.random() * Math.PI * 2,
        orbitRadius: Math.random() * 100 + 50,
      }));
    };

    initStars();
    initPlanets();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.current.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Move stars
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      // Draw planets and their orbits
      planets.current.forEach(planet => {
        // Draw orbit
        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.orbitRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.stroke();

        // Calculate planet position
        const planetX = planet.x + Math.cos(planet.angle) * planet.orbitRadius;
        const planetY = planet.y + Math.sin(planet.angle) * planet.orbitRadius;

        // Draw planet
        const gradient = ctx.createRadialGradient(
          planetX, planetY, 0,
          planetX, planetY, planet.size
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(planetX, planetY, planet.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Update planet angle
        planet.angle += planet.speed;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'radial-gradient(circle at center, #0f172a 0%, #020617 100%)' }}
    />
  );
};

export default CosmicBackground; 