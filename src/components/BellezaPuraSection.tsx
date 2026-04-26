import flower from "@/assets/belleza-flower.png";

const BellezaPuraSection = () => {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
        <img
          src={flower}
          alt="Belleza Pura botanical mark"
          loading="lazy"
          width={768}
          height={768}
          className="w-40 md:w-56 h-auto mb-8 opacity-90"
        />
        <h2 className="font-display italic text-3xl md:text-5xl text-foreground mb-4 leading-tight">
          Belleza Pura
        </h2>
        <p
          lang="zh"
          className="text-lg md:text-2xl text-foreground/80 tracking-[0.2em]"
          style={{ fontFamily: '"Noto Serif SC", "Songti SC", serif' }}
        >
          甜美的花 · 純粹的美
        </p>
      </div>
    </section>
  );
};

export default BellezaPuraSection;
