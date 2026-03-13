import { MessageCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden gradient-cta border border-white/10 shadow-deep bg-noise">

          {/* Decorative grid texture */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(hsl(221 83% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(221 83% 60%) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Editorial photo (right side, desktop) */}
          <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80&auto=format&fit=crop"
              alt="Reunião executiva de planejamento financeiro"
              className="w-full h-full object-cover opacity-25"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(218,82%,10%)] via-[hsl(218,82%,10%)]/60 to-transparent" />
          </div>

          <div className="relative px-8 lg:px-16 py-16 lg:py-20 max-w-2xl">

            {/* Label */}
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary/70 uppercase">
              Próximo passo
            </span>
            <div className="w-10 h-px bg-primary/40 mt-3 mb-8" />

            {/* Headline */}
            <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-[2.8rem] text-white leading-[1.1] mb-6">
              Se a rotina financeira pede mais clareza, a BPOn pode começar pelo diagnóstico.
            </h2>

            {/* Paragraph */}
            <p className="font-body text-base lg:text-lg text-white/65 leading-relaxed mb-10 max-w-xl">
              O primeiro passo é entender a operação atual — os gargalos, a estrutura existente e o nível de visibilidade que a liderança tem hoje. A partir daí, a BPOn organiza o que precisa ser estruturado.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#diagnostico"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-body font-bold text-sm hover:bg-primary/90 transition-all duration-200 shadow-blue-lg"
              >
                <MessageCircle size={17} />
                Solicitar diagnóstico
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="https://wa.me/5534992812444"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-white/20 bg-white/8 hover:bg-white/14 hover:border-white/30 text-white font-body font-semibold text-sm transition-all duration-200"
              >
                Falar com a equipe
              </a>
            </div>

            {/* Trust signal */}
            <p className="font-body text-xs text-white/35 mt-8">
              Diagnóstico sem compromisso · Grupo Ubercentral desde 2002
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
