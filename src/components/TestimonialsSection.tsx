import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Dulce Hana transformed my skincare routine. The Hyaluronic Moisturizer gives my skin an ethereal glow I've never achieved before.",
    author: "Rosie",
    location: "Burbank, CA",
  },
  {
    quote:
      "I've tried countless luxury brands. Nothing compares to the purity and efficacy of these formulations. Truly exceptional.",
    author: "Naomi",
    location: "Valley Village, CA",
  },
  {
    quote:
      "The Embrace Collagen Moisturizer is like silk on my skin. I wake up every morning feeling radiant and deeply nourished.",
    author: "Lisa ",
    location: "LARGOS, FLORIDA",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-white" id="rituals">
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
                    className="text-yellow-500 fill-yellow-500"
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
