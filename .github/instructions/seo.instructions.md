---
description: "SEO and accessibility rules for React TSX components. Use when: editing JSX/TSX files, creating components with images, headings, links, forms, buttons, videos, or page-level components. Enforces alt text, heading hierarchy, semantic HTML, canonical URLs, Open Graph compliance, form accessibility, touch targets, color contrast, and video captions."
applyTo: "**/*.tsx"
---

# SEO & Accessibility Rules for TSX Components

## Images

- Every `<img>` MUST have a descriptive `alt` attribute (never omit, never use generic text like "foto" or "image")
- Decorative images: use `alt=""` with `role="presentation"`
- Include `loading="lazy"` and `decoding="async"` for below-the-fold images
- Include `width` and `height` attributes or `aspect-ratio` via CSS to prevent CLS
- Hero/above-the-fold images: use `loading="eager"` and `fetchPriority="high"` (camelCase in React)
- Serve images at display dimensions — never serve larger than rendered size

## Headings

- Each page MUST have exactly one `<h1>`
- Heading hierarchy must be sequential: `h1 → h2 → h3` (never skip levels)
- Section components (used inside pages) should use `<h2>` or lower, never `<h1>`
- Never use heading tags for styling — use CSS classes instead

## Semantic HTML

- Use `<main>` for the primary content area (one per page)
- Use `<nav>` for navigation elements
- Use `<article>` for self-contained content (room, package, experience)
- Use `<section>` with `aria-label` for thematic groupings
- Use `<aside>` for secondary content (booking widget, sidebar)
- Use `<figure>` + `<figcaption>` for images with captions

## Forms & Interactive Elements

- Every `<select>`, `<input>`, `<textarea>` MUST have a `<label>` with `htmlFor` matching the element's `id` — never use `<span>` as a label
- Visually hidden labels: use `sr-only` class, never omit the label
- Buttons and interactive touch targets MUST be at least 44×44px for mobile accessibility
- Descriptive button text: never "Clique aqui" alone — use specific action text like "Reservar agora" or "Ver acomodações"

## Video & Media

- Every `<video>` MUST include a `<track kind="captions">` element for accessibility
- Videos below the fold: use lazy loading or intersection observer to defer load
- Include `poster` attribute on videos for LCP and CLS prevention

## Accessibility (A11y)

- Color contrast: text must meet WCAG AA ratio (4.5:1 for normal text, 3:1 for large text)
- Use `aria-hidden="true"` on purely decorative or visually inactive elements
- Carousel/slider inactive items: mark with `aria-hidden` and `tabIndex={-1}`
- Focus indicators: never remove `outline` without providing a visible alternative

## Meta Tags (pages using SEO component)

- Every page component MUST include the `<SEO>` component with `title`, `description`, `url`
- Title format: `{Page Title} | Art Green Teresópolis` (50-60 chars)
- Description: 150-160 chars with natural keywords and call-to-action
- Include `image` prop for pages with hero images

## Links

- Internal links: use React Router `<Link>` component, never `<a href>`
- External links: include `rel="noopener noreferrer"` and `target="_blank"`
- Anchor text must be descriptive (never "clique aqui" or "saiba mais" alone)
