import abstractImg from "@/assets/images/abstract-1.jpg";
import rodMartinImg from "@/assets/images/rod-martin.png";
import owenAssociatesImg from "@/assets/images/owen-associates.png";
import creatorsValueImg from "@/assets/images/creators-value.png";
import porbEduAksyonImg from "@/assets/images/porbeduaksyon.png";
import pawVitaImg from "@/assets/images/pawvita.png";
import southshoreImg from "@/assets/images/southshore-coming-soon.svg";
import kathrynWilkingImg from "@/assets/images/kathryn-wilking.png";

export interface Project {
    category: string;
    title: string;
    description: string;
    image: string;
    type: "client" | "personal";
    sector: string;
    metrics?: string[];
    disclaimer?: boolean;
    slug?: string;
    year?: string;
    url?: string;
    status?: "ongoing" | "completed";
    role?: "designer" | "developer" | "full-service";
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
        category: "Personal Project",
        title: "PorbEduAksyon",
        description: "Accessible online learning platform empowering marginalized citizens with skills and opportunities—built with inclusivity and performance as core principles.",
        image: porbEduAksyonImg,
        type: "personal",
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
        category: "Personal Project",
        title: "PawVita",
        description: "Premium pet essentials and trusted veterinary care—delivered through a friction-free e-commerce experience that prioritizes product discovery and checkout speed.",
        image: pawVitaImg,
        type: "personal",
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
        title: "Southshore Tours",
        description: "Travel and tour booking platform showcasing Cebu's best destinations with seamless user experience and stunning visual storytelling.",
        image: southshoreImg,
        type: "client",
        sector: "Travel & Tourism",
        metrics: [
            "Modern booking interface",
            "Mobile-optimized design",
            "Fast page loads"
        ],
        disclaimer: false,
        slug: "southshore-tours",
        year: "2026",
        url: "https://www.southshoretours.ph",
        status: "ongoing"
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
        url: "https://owenandassoc.com",
        role: "designer"
    },
    {
        category: "Client Case Study",
        title: "Kathryn Wilking",
        description: "Vibrant feng shui design consultancy brand identity and website showcasing holistic design philosophy with engaging visual storytelling.",
        image: kathrynWilkingImg,
        type: "client",
        sector: "Design Consultancy",
        metrics: [
            "Brand identity refresh",
            "Visual storytelling ↑",
            "Engagement optimized"
        ],
        disclaimer: false,
        slug: "kathryn-wilking",
        year: "2025",
        url: "https://www.kathrynwilking.com",
        role: "designer"
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
        url: "https://www.creatorsvalue.com",
        role: "designer"
    },
];
