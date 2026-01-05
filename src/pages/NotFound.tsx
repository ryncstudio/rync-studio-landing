import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h1 className="text-9xl font-display font-bold text-primary mb-4 opacity-20">404</h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Page Not Found</h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
              We couldn't find the page you were looking for. It might have been moved, deleted, or never existed.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Link href="/">
              <Button size="lg" className="rounded-full h-12 px-8 font-bold gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Button>
            </Link>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
