import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import PixieDust from "@/components/PixieDust";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PixieDust />
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <ProductsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
