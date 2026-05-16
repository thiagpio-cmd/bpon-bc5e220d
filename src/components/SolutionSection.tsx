const cards = [
  {
    title: "Operação",
    desc: "Pagamentos, recebimentos, cobranças e organização financeira.",
  },
  {
    title: "Controle",
    desc: "Conciliação, fluxo de caixa e acompanhamento das movimentações.",
  },
  {
    title: "Gestão",
    desc: "Relatórios e leitura financeira para apoiar decisões.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="section-py bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14 reveal">
          <h2 className="font-display font-semibold text-headline text-[1.7rem] lg:text-[2.1rem] leading-[1.15] tracking-tight">
            A Fintex BPO estrutura sua rotina financeira.
          </h2>
          <p className="font-body text-[15px] text-body leading-relaxed mt-5">
            Assumimos a operação do dia a dia e entregamos uma visão mais clara sobre caixa, prazos
            e movimentações.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal reveal-delay-2">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="bg-surface border border-divider/80 rounded-lg p-7 transition-colors hover:border-primary/40"
            >
              <span className="font-body text-[12px] text-primary tabular-nums">
                0{i + 1}
              </span>
              <h3 className="font-display font-semibold text-headline text-[18px] mt-4 mb-2">
                {c.title}
              </h3>
              <p className="font-body text-[14px] text-body leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
