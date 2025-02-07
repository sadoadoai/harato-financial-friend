import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Integrations } from "@/components/Integrations";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    console.log("Index page mounted");
    toast({
      title: "Welcome to Harato!",
      description: "Your personal AI financial advisor",
    });
  }, [toast]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <Features />
      <Testimonials />
      <Integrations />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;