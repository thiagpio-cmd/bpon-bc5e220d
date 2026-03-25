import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const faturamentoOptions = [
  "Até R$ 100 mil/mês",
  "R$ 100 mil – R$ 500 mil/mês",
  "R$ 500 mil – R$ 2 mi/mês",
  "Acima de R$ 2 mi/mês",
  "Prefiro não informar",
];

const extraSelectFields = [
  {
    id: "segmento",
    label: "Segmento",
    options: ["Serviços", "Comércio", "Indústria", "Construção", "Tecnologia", "Saúde", "Outro"],
  },
  {
    id: "pessoas",
    label: "Pessoas no financeiro",
    options: ["Somente eu", "1 pessoa dedicada", "2 a 3 pessoas", "4 ou mais"],
  },
  {
    id: "ferramenta",
    label: "Ferramenta principal",
    options: [
      "Planilhas Excel / Google Sheets",
      "ERP (Omie, Bling, Totvs, SAP...)",
      "Sistema próprio",
      "Nenhum sistema estruturado",
    ],
  },
];

// Phone mask: (XX) XXXXX-XXXX or (XX) XXXX-XXXX
const applyPhoneMask = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

// Capitalize each word
const capitalizeName = (value: string): string =>
  value.replace(/\b\w/g, (c) => c.toUpperCase());

const DiagnosticForm = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<Record<string, string>>({});
  const [showExtra, setShowExtra] = useState(false);
  const [lgpdAccepted, setLgpdAccepted] = useState(false);

  const handleChange = (id: string, value: string) => {
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handlePhoneChange = (value: string) => {
    handleChange("whatsapp", applyPhoneMask(value));
  };

  const handleNameChange = (value: string) => {
    handleChange("nome", capitalizeName(value));
  };

  const handleEmpresaChange = (value: string) => {
    handleChange("empresa", value);
  };

  const step1Valid =
    form["nome"]?.trim() &&
    (form["whatsapp"]?.replace(/\D/g, "").length >= 10 || form["email"]?.includes("@")) &&
    form["empresa"]?.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lgpdAccepted) return;
    setLoading(true);
    try {
      await supabase.functions.invoke("send-lead-email", {
        body: {
          nome: form["nome"]?.trim(),
          empresa: form["empresa"]?.trim(),
          email: form["email"]?.trim() || null,
          whatsapp: form["whatsapp"] || null,
          faturamento: form["faturamento"] || null,
          desafio: form["desafio"]?.trim() || null,
          cidade: form["cidade"]?.trim() || null,
          segmento: form["segmento"] || null,
          pessoas: form["pessoas"] || null,
          ferramenta: form["ferramenta"] || null,
        },
      });
    } catch (err) {
      console.error("Erro ao enviar formulário:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 px-6 text-center gap-6">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M6 14l6 6 10-10"
              stroke="#10b981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-headline mb-2">
            Diagnóstico solicitado com sucesso.
          </h3>
          <p className="font-body text-sm text-body max-w-md leading-relaxed">
            A equipe da BPOn vai analisar as informações e entrar em contato. Em geral respondemos
            em até 1 dia útil.
          </p>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border font-body text-sm text-headline placeholder:text-body/45 focus:outline-none focus:ring-2 transition-all duration-200" +
    " bg-white border-divider focus:border-primary/50 focus:ring-primary/10";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-1">
        {[1, 2].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => (s === 2 && step1Valid ? setStep(2) : s === 1 ? setStep(1) : null)}
              className={`w-6 h-6 rounded-full flex items-center justify-center font-body font-bold text-[11px] transition-all duration-200 ${
                step === s
                  ? "bg-primary text-primary-foreground shadow-blue"
                  : s < step
                  ? "bg-emerald-500 text-white"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {s < step ? "✓" : s}
            </button>
            <span
              className={`font-body text-[11px] ${
                step === s ? "text-headline font-medium" : "text-body/60"
              }`}
            >
              {s === 1 ? "Identificação" : "Contexto"}
            </span>
            {s < 2 && <ChevronRight size={12} className="text-body/30" />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-4 animate-fade-in">
          {/* Nome */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="nome" className="font-body text-xs font-semibold text-headline">
              Nome completo <span className="text-primary">*</span>
            </label>
            <input
              id="nome"
              type="text"
              placeholder="Seu nome"
              required
              autoComplete="name"
              value={form["nome"] || ""}
              onChange={(e) => handleNameChange(e.target.value)}
              className={inputClass}
            />
          </div>

          {/* Empresa */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="empresa" className="font-body text-xs font-semibold text-headline">
              Empresa <span className="text-primary">*</span>
            </label>
            <input
              id="empresa"
              type="text"
              placeholder="Nome da empresa"
              required
              autoComplete="organization"
              value={form["empresa"] || ""}
              onChange={(e) => handleEmpresaChange(e.target.value)}
              className={inputClass}
            />
          </div>

          {/* WhatsApp + E-mail */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="whatsapp" className="font-body text-xs font-semibold text-headline">
                WhatsApp <span className="text-primary">*</span>
              </label>
              <input
                id="whatsapp"
                type="tel"
                placeholder="(34) 99999-9999"
                required
                inputMode="numeric"
                autoComplete="tel"
                maxLength={15}
                value={form["whatsapp"] || ""}
                onChange={(e) => handlePhoneChange(e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="font-body text-xs font-semibold text-headline">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="voce@empresa.com.br"
                autoComplete="email"
                value={form["email"] || ""}
                onChange={(e) => handleChange("email", e.target.value.trim())}
                className={inputClass}
              />
            </div>
          </div>

          <button
            type="button"
            disabled={!step1Valid}
            onClick={() => setStep(2)}
            className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-blue disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuar
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-4 animate-fade-in">
          {/* Faturamento */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="faturamento"
              className="font-body text-xs font-semibold text-headline"
            >
              Faixa de faturamento mensal <span className="text-primary">*</span>
            </label>
            <select
              id="faturamento"
              required
              value={form["faturamento"] || ""}
              onChange={(e) => handleChange("faturamento", e.target.value)}
              className={`${inputClass} appearance-none cursor-pointer`}
            >
              <option value="" disabled>
                Selecionar...
              </option>
              {faturamentoOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <p className="font-body text-[11px] text-body/60">
              Usamos apenas para direcionar o diagnóstico ao porte da sua operação.
            </p>
          </div>

          {/* Desafio */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="desafio" className="font-body text-xs font-semibold text-headline">
              Principal desafio financeiro hoje <span className="text-primary">*</span>
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

          {/* Accordion extra */}
          <div className="rounded-lg border border-divider overflow-hidden">
            <button
              type="button"
              onClick={() => setShowExtra((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-3 bg-surface hover:bg-surface-tint transition-colors duration-200 group"
            >
              <span className="font-body text-xs font-medium text-body group-hover:text-headline transition-colors duration-200">
                Informações complementares{" "}
                <span className="text-body/45 font-normal">(opcional)</span>
              </span>
              <ChevronDown
                size={14}
                className="text-muted-foreground transition-transform duration-300"
                style={{ transform: showExtra ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>
            {showExtra && (
              <div className="px-4 pb-4 pt-3 flex flex-col gap-4 border-t border-divider bg-surface/50">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="cidade"
                    className="font-body text-xs font-medium text-headline"
                  >
                    Cidade / UF
                  </label>
                  <input
                    id="cidade"
                    type="text"
                    placeholder="Uberlândia / MG"
                    autoComplete="address-level2"
                    value={form["cidade"] || ""}
                    onChange={(e) => handleChange("cidade", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {extraSelectFields.map((field) => (
                    <div key={field.id} className="flex flex-col gap-1.5">
                      <label
                        htmlFor={field.id}
                        className="font-body text-xs font-medium text-headline"
                      >
                        {field.label}
                      </label>
                      <select
                        id={field.id}
                        value={form[field.id] || ""}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled>
                          Selecionar...
                        </option>
                        {field.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* LGPD */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5 flex-shrink-0">
              <input
                type="checkbox"
                checked={lgpdAccepted}
                onChange={(e) => setLgpdAccepted(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-4 h-4 rounded border flex items-center justify-center transition-all duration-200 ${
                  lgpdAccepted
                    ? "bg-primary border-primary"
                    : "bg-white border-divider group-hover:border-primary/40"
                }`}
              >
                {lgpdAccepted && (
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path
                      d="M1 3.5l2.5 2.5 5-5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
            <span className="font-body text-[11.5px] text-body leading-relaxed">
              Li e concordo com a{" "}
              <span className="text-primary font-medium cursor-pointer hover:underline">
                Política de Privacidade
              </span>{" "}
              e autorizo o contato consultivo da equipe BPOn.
            </span>
          </label>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-5 py-3.5 rounded-lg border border-divider bg-surface font-body font-medium text-sm text-body hover:text-headline hover:border-primary/20 transition-all duration-200"
            >
              Voltar
            </button>
            <button
              type="submit"
              disabled={!lgpdAccepted || !form["faturamento"] || !form["desafio"]?.trim() || loading}
              className="group flex-1 flex items-center justify-center gap-2 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-blue disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Solicitar diagnóstico"}
              {!loading && (
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              )}
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default DiagnosticForm;
