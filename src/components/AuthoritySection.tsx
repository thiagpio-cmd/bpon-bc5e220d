import { Building2, Users2, Award, TrendingUp } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";

const metrics = [
  {
    icon: Building2,
    value: 20,
    suffix: "+",
    unit: "anos",
    label: "Base institucional",
    detail: "Grupo Ubercentral atuando desde 2002 em Uberlândia",
  },
  {
    icon: Users2,
    value: 0,
    displayText: "Equipe especializada",
    label: "Financeiro e gerencial",
    detail: "Profissionais dedicados à operação do cliente",
  },
  {
    icon: Award,
    value: 0,
    displayText: "Base contábil integrada",
    label: "Contador + BPO",
    detail: "Estrutura que cobre operação e obrigações fiscais",
  },
  {
    icon: TrendingUp,
    value: 0,
    displayText: "Atuação consultiva",
    label: "Além da execução",
    detail: "Leitura gerencial e apoio à decisão da liderança",
  },
];

const CountUpMetric = ({ target, suffix, unit }: { target: number; suffix?: string; unit?: string }) => {
  const { count, ref } = useCountUp(target, 1800);
  return (
    <p ref={ref as React.RefObject<HTMLParagraphElement>}
      className="font-display font-black text-[28px] leading-none mb-1"
      style={{ color: "hsl(220 79% 62%)" }}>
      {suffix}{count} <span className="text-[14px] font-semibold" style={{ color: "hsl(210 30% 65%)" }}>{unit}</span>
    </p>
  );
};

const AuthoritySection = () => {
  return (
    <section id="autoridade" className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "hsl(220 52% 7%)" }}>

      {/* Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(220 79% 46% / 0.07) 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[350px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(220 79% 46% / 0.04) 0%, transparent 70%)" }} />

      {/* Animated geometric shapes */}
      <div className="absolute top-24 left-20 w-14 h-14 border border-primary/10 rounded-xl rotate-12 animate-float pointer-events-none hidden lg:block" />
      <div className="absolute bottom-20 right-28 w-20 h-20 border border-primary/8 rounded-2xl -rotate-6 animate-float-slow pointer-events-none hidden lg:block" />
      <div className="absolute top-[60%] left-[40%] w-3 h-3 rounded-full bg-primary/20 animate-pulse pointer-events-none hidden lg:block" />

      {/* Grade pontilhada */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(210 80% 72% / 1) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }} />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="reveal mb-12 lg:mb-14 max-w-xl">
          <span className="label-pill-dark mb-5 inline-block">Credibilidade</span>
          <h2 className="font-display font-black text-[2rem] lg:text-[2.8rem] leading-[1.07] tracking-[-0.025em] mb-4 mt-3"
            style={{ color: "hsl(0 0% 96%)" }}>
            Estrutura de quem já{" "}
            <span className="text-shimmer">opera há décadas.</span>
          </h2>
          <p className="font-body text-[15px] leading-relaxed"
            style={{ color: "hsl(210 18% 58%)" }}>
            A BPOn não nasceu como startup. É parte de um grupo com base contábil e
            empresarial construída ao longo de mais de 20 anos em Uberlândia, com CRC
            registrado e estrutura que sustenta operação real.
          </p>
        </div>

        {/* 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden mb-8"
          style={{ background: "hsl(218 38% 16%)" }}>
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className={`reveal reveal-delay-${i + 1} group p-6 lg:p-7 flex flex-col gap-4 relative overflow-hidden cursor-default`}
                style={{
                  background: "hsl(220 52% 7%)",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "hsl(220 52% 10%)")}
                onMouseLeave={e => (e.currentTarget.style.background = "hsl(220 52% 7%)")}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(220 79% 46% / 0.06) 0%, transparent 60%)" }} />

                <div className="w-9 h-9 rounded-xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "hsl(220 79% 46% / 0.10)", border: "1px solid hsl(220 79% 46% / 0.20)" }}>
                  <Icon size={15} strokeWidth={1.8} style={{ color: "hsl(220 79% 62%)" }} />
                </div>
                <div className="relative z-10">
                  {metric.value > 0 ? (
                    <CountUpMetric target={metric.value} suffix={metric.suffix} unit={metric.unit} />
                  ) : (
                    <p className="font-display font-bold text-[15px] mb-1"
                      style={{ color: "hsl(210 45% 92%)" }}>{metric.displayText}</p>
                  )}
                  <p className="font-display font-semibold text-[10px] uppercase tracking-[0.08em] mb-2"
                    style={{ color: "hsl(220 79% 60% / 0.70)" }}>{metric.label}</p>
                  <p className="font-body text-[12px] leading-relaxed"
                    style={{ color: "hsl(210 15% 50%)" }}>{metric.detail}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rodapé institucional */}
        <div className="reveal reveal-delay-5 pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          style={{ borderTop: "1px solid hsl(218 38% 15%)" }}>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            {["Grupo Ubercentral", "Uberlândia — MG", "CNPJ 09.281.566/0001-03", "CRC MG-012100/O"].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-4">
                <span className="font-body text-[11px]" style={{ color: "hsl(210 15% 42%)" }}>{item}</span>
                {i < arr.length - 1 && <span className="font-body text-[11px]" style={{ color: "hsl(210 15% 24%)" }}>·</span>}
              </span>
            ))}
          </div>
          <a href="#diagnostico"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-[13px] hover:opacity-90 hover:scale-[1.03] transition-all duration-300 shadow-blue w-fit flex-shrink-0">
            Solicitar diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
