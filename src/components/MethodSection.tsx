const steps = [
  {
    num: "01",
    title: "Diagnóstico da operação",
    what_text: "Mapeamos como o financeiro funciona hoje — controles, responsáveis, fluxo de informações, ferramentas e onde estão os principais gargalos.",
    after_text: "Clareza sobre onde está a fragilidade e quais rotinas precisam de correção imediata.",
  },
  {
    num: "02",
    title: "Estruturação da rotina",
    what_text: "Definimos processo, cadência, critérios de conferência e organização da base — com responsabilidades claras e padrão operacional.",
    after_text: "Uma rotina financeira que funciona com método, não com esforço individual.",
  },
  {
    num: "03",
    title: "Implantação e controles",
    what_text: "A rotina entra em funcionamento com acompanhamento — contas, conciliação, fluxo e fechamento rodando em cadência.",
    after_text: "Operação mais previsível, menos improviso e base de dados mais confiável.",
  },
  {
    num: "04",
    title: "Acompanhamento contínuo",
    what_text: "Reportes periódicos com indicadores, fechamento gerencial e leitura de caixa para a liderança acompanhar o negócio.",
    after_text: "Base financeira que sustenta decisão com critério, não no feeling.",
  },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="py-28 lg:py-36 bg-background relative overflow-hidden">

      {/* Faint vertical rule */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-divider opacity-50 hidden lg:block pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 lg:mb-20 reveal max-w-xl">
          <span className="label-pill">Método</span>
          <h2 className="font-display font-black text-[2.2rem] lg:text-[3rem] text-headline leading-[1.05] tracking-[-0.02em] mt-5">
            Como a BPOn trabalha,<br />
            <span className="text-gradient-primary">passo a passo.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-0 border border-divider rounded-2xl overflow-hidden shadow-card">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${i + 1} group grid lg:grid-cols-[120px_1fr_1fr] gap-0 border-b border-divider last:border-b-0 hover:bg-surface-tint transition-colors duration-200`}
            >
              {/* Number column */}
              <div className="hidden lg:flex flex-col items-center justify-center border-r border-divider bg-surface group-hover:bg-primary/5 transition-colors duration-200 py-10 px-4">
                <span className="font-display font-black text-[2.2rem] text-gradient-primary leading-none">{step.num}</span>
              </div>

              {/* What */}
              <div className="p-7 lg:p-8 bg-surface group-hover:bg-transparent transition-colors duration-200 border-b lg:border-b-0 lg:border-r border-divider">
                <div className="flex items-center gap-3 mb-4">
                  <span className="lg:hidden font-display font-black text-sm text-primary">{step.num}</span>
                  <h3 className="font-display font-bold text-base lg:text-[17px] text-headline">{step.title}</h3>
                </div>
                <p className="font-body text-xs font-semibold text-body/60 uppercase tracking-widest mb-2">O que analisamos</p>
                <p className="font-body text-sm text-body leading-relaxed">{step.what_text}</p>
              </div>

              {/* After */}
              <div className="p-7 lg:p-8 bg-surface-tint group-hover:bg-[hsl(213,100%,94%)] transition-colors duration-200">
                <p className="font-body text-xs font-semibold text-primary/60 uppercase tracking-widest mb-2">O cliente passa a enxergar</p>
                <p className="font-body text-sm text-body leading-relaxed">{step.after_text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
