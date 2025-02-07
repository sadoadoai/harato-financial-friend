import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Take Control of Your Financial Future with AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Your personal AI financial advisor that helps you track, plan, and grow your wealth with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Watch Demo
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center space-x-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">10k+</span>
              <span className="text-sm text-gray-600">Active Users</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">98%</span>
              <span className="text-sm text-gray-600">Satisfaction</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">24/7</span>
              <span className="text-sm text-gray-600">Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};