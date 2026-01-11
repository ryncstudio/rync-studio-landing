import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Team", href: "#team" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme } = useTheme();

  const lastScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll hide/show logic
  useEffect(() => {
    if (prefersReducedMotion) return;

    let ticking = false;
    const SCROLL_THRESHOLD = 100;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY.current && currentScrollY > SCROLL_THRESHOLD) {
            setIsHidden(true);
          } else if (currentScrollY < lastScrollY.current) {
            setIsHidden(false);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  // Active section highlighting
  useEffect(() => {
    const handleScrollForActive = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(`#${sectionId}`);
        }
      });
    };

    window.addEventListener("scroll", handleScrollForActive, { passive: true });
    handleScrollForActive();
    return () => window.removeEventListener("scroll", handleScrollForActive);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        toggleRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLinkClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[9999] w-full px-4 pt-4 transition-transform duration-300 ease-out",
        isHidden && "-translate-y-full"
      )}
      style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}
    >
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:font-bold"
      >
        Skip to main content
      </a>

      <div className="glass-nav rounded-2xl px-6 py-3 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/25 dark:border-white/15 backdrop-blur-[16px] backdrop-saturate-[1.1] bg-white/70 dark:bg-slate-900/70 max-w-5xl mx-auto">
        {/* Logo */}
        <a
          href="#home"
          onClick={scrollToTop}
          className="text-xl font-bold tracking-tighter flex items-center gap-2 text-foreground cursor-pointer group focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 rounded-lg flex-shrink-0"
          aria-label="Rync Studio Home"
        >
          <img
            src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
            alt="Rync Studio Logo"
            className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <span className="font-display hidden sm:inline">Rync Studio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleLinkClick(item.href)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
                activeSection === item.href
                  ? "text-primary bg-primary/10 dark:bg-primary/20"
                  : "text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-white/10 dark:hover:bg-white/5"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <ThemeToggle />
          <Button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer shadow-[0_2px_8px_rgba(5,38,89,0.3)] hover:shadow-[0_4px_12px_rgba(5,38,89,0.4)]"
          >
            Let's Build
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            ref={toggleRef}
            className="text-foreground p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
          >
            <div className="w-6 h-5 flex flex-col justify-center gap-1.5">
              <span
                className={cn(
                  "w-full h-0.5 bg-foreground rounded transition-all duration-300",
                  isOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "w-full h-0.5 bg-foreground rounded transition-all duration-300",
                  isOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "w-full h-0.5 bg-foreground rounded transition-all duration-300",
                  isOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        id="mobile-nav-menu"
        className={cn(
          "lg:hidden absolute top-full left-4 right-4 mt-4 glass rounded-2xl p-6 flex flex-col gap-2 border border-white/25 dark:border-white/15 backdrop-blur-[16px] backdrop-saturate-[1.1] bg-white/70 dark:bg-slate-900/70 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300",
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-base font-medium text-center py-3 rounded-xl cursor-pointer text-foreground hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            onClick={handleLinkClick(item.href)}
          >
            {item.name}
          </a>
        ))}
        <Button
          onClick={() => {
            setIsOpen(false);
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-full rounded-xl mt-2 font-bold cursor-pointer"
        >
          Let's Build
        </Button>
      </div>
    </nav>
  );
}
