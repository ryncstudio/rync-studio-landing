import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    // Web3Forms access key - sends form submissions to ryncstudio@gmail.com
    formData.append("access_key", "06d56b7d-b020-435a-ac0d-5fe08bd44645");

    // Optional: Add custom subject line for better email organization
    formData.append("subject", `New Contact Form Submission from ${formData.get("name")}`);

    // Optional: Specify where to send the email (defaults to account email)
    // formData.append("from_name", "Rync Studio Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        toast.success("Message sent successfully! We'll get back to you soon.");
        (e.target as HTMLFormElement).reset();

        // Auto-hide success message after 10 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 10000);
      } else {
        console.error("Form submission error:", data);
        toast.error(data.message || "Failed to send message. Please try again.");
      }

    } catch (error) {
      console.error("Network error:", error);
      toast.error("Failed to send message. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background border-t border-slate-300 dark:border-white/10">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <FadeIn>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-8">
              Let's build something <br />
              <span className="text-primary">extraordinary.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-slate-600 dark:text-slate-400 text-xl mb-12 max-w-md leading-relaxed">
              Ready to start your next project? Tell us about your vision and we'll help you bring it to life.
            </p>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <a href="mailto:ryncstudio@gmail.com" className="flex items-start gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#202020] flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                  <Mail className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-lg">Email Us</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">ryncstudio@gmail.com</p>
                </div>
              </a>
            </FadeIn>
            <FadeIn delay={0.3}>
              <a href="tel:+639053009722" className="flex items-start gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#202020] flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                  <Phone className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-lg">Call Us</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">09053009722</p>
                </div>
              </a>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#202020] flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                  <MapPin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-lg">Visit Us</h4>
                  <p className="text-muted-foreground">Veramont Residences Mabolo, Cebu City</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn direction="left" delay={0.3}>
          <div className="bg-white dark:bg-[#202020] p-10 rounded-2xl border border-border shadow-xl relative">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-[400px] text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 animate-in zoom-in duration-300 delay-100">
                    <CheckCircle2 className="w-10 h-10 animate-in zoom-in duration-300 delay-200" />
                  </div>
                  {/* Pulse ring effect */}
                  <div className="absolute inset-0 w-20 h-20 rounded-full bg-green-400/30 animate-ping" style={{ animationDuration: '2s' }}></div>
                </div>
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground max-w-xs mx-auto leading-relaxed">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
                <Button
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500 hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot field for spam protection - hidden from users */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-bold text-foreground">
                      Name <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <Input
                      id="contact-name"
                      required
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="bg-background border-border text-foreground h-12 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      aria-required="true"
                      minLength={2}
                      maxLength={100}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-bold text-foreground">
                      Email <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <Input
                      id="contact-email"
                      required
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-background border-border text-foreground h-12 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      aria-required="true"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      title="Please enter a valid email address"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-project" className="text-sm font-bold text-foreground">
                    Project Type <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <Input
                    id="contact-project"
                    required
                    name="subject"
                    type="text"
                    placeholder="Web Design, App Dev, etc."
                    className="bg-background border-border text-foreground h-12 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    aria-required="true"
                    minLength={3}
                    maxLength={100}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-bold text-foreground">
                    Message <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <Textarea
                    id="contact-message"
                    required
                    name="message"
                    placeholder="Tell us about your project..."
                    className="bg-background border-border text-foreground min-h-[150px] rounded-lg resize-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    aria-required="true"
                    minLength={10}
                    maxLength={1000}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-lg font-bold text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={isSubmitting ? "Sending message" : "Send message"}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
