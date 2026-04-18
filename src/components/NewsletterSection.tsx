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
    <section className="section-padding bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Stay Connected
        </p>
        <h2 className="heading-section text-foreground mb-4">
          Join the Dulce Hana Circle
        </h2>
        <div className="divider-gold mt-6 mb-8" />
        <p className="text-elegant text-sm mb-10 max-w-md mx-auto">
          Receive exclusive access to new collections, skincare rituals, and
          member-only offerings.
        </p>

        {submitted ? (
          <p role="status" aria-live="polite" className="text-sm tracking-wider text-accent font-medium animate-fade-in">
            Thank you. Welcome to the circle.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" aria-label="Newsletter signup">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              autoComplete="email"
              className="flex-1 px-5 py-3 bg-white border border-foreground text-foreground text-sm tracking-wider placeholder:text-foreground/40 focus:outline-none focus:border-foreground transition-colors font-body"
            />
            <button type="submit" className="btn-elegant text-xs whitespace-nowrap bg-white text-foreground border border-foreground">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
