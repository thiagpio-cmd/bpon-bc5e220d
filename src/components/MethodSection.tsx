const steps = [
  { n: "01", title: "Diagnóstico", desc: "Entendemos sua rotina, sistemas, bancos, prazos e gargalos." },
  { n: "02", title: "Implantação", desc: "Organizamos acessos, processos, responsáveis e cadência de trabalho." },
  { n: "03", title: "Operação", desc: "Executamos e acompanhamos as rotinas financeiras combinadas." },
  { n: "04", title: "Fechamento", desc: "Entregamos relatórios e visão mensal dos principais números." },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="section-py surface-deep relative overflow-hidden x-cross">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-12 gap-8 mb-16 reveal">
          <div className="col-span-12 lg:col-span-3">
            <span className="eyebrow-num">03 / Método</span>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="font-display font-bold text-white text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[0.95] tracking-[-0.04em]">
              Um processo para tirar o financeiro do <span className="text-primary italic">improviso.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 brutal-grid reveal reveal-delay-2">
          {steps.map((s) => (
            <div key={s.n} className="brutal-cell p-8 min-h-[280px] flex flex-col">
              <span className="font-display font-bold text-primary text-[5rem] leading-[0.85] tracking-tighter">
                {s.n}
              </span>
              <div className="h-px w-full bg-primary/30 my-6" />
              <h3 className="font-display font-bold text-white text-[20px] uppercase tracking-tight mb-3">
                {s.title}
              </h3>
              <p className="font-body text-[13.5px] text-white/65 leading-relaxed mt-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
