/*
 * DESIGN: Clean Coastal Authority – White bg, 3-col service card grid
 * Cards have sky-blue top-border accent on hover, icon + title + description
 */
import { useEffect, useRef } from "react";
import {
  BookOpen,
  Disc,
  BatteryCharging,
  ScanLine,
  Search,
  AlertTriangle,
  Wrench,
  Droplets,
  Zap,
} from "lucide-react";

const SERVICES = [
  {
    icon: BookOpen,
    title: "Logbook Servicing",
    desc: "Keep your manufacturer warranty intact with a full logbook service completed at your door. We use quality oils and genuine-equivalent parts.",
    highlight: false,
  },
  {
    icon: Disc,
    title: "Brake Repairs",
    desc: "Squealing or grinding brakes? We inspect and replace brake pads, rotors, and calipers on-site — no workshop visit needed.",
    highlight: false,
  },
  {
    icon: BatteryCharging,
    title: "Battery Replacement",
    desc: "Dead or weak battery? We test, supply, and fit a new battery at your location, getting you back on the road fast.",
    highlight: false,
  },
  {
    icon: ScanLine,
    title: "Diagnostics & Fault Finding",
    desc: "Warning light on? Our professional scan tools read fault codes across all makes and models so we can pinpoint the problem quickly.",
    highlight: true,
  },
  {
    icon: Search,
    title: "Pre-Purchase Inspections",
    desc: "Buying a used car? We meet you at the seller's location and give you an honest, detailed assessment before you commit.",
    highlight: false,
  },
  {
    icon: AlertTriangle,
    title: "Emergency Breakdown Assistance",
    desc: "Broken down on the side of the road? Call us for fast roadside assistance across Brisbane and surrounding suburbs.",
    highlight: false,
  },
  {
    icon: Droplets,
    title: "Oil & Filter Change",
    desc: "A quick, affordable oil and filter change completed at your home or workplace. No appointment delays, no waiting rooms.",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Electrical Repairs",
    desc: "From faulty alternators to starter motors and wiring issues, we diagnose and fix electrical faults on-site.",
    highlight: false,
  },
  {
    icon: Wrench,
    title: "General Mechanical Repairs",
    desc: "Belts, hoses, cooling systems, suspension, and more. If your car needs it, we can likely fix it right where you are.",
    highlight: false,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".service-card-animate").forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 0.07}s`;
              el.classList.add("fade-up");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#0284c7] text-xs font-bold tracking-widest uppercase mb-3">
            What We Do
          </span>
          <h2 className="font-heading text-[#0f2744] text-4xl md:text-5xl font-700 mb-4">
            Our Mobile Mechanic Services
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From routine logbook servicing to emergency breakdowns, our on-site mechanic in Brisbane
            handles it all — at your home, workplace, or roadside.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`service-card service-card-animate opacity-0 bg-white rounded-xl p-6 border border-slate-100 shadow-sm ${
                  service.highlight
                    ? "border-[#0284c7] shadow-[#0284c7]/10 shadow-md"
                    : ""
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    service.highlight
                      ? "bg-[#0284c7] text-white"
                      : "bg-[#f1f5f9] text-[#0284c7]"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-[#0f2744] text-xl font-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                {service.highlight && (
                  <span className="inline-block mt-3 text-[#0284c7] text-xs font-bold tracking-wide uppercase">
                    Most Requested ★
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 mb-4">
            Not sure if we cover your issue? Give us a call — we're happy to help.
          </p>
          <a
            href="tel:0412345678"
            className="inline-flex items-center gap-2 bg-[#0f2744] hover:bg-[#0284c7] text-white font-bold px-8 py-3.5 rounded-lg transition-colors duration-200"
          >
            Call 0412 345 678
          </a>
        </div>
      </div>
    </section>
  );
}
