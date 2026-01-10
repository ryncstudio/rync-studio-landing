import { FadeIn } from "@/components/FadeIn";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">
              Trusted by businesses in Cebu and beyond
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center opacity-60">
              {/* Client logos - using project images as placeholders */}
              <div className="flex items-center justify-center h-16">
                <div className="text-2xl font-bold text-foreground/40">PorbEduAksyon</div>
              </div>
              <div className="flex items-center justify-center h-16">
                <div className="text-2xl font-bold text-foreground/40">PawVita</div>
              </div>
              <div className="flex items-center justify-center h-16">
                <div className="text-2xl font-bold text-foreground/40">Owen & Associates</div>
              </div>
              <div className="flex items-center justify-center h-16">
                <div className="text-2xl font-bold text-foreground/40">Rod Martin</div>
              </div>
              <div className="flex items-center justify-center h-16 col-span-2 md:col-span-1">
                <div className="text-2xl font-bold text-foreground/40">Creators Value</div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>5+ Successful Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>100% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Based in Cebu City</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
