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
    <section id="metodo" className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "hsl(220 50% 7%)" }}>

      {/* Acento de fundo */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(220 79% 46% / 0.06) 0%, transparent 68%)" }} />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-12 lg:mb-14 reveal flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
          <div>
            <span className="label-pill-dark mb-5 inline-block">Método</span>
            <h2 className="font-display font-black text-[2rem] lg:text-[2.8rem] leading-[1.05] tracking-[-0.025em] mt-3"
              style={{ color: "hsl(0 0% 96%)" }}>
              Como a BPOn trabalha,<br />
              <span className="text-shimmer">passo a passo.</span>
            </h2>
          </div>
          <p className="font-body text-[13px] max-w-xs leading-relaxed lg:text-right lg:self-end"
            style={{ color: "hsl(210 18% 52%)" }}>
            Onboarding estruturado, sem ruptura — da análise inicial ao acompanhamento contínuo.
          </p>
        </div>

        {/* Steps */}
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid hsl(218 35% 16%)" }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${i + 1} group grid lg:grid-cols-[80px_1fr_1fr]`}
              style={{ borderBottom: i < steps.length - 1 ? "1px solid hsl(218 35% 14%)" : "none" }}
            >
              {/* Número */}
              <div className="hidden lg:flex flex-col items-center justify-center py-9 px-2"
                style={{ borderRight: "1px solid hsl(218 35% 14%)" }}>
                <span className="font-display font-black text-[2rem] leading-none"
                  style={{ color: "hsl(220 79% 55%)" }}>
                  {step.num}
                </span>
              </div>

              {/* O que fazemos */}
              <div className="p-7 lg:p-8" style={{ borderRight: "1px solid hsl(218 35% 14%)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="lg:hidden font-display font-black text-sm"
                    style={{ color: "hsl(220 79% 55%)" }}>{step.num}</span>
                  <h3 className="font-display font-bold text-[15px] leading-snug"
                    style={{ color: "hsl(210 50% 92%)" }}>
                    {step.title}
                  </h3>
                </div>
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] mb-2"
                  style={{ color: "hsl(210 20% 40%)" }}>O que fazemos</p>
                <p className="font-body text-[13px] leading-relaxed"
                  style={{ color: "hsl(210 18% 58%)" }}>{step.what_text}</p>
              </div>

              {/* O cliente passa a ter */}
              <div className="p-7 lg:p-8" style={{ background: "hsl(220 55% 6% / 0.6)" }}>
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] mb-2"
                  style={{ color: "hsl(220 79% 58% / 0.75)" }}>O cliente passa a ter</p>
                <p className="font-body text-[13px] leading-relaxed"
                  style={{ color: "hsl(210 22% 62%)" }}>{step.after_text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
