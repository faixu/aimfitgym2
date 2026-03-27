import { Phone, Mail, MapPin, Clock } from "lucide-react";
import LeadForm from "./LeadForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">
              READY TO <br />
              <span className="text-accent">TRANSFORM?</span>
            </h2>
            <p className="text-lg text-subtext mb-12 leading-relaxed">
              Visit us today or drop a message. Our team is ready to help you 
              kickstart your fitness journey.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <p className="text-subtext">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Our Location</h4>
                  <p className="text-subtext">123 Fitness Street, Sector 45, Gurgaon, Haryana, India</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Opening Hours</h4>
                  <p className="text-subtext">Mon - Sat: 5:00 AM - 10:00 PM <br /> Sun: 7:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 rounded-3xl overflow-hidden h-64 border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913120413!2d77.0330710761314!3d28.50290038933066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5e48537121542!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1711530000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="lg:pt-12">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
