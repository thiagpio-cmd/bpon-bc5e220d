import { AlertCircle, Clock, FileWarning, TrendingDown, Users } from "lucide-react";

const pains = [
  { icon: Clock, title: "Contas vencendo sem controle", desc: "Pagamentos perdidos, juros e multas que poderiam ser evitados." },
  { icon: FileWarning, title: "Cobranças manuais", desc: "Inadimplência alta e tempo da equipe consumido com follow-up." },
  { icon: TrendingDown, title: "Caixa desatualizado", desc: "Decisões tomadas com base em estimativas, não em dados." },
  { icon: AlertCircle, title: "Relatórios pouco confiáveis", desc: "Números divergentes entre planilhas, banco e sistema." },
  { icon: Users, title: "Sócios presos na rotina", desc: "Tempo da liderança gasto em operação financeira do dia a dia." },
];

const ProblemSection = () => {
  return (
    <section id="problema" className="section-py bg-background relative">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-14 reveal">
          <span className="eyebrow">Problema</span>
          <h2 className="font-display font-bold text-headline text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] leading-[1.08] tracking-[-0.03em] mt-4">
            Seu financeiro está consumindo <span className="text-primary">tempo demais</span> da gestão?
          </h2>
          <p className="font-body text-[16px] lg:text-[17.5px] text-body leading-relaxed mt-5">
            Quando pagamentos, cobranças, conciliações e relatórios ficam espalhados, a empresa
            perde clareza sobre caixa, prazos e decisões.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 reveal reveal-delay-2">
          {pains.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-soft p-6">
              <div className="w-10 h-10 rounded-lg bg-primary-soft flex items-center justify-center mb-4">
                <Icon size={18} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-headline text-[16.5px] mb-2">{title}</h3>
              <p className="font-body text-[14px] text-body leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
