/*
 * DESIGN: Clean Coastal Authority – Deep navy footer, white/slate text
 */
import { Phone, Mail, MapPin, Wrench, Facebook, Instagram } from "lucide-react";

const QUICK_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Service Area", href: "#service-area" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Book Online", href: "#contact" },
];

const SERVICES_LINKS = [
  "Logbook Servicing",
  "Brake Repairs",
  "Battery Replacement",
  "Diagnostics & Fault Finding",
  "Pre-Purchase Inspections",
  "Emergency Breakdown",
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a1e38] text-white">
      {/* Main footer */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#0284c7] flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-heading font-700 text-white text-lg leading-none">
                  On Call Auto
                </div>
                <div className="text-[#38bdf8] text-xs font-semibold tracking-widest uppercase">
                  Brisbane
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Brisbane's trusted mobile mechanic. We come to your home, workplace, or roadside —
              making car service convenient, affordable, and stress-free.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#0284c7] flex items-center justify-center transition-colors duration-150"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#0284c7] flex items-center justify-center transition-colors duration-150"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-white font-700 text-base uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-400 hover:text-[#38bdf8] text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-white font-700 text-base uppercase tracking-wide mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-slate-400 hover:text-[#38bdf8] text-sm transition-colors duration-150 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-white font-700 text-base uppercase tracking-wide mb-4">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:0412345678"
                className="flex items-center gap-2 text-slate-300 hover:text-[#38bdf8] text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0284c7] flex-shrink-0" />
                0412 345 678
              </a>
              <a
                href="mailto:info@oncallautobrisbane.com.au"
                className="flex items-center gap-2 text-slate-300 hover:text-[#38bdf8] text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-[#0284c7] flex-shrink-0" />
                info@oncallautobrisbane.com.au
              </a>
              <div className="flex items-start gap-2 text-slate-300 text-sm">
                <MapPin className="w-4 h-4 text-[#0284c7] flex-shrink-0 mt-0.5" />
                Greater Brisbane & Surrounding Suburbs
              </div>
              <div className="flex items-start gap-2 text-slate-300 text-sm">
                <Phone className="w-4 h-4 text-[#0284c7] flex-shrink-0 mt-0.5" />
                <span>
                  Mon–Sat: 7am – 6pm<br />
                  Sun: Emergency calls only
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} On Call Auto Brisbane. All rights reserved. ABN: 12 345 678 901
          </p>
          <p className="text-slate-500 text-xs">
            Mobile Mechanic Brisbane | Car Service at Home Brisbane | On-Site Mechanic Brisbane
          </p>
        </div>
      </div>
    </footer>
  );
}
