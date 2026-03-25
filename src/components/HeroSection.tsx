import { ArrowRight, ChevronDown, TrendingUp, CheckCircle2 } from "lucide-react";

const barData = [
{ month: "Out", h: 52, active: false, value: "682k", pct: "+4%" },
{ month: "Nov", h: 68, active: false, value: "731k", pct: "+7%" },
{ month: "Dez", h: 45, active: false, value: "598k", pct: "-18%" },
{ month: "Jan", h: 74, active: false, value: "763k", pct: "+11%" },
{ month: "Fev", h: 61, active: false, value: "694k", pct: "-9%" },
{ month: "Mar", h: 88, active: true, value: "847k", pct: "" }];


const DashboardMockup = () =>
<div
  className="relative w-full max-w-[480px] rounded-2xl overflow-hidden select-none"
  style={{
    background: "hsl(222 42% 11%)",
    border: "1px solid hsl(214 30% 22%)",
    boxShadow: "0 40px 100px hsl(214 80% 8% / 0.75), 0 0 0 1px hsl(214 50% 30% / 0.12), inset 0 1px 0 hsl(214 60% 32% / 0.15)"
  }}>
  
    {/* Top accent bar */}
    <div className="h-[3px] w-full" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(214 80% 65%), transparent)" }} />

    {/* Header */}
    <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid hsl(214 28% 16%)" }}>
      <div>
        <p className="font-display font-bold text-[11px] tracking-[0.09em] uppercase mb-0.5" style={{ color: "hsl(210 22% 46%)" }}>Relatório Gerencial</p>
        <p className="font-display font-black text-[15px]" style={{ color: "hsl(210 50% 93%)" }}>Mês | Ano</p>
      </div>
      <span
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold font-body"
      style={{ background: "hsl(142 60% 40% / 0.15)", border: "1px solid hsl(142 60% 40% / 0.25)", color: "hsl(142 65% 55%)" }}>
      
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Fechado
      </span>
    </div>

    {/* KPI row */}
    <div className="grid grid-cols-3 divide-x" style={{ borderBottom: "1px solid hsl(214 28% 16%)", borderColor: "hsl(214 28% 16%)" }}>
      {[
    { label: "Receita", value: "R$ 847k", delta: "+12%", up: true },
    { label: "Despesa", value: "R$ 612k", delta: "-3%", up: false },
    { label: "Resultado", value: "R$ 235k", delta: "+28%", up: true }].
    map((kpi) =>
    <div key={kpi.label} className="flex flex-col items-center justify-center py-5 px-3 gap-1.5">
          <p className="font-body text-[10px] uppercase tracking-[0.1em]" style={{ color: "hsl(210 18% 40%)" }}>{kpi.label}</p>
          <p className="font-display font-black text-[15px]" style={{ color: kpi.up ? "hsl(210 50% 90%)" : "hsl(210 35% 72%)" }}>{kpi.value}</p>
          <span
        className="flex items-center gap-0.5 text-[10px] font-semibold font-body"
        style={{ color: kpi.up ? "hsl(142 65% 52%)" : "hsl(0 65% 60%)" }}>
        
            <TrendingUp size={9} />
            {kpi.delta}
          </span>
        </div>
    )}
    </div>

    {/* Bar chart */}
    <div className="px-6 pt-5 pb-5">
      <div className="flex items-center justify-between mb-3">
        <p className="font-body text-[10px] uppercase tracking-[0.1em]" style={{ color: "hsl(210 18% 38%)" }}>
          Receita — últimos 6 meses
        </p>
        





      
      </div>

      {/* Bars — referência fixa de 96px para a altura máxima */}
      <div className="relative flex items-end gap-2" style={{ height: "96px" }}>
        {barData.map((b) => {
        const maxH = 88; // altura da maior barra (Mar)
        const barH = Math.round(b.h / maxH * 80); // escala proporcional até 80px
        return (
          <div key={b.month} className="flex flex-col items-center gap-1 flex-1">
              {/* Valor */}
              <span
              className="font-display font-bold leading-none"
              style={{ fontSize: "7px", color: b.active ? "hsl(214 80% 70%)" : "hsl(210 18% 30%)" }}>
              
                {b.value}
              </span>
              {/* % sobre a barra ativa */}
              <span
              className="font-body font-black leading-none"
              style={{ fontSize: "8px", color: b.active ? "hsl(142 65% 58%)" : "transparent" }}>
              
                {b.pct}
              </span>
              {/* Barra */}
              <div
              className="w-full rounded-t-[3px]"
              style={{
                height: `${barH}px`,
                background: b.active ?
                "linear-gradient(to top, hsl(var(--primary)), hsl(214 80% 65%))" :
                "hsl(214 40% 20%)",
                boxShadow: b.active ? "0 0 14px hsl(var(--primary) / 0.4)" : "none"
              }} />
            
              {/* Mês */}
              <span
              className="font-body shrink-0"
              style={{ fontSize: "8px", color: b.active ? "hsl(214 75% 62%)" : "hsl(210 18% 36%)" }}>
              
                {b.month}
              </span>
            </div>);

      })}
      </div>
    </div>

    {/* Status checks */}
    <div
    className="flex flex-col gap-2.5 px-6 pb-5"
    style={{ borderTop: "1px solid hsl(214 28% 14%)", paddingTop: "16px" }}>
    
      {[
    { label: "Conciliação bancária", ok: true },
    { label: "Fluxo de caixa atualizado", ok: true },
    { label: "Indicadores de desempenho", ok: true }].
    map((s) =>
    <div key={s.label} className="flex items-center gap-2.5">
          <CheckCircle2 size={13} style={{ color: "hsl(142 65% 52%)" }} />
          <span className="font-body text-[12px]" style={{ color: "hsl(210 22% 56%)" }}>{s.label}</span>
        </div>
    )}
    </div>

    {/* CTA */}
    <div className="px-6 pb-6">
      <a
      href="#diagnostico"
      className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl font-body font-semibold text-[13px] transition-all duration-300 hover:opacity-90"
      style={{ background: "hsl(var(--primary) / 0.15)", border: "1px solid hsl(var(--primary) / 0.3)", color: "hsl(214 75% 68%)" }}>
      
        Quero um relatório assim
        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>

    {/* Floating badge */}
    <div
    className="absolute -top-3.5 -right-3.5 px-3.5 py-1.5 rounded-full text-[10px] font-semibold font-body animate-float"
    style={{ background: "hsl(222 42% 14%)", border: "1px solid hsl(214 40% 26%)", color: "hsl(210 40% 68%)", boxShadow: "0 4px 20px hsl(214 80% 10% / 0.55)" }}>
    
      BPOn · Operação recorrente
    </div>
  </div>;


const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[96vh] flex flex-col overflow-hidden">

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
        style={{ backgroundImage: "radial-gradient(circle, hsl(210 80% 75% / 1) 1px, transparent 0)", backgroundSize: "44px 44px" }} />
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
            <div className="mt-7 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              <h1 className="font-display font-black leading-[1.02] tracking-[-0.025em]"
              style={{ fontSize: "clamp(2.1rem, 4.8vw, 4.2rem)", color: "hsl(210 50% 96%)" }}>
                BPO Financeiro para empresas que precisam de rotina, controle{" "}
                e{" "}
                <span style={{ color: "hsl(214 65% 68%)" }}>leitura gerencial.</span>
              </h1>
            </div>

            {/* Sub */}
            <p className="font-body leading-[1.78] max-w-[500px] mt-6 animate-fade-up"
            style={{ fontSize: "clamp(13px, 1.4vw, 15px)", color: "hsl(210 30% 65%)", animationDelay: "0.25s" }}>
              Organizamos o financeiro da sua empresa com processo, cadência operacional, visibilidade de caixa e fechamento gerencial: tudo isso para apoiar decisões com segurança!
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mt-6 animate-fade-up" style={{ animationDelay: "0.33s" }}>
              {["Contas a pagar e receber", "Fluxo de caixa", "Conciliação bancária", "Fechamento gerencial", "Indicadores financeiros"].map((chip, i) =>
              <span key={chip}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold font-body tracking-wide hover:scale-105 transition-transform cursor-default"
              style={{
                background: "hsl(214 80% 55% / 0.10)",
                border: "1px solid hsl(214 80% 55% / 0.22)",
                color: "hsl(210 75% 76%)",
                animationDelay: `${0.34 + i * 0.07}s`
              }}>
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "hsl(214 80% 65%)" }} />
                  {chip}
                </span>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-8 animate-fade-up" style={{ animationDelay: "0.48s" }}>
              <a href="#diagnostico"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-bold text-[13px] shadow-blue hover:shadow-blue-lg hover:scale-[1.03] transition-all duration-300">
                Solicitar diagnóstico
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              <a href="#metodo"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-body font-semibold text-[13px] transition-all duration-300 hover:scale-[1.02]"
              style={{ border: "1px solid hsl(214 40% 32%)", background: "hsl(214 60% 55% / 0.07)", color: "hsl(210 38% 75%)" }}>
                Ver como funciona
              </a>
            </div>

            {/* Proof strip */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-9 pt-6 animate-fade-up"
            style={{ borderTop: "1px solid hsl(214 35% 22%)", animationDelay: "0.58s" }}>
              {[
              { num: "Desde 2002", label: "Grupo Ubercentral" },
              { num: "BPO +", label: "operação recorrente" },
              { num: "CFO as a Service", label: "leitura gerencial" }].
              map((p) =>
              <div key={p.num} className="flex items-baseline gap-2 group cursor-default">
                  <span className="font-display font-black text-[12px] group-hover:text-blue-400 transition-colors duration-300"
                style={{ color: "hsl(214 75% 62%)" }}>{p.num}</span>
                  <span className="font-body text-[11px]" style={{ color: "hsl(210 18% 42%)" }}>{p.label}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right — Dashboard mockup */}
          <div className="hidden lg:flex flex-col items-center justify-center w-[480px] flex-shrink-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float" style={{ opacity: 0.4 }}>
        <span className="font-body text-[9px] tracking-[0.22em] uppercase" style={{ color: "hsl(210 20% 52%)" }}>Scroll</span>
        <ChevronDown size={14} style={{ color: "hsl(210 20% 52%)" }} />
      </div>
    </section>);

};

export default HeroSection;