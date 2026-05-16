import FintexLogo from "./FintexLogo";

const links = [
  { n: "01", label: "Serviços", href: "#servicos" },
  { n: "02", label: "Método", href: "#metodo" },
  { n: "03", label: "Para quem", href: "#para-quem" },
  { n: "04", label: "Diagnóstico", href: "#diagnostico" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="surface-deep relative overflow-hidden border-t border-primary/30">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 md:col-span-6">
            <FintexLogo variant="light" height={32} />
            <p className="font-display font-bold text-white text-[1.8rem] md:text-[2.4rem] leading-[1] tracking-[-0.03em] mt-8 max-w-md">
              Menos ruído. <span className="text-primary italic">Mais lógica financeira.</span>
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mt-6">
              Financial Intelligence Unit · BPO Financeiro
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary font-bold mb-6">
              Navegação
            </p>
            <nav className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/65 hover:text-white transition-colors"
                >
                  <span className="text-primary mr-2">{l.n}</span>/ {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary font-bold mb-6">
              Contato
            </p>
            <a
              href="mailto:comercial@bpon.com.br"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/65 hover:text-white block mb-3"
            >
              comercial@bpon.com.br
            </a>
            <a
              href="#diagnostico"
              className="inline-block mt-4 bg-primary text-primary-foreground px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.22em] hover:bg-primary/85 transition-colors"
            >
              Diagnóstico →
            </a>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-6 flex flex-col md:flex-row justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
            © {year} Fintex BPO. Todos os direitos reservados.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
            São Paulo · Brasil
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/60" />
    </footer>
  );
};

export default Footer;
