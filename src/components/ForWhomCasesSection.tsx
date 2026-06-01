import { Stethoscope, Factory, Briefcase as BriefcaseIcon, Store, Cpu, HardHat, Briefcase, HeartPulse, ArrowRight } from "lucide-react";

const sectors = [
  { icon: Stethoscope, label: "Clínicas e consultórios" },
  { icon: Factory, label: "Indústrias e atacadistas" },
  { icon: BriefcaseIcon, label: "Agências e serviços" },
  { icon: Store, label: "Comércio e varejo" },
  { icon: Cpu, label: "Tecnologia e SaaS" },
  { icon: HardHat, label: "Construção e engenharia" },
];

const profiles = [
  {
    num: "01",
    title: "Empresa em crescimento com financeiro desorganizado",
    text: "Receita crescendo, controles fragmentados e rotina operada no improviso. A estrutura não acompanhou o volume.",
  },
  {
    num: "02",
    title: "Gestão que precisa de caixa legível e previsível",
    text: "Liderança decidindo sem base financeira consolidada. Sem fluxo confiável, sem fechamento mensal, sem visão do resultado.",
  },
  {
    num: "03",
    title: "Operação dependente de uma única pessoa",
    text: "Risco de concentração, sem processo documentado e sem continuidade se essa pessoa sair ou faltar.",
  },
  {
    num: "04",
    title: "ERP ou planilha sem processo real por trás",
    text: "Ferramenta existe, mas falta quem opere com critério, cadência e responsabilidade sobre os dados gerados.",
  },
];

const cases = [
  {
    icon: Briefcase,
    segment: "Empresa de Serviços",
    profile: "Operação B2B · 15–40 colaboradores",
    context: "Financeiro operado em planilhas por uma única pessoa, sem fechamento mensal e sem previsibilidade de caixa.",
    action: "Estruturação da rotina financeira, implantação de controles e criação de fechamento gerencial mensal.",
    outcome: "Visibilidade de caixa, rotina previsível e leitura mensal que passou a apoiar as decisões da liderança.",
  },
  {
    icon: HeartPulse,
    segment: "Clínica de Saúde",
    profile: "Receita recorrente · Múltiplos convênios",
    context: "Receita recorrente, mas sem conciliação entre sistema, banco e operação. Decisões sem base financeira real.",
    action: "Implantação de conciliação financeira, organização do fluxo de caixa e indicadores de desempenho mensais.",
    outcome: "Fechamento mensal confiável, redução de inconsistências e clareza sobre a saúde financeira da operação.",
  },
];

const ForWhomCasesSection = () => {
  return (
    <section id="para-quem" className="py-20 lg:py-28 section-alt section-divide-top section-from-dark">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 lg:mb-14 reveal grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <div className="label-pill mb-4">Para quem é</div>
            <h2 className="font-display font-black text-[2rem] lg:text-[2.7rem] text-headline leading-[1.06] tracking-[-0.024em] mt-3">
              A Fintex BPO funciona melhor<br />
              <span className="text-gradient-primary">para quem já opera.</span>
            </h2>
          </div>
          <p className="font-body text-[13.5px] text-body leading-relaxed lg:self-end">
            Empresas com operação em andamento, volume financeiro real e necessidade concreta de organizar rotina, caixa e gestão.
          </p>
        </div>

        {/* 4 perfis 2×2 */}
        <div className="grid sm:grid-cols-2 gap-3.5">
          {profiles.map((profile, i) => (
            <div
              key={profile.num}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex gap-4 p-6 rounded-xl border border-divider bg-surface card-hover`}
            >
              <span className="font-display font-black text-[2rem] leading-none select-none flex-shrink-0 self-start mt-0.5"
                style={{ color: "hsl(var(--primary) / 0.11)" }}>
                {profile.num}
              </span>
              <div>
                <h3 className="font-display font-bold text-[13.5px] text-headline mb-1.5 leading-snug">
                  {profile.title}
                </h3>
                <p className="font-body text-[12.5px] text-body leading-relaxed">{profile.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Setores */}
        <div className="mt-10 reveal">
          <p className="font-body text-[12px] uppercase tracking-[0.14em] text-body/70 text-center mb-5">
            Setores atendidos
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div key={sector.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-divider bg-surface hover:border-primary/30 hover:bg-surface-tint transition-all duration-200">
                  <Icon size={14} className="text-primary" strokeWidth={1.8} />
                  <span className="font-body text-[12.5px] text-headline font-medium">{sector.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Casos representativos */}
        <div className="mt-16 lg:mt-20 reveal">
          <div className="mb-8 lg:mb-10 max-w-xl">
            <div className="label-pill mb-4">Situações reais</div>
            <h3 className="font-display font-black text-[1.5rem] lg:text-[2rem] text-headline leading-[1.08] tracking-[-0.022em] mt-3 mb-3">
              Padrões de operação<br />
              <span className="text-gradient-primary">que a Fintex BPO estrutura.</span>
            </h3>
            <p className="font-body text-[13.5px] text-body leading-relaxed">
              Dois exemplos representativos: problema inicial, o que foi estruturado e o resultado gerado.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
            {cases.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.segment}
                  className={`reveal reveal-delay-${i + 1} flex flex-col rounded-xl border border-divider bg-surface overflow-hidden shadow-card card-hover`}>

                  <div className="px-5 pt-5 pb-4 border-b border-divider">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="icon-sm icon-bg flex-shrink-0">
                        <Icon size={14} className="text-primary" strokeWidth={1.8} />
                      </div>
                      <span className="font-display font-bold text-[13px] text-headline">{c.segment}</span>
                    </div>
                    <p className="font-body text-[11px] text-muted-foreground">{c.profile}</p>
                  </div>

                  <div className="flex flex-col gap-4 p-5 flex-1">
                    <div>
                      <p className="font-body text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.10em] mb-1.5">Contexto</p>
                      <p className="font-body text-[12.5px] text-body leading-relaxed">{c.context}</p>
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

          <p className="mt-4 font-body text-[11px] text-muted-foreground italic">
            Os exemplos representam padrões reais de operação atendidos, com informações ajustadas por confidencialidade.
          </p>
        </div>

        {/* Strip CTA */}
        <div className="mt-8 cta-strip reveal">
          <p className="font-body text-[13px] leading-snug text-body">
            Seu perfil se parece com algum desses?{" "}
            <span className="text-headline font-medium">Vamos conversar.</span>
          </p>
          <a href="#diagnostico"
            className="group flex-shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-[13px] hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-blue whitespace-nowrap">
            Solicitar diagnóstico
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ForWhomCasesSection;
