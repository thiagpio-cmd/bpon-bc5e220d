import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

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

    const nome = trimOrNull(body.nome, 200);
    const empresa = trimOrNull(body.empresa, 200);
    if (!nome || !empresa) {
      return new Response(
        JSON.stringify({ success: false, error: "Campos obrigatórios ausentes." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

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
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    // Cliente separado para invocar funções com JWT válido (gateway exige JWT).
    const supabaseInvoker = createClient(supabaseUrl, supabaseAnonKey);

    const { data: inserted, error: insertError } = await supabase
      .from("lead_submissions")
      .insert({
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
      })
      .select("id")
      .single();

    if (insertError) {
      console.error("Erro ao gravar lead:", insertError);
      return new Response(
        JSON.stringify({ success: false, error: "Erro ao registrar lead." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const leadId = inserted?.id ?? crypto.randomUUID();

    // Dispara notificação por e-mail via pipeline transacional (fila + retry)
    const { error: emailError } = await supabaseInvoker.functions.invoke(
      "send-transactional-email",
      {
        body: {
          templateName: "lead-notification",
          idempotencyKey: `lead-notification-${leadId}`,
          templateData: {
            nome,
            empresa,
            email: email ?? undefined,
            whatsapp: whatsapp ?? undefined,
            faturamento: faturamento ?? undefined,
            desafio: desafio ?? undefined,
            cidade: cidade ?? undefined,
            segmento: segmento ?? undefined,
            pessoas: pessoas ?? undefined,
            ferramenta: ferramenta ?? undefined,
          },
        },
      }
    );

    if (emailError) {
      // Lead já está salvo — não falha o request por causa do e-mail.
      console.error("Falha ao enfileirar e-mail de notificação:", emailError);
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
