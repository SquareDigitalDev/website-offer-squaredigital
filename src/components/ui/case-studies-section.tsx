import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const CaseStudiesSection = () => {
  const websiteMockups = [
    {
      id: "cleaning-service",
      title: "Exterior Cleaning Company",
      description: "Modern, professional website for Yolo and Solano County's premier exterior cleaning service",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      cta: "View Live Site",
      category: "Home Services"
    },
    {
      id: "junk-removal", 
      title: "Junk Removal & Demolition",
      description: "High-converting website for junk removal and demolition services with online booking",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      cta: "See Full Project",
      category: "Waste Management"
    },
    {
      id: "garage-doors",
      title: "Garage Door Services", 
      description: "Lead-generating website for South Bay's #1 rated garage door installation company",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      cta: "View Case Study",
      category: "Home Repair"
    },
    {
      id: "pressure-washing",
      title: "Pressure Washing Business",
      description: "Mobile-optimized website for Central Florida's highest quality exterior cleaning services",
      image: "https://images.unsplash.com/photo-1519389950473-47ba02777811?w=600&h=400&fit=crop",
      cta: "See Results",
      category: "Cleaning Services"
    }
  ];

  return (
    <section id="case-studies" className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            We Build Great-Looking, 
            <span className="text-primary"> Crazy-Effective</span> Home Service Websites.
            <span className="block mt-2">Let's Build Yours Next!</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <Badge variant="destructive" className="text-lg px-6 py-2 animate-pulse">
              LIMITED TIME OFFER
            </Badge>
            <div className="text-lg font-semibold text-muted-foreground">
              Deadline: March 31st, 2025
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See real examples of high-converting websites we've built for home service businesses just like yours
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {websiteMockups.map((mockup) => (
            <Card key={mockup.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={mockup.image}
                  alt={`${mockup.title} website mockup`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="text-xs">
                    {mockup.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {mockup.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {mockup.description}
                </p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {mockup.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="text-lg px-8 py-6">
            Get Your Custom Website Quote
          </Button>
        </div>
      </div>
    </section>
  );
};