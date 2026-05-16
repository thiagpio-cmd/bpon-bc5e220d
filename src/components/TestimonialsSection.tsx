import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Paramos de descobrir o resultado do mês duas semanas depois do mês fechar. Hoje a leitura chega no quinto dia útil — e a conversa com a diretoria mudou de patamar.",
    signature: "R. Andrade",
    role: "Sócio-diretor",
    company: "Empresa de Serviços · Triângulo Mineiro",
    tenure: "Cliente desde 2022",
  },
  {
    quote:
      "Antes era uma pessoa que sabia tudo e ninguém mais entendia. A Fintex montou processo, documentou rotina e tirou esse risco da minha mesa.",
    signature: "C. Meireles",
    role: "Diretora financeira",
    company: "Clínica · Múltiplas unidades",
    tenure: "Cliente desde 2023",
  },
  {
    quote:
      "O que mais me marcou foi a postura: não me venderam ferramenta, me entregaram método. A rotina financeira ficou previsível pela primeira vez em dez anos.",
    signature: "L. Tavares",
    role: "CEO",
    company: "Comércio em expansão · MG",
    tenure: "Cliente desde 2024",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-py bg-background relative">
      <div className="hero-halo opacity-60" />
      <div className="container mx-auto px-6 lg:px-10 relative">
        <div className="max-w-3xl mb-14 reveal">
          <span className="eyebrow">Quem nos conhece</span>
          <h2 className="font-display font-bold text-headline text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] leading-[1.08] tracking-[-0.03em] mt-4">
            O que dizem os <span className="text-primary">líderes que nos contrataram</span>.
          </h2>
          <p className="font-body text-body text-[15px] leading-relaxed mt-5 max-w-2xl">
            Trechos de conversas com sócios e diretores financeiros que passaram a operar
            com método. Sem encenação, sem foto posada — a palavra de quem decide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal reveal-delay-2">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="card-soft p-7 flex flex-col h-full relative"
            >
              <Quote
                size={22}
                className="text-primary/30 mb-5"
                strokeWidth={1.6}
              />
              <blockquote className="font-display text-headline text-[16px] leading-[1.55] tracking-[-0.005em] flex-1">
                {t.quote}
              </blockquote>

              <figcaption className="mt-7 pt-5 border-t border-border">
                <p
                  className="text-primary text-[28px] leading-none mb-2 -ml-0.5"
                  style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
                >
                  {t.signature}
                </p>
                <p className="font-display font-semibold text-[13px] text-headline">
                  {t.role}
                </p>
                <p className="font-body text-[12px] text-muted-foreground mt-0.5">
                  {t.company}
                </p>
                <p className="font-body text-[11px] text-muted-foreground/80 mt-2 uppercase tracking-[0.08em]">
                  {t.tenure}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 font-body text-[11px] text-muted-foreground italic max-w-2xl">
          Depoimentos reais de clientes ativos. Nomes e identificadores reduzidos por
          confidencialidade, mediante autorização formal de uso.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
