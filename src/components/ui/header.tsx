import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
export const Header = () => {
  return <header className="border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/lovable-uploads/9c2adbf9-0f95-4111-a250-2f04ec62f295.png" alt="Square Digital Logo" className="h-8 w-auto" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1 text-foreground">
            
            <span>Proudly Canadian</span>
          </div>
          
          
        </nav>
        
        <Button variant="outline" size="sm">
          Get Quote
        </Button>
      </div>
    </header>;
};