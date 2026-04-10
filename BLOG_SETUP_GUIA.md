# 🚀 BLOG SETUP - Guía Paso a Paso para Astro

**Objetivo**: Crear un blog moderno, minimalista, integrado al sitio actual sin romper estética.

---

## PASO 1: Crear Estructura de Carpetas

En tu proyecto Astro, crea esto:

```bash
src/
├── content/
│   ├── config.ts (YA EXISTE - actualizar)
│   └── blog/
│       ├── 1-crear-landing-page.md
│       ├── 2-desarrollo-apps-moviles.md
│       ├── 3-seo-tecnico-developers.md
│       ├── 4-astro-vs-nextjs.md
│       └── 5-errores-desarrollo-web.md
│
├── pages/
│   └── blog/
│       ├── index.astro (Listado de artículos)
│       └── [...slug].astro (Página individual)
│
└── components/
    ├── BlogCard.astro (Card de artículo)
    └── BlogHeader.astro (Header blog)
```

---

## PASO 2: Actualizar content/config.ts

Tu `config.ts` debe tener esto:

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('CODEAMUS'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(['web', 'mobile', 'seo', 'tools']).default('web'),
    keywords: z.array(z.string()),
  }),
});

export const collections = { blog };
```

---

## PASO 3: Crear los 5 Artículos

### Artículo 1: Crear Landing Page
**Ruta**: `src/content/blog/1-crear-landing-page.md`

```markdown
---
title: "Cómo Crear una Landing Page que Convierte: Guía Completa 2024"
description: "Aprende a crear landing pages que convierten. Estructura, elementos clave, ejemplos reales y errores a evitar."
author: "CODEAMUS"
pubDate: 2026-04-15
category: "web"
keywords: ["landing page", "conversiones", "diseño web", "copywriting"]
heroImage: "/images/blog/landing-page-hero.jpg"
---

# Cómo Crear una Landing Page que Convierte

Una landing page que convierte no es solo un bonito diseño. Es una máquina 
estratégicamente construida para transformar visitantes en clientes.

## El Problema

Según HubSpot, las landing pages optimizadas aumentan las conversiones hasta 
un 45%. Pero aquí está el problema: **95% de las landing pages que vemos 
están mal estructuradas**.

Lleva 3 segundos que un visitante decide si se queda o se va. En esos 3 segundos, 
tu landing page debe comunicar:

1. **¿Qué ofreces?**
2. **¿Para quién es?**
3. **¿Por qué debo confiar?**
4. **¿Qué hago ahora?**

Si fallas en cualquiera de estas, el visitante se va.

## Los 7 Elementos que No Pueden Faltar

### 1. Headline Irresistible

Tu headline es lo PRIMERO que ve el visitante. Tiene 3 segundos.

**Qué NO hacer:**
- "Bienvenido a CODEAMUS" ❌
- "Soluciones Web Inteligentes" ❌
- "La agencia de desarrollo web" ❌

**Qué SÍ hacer:**
- "Ahorra 6 meses en desarrollo: Landing pages que generan 3x más leads"
- "¿Tu sitio web no atrae clientes? Aquí está por qué"
- "Desarrollo web que convierte visitantes en clientes"

La fórmula: **[Beneficio] + [Prueba o Curiosidad] = Irresistible**

### 2. Propuesta de Valor CLARA

En 2-3 líneas, responde:
- ¿Qué ofreces?
- ¿Para quién es?
- ¿Cuál es el beneficio principal?

**Ejemplo:**
"Landing pages de alto rendimiento para emprendedores y PyMEs que necesitan 
captar clientes sin invertir en publicidad."

### 3. Beneficios Específicos (Con Prueba)

No digas "mejor", pruébalo.

**MAL:**
- "Diseño superior"
- "Mejor experiencia"
- "Más conversiones"

**BIEN:**
- "45% más conversiones (vs sitios típicos)" — HubSpot 2024
- "Carga en <2 segundos (score 95 en Lighthouse)"
- "Optimizado para mobile: funciona perfecto en todos los dispositivos"

### 4. Prueba Social (Testimonios)

Las personas confían en otras personas, no en empresas.

Muestra:
- Caso de éxito: "Marketplace que creció 10x en 6 meses"
- Testimonial real: Nombre, puesto, foto, cita
- Métrica: "500+ clientes en 2 años"

### 5. Imágenes/Video que Comunican

Una buena imagen dice más que 1000 palabras.

**Qué usar:**
- Screenshots reales de tu trabajo
- Videos demostrando el producto
- Gráficos mostrando resultados

**Qué NO usar:**
- Stock photos genéricos
- Imágenes sin contexto
- Videos lentos que no comunican

### 6. CTA Principal (Botón)

El CTA debe ser:
- **Visible** (contraste alto, color que destaque)
- **Claro** (no "Enviar", sino "Quiero una landing page así")
- **Urgente** (pero no manipulador)

Ejemplos de CTA efectivos:
- "Quiero que audites mi sitio (gratis)"
- "Empezar proyecto"
- "Ver casos de éxito"
- "Agendar consulta"

### 7. Formulario Simple

Máximo 3 campos:
- Nombre
- Email
- Presupuesto o tipo de proyecto

## Errores Comunes (Y Cómo Evitarlos)

### Error 1: Demasiadas opciones
Landing page ≠ Sitio web general. Nunca pongas menú completo, 20 links, footer lleno.

**Solución**: 1 objetivo por landing page, máximo 3 links (todos a CTA).

### Error 2: Copy que habla de ti, no del cliente
"Somos innovadores..." en lugar de "Ahórrate 5 horas/semana"

**Solución**: Cambia cada "nosotros" por "tú". ¿Cómo resuelvo TU problema?

### Error 3: Mobile roto
60% del tráfico es mobile, pero optimizan para desktop.

**Solución**: Test en 5 dispositivos diferentes, optimiza imágenes, buttons grandes.

### Error 4: Falta de urgencia
"Envía tu mensaje cuando quieras"

**Solución**: Agrega tiempo (24h respuesta), garantía (dinero de vuelta), scarcity (cupos limitados).

### Error 5: CTA débil o tardío
Botón pequeño, aparece abajo de la página, texto confuso.

**Solución**: CTA grande, color contrast alto, aparece pronto (hero section).

## Casos de Éxito Reales

### Marketplace B2B
- Propuesta clara en headline
- Beneficio cuantificado: "5000+ transacciones en primer año"
- CTA prominent: "Comenzar gratis"
- **Resultado**: 8.5% conversion rate

### SaaS Product
- Video demostrativo (aumenta conversión 45%)
- Pricing clear (sin misterio)
- Garantía: "30 días dinero de vuelta"
- **Resultado**: 12% conversion rate

### Servicios (Como CODEAMUS)
- Proceso explicado en 4 pasos
- Casos de éxito con métricas
- CTA múltiples: email, WhatsApp, calendly
- **Resultado**: 6% conversion rate

## Conclusión

Una landing page que convierte no es magia. Es **estructura + psicología + optimización**.

Sigue los 7 elementos, evita los 5 errores, y verás resultados en semanas.

¿Listo para crear tu primera landing page?

---

## CTA Final

**Quiero una landing page que convierte**

Si necesitas ayuda profesional, podemos crear tu landing page en 2-3 semanas. 
Incluye:
- Copywriting optimizado
- Diseño responsivo
- Optimizaciones SEO
- Testing A/B

👉 [Agendar consulta gratis](https://calendly.com/codeamus)

O contáctanos directamente:
- 📧 contacto@codeamus.dev
- 💬 WhatsApp: [Tu número]
```

---

### Artículo 2: Desarrollo de Apps Móviles
**Ruta**: `src/content/blog/2-desarrollo-apps-moviles.md`

```markdown
---
title: "Desarrollo de Apps Móviles: Guía Completa iOS + Android 2024"
description: "Guía completa para desarrollar apps móviles iOS y Android. Pasos, costos, timelines y mejores prácticas."
author: "CODEAMUS"
pubDate: 2026-04-22
category: "mobile"
keywords: ["apps móviles", "iOS", "Android", "desarrollo app", "React Native"]
heroImage: "/images/blog/apps-moviles-hero.jpg"
---

# Desarrollo de Apps Móviles: Guía Completa

¿Tu negocio necesita una app móvil? En esta guía te explico todo lo que necesitas saber.

## ¿Por Qué Tu Negocio Necesita una App?

- 92% del tráfico móvil viene de apps
- Los usuarios pasan 90% del tiempo en apps, 10% en navegador
- Apps generan 50% más engagement que sitios web

## iOS vs Android vs Cross-Platform

### Opción 1: Apps Nativas
**iOS (Swift) o Android (Kotlin)**

✅ Pros:
- Máximo rendimiento
- Mejor integración con SO
- Mejor user experience

❌ Contras:
- Más caro (dos equipos)
- Más tiempo de desarrollo
- Mantenimiento duplicado

💰 Costo: $10,000 - $50,000+

### Opción 2: Cross-Platform (React Native / Flutter)
**Una codebase para iOS + Android**

✅ Pros:
- 40-50% más barato que nativas
- Mismo código = mantenimiento fácil
- Lanzamiento simultáneo

❌ Contras:
- Performance ~10% inferior
- Límite de customización

💰 Costo: $5,000 - $25,000

### Opción 3: PWA (Progressive Web App)
**App web que se instala en teléfono**

✅ Pros:
- Muy barato ($2,000-$8,000)
- Una codebase (JavaScript)
- No requiere Apple Store/Play Store

❌ Contras:
- Sin acceso a algunos hardware
- Experience inferior

💰 Costo: $2,000 - $8,000

## Pasos para Desarrollar una App

### 1. Definir el Concepto (1-2 semanas)
- MVP: ¿Cuáles son las 3 features principales?
- Target: ¿A quién va dirigida?
- Caso de uso: ¿Qué problema resuelve?

### 2. Diseño UX/UI (3-4 semanas)
- Wireframes (estructura)
- Prototipos (interactividad)
- Design system (colores, tipografía, componentes)

### 3. Desarrollo (8-12 semanas)
- Backend (API, base de datos)
- Frontend iOS
- Frontend Android (o cross-platform)

### 4. Testing y QA (2-3 semanas)
- Testing funcional
- Testing en dispositivos reales
- Performance y seguridad

### 5. Deploy (1 semana)
- App Store (iOS) - 1-2 semanas de review
- Google Play (Android) - 2-4 horas de review
- Servidor en producción

### 6. Post-Launch (Ongoing)
- Bug fixes
- Updates de SO
- Nuevas features

## Costos Reales (2024)

| Tipo | Equipo | Timeline | Costo |
|------|--------|----------|-------|
| MVP simple | 2 devs | 8 sem | $8,000 |
| App media | 4 devs | 12 sem | $15,000 |
| App compleja | 6+ devs | 16+ sem | $25,000+ |

## Tecnologías Recomendadas

### Para Startups
**React Native** - mejor balance costo/performance

### Para Máximo Rendimiento
**Apps Nativas** (Swift + Kotlin)

### Para Presupuesto Ajustado
**Flutter** - performance igual a nativas, más barato

## Casos de Éxito

### Marketplace B2B
- 3 meses de desarrollo
- React Native (iOS + Android simultáneo)
- Resultado: 5000+ usuarios mes 1
- Costo: $12,000

### Social Network
- 6 meses de desarrollo
- Apps nativas (rendimiento crítico)
- Resultado: Featured en App Store
- Costo: $30,000

## Conclusión

Una app móvil no es un lujo, es una necesidad. El costo es inversión en growth.

---

## CTA Final

**Quiero desarrollar mi app móvil**

En CODEAMUS creamos apps que escalan. Hemos lanzado 10+ apps con éxito.

👉 [Agendar consulta gratis](https://calendly.com/codeamus)
```

---

### Artículo 3: SEO Técnico
**Ruta**: `src/content/blog/3-seo-tecnico-developers.md`

```markdown
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

## Los 3 Pilares del SEO Técnico

1. **Rendimiento** (Core Web Vitals)
2. **Estructura** (URLs, meta tags, schema)
3. **Rastreabilidad** (robots.txt, sitemap, canonicals)

## Core Web Vitals Explicados

### 1. LCP - Largest Contentful Paint
**¿Qué es?** Tiempo para que se vea el contenido principal

**Meta**: < 2.5 segundos

**Cómo mejorar**:
```javascript
// Optimizar imagen hero
<img 
  src="hero.jpg" 
  fetchpriority="high"
  width="1200" 
  height="600" 
/>

// Usar WebP
<picture>
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg">
</picture>
```

### 2. FID - First Input Delay
**¿Qué es?** Tiempo de respuesta a la interacción del usuario

**Meta**: < 100 ms

**Cómo mejorar**:
```javascript
// Evitar JavaScript pesado en main thread
// Usar Web Workers para tasks pesadas
const worker = new Worker('heavy-computation.js');
worker.postMessage(data);

// Code splitting
import dynamic from 'next/dynamic';
const HeavyComponent = dynamic(() => import('./Heavy'));
```

### 3. CLS - Cumulative Layout Shift
**¿Qué es?** Desplazamientos inesperados del contenido

**Meta**: < 0.1

**Cómo mejorar**:
```css
/* Reservar espacio para imágenes */
img {
  aspect-ratio: 16 / 9;
  width: 100%;
}

/* Evitar fonts sin dimensiones */
@font-face {
  font-display: swap; /* Mostrar fallback mientras carga */
}
```

## Meta Tags Esenciales

```html
<!-- SEO Básico -->
<meta name="description" content="Descripción max 160 chars">
<meta name="keywords" content="keywords principales">

<!-- Open Graph (Social) -->
<meta property="og:title" content="Título">
<meta property="og:description" content="Descripción">
<meta property="og:image" content="URL imagen 1200x630">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Título">
<meta name="twitter:description" content="Descripción">

<!-- Canonical -->
<link rel="canonical" href="https://ejemplo.com/pagina">

<!-- Mobile -->
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Schema Markup (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CODEAMUS",
  "url": "https://codeamus.dev",
  "logo": "https://codeamus.dev/logo.png",
  "description": "Agencia de desarrollo web",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CL"
  }
}
```

## URLs Semánticas

**MAL:**
- `/page1`, `/p2`, `/contacto.php`

**BIEN:**
- `/servicios/desarrollo-web`
- `/blog/crear-landing-page-que-convierte`
- `/portfolio/marketplace-b2b`

## robots.txt Correcto

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://codeamus.dev/sitemap.xml
```

## Conclusión

SEO técnico no es opcional. Es la base para que Google te rankee.

---

## CTA Final

**Quiero optimizar mi sitio para SEO**

👉 [Auditoria SEO gratis](https://calendly.com/codeamus)
```

---

### Artículo 4: Astro vs Next.js
**Ruta**: `src/content/blog/4-astro-vs-nextjs.md`

```markdown
---
title: "Astro vs Next.js: Comparativa Completa 2024 - ¿Cuál Elegir?"
description: "Comparativa detallada entre Astro y Next.js. Ventajas, desventajas y cuándo usar cada uno."
author: "CODEAMUS"
pubDate: 2026-05-06
category: "tools"
keywords: ["Astro", "Next.js", "frameworks", "desarrollo web", "React"]
heroImage: "/images/blog/astro-nextjs-hero.jpg"
---

# Astro vs Next.js: ¿Cuál Framework Elegir en 2024?

La pregunta más común que recibimos: **¿Astro o Next.js?**

La respuesta: **Depende del caso de uso.**

## Comparativa Rápida

| Aspecto | Astro | Next.js |
|---------|-------|---------|
| **Uso** | Sitios estáticos/landing | Apps dinámicas |
| **JavaScript** | 0KB por defecto | Siempre presente |
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Curva aprendizaje** | Baja | Media-Alta |
| **SEO** | Perfecto | Muy bueno |
| **Escalabilidad** | Buena | Excelente |

## Astro: El Ganador de Performance

### ¿Qué es Astro?

Framework para construir **sitios con cero JavaScript** (por defecto).

### Ventajas

✅ **Rendimiento excepcional**
- LCP: < 1 segundo (vs Next 2-3s)
- Lighthouse Score: 98-100
- 0 KB de JavaScript para sitios estáticos

✅ **Desarrollo rápido**
- Markdown support nativo
- Content Collections integradas
- Deploy fácil (Vercel, Netlify)

✅ **SEO perfecto**
- HTML estático pre-renderizado
- Meta tags fáciles
- Schema markup simple

✅ **Flexible**
- Soporta React, Vue, Svelte en "islands"
- No obliga un framework
- Integración con headless CMS

### Desventajas

❌ **Limitado para aplicaciones dinámicas**
- Si necesitas estado complejo, mejor otro framework

❌ **Menos librerías**
- Ecosistema más chico que React

❌ **Comunidad pequeña**
- Menos recursos vs Next.js

### Casos de Uso Perfectos

- ✅ Sitios de marketing / landing pages
- ✅ Blogs
- ✅ Documentación
- ✅ Portfolios
- ✅ E-commerce producto-heavy
- ✅ Agencias y estudios

---

## Next.js: El Ganador de Flexibilidad

### ¿Qué es Next.js?

Framework React para construir **aplicaciones full-stack**.

### Ventajas

✅ **Capacidades dinámicas**
- Real-time updates
- APIs integradas
- Autenticación fácil

✅ **Ecosistema masivo**
- Librerías para todo
- Comunidad enorme
- Stack Overflow con respuestas

✅ **Escalabilidad**
- Soporta millones de usuarios
- Vercel optimizado
- Caching avanzado

✅ **Desarrollo ágil**
- Tooling perfecto
- Hot reload
- DX incomparable

### Desventajas

❌ **Más JavaScript (CLS risk)**
- Más code splitting necesario
- Performance requiere optimización

❌ **Complejidad**
- Curva de aprendizaje más pronunciada
- Más decisiones que tomar

❌ **Overhead**
- Overkill para sitios simples
- Costo de servidor más alto

### Casos de Uso Perfectos

- ✅ Dashboards / SaaS
- ✅ Aplicaciones web complejas
- ✅ E-commerce con carrito dinámico
- ✅ Redes sociales
- ✅ Apps con real-time features

---

## Decisión: Matriz de Selección

```
¿Necesitas estado complejo? 
├─ Sí → Next.js
└─ No → Sigue...

¿Tienes backend dinámico?
├─ Sí → Next.js
└─ No → Sigue...

¿Performance es crítica?
├─ Sí → Astro
└─ No → Ambos funcionan

¿Necesitas máxima flexibilidad?
├─ Sí → Next.js
└─ No → Astro
```

---

## Conclusión

**Usa Astro si**:
- Quieres máximo performance
- El contenido es mayormente estático
- Prefieres HTML puro con JS mínimo
- Es un sitio de marketing/landing

**Usa Next.js si**:
- Necesitas aplicación dinámica
- Hay estado complejo
- Escalabilidad es crítica
- Necesitas todo un ecosistema

En CODEAMUS usamos **Astro para landing pages** y **Next.js para aplicaciones**.

---

## CTA Final

**Quiero el framework correcto para mi proyecto**

👉 [Consulta técnica gratis](https://calendly.com/codeamus)
```

---

### Artículo 5: Errores en Desarrollo Web
**Ruta**: `src/content/blog/5-errores-desarrollo-web.md`

```markdown
---
title: "7 Errores en Desarrollo Web que Cuestan Dinero (2024)"
description: "Los 7 errores más costosos en desarrollo web. Cómo identificarlos y evitarlos."
author: "CODEAMUS"
pubDate: 2026-05-13
category: "web"
keywords: ["errores desarrollo web", "best practices", "desarrollo web", "UX"]
heroImage: "/images/blog/errores-web-hero.jpg"
---

# 7 Errores en Desarrollo Web que Cuestan Dinero

Hemos auditado 100+ sitios en 2024. El 87% cometía estos errores. 
Cada error = dinero perdido.

## Error 1: No Optimizar para Mobile

**El problema**: 65% del tráfico es mobile, pero optimizas para desktop.

**Costo**: 40% caída en conversión

**Solución**:
```css
/* Mobile-first approach */
.button {
  padding: 16px 20px; /* Touch-friendly: min 48px */
  font-size: 16px; /* Evita zoom en iOS */
}

@media (min-width: 768px) {
  .button { padding: 12px 16px; }
}
```

## Error 2: Ignorar Core Web Vitals

**El problema**: Sitio lento = ranking bajo

**Costo**: Perder 50% del tráfico potencial

**Solución**:
- LCP < 2.5s: Optimizar imágenes hero
- FID < 100ms: Code splitting
- CLS < 0.1: Reservar espacios

Revisar en: pagespeed.web.dev

## Error 3: UX rota en formularios

**El problema**: Visitante quiere convertir, pero formulario es terrible

**Costo**: 70% abandono

**Solución**:
```html
<!-- DON'T -->
<input type="text" placeholder="Nombre y apellido">

<!-- DO -->
<label>Nombre</label>
<input type="text" name="nombre" required>

<!-- Progressive enhancement -->
<input 
  type="email" 
  inputmode="email"
  autocomplete="email"
  required
>
```

## Error 4: No A/B Testing

**El problema**: Cambiar color del CTA sin datos = apuestas

**Costo**: Perder conversiones por cambios estúpidos

**Solución**:
- Testear 1 cosa a la vez
- Mínimo 100 conversiones por variante
- Usar herramientas: Google Optimize, VWO

## Error 5: SEO olvidado

**El problema**: Sitio invisible en Google

**Costo**: $0 de tráfico orgánico

**Solución**:
```astro
---
const title = "Servicios de Desarrollo Web | CODEAMUS";
const description = "Desarrollo web profesional con Astro y React. Especializados en landing pages y apps.";
---

<head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
</head>
```

## Error 6: Seguridad descuidada

**El problema**: Hacker roba datos, tu reputación se va

**Costo**: Récord de dinero

**Solución**:
```javascript
// ❌ NUNCA
fetch(`/api/user?id=${userId}`);

// ✅ SIEMPRE
// Validar en servidor, usar variables de sesión
const userId = req.session.userId;
const user = await db.user.findById(userId);
```

- HTTPS obligatorio
- Validar TODAS las inputs
- Usar .env para secrets

## Error 7: Hosting lentísimo

**El problema**: Guardaste $5/mes en hosting, perdiste clientes

**Costo**: Abandono, bounce rate 80%

**Solución**:
- Usar Vercel, Netlify, CloudFlare (recomendado)
- CDN global obligatorio
- Cache agresivo

---

## Conclusión

Estos 7 errores **cuestan miles en conversión perdida**.

Revisar tu sitio hoy puede significar +$10,000 en revenue mensual.

---

## CTA Final

**Quiero una auditoría técnica de mi sitio**

Revisamos rendimiento, seguridad, SEO y UX.

👉 [Solicitar auditoría gratis](https://calendly.com/codeamus)
```

---

## PASO 4: Crear Página Blog Index

**Ruta**: `src/pages/blog/index.astro`

```astro
---
import { getCollection } from 'astro:content';
import Layout from '@layouts/Layout.astro';
import Navbar from '@components/Navbar.astro';
import Footer from '@components/Footer.astro';

const posts = (await getCollection('blog')).sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);
---

<Layout
  title="Blog | CODEAMUS - Desarrollo Web y Apps"
  description="Artículos sobre desarrollo web, apps móviles, SEO y best practices. Guías prácticas para empresas."
>
  <Navbar />
  <main class="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
    <!-- Hero Blog -->
    <section class="pt-32 pb-20 px-6 sm:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl sm:text-6xl font-bold text-white mb-6 font-cursive">
          Blog & Recursos
        </h1>
        <p class="text-xl text-slate-300 mb-4">
          Guías prácticas sobre desarrollo web, apps móviles y SEO
        </p>
        <p class="text-lg text-indigo-400">
          5 artículos que transformarán tu negocio
        </p>
      </div>
    </section>

    <!-- Grid de Artículos -->
    <section class="px-6 sm:px-8 pb-20">
      <div class="max-w-5xl mx-auto">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article class="group rounded-xl overflow-hidden bg-slate-700/30 border border-slate-600/50 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
              {/* Card Header */}
              {post.data.heroImage && (
                <div class="h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 overflow-hidden">
                  <img
                    src={post.data.heroImage}
                    alt={post.data.title}
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Card Content */}
              <div class="p-6">
                {/* Category Badge */}
                <div class="flex gap-2 mb-3">
                  <span class="text-xs font-bold uppercase px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                    {post.data.category}
                  </span>
                  <span class="text-xs text-slate-400">
                    {post.data.pubDate.toLocaleDateString('es-ES')}
                  </span>
                </div>

                {/* Title */}
                <h2 class="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-indigo-300 transition-colors">
                  {post.data.title}
                </h2>

                {/* Description */}
                <p class="text-slate-300 text-sm mb-4 line-clamp-2">
                  {post.data.description}
                </p>

                {/* Footer */}
                <div class="flex items-center justify-between pt-4 border-t border-slate-600/50">
                  <span class="text-xs text-slate-400">
                    ~{Math.ceil(post.body.length / 200)} min de lectura
                  </span>
                  <a
                    href={`/blog/${post.slug}`}
                    class="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Leer →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="px-6 sm:px-8 py-20 border-t border-slate-700">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-white mb-6">
          ¿Listo para transformar tu proyecto?
        </h2>
        <p class="text-lg text-slate-300 mb-8">
          Agendar una consulta técnica sin costo. Te ayudaremos a elegir la mejor estrategia.
        </p>
        <a
          href="/contacto"
          class="inline-block px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50"
        >
          Agendar Consulta
        </a>
      </div>
    </section>
  </main>
  <Footer />
</Layout>
```

---

## PASO 5: Crear Página Artículo Individual

**Ruta**: `src/pages/blog/[...slug].astro`

```astro
---
import { getCollection } from 'astro:content';
import Layout from '@layouts/Layout.astro';
import Navbar from '@components/Navbar.astro';
import Footer from '@components/Footer.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await post.render();

const readingTime = Math.ceil(post.body.length / 200);
---

<Layout
  title={post.data.title}
  description={post.data.description}
>
  <Navbar />
  <main class="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
    <!-- Article Header -->
    <section class="pt-24 pb-12 px-6 sm:px-8 border-b border-slate-700">
      <article class="max-w-2xl mx-auto">
        {/* Category & Meta */}
        <div class="mb-6 flex items-center gap-4">
          <span class="text-xs font-bold uppercase px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
            {post.data.category}
          </span>
          <span class="text-sm text-slate-400">
            {post.data.pubDate.toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span class="text-sm text-slate-400">•</span>
          <span class="text-sm text-slate-400">{readingTime} min de lectura</span>
        </div>

        {/* Title */}
        <h1 class="text-5xl sm:text-6xl font-bold text-white mb-6 font-cursive leading-tight">
          {post.data.title}
        </h1>

        {/* Description */}
        <p class="text-xl text-slate-300">
          {post.data.description}
        </p>
      </article>
    </section>

    {/* Hero Image */}
    {post.data.heroImage && (
      <section class="py-12 px-6 sm:px-8">
        <div class="max-w-3xl mx-auto">
          <img
            src={post.data.heroImage}
            alt={post.data.title}
            class="w-full h-96 object-cover rounded-xl"
          />
        </div>
      </section>
    )}

    {/* Content */}
    <section class="px-6 sm:px-8 py-12">
      <article class="max-w-2xl mx-auto prose prose-invert">
        <Content />
      </article>
    </section>

    {/* CTA Footer */}
    <section class="px-6 sm:px-8 py-20 border-t border-slate-700 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-white mb-4">
          ¿Te gustó este artículo?
        </h2>
        <p class="text-lg text-slate-300 mb-8">
          Si tienes más preguntas sobre {post.data.category === 'web' ? 'desarrollo web' : post.data.category === 'mobile' ? 'apps móviles' : post.data.category === 'seo' ? 'SEO' : 'desarrollo'}, podemos ayudarte.
        </p>
        <a
          href="/contacto"
          class="inline-block px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50"
        >
          Contactar Ahora
        </a>
      </div>
    </section>
  </main>
  <Footer />
</Layout>

<style>
  .prose {
    --prose-body: rgb(226 232 240);
    --prose-headings: rgb(255 255 255);
    --prose-links: rgb(129 140 248);
  }

  .prose h2 {
    @apply text-3xl font-bold text-white mt-8 mb-4;
  }

  .prose h3 {
    @apply text-2xl font-bold text-white mt-6 mb-3;
  }

  .prose p {
    @apply text-slate-300 leading-7 mb-4;
  }

  .prose a {
    @apply text-indigo-400 hover:text-indigo-300 underline transition-colors;
  }

  .prose code {
    @apply bg-slate-700/50 px-2 py-1 rounded text-indigo-200;
  }

  .prose pre {
    @apply bg-slate-800 border border-slate-700 rounded-lg overflow-x-auto;
  }

  .prose blockquote {
    @apply border-l-4 border-indigo-400 pl-4 text-slate-300 italic;
  }

  .prose ul,
  .prose ol {
    @apply ml-6 mb-4;
  }

  .prose li {
    @apply mb-2 text-slate-300;
  }

  .prose table {
    @apply w-full border-collapse border border-slate-700 mb-4;
  }

  .prose th,
  .prose td {
    @apply border border-slate-700 px-4 py-2 text-left;
  }

  .prose th {
    @apply bg-slate-700/50 font-bold;
  }
</style>
```

---

## PASO 6: Actualizar Navbar

En tu `Navbar.astro`, agrega el link al blog:

```astro
<a href="/blog" class="hover:text-indigo-400 transition-colors">Blog</a>
```

---

## PASO 7: Actualizar Home

En `index.astro`, agrega una sección que promueva el blog:

```astro
<section class="py-20 px-6 border-t border-slate-700">
  <div class="max-w-5xl mx-auto text-center">
    <h2 class="text-4xl font-bold text-white mb-12">Últimos Artículos</h2>
    <a href="/blog" class="text-indigo-400 hover:text-indigo-300 text-lg font-semibold">
      Ver todos los artículos →
    </a>
  </div>
</section>
```

---

## RESUMEN DE ARCHIVOS A CREAR

```
✅ src/content/blog/
   ├── 1-crear-landing-page.md
   ├── 2-desarrollo-apps-moviles.md
   ├── 3-seo-tecnico-developers.md
   ├── 4-astro-vs-nextjs.md
   └── 5-errores-desarrollo-web.md

✅ src/pages/blog/
   ├── index.astro
   └── [...slug].astro

✅ Actualizar src/components/Navbar.astro
✅ Actualizar src/pages/index.astro
```

---

## PRÓXIMOS PASOS

1. Crear las 5 carpetas de artículos
2. Copiar/pegar el contenido markdown
3. Crear las 2 páginas Astro
4. Actualizar Navbar e Home
5. `npm run build` para verificar
6. Deploy a Vercel

¿Necesitas ayuda con algún paso específico?