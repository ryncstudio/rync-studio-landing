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
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

    try {
      // Simulate submission for demo purposes if no key provided or actual call
      // const response = await fetch("https://api.web3forms.com/submit", { ... });
      
      // Simulating success for the preview
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      toast.success("Message sent successfully!");
      (e.target as HTMLFormElement).reset();
      
    } catch (error) {
      toast.error("Failed to send message. Please check your connection.");
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
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#202020] flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                  <Mail className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-lg">Email Us</h4>
                  <p className="text-muted-foreground">ryncstudio@gmail.com</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#202020] flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                  <Phone className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-lg">Call Us</h4>
                  <p className="text-muted-foreground">09053009722</p>
                </div>
              </div>
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
              <div className="flex flex-col items-center justify-center h-[400px] text-center space-y-6 animate-in fade-in zoom-in">
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Name</label>
                    <Input required name="name" placeholder="John Doe" className="bg-background border-border text-foreground h-12 rounded-lg focus:ring-primary focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Email</label>
                    <Input required name="email" type="email" placeholder="john@example.com" className="bg-background border-border text-foreground h-12 rounded-lg focus:ring-primary focus:border-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Project Type</label>
                  <Input required name="subject" placeholder="Web Design, App Dev, etc." className="bg-background border-border text-foreground h-12 rounded-lg focus:ring-primary focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Message</label>
                  <Textarea required name="message" placeholder="Tell us about your project..." className="bg-background border-border text-foreground min-h-[150px] rounded-lg resize-none focus:ring-primary focus:border-primary" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full h-14 rounded-lg font-bold text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 cursor-pointer">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
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
