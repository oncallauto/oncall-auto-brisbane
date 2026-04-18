/*
 * DESIGN: Clean Coastal Authority – Sky-blue CTA banner, dark text on light bg
 * Placed between Testimonials and Contact to drive conversions
 */
import { Phone, CalendarCheck, Zap } from "lucide-react";

export default function CTABanner() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-[#0284c7] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-20 -left-10 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <Zap className="w-5 h-5 text-white/80" />
              <span className="text-white/80 text-sm font-semibold tracking-wide uppercase">
                Same-Day Service Available
              </span>
            </div>
            <h2 className="font-heading text-white text-3xl md:text-4xl font-700 leading-tight">
              Need a Mobile Mechanic in Brisbane Today?
            </h2>
            <p className="text-white/80 text-base mt-2">
              Don't wait days for a workshop appointment. We come to you — fast.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="tel:0434673682"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0284c7] hover:bg-slate-100 font-bold text-base px-6 py-3.5 rounded-lg transition-colors duration-150 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              0434 673 682
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 bg-[#0f2744] hover:bg-[#0a1e38] text-white font-bold text-base px-6 py-3.5 rounded-lg transition-colors duration-150"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
