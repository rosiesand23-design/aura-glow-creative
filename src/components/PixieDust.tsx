import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  hue: number;
  shimmerPhase: number;
  shimmerSpeed: number;
}

const PixieDust = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const lastScrollRef = useRef(0);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect user's reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnParticles = (delta: number) => {
      const count = Math.min(Math.abs(delta) * 0.4, 12);
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: Math.random() * vw,
          y: Math.random() * vh,
          size: Math.random() * 3.0 + 0.9,
          opacity: Math.random() * 0.35 + 0.1,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.25 - 0.1,
          life: 0,
          maxLife: Math.random() * 70 + 30,
          hue: 38 + Math.random() * 10,
          shimmerPhase: Math.random() * Math.PI * 2,
          shimmerSpeed: Math.random() * 0.06 + 0.02,
        });
      }
    };

    const onScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollRef.current;
      if (Math.abs(delta) > 1) spawnParticles(delta);
      lastScrollRef.current = scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const ambientInterval = setInterval(() => {
      if (particlesRef.current.length < 30) {
        for (let i = 0; i < 3; i++) {
          particlesRef.current.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 1.6 + 0.5,
            opacity: Math.random() * 0.18 + 0.06,
            vx: (Math.random() - 0.5) * 0.3,
            vy: -Math.random() * 0.18,
            life: 0,
            maxLife: Math.random() * 75 + 32,
            hue: 38 + Math.random() * 10,
            shimmerPhase: Math.random() * Math.PI * 2,
            shimmerSpeed: Math.random() * 0.07 + 0.025,
          });
        }
      }
    }, 300);

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      const particles = particlesRef.current;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.008;

        const progress = p.life / p.maxLife;
        const shimmer = Math.sin(p.shimmerPhase + p.life * p.shimmerSpeed) * 0.4 + 0.6;
        const fadeOpacity = progress < 0.15
          ? p.opacity * (progress / 0.15)
          : p.opacity * (1 - (progress - 0.15) / 0.85);
        const finalOpacity = fadeOpacity * shimmer;

        if (p.life >= p.maxLife || finalOpacity <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const glowRadius = p.size * 6;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
        gradient.addColorStop(0, `hsla(${p.hue}, 70%, 60%, ${finalOpacity * 0.6})`);
        gradient.addColorStop(0.3, `hsla(${p.hue}, 60%, 65%, ${finalOpacity * 0.25})`);
        gradient.addColorStop(0.7, `hsla(${p.hue}, 50%, 70%, ${finalOpacity * 0.08})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 50%, 70%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 65%, 85%, ${finalOpacity})`;
        ctx.fill();

        if (shimmer > 0.85) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.2, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(45, 100%, 95%, ${finalOpacity * 0.9})`;
          ctx.fill();
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      clearInterval(ambientInterval);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      role="presentation"
      className="fixed inset-0 pointer-events-none z-50"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
};

export default PixieDust;
