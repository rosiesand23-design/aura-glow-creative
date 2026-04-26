import flower from "@/assets/belleza-pura-flower.png";

const BellezaPuraSection = () => {
  return (
    <section
      className="bg-white px-6 md:px-12 lg:px-20 pt-8 pb-20 md:pb-28"
      aria-labelledby="belleza-pura-mark"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <img
          src={flower}
          alt=""
          aria-hidden="true"
          className="w-full max-w-xl md:max-w-2xl h-auto select-none"
          loading="lazy"
        />
        <div className="mt-4 md:mt-6 w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
          <h2
            id="belleza-pura-mark"
            className="text-foreground tracking-[0.4em] md:tracking-[0.5em] text-xl md:text-3xl font-light"
          >
            BELLEZA PURA
          </h2>
          <span
            lang="zh-Hant"
            className="text-foreground text-lg md:text-2xl tracking-[0.15em] font-light"
            style={{ fontFamily: '"Ma Shan Zheng", "Noto Serif TC", serif' }}
          >
            甜美的花 · 純粹的美
          </span>
        </div>
      </div>
    </section>
  );
};

export default BellezaPuraSection;
