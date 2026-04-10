# 🔍 AUDITORÍA SEO Y PLAN DE POSICIONAMIENTO
## codeamus.dev - Estrategia para Captar Clientes Orgánicos

**Fecha**: 10 de Abril, 2026  
**Objetivo**: Posicionarse en Google para búsquedas como "crear apps", "desarrollar sitios web", "crear página web"  
**Meta**: Top 3 en palabras clave principales dentro de 3-6 meses  

---

## PARTE 1: AUDITORÍA TÉCNICA SEO

### 1.1 Checklist en Google Search Console

Debes revisar estos puntos **HOY** en tu GSC:

```
SECCIÓN: COBERTURA
□ ¿Sitemap enviado? (debe estar en "Enviados")
□ ¿Todas las páginas aparecen en "Índice cubierto"?
□ ¿Hay errores (404, redireccionamientos, etc)?
□ Si hay "Descubierta pero no indexada" → revisar calidad de contenido

SECCIÓN: RENDIMIENTO
□ ¿Qué keywords traen tráfico? (filtrar por "Consultas")
□ ¿Posición promedio? (objetivo: <10 para keywords principales)
□ ¿CTR actual? (normal es 2-3% en posición 15-20)
□ ¿Tendencia? (creciendo, estable, cayendo)

SECCIÓN: CORE WEB VITALS
□ ¿LCP (Largest Contentful Paint)? Debe ser <2.5s
□ ¿FID (First Input Delay)? Debe ser <100ms
□ ¿CLS (Cumulative Layout Shift)? Debe ser <0.1
□ Si hay "POBRES" → ARREGLAR URGENTE (impacta ranking)

SECCIÓN: ENHANCEMENTS
□ ¿Detecta estructuras (Company, Article, etc)?
□ ¿Hay errores en Structured Data?

SECCIÓN: LINKS
□ ¿Cuántos backlinks tienes? (cuales son fuentes)
□ ¿Dominios enlazando? (diversidad importante)
```

**ACCIONES INMEDIATAS:**
1. Si NO ves sitemap enviado → envía `sitemap.xml`
2. Si hay "Descubierta pero no indexada" → revisa meta descriptions y contenido
3. Si Core Web Vitals están POBRES → necesita optimización urgente

---

### 1.2 Auditoría On-Page (Verificar en sitio)

Para **CADA página** importante:

#### **Home (codeamus.dev/)**
```
ELEMENTO               ESTADO ACTUAL    DEBE SER
H1 único              [REVISAR]         Sí, con keyword principal
Meta Description      [REVISAR]         50-160 chars, keyword incluida
OG:image             [REVISAR]         Imagen 1200x630px
OG:title             [REVISAR]         Mismo que H1 o similar
URL canónica         [REVISAR]         <link rel="canonical">
Keyword natural      [REVISAR]         "desarrollo web" o "crear apps"
Palabra clave         [REVISAR]         En H1, H2, primeros 100 palabras
Internal links       [REVISAR]         A servicios, portfolio, blog
```

#### **Servicios (/servicios o similar)**
```
H1 específico         [REVISAR]         "Servicios de desarrollo web" o similar
Meta keyword focus    [REVISAR]         "desarrollo de apps", "crear apps"
H2s por servicio      [REVISAR]         "Apps móviles", "Landing pages", etc
CTAs visibles         [REVISAR]         Mínimo 2-3 CTAs con intent
Schema markup         [REVISAR]         @type: Service o ServiceArea
```

#### **Portfolio (/portfolio)**
```
Título SEO            [REVISAR]         Incluya "casos de estudio" o "proyectos"
Descripción           [REVISAR]         Resuma el tipo de proyectos mostrados
Cards de proyectos    [REVISAR]         Cada uno con alt-text + descripción
Imágenes optimizadas  [REVISAR]         Webp/optimizadas, cargadas vía lazy loading
Schema markup         [REVISAR]         @type: CreativeWork por proyecto
```

#### **Contacto (/contacto)**
```
H1 claro              [REVISAR]         "Contacta con CODEAMUS" o similar
Formulario presente   [REVISAR]         Con campos: nombre, email, proyecto, presupuesto
Schema LocalBusiness  [REVISAR]         Teléfono, email, ubicación
CTAs conversión       [REVISAR]         Email, WhatsApp, Calendly
```

---

### 1.3 Auditoría de Performance

**Ejecutar en Google PageSpeed Insights:**

```bash
https://pagespeed.web.dev/?url=codeamus.dev
```

**Métricas a revisar:**
- Performance: Debe estar 85+
- Accessibility: Debe estar 90+
- Best Practices: Debe estar 90+
- SEO: Debe estar 95+

**Si hay problemas frecuentes:**
- **LCP lento** → Optimizar imagen hero, server response
- **CLS alto** → Revisar fuentes, imágenes sin dimensiones, anuncios
- **Accesibilidad baja** → Mejorar contraste, alt-text, ARIA labels

---

## PARTE 2: OPORTUNIDADES DE POSICIONAMIENTO

### 2.1 Keywords Objetivo (PRIORIDAD)

Basado en tu PLAN MAESTRO, aquí está el orden de ataque:

#### **FASE 1: Keywords Fáciles (Long-Tail, 20-50 búsquedas/mes)**
*Menos competencia = Posicionamiento más rápido*

| Keyword | Vol/mes | Dificultad | Formato | Prioridad |
|---------|---------|-----------|--------|-----------|
| "cómo crear una landing page que convierte" | 35 | BAJA | Blog post | 🔴 INMEDIATO |
| "desarrollo de apps móviles" | 28 | BAJA | Servicios + Blog | 🔴 INMEDIATO |
| "crear página web profesional" | 22 | BAJA | Blog post | 🔴 INMEDIATO |
| "casos de éxito desarrollo web" | 15 | BAJA | Portfolio + Blog | 🟠 SEM 1 |
| "freelancer desarrollo web astro" | 12 | MUY BAJA | Blog post | 🟠 SEM 1 |
| "mejores prácticas SEO técnico" | 40 | BAJA | Blog post | 🔴 INMEDIATO |

#### **FASE 2: Keywords Intermedias (50-150 búsquedas/mes)**
*Esperar hasta tener autoridad de dominio (>2-3 meses)*

| Keyword | Vol/mes | Dificultad | Formato |
|---------|---------|-----------|--------|
| "desarrollo web profesional" | 156 | MEDIA | Home + servicios |
| "desarrollo app móvil" | 42 | MEDIA | Servicios |
| "agencia web y app" | 35 | MEDIA | Home |
| "desarrollo web astro" | 27 | MEDIA | Blog post |

#### **FASE 3: Keywords Difíciles (150+)**
*Solo después de tener DA 30+ y backlinks*

| Keyword | Vol/mes | Dificultad |
|---------|---------|-----------|
| "crear sitio web" | 200+ | ALTA |
| "desarrollo web chile" | 180+ | ALTA |
| "agencia desarrollo web" | 150+ | ALTA |

---

### 2.2 Plan de Contenido (Blog)

**Para posicionarte en las FASE 1 keywords, necesitas estos artículos:**

```
ARTÍCULO 1 (INMEDIATO)
Título: "Guía Completa: Cómo Crear una Landing Page que Convierte en 2024"
URL: /blog/crear-landing-page-que-convierte
Keywords: crear landing page, landing page efectiva
Secciones:
  1. Intro + por qué importa
  2. Estructura base de una landing page
  3. 7 elementos que NO pueden faltar
  4. Ejemplos de landing pages que convierten
  5. Errores comunes (+ cómo evitarlos)
  6. CTA final: "Quiero una landing page así"
Palabras: 2500-3000
Meta: "Aprende a crear landing pages que convierten clientes. Guía 2024 con ejemplos reales y mejores prácticas."

---

ARTÍCULO 2 (INMEDIATO)
Título: "Desarrollo de Apps Móviles: Guía Completa para 2024"
URL: /blog/desarrollo-apps-moviles-guia
Keywords: desarrollo apps móviles, crear app móvil, iOS Android
Secciones:
  1. Intro: ¿Por qué tu negocio necesita una app?
  2. iOS vs Android vs Cross-platform
  3. Pasos para desarrollar una app
  4. Costos y timelines reales
  5. Casos de éxito (tus proyectos)
  6. CTA: "Quiero desarrollar mi app"
Palabras: 2500-3000
Meta: "Guía completa: pasos para desarrollar apps móviles iOS y Android. Costos, timelines y mejores prácticas 2024."

---

ARTÍCULO 3 (INMEDIATO)
Título: "SEO Técnico para Developers: Guía Práctica"
URL: /blog/seo-tecnico-developers
Keywords: SEO técnico, Core Web Vitals, estructura web
Secciones:
  1. Intro: Por qué los developers deben saber SEO
  2. Core Web Vitals explicados
  3. Estructura correcta de un sitio
  4. Meta tags y Schema markup
  5. Optimización de velocidad
  6. CTA: "Auditá tu sitio"
Palabras: 2000-2500
Meta: "Guía SEO técnico para developers. Core Web Vitals, meta tags, schema markup, optimizaciones prácticas."

---

ARTÍCULO 4 (SEMANA 2)
Título: "Astro vs Next.js: ¿Cuál Framework Elegir en 2024?"
URL: /blog/astro-vs-nextjs
Keywords: Astro vs Next.js, comparativa frameworks
Secciones:
  1. Intro: Diferencias clave
  2. Astro: Ventajas y desventajas
  3. Next.js: Ventajas y desventajas
  4. Comparativa (tabla)
  5. Casos de uso reales
  6. Recomendación final
Palabras: 2000-2500
Meta: "Comparativa Astro vs Next.js 2024. Ventajas, desventajas y cuándo usar cada uno."

---

ARTÍCULO 5 (SEMANA 2)
Título: "7 Errores en Desarrollo Web que Cuestan Dinero (y Cómo Evitarlos)"
URL: /blog/errores-desarrollo-web
Keywords: errores desarrollo web, errores SEO
Secciones:
  1. Intro
  2. Error 1: No optimizar para mobile
  3. Error 2: Ignorar SEO técnico
  4. Error 3: Malas UX en formularios
  5. Error 4: Performance lenta
  6. Error 5: Falta de analytics
  7. Error 6: No testear en navegadores
  8. Error 7: Hosting lentísimo
  9. CTA: "Auditá tu sitio"
Palabras: 2500-3000
Meta: "7 errores comunes en desarrollo web. Cómo evitarlos y mejorar tu sitio. Guía práctica 2024."
```

**META TOTAL:** 5 artículos base = 12,000-14,000 palabras = **2-3 semanas de trabajo**

---

### 2.3 Mejoras On-Page Recomendadas

**Para Home:**
```html
<!-- META TAGS -->
<title>Desarrollo Web y Apps Móviles | CODEAMUS</title>
<meta name="description" content="Agencia especializada en desarrollo web (Astro, React) y apps móviles. Casos de éxito reales. Consultoría gratuita.">
<meta name="keywords" content="desarrollo web, crear apps móviles, agencia web astro">

<!-- OG TAGS (Social Sharing) -->
<meta property="og:title" content="Desarrollo Web y Apps Móviles | CODEAMUS">
<meta property="og:description" content="Diseñamos y desarrollamos sitios web profesionales y apps móviles que generan resultados.">
<meta property="og:image" content="/images/og-home.jpg">
<meta property="og:url" content="https://codeamus.dev">
<meta property="og:type" content="website">

<!-- CANONICAL -->
<link rel="canonical" href="https://codeamus.dev">

<!-- SCHEMA MARKUP (LocalBusiness) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CODEAMUS",
  "description": "Agencia de desarrollo web y apps móviles",
  "url": "https://codeamus.dev",
  "telephone": "+56-XXX-XXX-XXX",
  "email": "contacto@codeamus.dev",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Santiago, Chile",
    "addressRegion": "RM",
    "addressCountry": "CL"
  },
  "areaServed": ["CL", "LATAM"],
  "serviceType": ["Web Development", "Mobile App Development"],
  "sameAs": ["https://twitter.com/codeamus", "https://linkedin.com/company/codeamus"]
}
</script>
```

**Para Servicios:**
```html
<title>Servicios | Desarrollo Web y Apps Móviles | CODEAMUS</title>
<meta name="description" content="Servicios: Landing pages, sitios web profesionales, apps iOS/Android. Stack: Astro, React, React Native.">

<!-- SCHEMA: Services -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Desarrollo de Apps Móviles",
  "description": "Apps nativas y cross-platform para iOS y Android",
  "provider": {
    "@type": "LocalBusiness",
    "name": "CODEAMUS"
  },
  "areaServed": "CL",
  "serviceType": "Mobile Application Development"
}
</script>
```

---

## PARTE 3: IMPLEMENTACIÓN POR FASES

### FASE 1: ESTA SEMANA (Días 1-7)

**Lunes-Martes:**
- ✅ Revisar Google Search Console (cobertura, rendimiento)
- ✅ Optimizar meta descriptions en todas las páginas
- ✅ Agregar schema markup a home y servicios
- ✅ Verificar/enviar sitemap.xml a GSC
- ✅ Revisar Core Web Vitals en PageSpeed Insights

**Miércoles-Jueves:**
- ✅ Crear primeras 2-3 páginas de blog (framework Astro)
- ✅ Artículo 1: "Cómo crear landing page que convierte"
- ✅ Artículo 2: "Desarrollo de apps móviles"
- ✅ Optimizar SEO en cada artículo

**Viernes:**
- ✅ Revisar internal linking (home → servicios → blog)
- ✅ Publicar artículos
- ✅ Enviar updates a GSC

---

### FASE 2: PRÓXIMAS 2 SEMANAS (Semana 2-3)

**Semana 2:**
- ✅ Artículos 3-5 (SEO técnico, Astro vs Next, 7 errores)
- ✅ Crear estructura de blog con filtros
- ✅ Agregar CTA "Auditá tu sitio" en cada artículo
- ✅ Schema markup en cada artículo

**Semana 3:**
- ✅ Optimizar portfolio con casos de éxito profundos
- ✅ Agregar testimonios reales (si tienes)
- ✅ Mejorar imágenes (comprimir, webp)
- ✅ Testing de velocidad y Core Web Vitals

---

### FASE 3: MESES 2-3 (Link Building + Consolidación)

**Linkbuilding orgánico:**
- Guest posts en blogs tech español
- Mención en directorios (Brújula, Gust)
- Community building (Dev.to, Indie Hackers)
- Menciones en foros (Stack Overflow en es)

**Contenido adicional:**
- Webinars / Tutoriales en YouTube
- Infografías (embebibles para otros sitios)
- Herramientas gratuitas (generador de paletas, auditor de SEO, etc)

---

## PARTE 4: MÉTRICAS DE ÉXITO

### En Google Search Console (Mensual)

| Métrica | Mes 1 | Mes 2 | Mes 3 |
|---------|-------|-------|-------|
| Impresiones | 500-1000 | 2000-3000 | 5000+ |
| Clics | 10-20 | 50-100 | 200+ |
| Posición promedio | 35-50 | 15-20 | 5-10 |
| Clickthrough rate | 0.5-1% | 2-3% | 4-5% |
| Páginas indexadas | 10+ | 15+ | 20+ |

### En Google Analytics

| Métrica | Objetivo |
|---------|----------|
| Usuarios orgánicos/mes | Mes 1: 50-100, Mes 3: 300-500 |
| Sesiones | Mes 1: 60-120, Mes 3: 400-600 |
| Bounce rate | Menos de 65% |
| Conversión (contacto) | 2-3% de visitantes |
| Leads cualificados | Mes 1: 1-2, Mes 3: 5-10 |

---

## PARTE 5: CHECKLIST FINAL

### Antes de Publicar Artículos

```
□ Título 50-60 caracteres, keyword incluida
□ Meta description 50-160 chars, keyword incluida, call to action
□ H1 único, con keyword principal
□ H2, H3 jerárquicos, keywords relacionadas
□ Primeros 100 palabras incluyen keyword
□ Imágenes con alt-text descriptivo
□ Enlaces internos a 2-3 páginas relevantes
□ CTA final (formulario, WhatsApp, email)
□ Schema markup (Article type)
□ URLs semánticas: /blog/[slug-keyword]
□ Sin errores ortográficos/gramaticales
□ 2000+ palabras (mínimo para long-tail)
□ Linkeable (estadísticas, datos, recomendaciones)
```

### Antes de Lanzar Cambios

```
□ Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
□ Lighthouse Performance: 85+
□ Mobile responsivo (testar en 3 dispositivos)
□ Sitemap.xml actualizado
□ robots.txt permitiendo crawling
□ Google Search Console sin errores de cobertura
□ Meta descriptions únicas en todas las páginas
□ Schema markup validado (schema.org validator)
□ Todas las imágenes optimizadas y con alt-text
□ Internal linking estratégico (2-3 links por página)
```

---

## RESUMEN EJECUTIVO

**¿Qué hacer AHORA?**
1. Revisar Google Search Console (cobertura + Core Web Vitals)
2. Crear primeros 3 artículos de blog (Tier 1 keywords)
3. Optimizar meta tags en páginas existentes
4. Agregar schema markup (LocalBusiness, Service, Article)

**¿Resultado esperado?**
- Mes 1: Primeros artículos indexados, posiciones 20-30
- Mes 2: Ranking en posiciones 10-15 para keywords long-tail
- Mes 3: Top 5-10 para keywords principales, 5-10 leads/mes

**¿Inversión de tiempo?**
- Semana 1: 10-15 horas (auditoría + optimizaciones)
- Semana 2-3: 15-20 horas (blog 5 artículos)
- Meses 2-3: 10-15 horas/mes (linkbuilding + nuevo contenido)

---

**Documento preparado para**: Matias (CODEAMUS)  
**Próximo paso**: ¿Comenzamos con la auditoría en Google Search Console?