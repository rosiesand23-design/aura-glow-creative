import { useEffect, useState, useCallback } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
}

let sparkleId = 0;

const PixieDust = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const createScrollSparkles = useCallback(() => {
    const count = 3 + Math.floor(Math.random() * 4);
    const newSparkles: Sparkle[] = [];
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    for (let i = 0; i < count; i++) {
      newSparkles.push({
        id: sparkleId++,
        x: Math.random() * window.innerWidth,
        y: scrollY + Math.random() * viewportHeight,
        size: 2 + Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.7,
        delay: Math.random() * 0.3,
      });
    }

    setSparkles((prev) => [...prev.slice(-20), ...newSparkles]);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          createScrollSparkles();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [createScrollSparkles]);

  useEffect(() => {
    if (sparkles.length === 0) return;
    const timer = setTimeout(() => {
      setSparkles((prev) => prev.slice(3));
    }, 1200);
    return () => clearTimeout(timer);
  }, [sparkles]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute animate-pixie-shimmer"
          style={{
            left: s.x,
            top: s.y - window.scrollY,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle, hsl(38 60% 55% / 0.9), hsl(38 50% 80% / 0.4), transparent)`,
              boxShadow: `0 0 ${s.size * 2}px hsl(38 60% 55% / 0.3)`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default PixieDust;
