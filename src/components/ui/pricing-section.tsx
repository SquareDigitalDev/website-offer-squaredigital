import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$125",
      period: "/month",
      description: "A Fully Managed Site",
      features: [
        "Up to 5 professionally designed pages (Home, About, Services, Contact, etc.)",
        "SEO-ready layout with optimized headings, metadata, and structure",
        "Mobile-first design for modern browsing behavior",
        "Built-in contact forms and lead capture",
        "Unlimited edits & update requests (no extra charge)",
        "Blazing-fast hosting on our secure cloud infrastructure"
      ],
      popular: false
    },
    {
      name: "Deluxe",
      price: "$250",
      period: "/month*",
      description: "Everything in Starter +",
      features: [
        "Up to 10 custom-designed pages",
        "Automated SMS or email responders for new inquiries",
        "Lead magnet setup (e.g., ebook, checklist, quiz)",
        "Basic CRM integration (HubSpot, Mailchimp, etc.)",
        "Priority turnaround on update requests"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "$500",
      period: "/month*",
      description: "Everything in Deluxe +",
      features: [
        "Unlimited Website",
        "Advanced Email + SMS Automations",
        "Premium Support",
        "First Of Line Priority"
      ],
      popular: true,
      badge: "Best Value"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
          Choose Your Plan
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          All plans include everything you need to succeed online. No hidden fees, no surprises.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  {plan.badge}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-accent">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-8">
          * Plans are billed monthly. Cancel anytime with 30 days notice.
        </p>
      </div>
    </section>
  );
};