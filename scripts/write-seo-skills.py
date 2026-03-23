"""Script to write all SEO skill reference files."""
import os

BASE = os.path.expanduser(r"~\.copilot\skills\agent-seo")

files = {}

# =============================================================================
# seo-content.md
# =============================================================================
files["seo-content.md"] = r"""# SEO — Content Optimization

Procedimentos para otimização de conteúdo e meta tags em aplicações React SPA.

## Meta Tags Dinâmicas

### Problema em SPAs

Em SPAs puras (como Vite + React Router), o `index.html` contém meta tags estáticas. Páginas dinâmicas (ex: `/acomodacoes/:slug`) não atualizam `<title>`, `<meta description>`, ou Open Graph tags.

### Solução: react-helmet-async

```bash
npm install react-helmet-async
```

**Setup no main.tsx:**
```tsx
import { HelmetProvider } from 'react-helmet-async';

<HelmetProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</HelmetProvider>
```

**Uso em páginas:**
```tsx
import { Helmet } from 'react-helmet-async';

function RoomDetailPage() {
  const room = getRoomBySlug(slug);

  return (
    <>
      <Helmet>
        <title>{room.name} | Art Green Teresópolis</title>
        <meta name="description" content={room.shortDescription} />
        <meta property="og:title" content={room.name} />
        <meta property="og:description" content={room.shortDescription} />
        <meta property="og:image" content={room.images[0]} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <link rel="canonical" href={`https://artgreenteresopolis.com.br/acomodacoes/${room.slug}`} />
      </Helmet>
      {/* page content */}
    </>
  );
}
```

### Componente SEO Reutilizável

Criar um componente centralizado para evitar duplicação:

```tsx
// src/components/SEO.tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

const SITE_NAME = 'Art Green Teresópolis';
const BASE_URL = 'https://artgreenteresopolis.com.br';
const DEFAULT_IMAGE = '/og-image.jpg';

export function SEO({ title, description, image, url, type = 'website' }: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;
  const ogImage = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
}
```

## Hierarquia de Headings

### Regras

- Cada página deve ter exatamente **um `<h1>`**
- A hierarquia deve ser sequencial: `h1 → h2 → h3` (nunca pular níveis)
- O `<h1>` deve conter a keyword principal da página
- Headings em componentes de seção devem usar `h2` ou inferior

### Auditoria

Buscar no código por padrões incorretos:
- Múltiplos `<h1>` na mesma página
- `<h3>` sem `<h2>` pai
- Headings usados apenas para estilização (use classes CSS)

## HTML Semântico

### Elementos obrigatórios

| Elemento | Uso |
|----------|-----|
| `<main>` | Conteúdo principal da página (um por página) |
| `<nav>` | Navegação principal e breadcrumbs |
| `<article>` | Conteúdo independente (quarto, pacote, experiência) |
| `<section>` | Seções temáticas com heading |
| `<aside>` | Conteúdo secundário (booking widget, sidebar) |
| `<header>` | Cabeçalho global ou de seção |
| `<footer>` | Rodapé global ou de seção |
| `<figure>` + `<figcaption>` | Imagens com legenda |

### Exemplo — Página de acomodação

```tsx
<main>
  <article itemScope itemType="https://schema.org/LodgingBusiness">
    <header>
      <h1>{room.name}</h1>
      <p>{room.shortDescription}</p>
    </header>

    <section aria-label="Galeria de fotos">
      <figure>
        <img src={room.images[0]} alt={`${room.name} - vista principal`} />
        <figcaption>{room.name} — Art Green Teresópolis</figcaption>
      </figure>
    </section>

    <section aria-label="Detalhes">
      <h2>Sobre a acomodação</h2>
      <p>{room.description}</p>
    </section>

    <aside aria-label="Reserva">
      <BookingWidget />
    </aside>
  </article>
</main>
```

## Estratégia de Keywords

### Por tipo de página

| Página | Keyword Principal | Keywords Secundárias |
|--------|-------------------|----------------------|
| Home | pousada teresópolis | hotel teresópolis, hospedagem serra rj |
| Acomodações | chalé teresópolis | cabana montanha, loft árvore |
| Experiências | experiências teresópolis | turismo teresópolis, passeios serra rj |
| Gastronomia | restaurante teresópolis | gastronomia serra, café colonial |
| Pacotes | pacote pousada teresópolis | promoção hospedagem, pacote romântico |
| Contato | contato pousada teresópolis | reserva hospedagem, como chegar |

### Boas práticas

- Title tag: 50-60 caracteres, keyword no início
- Meta description: 150-160 caracteres, com call-to-action
- URL slug: curto, descritivo, com hífens (já implementado via React Router)
- Conteúdo: mínimo 300 palavras por página principal
- Palavras-chave naturais no texto, sem keyword stuffing

## Breadcrumbs

Implementar breadcrumbs para navegação e rich snippets:

```tsx
// src/components/Breadcrumbs.tsx
import { Link, useLocation } from 'react-router-dom';

const LABELS: Record<string, string> = {
  acomodacoes: 'Acomodações',
  experiencias: 'Experiências',
  gastronomia: 'Gastronomia',
  contato: 'Contato',
  pacotes: 'Pacotes',
};

export function Breadcrumbs({ currentLabel }: { currentLabel?: string }) {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);

  const items = [
    { name: 'Início', url: '/' },
    ...segments.map((seg, i) => ({
      name: i === segments.length - 1 && currentLabel
        ? currentLabel
        : LABELS[seg] || seg,
      url: '/' + segments.slice(0, i + 1).join('/'),
    })),
  ];

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm text-gray-500">
        {items.map((item, i) => (
          <li key={item.url} className="flex items-center gap-2">
            {i > 0 && <span>/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page">{item.name}</span>
            ) : (
              <Link to={item.url}>{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

## Checklist de Content SEO

- [ ] Cada página tem `<title>` único e descritivo
- [ ] Cada página tem `<meta description>` única (150-160 chars)
- [ ] Open Graph tags em todas as páginas
- [ ] Twitter Cards configurados
- [ ] URL canônica (`<link rel="canonical">`) em cada página
- [ ] Exatamente um `<h1>` por página
- [ ] Hierarquia de headings sequencial
- [ ] HTML semântico (`main`, `article`, `section`, `nav`)
- [ ] Breadcrumbs com marcação estruturada
- [ ] Textos com keywords naturais e mínimo 300 palavras
- [ ] Links internos entre páginas relacionadas
"""

# =============================================================================
# seo-geo.md
# =============================================================================
files["seo-geo.md"] = r"""# SEO — Local & Geo Targeting

Procedimentos para SEO local e geo-targeting para negócios de hospedagem em Teresópolis, RJ.

## Google Business Profile

### Dados essenciais para consistência NAP

**NAP = Name, Address, Phone** — deve ser idêntico em TODOS os canais:

```
Nome: Art Green Teresópolis
Endereço: [endereço completo], Teresópolis - RJ, [CEP]
Telefone: [número com DDD]
Site: https://artgreenteresopolis.com.br
```

### Categorias recomendadas no Google Business

- Categoria principal: **Pousada**
- Secundárias: Hotel, Casa de campo, Alojamento turístico

### Atributos relevantes

- Estacionamento gratuito
- Wi-Fi gratuito
- Adequado para crianças
- Restaurante no local
- Aceita animais (se aplicável)
- Piscina / Hidromassagem

## Schema.org — LocalBusiness + LodgingBusiness

### Schema principal no index.html ou componente global

```json
{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Art Green Teresópolis",
  "description": "Pousada em Teresópolis com chalés, lofts na árvore e experiências na natureza na Serra do Rio de Janeiro.",
  "url": "https://artgreenteresopolis.com.br",
  "telephone": "+55-21-XXXX-XXXX",
  "email": "contato@artgreenteresopolis.com.br",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Endereço]",
    "addressLocality": "Teresópolis",
    "addressRegion": "RJ",
    "postalCode": "[CEP]",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[latitude]",
    "longitude": "[longitude]"
  },
  "image": "https://artgreenteresopolis.com.br/og-image.jpg",
  "priceRange": "$$$",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4.8"
  },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Wi-Fi", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Estacionamento", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Restaurante", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Piscina", "value": true }
  ],
  "checkinTime": "14:00",
  "checkoutTime": "12:00"
}
```

## Geo Meta Tags

Adicionar ao `<head>` do `index.html` ou via react-helmet-async:

```html
<meta name="geo.region" content="BR-RJ" />
<meta name="geo.placename" content="Teresópolis" />
<meta name="geo.position" content="[latitude];[longitude]" />
<meta name="ICBM" content="[latitude], [longitude]" />
```

## Conteúdo Geo-Otimizado

### Páginas com sinais locais

Cada página deve incluir sinais de localização natural no conteúdo:

| Página | Sinais obrigatórios |
|--------|---------------------|
| Home | "Teresópolis", "Serra do Rio de Janeiro", "região serrana" |
| Acomodações | "chalé em Teresópolis", "hospedagem na serra" |
| Experiências | "passeios em Teresópolis", "trilhas na serra" |
| Gastronomia | "restaurante em Teresópolis", "gastronomia serrana" |
| Contato | Endereço completo, mapa, instruções de como chegar |

### Landing page para "como chegar"

Considerar criar conteúdo com:
- Rotas de acesso (Rio, São Paulo, Niterói)
- Distâncias e tempo de viagem
- Transporte público disponível
- Pontos de referência próximos
- Embed do Google Maps

## Reviews e Avaliações

### Schema AggregateRating

```json
{
  "@type": "LodgingBusiness",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "reviewCount": "150",
    "ratingCount": "150"
  }
}
```

### Schema Review individual

```json
{
  "@type": "Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Nome do Hóspede"
  },
  "reviewBody": "Texto do depoimento...",
  "datePublished": "2025-12-01"
}
```

> **Atenção**: Use apenas avaliações reais e verificáveis. Nunca fabricar reviews.

## Citações Locais (NAP Consistency)

Garantir consistência NAP nos seguintes diretórios:

- Google Business Profile
- TripAdvisor
- Booking.com
- Airbnb (se aplicável)
- Facebook Business
- Instagram Business
- Yelp / Apontador
- Guias turísticos regionais

## Hreflang (se multilíngue)

Se o site tiver versão em outros idiomas futuramente:

```html
<link rel="alternate" hreflang="pt-BR" href="https://artgreenteresopolis.com.br/" />
<link rel="alternate" hreflang="en" href="https://artgreenteresopolis.com.br/en/" />
<link rel="alternate" hreflang="es" href="https://artgreenteresopolis.com.br/es/" />
<link rel="alternate" hreflang="x-default" href="https://artgreenteresopolis.com.br/" />
```

## Checklist de Geo SEO

- [ ] Schema `LodgingBusiness` com endereço, geo e amenities
- [ ] Geo meta tags no `<head>`
- [ ] NAP consistente em todos os canais
- [ ] Google Business Profile otimizado e verificado
- [ ] Avaliações reais com schema `AggregateRating`
- [ ] Sinais de localização natural no conteúdo de cada página
- [ ] Mapa embutido na página de contato
- [ ] Conteúdo "como chegar" com rotas e distâncias
- [ ] Fotos geotaggeadas no Google Business
- [ ] Citações em diretórios locais e turísticos
"""

# =============================================================================
# seo-performance.md
# =============================================================================
files["seo-performance.md"] = r"""# SEO — Performance Optimization

Procedimentos para otimização de performance que impactam diretamente o ranking de SEO (Core Web Vitals).

## Core Web Vitals

O Google usa três métricas principais:

| Métrica | O que mede | Meta |
|---------|------------|------|
| **LCP** (Largest Contentful Paint) | Tempo de carregamento do maior elemento visível | < 2.5s |
| **INP** (Interaction to Next Paint) | Responsividade a interações do usuário | < 200ms |
| **CLS** (Cumulative Layout Shift) | Estabilidade visual (elementos que "pulam") | < 0.1 |

## LCP — Otimização

### Problemas comuns em SPA React/Vite

1. **JavaScript blocking**: Bundle JS grande bloqueia renderização
2. **Imagens hero sem preload**: A imagem principal do hero carrega tarde
3. **Fontes custom bloqueando render**: FOUT/FOIT

### Soluções

**Preload da imagem hero no index.html:**
```html
<link rel="preload" as="image" href="/hero-image.webp" type="image/webp" />
```

**Preload de fontes críticas:**
```html
<link rel="preload" as="font" href="/fonts/Montserrat/Montserrat-Bold.woff2" type="font/woff2" crossorigin />
<link rel="preload" as="font" href="/fonts/luxerie/luxerie.woff2" type="font/woff2" crossorigin />
```

**Font-display swap (evitar FOIT):**
```css
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/Montserrat/Montserrat-Bold.woff2') format('woff2');
  font-display: swap;
}
```

**Code splitting com React.lazy:**
```tsx
import { lazy, Suspense } from 'react';

const AccommodationsPage = lazy(() => import('./pages/AccommodationsPage'));
const RoomDetailPage = lazy(() => import('./pages/RoomDetailPage'));

// No router
<Route path="/acomodacoes" element={
  <Suspense fallback={<PageSkeleton />}>
    <AccommodationsPage />
  </Suspense>
} />
```

## CLS — Estabilidade Visual

### Problemas comuns

1. Imagens sem dimensões definidas
2. Fontes custom que mudam layout
3. Conteúdo dinâmico inserido acima do viewport
4. Ads/embeds sem espaço reservado

### Soluções

**Sempre definir aspect-ratio ou dimensões em imagens:**
```tsx
<img
  src={room.image}
  alt={room.name}
  width={800}
  height={600}
  className="aspect-[4/3] object-cover"
  loading="lazy"
/>
```

**Reservar espaço para componentes assíncronos:**
```tsx
<div className="min-h-[400px]">
  <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
    <LazyComponent />
  </Suspense>
</div>
```

**Placeholder para imagens (skeleton):**
```tsx
function ImageWithPlaceholder({ src, alt, className }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-gray-200" />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
```

## INP — Responsividade

### Soluções

- Evitar handlers pesados em `onClick` / `onChange`
- Usar `useTransition` para updates não-urgentes
- Debounce em inputs de busca/filtro
- Virtualizar listas longas (react-window)

```tsx
import { useTransition } from 'react';

function FilterableList() {
  const [isPending, startTransition] = useTransition();

  const handleFilter = (value: string) => {
    startTransition(() => {
      setFilteredItems(filterItems(value));
    });
  };
}
```

## Vite — Build Optimization

### Configurações recomendadas no vite.config.ts

```ts
export default defineConfig({
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
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
});
```

### Análise do bundle

```bash
npx vite-bundle-visualizer
```

## Resource Hints

Adicionar ao `index.html`:

```html
<!-- DNS prefetch para recursos externos -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://www.google-analytics.com" />

<!-- Preconnect para recursos críticos -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

## Service Worker (Caching)

Para SPAs, um service worker básico melhora loads subsequentes:

```ts
// vite.config.ts — usar vite-plugin-pwa
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/artgreenteresopolis\.com\.br\/acomodacoes\//,
            handler: 'StaleWhileRevalidate',
          },
        ],
      },
    }),
  ],
});
```

## Auditoria com Lighthouse

### Via CLI

```bash
npx lighthouse https://artgreenteresopolis.com.br --output=json --output-path=./lighthouse-report.json
```

### Métricas-alvo

| Categoria | Meta |
|-----------|------|
| Performance | > 90 |
| Accessibility | > 90 |
| Best Practices | > 90 |
| SEO | > 95 |

## Checklist de Performance SEO

- [ ] LCP < 2.5s (imagem hero preloaded, JS code-split)
- [ ] CLS < 0.1 (imagens com dimensões, fontes com font-display: swap)
- [ ] INP < 200ms (handlers otimizados, transitions)
- [ ] Bundle JS dividido em chunks (vendor, router, ui)
- [ ] Imagens em WebP com lazy loading
- [ ] Fontes com preload e font-display: swap
- [ ] CSS code-split habilitado
- [ ] Console.log removido em produção
- [ ] Resource hints (preconnect, dns-prefetch)
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse SEO > 95
"""

# =============================================================================
# seo-schema.md
# =============================================================================
files["seo-schema.md"] = r"""# SEO — Schema.org / Structured Data

Procedimentos para implementação de dados estruturados (JSON-LD) seguindo as especificações do schema.org.

## Fundamentos

### Por que JSON-LD?

- Formato recomendado pelo Google
- Não interfere no HTML/layout
- Fácil de manter em componentes React
- Habilita rich snippets nos resultados de busca

### Onde inserir

Em React, usar um componente dedicado:

```tsx
// src/components/JsonLd.tsx
interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

> **Segurança**: Os dados devem vir de fontes confiáveis (constantes no código, não input de usuário). `dangerouslySetInnerHTML` é seguro aqui pois `JSON.stringify` serializa os dados sem executar HTML/scripts.

## Schemas Obrigatórios

### 1. Organization

Colocar em um componente global (App.tsx ou layout):

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Art Green Teresópolis",
  "url": "https://artgreenteresopolis.com.br",
  "logo": "https://artgreenteresopolis.com.br/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-21-XXXX-XXXX",
    "contactType": "reservations",
    "availableLanguage": ["Portuguese"]
  },
  "sameAs": [
    "https://www.instagram.com/artgreenteresopolis",
    "https://www.facebook.com/artgreenteresopolis",
    "https://www.tripadvisor.com.br/artgreenteresopolis"
  ]
}
```

### 2. LodgingBusiness (Global)

Ver [seo-geo.md](./seo-geo.md) para o schema completo com endereço e geo.

### 3. WebSite + SearchAction

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Art Green Teresópolis",
  "url": "https://artgreenteresopolis.com.br",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://artgreenteresopolis.com.br/acomodacoes?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### 4. BreadcrumbList

Para cada página com breadcrumbs:

```tsx
function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://artgreenteresopolis.com.br${item.url}`,
    })),
  };
}
```

## Schemas por Página

### Página de Acomodação (HotelRoom / LodgingBusiness)

```tsx
function getRoomSchema(room: Room) {
  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    "name": room.name,
    "description": room.description,
    "image": room.images.map(img => `https://artgreenteresopolis.com.br${img}`),
    "url": `https://artgreenteresopolis.com.br/acomodacoes/${room.slug}`,
    "occupancy": {
      "@type": "QuantitativeValue",
      "maxValue": room.maxGuests,
      "unitText": "hóspedes"
    },
    "amenityFeature": room.amenities.map(amenity => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity,
      "value": true
    })),
    "bed": {
      "@type": "BedDetails",
      "typeOfBed": room.bedType,
      "numberOfBeds": room.bedCount
    },
    "containedInPlace": {
      "@type": "LodgingBusiness",
      "name": "Art Green Teresópolis",
      "url": "https://artgreenteresopolis.com.br"
    }
  };
}
```

### Página de Pacotes (Offer)

```tsx
function getPackageSchema(pkg: Package) {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": pkg.name,
    "description": pkg.description,
    "url": `https://artgreenteresopolis.com.br/pacotes/${pkg.slug}`,
    "priceCurrency": "BRL",
    "price": pkg.price,
    "availability": "https://schema.org/InStock",
    "validFrom": pkg.validFrom,
    "validThrough": pkg.validThrough,
    "offeredBy": {
      "@type": "LodgingBusiness",
      "name": "Art Green Teresópolis"
    },
    "itemOffered": {
      "@type": "LodgingReservation",
      "checkinTime": "14:00",
      "checkoutTime": "12:00",
      "lodgingUnitDescription": pkg.roomType
    }
  };
}
```

### Página de Experiências (TouristAttraction)

```tsx
function getExperienceSchema(exp: Experience) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": exp.name,
    "description": exp.description,
    "image": `https://artgreenteresopolis.com.br${exp.image}`,
    "isAccessibleForFree": false,
    "touristType": ["Casais", "Famílias", "Aventureiros"],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "[latitude]",
      "longitude": "[longitude]"
    },
    "containedInPlace": {
      "@type": "LodgingBusiness",
      "name": "Art Green Teresópolis"
    }
  };
}
```

### Página de Gastronomia (Restaurant)

```tsx
function getGastronomySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Restaurante Art Green",
    "description": "Restaurante da pousada Art Green com gastronomia serrana e ingredientes locais.",
    "servesCuisine": ["Brasileira", "Regional", "Contemporânea"],
    "priceRange": "$$$",
    "menu": "https://artgreenteresopolis.com.br/gastronomia",
    "parentOrganization": {
      "@type": "LodgingBusiness",
      "name": "Art Green Teresópolis"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Teresópolis",
      "addressRegion": "RJ",
      "addressCountry": "BR"
    }
  };
}
```

### FAQ Schema

```tsx
function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
```

## Implementação em React

### Padrão por página

```tsx
import { JsonLd } from '@/components/JsonLd';
import { SEO } from '@/components/SEO';

function RoomDetailPage() {
  const room = getRoomBySlug(slug);

  return (
    <>
      <SEO
        title={room.name}
        description={room.shortDescription}
        image={room.images[0]}
        url={`/acomodacoes/${room.slug}`}
      />
      <JsonLd data={getRoomSchema(room)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Acomodações', url: '/acomodacoes' },
        { name: room.name, url: `/acomodacoes/${room.slug}` },
      ])} />

      {/* page content */}
    </>
  );
}
```

## Validação

### Ferramentas

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema Markup Validator**: https://validator.schema.org/
3. **Google Search Console**: Relatório de dados estruturados

## Erros Comuns

| Erro | Solução |
|------|---------|
| Schema com URLs relativas | Sempre usar URLs absolutas (`https://...`) |
| Tipos incorretos (string vs object) | Seguir a spec: `author` é `Person`, não `string` |
| Dados faltantes obrigatórios | Verificar required fields no schema.org |
| Múltiplos schemas conflitantes | Um tipo principal por página + breadcrumb + organization |
| Preços sem moeda | Sempre incluir `priceCurrency` |

## Checklist de Schema SEO

- [ ] Schema `Organization` global
- [ ] Schema `WebSite` com SearchAction
- [ ] Schema `LodgingBusiness` global (ver seo-geo.md)
- [ ] Schema `BreadcrumbList` em cada página interna
- [ ] Schema `HotelRoom` em cada página de acomodação
- [ ] Schema `Offer` em cada página de pacote
- [ ] Schema `TouristAttraction` nas experiências
- [ ] Schema `Restaurant` na página de gastronomia
- [ ] Schema `AggregateRating` com avaliações reais (ver seo-geo.md)
- [ ] Todas as URLs absolutas nos schemas
- [ ] Validação no Google Rich Results Test
- [ ] Componente `JsonLd` reutilizável implementado
"""

# =============================================================================
# seo-sitemap.md
# =============================================================================
files["seo-sitemap.md"] = r"""# SEO — Sitemap & Robots.txt

Procedimentos para geração de sitemap XML e configuração de robots.txt para SPAs React/Vite.

## Robots.txt

### Arquivo básico

Criar em `public/robots.txt` (Vite copia automaticamente para a raiz do build):

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /assets/

Sitemap: https://artgreenteresopolis.com.br/sitemap.xml
```

### Regras específicas

```
# Permitir todos os crawlers
User-agent: *
Allow: /

# Bloquear recursos internos
Disallow: /assets/
Disallow: /_next/

# Bloquear parâmetros de query desnecessários
Disallow: /*?ref=
Disallow: /*?utm_

# Google Images — permitir acesso a imagens
User-agent: Googlebot-Image
Allow: /acomodacoes/
Allow: /experiencias/
Allow: /servicos/

# Sitemap
Sitemap: https://artgreenteresopolis.com.br/sitemap.xml
```

## Sitemap XML

### Abordagem para SPA

Em SPAs puras (sem SSR), o sitemap deve ser gerado em **build time**, não em runtime. Opções:

1. **Script de build** (recomendado) — gera sitemap.xml durante `npm run build`
2. **Plugin Vite** — integra na pipeline de build
3. **Estático manual** — mantido manualmente (não escala)

### Opção 1: Script de Build

Criar `scripts/generate-sitemap.ts`:

```ts
import { writeFileSync } from 'fs';
import { rooms } from '../src/data/rooms';
import { packages } from '../src/data/packages';

const BASE_URL = 'https://artgreenteresopolis.com.br';

interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const staticPages: SitemapEntry[] = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/acomodacoes', changefreq: 'weekly', priority: 0.9 },
  { url: '/experiencias', changefreq: 'monthly', priority: 0.8 },
  { url: '/gastronomia', changefreq: 'monthly', priority: 0.7 },
  { url: '/pacotes', changefreq: 'weekly', priority: 0.8 },
  { url: '/contato', changefreq: 'yearly', priority: 0.5 },
];

const roomPages: SitemapEntry[] = rooms.map(room => ({
  url: `/acomodacoes/${room.slug}`,
  changefreq: 'monthly' as const,
  priority: 0.8,
}));

const packagePages: SitemapEntry[] = packages.map(pkg => ({
  url: `/pacotes/${pkg.slug}`,
  changefreq: 'weekly' as const,
  priority: 0.7,
}));

const allPages = [...staticPages, ...roomPages, ...packagePages];
const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${page.lastmod || today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

writeFileSync('public/sitemap.xml', sitemap, 'utf-8');
console.log(`Sitemap generated with ${allPages.length} URLs`);
```

**Adicionar ao package.json:**
```json
{
  "scripts": {
    "build": "npm run generate:sitemap && vite build",
    "generate:sitemap": "tsx scripts/generate-sitemap.ts"
  }
}
```

### Opção 2: Plugin Vite

```bash
npm install vite-plugin-sitemap -D
```

```ts
// vite.config.ts
import Sitemap from 'vite-plugin-sitemap';
import { rooms } from './src/data/rooms';
import { packages } from './src/data/packages';

const dynamicRoutes = [
  ...rooms.map(r => `/acomodacoes/${r.slug}`),
  ...packages.map(p => `/pacotes/${p.slug}`),
];

export default defineConfig({
  plugins: [
    Sitemap({
      hostname: 'https://artgreenteresopolis.com.br',
      dynamicRoutes,
      exclude: ['/404'],
      changefreq: 'weekly',
      priority: 0.8,
    }),
  ],
});
```

## Sitemap de Imagens

Para acomodações com muitas fotos, um sitemap de imagens ajuda o Google a indexar:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://artgreenteresopolis.com.br/acomodacoes/chale-alpina</loc>
    <image:image>
      <image:loc>https://artgreenteresopolis.com.br/acomodacoes/chale-alpina/foto1.webp</image:loc>
      <image:title>Chalé Alpina - Vista frontal</image:title>
      <image:caption>Chalé Alpina na pousada Art Green Teresópolis</image:caption>
    </image:image>
  </url>
</urlset>
```

## Google Search Console

### Submissão do sitemap

1. Acessar Google Search Console
2. Ir em "Sitemaps" no menu lateral
3. Inserir: `https://artgreenteresopolis.com.br/sitemap.xml`
4. Clicar "Enviar"

### Verificações após submissão

- Status: "Sucesso" sem erros
- Número de URLs descobertas = número esperado
- Verificar cobertura de indexação
- Monitorar erros de rastreamento

## SPA — Problemas de Crawling

### Problema

SPAs retornam um HTML vazio (`<div id="root"></div>`) para crawlers que não executam JavaScript. O Googlebot executa JS, mas:
- Crawling é mais lento
- Budget de crawl é limitado
- Outros buscadores (Bing, Yahoo) podem ter problemas

### Soluções progressivas (sem SSR)

1. **Prerender** (recomendado): Pré-renderizar páginas estáticas no build time

```bash
npm install vite-plugin-prerender -D
```

```ts
// vite.config.ts
import prerender from 'vite-plugin-prerender';

export default defineConfig({
  plugins: [
    prerender({
      routes: [
        '/',
        '/acomodacoes',
        '/experiencias',
        '/gastronomia',
        '/pacotes',
        '/contato',
      ],
    }),
  ],
});
```

2. **Dynamic rendering**: Servir HTML pré-renderizado para bots, SPA para usuários (via middleware no servidor)

3. **SSG/SSR migration**: Migrar para Next.js ou Remix (mudança estrutural grande)

## Checklist de Sitemap/Crawl

- [ ] `robots.txt` criado em `public/`
- [ ] `robots.txt` referencia o sitemap
- [ ] Sitemap XML gerado no build com todas as páginas
- [ ] Sitemap inclui páginas estáticas e dinâmicas
- [ ] Sitemap submetido no Google Search Console
- [ ] Prioridade e changefreq corretos por tipo de página
- [ ] Sitemap de imagens para acomodações (opcional)
- [ ] Prerender configurado para páginas críticas
- [ ] Hash fragments (`#`) não usados para navegação
- [ ] URLs limpas sem parâmetros desnecessários
"""

# =============================================================================
# seo-technical.md
# =============================================================================
files["seo-technical.md"] = r"""# SEO — Technical

Procedimentos para SEO técnico: crawlability, indexability, canonical URLs, redirects, e configurações de servidor.

## Canonical URLs

### Por que são necessárias

- Evitam conteúdo duplicado (ex: `/acomodacoes/chale` vs `/acomodacoes/chale/` vs `/acomodacoes/chale?ref=home`)
- Indicam a versão "oficial" de cada URL para o Google

### Implementação consistente

Usar o componente `SEO` (ver [seo-content.md](./seo-content.md)) que inclui `<link rel="canonical">` automaticamente.

**Regras:**
- Canonical deve ser a URL limpa, sem query parameters
- Sempre usar HTTPS
- Sem trailing slash (ou sempre com — ser consistente)
- Mesma URL do sitemap

```tsx
// Canonical sempre limpa
<link rel="canonical" href="https://artgreenteresopolis.com.br/acomodacoes/chale-alpina" />
```

## Trailing Slash Consistency

Definir uma política e aplicar globalmente. Recomendação: **sem trailing slash**.

### Redirect no servidor (Vercel, Netlify, etc.)

**Vercel (vercel.json):**
```json
{
  "trailingSlash": false
}
```

**Netlify (_redirects):**
```
/acomodacoes/  /acomodacoes  301
```

### React Router — Normalização

```tsx
// src/components/TrailingSlashRedirect.tsx
import { useLocation, Navigate } from 'react-router-dom';

export function TrailingSlashRedirect() {
  const { pathname, search, hash } = useLocation();

  if (pathname !== '/' && pathname.endsWith('/')) {
    return <Navigate to={pathname.slice(0, -1) + search + hash} replace />;
  }

  return null;
}
```

## Status Codes

### Configurar 404 correto

SPAs frequentemente retornam 200 para todas as URLs (incluindo inexistentes). Isso confunde crawlers.

**Solução: Página 404 com sinalização:**

```tsx
// src/pages/NotFoundPage.tsx
import { Helmet } from 'react-helmet-async';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Página não encontrada | Art Green Teresópolis</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <main className="flex min-h-screen items-center justify-center">
        <h1>404 — Página não encontrada</h1>
      </main>
    </>
  );
}
```

**No router:**
```tsx
<Route path="*" element={<NotFoundPage />} />
```

> **Nota**: Para enviar status 404 real (HTTP), é necessário configuração no servidor (Vercel, Netlify) ou prerender.

## Meta Robots

### Controle por página

```tsx
// Páginas que NÃO devem ser indexadas:
<meta name="robots" content="noindex, nofollow" />

// Páginas normais (default, não precisa declarar):
<meta name="robots" content="index, follow" />
```

### Quando usar noindex

| Página | noindex? | Motivo |
|--------|----------|--------|
| Home, Acomodações, Pacotes | Não | Páginas core |
| 404 | Sim | Sem valor para indexação |
| Resultados de busca interna | Sim | Conteúdo duplicado |
| Páginas de teste/staging | Sim | Não são produção |
| Páginas de agradecimento | Sim | Sem valor SEO |

## HTTPS

- Todo o site deve usar HTTPS
- Redirect HTTP para HTTPS no servidor
- Mixed content (HTTP resources em página HTTPS) deve ser eliminado

### Verificar mixed content

Buscar no código por `http://` e substituir por `https://` ou URLs relativas ao protocolo.

## URLs Amigáveis

### Regras

- Usar hífens (não underscores): `/chale-alpina` (bom) vs `/chale_alpina` (ruim)
- Lowercase: `/acomodacoes` (bom) vs `/Acomodacoes` (ruim)
- Curtas e descritivas
- Sem parâmetros quando possível
- Sem caracteres especiais (acentos já são encodados pelo browser)

### Slugs existentes

Verificar se os slugs em `src/data/rooms.ts` e `src/data/packages.ts` seguem as regras. Se houver slugs com acentos ou caracteres especiais, normalizar.

## Redirecionamentos

### Quando usar

- URL antiga foi mudada (301 permanent redirect)
- Variações de URL (trailing slash, www vs non-www)
- Páginas removidas que tinham backlinks

### Configuração (depende do hosting)

**Vercel (vercel.json):**
```json
{
  "redirects": [
    { "source": "/old-page", "destination": "/new-page", "permanent": true }
  ]
}
```

**Netlify (_redirects):**
```
/old-page  /new-page  301
```

## SPA Fallback

### Problema

SPAs precisam que o servidor redirecione todas as rotas para `index.html`. Sem isso, acessar `/acomodacoes` diretamente retorna 404.

### Configuração

**Vercel (vercel.json):**
```json
{
  "rewrites": [
    { "source": "/((?!api/).*)", "destination": "/index.html" }
  ]
}
```

**Netlify (_redirects):**
```
/*  /index.html  200
```

**Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Segurança HTTP Headers (impacto SEO)

### Headers recomendados

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: [já existe no index.html]
```

### HSTS (HTTP Strict Transport Security)

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

## Internacionalização (futuro)

Se o site precisar de versão em inglês/espanhol:

```html
<link rel="alternate" hreflang="pt-BR" href="https://artgreenteresopolis.com.br/" />
<link rel="alternate" hreflang="en" href="https://artgreenteresopolis.com.br/en/" />
<link rel="alternate" hreflang="x-default" href="https://artgreenteresopolis.com.br/" />
```

## Checklist de Technical SEO

- [ ] Canonical URLs em todas as páginas
- [ ] Trailing slash consistente (sem)
- [ ] Página 404 com `noindex`
- [ ] Rota catch-all `*` no React Router
- [ ] HTTPS em todas as URLs
- [ ] Sem mixed content (HTTP em página HTTPS)
- [ ] Slugs amigáveis (lowercase, hífens)
- [ ] SPA fallback configurado no servidor
- [ ] Redirects 301 para URLs antigas
- [ ] Headers de segurança configurados
- [ ] Meta robots correto por tipo de página
- [ ] Google Search Console configurado e monitorado
"""

# =============================================================================
# seo-visual.md
# =============================================================================
files["seo-visual.md"] = r"""# SEO — Visual & Image Optimization

Procedimentos para otimização de imagens e elementos visuais para SEO e performance.

## Formatos de Imagem

### Hierarquia de preferência

| Formato | Uso | Qualidade | Suporte |
|---------|-----|-----------|---------|
| **AVIF** | Melhor compressão, novo | Excelente | ~93% browsers |
| **WebP** | Ótimo equilíbrio | Muito boa | ~97% browsers |
| **JPEG** | Fallback universal | Boa | 100% browsers |
| **PNG** | Imagens com transparência | Sem perda | 100% browsers |
| **SVG** | Ícones, logos, ilustrações | Vetorial | 100% browsers |

### Conversão com Sharp (já instalado no projeto)

```ts
import sharp from 'sharp';

// Converter para WebP
await sharp('input.jpg')
  .webp({ quality: 80 })
  .resize(1200, 800, { fit: 'cover' })
  .toFile('output.webp');

// Converter para AVIF
await sharp('input.jpg')
  .avif({ quality: 65 })
  .resize(1200, 800, { fit: 'cover' })
  .toFile('output.avif');
```

### Script de otimização em batch

```ts
// scripts/optimize-images.ts
import sharp from 'sharp';
import { readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import { join, parse } from 'path';

const QUALITY = { webp: 80, avif: 65, jpeg: 85 };
const SIZES = {
  hero: { width: 1920, height: 1080 },
  card: { width: 800, height: 600 },
  thumb: { width: 400, height: 300 },
  og: { width: 1200, height: 630 },
};

async function optimizeImage(inputPath: string, outputDir: string) {
  const { name } = parse(inputPath);

  if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });

  for (const [sizeName, dims] of Object.entries(SIZES)) {
    await sharp(inputPath)
      .resize(dims.width, dims.height, { fit: 'cover' })
      .webp({ quality: QUALITY.webp })
      .toFile(join(outputDir, `${name}-${sizeName}.webp`));
  }
}
```

## Alt Text

### Regras obrigatórias

1. **Toda `<img>` deve ter `alt`** — nunca omitir
2. **Descritivo e específico**: descrever o que aparece na imagem
3. **Incluir keyword quando natural**: nome da acomodação, localização
4. **Decorativas**: usar `alt=""` (vazio, não omitir o atributo)
5. **Máximo 125 caracteres**: conciso mas informativo

### Exemplos

```tsx
// BOM — descritivo com keyword
<img src="/acomodacoes/chale-alpina.webp" alt="Chalé Alpina com varanda e vista para a montanha em Teresópolis" />

// BOM — específico por contexto
<img src="/experiencias/trilha.webp" alt="Trilha ecológica entre mata atlântica na pousada Art Green" />

// RUIM — genérico
<img src="/acomodacoes/chale-alpina.webp" alt="foto" />

// RUIM — keyword stuffing
<img src="/acomodacoes/chale-alpina.webp" alt="chalé teresópolis pousada hotel hospedagem serra montanha" />

// Decorativa (backgrounds, separadores)
<img src="/divider.svg" alt="" role="presentation" />
```

### Auditoria de alt text

Buscar no código por imagens sem alt:
- `<img` que não tem `alt=`
- `role="img"` sem `aria-label`
- `background-image` sem texto alternativo acessível

## Lazy Loading

### Estratégia

| Posição | Loading | Motivo |
|---------|---------|--------|
| Above the fold (hero, primeira imagem) | `eager` ou `preload` | Crítico para LCP |
| Below the fold (galeria, cards) | `lazy` | Economiza bandwidth |

### Implementação nativa

```tsx
// Imagem hero — NÃO usar lazy
<img
  src="/hero.webp"
  alt="Pousada Art Green vista aérea em Teresópolis"
  loading="eager"
  fetchPriority="high"
  width={1920}
  height={1080}
/>

// Cards e galeria — lazy
<img
  src={room.image}
  alt={room.altText}
  loading="lazy"
  decoding="async"
  width={800}
  height={600}
/>
```

### Intersection Observer (para componentes mais complexos)

```tsx
import { useRef, useState, useEffect } from 'react';

function LazyImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { rootMargin: '200px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={ref}
      src={isVisible ? src : undefined}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}
```

## Responsive Images

### Picture element com múltiplos formatos

```tsx
<picture>
  <source srcSet="/room-hero.avif" type="image/avif" />
  <source srcSet="/room-hero.webp" type="image/webp" />
  <img src="/room-hero.jpg" alt="Chalé Alpina" width={1200} height={800} />
</picture>
```

### Srcset para múltiplos tamanhos

```tsx
<img
  src="/room-card-800.webp"
  srcSet="
    /room-card-400.webp 400w,
    /room-card-800.webp 800w,
    /room-card-1200.webp 1200w
  "
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Chalé Alpina - Art Green Teresópolis"
  loading="lazy"
  decoding="async"
/>
```

## Open Graph Images

### Especificações

| Rede | Dimensão | Formato |
|------|----------|---------|
| Facebook / LinkedIn | 1200x630 | JPG, PNG, WebP |
| Twitter (summary_large_image) | 1200x628 | JPG, PNG, WebP |
| WhatsApp | 1200x630 | JPG, PNG |

### Gerar imagem OG por acomodação

Cada acomodação deve ter uma imagem OG dedicada (1200x630):

```ts
// scripts/generate-og-images.ts
import sharp from 'sharp';
import { rooms } from '../src/data/rooms';

for (const room of rooms) {
  const inputImage = `public${room.images[0]}`;
  const outputPath = `public/og/${room.slug}.jpg`;

  await sharp(inputImage)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 85 })
    .toFile(outputPath);
}
```

### Meta tags OG na página

```tsx
<meta property="og:image" content={`https://artgreenteresopolis.com.br/og/${room.slug}.jpg`} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content={`${room.name} - Art Green Teresópolis`} />
```

## Favicon & App Icons

### Conjunto completo

```html
<!-- index.html -->
<link rel="icon" href="/favicon.ico" sizes="48x48" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png" />
<link rel="manifest" href="/manifest.webmanifest" />
<meta name="theme-color" content="#2d5a27" />
```

### Gerar com Sharp

```ts
await sharp('logo.png').resize(180, 180).png().toFile('public/apple-touch-icon-180x180.png');
await sharp('logo.png').resize(32, 32).png().toFile('public/favicon-32x32.png');
```

## Video SEO

### VideoObject schema (para vídeos no site)

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Art Green Teresópolis — Experiência na natureza",
  "description": "Conheça a pousada Art Green em Teresópolis, chalés na árvore e experiências na mata atlântica.",
  "thumbnailUrl": "https://artgreenteresopolis.com.br/video-thumb.jpg",
  "uploadDate": "2025-01-01",
  "contentUrl": "https://artgreenteresopolis.com.br/video.mp4"
}
```

### Lazy loading de vídeos

Vídeos devem usar lazy loading para não impactar LCP — usar o componente `VideoLazy.tsx` existente no projeto.

## Nomes de Arquivo

### Regras para SEO de imagens

- Usar hífens: `chale-alpina-vista-montanha.webp` (bom)
- Descritivos: `pousada-teresopolis-piscina.webp` (bom)
- Não usar espaços: `CHALÉ ALPINA/foto1.jpg` (ruim — encode problems)
- Não usar caracteres especiais/acentos
- Lowercase

> **Atenção**: O projeto tem pastas com espaços e acentos em `public/acomodacoes/` (ex: "Casas - árvores", "CHALÉ ALPINA"). Considerar renomear para slugs amigáveis.

## Checklist de Visual SEO

- [ ] Todas as imagens em WebP (com fallback JPEG se necessário)
- [ ] Todas as `<img>` têm atributo `alt` descritivo
- [ ] Imagens decorativas com `alt=""`
- [ ] Imagem hero com `loading="eager"` e `fetchPriority="high"`
- [ ] Demais imagens com `loading="lazy"` e `decoding="async"`
- [ ] Dimensões (width/height) definidas em todas as imagens
- [ ] Responsive images com `srcSet` e `sizes`
- [ ] Imagens OG (1200x630) para cada página principal
- [ ] OG meta tags com `og:image:width`, `og:image:height`, `og:image:alt`
- [ ] Favicon completo (ico, svg, apple-touch-icon)
- [ ] Nomes de arquivo descritivos com hífens, sem espaços/acentos
- [ ] Vídeos com lazy loading e VideoObject schema
- [ ] Script de otimização de imagens automatizado no build
"""

# =============================================================================
# Write all files
# =============================================================================
for filename, content in files.items():
    filepath = os.path.join(BASE, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content.lstrip("\n"))
    print(f"Written: {filename} ({len(content)} chars)")

print("\nAll SEO skill files written successfully!")
