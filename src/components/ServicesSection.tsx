const services = [
  "Contas a pagar",
  "Contas a receber",
  "Conciliação bancária",
  "Fluxo de caixa",
  "Cobranças",
  "Relatórios gerenciais",
  "Organização documental",
  "Calendário financeiro",
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-py bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12 reveal">
          <p className="eyebrow mb-5">Serviços</p>
          <h2 className="font-display font-bold text-headline text-[1.8rem] lg:text-[2.4rem] leading-[1.1] tracking-tight">
            O que a Fintex BPO pode assumir.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 reveal reveal-delay-2">
          {services.map((s, i) => (
            <div
              key={s}
              className="card-hover bg-surface border border-divider rounded-lg p-5 flex items-center gap-4"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                <path d="M2 2 L12 12 M12 2 L2 12" stroke="hsl(214 100% 54%)" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <span className="font-body text-[14px] font-medium text-headline">{s}</span>
              <span className="ml-auto font-body text-[11px] text-body/40 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
