import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://i.pravatar.cc/150?img=1",
    content: "Harato has completely transformed how I manage my business finances. The AI insights are incredibly helpful.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Freelancer",
    image: "https://i.pravatar.cc/150?img=2",
    content: "The automated expense tracking saves me hours every month. Best investment I've made for my financial health.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Professional",
    image: "https://i.pravatar.cc/150?img=3",
    content: "I love how Harato helps me set and achieve my financial goals. The interface is intuitive and user-friendly.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their financial lives
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.image} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};