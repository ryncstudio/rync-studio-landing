import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { FadeIn } from "@/components/FadeIn";
import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEO 
        title="Privacy Policy — Rync Studio" 
        description="Privacy Policy for Rync Studio."
      />
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground font-display">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: December 30, 2024</p>
          
          <div className="prose dark:prose-invert prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Rync Studio ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Data We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. How We Use Your Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal or regulatory obligation.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:hello@ryncstudio.com" className="text-primary hover:underline">hello@ryncstudio.com</a>.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
      <Footer />
    </div>
  );
}
