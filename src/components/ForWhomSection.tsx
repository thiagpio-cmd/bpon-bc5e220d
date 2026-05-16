const criteria = [
  "Faturamento mensal a partir de R$ 120 mil",
  "Pagamentos e recebimentos recorrentes",
  "Necessidade de previsibilidade de caixa",
  "Sócios ainda envolvidos na operação financeira",
  "Busca por gestão mais profissional",
];

const ForWhomSection = () => {
  return (
    <section id="para-quem" className="section-py bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="reveal">
            <h2 className="font-display font-semibold text-headline text-[1.7rem] lg:text-[2.1rem] leading-[1.15] tracking-tight">
              Para empresas que já não podem tratar o financeiro no improviso.
            </h2>
            <p className="font-body text-[15px] text-body leading-relaxed mt-5">
              Atendemos empresas de serviços, tecnologia, consultorias, clínicas, indústrias leves
              e operações comerciais que precisam de rotina financeira mais confiável.
            </p>
          </div>

          <ul className="flex flex-col reveal reveal-delay-2">
            {criteria.map((c) => (
              <li
                key={c}
                className="font-body text-[15px] text-headline py-4 border-b border-divider/70 first:border-t"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
