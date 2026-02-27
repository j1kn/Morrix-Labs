import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  char: string;
  opacity: number;
  speed: number;
  direction: number;
}

const CHARS = '·∙∘○◌◯◎●◐◑◒◓◔◕◖◗◴◵◶◷◸◹◺◻◼◽◾◿▁▂▃▄▅▆▇█▉▊▋▌▍▎▏▐░▒▓▔▕▖▗▘▙▚▛▜▝▞▟';

export function ASCIICanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number>(0);
  const isActiveRef = useRef(true);

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    const count = Math.floor((width * height) / 800);
    
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
        opacity: 0.1 + Math.random() * 0.4,
        speed: 0.2 + Math.random() * 0.3,
        direction: Math.random() * Math.PI * 2,
      });
    }
    
    return particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
        particlesRef.current = initParticles(rect.width, rect.height);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    let frameCount = 0;
    const animate = () => {
      if (!isActiveRef.current) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      frameCount++;
      // Slow animation: update every 3rd frame
      if (frameCount % 3 !== 0) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.fillStyle = 'rgba(11, 12, 15, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = '14px "IBM Plex Mono", monospace';
      
      particlesRef.current.forEach((p, i) => {
        // Slowly change character occasionally
        if (Math.random() < 0.02) {
          p.char = CHARS[Math.floor(Math.random() * CHARS.length)];
        }

        // Subtle movement
        p.x += Math.cos(p.direction) * p.speed;
        p.y += Math.sin(p.direction) * p.speed;

        // Gentle direction drift
        p.direction += (Math.random() - 0.5) * 0.05;

        // Wrap around edges
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        // Pulsing opacity
        const pulseOpacity = p.opacity + Math.sin(Date.now() * 0.001 + i) * 0.1;
        
        ctx.fillStyle = `rgba(167, 172, 182, ${Math.max(0.05, pulseOpacity)})`;
        ctx.fillText(p.char, p.x, p.y);
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Pause when tab is hidden
    const handleVisibility = () => {
      isActiveRef.current = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(frameRef.current);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ imageRendering: 'pixelated' }}
    />
  );
}
