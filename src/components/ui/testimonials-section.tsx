import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Square Digital transformed our online presence completely. Their expertise in Shopify development helped us increase our conversion rate by 40% within the first quarter.",
      name: "Sarah Johnson",
      business: "Bloom & Co.",
      role: "CEO"
    },
    {
      id: 2,
      quote: "The team's attention to detail and understanding of our B2B needs was exceptional. They created a seamless experience that our wholesale customers love.",
      name: "Michael Chen", 
      business: "TechFlow Solutions",
      role: "Managing Director"
    },
    {
      id: 3,
      quote: "Working with Square Digital was a game-changer for our retail operations. The POS integration they built unified our online and in-store experience perfectly.",
      name: "Emma Rodriguez",
      business: "Urban Style",
      role: "Operations Manager"
    },
    {
      id: 4,
      quote: "Their strategic approach to ecommerce optimization delivered results beyond our expectations. We saw a 60% increase in revenue within six months.",
      name: "David Thompson",
      business: "Harvest Kitchen",
      role: "Founder"
    },
    {
      id: 5,
      quote: "The migration to Shopify was seamless and the ongoing support has been outstanding. Square Digital truly understands ecommerce at every level.",
      name: "Lisa Park",
      business: "Artisan Crafts Co.",
      role: "Co-Founder"
    }
  ];

  return (
    <section id="testimonials" className="py-16 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped succeed
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                <Card className="h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <Quote className="w-8 h-8 text-primary mb-4 flex-shrink-0" />
                    <blockquote className="text-lg text-foreground mb-6 flex-grow leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="mt-auto">
                      <div className="font-semibold text-foreground text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonial.role}, {testimonial.business}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};