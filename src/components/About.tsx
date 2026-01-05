import { FadeIn } from "@/components/FadeIn";
import { CheckCircle2, Trophy, Users, Zap, Globe, Heart } from "lucide-react";
import { projects } from "@/data/projects";

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-20 max-w-2xl">
          <FadeIn>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground leading-[1.1]">
              We bridge the gap between <span className="text-primary">imagination</span> and reality.
            </h2>
          </FadeIn>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">

          {/* 1. Large Mission Card (Span 2x2) */}
          <div className="md:col-span-2 md:row-span-2">
            <FadeIn className="h-full">
              <div className="bg-card border border-border p-10 rounded-2xl h-full flex flex-col justify-between hover:border-primary/30 transition-colors shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-primary mb-8">
                    <Heart className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-foreground mb-4">Our Philosophy</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Founded in 2025, Rync Studio started with a simple mission: to build digital products that feel alive. We aren't just developers or designers; we are digital architects obsessed with quality.
                    <br /><br />
                    We believe in "Craft over Code" — every line we write and every pixel we push serves a greater purpose.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 2. Stat Card: Years (Span 1x1) */}
          <div className="md:col-span-1">
            <FadeIn delay={0.1} className="h-full">
              <div className="bg-card border border-border p-8 rounded-2xl h-full flex flex-col justify-center hover:border-primary/30 transition-colors shadow-sm group">
                <div className="flex justify-between items-start mb-4">
                  <Trophy className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Since 2025</span>
                </div>
                <div className="text-5xl font-bold text-foreground font-display">6+</div>
                <p className="text-sm text-muted-foreground font-medium mt-1">Years Experience</p>
              </div>
            </FadeIn>
          </div>

          {/* 3. Stat Card: Projects (Span 1x1) */}
          <div className="md:col-span-1">
            <FadeIn delay={0.2} className="h-full">
              <div className="bg-card border border-border p-8 rounded-2xl h-full flex flex-col justify-center hover:border-primary/30 transition-colors shadow-sm group">
                <div className="flex justify-between items-start mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Delivered</span>
                </div>
                <div className="text-5xl font-bold text-foreground font-display">{projects.length}+</div>
                <p className="text-sm text-muted-foreground font-medium mt-1">Successful Projects</p>
              </div>
            </FadeIn>
          </div>

          {/* 4. Global/Visual Card (Span 2x1) */}
          <div className="md:col-span-2">
            <FadeIn delay={0.3} className="h-full">
              <div className="bg-primary/5 border border-border p-8 rounded-2xl h-full flex flex-col md:flex-row items-center justify-between gap-8 hover:border-primary/30 transition-colors shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Global Reach</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Serving clients across 15+ countries, from startups to Fortune 500s.
                  </p>
                </div>
                {/* Visual Representation of connection */}
                <div className="flex -space-x-4 relative z-10">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-secondary flex items-center justify-center text-xs font-bold text-foreground">
                      C{i}
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-background bg-primary text-white flex items-center justify-center text-xs font-bold">
                    +100
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
