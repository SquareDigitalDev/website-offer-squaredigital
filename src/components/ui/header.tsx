import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-accent rounded-sm"></div>
          </div>
          <span className="text-xl font-bold text-foreground">SQUARE DIGITAL</span>
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