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
    <section id="servicos" className="section-py bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12 reveal">
          <h2 className="font-display font-semibold text-headline text-[1.7rem] lg:text-[2.1rem] leading-[1.15] tracking-tight">
            O que assumimos no seu financeiro.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-4 reveal reveal-delay-2">
          {services.map((s) => (
            <div
              key={s}
              className="font-body text-[15px] text-headline py-3 border-b border-divider/70"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
