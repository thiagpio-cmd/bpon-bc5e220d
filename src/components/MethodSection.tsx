import { useState } from "react";

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
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="metodo" className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "hsl(220 50% 7%)" }}>

      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(220 79% 46% / 0.06) 0%, transparent 68%)" }} />

      {/* Animated geometric shapes */}
      <div className="absolute top-32 right-24 w-24 h-24 border border-primary/8 rounded-2xl rotate-45 animate-float-slow pointer-events-none hidden lg:block" />
      <div className="absolute bottom-40 left-16 w-4 h-4 rounded-full bg-primary/20 animate-pulse pointer-events-none hidden lg:block" />

      {/* Vertical progress line */}
      <div className="absolute left-[calc(50%-640px+40px)] top-[200px] bottom-[100px] w-px hidden lg:block pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(220 79% 46% / 0.2), transparent)" }} />

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
              className={`reveal reveal-delay-${i + 1} group grid lg:grid-cols-[80px_1fr_1fr] relative`}
              style={{
                borderBottom: i < steps.length - 1 ? "1px solid hsl(218 35% 14%)" : "none",
                background: activeStep === i ? "hsl(220 55% 9%)" : "transparent",
                transition: "background 0.35s ease",
              }}
              onMouseEnter={() => setActiveStep(i)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Left accent on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-500"
                style={{
                  background: "hsl(220 79% 52%)",
                  opacity: activeStep === i ? 1 : 0,
                  transform: activeStep === i ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "top",
                }} />

              {/* Número */}
              <div className="hidden lg:flex flex-col items-center justify-center py-9 px-2 relative"
                style={{ borderRight: "1px solid hsl(218 35% 14%)" }}>
                <span className="font-display font-black text-[2rem] leading-none transition-all duration-400"
                  style={{
                    color: activeStep === i ? "hsl(220 79% 62%)" : "hsl(220 79% 55%)",
                    transform: activeStep === i ? "scale(1.15)" : "scale(1)",
                  }}>
                  {step.num}
                </span>
                {/* Step connector dot */}
                {i < steps.length - 1 && (
                  <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-[9px] h-[9px] rounded-full z-10 border-2"
                    style={{
                      borderColor: "hsl(218 55% 8%)",
                      background: activeStep === i ? "hsl(220 79% 55%)" : "hsl(218 35% 20%)",
                      transition: "background 0.3s ease",
                    }} />
                )}
              </div>

              {/* O que fazemos */}
              <div className="p-7 lg:p-8" style={{ borderRight: "1px solid hsl(218 35% 14%)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="lg:hidden font-display font-black text-sm"
                    style={{ color: "hsl(220 79% 55%)" }}>{step.num}</span>
                  <h3 className="font-display font-bold text-[15px] leading-snug transition-colors duration-300"
                    style={{ color: activeStep === i ? "hsl(210 70% 96%)" : "hsl(210 50% 92%)" }}>
                    {step.title}
                  </h3>
                </div>
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] mb-2"
                  style={{ color: "hsl(210 20% 40%)" }}>O que fazemos</p>
                <p className="font-body text-[13px] leading-relaxed transition-colors duration-300"
                  style={{ color: activeStep === i ? "hsl(210 18% 66%)" : "hsl(210 18% 58%)" }}>{step.what_text}</p>
              </div>

              {/* O cliente passa a ter */}
              <div className="p-7 lg:p-8" style={{ background: "hsl(220 55% 6% / 0.6)" }}>
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] mb-2"
                  style={{ color: "hsl(220 79% 58% / 0.75)" }}>O cliente passa a ter</p>
                <p className="font-body text-[13px] leading-relaxed transition-colors duration-300"
                  style={{ color: activeStep === i ? "hsl(210 22% 70%)" : "hsl(210 22% 62%)" }}>{step.after_text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
