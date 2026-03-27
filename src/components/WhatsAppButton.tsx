import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "919876543210"; // Placeholder
  const message = encodeURIComponent("Hi AimFit Gym! I'm interested in joining. Can you help me?");
  
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
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
