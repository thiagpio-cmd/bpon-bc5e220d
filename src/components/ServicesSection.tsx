import { CreditCard, TrendingUp, GitMerge, BarChart3, FileText, PieChart } from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "Contas a pagar",
    description:
      "Organização de vencimentos, conferência, programação e controle para reduzir atraso, erro e improviso.",
    accent: "primary",
  },
  {
    icon: TrendingUp,
    title: "Contas a receber",
    description:
      "Acompanhamento de recebimentos, cobrança, baixa e visibilidade sobre inadimplência e giro de caixa.",
    accent: "accent",
  },
  {
    icon: GitMerge,
    title: "Conciliação financeira",
    description:
      "Validação entre banco, sistema e operação para garantir base confiável e leitura financeira real.",
    accent: "primary",
  },
  {
    icon: BarChart3,
    title: "Fluxo de caixa",
    description:
      "Acompanhamento de entradas e saídas, projeção e leitura de caixa para aumentar previsibilidade.",
    accent: "accent",
  },
  {
    icon: FileText,
    title: "Fechamento gerencial",
    description:
      "Consolidação dos dados financeiros para leitura mensal mais clara e acompanhamento da operação.",
    accent: "primary",
  },
  {
    icon: PieChart,
    title: "Indicadores e relatórios",
    description:
      "Visão prática sobre desempenho financeiro, rotina operacional e pontos que exigem ajuste.",
    accent: "accent",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32 gradient-section">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Estrutura de serviços
          </span>
          <div className="w-12 h-px bg-primary/40 mt-3 mb-6" />
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-headline leading-[1.15]">
            Frentes centrais do{" "}
            <span className="text-gradient-primary">BPO financeiro</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group flex flex-col gap-4 p-6 rounded-xl border border-divider bg-card card-hover"
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    service.accent === "accent"
                      ? "bg-accent/10"
                      : "bg-primary/10"
                  }`}
                >
                  <Icon
                    size={19}
                    className={service.accent === "accent" ? "text-accent" : "text-primary"}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-semibold text-base text-headline">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-body leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`mt-auto h-px w-0 group-hover:w-full transition-all duration-300 ${
                    service.accent === "accent" ? "bg-accent/40" : "bg-primary/40"
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
