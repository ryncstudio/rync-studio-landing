import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/FadeIn";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary based on complexity. A standard landing page might take 2-3 weeks, while a complex web application could take 3-6 months. We provide a detailed timeline during our discovery phase.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer both project-based fixed pricing and retainer models. Our transparent pricing packages (Starter, Growth, Enterprise) cover most needs, but we also create custom quotes for unique requirements.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely. We offer ongoing maintenance packages to ensure your digital product remains secure, up-to-date, and optimized. We don't just build and leave; we partner for the long haul.",
  },
  {
    question: "What technologies do you use?",
    answer: "We specialize in modern stacks like React, Next.js, TypeScript, and Tailwind CSS for frontend, and Node.js, Python, or Go for backend services. We choose the best tool for your specific business goals.",
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Yes! We love modernizing legacy platforms. We'll audit your current site, identify pain points, and completely overhaul the UI/UX and codebase for better performance and conversion.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-32 relative bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">Common Questions</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground text-xl">
              Everything you need to know about working with us.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-border rounded-lg px-6 bg-white dark:bg-[#202020] data-[state=open]:border-primary transition-colors"
              >
                <AccordionTrigger className="text-lg font-bold text-foreground py-6 hover:no-underline hover:text-primary transition-colors text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
