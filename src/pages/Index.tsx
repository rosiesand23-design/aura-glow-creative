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
        <ProductsSection />
        <div className="px-6 md:px-12 lg:px-20 -mt-24 md:-mt-32 flex items-center justify-center">
          <div className="max-w-7xl mx-auto relative w-full bg-background overflow-hidden flex justify-center">
            <img
              src={flowerImage}
              alt="Botanical flower"
              className="block w-[200%] max-w-none h-auto shrink-0"
              loading="lazy"
            />
          </div>
        </div>
        <div className="-mt-24 md:-mt-40">
          <HeroSection />
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
