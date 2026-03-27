import { Dumbbell, Target, Users, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { subscribeToSiteContent, defaultSiteContent } from "../services/cmsService";
import { SiteContent } from "../types";

export default function About() {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);

  useEffect(() => {
    const unsubscribe = subscribeToSiteContent(setContent);
    return () => unsubscribe();
  }, []);

  const features = [
    {
      icon: Users,
      title: "Experienced Trainers",
      desc: "Our coaches are certified and dedicated to your success.",
    },
    {
      icon: Dumbbell,
      title: "Modern Equipment",
      desc: "Top-of-the-line machines and free weights for all levels.",
    },
    {
      icon: Target,
      title: "Result-Focused",
      desc: "We track your progress and adjust plans for maximum results.",
    },
    {
      icon: ShieldCheck,
      title: "Clean & Safe",
      desc: "Hygienic environment with regular sanitization protocols.",
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              About AimFit
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight uppercase">
              {content.aboutTitle}
            </h2>
            <p className="text-lg text-subtext mb-8 leading-relaxed">
              {content.aboutContent}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <f.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{f.title}</h4>
                    <p className="text-sm text-subtext">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden glow-red">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop"
                alt="Gym Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-2xl glow-red hidden md:block">
              <div className="text-3xl font-black">5+</div>
              <div className="text-xs font-bold uppercase tracking-widest">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
