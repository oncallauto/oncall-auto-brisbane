/*
 * DESIGN: Clean Coastal Authority – Deep navy nav, sky-blue CTA, Rajdhani brand name
 * Behaviour: Shrinks + adds shadow on scroll; hamburger menu on mobile
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Service Area", href: "#service-area" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f2744] shadow-lg py-2"
          : "bg-[#0f2744]/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663571735821/G5xkLg2SpnwhLXRARKTRti/logo-oncall-BmXjZpRGJpUTBynbshcPtc.webp"
            alt="On Call Auto Brisbane Logo"
            className="w-10 h-10 flex-shrink-0"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="nav-link text-slate-200 hover:text-white text-sm font-semibold tracking-wide transition-colors duration-150"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA phone */}
        <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0434673682"
              className="flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors duration-150"
            >
              <Phone className="w-4 h-4" />
              0434 673 682
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0f2744] border-t border-white/10 px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-slate-200 hover:text-white hover:bg-white/10 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:0434673682"
              className="mt-2 flex items-center justify-center gap-2 bg-[#0284c7] text-white font-bold text-sm px-4 py-3 rounded-lg"
            >
              <Phone className="w-4 h-4" />
              Call Now: 0434 673 682
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
