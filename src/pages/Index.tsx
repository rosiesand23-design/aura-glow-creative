import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import RitualsSection from "@/components/RitualsSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import SimpleFooter from "@/components/SimpleFooter";

import PixieDust from "@/components/PixieDust";
import AccessibilityMenu from "@/components/AccessibilityMenu";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <PixieDust />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <div className="grid lg:grid-cols-2">
          <PhilosophySection />
          <RitualsSection />
        </div>
        <ProductsSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <SimpleFooter />
      <AccessibilityMenu />
    </div>
  );
};

export default Index;
