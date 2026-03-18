import { Building2, Users2, Award, TrendingUp, Star, MessageSquare } from "lucide-react";
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
    quote: "A BPOn organizou o que a gente nunca conseguiu fazer internamente. Processo, cadência, controles — tudo funcionando sem depender de uma única pessoa.",
    name: "Sócio-Gestor",
    role: "Empresa Comercial · Triângulo Mineiro",
    initials: "SG",
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
    <section id="autoridade" className="py-20 lg:py-28 relative overflow-hidden section-alt section-divide-top">

      <div className="absolute top-0 left-0 w-[480px] h-[360px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(var(--primary) / 0.04) 0%, transparent 70%)" }} />

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

        {/* 4 cards — prova institucional */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
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

        {/* Depoimentos */}
        <div className="reveal reveal-delay-5 mb-10">
          <div className="flex items-center gap-3 mb-5">
            <MessageSquare size={14} className="text-primary" />
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-primary/70">O que dizem os clientes</p>
          </div>
          <div className="grid md:grid-cols-2 gap-3.5">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-xl border border-divider bg-surface card-hover flex flex-col gap-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="font-body text-[13px] text-body leading-relaxed flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-divider">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-display font-black text-[11px] text-primary-foreground"
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
