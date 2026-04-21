import heroImage from "@/assets/hero-skincare.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white" aria-labelledby="hero-heading">
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover scale-[1.04] object-[center_40%]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-8">
        <div className="max-w-xl text-foreground">
          <p
            className="text-sm tracking-[0.3em] uppercase mb-6 mt-12 opacity-0 animate-fade-up text-muted-foreground"
            style={{ animationDelay: "0.2s" }}
          >
            Botanical Luxury
          </p>
          <h1
            id="hero-heading"
            className="heading-display mb-16 opacity-0 animate-fade-up text-foreground leading-[1.05] md:leading-[1.1]"
            style={{ animationDelay: "0.4s" }}
          >
            Where Nature Meets
            <span className="block italic text-foreground mt-0 md:mt-1">BELLEZA PURA</span>
          </h1>
          <div
            className="flex flex-col sm:flex-row gap-4 mb-10 mt-[28rem] opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a href="#collections" className="btn-elegant text-foreground bg-white border border-foreground">
              Explore Collection
            </a>
            <a href="#rituals" className="btn-elegant-outline text-foreground border-foreground">
              Our Rituals
            </a>
          </div>
          <p
            className="text-elegant max-w-md opacity-0 animate-fade-up !text-foreground"
            style={{ animationDelay: "0.8s" }}
          >
            Crafted from the rarest botanicals, each formulation is a testament
            to the art of skincare — pure, potent, and profoundly effective.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
