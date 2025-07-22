import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const HeroSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
          Get A Custom Website For Your Local Business
          <span className="block mt-2 text-muted-foreground">
            Without Paying Thousands Upfront
          </span>
        </h1>
        
        <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          We'll Build, Host + Manage your website for a low-cost monthly-payment.
        </p>
        
        <Card className="inline-block p-4 mb-8 bg-primary/10 border-primary/20">
          <p className="text-lg font-semibold text-accent">
            Start Now - Go Live Within 7 Days!
          </p>
        </Card>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Get Started Today
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            View Examples
          </Button>
        </div>
      </div>
    </section>
  );
};