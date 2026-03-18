import { Briefcase, HeartPulse, ShoppingCart, ArrowRight } from "lucide-react";

const cases = [
  {
    icon: Briefcase,
    segment: "Empresa de serviços",
    situation: "Financeiro operado em planilhas por uma única pessoa, sem fechamento mensal e sem previsibilidade de caixa.",
    action: "Estruturação da rotina financeira, implantação de controles e criação de fechamento gerencial mensal.",
    outcome: "Visibilidade de caixa, rotina previsível e leitura mensal que passou a apoiar as decisões da liderança.",
  },
  {
    icon: HeartPulse,
    segment: "Clínica de saúde",
    situation: "Receita recorrente, mas sem conciliação entre sistema, banco e operação. Decisões sem base financeira real.",
    action: "Implantação de conciliação financeira, organização do fluxo de caixa e indicadores de desempenho mensais.",
    outcome: "Fechamento mensal confiável, redução de inconsistências e clareza sobre a saúde financeira da operação.",
  },
  {
    icon: ShoppingCart,
    segment: "Empresa comercial",
    situation: "Crescimento da operação sem crescimento da estrutura financeira. ERP existente, mas sem processo real.",
    action: "Revisão dos controles, organização da agenda financeira e implantação de rotina de acompanhamento recorrente.",
    outcome: "Operação financeira estruturada, equipe alinhada e relatório gerencial como base de decisão mensal.",
  },
];

const CasesSection = () => {
  return (
    <section id="casos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 lg:mb-14 reveal max-w-2xl">
          <div className="label-pill mb-5">Situações reais</div>
          <h2 className="font-display font-black text-[2rem] lg:text-[2.6rem] text-headline leading-[1.07] tracking-[-0.022em] mt-3 mb-4">
            Situações reais que a BPOn resolve.
          </h2>
          <p className="font-body text-[14px] text-body leading-relaxed">
            Perfis de empresas com desafios concretos — e como a estrutura da BPOn
            foi aplicada para cada situação.
          </p>
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.segment}
                className={`reveal reveal-delay-${i + 1} flex flex-col rounded-xl border border-divider bg-surface overflow-hidden shadow-card card-hover`}
              >
                {/* Header card */}
                <div className="px-6 pt-6 pb-4 border-b border-divider flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/8 border border-primary/16 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-primary" strokeWidth={1.8} />
                  </div>
                  <span className="font-display font-bold text-[13px] text-headline">{c.segment}</span>
                </div>

                {/* Body */}
                <div className="flex flex-col gap-5 p-6 flex-1">
                  <div>
                    <p className="font-body text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.1em] mb-1.5">Situação</p>
                    <p className="font-body text-[13px] text-body leading-relaxed">{c.situation}</p>
                  </div>
                  <div>
                    <p className="font-body text-[10px] font-semibold text-primary/60 uppercase tracking-[0.1em] mb-1.5">O que foi feito</p>
                    <p className="font-body text-[13px] text-body leading-relaxed">{c.action}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-divider">
                    <p className="font-body text-[10px] font-semibold text-headline/60 uppercase tracking-[0.1em] mb-1.5">Resultado</p>
                    <p className="font-body text-[13px] text-body leading-relaxed">{c.outcome}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 font-body text-[11px] text-muted-foreground reveal reveal-delay-4">
          Os perfis representam tipos de situações atendidas. Dados omitidos por sigilo comercial.
        </p>

        {/* CTA centralizado */}
        <div className="mt-10 reveal reveal-delay-5 flex flex-col items-center text-center gap-4 px-6 py-8 rounded-2xl border border-divider bg-surface">
          <div>
            <p className="font-display font-bold text-[17px] text-headline mb-1.5">
              Sua empresa tem um perfil parecido?
            </p>
            <p className="font-body text-[13px] text-body max-w-sm">
              Faz sentido começar com um diagnóstico da operação financeira — sem custo e sem compromisso.
            </p>
          </div>
          <a
            href="#diagnostico"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-[13px] shadow-blue hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
          >
            Iniciar diagnóstico
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default CasesSection;
