import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import BPOnLogo from "./BPOnLogo";

const navLinks = [
  { label: "Solução", href: "#servicos" },
  { label: "Como funciona", href: "#metodo" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Casos", href: "#casos" },
  { label: "FAQ", href: "#faq" },
];

const sectionIds = ["inicio", "servicos", "metodo", "para-quem", "casos", "faq", "diagnostico"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [readProgress, setReadProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setScrolled(scrollY > 64);

        // Read progress
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        setReadProgress(docH > 0 ? Math.min((scrollY / docH) * 100, 100) : 0);

        // Active section
        let current = "";
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const top = el.getBoundingClientRect().top;
            if (top <= 80) current = id;
          }
        }
        setActiveSection(current);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const isActive = (href: string) => activeSection === href.replace("#", "");

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/95 backdrop-blur-md border-b border-divider shadow-[0_1px_16px_0_hsl(var(--headline)/0.06)]"
        : "bg-white border-b border-divider"
    }`}>

      {/* Read progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] z-10 pointer-events-none overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${readProgress}%`, opacity: scrolled ? 1 : 0 }}
        />
      </div>

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
          <a href="#inicio" className="flex-shrink-0 flex items-center gap-3">
            <BPOnLogo height={96} />
            <span className={`hidden lg:block font-body text-[11px] text-muted-foreground border-l border-divider pl-3 leading-tight transition-all duration-300 ${
              scrolled ? "opacity-0 w-0 overflow-hidden pl-0 border-l-0" : "opacity-100"
            }`}>
              Uma Empresa<br />Ubercentral
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-[13px] px-3 py-1.5 rounded-md transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-primary font-semibold bg-primary/6"
                    : "text-body hover:text-headline hover:bg-surface-tint"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5534992812444"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[12px] text-body hover:text-headline transition-colors duration-200 hidden lg:block"
            >
              (34) 99281-2444
            </a>
            <a
              href="#diagnostico"
              className={`group inline-flex items-center gap-2 font-body text-[13px] font-semibold px-5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-blue whitespace-nowrap ${
                scrolled ? "py-1.5" : "py-2"
              }`}
            >
              Solicitar diagnóstico
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
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
                  className={`font-body text-[13px] hover:bg-surface-tint transition-colors py-2.5 px-3 rounded-lg ${
                    isActive(link.href)
                      ? "text-primary font-semibold bg-primary/5"
                      : "text-body hover:text-headline"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#diagnostico"
                className="font-body text-[13px] font-semibold px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-center mt-3 shadow-blue flex items-center justify-center gap-2 group"
                onClick={() => setMobileOpen(false)}
              >
                Solicitar diagnóstico
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="https://wa.me/5534992812444"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[13px] text-body text-center mt-1.5 py-2"
                onClick={() => setMobileOpen(false)}
              >
                (34) 99281-2444
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
