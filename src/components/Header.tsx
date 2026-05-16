import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import FintexLogo from "./FintexLogo";

const navLinks = [
  { n: "01", label: "Serviços", href: "#servicos" },
  { n: "02", label: "Método", href: "#metodo" },
  { n: "03", label: "Para quem", href: "#para-quem" },
  { n: "04", label: "Diagnóstico", href: "#diagnostico" },
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
      className={`sticky top-0 z-50 transition-colors duration-300 surface-deep border-b ${
        scrolled ? "border-primary/30" : "border-primary/10"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#inicio" className="flex items-center gap-4">
            <FintexLogo variant="light" height={26} />
            <span className="hidden lg:inline-block h-3 w-px bg-primary/40" />
            <span className="hidden lg:inline-block font-mono text-[9px] uppercase tracking-[0.32em] text-white/45">
              Financial Intelligence Unit
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group font-mono text-[10px] uppercase tracking-[0.24em] text-white/55 hover:text-white transition-colors"
              >
                <span className="text-primary mr-1.5">{link.n}</span>
                <span>/ {link.label}</span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="#diagnostico"
              className="bg-primary text-primary-foreground px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] hover:bg-primary/85 transition-colors"
            >
              Diagnóstico →
            </a>
          </div>

          <button
            className="md:hidden text-white/80 hover:text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-primary/20 py-6 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/70 hover:text-white py-3 px-2 border-b border-primary/10"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-primary mr-2">{link.n}</span>/ {link.label}
                </a>
              ))}
              <a
                href="#diagnostico"
                className="bg-primary text-primary-foreground px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-center mt-4"
                onClick={() => setMobileOpen(false)}
              >
                Solicitar diagnóstico →
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
