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
    <section id="servicos" className="section-py bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-12 gap-8 mb-16 reveal">
          <div className="col-span-12 lg:col-span-3">
            <span className="eyebrow-num">02 / Serviços</span>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="font-display font-bold text-headline text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[0.95] tracking-[-0.04em]">
              O que a Fintex BPO <span className="text-primary italic">pode assumir.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 brutal-grid-light reveal reveal-delay-2">
          {services.map((s, i) => (
            <div key={s} className="brutal-cell-light p-7 min-h-[180px] flex flex-col justify-between group">
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] text-primary font-bold tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-40 group-hover:opacity-100 transition-opacity">
                  <path d="M2 2 L12 12 M12 2 L2 12" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="square" />
                </svg>
              </div>
              <span className="font-display font-bold text-headline text-[17px] uppercase tracking-tight leading-tight">
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
