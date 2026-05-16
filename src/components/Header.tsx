import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import FintexLogo from "./FintexLogo";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#metodo" },
  { label: "Para quem é", href: "#para-quem" },
  { label: "Diagnóstico", href: "#diagnostico" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 surface-deep ${
        scrolled ? "border-b border-white/5 shadow-deep" : "border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all ${scrolled ? "h-14" : "h-16 lg:h-[72px]"}`}>
          {/* Logo */}
          <a href="#inicio" className="flex-shrink-0">
            <FintexLogo variant="light" size={28} />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[13px] text-white/70 hover:text-white px-3 py-1.5 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#diagnostico"
              className="group inline-flex items-center gap-2 font-body font-semibold text-[13px] px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-blue"
            >
              Solicitar diagnóstico
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/80 hover:text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/5 py-4 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-white/75 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#diagnostico"
                className="font-body text-sm font-semibold px-4 py-3 rounded-lg bg-primary text-primary-foreground text-center mt-2 shadow-blue"
                onClick={() => setMobileOpen(false)}
              >
                Solicitar diagnóstico
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
