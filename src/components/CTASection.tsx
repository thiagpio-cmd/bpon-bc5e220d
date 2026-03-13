import { MessageCircle, Mail, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden gradient-cta border border-primary/20">
          {/* Glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/5 pointer-events-none" />
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(hsl(217 91% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 60%) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative px-8 lg:px-16 py-16 lg:py-20 max-w-3xl">
            {/* Label */}
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Contato
            </span>
            <div className="w-12 h-px bg-accent/40 mt-3 mb-8" />

            {/* Headline */}
            <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-headline leading-[1.1] mb-6">
              Se a rotina financeira está confusa, o problema não é esforço.{" "}
              <span className="text-gradient-primary">É estrutura.</span>
            </h2>

            {/* Paragraph */}
            <p className="font-body text-base lg:text-lg text-body leading-relaxed mb-10 max-w-xl">
              A BPOn pode diagnosticar a operação atual, organizar a rotina financeira e construir uma base mais confiável para o negócio crescer com critério.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-primary/90 transition-all duration-200 glow-primary"
              >
                <MessageCircle size={18} />
                Chamar no WhatsApp
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="mailto:contato@bpon.com.br"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border border-foreground/15 bg-foreground/5 hover:bg-foreground/10 hover:border-foreground/25 text-foreground font-body font-medium text-sm transition-all duration-200"
              >
                <Mail size={18} />
                Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
