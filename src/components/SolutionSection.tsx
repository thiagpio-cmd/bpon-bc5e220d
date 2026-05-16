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
    <section id="solucao" className="section-py surface-graphite">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14 reveal">
          <p className="eyebrow eyebrow-light mb-5">Solução</p>
          <h2 className="font-display font-bold text-white text-[1.8rem] lg:text-[2.4rem] leading-[1.1] tracking-tight">
            A Fintex BPO organiza a rotina financeira e entrega visão gerencial.
          </h2>
          <p className="font-body text-[15px] text-white/65 leading-relaxed mt-5">
            Assumimos a operação financeira do dia a dia para que sua empresa tenha mais
            previsibilidade, controle e leitura dos números.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 reveal reveal-delay-2">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="relative bg-white/[0.03] border border-white/10 rounded-xl p-7 transition-all hover:border-primary/40 hover:bg-white/[0.05]"
            >
              <span className="absolute top-5 right-5 font-display font-bold text-[12px] text-primary/70">
                0{i + 1}
              </span>
              <h3 className="font-display font-bold text-white text-[18px] mb-3">{c.title}</h3>
              <p className="font-body text-[13.5px] text-white/65 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
