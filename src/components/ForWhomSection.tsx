import { Check } from "lucide-react";

const criteria = [
  "Faturamento mensal a partir de R$ 120 mil",
  "Volume recorrente de pagamentos e recebimentos",
  "Necessidade de previsibilidade de caixa",
  "Sócios ainda muito envolvidos na rotina financeira",
  "Desejo de profissionalizar a gestão sem montar equipe interna completa",
];

const ForWhomSection = () => {
  return (
    <section id="para-quem" className="section-py surface-tint relative">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 reveal">
            <span className="eyebrow">Para quem</span>
            <h2 className="font-display font-bold text-headline text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] leading-[1.08] tracking-[-0.03em] mt-4">
              Para empresas que não podem mais tratar o financeiro no <span className="text-primary">improviso</span>.
            </h2>
            <p className="font-body text-[16px] text-body leading-relaxed mt-5">
              Atendemos empresas de serviços, tecnologia, consultorias, clínicas, indústrias leves
              e operações comerciais que precisam de uma rotina financeira mais confiável para
              crescer com controle.
            </p>
          </div>

          <div className="lg:col-span-7 reveal reveal-delay-2">
            <div className="card-soft p-2">
              <ul className="divide-y divide-border">
                {criteria.map((c) => (
                  <li key={c} className="flex items-start gap-4 px-5 py-5">
                    <span className="w-7 h-7 rounded-full bg-primary-soft flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-primary" />
                    </span>
                    <span className="font-body text-[15.5px] text-headline leading-snug">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
