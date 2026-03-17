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
    <section id="metodo" className="py-24 lg:py-32 bg-deep relative overflow-hidden">

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(210 80% 72% / 1) 1px, transparent 1px), linear-gradient(90deg, hsl(210 80% 72% / 1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <div className="mb-14 lg:mb-16 reveal flex flex-col lg:flex-row lg:items-end gap-8 justify-between">
          <div>
            <span className="label-pill-dark mb-5 inline-block">Método</span>
            <h2 className="font-display font-black text-[2rem] lg:text-[2.8rem] text-white leading-[1.05] tracking-[-0.025em]">
              Como a BPOn trabalha,<br />
              <span className="text-shimmer">passo a passo.</span>
            </h2>
          </div>
          <p className="font-body text-[14px] text-white/45 max-w-xs leading-relaxed lg:text-right lg:self-end">
            Onboarding estruturado, sem ruptura — da análise inicial ao acompanhamento contínuo.
          </p>
        </div>

        {/* Steps — lista vertical em dark */}
        <div className="flex flex-col gap-0 border border-white/8 rounded-2xl overflow-hidden">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${i + 1} group grid lg:grid-cols-[96px_1fr_1fr] border-b border-white/6 last:border-b-0 hover:bg-white/[0.025] transition-colors duration-200`}
            >
              {/* Number column */}
              <div className="hidden lg:flex flex-col items-center justify-center border-r border-white/6 py-10 px-3 group-hover:border-primary/20 transition-colors">
                <span className="font-display font-black text-[2rem] text-primary/70 group-hover:text-primary transition-colors leading-none">
                  {step.num}
                </span>
              </div>

              {/* What */}
              <div className="p-7 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/6 group-hover:border-primary/10 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="lg:hidden font-display font-black text-sm text-primary">{step.num}</span>
                  <h3 className="font-display font-bold text-[15px] text-white/88 leading-snug">{step.title}</h3>
                </div>
                <p className="font-body text-[11px] font-semibold text-white/30 uppercase tracking-[0.10em] mb-2">O que fazemos</p>
                <p className="font-body text-[13px] text-white/50 leading-relaxed">{step.what_text}</p>
              </div>

              {/* After */}
              <div className="p-7 lg:p-8 bg-white/[0.02] group-hover:bg-primary/[0.04] transition-colors">
                <p className="font-body text-[11px] font-semibold text-primary/60 uppercase tracking-[0.10em] mb-2">O cliente passa a ter</p>
                <p className="font-body text-[13px] text-white/50 leading-relaxed">{step.after_text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
