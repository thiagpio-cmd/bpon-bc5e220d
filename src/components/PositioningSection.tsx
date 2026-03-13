const PositioningSection = () => {
  return (
    <section className="py-24 lg:py-32 gradient-section-tint overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — big quote */}
          <div className="reveal flex flex-col gap-6">
            <div className="label-pill w-fit">Posicionamento</div>
            <h2 className="font-display font-black text-3xl lg:text-4xl xl:text-[2.8rem] text-headline leading-[1.12] tracking-tight">
              Consultoria para empresas que precisam de{" "}
              <span className="text-gradient-primary">organização, caixa</span>{" "}
              e critério de gestão.
            </h2>
            <p className="font-body text-base lg:text-lg text-body leading-relaxed max-w-lg">
              A BPOn não executa apenas tarefas financeiras. Ela organiza a rotina, reduz risco operacional, melhora a leitura do caixa e cria base confiável para decisão.
            </p>
            <a href="#diagnostico" className="inline-flex w-fit items-center gap-2 px-6 py-3 rounded-xl bg-headline text-deep-foreground font-body font-semibold text-sm hover:bg-headline/90 transition-all duration-200">
              Solicitar diagnóstico
            </a>
          </div>

          {/* Right — three highlight blocks */}
          <div className="reveal reveal-delay-2 grid grid-cols-1 gap-4">
            {[
              {
                num: "BPO",
                title: "Rotina operacional completa",
                text: "Contas a pagar, receber, conciliação, fluxo e fechamento rodando com método.",
              },
              {
                num: "CFO",
                title: "Leitura gerencial aplicada",
                text: "Indicadores, relatórios e acompanhamento para a liderança decidir com base.",
              },
              {
                num: "2002",
                title: "Grupo Ubercentral",
                text: "Base empresarial e contábil consolidada por mais de duas décadas.",
              },
            ].map((item) => (
              <div key={item.num} className="group flex items-start gap-5 p-5 rounded-2xl border border-divider bg-surface card-hover">
                <span className="font-display font-black text-2xl text-primary/20 flex-shrink-0 leading-none mt-0.5 group-hover:text-primary/40 transition-colors">{item.num}</span>
                <div>
                  <h3 className="font-display font-bold text-sm text-headline mb-1">{item.title}</h3>
                  <p className="font-body text-sm text-body leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositioningSection;
