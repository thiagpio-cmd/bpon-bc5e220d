import { Shield, Calendar, BookOpen, Users } from "lucide-react";

const points = [
  { icon: Shield, title: "Grupo Ubercentral", text: "A BPOn integra um grupo com base contábil e empresarial consolidada. Não é empresa nascente — é especialização com histórico." },
  { icon: Calendar, title: "Desde 2002", text: "Mais de duas décadas com empresas reais, operações complexas e necessidade concreta de organização financeira." },
  { icon: BookOpen, title: "Base contábil e empresarial", text: "Formação que une conhecimento contábil com visão de operação — dando profundidade técnica ao trabalho da BPOn." },
  { icon: Users, title: "Atuação consultiva e técnica", text: "Atendimento próximo da liderança, com equipe que entende de rotina financeira e critério de acompanhamento." },
];

const AuthoritySection = () => {
  return (
    <section className="py-28 lg:py-36 bg-surface relative overflow-hidden">

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — editorial photo block */}
          <div className="reveal relative">
            <div className="rounded-3xl overflow-hidden shadow-elevated aspect-[3/4] max-w-[420px] mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85&auto=format&fit=crop"
                alt="Escritório Grupo Ubercentral — Uberlândia MG"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(218,82%,9%)]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="font-display font-black text-2xl text-white leading-snug">
                  Estrutura, critério<br />e acompanhamento.
                </p>
                <p className="font-body text-sm text-white/50 mt-2">Grupo Ubercentral · desde 2002</p>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -right-4 lg:-right-8 top-12 glass-card rounded-2xl shadow-elevated border border-divider px-5 py-4 animate-float">
              <p className="font-display font-black text-3xl text-headline">+20</p>
              <p className="font-body text-xs text-body mt-0.5">anos de base</p>
              <p className="font-body text-xs text-body">empresarial</p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8 reveal reveal-delay-2">
            <div>
              <span className="label-pill">Credibilidade institucional</span>
              <h2 className="font-display font-black text-[2.2rem] lg:text-[2.8rem] text-headline leading-[1.05] tracking-[-0.015em] mt-5">
                Uma base sólida<br />
                <span className="text-gradient-primary">por trás do serviço.</span>
              </h2>
              <p className="font-body text-base text-body leading-relaxed mt-4 max-w-md">
                A BPOn integra o Grupo Ubercentral com estrutura, critério e acompanhamento respaldados por anos de atuação real.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {points.map((point, i) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className={`reveal reveal-delay-${i + 1} group flex items-start gap-4 p-5 rounded-2xl border border-divider bg-surface card-hover`}>
                    <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                      <Icon size={17} className="text-primary" strokeWidth={1.7} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-headline">{point.title}</h3>
                      <p className="font-body text-sm text-body leading-relaxed mt-1">{point.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-5 rounded-2xl border border-dashed border-divider bg-background text-center">
              <p className="font-body text-xs text-body/50">Espaço para depoimentos e prova social</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
