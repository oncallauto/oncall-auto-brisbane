/*
 * DESIGN: Clean Coastal Authority – Warm off-white bg, card carousel with star ratings
 */
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    suburb: "Indooroopilly",
    rating: 5,
    text: "Absolutely brilliant service! My car wouldn't start on a Monday morning and I had a work meeting at 9am. I called On Call Auto and they were at my house within 45 minutes. Turned out to be the battery — replaced on the spot. Lifesaver!",
    service: "Battery Replacement",
  },
  {
    name: "James T.",
    suburb: "Chermside",
    rating: 5,
    text: "I've been using On Call Auto for my logbook services for two years now. The convenience of having a mechanic come to my workplace is unbeatable. The pricing is fair and they always explain what they've done. Highly recommend.",
    service: "Logbook Servicing",
  },
  {
    name: "Lisa K.",
    suburb: "Wynnum",
    rating: 5,
    text: "I was buying a second-hand car and needed a pre-purchase inspection. They met me at the seller's house and gave me a thorough report. Found a few issues I wouldn't have noticed — saved me from a bad purchase. Worth every cent.",
    service: "Pre-Purchase Inspection",
  },
  {
    name: "David R.",
    suburb: "Toowong",
    rating: 5,
    text: "My check engine light came on and I was dreading the workshop wait. On Call Auto came to my home that afternoon, ran the diagnostics, and fixed the issue on the spot. No fuss, no drama. Great service.",
    service: "Diagnostics & Fault Finding",
  },
  {
    name: "Michelle P.",
    suburb: "New Farm",
    rating: 5,
    text: "Brakes were grinding badly and I was nervous about driving. They came out the same day, replaced the pads and rotors, and the car drives like new. The mechanic was friendly, professional, and didn't try to upsell me on anything unnecessary.",
    service: "Brake Repairs",
  },
  {
    name: "Tom W.",
    suburb: "Carindale",
    rating: 5,
    text: "Broke down on the Gateway Motorway at 7pm on a Friday. Called On Call Auto and they arrived within an hour. Got me going again quickly. I can't thank them enough — professional and calm under pressure.",
    service: "Emergency Breakdown",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-slate-300"}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / perPage);
  const visible = TESTIMONIALS.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="testimonials" className="py-20 bg-[#f8fafc]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#0284c7] text-xs font-bold tracking-widest uppercase mb-3">
            Customer Reviews
          </span>
          <h2 className="font-heading text-[#0f2744] text-4xl md:text-5xl font-700 mb-4">
            What Brisbane Drivers Say
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Don't just take our word for it. Here's what real customers say about our
            mobile mechanic service in Brisbane.
          </p>
          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-heading text-[#0f2744] text-2xl font-700">5.0</span>
            <span className="text-slate-400 text-sm">/ 5 — based on 200+ reviews</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visible.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              <Quote className="w-8 h-8 text-[#0284c7]/20 mb-3 flex-shrink-0" />
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
              <div>
                <StarRating rating={t.rating} />
                <div className="mt-2">
                  <div className="font-heading text-[#0f2744] font-700 text-base">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.suburb} · {t.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#0284c7] hover:text-[#0284c7] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === page ? "bg-[#0284c7]" : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#0284c7] hover:text-[#0284c7] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
