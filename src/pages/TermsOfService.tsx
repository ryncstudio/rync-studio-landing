import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { FadeIn } from "@/components/FadeIn";
import { useEffect } from "react";

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEO 
        title="Terms of Service — Rync Studio" 
        description="Terms of Service for Rync Studio."
      />
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground font-display">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last updated: December 30, 2024</p>
          
          <div className="prose dark:prose-invert prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Rync Studio ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. User Representations</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and defined following the laws of Philippines. Rync Studio and yourself irrevocably consent that the courts of Philippines shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
      <Footer />
    </div>
  );
}
