import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/9c2adbf9-0f95-4111-a250-2f04ec62f295.png" 
            alt="Square Digital Logo" 
            className="h-8 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        
        <Button variant="outline" size="sm">
          Get Quote
        </Button>
      </div>
    </header>
  );
};