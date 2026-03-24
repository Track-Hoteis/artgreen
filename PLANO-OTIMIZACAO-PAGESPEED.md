# Plano de Otimização — PageSpeed Insights

**Site:** www.artgreenpousada.com.br  
**Data da análise:** 24/03/2026  
**Ferramenta:** Lighthouse 13.0.1 (Moto G Power emulado, 4G lento)

---

## Resumo das Notas Atuais

| Categoria | Mobile | Meta |
|-----------|--------|------|
| **Desempenho** | 74 | 90+ |
| **Acessibilidade** | 91 | 100 |
| **Práticas Recomendadas** | 92 | 100 |
| **SEO** | 92 | 100 |

---

## 🔴 CRÍTICO — Domínio Incorreto no Código

> **Impacto: SEO, Práticas Recomendadas, Canonical URLs, Sitemap**

O site está publicado em `www.artgreenpousada.com.br`, mas o código-fonte usa `artgreenteresopolis.com.br` em:

| Arquivo | Problema |
|---------|----------|
| `src/components/SEO.tsx` | `BASE_URL = 'https://artgreenteresopolis.com.br'` |
| `public/sitemap.xml` | Todas as `<loc>` usam domínio antigo |
| `public/robots.txt` | Sitemap aponta para domínio antigo |

### Ação
- [ ] Atualizar `BASE_URL` em `SEO.tsx` para `https://www.artgreenpousada.com.br`
- [ ] Regenerar `sitemap.xml` com o domínio correto
- [ ] Atualizar `robots.txt` com a URL correta do sitemap

---

## 📊 ACESSIBILIDADE (91 → 100)

### A1. Contraste de cores insuficiente
**Elementos afetados:**
- Botão `RESERVAR` (classe `btn-reserve`) — fundo `#B99B48` (accent) com texto `#FFFFFF`
- Texto `relaxar` no `ImmersiveScrollSection` — branco sobre imagem sem overlay suficiente
- Texto `TERESÓPOLIS, RJ · SERRA FLUMINENSE` no hero — `text-white/75` sobre fundo `#374E38`
- Tag do hero: `text-[11px]` com `text-white/75` sobre `#374E38`

**Análise de contraste:**
| Combinação | Ratio atual | Ratio necessário (WCAG AA) |
|------------|-------------|---------------------------|
| `#B99B48` sobre `#374E38` | ~2.3:1 | 4.5:1 (texto normal) |
| `#FFFFFF` c/ 75% opacidade sobre `#374E38` | ~3.8:1 | 4.5:1 |

### Ação
- [ ] **btn-reserve**: Escurecer o fundo do botão para `#8B7535` ou clarear texto, ou adicionar borda para reforço visual. Alternativa: manter `#B99B48` mas garantir que o texto fique em `#1E1E1E` (escuro)
- [ ] **Hero tag**: Trocar `text-white/75` por `text-white/90` ou `text-white`
- [ ] **ImmersiveScrollSection**: Adicionar overlay escuro mais forte nas imagens de fundo para garantir contraste do texto sobreposto

**Métrica impactada:** Acessibilidade +3-5 pontos

---

### A2. Áreas de toque insuficientes (< 48×48px)
**Elementos afetados:** Todos os dots de carrossel em:
- `RoomsSection.tsx` (15 slides)
- `ExperiencesSection.tsx` (15 experiências)
- `PackagesSection.tsx`
- `TestimonialsSection.tsx`

**Problema:** Os dots usam `h-2.5 rounded-full` (10px) e `w-2.5` (10px), muito abaixo do mínimo de 48×48px para touch targets.

### Ação
- [ ] Manter o tamanho visual dos dots, mas adicionar padding/margin invisível para atingir 48px de área de toque:
```tsx
// Antes:
<button className="h-2.5 rounded-full ..." />

// Depois:
<button className="h-2.5 rounded-full ... p-3" />
// O padding de 12px (p-3) em cada lado = 10px + 24px = 34px; usar p-[19px] para atingir ~48px
// Alternativa melhor: usar min-h-[48px] min-w-[48px] com o dot visual centralizado
```
- [ ] Solução recomendada — usar wrapper com área de toque maior:
```tsx
<button
  className="relative flex items-center justify-center min-w-[44px] min-h-[44px]"
  aria-label={`Ir para slide ${index + 1}`}
>
  <span className={`h-2.5 rounded-full transition-all duration-300 ${
    isActive ? 'w-6 bg-primary' : 'w-2.5 bg-primary/30'
  }`} />
</button>
```

**Métrica impactada:** Acessibilidade +2-3 pontos

---

### A3. Hierarquia de headings quebrada
**Elemento:** `Footer.tsx` usa `<h4>` diretamente sem `<h2>` ou `<h3>` antecedentes na seção.

### Ação
- [ ] Trocar `<h4>` por `<h3>` no Footer para "Links Rápidos", "Contato" e "Galeria"
- [ ] Verificar que a hierarquia geral da HomePage segue h1 → h2 → h3 sem pular níveis

**Métrica impactada:** Acessibilidade +1 ponto

---

### A4. Vídeo sem legendas (captions)
**Elemento:** `<video>` do hero (`hero.mp4`) não possui `<track kind="captions">`.

### Ação
- [ ] Adicionar track de captions ao componente `VideoLazy.tsx`:
```tsx
<video ref={ref} {...props}>
  <track kind="captions" src="" label="Português" srcLang="pt-BR" default />
</video>
```
- [ ] Como o vídeo é puramente visual/ambiente (sem diálogo), criar um arquivo VTT mínimo ou adicionar `aria-label` descritivo ao vídeo

**Métrica impactada:** Acessibilidade +1 ponto (auditoria pode ser informativa)

---

### A5. Links idênticos com destinos diferentes
**Elementos:** Múltiplos links "SAIBA MAIS" apontando para URLs diferentes (`#acomodacoes` vs `reservas.artgreenpousada.com.br`).

### Ação
- [ ] Diferenciar o texto dos links:
  - `SAIBA MAIS` → `VER ACOMODAÇÕES` (para #acomodacoes)
  - `SAIBA MAIS` → `RESERVAR AGORA` (para links de reserva)
  - Ou adicionar `aria-label` descritivo único: `aria-label="Saiba mais sobre Day Use"`

**Métrica impactada:** Acessibilidade (informativo, mas melhora UX e A11y)

---

## 📊 SEO (92 → 100)

### S1. robots.txt inválido (site em produção)
**Problema:** O robots.txt do site em produção contém na linha 29:
```
Content-Signal: search=yes,ai-train=no
```
Esta diretiva não é reconhecida pelo padrão robots.txt.

### Ação
- [ ] Remover a linha `Content-Signal: search=yes,ai-train=no` do robots.txt em produção
- [ ] Se a intenção é bloquear treinamento de IA, usar as diretivas corretas:
```
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /
```
- [ ] Atualizar o domínio do Sitemap no robots.txt local:
```
Sitemap: https://www.artgreenpousada.com.br/sitemap.xml
```

**Métrica impactada:** SEO +4-8 pontos (erro eliminado = auditoria aprovada)

---

### S2. Domínio do Sitemap e Canonical URLs
Já coberto na seção CRÍTICA acima.

**Métrica impactada:** SEO +2-3 pontos

---

## 📊 PRÁTICAS RECOMENDADAS (92 → 100)

### P1. Erros no console do navegador
**Problemas identificados:**
1. `hero.mp4` — `net::ERR_CONNECTION_FAILED` (CDN b-cdn.net falhando)
2. CSP bloqueando `cloudflareinsights/beacon.min.js`

### Ação
- [ ] **CSP**: Atualizar a Content-Security-Policy no `index.html` para permitir o script do Cloudflare Insights:
```html
<!-- Antes -->
<meta http-equiv="Content-Security-Policy" content="...script-src 'self' 'unsafe-inline';..." />

<!-- Depois -->
<meta http-equiv="Content-Security-Policy" content="...script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com;..." />
```
- [ ] Adicionar também `connect-src` para o Cloudflare se necessário:
```
connect-src 'self' https://cloudflareinsights.com;
```

**Métrica impactada:** Práticas Recomendadas +4-8 pontos (elimina 2 auditorias falhadas)

---

### P2. Content Security Policy — Issues no DevTools
Mesma causa de P1. A CSP precisa incluir domínios de terceiros utilizados em produção.

---

### P3. Source Maps ausentes
**Problema:** O bundle principal `/assets/index-DMACjznO.js` não tem source map em produção.

### Ação
- [ ] No `vite.config.ts`, habilitar source maps para produção (opcional, informativo):
```ts
build: {
  sourcemap: 'hidden', // gera .map mas não expõe no bundle
}
```
**Nota:** Esta é uma auditoria informativa (fora da pontuação), mas contribui para a nota geral.

---

## 📊 DESEMPENHO (74 → 90+)

### D1. Imagens enormes e não responsivas (~3.646 KiB de economia)
**Este é o maior impactante da nota de desempenho.**

| Imagem | Tamanho | Economia | Problema |
|--------|---------|----------|----------|
| `IMG_4359.JPG.webp` | 843 KiB | 787 KiB | 2976×3352 → exibida 665×998 |
| `relaxar.webp` | 576 KiB | 497 KiB | 2237×4464 → exibida 960×1440 |
| `IMG_4357.JPG.webp` | 516 KiB | 461 KiB | 2642×2976 → exibida 1123×749 |
| `IMG_4358.JPG.webp` | 485 KiB | 453 KiB | 2976×3352 → exibida 665×998 |
| `sentir.webp` | 517 KiB | 445 KiB | 2237×4464 → exibida 960×1440 |
| `background.webp` | 420 KiB | 352 KiB | Compactação insuficiente |
| `desacelerar.webp` | 381 KiB | 329 KiB | 2237×4464 → exibida 960×1440 |
| `desconectar.webp` | 303 KiB | 261 KiB | 2237×4464 → exibida 960×1440 |
| `logo.webp` | 32 KiB | 31 KiB | 2084×655 → exibida 245×77 |
| `pinheiro.webp` | 31 KiB | 30 KiB | 1060×1545 → exibida 84×122 |

### Ação
- [ ] **Redimensionar imagens para resolução adequada** (2x do display para retina):
  - `relaxar.webp`, `sentir.webp`, `desacelerar.webp`, `desconectar.webp` → max 1920×2880
  - `IMG_4357.JPG.webp` → max 2246×1498
  - `IMG_4358.JPG.webp`, `IMG_4359.JPG.webp` → max 1330×1996
  - `logo.webp` → max 490×154
  - `pinheiro.webp` → max 168×244
  - `background.webp` → recomprimir com qualidade 60-70%
- [ ] **Usar `srcset` e `sizes`** nas imagens para servir tamanhos diferentes por viewport:
```tsx
<img
  src="/IMG_4357-800w.webp"
  srcSet="/IMG_4357-400w.webp 400w, /IMG_4357-800w.webp 800w, /IMG_4357-1200w.webp 1200w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1123px"
  alt="Ambiente da pousada"
  width={1123}
  height={749}
  loading="lazy"
/>
```
- [ ] **Adicionar `width` e `height` explícitos** em todas as `<img>` que não possuem (reduz CLS)
- [ ] **Script de otimização**: Atualizar `scripts/convert-to-webp.ts` para gerar múltiplos tamanhos

**Métrica impactada:** Desempenho +8-15 pontos (LCP significativamente melhor)

---

### D2. Preload de recursos críticos (LCP + FCP)
**Problema:** Nenhum `rel="preload"` no `index.html`. Fontes só carregam após CSS → após JS.

### Ação
- [ ] Adicionar no `<head>` do `index.html`:
```html
<!-- Preload fontes críticas -->
<link rel="preload" as="font" href="/fonts/luxerie/Luxerie%20Display.ttf" type="font/ttf" crossorigin />
<link rel="preload" as="font" href="/fonts/Montserrat/Montserrat-Regular.ttf" type="font/ttf" crossorigin />

<!-- Preconnect CDNs -->
<link rel="preconnect" href="https://greenland.b-cdn.net" crossorigin />
<link rel="preconnect" href="https://lirp.cdn-website.com" crossorigin />
<link rel="preconnect" href="https://irp.cdn-website.com" crossorigin />

<!-- DNS prefetch -->
<link rel="dns-prefetch" href="https://greenland.b-cdn.net" />
<link rel="dns-prefetch" href="https://lirp.cdn-website.com" />
<link rel="dns-prefetch" href="https://irp.cdn-website.com" />
```

**Ideal:** Converter fontes TTF para WOFF2 (redução de ~30-50% no tamanho).

**Métrica impactada:** Desempenho +3-5 pontos (FCP e LCP melhores)

---

### D3. Code Splitting com React.lazy
**Problema:** Todas as páginas são importadas estaticamente em `App.tsx`, gerando um bundle único de ~200KB.

### Ação
- [ ] Implementar lazy loading de rotas:
```tsx
import { lazy, Suspense } from 'react';

const AccommodationsPage = lazy(() => import('./pages/AccommodationsPage'));
const RoomDetailPage = lazy(() => import('./pages/RoomDetailPage'));
const ExperiencesPage = lazy(() => import('./pages/ExperiencesPage'));
const GastronomyPage = lazy(() => import('./pages/GastronomyPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PackagesPage = lazy(() => import('./pages/PackagesPage'));
const PackageDetailPage = lazy(() => import('./pages/PackageDetailPage'));
```
- [ ] Envolver rotas com `<Suspense>`:
```tsx
<Suspense fallback={<div className="min-h-screen" />}>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/acomodacoes" element={<AccommodationsPage />} />
    {/* ... */}
  </Routes>
</Suspense>
```

**Métrica impactada:** Desempenho +3-5 pontos (TBT e SI melhores)

---

### D4. Vite Build Optimization
**Problema:** `vite.config.ts` não tem nenhuma otimização de build.

### Ação
- [ ] Configurar `manualChunks` e otimizações:
```ts
export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-select'],
        },
      },
    },
    cssCodeSplit: true,
  },
});
```

**Métrica impactada:** Desempenho +2-3 pontos (reduza JS não utilizado)

---

### D5. Render-blocking CSS
**Problema:** O CSS principal (`index-Cahcj8jy.css`, 11.2 KiB) bloqueia a renderização por 160ms.

### Ação
- [ ] O CSS já é pequeno (11KB). A principal melhoria é usar `cssCodeSplit: true` no Vite (D4)
- [ ] Inline critical CSS: Considerar `vite-plugin-critical` para extrair e inlinar CSS acima da dobra

**Métrica impactada:** Desempenho +1-2 pontos

---

### D6. Fontes — Converter TTF para WOFF2
**Problema:** As fontes usam formato TTF (sem compressão).

| Fonte | Formato atual | Tamanho estimado |
|-------|--------------|-----------------|
| Luxerie Display | TTF | ~40 KiB |
| Montserrat-Regular | TTF | 133 KiB |
| High Spirited | TTF | ~30 KiB |

### Ação
- [ ] Converter todas as fontes para WOFF2:
```bash
npx fonttools pyftsubset "Montserrat-Regular.ttf" --output-file="Montserrat-Regular.woff2" --flavor=woff2 --layout-features='*'
```
- [ ] Atualizar `@font-face` no `index.css`:
```css
@font-face {
  font-family: "Montserrat";
  src: url("/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"),
       url("/fonts/Montserrat/Montserrat-Regular.ttf") format("truetype");
  font-display: swap;
}
```
- [ ] Atualizar CSP para permitir fontes WOFF2

**Métrica impactada:** Desempenho +2-3 pontos (redução de ~50% no tamanho das fontes, LCP melhor)

---

### D7. ImmersiveScrollSection — Carregamento de imagens
**Problema:** 4 imagens grandes (relaxar, sentir, desacelerar, desconectar) são pré-carregadas via `new Image()` no `useEffect`, mesmo que apenas 1 seja visível por vez.

### Ação
- [ ] Carregar apenas a primeira imagem eagerly, lazy-load as demais conforme scroll
- [ ] Implementar `srcset` com tamanhos responsivos
- [ ] Considerar usar `<picture>` com breakpoints de tamanho

---

## 📋 ORDEM DE PRIORIDADE DE IMPLEMENTAÇÃO

| # | Ação | Impacto | Complexidade | Categorias |
|---|------|---------|-------------|------------|
| 1 | Corrigir domínio (SEO.tsx, sitemap, robots) | 🔴 Crítico | Fácil | SEO |
| 2 | Corrigir robots.txt (remover Content-Signal) | 🔴 Alto | Fácil | SEO |
| 3 | Atualizar CSP para Cloudflare Insights | 🟡 Alto | Fácil | Práticas |
| 4 | Aumentar touch targets dos dots | 🟡 Alto | Fácil | A11y |
| 5 | Corrigir contraste de cores | 🟡 Alto | Médio | A11y |
| 6 | Corrigir hierarquia headings (Footer) | 🟢 Médio | Fácil | A11y |
| 7 | Adicionar preload/preconnect no index.html | 🟡 Alto | Fácil | Perf |
| 8 | Code splitting (React.lazy) | 🟡 Alto | Médio | Perf |
| 9 | Vite build optimization (manualChunks) | 🟡 Médio | Médio | Perf |
| 10 | Redimensionar e otimizar imagens | 🔴 Crítico | Alto | Perf |
| 11 | Converter fontes TTF → WOFF2 | 🟡 Médio | Médio | Perf |
| 12 | Adicionar width/height em imgs | 🟢 Médio | Fácil | Perf/A11y |
| 13 | Implementar srcset responsivo | 🟡 Alto | Alto | Perf |
| 14 | Track de captions no vídeo | 🟢 Baixo | Fácil | A11y |
| 15 | Diferenciar texto de links idênticos | 🟢 Baixo | Fácil | A11y |

---

## 🎯 ESTIMATIVA DE IMPACTO APÓS OTIMIZAÇÕES

| Categoria | Atual | Estimado após | Ganho |
|-----------|-------|---------------|-------|
| **Desempenho** | 74 | 88-95 | +14-21 |
| **Acessibilidade** | 91 | 98-100 | +7-9 |
| **Práticas Recomendadas** | 92 | 97-100 | +5-8 |
| **SEO** | 92 | 100 | +8 |

---

## ⚠️ NOTAS IMPORTANTES

1. **Domínio**: A discrepância entre `artgreenteresopolis.com.br` (código) e `www.artgreenpousada.com.br` (produção) é o problema mais grave de SEO. Corrigir IMEDIATAMENTE.

2. **Imagens**: O maior ganho de performance virá do redimensionamento de imagens. As 10 imagens identificadas somam ~3.6 MB de economia potencial.

3. **CDN do vídeo**: O erro `net::ERR_CONNECTION_FAILED` para `greenland.b-cdn.net/hero.mp4` sugere instabilidade no CDN. Considerar:
   - Hospedagem alternativa (Cloudflare R2, AWS S3 + CloudFront)
   - Video poster image como fallback
   - Não bloquear o LCP enquanto o vídeo carrega

4. **CSP em produção**: A CSP pode estar configurada tanto no `index.html` quanto no servidor (Cloudflare). Verificar se há headers HTTP de CSP que sobrescrevem a meta tag.

---

*Plano gerado com base na análise do PageSpeed Insights de 24/03/2026. Pronto para revisão e aprovação.*
