import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { YouTubeEmbed } from "@/components/ui/youtube-embed";

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
        
        {/* YouTube video section */}
        <div className="mb-8 max-w-4xl mx-auto">
          <YouTubeEmbed videoId="k71GDGtaNsQ" />
        </div>
        
        <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto font-bold">
          We'll Build, Host + Manage your website for a low-cost monthly-payment.
        </p>
        
        <p className="text-lg mb-8 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          For small and medium-sized business owners, time is money—and wrestling with freelancers, DIY builders, or bloated agencies can cost you both. Our all-in-one website packages give you a fast, professional, fully-managed site that looks great, runs smoothly, and helps you win customers—without the tech headaches. Whether you're just getting started or scaling up, we handle the design, hosting, updates, and automation—so you can focus on what you do best: growing your business.
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