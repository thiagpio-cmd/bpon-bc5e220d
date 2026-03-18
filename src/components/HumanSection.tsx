import { Calendar, Users, FileText, Link } from "lucide-react";

const workingModel = [
  {
    icon: Users,
    title: "Ponto de contato definido",
    text: "Equipe responsável com nome, agenda e responsabilidades claras — não atendimento rotativo ou sistema.",
  },
  {
    icon: Calendar,
    title: "Agenda financeira recorrente",
    text: "Cadência semanal e mensal com a liderança para acompanhar a rotina e antecipar pontos críticos.",
  },
  {
    icon: FileText,
    title: "Fechamento e reporte mensal",
    text: "Consolidação completa com leitura executiva — apresentada para quem precisa decidir.",
  },
  {
    icon: Link,
    title: "Integração com contabilidade e operação",
    text: "Trabalha integrada com o contador, ERP e processos internos — sem sobreposição e sem lacuna.",
  },
];

const HumanSection = () => {
  return (
    <section id="relacao" className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Esquerda — copy */}
          <div className="reveal flex flex-col gap-7">
            <div>
              <div className="label-pill mb-5">Como a relação funciona</div>
              <h2 className="font-display font-black text-[2rem] lg:text-[2.6rem] text-headline leading-[1.07] tracking-[-0.022em] mb-4 mt-3">
                Você tem acesso à equipe,{" "}
                <span className="text-gradient-primary">não a um sistema.</span>
              </h2>
              <p className="font-body text-[14px] text-body leading-relaxed">
                A BPOn mantém a rotina financeira ativa e apresenta os resultados
                diretamente para quem decide. Acompanhamento próximo, comunicação
                clara, responsabilidades bem definidas.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {workingModel.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}
                    className="group flex items-start gap-4 p-4 rounded-xl border border-divider bg-background hover:bg-surface-tint transition-colors">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/14 transition-colors"
                      style={{ background: "hsl(var(--primary) / 0.07)", border: "1px solid hsl(var(--primary) / 0.14)" }}>
                      <Icon size={14} className="text-primary" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-[13px] text-headline mb-0.5">{item.title}</h3>
                      <p className="font-body text-[13px] text-body leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Direita — bloco institucional no lugar da foto */}
          <div className="reveal reveal-delay-2">
            <div className="relative rounded-2xl p-10 lg:p-12 overflow-hidden shadow-elevated flex flex-col justify-between min-h-[440px]"
              style={{
                background: "linear-gradient(145deg, hsl(220 55% 8%) 0%, hsl(218 65% 11%) 100%)",
                border: "1px solid hsl(218 35% 18%)",
              }}>

              {/* Textura de fundo */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(circle, hsl(210 80% 72% / 1) 1px, transparent 0)",
                  backgroundSize: "32px 32px",
                }} />
              {/* Brilho azul superior */}
              <div className="absolute -top-20 -right-20 w-64 h-64 pointer-events-none"
                style={{ background: "radial-gradient(ellipse, hsl(220 79% 46% / 0.18) 0%, transparent 65%)" }} />
              {/* Linha de acento */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{ background: "linear-gradient(to right, hsl(220 79% 46%), transparent)" }} />

              {/* Conteúdo */}
              <div className="relative z-10 flex flex-col gap-8">
                {/* Stat principal */}
                <div>
                  <p className="font-display font-black leading-none mb-1"
                    style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", color: "hsl(220 79% 62%)" }}>
                    +20
                  </p>
                  <p className="font-body text-[13px]" style={{ color: "hsl(210 20% 55%)" }}>
                    anos de base institucional
                  </p>
                </div>

                {/* Separador */}
                <div className="w-full h-px" style={{ background: "hsl(218 35% 18%)" }} />

                {/* Citação */}
                <blockquote>
                  <p className="font-display font-semibold text-[16px] leading-[1.5]"
                    style={{ color: "hsl(210 40% 85%)" }}>
                    "A BPOn mantém a rotina ativa e apresenta os resultados para quem decide — sem intermediários e sem ruído."
                  </p>
                </blockquote>

                {/* Separador */}
                <div className="w-full h-px" style={{ background: "hsl(218 35% 18%)" }} />

                {/* Dados institucionais */}
                <div className="flex flex-col gap-1.5">
                  {[
                    "Grupo Ubercentral · Uberlândia, MG",
                    "Base contábil integrada",
                    "Operação financeira recorrente",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: "hsl(220 79% 52%)" }} />
                      <span className="font-body text-[12px]"
                        style={{ color: "hsl(210 15% 48%)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanSection;
