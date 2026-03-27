export default function Trainers() {
  const trainers = [
    {
      name: "Rahul Sharma",
      role: "Strength Coach",
      exp: "5+ Years Experience",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Sanya Kapoor",
      role: "Fitness Expert",
      exp: "4+ Years Experience",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Vikram Singh",
      role: "Bodybuilding Coach",
      exp: "7+ Years Experience",
      image: "https://images.unsplash.com/photo-1491752355423-95843366f737?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section id="trainers" className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Team
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
            EXPERT <span className="text-accent">TRAINERS</span>
          </h2>
          <p className="max-w-2xl mx-auto text-subtext">
            Meet the professionals who will guide you through your transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((t, i) => (
            <div key={i} className="group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-1">{t.name}</h3>
                <div className="text-accent font-bold text-sm uppercase tracking-widest mb-2">
                  {t.role}
                </div>
                <p className="text-subtext text-xs font-medium uppercase tracking-wider">
                  {t.exp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
