const steps = [
  {
    num: "01",
    title: "Diagnóstico da operação atual",
    what: "O que analisamos",
    what_text: "Mapeamos como o financeiro funciona hoje — controles existentes, responsáveis, fluxo de informações, ferramentas em uso e onde estão os principais gargalos.",
    after: "O que o cliente passa a enxergar",
    after_text: "Clareza sobre onde está a fragilidade e quais rotinas precisam ser corrigidas com prioridade.",
  },
  {
    num: "02",
    title: "Estruturação da rotina e dos responsáveis",
    what: "O que organizamos",
    what_text: "Definimos processo, cadência, critérios de conferência e organização da base — com responsabilidades claras e padrão operacional estabelecido.",
    after: "O que o cliente passa a enxergar",
    after_text: "Uma rotina financeira que passa a funcionar com método, não com esforço individual.",
  },
  {
    num: "03",
    title: "Implantação dos controles e da cadência",
    what: "O que operamos",
    what_text: "A rotina financeira entra em funcionamento com acompanhamento contínuo — contas, conciliação, fluxo e fechamento rodando em cadência.",
    after: "O que o cliente passa a enxergar",
    after_text: "Operação mais previsível, menos dependência de improviso e base de dados mais confiável.",
  },
  {
    num: "04",
    title: "Acompanhamento contínuo e leitura gerencial",
    what: "O que entregamos",
    what_text: "Reportes periódicos com indicadores, fechamento gerencial e leitura de caixa — para que a liderança acompanhe o negócio com mais segurança.",
    after: "O que o cliente passa a enxergar",
    after_text: "Uma base financeira que sustenta decisão com critério, não no feeling.",
  },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="font-body text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Método de trabalho
          </span>
          <div className="divider-primary mt-3 mb-6" />
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-headline leading-[1.15]">
            Como a BPOn trabalha
          </h2>
          <p className="font-body text-base text-body leading-relaxed mt-4">
            Um processo em quatro etapas que transforma a rotina financeira de desorganizada em estruturada, previsível e gerenciável.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector */}
          <div className="hidden lg:block absolute left-[52px] top-10 bottom-10 w-px bg-divider" />

          <div className="flex flex-col gap-5">
            {steps.map((step, i) => (
              <div key={step.num} className="group relative grid lg:grid-cols-[104px_1fr] gap-4 lg:gap-8">
                {/* Step number */}
                <div className="flex lg:flex-col items-center lg:items-start gap-3 lg:gap-0">
                  <div className="w-[52px] h-[52px] rounded-full bg-surface border-2 border-divider group-hover:border-primary/40 flex items-center justify-center flex-shrink-0 transition-all duration-200 relative z-10">
                    <span className="font-display font-bold text-sm text-primary">{step.num}</span>
                  </div>
                </div>

                {/* Content card */}
                <div className="flex flex-col lg:flex-row gap-4 p-6 rounded-xl border border-divider bg-surface card-hover">
                  {/* Title */}
                  <div className="lg:w-1/3 flex flex-col gap-2">
                    <h3 className="font-display font-bold text-base text-headline leading-snug">{step.title}</h3>
                    <span className="font-body text-xs text-primary font-medium">Etapa {i + 1}</span>
                  </div>

                  {/* Details */}
                  <div className="lg:w-2/3 grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <p className="font-body text-xs font-semibold text-body uppercase tracking-wide">{step.what}</p>
                      <p className="font-body text-sm text-body leading-relaxed">{step.what_text}</p>
                    </div>
                    <div className="flex flex-col gap-1.5 pl-0 sm:pl-5 sm:border-l border-divider">
                      <p className="font-body text-xs font-semibold text-primary/70 uppercase tracking-wide">{step.after}</p>
                      <p className="font-body text-sm text-body leading-relaxed">{step.after_text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
