import FintexLogo from "./FintexLogo";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#metodo" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "FAQ", href: "#faq" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-10 py-14 lg:py-16">
        <div className="grid md:grid-cols-12 gap-10 mb-10">
          <div className="md:col-span-5">
            <FintexLogo variant="dark" height={28} />
            <p className="font-body text-[14.5px] text-body leading-relaxed mt-5 max-w-sm">
              BPO Financeiro para empresas que precisam de rotina, caixa e previsibilidade.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="font-display font-semibold text-headline text-[13px] mb-4">Navegação</p>
            <nav className="flex flex-col gap-2.5">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-[14px] text-body hover:text-primary transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <p className="font-display font-semibold text-headline text-[13px] mb-4">Contato</p>
            <a href="mailto:comercial@bpon.com.br" className="text-[14px] text-body hover:text-primary transition-colors block mb-4">
              comercial@bpon.com.br
            </a>
            <a href="#diagnostico" className="btn-primary !px-5 !py-2.5 !text-[13px]">
              Diagnóstico
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between gap-3">
          <p className="text-[12.5px] text-muted-foreground">© {year} Fintex BPO. Todos os direitos reservados.</p>
          <p className="text-[12.5px] text-muted-foreground">São Paulo · Brasil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
