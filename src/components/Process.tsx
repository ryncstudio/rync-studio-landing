import { FadeIn } from "@/components/FadeIn";
import { Search, Lightbulb, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We dive deep into your business goals, target audience, and technical requirements to build a solid foundation.",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description: "We craft a tailored roadmap and digital strategy to ensure every feature serves a clear purpose.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Our designers create stunning, intuitive interfaces that align with your brand identity and user needs.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "We build your product using modern, scalable technologies, ensuring performance and security.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "We handle the deployment, testing, and final polish to ensure a flawless go-live experience.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 relative overflow-hidden bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <FadeIn>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Workflow</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">Our Process</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground text-xl">
              From concept to launch, we follow a proven workflow to deliver excellence.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-border"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={0.2 + (index * 0.1)} className="relative">
                <div className="flex flex-col items-center text-center group">
                  {/* Icon Node */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-background border-4 border-border flex items-center justify-center mb-8 group-hover:border-primary transition-colors">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <step.icon className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-[#202020] p-8 rounded-lg w-full h-full border border-border hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
