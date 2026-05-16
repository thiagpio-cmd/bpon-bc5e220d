const items = [
  "Contas sem previsibilidade",
  "Cobranças manuais",
  "Caixa desatualizado",
  "Relatórios pouco confiáveis",
  "Gestão presa no financeiro",
];

const ProblemSection = () => {
  return (
    <section id="problema" className="section-py bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12 reveal">
          <h2 className="font-display font-semibold text-headline text-[1.7rem] lg:text-[2.1rem] leading-[1.15] tracking-tight">
            O financeiro não pode depender de improviso.
          </h2>
          <p className="font-body text-[15px] text-body leading-relaxed mt-5">
            Pagamentos, cobranças e relatórios espalhados dificultam a leitura do caixa e prendem a
            gestão na operação.
          </p>
        </div>

        <ul className="max-w-2xl flex flex-col reveal reveal-delay-2">
          {items.map((item) => (
            <li
              key={item}
              className="font-body text-[15px] text-headline py-4 border-b border-divider/70 first:border-t"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProblemSection;
