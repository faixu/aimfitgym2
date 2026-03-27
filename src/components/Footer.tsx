import { Dumbbell, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-accent rounded-lg glow-red">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter">
                AIMFIT<span className="text-accent">GYM</span>
              </span>
            </div>
            <p className="text-subtext text-sm leading-relaxed mb-8">
              Built for results, not excuses. AimFit Gym is your ultimate 
              destination for professional fitness training in India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm text-subtext">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#trainers" className="hover:text-accent transition-colors">Trainers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4 text-sm text-subtext">
              <li><a href="#services" className="hover:text-accent transition-colors">Strength Training</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Weight Loss</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Personal Training</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Muscle Building</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Beginner Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="space-y-4 text-sm text-subtext">
              <li className="flex gap-3">
                <span className="text-accent font-bold">A:</span>
                123 Fitness Street, Sector 45, Gurgaon
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">P:</span>
                +91 98765 43210
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">E:</span>
                info@aimfitgym.in
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-subtext font-medium uppercase tracking-widest">
          <div>© 2024 AimFit Gym India. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
