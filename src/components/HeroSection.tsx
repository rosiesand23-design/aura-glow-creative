import heroImage from "@/assets/hero-skincare.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant floral line art illustration"
          width={1920}
          height={1080}
          className="w-full h-full object-contain opacity-60 scale-150 mx-auto"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20">
        <div className="max-w-xl text-foreground">
          <p
            className="text-sm tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up text-muted-foreground"
            style={{ animationDelay: "0.2s" }}
          >
            Botanical Luxury
          </p>
          <h1
            className="heading-display mb-8 opacity-0 animate-fade-up text-foreground"
            style={{ animationDelay: "0.4s" }}
          >
            Where Nature Meets
            <span className="block italic text-foreground">BELLEZA PURA</span>
          </h1>
          <p
            className="text-elegant max-w-md mb-10 opacity-0 animate-fade-up text-muted-foreground"
            style={{ animationDelay: "0.6s" }}
          >
            Crafted from the rarest botanicals, each formulation is a testament
            to the art of skincare — pure, potent, and profoundly effective.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a href="#collections" className="btn-elegant text-foreground bg-white border border-foreground">
              Explore Collection
            </a>
            <a href="#rituals" className="btn-elegant-outline text-foreground border-foreground">
              Our Rituals
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
