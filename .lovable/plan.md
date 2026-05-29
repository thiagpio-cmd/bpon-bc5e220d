## Objetivo
Tirar o fundo azul escuro da seção `CFOVisionSection` e reconstruí-la na paleta clara da página (off-white + navy), mantendo o ar premium e a posição como âncora institucional.

## Mudanças em `src/components/CFOVisionSection.tsx`

- Trocar `gradient-section-blue` por fundo claro `bg-surface` com tint sutil (`--surface-tint`) em uma faixa decorativa.
- Remover o radial azul de baixa opacidade; substituir por um detalhe geométrico discreto (linha divisora `divider-primary` + um bloco sutil de `--surface-tint` ao fundo do lado direito).
- Label pill: usar `.label-pill` padrão (azul sobre azul claro) em vez do estilo dark customizado.
- Headline (`h2`): cor `text-headline`, mesma tipografia/tracking.
- Parágrafo: `text-body`.
- CTA "Quero leitura gerencial assim": botão sólido `bg-primary text-primary-foreground` com `shadow-blue`, hover sutil — alinhado aos outros CTAs primários da página.
- Cards dos 4 pilares (Caixa, Margem, Compromissos, Ritmo operacional):
  - Fundo `bg-surface` com `border-divider`, `shadow-card`, `card-hover`.
  - Ícone em container `icon-md icon-bg` com `text-primary`.
  - Título `text-headline`, texto `text-body`.
- Manter grid `lg:grid-cols-5` (2 + 3), mesmas reveals e delays.

## Não muda
- Conteúdo textual e ordem dos pilares.
- Estrutura/posição da seção em `Index.tsx`.
- `index.css`: a classe `.gradient-section-blue` permanece (pode ser usada em outro lugar no futuro), apenas deixa de ser aplicada aqui.

## Resultado
Seção coerente com o restante da landing (off-white + navy), com hierarquia tipográfica forte, CTA primário consistente e cards limpos no padrão das demais seções claras.
