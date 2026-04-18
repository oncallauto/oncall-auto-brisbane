/*
 * DESIGN: Clean Coastal Authority – Full-width hero, dark navy overlay on mechanic photo
 * Dark background → white text. Diagonal bottom cut into services section.
 */
import { Phone, CalendarCheck, CheckCircle2 } from "lucide-react";

const TRUST_BADGES = [
  "Same-Day Service Available",
  "Fully Licensed & Insured",
  "Transparent, Upfront Pricing",
];

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 94%, 0 100%)",
        paddingBottom: "6rem",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/hero-mechanic.webp')",
        }}
      />
      {/* Gradient overlay – dark navy left, semi-transparent right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(15,39,68,0.97) 0%, rgba(15,39,68,0.88) 50%, rgba(15,39,68,0.55) 100%)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#0284c7]/20 border border-[#0284c7]/40 text-[#38bdf8] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6 fade-up fade-up-delay-1">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
            Brisbane's Mobile Mechanic
          </div>

          {/* Headline */}
          <h1
            className="font-heading text-white leading-tight mb-4 fade-up fade-up-delay-2"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 700 }}
          >
            Mobile Mechanic Brisbane –{" "}
            <span className="text-[#38bdf8]">We Come to You</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl fade-up fade-up-delay-3">
            Skip the workshop. Our qualified mobile mechanic comes to your home,
            workplace, or roadside anywhere in Brisbane. Fast, affordable, and
            hassle-free car service — on your schedule.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10 fade-up fade-up-delay-4">
            <a
              href="tel:0434673682"
              className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-base px-6 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-[#0284c7]/30 hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Call Now: 0434 673 682
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-base px-6 py-3.5 rounded-lg transition-all duration-200 backdrop-blur-sm"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Online
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 fade-up fade-up-delay-5">
            {TRUST_BADGES.map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 text-slate-300 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#0f2744]/80 backdrop-blur-sm border-t border-white/10 py-4 z-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "2,000+", label: "Happy Customers" },
              { value: "Same Day", label: "Service Available" },
              { value: "All Brisbane", label: "Suburbs Covered" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-[#38bdf8] text-2xl font-700 leading-none">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
