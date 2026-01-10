import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    projectPrice: "$1,950",
    projectPricePHP: "₱110,000",
    retainerPrice: "$800",
    retainerPricePHP: "₱45,000",
    period: "project",
    retainerPeriod: "month",
    description: "Launch your professional presence fast. Perfect for startups and small businesses.",
    features: [
      "5-Page Responsive Website",
      "Mobile-Optimized Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "1 Round of Revisions",
      "2-Week Delivery",
      "30-Day Post-Launch Support"
    ],
    paymentPlans: true,
  },
  {
    name: "Growth",
    projectPrice: "$4,500",
    projectPricePHP: "₱255,000",
    retainerPrice: "$1,500",
    retainerPricePHP: "₱85,000",
    period: "project",
    retainerPeriod: "month",
    description: "Scale with systems that convert. Ideal for growing businesses ready to scale.",
    features: [
      "10-15 Page Website with CMS",
      "Advanced UI/UX + Custom Animations",
      "Complete Brand Identity System",
      "SEO Optimization + Google Analytics",
      "2 Short-Form Videos/Reels",
      "Social Media Design Package (20 posts)",
      "API Integrations",
      "3 Months Priority Support"
    ],
    highlight: true,
    paymentPlans: true,
  },
  {
    name: "Enterprise",
    projectPrice: "Custom",
    projectPricePHP: "Custom",
    retainerPrice: "$3,000+",
    retainerPricePHP: "₱170,000+",
    period: "tailored",
    retainerPeriod: "month",
    description: "Enterprise-grade digital transformation for established organizations.",
    features: [
      "Full Product Design + Development",
      "Complex Web Applications",
      "Dedicated Creative Team",
      "Unlimited Social Media Assets",
      "Video Production + Motion Graphics",
      "Performance SLAs (LCP <2.5s, 99.9% uptime)",
      "Ongoing Creative Partnership",
      "24/7 Support + Maintenance Option"
    ],
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"project" | "retainer">("project");

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-32 relative bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <FadeIn>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Invest in your <span className="text-muted-foreground">Growth.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
              <span className={`text-xs sm:text-sm font-bold ${billing === "project" ? "text-foreground" : "text-muted-foreground"} transition-colors`}>Project Based</span>
              <button
                onClick={() => setBilling(billing === "project" ? "retainer" : "project")}
                className="w-14 h-8 rounded-full bg-border p-1 relative transition-colors hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label="Toggle billing type"
              >
                <div className={`w-6 h-6 rounded-full bg-primary shadow-sm transition-transform duration-300 ${billing === "retainer" ? "translate-x-6" : ""}`}></div>
              </button>
              <span className={`text-xs sm:text-sm font-bold ${billing === "retainer" ? "text-foreground" : "text-muted-foreground"} transition-colors`}>Retainer</span>
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={0.2 + (index * 0.1)} className="h-full">
              <div
                className={`p-8 rounded-3xl border flex flex-col h-full relative transition-all duration-300 group ${plan.highlight
                  ? "bg-card border-primary shadow-2xl shadow-primary/10 scale-105 z-10"
                  : "bg-background border-border hover:border-primary/30 hover:shadow-lg"
                  }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-2xl rounded-tr-2xl text-xs font-bold flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-current" /> Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-foreground font-display tracking-tight">
                        {billing === "project" ? plan.projectPrice : plan.retainerPrice}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        /{billing === "project" ? plan.period : plan.retainerPeriod}
                      </span>
                    </div>
                    {plan.projectPrice !== "Custom" && (
                      <div className="text-sm text-muted-foreground mt-1">
                        {billing === "project" ? plan.projectPricePHP : plan.retainerPricePHP}
                      </div>
                    )}
                    {plan.paymentPlans && (
                      <div className="text-xs text-primary font-bold mt-2">
                        💳 Payment plans available
                      </div>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="w-full h-px bg-border mb-8"></div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.highlight ? "bg-primary text-white" : "bg-secondary text-primary"}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className={`w-full h-12 rounded-xl font-bold text-base shadow-sm transition-all ${plan.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80 border border-transparent"
                    }`}
                >
                  Get Started
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
