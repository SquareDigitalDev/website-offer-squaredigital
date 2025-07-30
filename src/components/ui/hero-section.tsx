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
        
        {/* Video embed section */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="relative aspect-video bg-muted rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center group hover:border-muted-foreground/40 transition-colors">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-muted-foreground font-medium">Video about our services</p>
              <p className="text-sm text-muted-foreground/70 mt-1">Click to embed your video</p>
            </div>
          </div>
        </div>
        
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
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Examples
          </Button>
        </div>
      </div>
    </section>
  );
};