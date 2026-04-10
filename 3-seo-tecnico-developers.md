---
title: "SEO Técnico para Developers: Core Web Vitals y Estructura Web"
description: "Guía SEO técnico para developers. Core Web Vitals, meta tags, schema markup, optimizaciones prácticas."
author: "CODEAMUS"
pubDate: 2026-04-29
category: "seo"
keywords: ["SEO técnico", "Core Web Vitals", "rendimiento web", "schema markup"]
heroImage: "/images/blog/seo-tecnico-hero.jpg"
---

# SEO Técnico para Developers

Si eres developer, esta guía te va a ahorrar semanas de trabajo y miles de pesos en marketing.

**Realidad**: 60% del ranking de Google depende de factores técnicos, no de contenido.

## Los 3 Pilares del SEO Técnico

1. **Rendimiento** (Core Web Vitals)
2. **Estructura** (URLs, meta tags, schema)
3. **Rastreabilidad** (robots.txt, sitemap, canonicals)

## Core Web Vitals Explicados

Google mide 3 métricas críticas. Si fallas aquí, no rankeas.

### 1. LCP - Largest Contentful Paint
**¿Qué es?** Tiempo que tarda en cargar el contenido principal (imagen, texto grande)

**Meta**: < 2.5 segundos

**Por qué importa**: Si carga lento, Google entiende que es una mala experiencia

**Cómo mejorar**:

```html
<!-- 1. Optimizar imagen hero -->
<img 
  src="hero.jpg" 
  fetchpriority="high"
  width="1200" 
  height="600" 
  alt="Hero banner"
/>

<!-- 2. Usar WebP (35% más pequeño) -->
<picture>
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg">
</picture>

<!-- 3. Comprimir imágenes -->
<!-- Usar ImageOptim, TinyPNG o similar -->

<!-- 4. Lazy load imágenes no-críticas -->
<img src="lazy.jpg" loading="lazy" />
```

### 2. FID - First Input Delay
**¿Qué es?** Tiempo que tarda el navegador en responder a tu interacción (click, scroll)

**Meta**: < 100 ms

**Por qué importa**: Un sitio lento se siente roto

**Cómo mejorar**:

```javascript
// ❌ MALO: JavaScript pesado bloquea thread
function processData() {
  // 10 segundos de cálculos aquí
}

// ✅ BUENO: Usar Web Workers
const worker = new Worker('heavy.js');
worker.postMessage(data);
worker.onmessage = (e) => {
  console.log('Resultado:', e.data);
};

// ✅ BUENO: Code splitting
// En Next.js/Astro
import dynamic from 'next/dynamic';
const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <p>Cargando...</p>,
});
```

### 3. CLS - Cumulative Layout Shift
**¿Qué es?** Cambios inesperados de posición del contenido mientras cargas

**Meta**: < 0.1

**Ejemplo**: Haces clic en un botón, pero la página se mueve y clickeas otro

**Cómo mejorar**:

```css
/* Reservar espacio para imágenes */
img {
  aspect-ratio: 16 / 9;
  width: 100%;
  height: auto;
}

/* Video responsivo */
video {
  aspect-ratio: 16 / 9;
  width: 100%;
}

/* Evitar shift de fonts */
@font-face {
  font-display: swap; /* Muestra fallback mientras carga */
}

/* Reservar espacio para banners */
.ad-space {
  min-height: 250px; /* Previene shift */
}
```

## Meta Tags Esenciales

Cada página debe tener esto:

```html
<!-- Básico -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Descripción max 160 caracteres">
<meta name="keywords" content="keyword1, keyword2, keyword3">

<!-- Open Graph (Para social sharing) -->
<meta property="og:title" content="Título">
<meta property="og:description" content="Descripción">
<meta property="og:image" content="/images/og-image.jpg">
<meta property="og:type" content="website">
<meta property="og:url" content="https://ejemplo.com/pagina">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Título">
<meta name="twitter:description" content="Descripción">
<meta name="twitter:image" content="/images/og-image.jpg">

<!-- Canonical (evitar contenido duplicado) -->
<link rel="canonical" href="https://ejemplo.com/pagina">

<!-- Favicons -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">

<!-- Preload recursos críticos -->
<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin>
```

## Schema Markup (JSON-LD)

Google usa esto para entender tu contenido.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CODEAMUS",
  "url": "https://codeamus.dev",
  "logo": "https://codeamus.dev/logo.png",
  "description": "Agencia de desarrollo web y apps",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+56-XXX-XXX-XXX",
    "contactType": "Customer Service"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Santiago",
    "addressCountry": "CL"
  }
}
```

Para blogs:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Título del artículo",
  "description": "Descripción",
  "image": "/images/article.jpg",
  "author": {
    "@type": "Person",
    "name": "CODEAMUS"
  },
  "datePublished": "2024-04-15",
  "dateModified": "2024-04-15"
}
```

## URLs Semánticas

**MAL:**
```
/page1
/p2
/contacto.php
/blog?id=123
```

**BIEN:**
```
/servicios/desarrollo-web
/blog/seo-tecnico-para-developers
/portfolio/marketplace-b2b
/contacto
```

Reglas:
- Lowercase solo
- Usar guiones, no underscores
- Incluye keywords
- Evita números/símbolos
- Permanentes (no cambies URLs)

## robots.txt Correcto

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /cgi-bin/

# Slow crawlers
User-agent: AhrefsBot
Crawl-delay: 10

Sitemap: https://codeamus.dev/sitemap.xml
```

## Sitemap XML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://codeamus.dev/</loc>
    <lastmod>2024-04-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://codeamus.dev/servicios</loc>
    <lastmod>2024-04-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

En Astro es automático. En Next.js usa: `next-sitemap`

## Canonical Tag

Evita contenido duplicado:

```html
<!-- Si tienes: example.com y www.example.com -->
<link rel="canonical" href="https://example.com/pagina">

<!-- Google sabrá que es la misma página -->
```

## Herramientas para Auditar

1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev
   - Score 90+ en todo

2. **Google Search Console**
   - Errores de cobertura
   - Core Web Vitals reales
   - Query performance

3. **Schema.org Validator**
   - https://validator.schema.org
   - Verifica JSON-LD

4. **Lighthouse (DevTools)**
   - F12 → Lighthouse
   - Auditoría local

## Checklist Final

```
✅ Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
✅ Meta descriptions: Única, 155 chars, keyword incluida
✅ H1: Uno por página, con keyword
✅ URLs: Semánticas, sin parámetros
✅ Imágenes: Optimizadas, alt-text, lazy load
✅ Schema: LocalBusiness, Article, Product (según página)
✅ robots.txt: Correcto, permite crawling
✅ Sitemap: Enviado a GSC
✅ SSL: HTTPS obligatorio
✅ Mobile: Responsivo, touch-friendly
```

## Conclusión

SEO técnico no es opcionalidad. Es la base.

Si tu sitio tiene estos problemas, Google te penaliza automáticamente.

Invierte 1 día en auditar, ahorras meses en marketing.