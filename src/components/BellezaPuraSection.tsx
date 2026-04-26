import flower from "@/assets/belleza-flower.png";

const BellezaPuraSection = () => {
  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <img
          src={flower}
          alt="Belleza Pura botanical mark"
          loading="lazy"
          width={1024}
          height={1024}
          className="w-56 md:w-80 h-auto mb-6"
        />
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <h2 className="font-body text-2xl md:text-4xl tracking-[0.35em] text-foreground uppercase">
            Belleza Pura
          </h2>
          <span className="hidden md:inline-block w-px h-8 bg-foreground/40" />
          <p
            lang="zh"
            className="text-xl md:text-3xl text-foreground tracking-[0.15em]"
            style={{ fontFamily: '"Noto Serif SC", "Songti SC", serif' }}
          >
            甜美的花 · 純粹的美
          </p>
        </div>
      </div>
    </section>
  );
};

export default BellezaPuraSection;
