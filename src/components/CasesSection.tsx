import { Briefcase, HeartPulse, ShoppingCart, ArrowRight } from "lucide-react";

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
  return (
    <section id="casos" className="py-20 lg:py-28 section-alt-2 section-divide-top">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 lg:mb-14 reveal max-w-xl">
          <div className="label-pill mb-4">Situações reais</div>
          <h2 className="font-display font-black text-[2rem] lg:text-[2.6rem] text-headline leading-[1.06] tracking-[-0.024em] mt-3 mb-3">
            Padrões de operação<br />
            <span className="text-gradient-primary">que a BPOn estrutura.</span>
          </h2>
          <p className="font-body text-[13.5px] text-body leading-relaxed">
            Perfis de empresas com desafios concretos — e como a estrutura da BPOn
            foi aplicada para cada situação.
          </p>
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.segment}
                className={`reveal reveal-delay-${i + 1} flex flex-col rounded-xl border border-divider bg-surface overflow-hidden shadow-card card-hover`}
              >
                {/* Card header */}
                <div className="px-5 pt-5 pb-4 border-b border-divider">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="icon-sm icon-bg flex-shrink-0">
                      <Icon size={14} className="text-primary" strokeWidth={1.8} />
                    </div>
                    <span className="font-display font-bold text-[13px] text-headline">{c.segment}</span>
                  </div>
                  <p className="font-body text-[11px] text-muted-foreground">{c.profile}</p>
                </div>

                {/* Body */}
                <div className="flex flex-col gap-4 p-5 flex-1">
                  <div>
                    <p className="font-body text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.10em] mb-1.5">Contexto</p>
                    <p className="font-body text-[12.5px] text-body leading-relaxed">{c.context}</p>
                  </div>
                  <div>
                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.10em] mb-1.5" style={{ color: "hsl(0 65% 50% / 0.60)" }}>Problema principal</p>
                    <p className="font-body text-[12.5px] text-body leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <p className="font-body text-[10px] font-semibold text-primary/55 uppercase tracking-[0.10em] mb-1.5">O que foi estruturado</p>
                    <p className="font-body text-[12.5px] text-body leading-relaxed">{c.action}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-divider">
                    <p className="font-body text-[10px] font-semibold text-headline/55 uppercase tracking-[0.10em] mb-1.5">Resultado gerado</p>
                    <p className="font-body text-[12.5px] text-body leading-relaxed">{c.outcome}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-4 font-body text-[11px] text-muted-foreground reveal reveal-delay-4 italic">
          Os exemplos representam padrões reais de operação atendidos, com informações ajustadas por confidencialidade.
        </p>

        {/* CTA */}
        <div className="mt-8 reveal reveal-delay-5 flex flex-col items-center text-center gap-3 px-6 py-8 rounded-2xl border border-divider bg-surface">
          <p className="font-display font-bold text-[16px] text-headline">
            Sua empresa tem um perfil parecido?
          </p>
          <p className="font-body text-[13px] text-body max-w-sm">
            Faz sentido começar com um diagnóstico da operação financeira — sem custo e sem compromisso.
          </p>
          <a href="#diagnostico"
            className="group inline-flex items-center gap-2 px-7 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-[13px] shadow-blue hover:opacity-90 hover:scale-[1.02] transition-all duration-300 mt-1">
            Iniciar diagnóstico
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default CasesSection;
