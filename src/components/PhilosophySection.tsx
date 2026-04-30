import { Leaf, Droplets, Sun } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Pure Botanicals",
    description:
      "Every ingredient is ethically sourced from pristine environments, ensuring unmatched purity and potency.",
  },
  {
    icon: Droplets,
    title: "Science-Led Formulas",
    description:
      "Our in-house laboratory blends ancient botanical wisdom with modern dermatological science.",
  },
  {
    icon: Sun,
    title: "Sustainable Luxury",
    description:
      "From recyclable glass packaging to carbon-neutral shipping, luxury should never cost the earth.",
  },
];

const PhilosophySection = () => {
  return (
    <section className="section-padding bg-[#F4F4F4]" id="ingredients">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Our Philosophy
        </p>
        <h2 className="heading-section text-foreground mb-4">
          Rooted in Nature, Refined by Science
        </h2>
        <div className="divider-gold mt-6 mb-16" />

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-border rounded-full group-hover:border-accent transition-colors duration-500">
                <pillar.icon
                  size={24}
                  className="text-muted-foreground group-hover:text-accent transition-colors duration-500"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-display text-xl mb-3 text-foreground">
                {pillar.title}
              </h3>
              <p className="text-elegant text-sm leading-relaxed max-w-xs mx-auto">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
