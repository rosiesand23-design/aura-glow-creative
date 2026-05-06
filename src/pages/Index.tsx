import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import RitualsSection from "@/components/RitualsSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import SimpleFooter from "@/components/SimpleFooter";
import flowerImage from "@/assets/hero-skincare.png";

import PixieDust from "@/components/PixieDust";
import AccessibilityMenu from "@/components/AccessibilityMenu";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <PixieDust />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ProductsSection />
        <div className="w-full bg-background -mt-16 md:-mt-24 overflow-hidden">
          <img
            src={flowerImage}
            alt="Botanical flower"
            className="w-[125%] md:w-[120%] h-auto object-contain mx-auto -ml-[12.5%] md:-ml-[10%]"
            loading="lazy"
          />
        </div>
        <div className="grid lg:grid-cols-2">
          <PhilosophySection />
          <RitualsSection />
        </div>
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <SimpleFooter />
      <AccessibilityMenu />
    </div>
  );
};

export default Index;
