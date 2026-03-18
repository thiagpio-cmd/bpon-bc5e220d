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
    <section id="metodo" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(218,70%,9%) 0%, hsl(220,65%,8%) 100%)" }}>

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(hsl(210 80% 72% / 1) 1px, transparent 1px), linear-gradient(90deg, hsl(210 80% 72% / 1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Blue glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(220 79% 46% / 0.07) 0%, transparent 65%)" }} />

      <div className="container mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <div className="mb-14 lg:mb-16 reveal flex flex-col lg:flex-row lg:items-end gap-8 justify-between">
          <div>
            <span className="label-pill-dark mb-5 inline-block">Método</span>
            <h2 className="font-display font-black text-[2rem] lg:text-[2.8rem] text-white leading-[1.05] tracking-[-0.025em] mt-3">
              Como a BPOn trabalha,<br />
              <span className="text-shimmer">passo a passo.</span>
            </h2>
          </div>
          <p className="font-body text-[13px] max-w-xs leading-relaxed lg:text-right lg:self-end" style={{ color: "hsl(210 20% 50%)" }}>
            Onboarding estruturado, sem ruptura — da análise inicial ao acompanhamento contínuo.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-0 rounded-2xl overflow-hidden" style={{ border: "1px solid hsl(210 30% 20%)" }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${i + 1} group grid lg:grid-cols-[96px_1fr_1fr] last:border-b-0`}
              style={{ borderBottom: i < steps.length - 1 ? "1px solid hsl(210 30% 18%)" : "none" }}
            >
              {/* Number column */}
              <div className="hidden lg:flex flex-col items-center justify-center py-10 px-3"
                style={{ borderRight: "1px solid hsl(210 30% 18%)" }}>
                <span className="font-display font-black text-[2.2rem] leading-none transition-colors"
                  style={{ color: "hsl(220 79% 52%)" }}>
                  {step.num}
                </span>
              </div>

              {/* What */}
              <div className="p-7 lg:p-8"
                style={{ borderBottom: "1px solid hsl(210 30% 18%)", borderRight: "none" }}
                className="p-7 lg:p-8 border-b lg:border-b-0 lg:border-r"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="lg:hidden font-display font-black text-sm" style={{ color: "hsl(220 79% 52%)" }}>{step.num}</span>
                  {/* Step title — visível e forte */}
                  <h3 className="font-display font-bold text-[15px] leading-snug" style={{ color: "hsl(210 40% 90%)" }}>
                    {step.title}
                  </h3>
                </div>
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5" style={{ color: "hsl(210 30% 42%)" }}>O que fazemos</p>
                <p className="font-body text-[13px] leading-relaxed" style={{ color: "hsl(210 20% 56%)" }}>{step.what_text}</p>
              </div>

              {/* After */}
              <div className="p-7 lg:p-8" style={{ background: "hsl(220 60% 7% / 0.5)" }}>
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] mb-2.5" style={{ color: "hsl(220 79% 55% / 0.8)" }}>O cliente passa a ter</p>
                <p className="font-body text-[13px] leading-relaxed" style={{ color: "hsl(210 25% 60%)" }}>{step.after_text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
