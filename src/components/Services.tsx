import { Dumbbell, Zap, User, TrendingUp, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      desc: "Build real strength with structured workouts and heavy lifting.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=2070&auto=format&fit=crop",
    },
    {
      icon: Zap,
      title: "Weight Loss",
      desc: "Burn fat efficiently with guided cardio and nutrition support.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    },
    {
      icon: User,
      title: "Personal Training",
      desc: "One-on-one coaching tailored specifically for your body goals.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      icon: TrendingUp,
      title: "Muscle Building",
      desc: "Gain size and definition with proven hypertrophy methods.",
      image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?q=80&w=2070&auto=format&fit=crop",
    },
    {
      icon: Sparkles,
      title: "Beginner Guidance",
      desc: "New to the gym? We'll help you start your journey with confidence.",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop",
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
            WHAT WE <span className="text-accent">OFFER</span>
          </h2>
          <p className="max-w-2xl mx-auto text-subtext">
            Everything you need to reach your peak physical condition under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative h-[400px] rounded-3xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all"
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 glow-red">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-subtext text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {s.desc}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all"
                >
                  Start Now <TrendingUp className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
