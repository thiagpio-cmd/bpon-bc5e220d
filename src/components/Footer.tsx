import FintexLogo from "./FintexLogo";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#metodo" },
  { label: "Para quem é", href: "#para-quem" },
  { label: "Diagnóstico financeiro", href: "#diagnostico" },
  { label: "Contato", href: "#diagnostico" },
  { label: "Política de privacidade", href: "#" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="surface-deep border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div>
            <FintexLogo variant="light" height={36} />
            <p className="font-body text-[13px] text-white/45 italic mt-5">
              Menos ruído. Mais lógica financeira.
            </p>
            <p className="font-body text-[13.5px] text-white/65 mt-4 max-w-md leading-relaxed">
              BPO Financeiro para empresas que precisam organizar a rotina, controlar o caixa e
              tomar decisões com mais previsibilidade.
            </p>
          </div>

          <div className="md:justify-self-end">
            <p className="font-body text-[11px] uppercase tracking-[0.14em] text-white/35 mb-4">
              Navegação
            </p>
            <nav className="flex flex-col gap-2.5">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="font-body text-[13.5px] text-white/70 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5">
          <p className="font-body text-[12px] text-white/40">
            © {year} Fintex BPO. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
