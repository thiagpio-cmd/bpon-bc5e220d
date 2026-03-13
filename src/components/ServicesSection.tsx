import { CreditCard, TrendingUp, GitMerge, BarChart3, FileText, PieChart } from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "Contas a pagar",
    description: "Organização de vencimentos, conferência, programação e controle para reduzir atraso, erro e improviso.",
    color: "primary",
  },
  {
    icon: TrendingUp,
    title: "Contas a receber",
    description: "Acompanhamento de recebimentos, cobrança, baixa e visibilidade sobre inadimplência e giro de caixa.",
    color: "accent",
  },
  {
    icon: GitMerge,
    title: "Conciliação financeira",
    description: "Validação entre banco, sistema e operação para garantir base confiável e leitura financeira real.",
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "Fluxo de caixa",
    description: "Acompanhamento de entradas e saídas, projeção e leitura de caixa para aumentar previsibilidade.",
    color: "accent",
  },
  {
    icon: FileText,
    title: "Fechamento gerencial",
    description: "Consolidação dos dados financeiros para leitura mensal mais clara e acompanhamento da operação.",
    color: "primary",
  },
  {
    icon: PieChart,
    title: "Indicadores e relatórios",
    description: "Visão prática sobre desempenho financeiro, rotina operacional e pontos que exigem ajuste.",
    color: "accent",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32 gradient-section-blue">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Estrutura de serviços
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-headline leading-[1.15]">
            Frentes centrais do{" "}
            <span className="gradient-text-primary">BPO financeiro</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            const isPrimary = service.color === "primary";
            return (
              <div
                key={service.title}
                className="group flex flex-col gap-4 p-6 rounded-xl border border-divider bg-white shadow-card card-hover"
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border ${
                    isPrimary
                      ? "bg-primary/6 border-primary/12"
                      : "bg-accent/6 border-accent/15"
                  }`}
                >
                  <Icon
                    size={19}
                    className={isPrimary ? "text-primary" : "text-accent"}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-display font-bold text-base text-headline">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-body leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent line on hover */}
                <div
                  className={`h-px w-0 group-hover:w-full transition-all duration-300 ${
                    isPrimary ? "bg-primary/30" : "bg-accent/30"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
