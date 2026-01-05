import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Play } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.jpg"; 
import { FadeIn } from "@/components/FadeIn";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-background">
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/30 border border-border/50 backdrop-blur-sm mb-8 hover:border-primary/30 transition-colors cursor-pointer group">
              <span className="flex h-2 w-2 rounded-full bg-primary relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              </span>
              <span className="text-sm font-medium text-foreground">v2.0 is live</span>
              <ChevronRight className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-foreground transition-colors" />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight text-foreground mb-8 leading-[0.95]">
              Engineering the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-600">Next Generation</span>
              <br className="hidden md:block" /> of Digital Products.
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              We help ambitious brands build high-performance websites, apps, and digital systems that scale with their vision.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" onClick={scrollToWork} className="rounded-full h-14 px-8 text-base font-bold bg-foreground text-background hover:bg-foreground/90 shadow-xl shadow-primary/10">
                View Our Work
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToContact} className="rounded-full h-14 px-8 text-base font-bold border-border bg-background/50 hover:bg-secondary/20 backdrop-blur-md">
                Start a Project <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="pt-12 mt-12 border-t border-border/50 w-full">
              <div className="grid grid-cols-3 divide-x divide-border/50 gap-2 md:gap-8 opacity-80 max-w-3xl mx-auto">
                <div className="text-center px-2">
                  <p className="text-2xl md:text-3xl font-display font-bold text-foreground">6+</p>
                  <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Years Exp.</p>
                </div>
                <div className="text-center px-2">
                  <p className="text-2xl md:text-3xl font-display font-bold text-foreground">1+</p>
                  <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Projects</p>
                </div>
                <div className="text-center px-2">
                  <p className="text-2xl md:text-3xl font-display font-bold text-foreground">100%</p>
                  <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Satisfaction</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>


      </div>
    </section>
  );
}
