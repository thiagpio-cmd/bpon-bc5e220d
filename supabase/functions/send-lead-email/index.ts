import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const escapeHtml = (s: string): string =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );

const isString = (v: unknown): v is string => typeof v === "string";

const trimOrNull = (v: unknown, max: number): string | null => {
  if (!isString(v)) return null;
  const t = v.trim();
  if (!t) return null;
  return t.slice(0, max);
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ success: false, error: "Requisição inválida." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Required
    const nome = trimOrNull(body.nome, 200);
    const empresa = trimOrNull(body.empresa, 200);
    if (!nome || !empresa) {
      return new Response(
        JSON.stringify({ success: false, error: "Campos obrigatórios ausentes." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Optional
    const emailRaw = trimOrNull(body.email, 255);
    if (emailRaw && !EMAIL_RE.test(emailRaw)) {
      return new Response(
        JSON.stringify({ success: false, error: "E-mail inválido." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    const email = emailRaw;
    const whatsapp = trimOrNull(body.whatsapp, 32);
    const faturamento = trimOrNull(body.faturamento, 100);
    const desafio = trimOrNull(body.desafio, 2000);
    const cidade = trimOrNull(body.cidade, 120);
    const segmento = trimOrNull(body.segmento, 100);
    const pessoas = trimOrNull(body.pessoas, 100);
    const ferramenta = trimOrNull(body.ferramenta, 100);

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    await supabase.from("lead_submissions").insert({
      nome,
      empresa,
      email,
      whatsapp,
      faturamento,
      desafio,
      cidade,
      segmento,
      pessoas,
      ferramenta,
    });

    const emailLines = [
      `Nome: ${nome}`,
      `Empresa: ${empresa}`,
      `E-mail: ${email || "Não informado"}`,
      `Telefone: ${whatsapp || "Não informado"}`,
      ``,
      `Faixa de faturamento: ${faturamento || "Não informado"}`,
      `Principal desafio: ${desafio || "Não informado"}`,
    ];

    const complementares = [
      cidade ? `Cidade/UF: ${cidade}` : null,
      segmento ? `Segmento: ${segmento}` : null,
      pessoas ? `Pessoas no financeiro: ${pessoas}` : null,
      ferramenta ? `Ferramenta principal: ${ferramenta}` : null,
    ].filter(Boolean) as string[];

    if (complementares.length > 0) {
      emailLines.push(``);
      emailLines.push(`Informações complementares:`);
      emailLines.push(...complementares);
    }

    const emailText = emailLines.join("\n");
    const emailHtml = emailLines
      .map((line) => (line === "" ? "<br>" : `<span>${escapeHtml(line)}</span><br>`))
      .join("\n");

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY não configurada");
    }

    const projectId = Deno.env.get("SUPABASE_URL")?.split("//")[1]?.split(".")[0] ?? "";

    const emailResponse = await fetch(`https://email-api.lovable.dev/v1/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Project-Id": projectId,
      },
      body: JSON.stringify({
        to: "contato@fintexbpo.com.br",
        subject: `Novo lead - ${nome}`,
        text: emailText,
        html: emailHtml,
      }),
    });

    if (!emailResponse.ok) {
      const errText = await emailResponse.text();
      console.error("Erro ao enviar e-mail:", errText);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erro na edge function:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Erro interno." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
