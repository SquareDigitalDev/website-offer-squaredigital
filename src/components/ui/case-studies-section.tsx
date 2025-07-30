import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const CaseStudiesSection = () => {
  const websiteMockups = [
    {
      id: "simon-babin-carpentry",
      title: "Simon Babin Carpentry",
      description: "Built a clean, modern site for Simon Babin Carpentry to showcase projects and convert premium leads.",
      image: "/lovable-uploads/4760c027-811a-45a8-87b1-f288a4f00001.png",
      cta: "View Live Site",
      category: "Carpentry",
      link: "https://simonbabincarpentry.ca/"
    },
    {
      id: "just-move-vancouver", 
      title: "Just Move Vancouver",
      description: "Created a clean, responsive site for Just Move Vancouver that showcases service quality and boosts leads.",
      image: "/lovable-uploads/d2392eb9-0aac-4add-9143-4b611a9f5a06.png",
      cta: "View Live Site",
      category: "Moving Services",
      link: "https://justmovevancouver.ca/"
    },
    {
      id: "homes-with-karen",
      title: "Homes With Karen", 
      description: "Crafted a sleek, client-first site for Homes With Karen to showcase listings and convert local buyer/leads",
      image: "/lovable-uploads/f9e56695-2c48-42d9-804c-c4ccacea137a.png",
      cta: "View Live Site",
      category: "Real Estate",
      link: "https://homeswithkaren.ca/"
    },
    {
      id: "imagine-hot-yoga",
      title: "Imagine Hot Yoga",
      description: "Created a conversion-focused site for Imagine Hot Yoga to streamline class signups and grow their member base",
      image: "/lovable-uploads/76aeb0cb-2830-435f-8b91-b0b2b9fb4a5f.png",
      cta: "View Live Site",
      category: "Wellness",
      link: "https://imaginehotyogawellness.com/"
    }
  ];

  return (
    <section id="case-studies" className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            Smart, Effective Websites for Business Operators Who Don't Have Time to Waste. <span className="text-primary">We'll Handle It.</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <Badge variant="default" className="text-lg px-6 py-2 animate-pulse bg-primary text-primary-foreground">
              LIMITED TIME OFFER
            </Badge>
            <div className="text-lg font-semibold text-muted-foreground">
              Deadline: August 8th, 2025
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
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => window.open('https://www.squaredigital.com/portfolio/', '_blank')}
                >
                  See Portfolio
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => window.open('https://squaredigital.typeform.com/to/MlCmyZ5t?typeform-source=a0ca6f58-535c-4753-942d-13e5d2cec672.lovableproject.com', '_blank')}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};