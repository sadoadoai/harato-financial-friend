import { Wallet, Target, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Smart Expense Tracking",
    description: "Automatically categorize and track all your expenses in real-time with AI-powered insights.",
  },
  {
    icon: Target,
    title: "Personalized Goals",
    description: "Set and achieve your financial goals with customized plans and progress tracking.",
  },
  {
    icon: TrendingUp,
    title: "Investment Guidance",
    description: "Receive AI-driven recommendations for safe investments based on your risk profile.",
  },
];

export const Benefits = () => {
  return (
    <div className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Harato?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the power of AI-driven financial management that adapts to your needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};