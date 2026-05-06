const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background" aria-labelledby="hero-heading">
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
            className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 mb-10 mt-[18rem] opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
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
