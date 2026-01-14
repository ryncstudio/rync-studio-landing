import { ArrowUpRight, AlertCircle, TrendingDown, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { projects, type Project } from "@/data/projects";
import { useState } from "react";
import { cn } from "@/lib/utils";
import LogoStrip from "@/components/LogoStrip";

type FilterType = "all" | "client" | "in-house" | "concept" | "experiment";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.type === activeFilter;
  });

  const getBadgeColor = (type: Project["type"]) => {
    switch (type) {
      case "client":
        return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20";
      case "in-house":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
      case "concept":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
      case "experiment":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
    }
  };

  const getBadgeLabel = (type: Project["type"]) => {
    switch (type) {
      case "client":
        return "Client";
      case "in-house":
        return "In-house";
      case "concept":
        return "Concept";
      case "experiment":
        return "Experiment";
    }
  };

  return (
    <section id="work" className="py-32 bg-background relative border-t border-slate-300 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-foreground tracking-tight">
                Crafting <span className="text-slate-600 dark:text-slate-400">Digital Futures.</span>
              </h2>
            </FadeIn>
          </div>
        </div>

        {/* Filter Tabs */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { label: "All", value: "all" as FilterType },
              { label: "Client", value: "client" as FilterType },
              { label: "In-house", value: "in-house" as FilterType },
              { label: "Concept", value: "concept" as FilterType },
              { label: "Experiments", value: "experiment" as FilterType },
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  "px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300",
                  activeFilter === filter.value
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {filteredProjects.map((project, index) => (
            <FadeIn key={index} delay={0.2 + (index * 0.1)}>
              <div className="group relative block">
                {/* Disclaimer for Concept Projects */}
                {project.disclaimer && (
                  <div className="mb-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
                      <strong>Exploratory redesign</strong> to demonstrate approach; not affiliated with the original brand.
                    </p>
                  </div>
                )}

                <a
                  href={project.url || '#'}
                  target={project.url ? '_blank' : undefined}
                  rel={project.url ? 'noopener noreferrer' : undefined}
                  className="block cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm dark:shadow-none transition-all duration-500 hover:shadow-lg aspect-[16/10]">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.description}`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                      width="800"
                      height="500"
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
                    {/* Title and Badge */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 sm:gap-0 mb-2">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors break-words">
                        {project.title}
                      </h3>
                      <div className="flex gap-2 flex-wrap">
                        <span className={cn(
                          "text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border self-start sm:self-auto whitespace-nowrap",
                          getBadgeColor(project.type)
                        )}>
                          {getBadgeLabel(project.type)}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground border border-border px-3 py-1 rounded-full self-start sm:self-auto whitespace-nowrap">
                          {project.sector}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-base leading-relaxed mb-4 break-words">
                      {project.description}
                    </p>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm">
                      {project.url ? 'Visit website' : 'View process'} →
                    </span>
                  </div>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* Logo Strip */}
        <LogoStrip />
      </div>
    </section>
  );
}
