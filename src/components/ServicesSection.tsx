import { CreditCard, TrendingUp, GitMerge, BarChart3, FileText, PieChart } from "lucide-react";

const services = [
  { icon: CreditCard, title: "Contas a pagar", description: "Organização de vencimentos, conferência, programação e controle para manter a rotina sob critério." },
  { icon: TrendingUp, title: "Contas a receber", description: "Acompanhamento de recebimentos, baixa, cobrança e visibilidade para proteger caixa e giro." },
  { icon: GitMerge, title: "Conciliação financeira", description: "Validação entre banco, operação e sistema para construir uma base confiável de dados." },
  { icon: BarChart3, title: "Fluxo de caixa", description: "Leitura prática das entradas e saídas com previsibilidade e acompanhamento contínuo." },
  { icon: FileText, title: "Fechamento gerencial", description: "Consolidação da rotina financeira para leitura mensal mais clara e acompanhamento da operação." },
  { icon: PieChart, title: "Indicadores e relatórios", description: "Material executivo para acompanhar desempenho, pressão no caixa e pontos que pedem ajuste." },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-28 lg:py-36 bg-surface relative overflow-hidden">

      {/* Decorative left edge color block */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8">

        {/* Header — editorial */}
        <div className="mb-16 lg:mb-20 reveal flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="label-pill">Entregas</span>
            <h2 className="font-display font-black text-[2.2rem] lg:text-[3rem] xl:text-[3.4rem] text-headline leading-[1.0] tracking-[-0.02em] mt-5 max-w-xl">
              Seis frentes que cobrem<br />
              <span className="text-gradient-primary">toda a rotina</span> financeira.
            </h2>
          </div>
          <p className="font-body text-sm text-body max-w-xs leading-relaxed lg:text-right lg:mb-1">
            Da operação diária ao fechamento gerencial — tudo com método, cadência e acompanhamento próximo.
          </p>
        </div>

        {/* Cards — 2 col on mobile, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-divider rounded-2xl overflow-hidden shadow-card">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isLastRow = i >= 3;
            const isLast = i === services.length - 1;
            return (
              <div
                key={service.title}
                className={`
                  reveal reveal-delay-${Math.min(i + 1, 6)}
                  group flex flex-col gap-5 p-7 lg:p-8 bg-surface hover:bg-surface-tint
                  transition-colors duration-300 relative
                  border-b border-r border-divider
                  ${i % 3 === 2 ? "lg:border-r-0" : ""}
                  ${i % 2 === 1 ? "sm:border-r-0 lg:border-r border-divider" : ""}
                  ${i % 3 === 2 ? "lg:border-r-0" : ""}
                  ${i >= services.length - (services.length % 3 === 0 ? 3 : services.length % 3) ? "lg:border-b-0" : ""}
                  ${i >= services.length - 2 ? "sm:border-b-0" : ""}
                `}
              >
                {/* Top accent on hover */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-full" />

                <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-200">
                  <Icon size={19} className="text-primary" strokeWidth={1.6} />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-display font-bold text-[16px] text-headline">{service.title}</h3>
                  <p className="font-body text-sm text-body leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
