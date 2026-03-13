import { CreditCard, TrendingUp, GitMerge, BarChart3, FileText, PieChart } from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "Contas a pagar",
    description:
      "Organização de vencimentos, conferência, programação e controle para manter a rotina sob critério.",
  },
  {
    icon: TrendingUp,
    title: "Contas a receber",
    description:
      "Acompanhamento de recebimentos, baixa, cobrança e visibilidade para proteger caixa e giro.",
  },
  {
    icon: GitMerge,
    title: "Conciliação financeira",
    description:
      "Validação entre banco, operação e sistema para construir uma base confiável de dados.",
  },
  {
    icon: BarChart3,
    title: "Fluxo de caixa",
    description:
      "Leitura prática das entradas e saídas com previsibilidade e acompanhamento contínuo.",
  },
  {
    icon: FileText,
    title: "Fechamento gerencial",
    description:
      "Consolidação da rotina financeira para leitura mensal mais clara e acompanhamento da operação.",
  },
  {
    icon: PieChart,
    title: "Indicadores e relatórios",
    description:
      "Material executivo para acompanhar desempenho, pressão no caixa e pontos que pedem ajuste.",
  },
];

const ServicesSection = () => {
  return (
    <section id="solucao" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <span className="font-body text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Entregas
          </span>
          <div className="divider-primary mt-3 mb-6" />
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-headline leading-[1.15]">
            Frentes centrais do{" "}
            <span className="text-gradient-primary">BPO financeiro</span>
          </h2>
          <p className="font-body text-base text-body leading-relaxed mt-4 max-w-xl">
            A BPOn não se limita a executar tarefas. Ela organiza a rotina, reduz risco operacional e cria base para leitura gerencial consistente.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group flex flex-col gap-5 p-6 rounded-xl border border-divider bg-surface card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-tint border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-primary" strokeWidth={1.8} />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-display font-semibold text-[15px] text-headline">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
                {/* Bottom accent */}
                <div className="h-px w-0 group-hover:w-full transition-all duration-300 bg-primary/20" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
