import flowerIllustration from "@/assets/flower-illustration.png";

const PhilosophySection = () => {
  return (
    <section className="py-20 md:py-32 bg-white" id="ingredients">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <img
          src={flowerIllustration}
          alt="Artistic flower illustration"
          loading="lazy"
          width={1024}
          height={1024}
          className="w-64 md:w-96 h-auto mb-12 opacity-90"
        />
        <p className="font-display text-2xl md:text-3xl tracking-[0.2em] uppercase text-foreground mb-3">
          BELLEZA PURA
        </p>
        <p className="font-display text-lg md:text-xl text-foreground/70 tracking-wider">
          甜美的花 • 純粹的美
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;
