import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import FintexLogo from "./FintexLogo";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#metodo" },
  { label: "Para quem", href: "#para-quem" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <a href="#inicio" className="flex items-center">
            <FintexLogo variant="dark" height={26} />
          </a>

          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[14px] font-medium text-body hover:text-headline transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a href="#diagnostico" className="btn-primary !px-5 !py-2.5 !text-[13.5px]">
              Diagnóstico
              <ArrowRight size={14} />
            </a>
          </div>

          <button
            className="md:hidden text-headline p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border py-4 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-medium text-headline py-3 px-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#diagnostico"
                className="btn-primary mt-3"
                onClick={() => setMobileOpen(false)}
              >
                Solicitar diagnóstico <ArrowRight size={14} />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
