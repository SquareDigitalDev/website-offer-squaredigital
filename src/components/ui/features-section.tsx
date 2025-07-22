import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    "Custom Square Digital Website ($5000 value)",
    "Dedicated Project Manager",
    "Custom Lead Forms",
    "Booking Integration",
    "Website Hosting + Security",
    "Uptime Monitoring",
    "30 Day Money Back Guarantee"
  ];

  return (
    <section className="py-16 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          All Packages Include:
        </h2>
        
        <Card className="p-8">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};