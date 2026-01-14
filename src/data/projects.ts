import abstractImg from "@/assets/images/abstract-1.jpg";
import rodMartinImg from "@/assets/images/rod-martin.png";
import owenAssociatesImg from "@/assets/images/owen-associates.png";
import creatorsValueImg from "@/assets/images/creators-value.png";
import porbEduAksyonImg from "@/assets/images/porbeduaksyon.png";
import pawVitaImg from "@/assets/images/pawvita.png";

export interface Project {
    category: string;
    title: string;
    description: string;
    image: string;
    type: "client" | "in-house" | "concept" | "experiment";
    sector: string;
    metrics?: string[];
    disclaimer?: boolean;
    slug?: string;
    year?: string;
    url?: string;
}

export const projects: Project[] = [
    {
        category: "Client Case Study",
        title: "Rod Martin",
        description: "Performance-optimized artist portfolio that prioritizes visual storytelling and fast load times. Clean navigation and gallery-first design let Rod's work speak for itself.",
        image: rodMartinImg,
        type: "client",
        sector: "Creative Arts",
        metrics: [
            "Portfolio clarity ↑ (task success 9/10)",
            "Time-to-artwork ↓25%",
            "LCP ↓30% (3.2s → 2.2s)"
        ],
        disclaimer: false,
        slug: "rod-martin",
        year: "2025",
        url: "https://www.rodmartinartist.com"
    },

    {
        category: "In-house Product",
        title: "PorbEduAksyon",
        description: "Accessible online learning platform empowering marginalized citizens with skills and opportunities—built with inclusivity and performance as core principles.",
        image: porbEduAksyonImg,
        type: "in-house",
        sector: "Education",
        metrics: [
            "Course access speed ↓30%",
            "Inclusivity baseline (WCAG 2.1 AA)",
            "LCP ↓28% (3.5s → 2.5s)"
        ],
        disclaimer: false,
        slug: "porbeduaksyon",
        year: "2025"
    },
    {
        category: "In-house Product",
        title: "PawVita",
        description: "Premium pet essentials and trusted veterinary care—delivered through a friction-free e-commerce experience that prioritizes product discovery and checkout speed.",
        image: pawVitaImg,
        type: "in-house",
        sector: "Pet Care",
        metrics: [
            "Checkout friction ↓ (4→2 steps)",
            "Product discovery ↑ (search time ↓35%)",
            "LCP ↓30% (3.3s → 2.3s)"
        ],
        disclaimer: false,
        slug: "pawvita",
        year: "2025"
    },
    {
        category: "Client Case Study",
        title: "Owen & Associates",
        description: "Banking reimagined: clearer pathways to account signup and product discovery, with trust markers that reduce friction and build confidence.",
        image: owenAssociatesImg,
        type: "client",
        sector: "Fintech",
        metrics: [
            "LCP ↓35% (2.9s → 1.9s)",
            "Task success 8/10",
            "Pricing clarity ↑22%"
        ],
        disclaimer: false,
        slug: "owen-associates",
        year: "2025",
        url: "https://owenandassoc.com"
    },
    {
        category: "Client Case Study",
        title: "Creators Value",
        description: "Empower creators with streamlined onboarding and intuitive content discovery—reducing friction from signup to first publish.",
        image: creatorsValueImg,
        type: "client",
        sector: "Content Platform",
        metrics: [
            "Onboarding 5→3 steps",
            "Search time ↓28%",
            "LCP ↓32%"
        ],
        disclaimer: false,
        slug: "creators-value",
        year: "2025",
        url: "https://www.creatorsvalue.com"
    },
];
