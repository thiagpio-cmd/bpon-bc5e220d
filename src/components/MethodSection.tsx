import { useState } from "react";
import { ArrowRight, FileText, Settings, Play, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: FileText,
    time: "Semana 1",
    title: "Diagnóstico da operação",
    what_text: "Mapeamos como o financeiro funciona hoje: controles, responsáveis, fluxo de informações, ferramentas e onde estão os principais gargalos.",
    deliverable: "Relatório de diagnóstico com prioridades mapeadas",
    after_text: "Clareza sobre onde está a fragilidade e quais rotinas precisam de correção imediata.",
  },
  {
    icon: Settings,
    time: "Semana 2–4",
    title: "Estruturação da rotina",
    what_text: "Definimos processo, cadência, critérios de conferência e organização da base: com responsabilidades claras e padrão operacional documentado.",
    deliverable: "Manual de rotina financeira e agenda recorrente",
    after_text: "Uma rotina financeira que funciona com método, não com esforço individual.",
  },
  {
    icon: Play,
    time: "Mês 2",
    title: "Implantação e controles",
    what_text: "A rotina entra em funcionamento com acompanhamento: contas, conciliação, fluxo e fechamento rodando em cadência real.",
    deliverable: "Primeiro fechamento gerencial completo",
    after_text: "Operação mais previsível, menos improviso e base de dados mais confiável.",
  },
  {
    icon: RefreshCw,
    time: "Recorrente",
    title: "Acompanhamento contínuo",
    what_text: "Reportes periódicos com indicadores, fechamento gerencial e leitura de caixa para a liderança acompanhar o negócio com segurança.",
    deliverable: "Relatório gerencial mensal + reunião de leitura",
    after_text: "Base financeira que sustenta decisão com critério, não no feeling.",
  },
];

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

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-12 lg:mb-14 reveal flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
          <div>
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] mb-5"
              style={{ color: "hsl(214 70% 58%)" }}>
              Método
            </p>
            <h2 className="font-display font-black leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", color: "hsl(210 50% 95%)" }}>
              Como a BPOn trabalha,
              <br />passo a passo.
            </h2>
          </div>
          <p className="font-body text-[13px] max-w-xs leading-relaxed lg:text-right lg:self-end"
            style={{ color: "hsl(210 22% 58%)" }}>
            Onboarding estruturado, sem ruptura operacional: da análise inicial ao acompanhamento contínuo.
          </p>
        </div>

        {/* Steps — tabela limpa sem borda lateral animada */}
        <div className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid hsl(214 30% 22%)", background: "hsl(222 42% 11%)" }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = activeStep === i;
            return (
              <div
                key={step.title}
                className={`reveal reveal-delay-${i + 1} group relative`}
                style={{
                  borderBottom: i < steps.length - 1 ? "1px solid hsl(214 28% 18%)" : "none",
                  background: isActive ? "hsl(222 40% 15%)" : "transparent",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}>

                <div className="grid lg:grid-cols-[72px_1fr_1fr] gap-0">
                  {/* Ícone + tempo */}
                  <div className="hidden lg:flex flex-col items-center justify-center py-8 px-3 gap-3"
                    style={{ borderRight: "1px solid hsl(214 28% 18%)" }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isActive ? "hsl(var(--primary) / 0.18)" : "hsl(var(--primary) / 0.08)",
                        border: "1px solid hsl(var(--primary) / 0.2)",
                      }}>
                      <Icon size={15} style={{ color: isActive ? "hsl(214 80% 72%)" : "hsl(214 60% 52%)" }} />
                    </div>
                    <span className="font-body text-[9px] uppercase tracking-[0.1em] text-center leading-tight"
                      style={{ color: "hsl(210 16% 36%)" }}>{step.time}</span>
                  </div>

                  {/* O que fazemos */}
                  <div className="p-6 lg:p-8" style={{ borderRight: "1px solid hsl(214 28% 18%)" }}>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-display font-bold text-[15px] leading-snug transition-colors duration-300"
                        style={{ color: isActive ? "hsl(210 65% 96%)" : "hsl(210 45% 88%)" }}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] mb-2"
                      style={{ color: "hsl(210 18% 42%)" }}>O que fazemos</p>
                    <p className="font-body text-[13px] leading-relaxed mb-4"
                      style={{ color: isActive ? "hsl(210 22% 68%)" : "hsl(210 18% 60%)" }}>{step.what_text}</p>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg"
                      style={{ background: "hsl(214 50% 14%)", border: "1px solid hsl(214 30% 22%)" }}>
                      <span className="font-body text-[9px] uppercase tracking-[0.1em] font-semibold flex-shrink-0"
                        style={{ color: "hsl(214 60% 48%)" }}>Entregável</span>
                      <span className="font-body text-[11px] leading-snug" style={{ color: "hsl(210 30% 68%)" }}>{step.deliverable}</span>
                    </div>
                  </div>

                  {/* O cliente passa a ter */}
                  <div className="p-6 lg:p-8"
                    style={{ background: isActive ? "hsl(214 40% 13%)" : "hsl(222 38% 10% / 0.5)" }}>
                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] mb-2"
                      style={{ color: "hsl(214 70% 55% / 0.80)" }}>O cliente passa a ter</p>
                    <p className="font-body text-[13px] leading-relaxed"
                      style={{ color: isActive ? "hsl(210 28% 72%)" : "hsl(210 22% 62%)" }}>{step.after_text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 reveal reveal-delay-5 flex flex-col sm:flex-row items-center justify-between gap-5 px-7 py-6 rounded-2xl"
          style={{ background: "hsl(222 42% 11%)", border: "1px solid hsl(214 30% 22%)" }}>
          <div>
            <p className="font-display font-bold text-[15px]" style={{ color: "hsl(210 50% 92%)" }}>
              Pronto para começar com um diagnóstico sem compromisso?
            </p>
            <p className="font-body text-[13px] mt-1" style={{ color: "hsl(210 18% 52%)" }}>
              A equipe analisa a operação e retorna em até 1 dia útil.
            </p>
          </div>
          <a href="#diagnostico"
            className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-[13px] shadow-blue hover:opacity-90 hover:scale-[1.02] transition-all duration-300 whitespace-nowrap flex-shrink-0">
            Solicitar diagnóstico
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default MethodSection;
