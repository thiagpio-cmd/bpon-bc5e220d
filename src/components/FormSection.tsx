import { MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

const FormSection = () => {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    faturamento: "",
    desafio: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — would connect to backend
    alert("Formulário enviado! Em breve entraremos em contato.");
  };

  const inputBase =
    "w-full rounded-lg border border-divider bg-white px-4 py-3 font-body text-sm text-foreground placeholder:text-body/50 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/50 transition-all duration-200";

  return (
    <section id="formulario" className="py-24 lg:py-32 gradient-cta">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ─── Left — Copy ─── */}
          <div className="lg:pt-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Formulário
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-[42px] text-headline leading-[1.1] mb-5">
              Se a rotina financeira está confusa, o problema é falta de{" "}
              <span className="gradient-text-primary">estrutura.</span>
            </h2>

            <p className="font-body text-base lg:text-lg text-body leading-relaxed mb-8 max-w-lg">
              Preencha o formulário e a BPOn poderá entender a operação atual, diagnosticar gargalos e indicar o melhor caminho para organizar caixa, rotina e visão gerencial.
            </p>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border border-divider bg-white hover:border-primary/40 hover:bg-surface text-foreground font-body font-semibold text-sm transition-all duration-200 shadow-sm"
            >
              <MessageCircle size={18} className="text-primary" />
              Chamar no WhatsApp
              <ArrowRight size={14} className="ml-1 text-primary group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* ─── Right — Form card ─── */}
          <div>
            <div className="rounded-2xl border border-divider bg-white shadow-hero-card p-7 lg:p-8">
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-headline mb-1.5">
                  Solicitar diagnóstico financeiro
                </h3>
                <p className="font-body text-sm text-body leading-relaxed">
                  Formulário inicial para qualificação comercial e entendimento do cenário da empresa.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Nome */}
                <div>
                  <label className="block font-body text-xs font-semibold text-headline mb-1.5">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className={inputBase}
                    required
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label className="block font-body text-xs font-semibold text-headline mb-1.5">Empresa</label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Nome da empresa"
                    className={inputBase}
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block font-body text-xs font-semibold text-headline mb-1.5">WhatsApp</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className={inputBase}
                    required
                  />
                </div>

                {/* Faturamento */}
                <div>
                  <label className="block font-body text-xs font-semibold text-headline mb-1.5">Faturamento mensal</label>
                  <select
                    name="faturamento"
                    value={formData.faturamento}
                    onChange={handleChange}
                    className={inputBase}
                  >
                    <option value="">Selecione uma faixa</option>
                    <option value="ate-50k">Até R$ 50 mil</option>
                    <option value="50k-200k">R$ 50 mil – R$ 200 mil</option>
                    <option value="200k-500k">R$ 200 mil – R$ 500 mil</option>
                    <option value="acima-500k">Acima de R$ 500 mil</option>
                  </select>
                </div>

                {/* Principal desafio */}
                <div>
                  <label className="block font-body text-xs font-semibold text-headline mb-1.5">Principal desafio financeiro</label>
                  <textarea
                    name="desafio"
                    value={formData.desafio}
                    onChange={handleChange}
                    placeholder="Descreva brevemente o principal desafio financeiro da empresa..."
                    rows={3}
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-sm"
                >
                  Enviar formulário
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <p className="font-body text-xs text-body text-center mt-1">
                  Seus dados são tratados com confidencialidade.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FormSection;
