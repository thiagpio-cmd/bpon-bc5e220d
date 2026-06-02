import { useState } from "react";
import { FileText, Settings, Play, RefreshCw, ArrowRight } from "lucide-react";

const steps = [
{
  num: "01",
  icon: FileText,
  title: "Diagnóstico da operação",
  time: "Semana 1",
  what_text: "Mapeamos como o financeiro funciona hoje: controles, responsáveis, fluxo de informações, ferramentas e onde estão os principais gargalos.",
  deliverable: "Relatório de diagnóstico com prioridades mapeadas",
  after_text: "Clareza sobre onde está a fragilidade e quais rotinas precisam de correção imediata."
},
{
  num: "02",
  icon: Settings,
  title: "Estruturação da rotina",
  time: "Semana 2-4",
  what_text: "Definimos processo, cadência, critérios de conferência e organização da base: com responsabilidades claras e padrão operacional documentado.",
  deliverable: "Manual de rotina financeira e agenda recorrente",
  after_text: "Uma rotina financeira que funciona com método, não com esforço individual."
},
{
  num: "03",
  icon: Play,
  title: "Implantação e controles",
  time: "Mês 2",
  what_text: "A rotina entra em funcionamento com acompanhamento: contas, conciliação, fluxo e fechamento rodando em cadência real.",
  deliverable: "Primeiro fechamento gerencial completo",
  after_text: "Operação mais previsível, menos improviso e base de dados mais confiável."
},
{
  num: "04",
  icon: RefreshCw,
  title: "Acompanhamento contínuo",
  time: "Recorrente",
  what_text: "Reportes periódicos com indicadores, fechamento gerencial e leitura de caixa para a liderança acompanhar o negócio com segurança.",
  deliverable: "Relatório gerencial mensal + reunião de leitura",
  after_text: "Base financeira que sustenta decisão com critério, não no feeling."
}];


const MethodSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="metodo" className="py-24 lg:py-32 relative overflow-hidden"
    style={{ background: "hsl(222 38% 14%)", borderTop: "1px solid hsl(214 50% 20% / 0.5)" }}>

      <div className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse 70% 60% at 85% 80%, hsl(214 79% 46% / 0.07) 0%, transparent 65%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px"
      style={{ background: "linear-gradient(to right, transparent, hsl(214 60% 55% / 0.2), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
      style={{ background: "linear-gradient(to right, transparent, hsl(214 60% 55% / 0.15), transparent)" }} />
      <div className="absolute top-28 right-20 w-20 h-20 border border-blue-400/10 rounded-2xl rotate-45 animate-float-slow pointer-events-none hidden lg:block" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-12 lg:mb-14 reveal flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
          <div>
            <span className="label-pill-dark mb-5 inline-block">Método</span>
            <h2 className="font-display font-black text-[2rem] lg:text-[2.8rem] leading-[1.05] tracking-[-0.025em] mt-3"
            style={{ color: "hsl(210 50% 95%)" }}>
              Como a Fintex BPO trabalha,<br />
              <span className="text-shimmer">passo a passo.</span>
            </h2>
          </div>
          <p className="font-body text-[13px] max-w-xs leading-relaxed lg:text-right lg:self-end"
          style={{ color: "hsl(210 22% 58%)" }}>
            Onboarding estruturado, sem ruptura operacional: da análise inicial ao acompanhamento contínuo.
          </p>
        </div>

        {/* Steps */}
        <div className="rounded-2xl overflow-hidden"
        style={{ border: "1px solid hsl(214 30% 22%)", background: "hsl(222 42% 11%)" }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`reveal reveal-delay-${i + 1} group relative`}
                style={{
                  borderBottom: i < steps.length - 1 ? "1px solid hsl(214 28% 18%)" : "none",
                  background: activeStep === i ? "hsl(222 40% 15%)" : "transparent",
                  transition: "background 0.3s ease"
                }}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}>
                
                {/* Left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-500"
                style={{
                  background: "hsl(var(--primary))",
                  opacity: activeStep === i ? 1 : 0,
                  transform: activeStep === i ? "scaleY(1)" : "scaleY(0.2)",
                  transformOrigin: "top"
                }} />

                <div className="grid lg:grid-cols-[88px_1fr_1fr] gap-0">
                  {/* Número + ícone */}
                  <div className="hidden lg:flex flex-col items-center justify-center py-8 px-3 relative gap-3"
                  style={{ borderRight: "1px solid hsl(214 28% 18%)" }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: activeStep === i ? "hsl(var(--primary) / 0.18)" : "hsl(var(--primary) / 0.08)",
                      border: "1px solid hsl(var(--primary) / 0.2)"
                    }}>
                      <Icon size={15} style={{ color: activeStep === i ? "hsl(214 80% 72%)" : "hsl(214 60% 52%)" }} />
                    </div>
                    <span className="font-display font-black text-[1.5rem] leading-none transition-all duration-300"
                    style={{
                      color: activeStep === i ? "hsl(214 80% 68%)" : "hsl(214 60% 44%)",
                      transform: activeStep === i ? "scale(1.08)" : "scale(1)"
                    }}>
                      {step.num}
                    </span>
                    <span className="font-body text-[9px] uppercase tracking-[0.1em] text-center leading-tight"
                    style={{ color: "hsl(210 16% 36%)" }}>{step.time}</span>
                    {i < steps.length - 1 &&
                    <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-[8px] h-[8px] rounded-full z-10 border-2 transition-all duration-300"
                    style={{
                      borderColor: "hsl(222 42% 11%)",
                      background: activeStep === i ? "hsl(var(--primary))" : "hsl(214 30% 28%)"
                    }} />
                    }
                  </div>

                  {/* O que fazemos */}
                  <div className="p-6 lg:p-8" style={{ borderRight: "1px solid hsl(214 28% 18%)" }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="lg:hidden font-display font-black text-sm" style={{ color: "hsl(214 70% 58%)" }}>{step.num}</span>
                      <h3 className="font-display font-bold text-[15px] leading-snug transition-colors duration-300"
                      style={{ color: activeStep === i ? "hsl(210 65% 96%)" : "hsl(210 45% 88%)" }}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] mb-2"
                    style={{ color: "hsl(210 18% 42%)" }}>O que fazemos</p>
                    <p className="font-body text-[13px] leading-relaxed mb-4"
                    style={{ color: activeStep === i ? "hsl(210 22% 68%)" : "hsl(210 18% 60%)" }}>{step.what_text}</p>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg"
                    style={{ background: "hsl(214 50% 14%)", border: "1px solid hsl(214 30% 22%)" }}>
                      <span className="font-body text-[9px] uppercase tracking-[0.1em] font-semibold flex-shrink-0"
                      style={{ color: "hsl(214 60% 48%)" }}>Entregável</span>
                      <span className="font-body text-[11px] leading-snug" style={{ color: "hsl(210 30% 68%)" }}>{step.deliverable}</span>
                    </div>
                  </div>

                  {/* O cliente passa a ter */}
                  <div className="p-6 lg:p-8"
                  style={{ background: activeStep === i ? "hsl(214 40% 13%)" : "hsl(222 38% 10% / 0.5)" }}>
                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] mb-2"
                    style={{ color: "hsl(214 70% 55% / 0.80)" }}>O cliente passa a ter</p>
                    <p className="font-body text-[13px] leading-relaxed"
                    style={{ color: activeStep === i ? "hsl(210 28% 72%)" : "hsl(210 22% 62%)" }}>{step.after_text}</p>
                  </div>
                </div>
              </div>);

          })}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-5 rounded-2xl"
          style={{ background: "hsl(222 38% 10% / 0.6)", border: "1px solid hsl(214 35% 22%)" }}>
          <p className="font-body text-[13px] leading-snug" style={{ color: "hsl(210 30% 70%)" }}>
            Pronto para começar pelo passo 1?{" "}
            <span className="font-medium" style={{ color: "hsl(210 50% 92%)" }}>Solicite seu diagnóstico.</span>
          </p>
          <a href="#diagnostico"
            className="group flex-shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-[13px] hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-blue whitespace-nowrap">
            Começar pelo passo 1
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </div>

      </div>
    </section>);

};

export default MethodSection;