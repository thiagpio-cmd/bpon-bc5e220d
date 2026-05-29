import { ArrowRight, Stethoscope, Factory, Briefcase, Store, Cpu, HardHat } from "lucide-react";

const sectors = [
  { icon: Stethoscope, label: "Clínicas e consultórios" },
  { icon: Factory, label: "Indústrias e atacadistas" },
  { icon: Briefcase, label: "Agências e serviços" },
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

const ForWhomSection = () => {
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
          <div className="flex flex-col gap-4 lg:self-end">
            <p className="font-body text-[13.5px] text-body leading-relaxed">
              A Fintex BPO funciona melhor para empresas com operação em andamento, volume financeiro real e necessidade concreta de organizar rotina, caixa e gestão.
            </p>
          </div>
        </div>

        {/* 4 cards 2×2 */}
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

        {/* Sectors */}
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

        {/* CTA */}
        <div className="mt-8 flex justify-center reveal">
          <a href="#diagnostico"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-[13px] hover:opacity-90 transition-all duration-200 shadow-blue group">
            Ver se a Fintex BPO é para minha empresa
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ForWhomSection;
