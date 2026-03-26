

## Configuração de Domínio Personalizado no Lovable

Sim, o fluxo está correto. O Lovable hospeda o site e você só precisa apontar o DNS. Não há necessidade de GitHub Actions, `npm ci`, ou build externo.

### Passos

1. **Publicar o projeto** — Clique em "Publish" no canto superior direito do editor.

2. **Conectar o domínio** — Vá em **Settings → Domains → Connect Domain** e digite seu domínio (ex: `bpon.com.br`).

3. **Configurar DNS na KingHost** — O Lovable vai pedir que você adicione estes registros:
   - **A** → Nome: `@` → Valor: `185.158.133.1`
   - **A** → Nome: `www` → Valor: `185.158.133.1`
   - **TXT** → Nome: `_lovable` → Valor: será fornecido pelo Lovable (para verificação)

4. **Aguardar propagação** — Entre 15 min e 72h. O SSL é provisionado automaticamente.

5. **Adicionar `www` também** — Lembre-se de adicionar tanto `bpon.com.br` quanto `www.bpon.com.br` no Lovable e escolher um como primário.

### Sobre o GitHub Actions

O arquivo `.github/workflows/lovable-deploy.yml` que existe no projeto é desnecessário para esse fluxo e é a causa do erro de `npm ci`. Ele pode ser removido com segurança.

### Nota

Não é necessária nenhuma alteração de código. Basta configurar o domínio via interface do Lovable e ajustar o DNS na KingHost.

