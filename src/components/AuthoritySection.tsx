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
      className="font-display font-black text-[26px] leading-none mb-1 text-gradient-primary">
      {suffix}{count} <span className="text-[13px] font-semibold text-body">{unit}</span>
    </p>
  );
};

const AuthoritySection = () => {
  return (
    <section id="autoridade" className="py-20 lg:py-28 relative overflow-hidden bg-background">

      <div className="absolute top-0 left-0 w-[480px] h-[360px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(var(--primary) / 0.04) 0%, transparent 70%)" }} />
      <div className="absolute top-16 right-12 w-14 h-14 border border-primary/8 rounded-xl rotate-12 animate-float-slow pointer-events-none hidden lg:block" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="reveal mb-12 lg:mb-14 max-w-xl">
          <span className="label-pill mb-4 inline-block">Credibilidade</span>
          <h2 className="font-display font-black text-[2rem] lg:text-[2.7rem] leading-[1.06] tracking-[-0.024em] mb-3 mt-3 text-headline">
            Estrutura de quem já{" "}
            <span className="text-gradient-primary">opera há décadas.</span>
          </h2>
          <p className="font-body text-[13.5px] leading-relaxed text-body">
            A BPOn não nasceu como startup. É parte de um grupo com base contábil e
            empresarial construída ao longo de mais de 20 anos em Uberlândia, com CRC
            registrado e estrutura que sustenta operação real.
          </p>
        </div>

        {/* 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className={`reveal reveal-delay-${i + 1} group p-6 flex flex-col gap-4 relative overflow-hidden cursor-default rounded-xl border border-divider bg-surface card-hover`}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="icon-sm icon-bg transition-all duration-300 group-hover:scale-105">
                  <Icon size={15} strokeWidth={1.8} className="text-primary" />
                </div>

                <div>
                  {metric.value > 0 ? (
                    <CountUpMetric target={metric.value} suffix={metric.suffix} unit={metric.unit} />
                  ) : (
                    <p className="font-display font-bold text-[14.5px] mb-1 text-headline">{metric.displayText}</p>
                  )}
                  <p className="font-body font-semibold text-[10px] uppercase tracking-[0.09em] mb-1.5 text-primary/65">{metric.label}</p>
                  <p className="font-body text-[12px] leading-relaxed text-body">{metric.detail}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rodapé institucional */}
        <div className="reveal reveal-delay-5 pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-divider">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            {["Grupo Ubercentral", "Uberlândia — MG", "CNPJ 09.281.566/0001-03", "CRC MG-012100/O"].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-3">
                <span className="font-body text-[11px] text-body/55">{item}</span>
                {i < arr.length - 1 && <span className="font-body text-[11px] text-body/20">·</span>}
              </span>
            ))}
          </div>
          <a href="#diagnostico"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-[13px] hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-blue w-fit flex-shrink-0">
            Solicitar diagnóstico
          </a>
        </div>

      </div>
    </section>
  );
};

export default AuthoritySection;
