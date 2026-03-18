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

      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: "hsl(220 55% 6%)" }} />

        {/* Grande mancha azul à esquerda */}
        <div className="absolute inset-y-0 -left-[10%] w-[60%]"
          style={{ background: "radial-gradient(ellipse 80% 90% at 0% 55%, hsl(220 79% 20% / 0.85) 0%, transparent 70%)" }} />

        {/* Brilho azul elétrico */}
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px]"
          style={{ background: "radial-gradient(ellipse at 40% 40%, hsl(220 79% 46% / 0.18) 0%, transparent 62%)" }} />

        {/* Lado direito */}
        <div className="absolute inset-y-0 right-0 w-[42%] hidden lg:block"
          style={{ background: "linear-gradient(to left, hsl(220 55% 5%) 0%, transparent 100%)" }} />

        {/* Linhas diagonais animadas */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07] hidden lg:block" viewBox="0 0 1280 900" preserveAspectRatio="xMidYMid slice">
          <line x1="760" y1="0" x2="1000" y2="900" stroke="hsl(220 79% 55%)" strokeWidth="1.5">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="820" y1="0" x2="1060" y2="900" stroke="hsl(220 79% 55%)" strokeWidth="0.8">
            <animate attributeName="opacity" values="1;0.3;1" dur="5s" repeatCount="indefinite" />
          </line>
          <line x1="700" y1="0" x2="940" y2="900" stroke="hsl(220 79% 55%)" strokeWidth="0.5" />
        </svg>

        {/* Floating geometric shapes */}
        <div className="absolute top-[20%] right-[12%] w-20 h-20 border border-primary/20 rounded-xl rotate-12 animate-float hidden lg:block" />
        <div className="absolute bottom-[25%] right-[22%] w-12 h-12 border border-primary/10 rounded-lg -rotate-6 animate-float-slow hidden lg:block" />
        <div className="absolute top-[55%] right-[8%] w-3 h-3 rounded-full bg-primary/30 animate-pulse hidden lg:block" />
        <div className="absolute top-[30%] right-[30%] w-2 h-2 rounded-full bg-primary/20 animate-pulse hidden lg:block" style={{ animationDelay: "1s" }} />

        {/* Grade pontilhada */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(210 80% 72% / 1) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />

        {/* Barra vertical de acento */}
        <div className="absolute top-0 left-0 w-1 h-full"
          style={{ background: "linear-gradient(to bottom, transparent 0%, hsl(220 79% 46%) 30%, hsl(220 79% 46%) 70%, transparent 100%)" }} />

        {/* Linha de acento superior */}
        <div className="absolute top-0 left-0 w-[45%] h-[3px]"
          style={{ background: "linear-gradient(to right, hsl(220 79% 46%), transparent)" }} />

        {/* Glow inferior */}
        <div className="absolute bottom-0 left-0 w-full h-48"
          style={{ background: "linear-gradient(to top, hsl(220 55% 5%) 0%, transparent 100%)" }} />

        {/* Cluster de pontos */}
        <div className="absolute top-24 right-20 w-40 h-40 opacity-[0.09] hidden lg:block"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(210 80% 72% / 1) 1.5px, transparent 0)",
            backgroundSize: "14px 14px",
          }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col flex-1 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col flex-1 justify-center pt-12 pb-28 lg:pb-36 max-w-[680px]">

          {/* Eyebrow */}
          <div className="animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <span className="label-pill-dark">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              BPO Financeiro · Grupo Ubercentral
            </span>
          </div>

          {/* H1 with typewriter */}
          <div className="mt-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <h1 className="font-display font-black leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)", color: "hsl(0 0% 97%)" }}>
              Financeiro<br />
              <span className="text-shimmer">{typed}</span>
              <span className="inline-block w-[3px] h-[0.85em] ml-1 align-middle bg-primary animate-pulse rounded-sm" />
              <br />
              <span style={{ color: "hsl(210 30% 82%)" }}>Operação com</span><br />
              <span style={{ color: "hsl(210 20% 56%)" }}>método.</span>
            </h1>
          </div>

          {/* Animated divider */}
          <div className="mt-8 mb-6 h-[3px] rounded-full animate-fade-up overflow-hidden"
            style={{ animationDelay: "0.22s", width: "48px" }}>
            <div className="h-full bg-primary rounded-full"
              style={{ animation: "line-grow 0.8s ease-out 0.5s both" }} />
          </div>

          {/* Sub */}
          <p className="font-body text-[15px] lg:text-[16px] leading-[1.7] max-w-[480px] animate-fade-up"
            style={{ color: "hsl(210 18% 62%)", animationDelay: "0.28s" }}>
            Para empresas que já operam e precisam organizar o financeiro,
            criar previsibilidade e ter base gerencial confiável para decidir.
          </p>

          {/* Deliverable chips with staggered animation */}
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
                  background: "hsl(220 79% 46% / 0.08)",
                  border: "1px solid hsl(220 79% 46% / 0.20)",
                  color: "hsl(210 80% 72%)",
                  animationDelay: `${0.34 + i * 0.08}s`,
                }}>
                <span className="w-1 h-1 rounded-full" style={{ background: "hsl(220 79% 60%)" }} />
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
                border: "1px solid hsl(210 30% 28%)",
                background: "hsl(220 79% 46% / 0.05)",
                color: "hsl(210 30% 72%)",
              }}>
              Como funciona
            </a>
          </div>

          {/* Proof strip */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 pt-7 animate-fade-up"
            style={{ borderTop: "1px solid hsl(210 30% 18%)", animationDelay: "0.6s" }}>
            {[
              { num: "Desde 2002", label: "Grupo Ubercentral" },
              { num: "BPO", label: "operação recorrente" },
              { num: "CFO", label: "leitura gerencial mensal" },
            ].map((p) => (
              <div key={p.num} className="flex items-baseline gap-2 group cursor-default">
                <span className="font-display font-black text-[13px] group-hover:text-primary transition-colors duration-300"
                  style={{ color: "hsl(220 79% 65%)" }}>{p.num}</span>
                <span className="font-body text-[11px]" style={{ color: "hsl(210 15% 38%)" }}>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float"
        style={{ opacity: 0.35 }}>
        <span className="font-body text-[9px] tracking-[0.22em] uppercase" style={{ color: "hsl(210 15% 45%)" }}>Scroll</span>
        <ChevronDown size={14} style={{ color: "hsl(210 15% 45%)" }} />
      </div>

    </section>
  );
};

export default HeroSection;
