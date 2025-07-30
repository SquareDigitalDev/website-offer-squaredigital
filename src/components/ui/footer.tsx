export const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/9c2adbf9-0f95-4111-a250-2f04ec62f295.png" 
                alt="Square Digital Logo" 
                className="h-6 w-auto"
              />
            </div>
            <p className="text-accent-foreground/80 text-sm">
              Professional websites for local businesses. Built, hosted, and managed for you.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-accent-foreground/80">
              <li>Website Design</li>
              <li>Website Hosting</li>
              <li>SEO Optimization</li>
              <li>Email Marketing</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-accent-foreground/80">
              <li>Help Center</li>
              <li>Contact Support</li>
              <li>Documentation</li>
              <li>Live Chat</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-accent-foreground/80">
              <li>hello@squaredigital.com</li>
              <li>1-800-SQUARE-1</li>
              <li>Monday - Friday, 9am - 6pm EST</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-accent-foreground/60">
            © 2024 Square Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};