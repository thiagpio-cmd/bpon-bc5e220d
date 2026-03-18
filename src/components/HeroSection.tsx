import { ArrowRight, ChevronDown, TrendingUp, CheckCircle2, AlertCircle } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";

const barData = [
  { month: "Out", h: 52, active: false },
  { month: "Nov", h: 68, active: false },
  { month: "Dez", h: 45, active: false },
  { month: "Jan", h: 74, active: false },
  { month: "Fev", h: 61, active: false },
  { month: "Mar", h: 88, active: true },
];

const DashboardMockup = () => (
  <div
    className="relative w-full max-w-[400px] rounded-2xl overflow-hidden select-none"
    style={{
      background: "hsl(222 42% 11%)",
      border: "1px solid hsl(214 30% 22%)",
      boxShadow: "0 32px 80px hsl(214 80% 10% / 0.7), 0 0 0 1px hsl(214 50% 30% / 0.1)",
    }}
  >
    {/* Top accent bar */}
    <div className="h-[3px] w-full" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(214 80% 65%), transparent)" }} />

    {/* Header */}
    <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid hsl(214 28% 16%)" }}>
      <div>
        <p className="font-display font-bold text-[11px] tracking-[0.08em] uppercase" style={{ color: "hsl(210 22% 50%)" }}>Relatório Gerencial</p>
        <p className="font-display font-black text-[13px]" style={{ color: "hsl(210 50% 92%)" }}>Março / 2025</p>
      </div>
      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold font-body"
        style={{ background: "hsl(142 60% 40% / 0.15)", border: "1px solid hsl(142 60% 40% / 0.25)", color: "hsl(142 65% 55%)" }}>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Fechado
      </span>
    </div>

    {/* KPI row */}
    <div className="grid grid-cols-3 divide-x" style={{ borderBottom: "1px solid hsl(214 28% 16%)", borderColor: "hsl(214 28% 16%)" }}>
      {[
        { label: "Receita", value: "R$ 847k", up: true },
        { label: "Despesa", value: "R$ 612k", up: false },
        { label: "Resultado", value: "R$ 235k", up: true },
      ].map((kpi) => (
        <div key={kpi.label} className="flex flex-col items-center justify-center py-4 px-2 gap-1">
          <p className="font-body text-[9px] uppercase tracking-[0.1em]" style={{ color: "hsl(210 18% 42%)" }}>{kpi.label}</p>
          <p className="font-display font-black text-[13px]" style={{ color: kpi.up ? "hsl(210 50% 88%)" : "hsl(210 35% 72%)" }}>{kpi.value}</p>
          <span className="flex items-center gap-0.5 text-[9px] font-semibold font-body" style={{ color: kpi.up ? "hsl(142 65% 52%)" : "hsl(0 65% 60%)" }}>
            <TrendingUp size={8} />
            {kpi.up ? "+12%" : "-3%"}
          </span>
        </div>
      ))}
    </div>

    {/* Bar chart */}
    <div className="px-5 pt-5 pb-4">
      <p className="font-body text-[9px] uppercase tracking-[0.1em] mb-3" style={{ color: "hsl(210 18% 38%)" }}>Receita — últimos 6 meses</p>
      <div className="flex items-end gap-2 h-[68px]">
        {barData.map((b) => (
          <div key={b.month} className="flex flex-col items-center gap-1.5 flex-1">
            <div
              className="w-full rounded-t-sm transition-all duration-700"
              style={{
                height: `${b.h}%`,
                background: b.active
                  ? "linear-gradient(to top, hsl(var(--primary)), hsl(214 80% 65%))"
                  : "hsl(214 40% 22%)",
                boxShadow: b.active ? "0 0 12px hsl(var(--primary) / 0.35)" : "none",
              }}
            />
            <span className="font-body text-[8px]" style={{ color: b.active ? "hsl(214 75% 62%)" : "hsl(210 18% 38%)" }}>{b.month}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Status checks */}
    <div className="flex flex-col gap-2 px-5 pb-5" style={{ borderTop: "1px solid hsl(214 28% 14%)", paddingTop: "14px" }}>
      {[
        { label: "Conciliação bancária", ok: true },
        { label: "Fluxo de caixa atualizado", ok: true },
        { label: "Indicadores de desempenho", ok: true },
      ].map((s) => (
        <div key={s.label} className="flex items-center gap-2">
          {s.ok
            ? <CheckCircle2 size={11} style={{ color: "hsl(142 65% 52%)" }} />
            : <AlertCircle size={11} style={{ color: "hsl(38 90% 55%)" }} />
          }
          <span className="font-body text-[11px]" style={{ color: "hsl(210 22% 55%)" }}>{s.label}</span>
        </div>
      ))}
    </div>

    {/* CTA button inside mockup */}
    <div className="px-5 pb-5">
      <a
        href="#diagnostico"
        className="group flex items-center justify-center gap-2 w-full py-2.5 rounded-lg font-body font-semibold text-[12px] transition-all duration-300 hover:opacity-90"
        style={{
          background: "hsl(var(--primary) / 0.15)",
          border: "1px solid hsl(var(--primary) / 0.3)",
          color: "hsl(214 75% 68%)",
        }}
      >
        Quero um relatório assim
        <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>

    {/* Floating badge */}
    <div
      className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-[10px] font-semibold font-body animate-float"
      style={{
        background: "hsl(222 42% 14%)",
        border: "1px solid hsl(214 40% 26%)",
        color: "hsl(210 40% 68%)",
        boxShadow: "0 4px 16px hsl(214 80% 10% / 0.5)",
      }}
    >
      BPOn · Operação recorrente
    </div>
  </div>
);

const HeroSection = () => {
  const typed = useTypewriter(
    ["terceirizado.", "estruturado.", "previsível.", "com método."],
    55,
    2400
  );

  return (
    <section className="relative min-h-[96vh] flex flex-col overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: "hsl(222 45% 12%)" }} />
        <div className="absolute inset-y-0 -left-[10%] w-[55%]"
          style={{ background: "radial-gradient(ellipse 80% 85% at 0% 55%, hsl(220 65% 22% / 0.75) 0%, transparent 68%)" }} />
        <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px]"
          style={{ background: "radial-gradient(ellipse at 38% 38%, hsl(214 90% 58% / 0.12) 0%, transparent 62%)" }} />
        <div className="absolute inset-y-0 right-0 w-[40%] hidden lg:block"
          style={{ background: "linear-gradient(to left, hsl(222 45% 10%) 0%, transparent 100%)" }} />

        <svg className="absolute inset-0 w-full h-full opacity-[0.06] hidden lg:block" viewBox="0 0 1280 900" preserveAspectRatio="xMidYMid slice">
          <line x1="760" y1="0" x2="1020" y2="900" stroke="hsl(214 85% 65%)" strokeWidth="1.5">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="840" y1="0" x2="1100" y2="900" stroke="hsl(214 85% 65%)" strokeWidth="0.7">
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="5.5s" repeatCount="indefinite" />
          </line>
          <line x1="700" y1="0" x2="960" y2="900" stroke="hsl(214 85% 65%)" strokeWidth="0.4" />
        </svg>

        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(210 80% 75% / 1) 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }} />
        <div className="absolute top-0 left-0 w-1 h-full"
          style={{ background: "linear-gradient(to bottom, transparent 0%, hsl(214 85% 55%) 30%, hsl(214 85% 55%) 70%, transparent 100%)" }} />
        <div className="absolute top-0 left-0 w-[40%] h-[3px]"
          style={{ background: "linear-gradient(to right, hsl(214 85% 58%), transparent)" }} />
        <div className="absolute bottom-0 left-0 w-full h-40"
          style={{ background: "linear-gradient(to top, hsl(222 45% 10%) 0%, transparent 100%)" }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col flex-1 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row flex-1 justify-center items-center gap-12 lg:gap-16 pt-12 pb-28 lg:pb-36">

          {/* Left — copy */}
          <div className="flex flex-col flex-1 max-w-[580px]">
            {/* Eyebrow */}
            <div className="animate-fade-up" style={{ animationDelay: "0.05s" }}>
              <span className="label-pill-dark">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                BPO Financeiro · Grupo Ubercentral
              </span>
            </div>

            {/* H1 */}
            <div className="mt-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              <h1 className="font-display font-black leading-[0.95] tracking-[-0.03em]"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)", color: "hsl(210 50% 96%)" }}>
                Financeiro<br />
                <span className="text-shimmer">{typed}</span>
                <span className="inline-block w-[3px] h-[0.85em] ml-1 align-middle bg-primary animate-pulse rounded-sm" />
                <br />
                <span style={{ color: "hsl(210 40% 78%)" }}>Operação com</span><br />
                <span style={{ color: "hsl(214 65% 60%)" }}>método.</span>
              </h1>
            </div>

            {/* Divider */}
            <div className="mt-8 mb-6 h-[3px] rounded-full animate-fade-up overflow-hidden"
              style={{ animationDelay: "0.22s", width: "48px" }}>
              <div className="h-full bg-primary rounded-full"
                style={{ animation: "line-grow 0.8s ease-out 0.5s both" }} />
            </div>

            {/* Sub */}
            <p className="font-body text-[15px] lg:text-[16px] leading-[1.75] max-w-[500px] animate-fade-up"
              style={{ color: "hsl(210 30% 68%)", animationDelay: "0.28s" }}>
              Para empresas que já operam e precisam organizar o financeiro,
              criar previsibilidade e ter base gerencial confiável para decidir.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mt-7">
              {["Contas a pagar e receber", "Fluxo de caixa", "Fechamento gerencial", "Indicadores financeiros"].map((chip, i) => (
                <span key={chip}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold font-body tracking-wide animate-fade-up hover:scale-105 transition-transform cursor-default"
                  style={{
                    background: "hsl(214 80% 55% / 0.10)",
                    border: "1px solid hsl(214 80% 55% / 0.22)",
                    color: "hsl(210 75% 76%)",
                    animationDelay: `${0.34 + i * 0.08}s`,
                  }}>
                  <span className="w-1 h-1 rounded-full" style={{ background: "hsl(214 80% 65%)" }} />
                  {chip}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-9 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <a href="#diagnostico"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-bold text-[13px] shadow-blue hover:shadow-blue-lg hover:scale-[1.03] transition-all duration-300">
                Solicitar diagnóstico
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              <a href="#metodo"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-body font-semibold text-[13px] transition-all duration-300 hover:scale-[1.02]"
                style={{
                  border: "1px solid hsl(214 40% 32%)",
                  background: "hsl(214 60% 55% / 0.07)",
                  color: "hsl(210 38% 75%)",
                }}>
                Como funciona
              </a>
            </div>

            {/* Proof strip */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 pt-7 animate-fade-up"
              style={{ borderTop: "1px solid hsl(214 35% 22%)", animationDelay: "0.6s" }}>
              {[
                { num: "Desde 2002", label: "Grupo Ubercentral" },
                { num: "BPO", label: "operação recorrente" },
                { num: "CFO", label: "leitura gerencial mensal" },
              ].map((p) => (
                <div key={p.num} className="flex items-baseline gap-2 group cursor-default">
                  <span className="font-display font-black text-[13px] group-hover:text-blue-400 transition-colors duration-300"
                    style={{ color: "hsl(214 75% 62%)" }}>{p.num}</span>
                  <span className="font-body text-[11px]" style={{ color: "hsl(210 18% 45%)" }}>{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard mockup (desktop only) */}
          <div className="hidden lg:flex flex-col items-center justify-center flex-shrink-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <DashboardMockup />
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float"
        style={{ opacity: 0.4 }}>
        <span className="font-body text-[9px] tracking-[0.22em] uppercase" style={{ color: "hsl(210 20% 52%)" }}>Scroll</span>
        <ChevronDown size={14} style={{ color: "hsl(210 20% 52%)" }} />
      </div>

    </section>
  );
};

export default HeroSection;
