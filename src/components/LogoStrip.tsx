import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import porbEduAksyonLogo from "@/assets/logos/porbeduaksyon-logo.png";
import owenAssociatesLogo from "@/assets/logos/owen-associates-logo.png";
import rodMartinLogo from "@/assets/logos/rod-martin-logo.png";
import creatorsValueLogo from "@/assets/logos/creators-value-logo.png";
import creatorsValueLogoDark from "@/assets/logos/creators-value-logo-dark.png";

interface Logo {
    name: string;
    image: string;
    imageDark?: string;
    alt: string;
    href: string;
    ariaLabel: string;
}

const logos: Logo[] = [
    {
        name: "Rod Martin",
        image: rodMartinLogo,
        alt: "Rod Martin",
        href: "https://www.rodmartinartist.com",
        ariaLabel: "Visit Rod Martin's website"
    },
    {
        name: "Owen & Associates",
        image: owenAssociatesLogo,
        alt: "Owen & Associates",
        href: "https://owenandassoc.com",
        ariaLabel: "Visit Owen & Associates website"
    },
    {
        name: "Creators Value",
        image: creatorsValueLogo,
        imageDark: creatorsValueLogoDark,
        alt: "Creators Value",
        href: "https://www.creatorsvalue.com",
        ariaLabel: "Visit Creators Value website"
    },
    {
        name: "PorbEduAksyon",
        image: porbEduAksyonLogo,
        alt: "PorbEduAksyon",
        href: "/work/porbeduaksyon",
        ariaLabel: "View PorbEduAksyon case study"
    },
];

export default function LogoStrip() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2,
                rootMargin: "0px"
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isVisible]);

    return (
        <section
            ref={sectionRef}
            aria-label="Trusted by brands"
            className="w-full py-16"
        >
            <div className="container mx-auto px-6">
                {/* Glassmorphism Container */}
                <div className="max-w-4xl mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-[16px] backdrop-saturate-[1.1] border border-white/25 dark:border-white/15 rounded-2xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">

                    {/* Caption */}
                    <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-10">
                        Trusted by businesses in PH and abroad
                    </p>

                    {/* Logo Grid - Centered 3 columns */}
                    <ul
                        role="list"
                        className="flex items-center justify-center gap-12 md:gap-16 flex-wrap"
                    >
                        {logos.map((logo, index) => (
                            <li
                                key={logo.name}
                                className={cn(
                                    "opacity-0",
                                    isVisible && "logo-item-reveal"
                                )}
                                style={{
                                    animationDelay: isVisible ? `${index * 150}ms` : "0ms"
                                }}
                            >
                                <a
                                    href={logo.href}
                                    aria-label={logo.ariaLabel}
                                    target={logo.href.startsWith('http') ? '_blank' : undefined}
                                    rel={logo.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 rounded-lg transition-all duration-300"
                                >
                                    <img
                                        src={logo.image}
                                        alt={logo.alt}
                                        className={cn(
                                            "h-14 w-auto object-contain opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300",
                                            logo.imageDark && "dark:hidden"
                                        )}
                                        loading="eager"
                                    />
                                    {logo.imageDark && (
                                        <img
                                            src={logo.imageDark}
                                            alt={logo.alt}
                                            className="hidden dark:block h-14 w-auto object-contain opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                                            loading="eager"
                                        />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo-item-reveal {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        /* Disable animations for reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .logo-item-reveal {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
        </section>
    );
}
