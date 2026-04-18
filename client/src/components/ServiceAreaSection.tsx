/*
 * DESIGN: Clean Coastal Authority – Warm off-white bg, suburb tag cloud + map placeholder
 */
import { MapPin } from "lucide-react";

const SUBURBS = [
  "Brisbane CBD", "South Brisbane", "West End", "Fortitude Valley", "New Farm",
  "Paddington", "Toowong", "Indooroopilly", "St Lucia", "Taringa",
  "Kenmore", "Fig Tree Pocket", "Chapel Hill", "Brookfield", "Pullenvale",
  "Carindale", "Carina", "Camp Hill", "Greenslopes", "Annerley",
  "Woolloongabba", "Kangaroo Point", "Morningside", "Hawthorne", "Bulimba",
  "Wynnum", "Manly", "Tingalpa", "Murarrie", "Hemmant",
  "Chermside", "Nundah", "Clayfield", "Ascot", "Hamilton",
  "Sandgate", "Shorncliffe", "Brighton", "Bracken Ridge", "Zillmere",
  "Ipswich", "Logan", "Redlands", "Caboolture", "Pine Rivers",
];

export default function ServiceAreaSection() {
  return (
    <section id="service-area" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#0284c7] text-xs font-bold tracking-widest uppercase mb-3">
            Where We Work
          </span>
          <h2 className="font-heading text-[#0f2744] text-4xl md:text-5xl font-700 mb-4">
            Serving Brisbane & Surrounding Suburbs
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We cover the greater Brisbane area — from the CBD to the outer suburbs. If you're not
            sure whether we service your area, just give us a call and we'll let you know.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Suburb tags */}
          <div>
            <h3 className="font-heading text-[#0f2744] text-xl font-700 mb-5 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#0284c7]" />
              Areas We Cover
            </h3>
            <div className="flex flex-wrap gap-2">
              {SUBURBS.map((suburb) => (
                <span
                  key={suburb}
                  className="bg-[#f1f5f9] hover:bg-[#0284c7] hover:text-white text-slate-600 text-sm font-medium px-3 py-1.5 rounded-full transition-colors duration-150 cursor-default"
                >
                  {suburb}
                </span>
              ))}
            </div>
            <p className="text-slate-400 text-sm mt-4 italic">
              + many more suburbs. Call us to confirm your area.
            </p>
          </div>

          {/* Info cards */}
          <div className="space-y-5">
            <div className="bg-[#f8fafc] rounded-xl p-6 border border-slate-100">
              <h3 className="font-heading text-[#0f2744] text-xl font-700 mb-2">
                Brisbane North & South
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We cover all northern suburbs including Chermside, Nundah, Sandgate, Bracken Ridge,
                and Caboolture, as well as southern suburbs including Greenslopes, Annerley,
                Woolloongabba, and Logan.
              </p>
            </div>
            <div className="bg-[#f8fafc] rounded-xl p-6 border border-slate-100">
              <h3 className="font-heading text-[#0f2744] text-xl font-700 mb-2">
                Brisbane East & West
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                From Wynnum and Manly in the east to Kenmore, Brookfield, and Ipswich in the west —
                our mobile mechanic service covers the full breadth of the Brisbane region.
              </p>
            </div>
            <div className="bg-[#0f2744] rounded-xl p-6">
              <h3 className="font-heading text-white text-xl font-700 mb-2">
                Not Sure? Just Call Us.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                If your suburb isn't listed, we may still be able to help. Call us and we'll do
                our best to get to you.
              </p>
              <a
                href="tel:0434673682"
                className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors duration-150"
              >
                <MapPin className="w-4 h-4" />
                Call 0434 673 682
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
