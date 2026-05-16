const pains = [
  "Contas vencendo sem controle",
  "Cobranças feitas de forma manual",
  "Caixa desatualizado",
  "Relatórios pouco confiáveis",
  "Sócios presos na rotina financeira",
];

const ProblemSection = () => {
  return (
    <section id="problema" className="section-py bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-12 gap-8 mb-16 reveal">
          <div className="col-span-12 lg:col-span-3">
            <span className="eyebrow-num">00 / Problema</span>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="font-display font-bold text-headline text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[0.95] tracking-[-0.04em]">
              Seu financeiro está consumindo{" "}
              <span className="text-primary italic">tempo demais</span> da gestão?
            </h2>
            <p className="font-body text-base lg:text-lg text-body leading-relaxed mt-6 max-w-2xl">
              Quando pagamentos, cobranças, conciliações e relatórios ficam espalhados, a empresa
              perde clareza sobre caixa, prazos e decisões.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 brutal-grid-light reveal reveal-delay-2">
          {pains.map((pain, i) => (
            <div key={pain} className="brutal-cell-light p-6 min-h-[160px] flex flex-col justify-between">
              <span className="font-mono text-[10px] text-primary font-bold tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-display font-bold text-headline text-[15px] leading-tight uppercase tracking-tight">
                {pain}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
