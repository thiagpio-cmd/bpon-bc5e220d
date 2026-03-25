import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { nome, empresa, email, whatsapp, faturamento, desafio, cidade, segmento, pessoas, ferramenta } = body;

    // Save to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    await supabase.from("lead_submissions").insert({
      nome,
      empresa,
      email: email || null,
      whatsapp: whatsapp || null,
      faturamento: faturamento || null,
      desafio: desafio || null,
      cidade: cidade || null,
      segmento: segmento || null,
      pessoas: pessoas || null,
      ferramenta: ferramenta || null,
    });

    // Build email content
    const contato = [
      whatsapp ? `Telefone: ${whatsapp}` : null,
      email ? `E-mail: ${email}` : null,
    ].filter(Boolean).join("\n");

    const extraInfo = [
      faturamento ? `Faturamento mensal: ${faturamento}` : null,
      desafio ? `Principal desafio: ${desafio}` : null,
      cidade ? `Cidade/UF: ${cidade}` : null,
      segmento ? `Segmento: ${segmento}` : null,
      pessoas ? `Pessoas no financeiro: ${pessoas}` : null,
      ferramenta ? `Ferramenta principal: ${ferramenta}` : null,
    ].filter(Boolean).join("\n");

    const emailBody =
      `Nome: ${nome}\nEmpresa: ${empresa}\n${contato}` +
      (extraInfo ? `\n\n---\n${extraInfo}` : "");

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY não configurada");
    }

    const projectId = Deno.env.get("SUPABASE_URL")?.split("//")[1]?.split(".")[0] ?? "";

    const emailResponse = await fetch(
      `https://email-api.lovable.dev/v1/send`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "X-Project-Id": projectId,
        },
        body: JSON.stringify({
          to: "comercial@bpon.com.br",
          subject: `Novo lead - ${nome}`,
          text: emailBody,
          html: emailBody.replace(/\n/g, "<br>"),
        }),
      }
    );

    if (!emailResponse.ok) {
      const errText = await emailResponse.text();
      console.error("Erro ao enviar e-mail:", errText);
      // Still return success since the lead was saved
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erro na edge function:", error);
    return new Response(
      JSON.stringify({ success: false, error: String(error) }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
