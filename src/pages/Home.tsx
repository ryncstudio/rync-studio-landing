import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <SEO />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Work />
      <Testimonials />
      <Team />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
