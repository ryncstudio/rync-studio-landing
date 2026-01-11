import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import porbEduAksyonLogo from "@/assets/logos/porbeduaksyon-logo.png";
import owenAssociatesLogo from "@/assets/logos/owen-associates-logo.png";
import rodMartinLogo from "@/assets/logos/rod-martin-logo.png";

interface Logo {
    name: string;
    image: string;
    alt: string;
    href: string;
    ariaLabel: string;
}

const logos: Logo[] = [
    {
        name: "Rod Martin",
        image: rodMartinLogo,
        alt: "Rod Martin",
        href: "/work/rod-martin",
        ariaLabel: "View Rod Martin case study"
    },
    {
        name: "Owen & Associates",
        image: owenAssociatesLogo,
        alt: "Owen & Associates",
        href: "/work/owen-associates",
        ariaLabel: "View Owen & Associates case study"
    },
    {
        name: "PorbEduAksyon",
        image: porbEduAksyonLogo,
        alt: "PorbEduAksyon",
        href: "/work/porbeduaksyon",
        ariaLabel: "View PorbEduAksyon case study"
    },
];

export default function LogoStripMarquee() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check for reduced motion preference
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Duplicate logos for seamless loop
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section
            aria-label="Trusted by brands"
            className="w-full py-12 overflow-hidden"
        >
            <div className="container mx-auto px-6">
                {/* Glassmorphism Container */}
                <div className="max-w-6xl mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-[16px] backdrop-saturate-[1.1] border border-white/25 dark:border-white/15 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">

                    {/* Caption */}
                    <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
                        Trusted by businesses in PH and abroad
                    </p>

                    {/* Marquee Container */}
                    <div className="relative overflow-hidden">
                        <ul
                            role="list"
                            className={cn(
                                "flex items-center gap-12",
                                !prefersReducedMotion && "marquee-track"
                            )}
                        >
                            {duplicatedLogos.map((logo, index) => (
                                <li
                                    key={`${logo.name}-${index}`}
                                    className="flex-shrink-0"
                                >
                                    <a
                                        href={logo.href}
                                        aria-label={logo.ariaLabel}
                                        className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 rounded-lg transition-all duration-300"
                                        tabIndex={index >= logos.length ? -1 : 0} // Only first set is tabbable
                                    >
                                        <img
                                            src={logo.image}
                                            alt={logo.alt}
                                            className="h-12 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                            loading="eager"
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          animation: marquee 14s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        /* Disable marquee for reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
            will-change: auto !important;
          }
        }
      `}</style>
        </section>
    );
}
