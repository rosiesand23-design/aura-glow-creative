import heroImage from "@/assets/hero-skincare.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury botanical skincare serums on marble surface"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent text-black bg-gold" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 text-primary bg-[sidebar-primary-foreground] bg-black">
        <div className="max-w-xl bg-black text-white">
          <p
            className="text-sm tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up text-white"
            style={{ animationDelay: "0.2s" }}
          >
            Botanical Luxury
          </p>
          <h1
            className="heading-display mb-8 opacity-0 animate-fade-up text-white"
            style={{ animationDelay: "0.4s" }}
          >
            Where Nature Meets
            <span className="block italic text-white">BELLEZA PURA</span>
          </h1>
          <p
            className="text-elegant max-w-md mb-10 opacity-0 animate-fade-up text-white"
            style={{ animationDelay: "0.6s" }}
          >
            Crafted from the rarest botanicals, each formulation is a testament
            to the art of skincare — pure, potent, and profoundly effective.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a href="#collections" className="btn-elegant text-white bg-primary">
              Explore Collection
            </a>
            <a href="#rituals" className="btn-elegant-outline text-white bg-primary">
              Our Rituals
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
