import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection_essentialFields = [
  { id: "nome", label: "Nome completo", type: "text", placeholder: "Seu nome", required: true, fullWidth: true },
  { id: "empresa", label: "Empresa", type: "text", placeholder: "Nome da empresa", required: true },
  { id: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "(34) 99999-9999", required: true },
  { id: "email", label: "E-mail", type: "email", placeholder: "voce@empresa.com.br", required: true },
];

const faturamentoOptions = ["Até R$ 100 mil", "R$ 100 mil – R$ 500 mil", "R$ 500 mil – R$ 2 mi", "Acima de R$ 2 mi", "Prefiro não informar"];

const extraFields = [
  { id: "cidade", label: "Cidade / UF", type: "text", placeholder: "Uberlândia / MG" },
];

const extraSelectFields = [
  { id: "segmento", label: "Segmento", options: ["Serviços", "Comércio", "Indústria", "Construção", "Tecnologia", "Saúde", "Outro"] },
  { id: "pessoas", label: "Quantas pessoas no financeiro?", options: ["Somente eu", "1 pessoa dedicada", "2 a 3 pessoas", "4 ou mais"] },
  { id: "ferramenta", label: "Usa ERP ou planilhas?", options: ["Planilhas Excel / Google Sheets", "ERP (Omie, Bling, Totvs, SAP...)", "Sistema próprio", "Nenhum sistema estruturado"] },
];

const DiagnosticForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<Record<string, string>>({});
  const [showExtra, setShowExtra] = useState(false);

  const handleChange = (id: string, value: string) => {
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-6 text-center gap-6">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M6 14l6 6 10-10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-headline mb-2">
            Diagnóstico solicitado com sucesso.
          </h3>
          <p className="font-body text-sm text-body max-w-md leading-relaxed">
            A equipe da BPOn vai analisar as informações e entrar em contato para dar continuidade ao diagnóstico. Em geral respondemos em até 1 dia útil.
          </p>
        </div>
      </div>
    );
  }

  const inputClass = "px-4 py-3 rounded-lg border border-divider bg-surface font-body text-sm text-headline placeholder:text-body/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      {/* Essential fields — 2 col grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {HeroSection_essentialFields.map((field) => (
          <div key={field.id} className={`flex flex-col gap-1.5 ${field.fullWidth ? "sm:col-span-2" : ""}`}>
            <label htmlFor={field.id} className="font-body text-xs font-medium text-headline">
              {field.label}
              {field.required && <span className="text-primary ml-0.5">*</span>}
            </label>
            <input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              value={form[field.id] || ""}
              onChange={(e) => handleChange(field.id, e.target.value)}
              className={inputClass}
            />
          </div>
        ))}
      </div>

      {/* Faturamento */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="faturamento" className="font-body text-xs font-medium text-headline">
          Faixa de faturamento mensal <span className="text-primary">*</span>
        </label>
        <select
          id="faturamento"
          required
          value={form["faturamento"] || ""}
          onChange={(e) => handleChange("faturamento", e.target.value)}
          className={`${inputClass} appearance-none cursor-pointer`}
        >
          <option value="" disabled>Selecionar...</option>
          {faturamentoOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {/* Desafio principal */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="desafio" className="font-body text-xs font-medium text-headline">
          Qual o principal desafio financeiro hoje? <span className="text-primary">*</span>
        </label>
        <textarea
          id="desafio"
          rows={3}
          required
          placeholder="Descreva brevemente o contexto atual..."
          value={form["desafio"] || ""}
          onChange={(e) => handleChange("desafio", e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Accordion — Informações complementares */}
      <div className="rounded-lg border border-divider overflow-hidden">
        <button
          type="button"
          onClick={() => setShowExtra((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-3 bg-surface hover:bg-surface-tint transition-colors duration-200 group"
        >
          <span className="font-body text-xs font-medium text-body group-hover:text-headline transition-colors duration-200">
            + Informações complementares <span className="text-body/50 font-normal">(opcional)</span>
          </span>
          <ChevronDown
            size={14}
            className="text-muted-foreground transition-transform duration-300"
            style={{ transform: showExtra ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </button>

        {showExtra && (
          <div className="px-4 pb-4 pt-3 flex flex-col gap-4 border-t border-divider bg-surface/50">
            {/* Cidade */}
            {extraFields.map((field) => (
              <div key={field.id} className="flex flex-col gap-1.5">
                <label htmlFor={field.id} className="font-body text-xs font-medium text-headline">{field.label}</label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  className={inputClass}
                />
              </div>
            ))}
            {/* Extra selects */}
            <div className="grid sm:grid-cols-2 gap-4">
              {extraSelectFields.map((field) => (
                <div key={field.id} className="flex flex-col gap-1.5">
                  <label htmlFor={field.id} className="font-body text-xs font-medium text-headline">{field.label}</label>
                  <select
                    id={field.id}
                    value={form[field.id] || ""}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>Selecionar...</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Privacy */}
      <p className="font-body text-xs text-body/60">
        Seus dados serão usados apenas para contato consultivo da equipe BPOn. Nenhuma informação é compartilhada com terceiros.
      </p>

      {/* Submit */}
      <button
        type="submit"
        className="group flex items-center justify-center gap-2 w-full sm:w-auto sm:self-start px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-card"
      >
        Solicitar diagnóstico financeiro
        <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
      </button>
    </form>
  );
};

export default DiagnosticForm;
