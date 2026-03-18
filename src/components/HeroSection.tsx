import { ArrowRight, ChevronDown } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";

const HeroSection = () => {
  const typed = useTypewriter(
    ["terceirizado.", "estruturado.", "previsível.", "com método."],
    55,
    2400
  );

  return (
    <section className="relative min-h-[96vh] flex flex-col overflow-hidden">

      {/* ── Background — azul profundo mas respirável ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base menos saturada, menos escura */}
        <div className="absolute inset-0"
          style={{ background: "hsl(222 45% 12%)" }} />

        {/* Mancha de cor à esquerda — mais suave */}
        <div className="absolute inset-y-0 -left-[10%] w-[55%]"
          style={{ background: "radial-gradient(ellipse 80% 85% at 0% 55%, hsl(220 65% 22% / 0.75) 0%, transparent 68%)" }} />

        {/* Brilho azul elétrico — mais claro e arejado */}
        <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px]"
          style={{ background: "radial-gradient(ellipse at 38% 38%, hsl(214 90% 58% / 0.12) 0%, transparent 62%)" }} />

        {/* Lado direito — gradiente suave */}
        <div className="absolute inset-y-0 right-0 w-[40%] hidden lg:block"
          style={{ background: "linear-gradient(to left, hsl(222 45% 10%) 0%, transparent 100%)" }} />

        {/* Linhas diagonais mais suaves */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06] hidden lg:block" viewBox="0 0 1280 900" preserveAspectRatio="xMidYMid slice">
          <line x1="760" y1="0" x2="1020" y2="900" stroke="hsl(214 85% 65%)" strokeWidth="1.5">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="840" y1="0" x2="1100" y2="900" stroke="hsl(214 85% 65%)" strokeWidth="0.7">
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="5.5s" repeatCount="indefinite" />
          </line>
          <line x1="700" y1="0" x2="960" y2="900" stroke="hsl(214 85% 65%)" strokeWidth="0.4" />
        </svg>

        {/* Floating geometric shapes */}
        <div className="absolute top-[20%] right-[10%] w-20 h-20 border border-blue-400/15 rounded-xl rotate-12 animate-float hidden lg:block" />
        <div className="absolute bottom-[28%] right-[20%] w-12 h-12 border border-blue-400/10 rounded-lg -rotate-6 animate-float-slow hidden lg:block" />
        <div className="absolute top-[58%] right-[7%] w-3 h-3 rounded-full bg-blue-400/25 animate-pulse hidden lg:block" />
        <div className="absolute top-[32%] right-[28%] w-2 h-2 rounded-full bg-blue-400/15 animate-pulse hidden lg:block" style={{ animationDelay: "1.2s" }} />

        {/* Grade pontilhada mais discreta */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(210 80% 75% / 1) 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }} />

        {/* Barra vertical de acento */}
        <div className="absolute top-0 left-0 w-1 h-full"
          style={{ background: "linear-gradient(to bottom, transparent 0%, hsl(214 85% 55%) 30%, hsl(214 85% 55%) 70%, transparent 100%)" }} />

        {/* Linha de acento superior */}
        <div className="absolute top-0 left-0 w-[40%] h-[3px]"
          style={{ background: "linear-gradient(to right, hsl(214 85% 58%), transparent)" }} />

        {/* Glow inferior — transição suave para o fundo claro abaixo */}
        <div className="absolute bottom-0 left-0 w-full h-40"
          style={{ background: "linear-gradient(to top, hsl(222 45% 10%) 0%, transparent 100%)" }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col flex-1 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col flex-1 justify-center pt-12 pb-28 lg:pb-36 max-w-[700px]">

          {/* Eyebrow */}
          <div className="animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <span className="label-pill-dark">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              BPO Financeiro · Grupo Ubercentral
            </span>
          </div>

          {/* H1 with typewriter */}
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

          {/* Animated divider */}
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

          {/* Deliverable chips */}
          <div className="flex flex-wrap gap-2 mt-7">
            {[
              "Contas a pagar e receber",
              "Fluxo de caixa",
              "Fechamento gerencial",
              "Indicadores financeiros",
            ].map((chip, i) => (
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
