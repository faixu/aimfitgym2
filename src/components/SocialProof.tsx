import { Star } from "lucide-react";

export default function SocialProof() {
  const stats = [
    { label: "Happy Members", value: "500+" },
    { label: "Expert Trainers", value: "10+" },
    { label: "Success Stories", value: "200+" },
    { label: "Years Experience", value: "5+" },
  ];

  const testimonials = [
    {
      name: "Rahul Mehra",
      role: "Member since 2023",
      content: "Best gym in the area. Worth every rupee. The environment is super motivating!",
      rating: 5,
    },
    {
      name: "Priya Singh",
      role: "Weight Loss Success",
      content: "Trainers actually care about your progress. Lost 10kg in 3 months with their guidance.",
      rating: 5,
    },
    {
      name: "Amit Verma",
      role: "Muscle Gain",
      content: "Affordable and professional setup. The equipment is top-notch and always clean.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-black text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-subtext uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-secondary p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-colors group"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg italic text-white/90 mb-6 leading-relaxed">
                "{t.content}"
              </p>
              <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-xs text-subtext uppercase font-bold tracking-wider">
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
