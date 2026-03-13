const steps = [
  {
    num: "01",
    title: "Diagnóstico da operação atual",
    what: "O que analisamos",
    what_text: "Mapeamos como o financeiro funciona hoje — controles, responsáveis, fluxo de informações, ferramentas e onde estão os principais gargalos.",
    after: "O cliente passa a enxergar",
    after_text: "Clareza sobre onde está a fragilidade e quais rotinas precisam de correção imediata.",
    color: "from-primary/10 to-primary/5",
  },
  {
    num: "02",
    title: "Estruturação da rotina e dos responsáveis",
    what: "O que organizamos",
    what_text: "Definimos processo, cadência, critérios de conferência e organização da base — com responsabilidades claras e padrão operacional.",
    after: "O cliente passa a enxergar",
    after_text: "Uma rotina financeira que funciona com método, não com esforço individual.",
    color: "from-primary/15 to-primary/8",
  },
  {
    num: "03",
    title: "Implantação dos controles e da cadência",
    what: "O que operamos",
    what_text: "A rotina financeira entra em funcionamento com acompanhamento — contas, conciliação, fluxo e fechamento rodando em cadência.",
    after: "O cliente passa a enxergar",
    after_text: "Operação mais previsível, menos improviso e base de dados mais confiável.",
    color: "from-primary/20 to-primary/10",
  },
  {
    num: "04",
    title: "Acompanhamento contínuo e leitura gerencial",
    what: "O que entregamos",
    what_text: "Reportes periódicos com indicadores, fechamento gerencial e leitura de caixa — para que a liderança acompanhe o negócio com mais segurança.",
    after: "O cliente passa a enxergar",
    after_text: "Base financeira que sustenta decisão com critério, não no feeling.",
    color: "from-primary/25 to-primary/12",
  },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 reveal">
          <div className="label-pill w-fit mb-5">Método de trabalho</div>
          <h2 className="font-display font-black text-3xl lg:text-4xl text-headline leading-[1.12] tracking-tight">
            Como a BPOn trabalha
          </h2>
          <p className="font-body text-base text-body leading-relaxed mt-4 max-w-xl">
            Quatro etapas que transformam rotina financeira desorganizada em estruturada, previsível e gerenciável.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${i + 1} group grid lg:grid-cols-[80px_1fr] gap-0 rounded-2xl border border-divider bg-surface overflow-hidden card-hover`}
            >
              {/* Number bar */}
              <div className={`hidden lg:flex flex-col items-center justify-center bg-gradient-to-b ${step.color} border-r border-divider p-6`}>
                <span className="font-display font-black text-2xl text-primary">{step.num}</span>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="lg:hidden font-display font-black text-sm text-primary">{step.num}</span>
                  <h3 className="font-display font-bold text-base lg:text-lg text-headline">{step.title}</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <p className="font-body text-xs font-semibold text-body uppercase tracking-widest">{step.what}</p>
                    <p className="font-body text-sm text-body leading-relaxed">{step.what_text}</p>
                  </div>
                  <div className="flex flex-col gap-2 sm:pl-6 sm:border-l border-divider">
                    <p className="font-body text-xs font-semibold text-primary/70 uppercase tracking-widest">{step.after}</p>
                    <p className="font-body text-sm text-body leading-relaxed">{step.after_text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
