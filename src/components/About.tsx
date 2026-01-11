import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Rocket, Zap, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">About Rync Studio</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground leading-tight">
              We build digital experiences that <span className="text-primary">drive real results</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A Cebu-based digital studio specializing in fast, performance-driven websites and digital solutions for growing businesses.
            </p>
          </FadeIn>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Who We Are */}
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Who We Are</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rync Studio is a digital design and development studio founded in 2025, built on 6+ years of combined experience. We're based in Cebu, Philippines, and we work with businesses locally and internationally who need websites and digital systems that actually perform.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're not a large agency with layers of bureaucracy. We're a focused team that ships fast, measures everything, and delivers clarity. Whether you're launching your first website or scaling an existing platform, we build solutions that grow with your business.
              </p>
            </div>
          </FadeIn>

          {/* What We Do */}
          <FadeIn delay={0.3}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">What We Do</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground">Fast Launches</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    From 2-week starter sites to custom builds, we ship production-ready websites that look professional and load fast.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground">Performance-Driven</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Every site we build meets Core Web Vitals standards. Fast page loads, smooth interactions, and mobile-first design.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground">Results-Focused</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Clear messaging, conversion-ready pages, and analytics you can act on. Every design decision drives business outcomes.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Our Approach */}
          <FadeIn delay={0.4}>
            <div className="bg-secondary/10 border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Our Approach</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in <strong className="text-foreground">Craft over Code</strong>. Every pixel and every line of code serves a business outcome—whether that's more leads, faster launches, or systems that scale without breaking.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We work transparently with clear timelines, fixed pricing, and regular updates. No hidden fees, no scope creep, no surprises. You'll know exactly what you're getting and when you'll get it.
              </p>
            </div>
          </FadeIn>

          {/* Why Choose Rync */}
          <FadeIn delay={0.5}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Why Choose Rync Studio</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Speed & Efficiency</p>
                    <p className="text-sm text-muted-foreground">Ship in weeks, not months. We move fast without cutting corners.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Performance Standards</p>
                    <p className="text-sm text-muted-foreground">Every site meets Core Web Vitals: LCP &lt;2.5s, CLS &lt;0.1.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Clear Communication</p>
                    <p className="text-sm text-muted-foreground">Regular updates, transparent pricing, no jargon. You'll always know where we stand.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Scalable Solutions</p>
                    <p className="text-sm text-muted-foreground">Built to grow with you. From starter sites to custom platforms.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.6}>
            <div className="text-center pt-8">
              <Button
                size="lg"
                className="rounded-xl font-bold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Ready to build something great? Let's talk about your project.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
