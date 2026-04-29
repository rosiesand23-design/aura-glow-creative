import { Sunrise, Moon, Sparkles } from "lucide-react";

const rituals = [
  {
    icon: Sunrise,
    time: "Morning",
    title: "Awaken & Illuminate",
    description:
      "Begin with a gentle cleanse, followed by our vitamin-rich serum and a veil of weightless hydration to greet the day.",
  },
  {
    icon: Sparkles,
    time: "Midday",
    title: "Refresh & Restore",
    description:
      "A mindful pause. Mist, breathe, and renew with botanical essences crafted to revive skin and spirit.",
  },
  {
    icon: Moon,
    time: "Evening",
    title: "Unwind & Renew",
    description:
      "Dissolve the day with a slow double cleanse and our restorative night elixir, working in harmony as you rest.",
  },
];

const RitualsSection = () => {
  return (
    <section className="section-padding bg-secondary/30" id="rituals">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Daily Rituals
        </p>
        <h2 className="heading-section text-foreground mb-4">
          A Ceremony for Every Hour
        </h2>
        <div className="divider-gold mt-6 mb-16" />

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {rituals.map((ritual) => (
            <article
              key={ritual.title}
              className="group bg-white border border-border p-10 transition-all duration-500 hover:border-accent hover:shadow-lg"
            >
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-border rounded-full group-hover:border-accent transition-colors duration-500">
                <ritual.icon
                  size={22}
                  className="text-muted-foreground group-hover:text-accent transition-colors duration-500"
                  strokeWidth={1.5}
                />
              </div>
              <p className="text-xs tracking-[0.25em] uppercase text-accent mb-3">
                {ritual.time}
              </p>
              <h3 className="font-display text-xl mb-4 text-foreground">
                {ritual.title}
              </h3>
              <p className="text-elegant text-sm leading-relaxed">
                {ritual.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RitualsSection;
