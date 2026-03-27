import { Phone, Mail, MapPin, Clock } from "lucide-react";
import LeadForm from "./LeadForm";
import { useEffect, useState } from "react";
import { subscribeToSiteContent, defaultSiteContent } from "../services/cmsService";
import { SiteContent } from "../types";

export default function Contact() {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);

  useEffect(() => {
    const unsubscribe = subscribeToSiteContent(setContent);
    return () => unsubscribe();
  }, []);

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
                  <p className="text-subtext">{content.phone}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Our Location</h4>
                  <p className="text-subtext">{content.address}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Opening Hours</h4>
                  <p className="text-subtext whitespace-pre-line">{content.openingHours}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 rounded-3xl overflow-hidden h-64 border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                src={content.googleMapsUrl}
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
