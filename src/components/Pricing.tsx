import { Check } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: ["Basic expense tracking", "Monthly reports", "Mobile app access"],
  },
  {
    name: "Pro",
    price: "$30",
    description: "Best for professionals",
    features: ["Advanced analytics", "Custom categories", "Priority support", "Investment tracking"],
  },
  {
    name: "Enterprise",
    price: "$100",
    description: "For large organizations",
    features: ["Custom integration", "Team collaboration", "Dedicated manager", "API access", "Custom reports"],
  },
];

export const Pricing = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border-2 border-accent rounded-lg p-8 hover:border-primary/20 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};