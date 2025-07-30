import { Header } from "@/components/ui/header";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { PricingSection } from "@/components/ui/pricing-section";
import { CaseStudiesSection } from "@/components/ui/case-studies-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { Footer } from "@/components/ui/footer";
import { AnimatedBackground } from "@/components/ui/animated-background";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
