const steps = [
  { n: "01", title: "Diagnóstico", desc: "Entendemos sua rotina, sistemas, bancos, prazos e gargalos." },
  { n: "02", title: "Implantação", desc: "Organizamos acessos, processos, responsáveis e cadência de trabalho." },
  { n: "03", title: "Operação", desc: "Executamos e acompanhamos as rotinas financeiras combinadas." },
  { n: "04", title: "Fechamento", desc: "Entregamos relatórios e visão mensal dos principais números." },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="section-py bg-background relative">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-14 reveal">
          <span className="eyebrow">Método</span>
          <h2 className="font-display font-bold text-headline text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] leading-[1.08] tracking-[-0.03em] mt-4">
            Um processo para tirar o financeiro do <span className="text-primary">improviso</span>.
          </h2>
        </div>

        <div className="relative reveal reveal-delay-2">
          {/* connector line */}
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-card border border-border shadow-sm font-display font-bold text-primary text-[18px] relative z-10 mx-auto lg:mx-0">
                  {s.n}
                </div>
                <h3 className="font-display font-semibold text-headline text-[18px] mt-5">{s.title}</h3>
                <p className="font-body text-[14px] text-body leading-relaxed mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
