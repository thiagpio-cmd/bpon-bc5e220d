import { Building2, Users2, Award, TrendingUp, Star } from "lucide-react";
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
    detail: "Estrutura que cobre operação financeira e obrigações fiscais",
  },
  {
    icon: TrendingUp,
    value: 0,
    displayText: "Atuação consultiva",
    label: "Além da execução",
    detail: "Leitura gerencial e apoio à decisão da liderança",
  },
];

const testimonials = [
  {
    quote: "Antes das reuniões mensais não sabíamos com precisão nem o que tinha entrado no mês. Hoje temos fechamento, fluxo e indicadores prontos no início de cada mês.",
    name: "Diretor Financeiro",
    role: "Empresa de Serviços · Uberlândia, MG",
    initials: "DF",
  },
  {
    quote: "A BPOn organizou o que a gente nunca conseguiu fazer internamente. Processo, cadência, controles. Agora tudo está funcionando sem depender de uma única pessoa.",
    name: "Sócio-Gestor",
    role: "Empresa Comercial · Triângulo Mineiro",
    initials: "SG",
  },
];

const CountUpMetric = ({ target, suffix, unit }: { target: number; suffix?: string; unit?: string }) => {
  const { count, ref } = useCountUp(target, 1800);
  return (
    <p ref={ref as React.RefObject<HTMLParagraphElement>}
      className="font-display font-black text-[2.2rem] leading-none mb-1 text-headline">
      {suffix}{count} <span className="text-[13px] font-semibold text-body">{unit}</span>
    </p>
  );
};

const AuthoritySection = () => {
  return (
    <section id="autoridade" className="py-20 lg:py-28 relative overflow-hidden section-alt section-divide-top">

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        {/* Header — minimalista, força pelo texto */}
        <div className="reveal mb-16 flex flex-col lg:flex-row gap-8 lg:items-end lg:justify-between">
          <div>
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-5">
              Credibilidade
            </p>
            <h2 className="font-display font-black text-headline leading-[1.04] tracking-[-0.028em]"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}>
              Estrutura de quem já<br />
              opera há décadas.
            </h2>
          </div>
          <p className="font-body text-[13.5px] leading-relaxed text-body lg:max-w-xs">
            A BPOn é parte de um grupo com base contábil e empresarial construída ao longo de mais de 20 anos
            em Uberlândia — com CRC registrado e estrutura que sustenta operação real.
          </p>
        </div>

        {/* Métricas — linha horizontal sem cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-divider rounded-2xl overflow-hidden mb-12 reveal">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className={`reveal-delay-${i + 1} group flex flex-col gap-3 px-6 py-7 bg-surface hover:bg-surface-tint transition-colors duration-200 cursor-default
                  ${i < metrics.length - 1 ? "border-r border-divider" : ""}
                `}
              >
                <Icon size={16} strokeWidth={1.6} className="text-primary opacity-70" />
                <div>
                  {metric.value > 0 ? (
                    <CountUpMetric target={metric.value} suffix={metric.suffix} unit={metric.unit} />
                  ) : (
                    <p className="font-display font-bold text-[1.05rem] mb-0.5 text-headline leading-snug">{metric.displayText}</p>
                  )}
                  <p className="font-body text-[11px] text-body mt-1">{metric.detail}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Depoimentos — aspas grandes como elemento visual */}
        <div className="reveal reveal-delay-5 mb-12">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-body/50 mb-6">
            O que dizem os clientes
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="flex flex-col gap-4 relative pl-6"
                style={{ borderLeft: "2px solid hsl(var(--primary) / 0.20)" }}>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="font-body text-[13px] text-body leading-relaxed flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-display font-black text-[10px] text-primary-foreground"
                    style={{ background: "hsl(var(--primary))" }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-display font-bold text-[12px] text-headline">{t.name}</p>
                    <p className="font-body text-[11px] text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rodapé institucional */}
        <div className="reveal reveal-delay-6 pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-divider">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            {["Grupo Ubercentral", "Uberlândia — MG", "CNPJ 09.281.566/0001-03", "CRC MG-012100/O"].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-3">
                <span className="font-body text-[11px]" style={{ color: "hsl(var(--body) / 0.55)" }}>{item}</span>
                {i < arr.length - 1 && <span className="font-body text-[11px]" style={{ color: "hsl(var(--body) / 0.2)" }}>·</span>}
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
