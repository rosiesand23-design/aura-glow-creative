import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProductsSection from "@/components/ProductsSection";
import BellezaPuraSection from "@/components/BellezaPuraSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
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
        <ProductsSection />
        <BellezaPuraSection />
        <PhilosophySection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
      <AccessibilityMenu />
    </div>
  );
};

export default Index;
