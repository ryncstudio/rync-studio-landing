import { FadeIn } from "@/components/FadeIn";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Rync Studio transformed our outdated platform into a modern, high-converting masterpiece. The team's attention to detail is unmatched.",
    author: "Michael Ross",
    role: "CEO, FinTech Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    quote: "Working with Rync was seamless. They understood our vision immediately and delivered a product that exceeded our expectations.",
    author: "Elena Foster",
    role: "Marketing Director, LuxBrand",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
  },
  {
    quote: "The best development partner we've ever had. Their technical expertise and creative direction are a powerful combination.",
    author: "David Kim",
    role: "Founder, StartupX",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative bg-background border-t border-border">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <FadeIn>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Trusted by <span className="text-muted-foreground">Innovators.</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <FadeIn key={index} delay={0.2 + (index * 0.1)} className={index === 1 ? "md:-translate-y-8" : ""}>
              <div className="bg-card p-10 rounded-2xl border border-border h-full flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative group">
                
                {/* Large Quote Icon */}
                <Quote className="absolute top-8 right-8 w-16 h-16 text-secondary/50 dark:text-secondary/10 group-hover:text-primary/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-orange-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-lg font-medium text-foreground leading-relaxed mb-8">
                    "{item.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 border-t border-border pt-6 relative z-10">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary border border-border">
                    <img 
                      src={item.image} 
                      alt={item.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-base">{item.author}</h4>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
