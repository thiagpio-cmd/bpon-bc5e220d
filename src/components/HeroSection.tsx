import { ArrowRight, CheckCircle2 } from "lucide-react";

const miniCards = [
  { top: "Pagamentos e recebimentos", bottom: "sob controle" },
  { top: "Caixa e conciliação", bottom: "com mais clareza" },
  { top: "Gestão financeira", bottom: "com base real" },
];

const dashboardItems = [
  { label: "Contas a pagar", value: "Processo organizado", color: "primary" },
  { label: "Contas a receber", value: "Acompanhamento constante", color: "accent" },
  { label: "Conciliação", value: "Base confiável", color: "primary" },
  { label: "Fluxo de caixa", value: "Mais previsibilidade", color: "accent" },
  { label: "Fechamento gerencial", value: "Leitura mensal consistente", color: "primary" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(217 91% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 60%) 1px, transparent 1px)`,
        backgroundSize: "60px 60px"
      }} />

      <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left col */}
          <div className="flex flex-col gap-6 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-body text-xs font-medium text-primary tracking-wide">
                BPO financeiro com base operacional e leitura gerencial
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl lg:text-5xl xl:text-[52px] leading-[1.1] text-headline">
              O financeiro da empresa não pode depender de{" "}
              <span className="text-gradient-primary">improviso.</span>
            </h1>

            {/* Supporting paragraph */}
            <p className="font-body text-base lg:text-lg text-body leading-relaxed max-w-xl">
              A BPOn estrutura e conduz a rotina financeira da empresa com processo, disciplina e clareza. O foco é dar controle sobre pagamentos, recebimentos, conciliação, caixa e indicadores — para que a operação pare de andar no escuro.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-primary/90 transition-all duration-200 glow-primary"
              >
                Solicitar diagnóstico
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-divider bg-surface hover:border-primary/40 hover:bg-surface-elevated text-foreground font-body font-medium text-sm transition-all duration-200"
              >
                Ver serviços
              </a>
            </div>

            {/* Mini cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              {miniCards.map((card) => (
                <div
                  key={card.top}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl border border-divider bg-surface card-hover"
                >
                  <CheckCircle2 size={15} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-xs font-medium text-foreground leading-tight">{card.top}</p>
                    <p className="font-body text-xs text-muted-foreground">{card.bottom}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right col — Dashboard Card */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="w-full max-w-md relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-primary/8 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl border border-divider bg-card overflow-hidden glow-primary-sm">
                {/* Card header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-divider bg-surface">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-display font-semibold text-sm text-headline">Visão Operacional</span>
                    <span className="font-body text-xs text-muted-foreground">BPO Financeiro · Overview</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="font-body text-xs text-accent font-medium">Ativo</span>
                  </div>
                </div>

                {/* Status indicator bar */}
                <div className="h-1 w-full">
                  <div className="h-full w-3/5 bg-gradient-to-r from-primary to-accent rounded-r-full" />
                </div>

                {/* Items */}
                <div className="px-5 py-2 divide-y divide-divider">
                  {dashboardItems.map((item, i) => (
                    <div key={item.label} className="flex items-center justify-between py-3.5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-1.5 h-8 rounded-full flex-shrink-0 ${
                            item.color === "accent"
                              ? "bg-accent/70"
                              : "bg-primary/70"
                          }`}
                        />
                        <span className="font-body text-sm font-medium text-foreground">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-body text-xs text-muted-foreground">{item.value}</span>
                        <div className={`w-2 h-2 rounded-full ${item.color === "accent" ? "bg-accent" : "bg-primary"}`} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card footer */}
                <div className="px-5 py-3.5 bg-surface border-t border-divider flex items-center justify-between">
                  <span className="font-body text-xs text-muted-foreground">Estrutura em operação</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div key={i} className={`h-1 w-5 rounded-full ${i < 4 ? "bg-primary/60" : "bg-divider"}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
