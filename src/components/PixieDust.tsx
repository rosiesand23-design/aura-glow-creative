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

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnParticles = (scrollY: number, delta: number) => {
      const intensity = Math.min(Math.abs(delta) * 0.6, 18);
      const viewportH = window.innerHeight;
      const viewportW = window.innerWidth;

      for (let i = 0; i < intensity; i++) {
        // Spread across entire viewport width and height
        const x = Math.random() * viewportW;
        const y = Math.random() * viewportH;

        particlesRef.current.push({
          x,
          y,
          size: Math.random() * 3.5 + 1.5,
          opacity: Math.random() * 0.7 + 0.3,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 1.5 - 0.5,
          life: 0,
          maxLife: Math.random() * 120 + 60,
          hue: 36 + Math.random() * 14, // gold range 36-50
          shimmerPhase: Math.random() * Math.PI * 2,
          shimmerSpeed: Math.random() * 0.15 + 0.05,
        });
      }
    };

    const onScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollRef.current;
      if (Math.abs(delta) > 1) {
        spawnParticles(scrollY, delta);
      }
      lastScrollRef.current = scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Also spawn ambient particles periodically for a constant shimmer
    let ambientInterval = setInterval(() => {
      if (particlesRef.current.length < 30) {
        const viewportW = window.innerWidth;
        const viewportH = window.innerHeight;
        for (let i = 0; i < 3; i++) {
          particlesRef.current.push({
            x: Math.random() * viewportW,
            y: Math.random() * viewportH,
            size: Math.random() * 2.5 + 1,
            opacity: Math.random() * 0.4 + 0.15,
            vx: (Math.random() - 0.5) * 0.8,
            vy: -Math.random() * 0.5 - 0.1,
            life: 0,
            maxLife: Math.random() * 100 + 50,
            hue: 36 + Math.random() * 14,
            shimmerPhase: Math.random() * Math.PI * 2,
            shimmerSpeed: Math.random() * 0.1 + 0.03,
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
        // Shimmer: oscillate opacity
        const shimmer = Math.sin(p.shimmerPhase + p.life * p.shimmerSpeed) * 0.4 + 0.6;
        const fadeOpacity = progress < 0.15
          ? p.opacity * (progress / 0.15)
          : p.opacity * (1 - (progress - 0.15) / 0.85);
        const finalOpacity = fadeOpacity * shimmer;

        if (p.life >= p.maxLife || finalOpacity <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Outer glow
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

        // Bright core sparkle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 65%, 85%, ${finalOpacity})`;
        ctx.fill();

        // Tiny white-hot center for sparkle
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
      className="fixed inset-0 pointer-events-none z-50"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
};

export default PixieDust;
