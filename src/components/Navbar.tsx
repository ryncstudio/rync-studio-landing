import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
  const { theme } = useTheme();


  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] w-full px-4 pt-4">
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-primary/5 border border-slate-300 dark:border-white/10 backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 max-w-5xl mx-auto">
        {/* Logo */}
        <a
          href="#home"
          onClick={scrollToTop}
          className="text-xl font-bold tracking-tighter flex items-center gap-2 text-foreground cursor-pointer group"
        >
          <img
            src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'}
            alt="Rync Studio Logo"
            className="w-14 h-14 object-contain group-hover:scale-110 transition-transform"
          />
          <span className="font-display hidden sm:inline">Rync Studio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors hover:bg-white/5 rounded-full cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all cursor-pointer"
          >
            Let's Build
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-4 glass rounded-3xl p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 lg:hidden border border-border/50">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-center py-2 border-b border-white/5 last:border-0 cursor-pointer text-foreground"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.name}
            </a>
          ))}
          <Button
            onClick={() => {
              setIsOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full rounded-full mt-2 font-bold cursor-pointer"
          >
            Let's Build
          </Button>
        </div>
      )}
    </nav>
  );
}
