import { Calendar, Users, FileText, Link } from "lucide-react";

const workingModel = [
  { icon: Users, title: "Ponto de contato definido", text: "Equipe responsável com nome, agenda e responsabilidades claras — não atendimento rotativo ou sistema." },
  { icon: Calendar, title: "Agenda financeira recorrente", text: "Cadência semanal e mensal com a liderança para acompanhar a rotina e antecipar pontos críticos." },
  { icon: FileText, title: "Fechamento e reporte mensal", text: "Consolidação completa da operação com leitura executiva, apresentada para quem precisa decidir." },
  { icon: Link, title: "Integração com contabilidade e operação", text: "Trabalha integrada com o contador, ERP e processos internos — sem sobreposição e sem lacuna." },
];

const HumanSection = () => {
  return (
    <section id="relacao" className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — copy */}
          <div className="reveal flex flex-col gap-7 order-2 lg:order-1">
            <div>
              <div className="label-pill mb-5">Como a relação funciona</div>
              <h2 className="font-display font-black text-[1.9rem] lg:text-[2.6rem] text-headline leading-[1.07] tracking-[-0.022em] mb-5 mt-3">
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
                  <div key={item.title} className="group flex items-start gap-4 p-4 rounded-xl border border-divider bg-background hover:bg-surface-tint transition-colors card-hover">
                    <div className="w-8 h-8 rounded-lg bg-primary/8 border border-primary/14 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/14 transition-colors">
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

          {/* Right — foto editorial */}
          <div className="reveal reveal-delay-2 relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated" style={{ aspectRatio: "3/4" }}>
              <img
                src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=700&q=85&auto=format&fit=crop&crop=top"
                alt="Parceria executiva BPOn — reunião de acompanhamento financeiro"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,38%,9%)]/35 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 lg:-left-6 z-10">
              <div className="stat-chip">
                <span className="font-display font-black text-[1.5rem] text-primary leading-none">+20</span>
                <span className="font-body text-[11px] text-body mt-0.5 text-center leading-tight">anos de<br />base institucional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanSection;
