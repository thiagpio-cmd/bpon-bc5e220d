## Objetivo

Atualizar o SEO do site e trocar a imagem de compartilhamento (og:image / twitter:image) pelo logotipo atual da Fintex BPO.

## O que será feito

### 1. Trocar imagem de compartilhamento social

Hoje o `index.html` aponta `og:image` e `twitter:image` para uma URL antiga (logotipo "BPON" hospedado no storage do GPT Engineer).

- Copiar `src/assets/logo-fintex.png` para `public/og-image.png` (assets em `src/` não são servidos publicamente; precisam estar em `public/` para os crawlers do LinkedIn, WhatsApp, Facebook, etc. acessarem).
- Atualizar `og:image` e `twitter:image` no `index.html` para `https://fintexbpo.lovable.app/og-image.png`.
- Adicionar `og:image:alt` ("Fintex BPO — BPO Financeiro").

Observação: o logo atual tem proporção quadrada/horizontal. O ideal para preview social é 1200×630. Se quiser, em uma próxima iteração posso gerar uma imagem dedicada de compartilhamento (1200×630) com o logo sobre fundo navy da marca — para esta etapa, vou usar o logo direto conforme pedido.

### 2. Refinar SEO on-page

Ajustes no `<head>` do `index.html`:

- Encurtar o `<title>` (hoje tem 88 chars; ideal < 60): "Fintex BPO | BPO Financeiro com Leitura Gerencial".
- Alinhar `og:title` e `twitter:title` ao novo título.
- Manter `description` (já está em ~157 chars, dentro do limite).
- Adicionar `<meta name="theme-color">` com o navy da marca.
- Adicionar `<html lang="pt-BR">` favicon link explícito para o logo (já existe `lang`).

### 3. Enriquecer Schema.org (JSON-LD)

No bloco `ProfessionalService` existente:

- Adicionar `logo` apontando para `/og-image.png`.
- Adicionar `image` (mesma URL).
- Adicionar `address` (`PostalAddress` com cidade/UF — pegar do memory `institutional-data` se já houver, senão deixar apenas `addressCountry: BR`).
- Adicionar `sameAs` se houver perfis sociais conhecidos (caso contrário, omitir).

### 4. Rodar review de SEO

Após as alterações, disparar `seo_chat--trigger_scan` para revalidar e listar findings remanescentes no painel de SEO.

## Arquivos afetados

- `index.html` (editado)
- `public/og-image.png` (novo, cópia de `src/assets/logo-fintex.png`)

## Fora do escopo

- Geração de uma imagem social 1200×630 customizada (pode ser feita depois).
- Criação de `sitemap.xml` / `robots.txt` (não solicitado).
- Mudanças em rotas ou conteúdo das seções.
