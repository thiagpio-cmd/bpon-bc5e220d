import { Check, ArrowRight } from "lucide-react";

const profiles = [
  {
    title: "Empresa em crescimento com financeiro desorganizado",
    text: "Receita crescendo, mas controles fragmentados, falta de previsibilidade e rotina operada no improviso.",
  },
  {
    title: "Gestão que precisa de caixa legível e previsível",
    text: "Liderança que toma decisão sem base financeira consolidada — sem fluxo confiável, sem fechamento mensal.",
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

          {/* Left */}
          <div className="lg:col-span-2 flex flex-col gap-6 reveal">
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=85&auto=format&fit=crop"
                alt="Liderança empresarial em reunião de gestão financeira"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--deep))]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-headline border border-divider shadow-card">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Para empresas com operação real
                </span>
              </div>
            </div>

            <div>
              <div className="label-pill w-fit mb-4">Para quem é</div>
              <h2 className="font-display font-black text-3xl lg:text-[2.2rem] text-headline leading-[1.1] tracking-tight">
                A BPOn é para empresas que precisam de estrutura — não de improviso.
              </h2>
            </div>

            <p className="font-body text-base text-body leading-relaxed">
              Não atendemos startups pré-receita nem demandas pontuais sem recorrência.
              Atuamos onde existe operação rodando e necessidade concreta de processo,
              acompanhamento e leitura gerencial.
            </p>

            <div className="p-5 rounded-2xl bg-surface-tint border border-primary/15">
              <p className="font-body text-sm text-body leading-relaxed">
                <span className="font-semibold text-headline">Filtro comercial:</span>{" "}
                A BPOn opera melhor quando existe empresa real, volume financeiro real
                e necessidade concreta de organização e acompanhamento contínuo.
              </p>
            </div>

            <a
              href="#diagnostico"
              className="inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-blue group"
            >
              Ver se a BPOn é para minha empresa
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Right — profile cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {profiles.map((profile, i) => (
              <div
                key={profile.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} group flex flex-col gap-3 p-5 rounded-2xl border border-divider bg-surface card-hover`}
              >
                <div className="w-8 h-8 rounded-xl bg-primary/8 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Check size={14} className="text-primary" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-headline mb-1.5 leading-snug">{profile.title}</h3>
                  <p className="font-body text-sm text-body leading-relaxed">{profile.text}</p>
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
