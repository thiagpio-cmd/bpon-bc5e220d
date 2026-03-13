import { ArrowRight, CheckCircle2, CreditCard, TrendingUp, GitMerge, BarChart3, FileText, ChevronRight } from "lucide-react";

const miniCards = [
  { icon: CreditCard, top: "Pagamentos e recebimentos", bottom: "sob controle" },
  { icon: BarChart3, top: "Caixa e conciliação", bottom: "com mais clareza" },
  { icon: TrendingUp, top: "Gestão financeira", bottom: "com base real" },
];

const dashboardItems = [
  { label: "Contas a pagar", value: "Processo organizado", status: "primary" },
  { label: "Contas a receber", value: "Acompanhamento constante", status: "accent" },
  { label: "Conciliação", value: "Base confiável", status: "primary" },
  { label: "Fluxo de caixa", value: "Mais previsibilidade", status: "accent" },
  { label: "Fechamento gerencial", value: "Leitura mensal consistente", status: "primary" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero pt-16 overflow-hidden">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-grid-light pointer-events-none" />

      {/* Soft blue radial glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-radial pointer-events-none opacity-60"
        style={{ background: "radial-gradient(ellipse at top right, hsl(214 90% 93% / 0.8), transparent 70%)" }}
      />

      <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ─── Left column ─── */}
          <div className="flex flex-col gap-6 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full badge-blue">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
              <span className="font-body text-xs font-semibold text-primary tracking-wide">
                BPO financeiro com base operacional e leitura gerencial
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl lg:text-5xl xl:text-[52px] leading-[1.1] text-headline">
              O financeiro da empresa precisa transmitir{" "}
              <span className="gradient-text-primary">clareza, controle</span>
              {" "}e{" "}
              <span className="gradient-text-primary">previsibilidade.</span>
            </h1>

            {/* Supporting paragraph */}
            <p className="font-body text-base lg:text-lg text-body leading-relaxed max-w-xl">
              A BPOn estrutura e conduz a rotina financeira da empresa com processo, disciplina e visão gerencial. O foco é dar segurança sobre pagamentos, recebimentos, conciliação, caixa e indicadores para que a operação deixe de depender de improviso.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#formulario"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-sm"
              >
                Solicitar diagnóstico
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-divider bg-white hover:border-primary/40 hover:bg-surface-elevated text-foreground font-body font-medium text-sm transition-all duration-200 shadow-sm"
              >
                Ver serviços
              </a>
            </div>

            {/* Mini cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              {miniCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.top}
                    className="flex items-start gap-3 p-3.5 rounded-xl border border-divider bg-white shadow-card card-hover-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold text-headline leading-tight">{card.top}</p>
                      <p className="font-body text-xs text-body mt-0.5">{card.bottom}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─── Right column — Operational Overview Card ─── */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="w-full max-w-[420px]">
              <div className="rounded-2xl border border-divider bg-white shadow-hero-card overflow-hidden">
                {/* Card header */}
                <div className="px-6 py-4 border-b border-divider bg-surface-elevated">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold text-sm text-headline">Financeiro estruturado para leitura real</p>
                      <p className="font-body text-xs text-body mt-0.5">BPO Financeiro · Visão operacional</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
                      <span className="font-body text-xs font-semibold text-accent">Rotina ativa</span>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-4 h-1.5 w-full bg-divider rounded-full overflow-hidden">
                    <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-primary to-accent" />
                  </div>
                </div>

                {/* Items */}
                <div className="px-6 py-2 divide-y divide-divider">
                  {dashboardItems.map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-1.5 h-7 rounded-full flex-shrink-0 ${item.status === "accent" ? "bg-accent/60" : "bg-primary/60"}`} />
                        <span className="font-body text-sm font-medium text-headline">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-body text-xs text-body">{item.value}</span>
                        <CheckCircle2 size={14} className={item.status === "accent" ? "text-accent" : "text-primary"} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navy CTA strip */}
                <div className="px-6 py-4 gradient-navy flex items-center justify-between">
                  <div>
                    <p className="font-body text-xs text-white/70">Próximo passo</p>
                    <p className="font-display font-semibold text-sm text-white mt-0.5">Diagnóstico financeiro</p>
                  </div>
                  <a
                    href="#formulario"
                    className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/15 hover:bg-white/25 text-white font-body font-semibold text-xs transition-all duration-200 border border-white/20"
                  >
                    Preencher formulário
                    <ChevronRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
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
