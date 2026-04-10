# 🔍 SEO y Optimización

**Guía de SEO técnico para CODEAMUS.dev**

---

## 📊 Estado SEO Actual

```
✅ Sitemap XML dinámico
✅ Robots.txt configurado
✅ Meta tags en todas las páginas
✅ Google Analytics 4
✅ Google Search Console integrado
⏳ Schema.org markup (en progreso)
```

---

## 🎯 Keywords Target

### Tier 1 - Alto Potencial (Enfoque Principal)

```
"desarrollo web astro"
"agencia apps móviles"
"desarrollo app ios android"
"desarrollo web profesional"
```

### Tier 2 - Geo-Targeting (Secundario)

```
"desarrollo web santiago"
"agencia web chile"
"crear app móvil santiago"
"freelancer desarrollo web chile"
```

### Tier 3 - Long-Tail (Blog + Conversión)

```
"landing pages que convierten"
"cuanto cuesta una app movil"
"mejores prácticas seo técnico"
"astro vs next.js"
```

---

## 🏗️ SEO Técnico Checklist

### On-Page

```
✅ H1 por página (único)
✅ Meta title: 50-60 caracteres
✅ Meta description: 150-160 caracteres
✅ URLs semánticas
✅ Alt text en imágenes
✅ Internal linking
✅ Mobile responsive
```

### Off-Page

```
✅ Sitemap.xml actualizado
✅ Robots.txt correcto
✅ Google Search Console
✅ Google Analytics 4
✅ Schema.org markup
✅ Open Graph tags
```

### Performance

```
✅ Core Web Vitals (Lighthouse)
✅ Imágenes optimizadas
✅ CSS/JS minificado
✅ Cache headers
✅ GZIP compression
```

---

## 📝 Meta Tags Recomendadas

### Home

```astro
---
const title = "Desarrollo Web y Apps Móviles | CODEAMUS";
const description = "Agencia especializada en desarrollo web con Astro y apps móviles iOS/Android. Soluciones modernas, rápidas y SEO optimizadas.";
const keywords = "desarrollo web, apps móviles, astro, react native, freelancer";
---
```

### Blog (Template)

```astro
---
const title = `${post.data.title} | CODEAMUS Blog`;
const description = post.data.description; // 150-160 chars
const keywords = post.data.keywords.join(", ");
---
```

### Projects

```astro
---
const title = `${project.data.title} | Portfolio CODEAMUS`;
const description = project.data.description;
---
```

---

## 🔗 Estructura de URLs (Semantic)

```
✅ BIEN (descriptiva):
/blog/landing-pages-que-convierten
/projects/dayloop-delivery-platform
/servicios/apps-moviles-ios-android

❌ MAL (genérica):
/blog/article-1
/projects/project-123
/p/1
```

---

## 🖼️ Imágenes y Alt Text

### Patrón Recomendado

```markdown
![Descripción en español que incluya keyword si aplica](url)

# ✅ BIEN:
![Dashboard de desarrollo web mostrando Lighthouse score perfecto](/images/performance.jpg)

# ❌ MAL:
![imagen1](/images/img1.jpg)
![screenshot](/images/sc.png)
```

### Optimización de Imágenes

```bash
# WebP format (más pequeño)
convert original.jpg -quality 80 optimized.webp

# Verifica tamaño
du -h optimized.webp

# Máximo: 100-150KB por imagen
```

---

## 🏷️ Schema.org Markup

### LocalBusiness (Home)

```json
{
  "@context": "schema.org",
  "@type": "LocalBusiness",
  "name": "CODEAMUS",
  "description": "Agencia de desarrollo web y apps móviles",
  "image": "https://codeamus.dev/og-image.jpg",
  "url": "https://codeamus.dev",
  "telephone": "+56 9 XXXX XXXX",
  "email": "contact@codeamus.dev",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Santiago",
    "addressCountry": "CL"
  },
  "areaServed": ["CL"],
  "serviceType": [
    "Web Development",
    "Mobile App Development",
    "Landing Page Design"
  ]
}
```

### BlogPosting (Artículos)

```json
{
  "@context": "schema.org",
  "@type": "BlogPosting",
  "headline": "Título del artículo",
  "description": "Meta description",
  "image": "https://codeamus.dev/og-image.jpg",
  "datePublished": "2026-04-10",
  "author": {
    "@type": "Person",
    "name": "Matías"
  }
}
```

### Service (Servicios)

```json
{
  "@context": "schema.org",
  "@type": "Service",
  "name": "Desarrollo Web",
  "description": "Desarrollo de sitios web profesionales",
  "provider": {
    "@type": "Organization",
    "name": "CODEAMUS"
  },
  "areaServed": "CL",
  "priceRange": "$300000-$600000"
}
```

---

## 🔍 Google Search Console Setup

### 1. Verificar Propiedad

```
1. Ve a: https://search.google.com/search-console
2. Agrega propiedad: codeamus.dev
3. Verifica propiedad (DNS o archivo HTML)
```

### 2. Enviar Sitemap

```
1. Ve a: Search Console → Sitemaps
2. URL: https://codeamus.dev/sitemap.xml
3. Click "Submit"
```

### 3. Monitorear Performance

```
1. Ve a: Performance
2. Filtros:
   - Queries (keywords posicionadas)
   - Pages (URLs con impresiones)
   - Countries (geo-targeting)
```

### 4. Mobile Usability

```
1. Ve a: Mobile Usability
2. Verifica no hay errores
3. Revisa Core Web Vitals
```

---

## 📊 Google Analytics 4 Setup

### Event Tracking

```javascript
// Rastrear clicks en CTAs
gtag('event', 'click_cta', {
  'button_name': 'Solicitar Demo',
  'section': 'hero'
});

// Rastrear form submissions
gtag('event', 'form_submit', {
  'form_name': 'contact_form',
  'form_id': 'contact'
});

// Rastrear scroll depth
gtag('event', 'scroll_depth', {
  'depth_percent': 50
});
```

### Setup en Astro

```astro
<!-- En src/layouts/Layout.astro -->
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Google Analytics script -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

---

## 📱 Core Web Vitals Optimization

### Métricas Clave

```
LCP (Largest Contentful Paint): < 2.5s
FID (First Input Delay): < 100ms
CLS (Cumulative Layout Shift): < 0.1
```

### Cómo Mejorar

**LCP (Carga):**
- Optimizar imágenes (WebP, lazy loading)
- Defer CSS/JS no-crítico
- Preload recursos críticos

```html
<!-- Preload font -->
<link rel="preload" href="/font.woff2" as="font" type="font/woff2">

<!-- Lazy load images -->
<img src="..." loading="lazy">

<!-- Defer non-critical scripts -->
<script defer src="..."></script>
```

**FID (Interactividad):**
- Reduce JavaScript bloqueador
- Code splitting con Astro Islands
- Web workers para cálculos pesados

**CLS (Estabilidad):**
- Define `width` y `height` en imágenes
- Evita insertar contenido dinámico en viewport

```css
/* Evitar layout shift */
img {
  aspect-ratio: 16 / 9;
  width: 100%;
  height: auto;
}
```

### Verificar Scores

```
1. Ve a: https://pagespeed.web.dev/
2. Ingresa: https://codeamus.dev
3. Revisa scores por sección
4. Implementa recomendaciones
```

---

## 🔗 Internal Linking Strategy

### Principios

```
1. Cada página debe tener mínimo 2 links internos
2. Usa anchor text descriptivo (con keywords)
3. Enlaza de arriba a abajo (home → categoría → contenido)
4. Evita redundancia (no links a la misma página)
```

### Ejemplo

```markdown
<!-- En artículo de blog -->
[Landing pages que convierten](#) 
→ Enlaza a artículo relacionado con keyword

[Servicios de desarrollo web](/servicios)
→ Enlaza a página de servicios al final

[Ver más proyectos](/portfolio)
→ CTA que enlaza a portfolio
```

---

## 📧 Robots.txt

```text
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

# Sitemap
Sitemap: https://codeamus.dev/sitemap.xml

# Específico para Googlebot
User-agent: Googlebot
Allow: /

# Crawl delay
Crawl-delay: 2
```

---

## 🗺️ Sitemap.xml

Astro genera automáticamente. Verifica:

```
https://codeamus.dev/sitemap.xml

Debe contener:
- Todas las páginas estáticas
- Blog posts
- Project pages
- Última actualización
```

---

## 🎯 Ranking Factors - Checklist

### Factor: Content Quality
```
✅ Mínimo 500 palabras por artículo
✅ Palabras clave naturales (no spam)
✅ Estructura jerárquica (H1-H6)
✅ Párrafos cortos (máximo 3-4 líneas)
```

### Factor: Backlinks
```
✅ Haz guest posts en blogs relacionados
✅ Directorios B2B (si aplica)
✅ Menciones en redes sociales
```

### Factor: Page Speed
```
✅ Lighthouse 90+
✅ Core Web Vitals verde
✅ Imágenes optimizadas
```

### Factor: Mobile Friendly
```
✅ Responsive en todo dispositivo
✅ Touch-friendly buttons (44px mínimo)
✅ Rápido en 4G
```

### Factor: Freshness
```
✅ Actualiza blog regularmente
✅ Refresca artículos viejos
✅ Agrega proyectos recientes
```

---

## 📈 KPIs para Monitorear

```
Mensual:
- Organic traffic (Google Analytics)
- Keyword rankings (Search Console)
- Click-through rate (Search Console)
- Posición promedio (Search Console)

Trimestral:
- Backlinks nuevos
- Domain Authority
- Ranking en top 10 para keywords
```

---

## 🚀 Quick Wins SEO

**Semana 1:**
- [ ] Verificar GSC y Analytics
- [ ] Enviar sitemap
- [ ] Optimizar Core Web Vitals

**Mes 1:**
- [ ] Agregar 3-5 artículos de blog
- [ ] Schema markup en home
- [ ] Internal links strategy

**Mes 3:**
- [ ] 10+ artículos
- [ ] Posicionamiento en Tier 2-3 keywords
- [ ] 50+ organic visits/mes

**Mes 6:**
- [ ] Posicionamiento Tier 1 keywords
- [ ] 200+ organic visits/mes
- [ ] 5+ leads cualificados/mes

---

## 🔗 Recursos Útiles

- [Google Search Central](https://developers.google.com/search)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Schema.org Validator](https://schema.org/docs/schemas.html)
- [SERP Simulator](https://www.sistrix.com/serp-simulator/)

---

**Última actualización**: Abril 2026
**Objetivo**: Top 3 posicionamiento para Tier 1 keywords en 6 meses
