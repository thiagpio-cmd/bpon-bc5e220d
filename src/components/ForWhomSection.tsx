import { ArrowRight } from "lucide-react";

const profiles = [
  {
    num: "01",
    title: "Empresa em crescimento com financeiro desorganizado",
    text: "Receita crescendo, controles fragmentados, falta de previsibilidade e rotina operada no improviso.",
  },
  {
    num: "02",
    title: "Gestão que precisa de caixa legível e previsível",
    text: "Liderança tomando decisão sem base financeira consolidada — sem fluxo confiável, sem fechamento mensal.",
  },
  {
    num: "03",
    title: "Operação dependente de uma única pessoa",
    text: "Risco de concentração, sem processo documentado e sem continuidade se essa pessoa sair ou faltar.",
  },
  {
    num: "04",
    title: "ERP ou planilha sem processo real por trás",
    text: "Ferramentas existem, mas falta quem opere com critério, cadência e responsabilidade sobre os dados.",
  },
];

const ForWhomSection = () => {
  return (
    <section id="para-quem" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 lg:mb-14 reveal grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <div className="label-pill mb-4">Para quem é</div>
            <h2 className="font-display font-black text-[2rem] lg:text-[2.7rem] text-headline leading-[1.07] tracking-[-0.022em] mt-3">
              A BPOn é para empresas<br />
              <span className="text-gradient-primary">que precisam de estrutura.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:self-end">
            <p className="font-body text-[14px] text-body leading-relaxed">
              Não atendemos startups pré-receita nem demandas pontuais.
              Atuamos onde existe operação rodando e necessidade concreta de
              processo, acompanhamento e leitura gerencial.
            </p>
            <div className="p-4 rounded-xl" style={{ border: "1px solid hsl(var(--primary) / 0.12)", background: "hsl(var(--surface-tint))" }}>
              <p className="font-body text-[13px] text-body leading-relaxed">
                <span className="font-semibold text-headline">Filtro:</span>{" "}
                A BPOn opera melhor quando existe empresa real, volume financeiro real e necessidade concreta de organização contínua.
              </p>
            </div>
          </div>
        </div>

        {/* 4 cards em grid 2x2 */}
        <div className="grid sm:grid-cols-2 gap-4">
          {profiles.map((profile, i) => (
            <div
              key={profile.num}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group flex gap-5 p-6 rounded-xl border border-divider bg-surface card-hover`}
            >
              {/* Número lateral */}
              <span className="font-display font-black text-[2rem] leading-none select-none flex-shrink-0 self-start"
                style={{ color: "hsl(var(--primary) / 0.12)" }}>
                {profile.num}
              </span>
              <div>
                <h3 className="font-display font-bold text-[14px] text-headline mb-2 leading-snug">
                  {profile.title}
                </h3>
                <p className="font-body text-[13px] text-body leading-relaxed">{profile.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center reveal">
          <a href="#diagnostico"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-[13px] hover:opacity-90 transition-all duration-200 shadow-blue group">
            Ver se a BPOn é para minha empresa
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
