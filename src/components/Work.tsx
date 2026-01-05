import abstractImg from "@/assets/images/abstract-1.jpg";
import rodMartinImg from "@/assets/images/rod-martin.png";
import owenAssociatesImg from "@/assets/images/owen-associates.png";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const projects = [
  {
    category: "Fintech",
    title: "Owen & Associates",
    description: "Banking reimagined for the digital age.",
    image: owenAssociatesImg,
  },
  {
    category: "Artist Portfolio",
    title: "Rod Martin",
    description: "Official digital presence for artist Rod Martin.",
    image: rodMartinImg,
  },
  {
    category: "E-Commerce",
    title: "Vogue Fashion",
    description: "Luxury headless storefront.",
    image: abstractImg,
  },
  {
    category: "Design System",
    title: "Orbit UI",
    description: "Enterprise component library.",
    image: abstractImg,
  },
  {
    category: "SaaS",
    title: "Metrics.io",
    description: "Real-time analytics dashboard.",
    image: abstractImg,
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 bg-background relative border-t border-slate-300 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Selected Work</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-foreground tracking-tight">
                Crafting <span className="text-slate-600 dark:text-slate-400">Digital Futures.</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} direction="left">
            <a href="#" className="flex items-center gap-2 text-foreground font-bold hover:text-primary transition-colors group text-lg border-b border-transparent hover:border-primary pb-1">
              View All Projects <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>

        {/* Uniform Grid Layout - Balanced & Symmetrical */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <FadeIn
              key={index}
              delay={0.2 + (index * 0.1)}
            >
              <div className="group relative block cursor-pointer">
                {/* Image Container - Fixed Aspect Ratio */}
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm dark:shadow-none transition-all duration-500 hover:shadow-lg aspect-[16/10]">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm text-black rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Content Below */}
                <div className="mt-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground border border-border px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed line-clamp-2">{project.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
