# Plano: home agressiva, focada em conversão

Objetivo: reduzir a home ao mínimo necessário para o lead solicitar o diagnóstico. Cortar tudo que não move a decisão. Reforçar CTA em pontos estratégicos sem poluir.

## Estrutura final (4 blocos)

```
1. Hero + TrustBar
   ├─ HeroSection (headline + 1 CTA primário "Solicitar diagnóstico" + 1 secundário "Como funciona")
   └─ TrustBar (4 provas operacionais — mantida)

2. Dor → Solução (fundidas visualmente)
   ├─ PainPointsSection (enxuta: até 4 dores)
   └─ ServicesSection (4 frentes, sem faixa humana extra)
   + mini-CTA inline ao fim ("Solicitar diagnóstico")

3. Para Quem + Prova (1 bloco)
   └─ ForWhomCasesSection já fundida — manter, mas reduzir:
       - 4 perfis → 3
       - 2 casos → 1 case representativo
       - remover faixa de setores (ruído)

4. Conversão final
   ├─ FAQSection (reduzir para 5 perguntas mais decisivas)
   └─ CTASection (formulário — âncora final)
```

## Cortes

- **MethodSection**: remover da home. O "como funciona" vira 4 bullets curtos dentro do Hero/Services ou some — passo a passo não converte frio, atrasa decisão.
- **Faixa "Como a relação funciona"** em ServicesSection: remover.
- **Faixa de setores** em ForWhomCases: remover.
- **1 dos 2 cases**: manter só o mais forte (Empresa de Serviços ou Clínica — a definir).
- **1 dos 4 perfis** de ICP: remover o mais redundante.
- **FAQ**: de N para 5 perguntas (objeções de compra: preço, prazo, troca de contador, LGPD, onboarding).

## CTAs (regra dura)

- Hero: 1 primário ("Solicitar diagnóstico") + 1 secundário (âncora `#servicos`).
- Fim de ServicesSection: 1 mini-CTA inline (link + seta), não botão grande.
- CTASection: formulário direto, sem botão duplicado de WhatsApp.
- WhatsAppButton flutuante: mantido (já é o canal alternativo).

## Não muda

- Identidade visual, tokens, tipografia, ritmo `py-20`/`py-28`.
- Header, Footer, DiagnosticForm, edge function, banco, SEO.
- WhatsAppButton flutuante.

## Arquivos afetados

- `src/pages/Index.tsx` — remove import e render de `MethodSection`.
- `src/components/ServicesSection.tsx` — remove faixa "Como a relação funciona", adiciona mini-CTA inline final.
- `src/components/ForWhomCasesSection.tsx` — 3 perfis, 1 case, sem faixa de setores.
- `src/components/PainPointsSection.tsx` — confirmar máx 4 dores (revisar conteúdo).
- `src/components/FAQSection.tsx` — reduzir para 5 perguntas focadas em objeção.
- `MethodSection.tsx` permanece no repo (sem import) para rollback.

## Resultado esperado

Página ~35% mais curta, 1 caminho claro do topo ao formulário, CTA presente em 3 momentos (Hero, fim de Services, CTASection final) sem repetição visual.

## Confirmar antes de implementar

- Manter qual case: **Empresa de Serviços** ou **Clínica de Saúde**?
- Qual perfil de ICP cortar (01–04)?
- Você quer que eu reescreva as 5 FAQs ou reaproveite as atuais mais decisivas?
