import { Header } from "@/components/ui/header";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { PricingSection } from "@/components/ui/pricing-section";
import { CaseStudiesSection } from "@/components/ui/case-studies-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CaseStudiesSection />
      <Footer />
    </div>
  );
};

export default Index;
