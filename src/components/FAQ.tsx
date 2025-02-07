import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Harato protect my financial data?",
    answer: "We use bank-level encryption and security measures to ensure your data is always protected. Our systems are regularly audited and comply with all financial regulations.",
  },
  {
    question: "Can I connect multiple bank accounts?",
    answer: "Yes! Harato supports connections with all major banks and financial institutions. You can connect and manage multiple accounts from a single dashboard.",
  },
  {
    question: "How accurate are the AI predictions?",
    answer: "Our AI models are trained on vast amounts of financial data and are continuously improved. The predictions have shown 95%+ accuracy in testing.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Harato
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};