import { CreditCard, Target, ChartLine, Bot } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: CreditCard,
    title: "Expense Tracking",
    description: "Automatically categorize and monitor all your spending in real-time",
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Set and track personalized financial milestones",
  },
  {
    icon: ChartLine,
    title: "Investment Analysis",
    description: "Get detailed insights into your investment portfolio",
  },
  {
    icon: Bot,
    title: "AI Recommendations",
    description: "Receive smart suggestions based on your financial behavior",
  },
];

export const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to take control of your finances
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-accent hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <feature.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/dab9a6ab-0d97-4af1-81e0-f78d8b239a1e.png"
              alt="Features illustration"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};