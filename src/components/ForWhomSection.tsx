const criteria = [
  "Faturamento mensal a partir de R$ 120 mil",
  "Volume recorrente de pagamentos e recebimentos",
  "Necessidade de previsibilidade de caixa",
  "Sócios ainda muito envolvidos na rotina financeira",
  "Desejo de profissionalizar a gestão sem criar uma equipe interna completa",
];

const ForWhomSection = () => {
  return (
    <section id="para-quem" className="section-py bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="reveal">
            <p className="eyebrow mb-5">Para quem é</p>
            <h2 className="font-display font-bold text-headline text-[1.8rem] lg:text-[2.4rem] leading-[1.1] tracking-tight">
              Para empresas que cresceram e já não podem tratar o financeiro no improviso.
            </h2>
            <p className="font-body text-[15px] text-body leading-relaxed mt-5">
              A Fintex BPO atende empresas de serviços, tecnologia, consultorias, clínicas,
              indústrias leves e operações comerciais que precisam de uma rotina financeira mais
              confiável para crescer com controle.
            </p>
          </div>

          <div className="reveal reveal-delay-2">
            <ul className="flex flex-col gap-px bg-divider border border-divider rounded-xl overflow-hidden">
              {criteria.map((c, i) => (
                <li key={c} className="bg-surface px-6 py-4 flex items-start gap-4">
                  <span className="font-display font-bold text-[12px] text-primary tabular-nums pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-[14px] text-headline leading-snug">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
