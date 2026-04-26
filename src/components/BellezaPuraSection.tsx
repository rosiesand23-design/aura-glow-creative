const BellezaPuraSection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
        <svg
          viewBox="0 0 200 200"
          className="w-32 h-32 md:w-40 md:h-40 text-foreground mb-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Five hand-drawn petals */}
          <path d="M100 60 C 80 50, 70 70, 80 90 C 88 100, 100 100, 100 100 C 100 100, 100 80, 100 60 Z" />
          <path d="M140 80 C 150 65, 135 50, 118 60 C 108 68, 102 82, 100 100 C 100 100, 125 95, 140 80 Z" />
          <path d="M140 130 C 158 130, 160 108, 142 100 C 128 96, 112 100, 100 100 C 100 100, 122 128, 140 130 Z" />
          <path d="M85 140 C 95 158, 118 152, 118 132 C 116 118, 108 106, 100 100 C 100 100, 78 122, 85 140 Z" />
          <path d="M60 110 C 50 125, 65 142, 82 132 C 92 124, 98 112, 100 100 C 100 100, 72 98, 60 110 Z" />
          {/* Center */}
          <circle cx="100" cy="100" r="6" />
          {/* Stem */}
          <path d="M100 106 C 102 130, 98 150, 100 170" />
          {/* Leaf */}
          <path d="M100 145 C 115 140, 125 148, 122 158 C 112 160, 102 155, 100 145 Z" />
        </svg>

        <h2 className="font-serif italic text-4xl md:text-5xl tracking-wide text-foreground mb-4">
          Belleza Pura
        </h2>
        <p
          lang="zh"
          className="text-lg md:text-xl tracking-[0.3em] text-foreground/80"
        >
          甜美的花 · 純粹的美
        </p>
      </div>
    </section>
  );
};

export default BellezaPuraSection;
