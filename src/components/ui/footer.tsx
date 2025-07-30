export const Footer = () => {
  return <footer className="bg-accent text-accent-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/lovable-uploads/ae351bce-447d-4757-95e3-bb8693209b2f.png" alt="Square Digital Logo" className="h-6 w-auto" />
            </div>
            <p className="text-accent-foreground/80 text-sm">
              Professional websites for local businesses. Built, hosted, and managed for you.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-accent-foreground/80">
              <li>Website Design</li>
              <li>Social Media and Paid Marketing</li>
              <li>SEO Optimization</li>
              <li>Email Marketing</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-accent-foreground/80">
              <li>30 Day Guarantee </li>
              
              
              
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-accent-foreground/80">
              <li>hello@squaredigital.com</li>
              
              <li>Monday - Friday, 9am - 6pm PST</li>
              <li>Vancouver, Canada</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-accent-foreground/60">© 2025 Square Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};