const pains = [
  "Contas vencendo sem controle",
  "Cobranças feitas de forma manual",
  "Caixa desatualizado",
  "Relatórios pouco confiáveis",
  "Sócios presos na rotina financeira",
];

const ProblemSection = () => {
  return (
    <section id="problema" className="section-py bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12 reveal">
          <p className="eyebrow mb-5">Problema</p>
          <h2 className="font-display font-bold text-headline text-[1.8rem] lg:text-[2.4rem] leading-[1.1] tracking-tight">
            Seu financeiro está consumindo tempo demais da gestão?
          </h2>
          <p className="font-body text-[15px] text-body leading-relaxed mt-5">
            Quando pagamentos, cobranças, conciliações e relatórios ficam espalhados, a empresa
            perde clareza sobre caixa, prazos e decisões.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 reveal reveal-delay-2">
          {pains.map((pain, i) => (
            <div
              key={pain}
              className="card-hover bg-surface border border-divider rounded-lg p-5 flex flex-col gap-3"
            >
              <span className="font-display font-bold text-[13px] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-body text-[13.5px] text-headline leading-snug">{pain}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
