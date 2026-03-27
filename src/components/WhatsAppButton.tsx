import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { subscribeToSiteContent, defaultSiteContent } from "../services/cmsService";
import { SiteContent } from "../types";

export default function WhatsAppButton() {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);

  useEffect(() => {
    const unsubscribe = subscribeToSiteContent(setContent);
    return () => unsubscribe();
  }, []);

  const message = encodeURIComponent(content.whatsappMessage);
  
  return (
    <a
      href={`https://wa.me/${content.whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
        Chat with us
      </span>
    </a>
  );
}
