import { Github, Twitter, Linkedin, Instagram, Loader2, Check, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      toast.success("Subscribed to newsletter!");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-background border-t border-border pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <FadeIn delay={0}>
              <a href="#" className="text-2xl font-bold font-display text-foreground tracking-tight">
                Rync Studio.
              </a>
              <p className="text-muted-foreground leading-relaxed">
                Crafting digital experiences that define the future. We build high-performance websites and apps.
              </p>
              <div className="flex gap-4 mt-2">
                {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Company Links */}
          <div>
            <FadeIn delay={0.1}>
              <h4 className="text-foreground font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-4">
                {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Services Links */}
          <div>
            <FadeIn delay={0.2}>
              <h4 className="text-foreground font-semibold mb-6 text-lg">Services</h4>
              <ul className="space-y-4">
                {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Branding'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Newsletter */}
          <div>
            <FadeIn delay={0.3}>
              <h4 className="text-foreground font-semibold mb-6 text-lg">Newsletter</h4>
              <p className="text-muted-foreground mb-6">Subscribe to get the latest news and updates.</p>
              {isSuccess ? (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <Check className="w-5 h-5" /> Subscribed!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <Input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className="bg-background border-input text-foreground h-12 pr-12"
                    />
                    <Button
                      disabled={isSubmitting}
                      size="icon"
                      className="absolute right-1 top-1 h-10 w-10 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              )}
            </FadeIn>
          </div>
        </div>

        {/* Bottom Bar */}
        <FadeIn delay={0.4}>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Rync Studio. All rights reserved.</p>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
