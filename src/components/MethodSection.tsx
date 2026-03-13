import { CheckCircle2 } from "lucide-react";

const strategicItems = [
  "Padronização da rotina financeira",
  "Organização de processos e responsáveis",
  "Apoio ao faturamento e rotinas operacionais",
  "Diagnóstico de gargalos financeiros",
  "Acompanhamento da saúde do caixa",
  "Base financeira para crescimento com critério",
];

const steps = [
  {
    num: "01",
    title: "Leitura da operação",
    text: "Mapeamos como o financeiro acontece hoje, onde estão os gargalos e quais rotinas precisam ser corrigidas.",
  },
  {
    num: "02",
    title: "Estruturação",
    text: "Definimos processo, cadência, responsáveis, critérios de conferência e organização da base.",
  },
  {
    num: "03",
    title: "Execução contínua",
    text: "A rotina financeira passa a rodar com método, acompanhamento e previsibilidade.",
  },
  {
    num: "04",
    title: "Visão gerencial",
    text: "Os dados deixam de ser só operação e passam a sustentar leitura financeira do negócio.",
  },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Strategic layer */}
          <div>
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Camada estratégica
            </span>
            <div className="w-12 h-px bg-primary/40 mt-3 mb-6" />
            <h2 className="font-display font-bold text-2xl lg:text-3xl text-headline leading-[1.2] mb-8">
              O que sustenta a operação
            </h2>

            <div className="flex flex-col gap-3">
              {strategicItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 py-3 border-b border-divider last:border-0"
                >
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Method */}
          <div>
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Método
            </span>
            <div className="w-12 h-px bg-accent/40 mt-3 mb-6" />
            <h2 className="font-display font-bold text-2xl lg:text-3xl text-headline leading-[1.2] mb-8">
              Como a BPOn trabalha
            </h2>

            <div className="flex flex-col gap-4 relative">
              {/* Connector line */}
              <div className="absolute left-5 top-10 bottom-10 w-px bg-divider" />

              {steps.map((step) => (
                <div
                  key={step.num}
                  className="group relative flex gap-4 p-5 rounded-xl border border-divider bg-card card-hover z-10"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center">
                    <span className="font-display font-bold text-xs text-primary">{step.num}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-display font-semibold text-sm text-headline">{step.title}</h4>
                    <p className="font-body text-sm text-body leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
