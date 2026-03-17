import { Briefcase, HeartPulse, ShoppingCart } from "lucide-react";

const cases = [
  {
    icon: Briefcase,
    segment: "Empresa de serviços",
    situation: "Financeiro operado em planilhas por uma única pessoa, sem fechamento mensal e sem previsibilidade de caixa.",
    action: "Estruturação da rotina financeira, implantação de controles de contas a pagar e receber, e criação de fechamento gerencial mensal.",
    outcome: "Visibilidade de caixa, rotina previsível e leitura mensal que passou a apoiar as decisões da liderança.",
  },
  {
    icon: HeartPulse,
    segment: "Clínica de saúde",
    situation: "Receita recorrente, mas sem conciliação entre sistema, banco e operação. Decisões tomadas sem base financeira real.",
    action: "Implantação de conciliação financeira, organização do fluxo de caixa e estruturação de indicadores de desempenho mensais.",
    outcome: "Fechamento mensal confiável, redução de inconsistências e clareza sobre a saúde financeira real da operação.",
  },
  {
    icon: ShoppingCart,
    segment: "Empresa comercial",
    situation: "Crescimento da operação sem crescimento da estrutura financeira. ERP existente, mas sem processo real de operação.",
    action: "Revisão dos controles, organização da agenda financeira e implantação de rotina de acompanhamento semanal e mensal.",
    outcome: "Operação financeira estruturada, equipe alinhada e relatório gerencial implantado como base de decisão mensal.",
  },
];

const CasesSection = () => {
  return (
    <section id="casos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 lg:mb-16 reveal text-center max-w-2xl mx-auto">
          <div className="label-pill w-fit mx-auto mb-5">Situações reais</div>
          <h2 className="font-display font-black text-[2.2rem] lg:text-[2.8rem] text-headline leading-[1.1] tracking-tight mb-4">
            Situações reais que a BPOn resolve.
          </h2>
          <p className="font-body text-base text-body leading-relaxed">
            Perfis de empresas com desafios concretos — e como a estrutura da BPOn
            foi aplicada para resolver cada um deles.
          </p>
        </div>

        {/* Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.segment}
                className={`reveal reveal-delay-${i + 1} flex flex-col rounded-2xl border border-divider bg-surface overflow-hidden shadow-card card-hover`}
              >
                {/* Top bar */}
                <div className="px-6 pt-6 pb-5 border-b border-divider">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-9 h-9 rounded-xl bg-primary/8 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-primary" strokeWidth={1.6} />
                    </div>
                    <span className="font-display font-bold text-sm text-headline">{c.segment}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col gap-5 p-6 flex-1">
                  <div>
                    <p className="font-display font-semibold text-xs text-muted-foreground uppercase tracking-wider mb-2">Situação</p>
                    <p className="font-body text-sm text-body leading-relaxed">{c.situation}</p>
                  </div>

                  <div>
                    <p className="font-display font-semibold text-xs text-primary uppercase tracking-wider mb-2">O que foi feito</p>
                    <p className="font-body text-sm text-body leading-relaxed">{c.action}</p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-divider">
                    <p className="font-display font-semibold text-xs text-headline uppercase tracking-wider mb-2">Resultado percebido</p>
                    <p className="font-body text-sm text-body leading-relaxed">{c.outcome}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center reveal reveal-delay-4">
          <p className="font-body text-xs text-muted-foreground">
            Os perfis acima representam tipos de situações atendidas pela BPOn. Dados omitidos por sigilo comercial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
