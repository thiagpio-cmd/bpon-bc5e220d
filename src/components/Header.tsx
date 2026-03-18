import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BPOnLogo from "./BPOnLogo";

const navLinks = [
  { label: "Solução", href: "#servicos" },
  { label: "Como funciona", href: "#metodo" },
  { label: "Para quem", href: "#para-quem" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 64);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/96 backdrop-blur-md border-b border-divider shadow-[0_1px_16px_0_hsl(var(--headline)/0.05)]"
        : "bg-white border-b border-divider"
    }`}>
      {/* Topbar institucional */}
      <div className={`bg-deep text-deep-foreground/80 text-center overflow-hidden transition-all duration-300 ${
        scrolled ? "max-h-0 opacity-0 py-0" : "max-h-9 opacity-100 py-1.5"
      }`}>
        <p className="font-body text-[11px] tracking-wide px-4">
          <span className="font-semibold text-deep-foreground">BPOn</span>
          {" "}— Empresa do{" "}
          <span className="font-semibold text-deep-foreground">Grupo Ubercentral</span>
          <span className="hidden sm:inline text-deep-foreground/35 mx-2">·</span>
          <span className="hidden sm:inline text-deep-foreground/55">Base empresarial e contábil desde 2002</span>
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-[52px]" : "h-[60px] lg:h-[64px]"
        }`}>

          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center gap-3">
            <BPOnLogo height={scrolled ? 26 : 30} />
            <span className={`hidden lg:block font-body text-[11px] text-muted-foreground border-l border-divider pl-3 leading-tight transition-all duration-300 ${
              scrolled ? "opacity-0 w-0 overflow-hidden pl-0 border-l-0" : "opacity-100"
            }`}>
              Empresa do<br />Grupo Ubercentral
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[13px] text-body hover:text-headline transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#diagnostico"
              className={`font-body text-[13px] font-semibold px-5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-blue ${
                scrolled ? "py-1.5" : "py-2"
              }`}
            >
              Solicitar diagnóstico
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-body hover:text-headline transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-divider py-4 animate-fade-in">
            <nav className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-[13px] text-body hover:text-headline hover:bg-surface-tint transition-colors py-2.5 px-3 rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#diagnostico"
                className="font-body text-[13px] font-semibold px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-center mt-3 shadow-blue"
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
