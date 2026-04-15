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
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(document.body);

    const spawnParticles = (scrollY: number, delta: number) => {
      const count = Math.min(Math.abs(delta) * 0.3, 8);
      const viewportH = window.innerHeight;

      for (let i = 0; i < count; i++) {
        const x = Math.random() * window.innerWidth;
        const y = scrollY + Math.random() * viewportH;
        particlesRef.current.push({
          x,
          y,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.3,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1 - 0.3,
          life: 0,
          maxLife: Math.random() * 80 + 40,
          hue: 38 + Math.random() * 10,
        });
      }
    };

    const onScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollRef.current;
      if (Math.abs(delta) > 2) {
        spawnParticles(scrollY, delta);
      }
      lastScrollRef.current = scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.01; // gentle float up

        const progress = p.life / p.maxLife;
        const fadeOpacity = progress < 0.2
          ? p.opacity * (progress / 0.2)
          : p.opacity * (1 - (progress - 0.2) / 0.8);

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        // Glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        gradient.addColorStop(0, `hsla(${p.hue}, 60%, 55%, ${fadeOpacity * 0.8})`);
        gradient.addColorStop(0.4, `hsla(${p.hue}, 50%, 65%, ${fadeOpacity * 0.3})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 50%, 65%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core sparkle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 60%, 80%, ${fadeOpacity})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      resizeObserver.disconnect();
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
