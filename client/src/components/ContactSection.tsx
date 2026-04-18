/*
 * DESIGN: Clean Coastal Authority – White bg, 2-col layout (contact info left, form right)
 * Form with clear field focus states, same-day service emphasis
 */
import { useState } from "react";
import { Phone, Mail, Clock, MapPin, CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";

const SERVICES_LIST = [
  "Logbook Servicing",
  "Brake Repairs",
  "Battery Replacement",
  "Diagnostics & Fault Finding",
  "Pre-Purchase Inspection",
  "Emergency Breakdown",
  "Oil & Filter Change",
  "Electrical Repairs",
  "General Mechanical Repairs",
  "Other",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    service: "",
    message: "",
    preferredDate: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      toast.error("Please fill in your name, phone, and service type.");
      return;
    }
    setSubmitted(true);
    toast.success("Booking request sent! We'll call you back shortly.");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#0284c7] text-xs font-bold tracking-widest uppercase mb-3">
            Get in Touch
          </span>
          <h2 className="font-heading text-[#0f2744] text-4xl md:text-5xl font-700 mb-4">
            Book Your Mobile Mechanic Today
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Same-day and next-day bookings available across Brisbane. Fill in the form below
            or call us directly for the fastest response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Call CTA */}
            <div className="bg-[#0f2744] rounded-xl p-6 text-white">
              <div className="font-heading text-2xl font-700 mb-1">Call Us Now</div>
              <p className="text-slate-300 text-sm mb-4">
                For same-day service or emergency breakdowns, calling is the fastest way to reach us.
              </p>
              <a
                href="tel:0412345678"
                className="flex items-center gap-3 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-lg px-5 py-3.5 rounded-lg transition-colors duration-150"
              >
                <Phone className="w-5 h-5" />
                0412 345 678
              </a>
            </div>

            {/* Details */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@oncallautobrisbane.com.au",
                  href: "mailto:info@oncallautobrisbane.com.au",
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Mon–Sat: 7am – 6pm\nSunday: Emergency calls only",
                  href: null,
                },
                {
                  icon: MapPin,
                  label: "Service Area",
                  value: "Greater Brisbane & surrounding suburbs",
                  href: null,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#f1f5f9] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#0284c7]" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wide">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[#0f2744] text-sm font-medium hover:text-[#0284c7] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-[#0f2744] text-sm font-medium whitespace-pre-line">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Same-day badge */}
            <div className="bg-[#f0fdf4] border border-green-200 rounded-xl p-4 flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-heading text-green-800 font-700 text-base">
                  Same-Day Service Available
                </div>
                <div className="text-green-700 text-sm">
                  Book before 10am for same-day service in most Brisbane suburbs.
                </div>
              </div>
            </div>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-[#f8fafc] rounded-xl border border-slate-100">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="font-heading text-[#0f2744] text-2xl font-700 mb-2">
                  Booking Request Received!
                </h3>
                <p className="text-slate-500 text-base max-w-sm">
                  Thanks, {form.name}! We'll call you back on{" "}
                  <strong>{form.phone}</strong> shortly to confirm your booking.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#0284c7] text-sm font-semibold hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#f8fafc] rounded-xl border border-slate-100 p-6 md:p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="04XX XXX XXX"
                      required
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                      Your Suburb
                    </label>
                    <input
                      type="text"
                      name="suburb"
                      value={form.suburb}
                      onChange={handleChange}
                      placeholder="e.g. Indooroopilly"
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent transition"
                    >
                      <option value="">Select a service...</option>
                      {SERVICES_LIST.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={form.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                    Tell Us About Your Car / Issue
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="e.g. 2018 Toyota Corolla, check engine light on, also due for a service..."
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#0f2744] hover:bg-[#0284c7] text-white font-bold text-base py-3.5 rounded-lg transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                  Send Booking Request
                </button>
                <p className="text-center text-slate-400 text-xs">
                  We'll call you back within 30 minutes during business hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
