const steps = [
  { n: "01", title: "Diagnóstico", desc: "Entendemos sua rotina, sistemas, bancos, prazos e gargalos." },
  { n: "02", title: "Implantação", desc: "Organizamos acessos, processos, responsáveis e cadência de trabalho." },
  { n: "03", title: "Operação", desc: "Executamos e acompanhamos as rotinas financeiras combinadas." },
  { n: "04", title: "Fechamento", desc: "Entregamos relatórios e visão mensal dos principais números." },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="section-py surface-deep relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -right-32 -bottom-32 w-[480px] h-[480px] opacity-[0.03] pointer-events-none"
      >
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M15 15 L85 85 M85 15 L15 85" stroke="hsl(214 100% 60%)" strokeWidth="4" strokeLinecap="square" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-14 reveal">
          <p className="eyebrow eyebrow-light mb-5">Como funciona</p>
          <h2 className="font-display font-bold text-white text-[1.8rem] lg:text-[2.4rem] leading-[1.1] tracking-tight">
            Um processo simples para tirar o financeiro do improviso.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden reveal reveal-delay-2">
          {steps.map((s) => (
            <div key={s.n} className="surface-deep p-7 flex flex-col gap-4 min-h-[180px]">
              <span className="font-display font-black text-primary text-[2.5rem] leading-none">{s.n}</span>
              <h3 className="font-display font-bold text-white text-[16px]">{s.title}</h3>
              <p className="font-body text-[13px] text-white/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
