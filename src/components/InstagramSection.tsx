import { Instagram, ArrowRight } from "lucide-react";

const contentSuggestions = [
  "5 sinais de que seu financeiro está desorganizado",
  "Por que empresa cresce e continua sem caixa",
  "Fluxo de caixa não é planilha bonita, é gestão",
  "O que um BPO financeiro precisa controlar toda semana",
  "3 erros que travam a leitura real do negócio",
  "Como funciona o diagnóstico financeiro da BPOn",
];

const InstagramSection = () => {
  return (
    <section className="py-24 lg:py-32 gradient-section">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Text */}
          <div>
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Instagram
            </span>
            <div className="w-12 h-px bg-primary/40 mt-3 mb-6" />
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-headline leading-[1.15] mb-6">
              Conteúdo para construir{" "}
              <span className="text-gradient-primary">autoridade</span> com a mesma base do serviço.
            </h2>
            <p className="font-body text-base text-body leading-relaxed mb-8">
              A BPOn não deve parecer uma página genérica de finanças. O conteúdo precisa refletir operação, critério e leitura financeira empresarial. O tom é consultivo, direto e técnico na medida certa.
            </p>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary/40 bg-primary/8 text-primary font-body text-sm font-medium hover:bg-primary/15 transition-all duration-200"
            >
              <Instagram size={16} />
              Seguir no Instagram
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Right — Content card */}
          <div className="rounded-xl border border-divider bg-card overflow-hidden">
            {/* Card header */}
            <div className="px-5 py-4 border-b border-divider bg-surface flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
                <Instagram size={15} className="text-primary" />
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-headline">Primeiras pautas sugeridas</p>
                <p className="font-body text-xs text-muted-foreground">Conteúdo com base operacional</p>
              </div>
            </div>

            {/* Items */}
            <div className="divide-y divide-divider">
              {contentSuggestions.map((item, i) => (
                <div key={item} className="flex items-start gap-4 px-5 py-4 hover:bg-surface transition-colors duration-150">
                  <span className="font-display font-bold text-xs text-primary/50 w-5 flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
