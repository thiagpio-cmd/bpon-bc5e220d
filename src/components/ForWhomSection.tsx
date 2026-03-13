import { Check } from "lucide-react";

const profiles = [
  { title: "Empresas em crescimento", text: "Com operação expandindo e financeiro que ainda não acompanhou o ritmo do negócio." },
  { title: "Negócios que já faturam", text: "Receita existente, mas sem previsibilidade real de caixa ou base para leitura gerencial." },
  { title: "Operação com financeiro desorganizado", text: "Controles fragmentados, dependência pessoal e rotina que funciona no improviso." },
  { title: "Líderes que precisam de mais clareza", text: "Empresários que tomam decisão sem ter uma base financeira consolidada como referência." },
  { title: "Empresas com estrutura espalhada", text: "Rotina distribuída entre planilhas, banco, ERP e conversas soltas — sem centralização." },
  { title: "Negócios que precisam de acompanhamento", text: "Empresa com movimento real que precisa de alguém para organizar, acompanhar e reportar." },
];

const ForWhomSection = () => {
  return (
    <section id="para-quem" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left — photo + copy */}
          <div className="lg:col-span-2 flex flex-col gap-6 reveal">
            {/* Editorial photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=85&auto=format&fit=crop"
                alt="Reunião de liderança empresarial"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(218,82%,10%)]/60 via-transparent to-transparent" />
              {/* Chip over image */}
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-headline border border-divider shadow-card">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  A BPOn é para empresas reais
                </span>
              </div>
            </div>

            <div>
              <div className="label-pill w-fit mb-4">Para quem é</div>
              <h2 className="font-display font-black text-3xl lg:text-4xl text-headline leading-[1.12] tracking-tight">
                A BPOn é para empresas que precisam de estrutura.
              </h2>
            </div>
            <p className="font-body text-base text-body leading-relaxed">
              Não trabalhamos com startups pré-receita. Atuamos melhor onde existe operação rodando e necessidade concreta de acompanhamento com critério.
            </p>
            <div className="p-5 rounded-2xl bg-surface-tint border border-primary/15">
              <p className="font-body text-sm text-body leading-relaxed italic">
                "A BPOn opera melhor quando existe empresa real, movimento financeiro real e necessidade real de acompanhamento."
              </p>
            </div>
          </div>

          {/* Right — profile cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {profiles.map((profile, i) => (
              <div key={profile.title} className={`reveal reveal-delay-${Math.min(i + 1, 6)} group flex flex-col gap-3 p-5 rounded-2xl border border-divider bg-surface card-hover`}>
                <div className="w-8 h-8 rounded-xl bg-primary/8 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Check size={14} className="text-primary" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-headline mb-1.5">{profile.title}</h3>
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
