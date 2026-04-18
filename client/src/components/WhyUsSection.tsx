/*
 * DESIGN: Clean Coastal Authority – Deep navy background, white text, icon feature list
 * Split layout: feature list left, service van image right
 */
import { MapPin, DollarSign, Clock, Truck, ShieldCheck, ThumbsUp } from "lucide-react";

const REASONS = [
  {
    icon: MapPin,
    title: "We Come to You",
    desc: "No need to arrange a lift or sit in a waiting room. We come to your home, workplace, or wherever your car is parked.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "You'll always know the cost before we start. No surprise charges, no hidden fees — just honest, upfront quotes.",
  },
  {
    icon: Clock,
    title: "Fast Response Times",
    desc: "We offer same-day and next-day bookings across Brisbane. For breakdowns, we aim to reach you within the hour.",
  },
  {
    icon: Truck,
    title: "Fully Equipped Mobile Service",
    desc: "Our van carries professional-grade tools, diagnostic equipment, and a wide range of common parts so we can fix most issues on the spot.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "We hold all required Queensland automotive licences and carry full public liability insurance for your peace of mind.",
  },
  {
    icon: ThumbsUp,
    title: "Friendly, No-Jargon Service",
    desc: "We explain everything in plain English. You'll always understand what's wrong and what we're doing to fix it.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 bg-[#0f2744]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div>
            <span className="inline-block text-[#38bdf8] text-xs font-bold tracking-widest uppercase mb-3">
              Why Choose Us
            </span>
            <h2 className="font-heading text-white text-4xl md:text-5xl font-700 mb-5 leading-tight">
              The Smarter Way to Service Your Car
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-10">
              On Call Auto Brisbane is the convenient alternative to the traditional workshop.
              Here's why hundreds of Brisbane drivers choose us for their car service at home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {REASONS.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="flex gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-[#0284c7]/20 border border-[#0284c7]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0284c7] transition-colors duration-200">
                      <Icon className="w-5 h-5 text-[#38bdf8] group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div>
                      <div className="font-heading text-white font-700 text-base leading-snug mb-1">
                        {reason.title}
                      </div>
                      <div className="text-slate-400 text-sm leading-relaxed">{reason.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image column */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <img
                src="/images/service-van.webp"
                alt="On Call Auto Brisbane fully equipped service van"
                className="w-full object-cover"
                style={{ maxHeight: "520px" }}
              />
            </div>
            {/* Accent border */}
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#0284c7]/30 -z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
