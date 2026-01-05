import { Palette, Layout, Code, Video, Instagram, Handshake, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const services = [
  {
    icon: Palette,
    title: "Brand Identity & Graphic Design",
    description: "Logos, visual systems, and brand assets designed for clarity and consistency. We craft identities that resonate and endure.",
  },
  {
    icon: Layout,
    title: "UI/UX & Digital Design",
    description: "Interfaces and experiences designed around real users. Every interaction is intentional, intuitive, and impactful.",
  },
  {
    icon: Code,
    title: "Web & Software Development",
    description: "Modern websites and custom digital solutions built with cutting-edge technology. Scalable, secure, and performance-driven.",
  },
  {
    icon: Video,
    title: "Video & Motion Content",
    description: "Reels, short-form videos, and branded motion content that captivate. Dynamic storytelling designed for the digital age.",
  },
  {
    icon: Instagram,
    title: "Social Media Visual Design",
    description: "Posters and visual assets for Instagram, TikTok, and digital platforms. Stand out in the feed with scroll-stopping designs.",
  },
  {
    icon: Handshake,
    title: "Creative Partnership",
    description: "Ongoing design, content, and technical support. Your dedicated creative team, ready when you need us.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative bg-secondary/10 dark:bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground leading-tight">
                Comprehensive <br />
                <span className="text-muted-foreground">Digital Solutions.</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} direction="left">
            <p className="text-muted-foreground text-lg max-w-md">
              From concept to code, we provide end-to-end services to bring your vision to life.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={0.05 * index} className="h-full">
              <div className="group bg-card border border-border p-8 rounded-2xl h-full flex flex-col justify-between hover:border-primary/50 hover:shadow-lg transition-all duration-200 relative overflow-hidden will-change-transform">

                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-secondary/50 dark:bg-secondary/20 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-200 border border-primary/10 will-change-transform">
                    <service.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 pt-8 border-t border-border/50 flex items-center text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200 will-change-transform" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
