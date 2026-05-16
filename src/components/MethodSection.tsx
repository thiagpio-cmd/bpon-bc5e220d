const steps = [
  { n: "01", title: "Diagnóstico", desc: "Entendemos sua rotina financeira." },
  { n: "02", title: "Implantação", desc: "Organizamos processos, acessos e responsabilidades." },
  { n: "03", title: "Operação", desc: "Executamos as rotinas financeiras combinadas." },
  { n: "04", title: "Fechamento", desc: "Entregamos relatórios e leitura mensal." },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="section-py bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14 reveal">
          <h2 className="font-display font-semibold text-headline text-[1.7rem] lg:text-[2.1rem] leading-[1.15] tracking-tight">
            Como funciona.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 reveal reveal-delay-2">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-headline/15 pt-5">
              <span className="font-body text-[12px] text-primary tabular-nums">{s.n}</span>
              <h3 className="font-display font-semibold text-headline text-[17px] mt-3">
                {s.title}
              </h3>
              <p className="font-body text-[14px] text-body leading-relaxed mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
