import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
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
    </div>
  );
};

export default Index;