import { Check } from "lucide-react";
import { cn } from "../lib/utils";

export default function Pricing() {
  const plans = [
    {
      name: "Basic Plan",
      price: "2000",
      period: "month",
      features: [
        "Full gym access",
        "Standard support",
        "Locker facility",
        "Basic workout plan",
      ],
      isPopular: false,
    },
    {
      name: "Premium Plan",
      price: "2500",
      period: "month",
      features: [
        "Full gym access",
        "Trainer assistance",
        "Personalized guidance",
        "Diet consultation",
        "Progress tracking",
      ],
      isPopular: true,
    },
    {
      name: "Quarterly Plan",
      price: "6000",
      period: "3 months",
      features: [
        "Everything in Premium",
        "Free gym t-shirt",
        "2 Personal training sessions",
        "Priority support",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
            SIMPLE, <span className="text-accent">AFFORDABLE</span> PLANS
          </h2>
          <p className="max-w-2xl mx-auto text-subtext">
            No hidden fees. Choose the plan that fits your goals and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={cn(
                "relative p-8 rounded-3xl border transition-all duration-300 flex flex-col",
                plan.isPopular
                  ? "bg-secondary border-accent glow-red scale-105 z-10"
                  : "bg-secondary/40 border-white/5 hover:border-white/20"
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">₹{plan.price}</span>
                  <span className="text-subtext text-sm">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="flex-shrink-0 w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={cn(
                  "w-full py-4 rounded-xl font-bold text-center transition-all active:scale-95",
                  plan.isPopular
                    ? "bg-accent text-white glow-red"
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                CHOOSE PLAN
              </a>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-subtext text-sm">
          * Limited slots available. Join today to lock in these prices.
        </p>
      </div>
    </section>
  );
}
