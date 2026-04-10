import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Lumière transformed my skincare routine. The Golden Hour Serum gives my skin an ethereal glow I've never achieved before.",
    author: "Camille R.",
    location: "Paris",
  },
  {
    quote:
      "I've tried countless luxury brands. Nothing compares to the purity and efficacy of these formulations. Truly exceptional.",
    author: "Naomi \n",
    location: "New York",
  },
  {
    quote:
      "The Velvet Renewal Cream is like silk on my skin. I wake up every morning feeling radiant and deeply nourished.",
    author: "Isabelle M.",
    location: "London",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-card" id="rituals">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Testimonials
        </p>
        <h2 className="heading-section text-foreground mb-4">
          Words from Our Community
        </h2>
        <div className="divider-gold mt-6 mb-16" />

        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {testimonials.map((t) => (
            <div key={t.author} className="flex flex-col items-center">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-accent fill-accent"
                  />
                ))}
              </div>
              <blockquote className="text-elegant text-sm italic leading-relaxed mb-6 max-w-sm">
                "{t.quote}"
              </blockquote>
              <p className="text-sm font-medium text-foreground tracking-wide">
                {t.author}
              </p>
              <p className="text-xs text-muted-foreground tracking-wider uppercase mt-1">
                {t.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
