import { Shield, Calendar, BookOpen, Users } from "lucide-react";

const points = [
  {
    icon: Shield,
    title: "Grupo Ubercentral",
    text: "A BPOn é parte de um grupo com base contábil e empresarial consolidada. Não é uma empresa nascente — é uma especialização dentro de uma estrutura com histórico.",
  },
  {
    icon: Calendar,
    title: "Desde 2002",
    text: "Mais de duas décadas de atuação com empresas reais, operações complexas e necessidade concreta de organização financeira.",
  },
  {
    icon: BookOpen,
    title: "Base contábil e empresarial",
    text: "A formação do grupo une conhecimento contábil com visão de operação empresarial — o que dá profundidade técnica ao trabalho da BPOn.",
  },
  {
    icon: Users,
    title: "Atuação consultiva e técnica",
    text: "Atendimento próximo da liderança, com equipe que entende de rotina financeira, processo e critério de acompanhamento.",
  },
];

const AuthoritySection = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <span className="font-body text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                Credibilidade institucional
              </span>
              <div className="divider-primary mt-3 mb-6" />
              <h2 className="font-display font-bold text-3xl lg:text-[2rem] text-headline leading-[1.15]">
                Uma base sólida por trás do serviço.
              </h2>
            </div>
            <p className="font-body text-base text-body leading-relaxed">
              A BPOn integra o Grupo Ubercentral com estrutura, critério e acompanhamento financeiro respaldados por anos de atuação empresarial e contábil.
            </p>
            {/* Placeholder for future logos/numbers */}
            <div className="p-5 rounded-xl border border-dashed border-divider bg-background">
              <p className="font-body text-xs text-body/60 text-center">
                Espaço reservado para prova social, depoimentos e dados aprovados
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="flex flex-col gap-4 p-6 rounded-xl border border-divider bg-surface card-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-tint border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-primary" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-headline mb-1.5">
                      {point.title}
                    </h3>
                    <p className="font-body text-sm text-body leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
