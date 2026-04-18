/*
 * DESIGN: Clean Coastal Authority – Sticky bottom bar on mobile only
 * Provides always-visible call and book buttons
 */
import { Phone, CalendarCheck } from "lucide-react";

export default function FloatingCTA() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0f2744] border-t border-white/10 px-4 py-3 flex gap-3 shadow-2xl">
      <a
        href="tel:0412345678"
        className="flex-1 flex items-center justify-center gap-2 bg-[#0284c7] text-white font-bold text-sm py-3 rounded-lg"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <button
        onClick={scrollToContact}
        className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold text-sm py-3 rounded-lg"
      >
        <CalendarCheck className="w-4 h-4" />
        Book Online
      </button>
    </div>
  );
}
