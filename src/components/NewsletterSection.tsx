import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Stay Connected
        </p>
        <h2 className="heading-section text-foreground mb-4">
          Join the Lumière Circle
        </h2>
        <div className="divider-gold mt-6 mb-8" />
        <p className="text-elegant text-sm mb-10 max-w-md mx-auto">
          Receive exclusive access to new collections, skincare rituals, and
          member-only offerings.
        </p>

        {submitted ? (
          <p className="text-sm tracking-wider text-accent font-medium animate-fade-in">
            Thank you. Welcome to the circle.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 bg-transparent border border-border text-foreground text-sm tracking-wider placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors font-body"
            />
            <button type="submit" className="btn-elegant text-xs whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
