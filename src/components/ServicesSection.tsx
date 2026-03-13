import { CreditCard, TrendingUp, GitMerge, BarChart3, FileText, PieChart } from "lucide-react";

const services = [
  { icon: CreditCard, title: "Contas a pagar", description: "Organização de vencimentos, conferência, programação e controle para manter a rotina sob critério.", accent: "from-blue-50 to-indigo-50" },
  { icon: TrendingUp, title: "Contas a receber", description: "Acompanhamento de recebimentos, baixa, cobrança e visibilidade para proteger caixa e giro.", accent: "from-sky-50 to-blue-50" },
  { icon: GitMerge, title: "Conciliação financeira", description: "Validação entre banco, operação e sistema para construir uma base confiável de dados.", accent: "from-indigo-50 to-blue-50" },
  { icon: BarChart3, title: "Fluxo de caixa", description: "Leitura prática das entradas e saídas com previsibilidade e acompanhamento contínuo.", accent: "from-blue-50 to-sky-50" },
  { icon: FileText, title: "Fechamento gerencial", description: "Consolidação da rotina financeira para leitura mensal mais clara e acompanhamento da operação.", accent: "from-sky-50 to-indigo-50" },
  { icon: PieChart, title: "Indicadores e relatórios", description: "Material executivo para acompanhar desempenho, pressão no caixa e pontos que pedem ajuste.", accent: "from-indigo-50 to-sky-50" },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-14 reveal">
          <div className="label-pill w-fit mb-5">Entregas</div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2 className="font-display font-black text-3xl lg:text-4xl text-headline leading-[1.12] tracking-tight max-w-xl">
              Frentes centrais do{" "}
              <span className="text-gradient-primary">BPO financeiro</span>
            </h2>
            <p className="font-body text-sm text-body max-w-xs lg:text-right">
              Seis frentes operacionais que cobrem toda a rotina financeira da empresa.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 6)} group flex flex-col gap-5 p-7 rounded-2xl border border-divider bg-surface card-hover relative overflow-hidden`}
              >
                {/* Subtle colored bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                {/* Left accent stripe on hover */}
                <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-primary rounded-r-full opacity-0 group-hover:opacity-100 transition-all duration-300" />

                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 group-hover:border-primary/25 transition-all duration-200">
                    <Icon size={19} className="text-primary" strokeWidth={1.7} />
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1 relative">
                  <h3 className="font-display font-bold text-base text-headline">{service.title}</h3>
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
