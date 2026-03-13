import { Check } from "lucide-react";

const profiles = [
  {
    title: "Empresas em crescimento",
    text: "Com operação expandindo e financeiro que ainda não acompanhou o ritmo do negócio.",
  },
  {
    title: "Negócios que já faturam",
    text: "Receita existente, mas sem previsibilidade real de caixa ou base para leitura gerencial.",
  },
  {
    title: "Operação com financeiro desorganizado",
    text: "Controles fragmentados, dependência pessoal e rotina que funciona na base do improviso.",
  },
  {
    title: "Líderes que precisam de mais clareza",
    text: "Empresários que tomam decisão sem ter uma base financeira consolidada como referência.",
  },
  {
    title: "Empresas com estrutura espalhada",
    text: "Rotina distribuída entre planilhas, banco, ERP e conversas soltas — sem centralização.",
  },
  {
    title: "Negócios que precisam de acompanhamento",
    text: "Empresa com movimento real que precisa de alguém para organizar, acompanhar e reportar.",
  },
];

const ForWhomSection = () => {
  return (
    <section id="para-quem" className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — 2 cols sticky header */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <span className="font-body text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                Para quem é
              </span>
              <div className="divider-primary mt-3 mb-6" />
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-headline leading-[1.15]">
                A BPOn é para empresas que precisam de estrutura.
              </h2>
            </div>
            <p className="font-body text-base text-body leading-relaxed">
              Não trabalhamos com startups pré-receita ou negócios sem movimento financeiro real. Atuamos melhor onde existe operação rodando e necessidade concreta de acompanhamento com critério.
            </p>
            <div className="p-5 rounded-xl bg-surface-tint border border-primary/15">
              <p className="font-body text-sm text-body leading-relaxed italic">
                "A BPOn opera melhor quando existe empresa real, movimento financeiro real e necessidade real de acompanhamento."
              </p>
            </div>
          </div>

          {/* Right — Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {profiles.map((profile) => (
              <div
                key={profile.title}
                className="group flex flex-col gap-3 p-5 rounded-xl border border-divider bg-surface card-hover"
              >
                <div className="w-7 h-7 rounded-lg bg-surface-tint border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check size={13} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm text-headline mb-1">
                    {profile.title}
                  </h3>
                  <p className="font-body text-sm text-body leading-relaxed">
                    {profile.text}
                  </p>
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
