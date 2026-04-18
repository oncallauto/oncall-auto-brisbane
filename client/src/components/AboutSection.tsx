/*
 * DESIGN: Clean Coastal Authority – Warm off-white bg, 2-col layout (image left, text right)
 * Conveys trust, experience, and local Brisbane identity
 */
import { ShieldCheck, Award, MapPin, Users } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Award,
    title: "15+ Years Experience",
    desc: "Our lead mechanic has over 15 years of hands-on experience across all makes and models.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Insured",
    desc: "We hold all required Queensland automotive licences and carry full public liability insurance.",
  },
  {
    icon: MapPin,
    title: "Local Brisbane Business",
    desc: "We're Brisbane locals who understand the roads, the suburbs, and the community we serve.",
  },
  {
    icon: Users,
    title: "Honest & Transparent",
    desc: "We explain exactly what your car needs and why — no upselling, no hidden charges.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#f8fafc]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663571735821/G5xkLg2SpnwhLXRARKTRti/about-mechanic-FQCCVVRgAcZsyoUjh85iEc.webp"
                alt="On Call Auto Brisbane mechanic with service van"
                className="w-full h-full object-cover"
                style={{ maxHeight: "520px" }}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-4 bg-[#0f2744] text-white rounded-xl px-5 py-4 shadow-xl">
              <div className="font-heading text-3xl font-700 text-[#38bdf8] leading-none">15+</div>
              <div className="text-xs text-slate-300 mt-1">Years in the Trade</div>
            </div>
          </div>

          {/* Text column */}
          <div>
            <span className="inline-block text-[#0284c7] text-xs font-bold tracking-widest uppercase mb-3">
              About Us
            </span>
            <h2 className="font-heading text-[#0f2744] text-4xl md:text-5xl font-700 mb-5 leading-tight">
              Brisbane's Trusted Mobile Mechanic
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              On Call Auto Brisbane was founded with one simple goal: to make quality car servicing
              accessible and convenient for everyday Brisbane drivers. We got tired of watching
              customers wait days for workshop appointments and pay inflated prices — so we brought
              the workshop to them.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Our lead mechanic holds a Queensland Certificate III in Light Vehicle Mechanical
              Technology and has worked across dealerships, independent workshops, and roadside
              assistance before going mobile. We service everything from small hatchbacks to large
              4WDs, and we treat every customer's car as if it were our own.
            </p>

            {/* Highlight grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0284c7]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#0284c7]" />
                    </div>
                    <div>
                      <div className="font-heading text-[#0f2744] font-700 text-base leading-snug">
                        {item.title}
                      </div>
                      <div className="text-slate-500 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
