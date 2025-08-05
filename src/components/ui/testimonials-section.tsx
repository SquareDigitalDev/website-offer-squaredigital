import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Square Digital made what felt impossible, effortless. Their team not only redesigned our booking experience but streamlined backend operations so our staff could spend more time delighting customers—not wrangling tech. We've seen a 35% boost in repeat bookings already.",
      name: "Joanne",
      business: "Life Maid Easy",
      role: "Founder"
    },
    {
      id: 2,
      quote: "Working with Square Digital was like plugging a high-performance engine into our marketing stack. Their strategic clarity and flawless execution on our web funnel lifted qualified leads by 60% in under two months. They get both the big picture and the gritty details.",
      name: "Jordan", 
      business: "Stanzack Consulting",
      role: "Principal Consultant"
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