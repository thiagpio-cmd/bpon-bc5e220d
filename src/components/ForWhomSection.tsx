import { Check, ArrowRight } from "lucide-react";

const profiles = [
  {
    title: "Empresa em crescimento com financeiro desorganizado",
    text: "Receita crescendo, controles fragmentados, falta de previsibilidade e rotina operada no improviso.",
  },
  {
    title: "Gestão que precisa de caixa legível e previsível",
    text: "Liderança tomando decisão sem base financeira consolidada — sem fluxo confiável, sem fechamento mensal.",
  },
  {
    title: "Operação dependente de uma única pessoa no financeiro",
    text: "Risco de concentração, sem processo documentado e sem continuidade se essa pessoa sair ou faltar.",
  },
  {
    title: "ERP ou planilha sem processo real por trás",
    text: "Ferramentas existem, mas falta quem opere com critério, cadência e responsabilidade sobre os dados.",
  },
];

const ForWhomSection = () => {
  return (
    <section id="para-quem" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left — texto e filtro */}
          <div className="lg:col-span-2 flex flex-col gap-6 reveal">

            <div>
              <div className="label-pill mb-4">Para quem é</div>
              <h2 className="font-display font-black text-[1.9rem] lg:text-[2.4rem] text-headline leading-[1.07] tracking-[-0.022em] mt-3">
                A BPOn é para empresas que precisam de estrutura — não de improviso.
              </h2>
            </div>

            <p className="font-body text-[14px] text-body leading-relaxed">
              Não atendemos startups pré-receita nem demandas pontuais.
              Atuamos onde existe operação rodando e necessidade concreta
              de processo, acompanhamento e leitura gerencial.
            </p>

            {/* Filtro comercial */}
            <div className="p-4 rounded-xl" style={{ border: "1px solid hsl(var(--primary) / 0.14)", background: "hsl(var(--surface-tint))" }}>
              <p className="font-body text-[13px] text-body leading-relaxed">
                <span className="font-semibold text-headline">Filtro:</span>{" "}
                A BPOn opera melhor quando existe empresa real, volume financeiro
                real e necessidade concreta de organização contínua.
              </p>
            </div>

            <a
              href="#diagnostico"
              className="inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-[13px] tracking-wide hover:bg-primary/90 transition-all duration-200 shadow-blue group"
            >
              Ver se a BPOn é para minha empresa
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Right — 2x2 grid de perfis */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3.5">
            {profiles.map((profile, i) => (
              <div
                key={profile.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} group flex flex-col gap-3 p-5 rounded-xl border border-divider bg-surface card-hover`}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/14 transition-colors"
                  style={{ background: "hsl(var(--primary) / 0.07)", border: "1px solid hsl(var(--primary) / 0.16)" }}>
                  <Check size={12} className="text-primary" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[13px] text-headline mb-1.5 leading-snug">{profile.title}</h3>
                  <p className="font-body text-[13px] text-body leading-relaxed">{profile.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
