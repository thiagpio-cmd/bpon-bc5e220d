const cards = [
  {
    title: "Rotina financeira",
    desc: "Contas a pagar, contas a receber, cobranças e organização de prazos.",
  },
  {
    title: "Controle de caixa",
    desc: "Conciliação bancária, fluxo de caixa e acompanhamento das movimentações.",
  },
  {
    title: "Leitura gerencial",
    desc: "Relatórios financeiros para apoiar decisões com mais clareza.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="section-py surface-graphite relative overflow-hidden x-cross">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-12 gap-8 mb-16 reveal">
          <div className="col-span-12 lg:col-span-3">
            <span className="eyebrow-num">01 / Solução</span>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="font-display font-bold text-white text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[0.95] tracking-[-0.04em]">
              A Fintex BPO organiza a rotina e entrega <span className="text-primary italic">visão gerencial</span>.
            </h2>
            <p className="font-body text-base lg:text-lg text-white/70 leading-relaxed mt-6 max-w-2xl font-light">
              Assumimos a operação financeira do dia a dia para que sua empresa tenha mais
              previsibilidade, controle e leitura dos números.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 brutal-grid reveal reveal-delay-2">
          {cards.map((c, i) => (
            <div key={c.title} className="brutal-cell p-8 min-h-[260px] flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[10px] text-primary font-bold tracking-widest">
                  {String(i + 1).padStart(2, "0")} / 03
                </span>
                <span className="h-px w-12 bg-primary/40" />
              </div>
              <h3 className="font-display font-bold text-white text-[22px] uppercase tracking-tight mb-4 leading-tight">
                {c.title}
              </h3>
              <p className="font-body text-[14px] text-white/65 leading-relaxed mt-auto">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
