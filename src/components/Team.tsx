import ralph from "@/assets/images/ralph.png";
import cindy from "@/assets/images/cindy.png";
import kathleen from "@/assets/images/kathleen.png";
import ramsleigh from "@/assets/images/ramsleigh.jpg";
import { FadeIn } from "@/components/FadeIn";
import { Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";

const team = [
  {
    name: "Ralph Daniel Bersonda",
    role: "CEO & Founder",
    bio: "Visionary leader with 6+ years in tech and management.",
    image: ralph,
    socials: { linkedin: "#", twitter: "#", instagram: "#" }
  },
  {
    name: "Cindy Lou Pusod",
    role: "COO & Founder",
    bio: "Operational excellence and strategic growth expert.",
    image: cindy,
    socials: { linkedin: "#", twitter: "#", instagram: "#" }
  },
  {
    name: "Kathleen Kaye Pusod",
    role: "CIO & Co-Founder",
    bio: "Driving technological innovation and digital transformation.",
    image: kathleen,
    socials: { linkedin: "#", twitter: "#", instagram: "#" }
  },
  {
    name: "Ramsleigh Espera",
    role: "Full Stack Developer",
    bio: "Building scalable solutions with modern web technologies.",
    image: ramsleigh,
    socials: { linkedin: "#", twitter: "#", instagram: "#" }
  },
];

export default function Team() {
  return (
    <section id="team" className="py-32 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-20 text-center">
        <FadeIn>
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Creative Team</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">
            Innovators & <span className="text-muted-foreground">Experts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated professionals driving our success and delivering exceptional solutions.
          </p>
        </FadeIn>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <FadeIn key={index} delay={0.2 + (index * 0.1)} className="h-full">
              <div className="group relative h-[500px] rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Background Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>

                {/* Floating Glass Card - Dark Style matching reference */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl transition-all duration-300 group-hover:bg-black/50">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight">{member.name}</h3>
                      <p className="text-white/60 text-xs font-bold uppercase tracking-wider mt-1">{member.role}</p>
                    </div>
                    {/* Arrow Icon */}
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex gap-3">
                    <a href={member.socials.linkedin} className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black hover:bg-primary hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.socials.twitter} className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black hover:bg-primary hover:text-white transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href={member.socials.instagram} className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black hover:bg-primary hover:text-white transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
