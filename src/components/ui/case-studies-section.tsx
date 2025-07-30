import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: "dtc",
      title: "DTC",
      description: "From migrations to Shopify, to full redesigns and ongoing optimization, we design, build, and optimize ecommerce websites on Shopify for brands selling direct-to-consumer (DTC) online.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      cta: "Read Our DTC Success Story"
    },
    {
      id: "b2b", 
      title: "B2B",
      description: "We unlock business-to-business (B2B) commerce on Shopify, enabling brands to shape the right experience for every customer, including trade, wholesale, and more.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba02777811?w=600&h=400&fit=crop",
      cta: "Explore Our B2B Solutions"
    },
    {
      id: "retail",
      title: "RETAIL / POS", 
      description: "We build seamless integrations for Shopify Point-of-Sale (POS), empowering brands to unify online and in-store sales, inventory, and customer data.",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=600&h=400&fit=crop",
      cta: "See Our Retail Tech in Action"
    }
  ];

  return (
    <section id="case-studies" className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses like yours succeed with custom website solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image}
                  alt={`${study.title} case study example`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {study.description}
                </p>
                <Button variant="outline" className="w-full">
                  {study.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};