import { Workflow, Wallet, LineChart } from "lucide-react";

const cards = [
  {
    icon: Workflow,
    title: "Rotina financeira",
    desc: "Contas a pagar, contas a receber, cobranças e organização de prazos.",
  },
  {
    icon: Wallet,
    title: "Controle de caixa",
    desc: "Conciliação bancária, fluxo de caixa e acompanhamento das movimentações.",
  },
  {
    icon: LineChart,
    title: "Leitura gerencial",
    desc: "Relatórios financeiros para apoiar decisões com mais clareza.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="section-py surface-tint relative">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-14 reveal">
          <span className="eyebrow">Solução</span>
          <h2 className="font-display font-bold text-headline text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] leading-[1.08] tracking-[-0.03em] mt-4">
            Organizamos a rotina e entregamos <span className="text-primary">visão gerencial</span>.
          </h2>
          <p className="font-body text-[16px] lg:text-[17.5px] text-body leading-relaxed mt-5">
            Assumimos a operação financeira do dia a dia para sua empresa ter mais previsibilidade,
            controle e leitura dos números.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal reveal-delay-2">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-soft p-7">
              <div className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-5">
                <Icon size={20} />
              </div>
              <h3 className="font-display font-semibold text-headline text-[19px] mb-2.5">{title}</h3>
              <p className="font-body text-[14.5px] text-body leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
