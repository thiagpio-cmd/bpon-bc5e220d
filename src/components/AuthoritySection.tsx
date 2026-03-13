import { Shield, Calendar, BookOpen, Users } from "lucide-react";

const points = [
  { icon: Shield, title: "Grupo Ubercentral", text: "A BPOn é parte de um grupo com base contábil e empresarial consolidada. Não é empresa nascente — é especialização dentro de uma estrutura com histórico." },
  { icon: Calendar, title: "Desde 2002", text: "Mais de duas décadas com empresas reais, operações complexas e necessidade concreta de organização financeira." },
  { icon: BookOpen, title: "Base contábil e empresarial", text: "Formação que une conhecimento contábil com visão de operação empresarial — dando profundidade técnica ao trabalho da BPOn." },
  { icon: Users, title: "Atuação consultiva e técnica", text: "Atendimento próximo da liderança, com equipe que entende de rotina financeira, processo e critério de acompanhamento." },
];

const AuthoritySection = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left — copy + office photo */}
          <div className="lg:col-span-2 flex flex-col gap-6 reveal">
            <div>
              <div className="label-pill w-fit mb-5">Credibilidade institucional</div>
              <h2 className="font-display font-black text-3xl lg:text-[2rem] text-headline leading-[1.12] tracking-tight">
                Uma base sólida por trás do serviço.
              </h2>
            </div>
            <p className="font-body text-base text-body leading-relaxed">
              A BPOn integra o Grupo Ubercentral com estrutura, critério e acompanhamento respaldados por anos de atuação empresarial e contábil.
            </p>

            {/* Office / institutional photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=85&auto=format&fit=crop"
                alt="Escritório do Grupo Ubercentral em Uberlândia"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(218,82%,10%)]/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-headline border border-divider shadow-card">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Uberlândia · MG
                </span>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-dashed border-divider bg-background text-center">
              <p className="font-body text-xs text-body/50">Espaço para prova social, depoimentos e números aprovados</p>
            </div>
          </div>

          {/* Right — authority cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {points.map((point, i) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className={`reveal reveal-delay-${i + 1} flex flex-col gap-4 p-6 rounded-2xl border border-divider bg-surface card-hover`}>
                  <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-primary" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-headline mb-1.5">{point.title}</h3>
                    <p className="font-body text-sm text-body leading-relaxed">{point.text}</p>
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
