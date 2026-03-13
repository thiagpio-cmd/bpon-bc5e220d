import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BPOnLogo from "./BPOnLogo";

const navLinks = [
  { label: "Solução", href: "#solucao" },
  { label: "Como funciona", href: "#metodo" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Topbar institucional */}
      <div className="bg-deep text-deep-foreground/80 text-center py-2 px-4">
        <p className="font-body text-xs tracking-wide">
          <span className="font-semibold text-deep-foreground">BPOn</span>
          {" "}— Empresa do{" "}
          <span className="font-semibold text-deep-foreground">Grupo Ubercentral</span>
          <span className="hidden sm:inline text-deep-foreground/50 mx-2">·</span>
          <span className="hidden sm:inline">Base empresarial e contábil desde 2002</span>
        </p>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface/95 backdrop-blur-md border-b border-divider shadow-card"
            : "bg-surface border-b border-divider"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">
            {/* Logo */}
            <a href="#" className="flex-shrink-0 flex items-center gap-3">
              <BPOnLogo />
              <span className="hidden lg:block font-body text-xs text-muted-foreground border-l border-divider pl-3">
                Empresa do Grupo Ubercentral
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-body hover:text-headline transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <a
                href="#diagnostico"
                className="font-body text-sm font-semibold px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-card"
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
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden border-t border-divider py-5 animate-fade-in">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-body text-sm text-body hover:text-headline hover:bg-surface-tint transition-colors py-2.5 px-2 rounded-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#diagnostico"
                  className="font-body text-sm font-semibold px-5 py-3 rounded-lg bg-primary text-primary-foreground text-center mt-3"
                  onClick={() => setMobileOpen(false)}
                >
                  Solicitar diagnóstico
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
