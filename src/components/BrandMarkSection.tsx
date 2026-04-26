import flowerMark from "@/assets/flower-mark.png";

const BrandMarkSection = () => {
  return (
    <section className="bg-white px-6 py-20 md:py-28" aria-label="Belleza Pura">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
        <img
          src={flowerMark}
          alt=""
          width={768}
          height={768}
          loading="lazy"
          className="w-40 md:w-56 h-auto mb-8"
        />
        <h2 className="font-display italic text-3xl md:text-5xl tracking-wide text-foreground mb-4">
          Belleza Pura
        </h2>
        <p className="text-sm md:text-base tracking-[0.25em] text-muted-foreground">
          甜美的花 · 純粹的美
        </p>
      </div>
    </section>
  );
};

export default BrandMarkSection;
