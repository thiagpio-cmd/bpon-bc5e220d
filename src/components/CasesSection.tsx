import { Briefcase, HeartPulse, ShoppingCart, ArrowRight } from "lucide-react";
import { useState } from "react";

const cases = [
  {
    icon: Briefcase,
    segment: "Empresa de Serviços",
    profile: "Operação B2B · 15–40 colaboradores",
    context: "Financeiro operado em planilhas por uma única pessoa, sem fechamento mensal e sem previsibilidade de caixa.",
    problem: "Risco de concentração, dados inconsistentes e liderança sem base para decidir com segurança.",
    action: "Estruturação da rotina financeira, implantação de controles e criação de fechamento gerencial mensal.",
    outcome: "Visibilidade de caixa, rotina previsível e leitura mensal que passou a apoiar as decisões da liderança.",
  },
  {
    icon: HeartPulse,
    segment: "Clínica de Saúde",
    profile: "Receita recorrente · Múltiplos convênios",
    context: "Receita recorrente, mas sem conciliação entre sistema, banco e operação. Decisões sem base financeira real.",
    problem: "Inconsistências entre o que entrava no sistema e o que chegava no banco. Fechamento sempre tardio.",
    action: "Implantação de conciliação financeira, organização do fluxo de caixa e indicadores de desempenho mensais.",
    outcome: "Fechamento mensal confiável, redução de inconsistências e clareza sobre a saúde financeira da operação.",
  },
  {
    icon: ShoppingCart,
    segment: "Empresa Comercial",
    profile: "Comércio · Em processo de expansão",
    context: "Crescimento da operação sem crescimento da estrutura financeira. ERP existente, mas sem processo real.",
    problem: "Ferramentas disponíveis, mas operação dependente de esforço individual sem processo documentado.",
    action: "Revisão dos controles, organização da agenda financeira e implantação de rotina de acompanhamento recorrente.",
    outcome: "Operação financeira estruturada, equipe alinhada e relatório gerencial como base de decisão mensal.",
  },
];

const CasesSection = () => {
  const [activeCase, setActiveCase] = useState<number | null>(null);

  return (
    <section id="casos" className="py-20 lg:py-28 section-alt-2 section-divide-top">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Header — compacto, alinhado à esquerda */}
        <div className="mb-12 lg:mb-16 reveal">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-5">
            Situações reais
          </p>
          <h2 className="font-display font-black text-headline leading-[1.04] tracking-[-0.028em] max-w-lg"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}>
            Padrões de operação
            que a BPOn estrutura.
          </h2>
        </div>

        {/* Cases — layout tabela, cada campo com label inline */}
        <div className="flex flex-col gap-4">
          {cases.map((c, i) => {
            const Icon = c.icon;
            const isActive = activeCase === i;
            return (
              <div
                key={c.segment}
                className={`reveal reveal-delay-${i + 1} rounded-2xl border overflow-hidden transition-all duration-300 cursor-default`}
                style={{
                  borderColor: isActive ? "hsl(var(--primary) / 0.20)" : "hsl(var(--divider))",
                  background: isActive ? "hsl(var(--surface-tint))" : "hsl(var(--surface))",
                }}
                onMouseEnter={() => setActiveCase(i)}
                onMouseLeave={() => setActiveCase(null)}
              >
                {/* Header linha */}
                <div className="flex items-center gap-4 px-6 py-4 border-b"
                  style={{ borderColor: isActive ? "hsl(var(--primary) / 0.10)" : "hsl(var(--divider))" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: isActive ? "hsl(var(--primary) / 0.12)" : "hsl(var(--primary) / 0.06)",
                      border: "1px solid hsl(var(--primary) / 0.14)",
                    }}>
                    <Icon size={14} className="text-primary" strokeWidth={1.8} />
                  </div>
                  <div>
                    <span className="font-display font-bold text-[14px] text-headline">{c.segment}</span>
                    <span className="font-body text-[11px] text-muted-foreground ml-3">{c.profile}</span>
                  </div>
                </div>

                {/* Grid de campos — 4 colunas em desktop */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-divider">
                  {[
                    { label: "Contexto", value: c.context },
                    { label: "Desafio", value: c.problem },
                    { label: "Estruturado", value: c.action },
                    { label: "Resultado", value: c.outcome, accent: true },
                  ].map((field) => (
                    <div key={field.label} className="px-5 py-5">
                      <p className="font-body text-[9.5px] font-semibold uppercase tracking-[0.12em] mb-2"
                        style={{ color: field.accent ? "hsl(var(--primary) / 0.70)" : "hsl(var(--body) / 0.55)" }}>
                        {field.label}
                      </p>
                      <p className="font-body text-[12px] text-body leading-relaxed">{field.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-4 font-body text-[11px] text-muted-foreground reveal reveal-delay-4 italic">
          Os exemplos representam padrões reais de operação atendidos, com informações ajustadas por confidencialidade.
        </p>

        {/* CTA — linha fina, não caixão */}
        <div className="mt-10 reveal reveal-delay-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 border-t border-divider">
          <div>
            <p className="font-display font-bold text-[16px] text-headline mb-1">
              Sua empresa tem um perfil parecido?
            </p>
            <p className="font-body text-[13px] text-body max-w-sm">
              Faz sentido começar com um diagnóstico da operação — sem custo e sem compromisso.
            </p>
          </div>
          <a href="#diagnostico"
            className="group inline-flex items-center gap-2 px-7 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-[13px] shadow-blue hover:opacity-90 hover:scale-[1.02] transition-all duration-300 whitespace-nowrap flex-shrink-0">
            Iniciar diagnóstico
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default CasesSection;
