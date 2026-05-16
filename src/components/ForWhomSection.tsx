const criteria = [
  "Faturamento mensal a partir de R$ 120 mil",
  "Volume recorrente de pagamentos e recebimentos",
  "Necessidade de previsibilidade de caixa",
  "Sócios ainda muito envolvidos na rotina financeira",
  "Desejo de profissionalizar a gestão sem criar uma equipe interna completa",
];

const ForWhomSection = () => {
  return (
    <section id="para-quem" className="section-py bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-12 gap-8 mb-16 reveal">
          <div className="col-span-12 lg:col-span-3">
            <span className="eyebrow-num">04 / Para quem</span>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="font-display font-bold text-headline text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[0.95] tracking-[-0.04em]">
              Para empresas que não podem mais tratar o financeiro no{" "}
              <span className="text-primary italic">improviso.</span>
            </h2>
            <p className="font-body text-base lg:text-lg text-body leading-relaxed mt-6 max-w-2xl">
              Atendemos empresas de serviços, tecnologia, consultorias, clínicas, indústrias leves
              e operações comerciais que precisam de uma rotina financeira mais confiável para
              crescer com controle.
            </p>
          </div>
        </div>

        <div className="brutal-grid-light reveal reveal-delay-2">
          {criteria.map((c, i) => (
            <div
              key={c}
              className="brutal-cell-light grid grid-cols-12 gap-6 items-center py-6 px-6 group hover:bg-primary/[0.03]"
            >
              <span className="col-span-2 md:col-span-1 font-mono text-[11px] text-primary font-bold tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-9 md:col-span-10 font-display font-medium text-headline text-[17px] md:text-[20px] tracking-tight leading-snug">
                {c}
              </span>
              <span className="col-span-1 text-right font-mono text-primary text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
