# Plano: consolidação da home da Fintex BPO

Objetivo: reduzir redundância de seções e CTAs, mantendo PainPoints e TrustBar como âncoras de dor e credibilidade. Mudança apenas de estrutura e composição — sem alterar identidade visual, tokens ou tipografia.

## Estrutura final (ordem na home)

```
1. Hero & Proposta de Valor
   ├─ HeroSection (mantida, CTAs principais)
   └─ TrustBar (mantida — prova social logo abaixo)

2. Dores → Solução
   ├─ PainPointsSection (mantida)
   └─ ServicesSection (expandida — ver §A)

3. Como Funciona
   └─ MethodSection (mantida, sem CTA interno — ver §C)

4. Para Quem & Casos
   └─ ForWhomSection + CasesSection fundidas em um único bloco (ver §B)

5. FAQ & Conversão Final
   ├─ FAQSection (mantida)
   └─ CTASection (única âncora de conversão final, com formulário)
```

## §A — ServicesSection expandida

Hoje ServicesSection mostra 3 frentes. CFOVisionSection e HumanSection trazem conteúdo correlato (visão estratégica + equipe dedicada) que se repete.

Ação:
- Manter os 3 blocos atuais de ServicesSection.
- Adicionar um 4º bloco "CFO as a Service" reaproveitando o copy-chave de CFOVisionSection (visão estratégica sem custo de executivo interno).
- Adicionar uma faixa inferior compacta (1 linha) com o diferencial humano de HumanSection (equipe dedicada / ritmo operacional), em vez de seção própria.
- Remover CFOVisionSection e HumanSection da home (componentes ficam no repositório, sem import em Index.tsx, caso queira reusar depois).

## §B — Para Quem + Casos unificados

Hoje são duas seções consecutivas (ForWhom + Cases) com transição redundante.

Ação:
- Criar `ForWhomCasesSection.tsx` que combina:
  - Topo: perfil ideal (conteúdo atual de ForWhomSection, mantendo as regras de ICP da memória).
  - Base: 1–2 cases mais representativos de CasesSection (mantendo a nota obrigatória de confidencialidade).
- Substituir os dois imports em Index.tsx por esse único componente.
- ForWhomSection e CasesSection originais permanecem como arquivos (sem import) para rollback fácil.

## §C — Consolidação de CTAs

Hoje há CTA no Hero, no fim de Services, no fim de Method e no CTASection final.

Ação:
- Manter CTAs em: Hero (primário) e CTASection (final, com formulário).
- Remover blocos de CTA internos de MethodSection (bloco "Pronto para começar…") e ServicesSection (cta-strip do rodapé).
- Os títulos das seções continuam linkáveis ao `#diagnostico` via âncora, mas sem botão visual repetido.

## Arquivos alterados

- `src/pages/Index.tsx` — nova ordem de imports e remoção de CFOVision, Human, ForWhom, Cases (substituídos por ForWhomCases).
- `src/components/ServicesSection.tsx` — +1 bloco (CFO as a Service), +faixa humana, remoção do cta-strip.
- `src/components/ForWhomCasesSection.tsx` — **novo**, funde ForWhom + Cases.
- `src/components/MethodSection.tsx` — remoção do bloco CTA inferior.

## Não muda

- Tokens, paleta, tipografia, espaçamento `py-20`/`py-28`.
- Hero, TrustBar, PainPoints, FAQ, CTASection, Footer, WhatsAppButton.
- SEO, formulário de diagnóstico, edge functions, banco.
- Componentes removidos da home permanecem no repo (sem deleção de arquivo).

## Resultado

De ~10 seções para 5 blocos lógicos. Menos repetição de CTA, leitura mais direta, identidade visual intacta.
