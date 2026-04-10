# 📝 Cómo Agregar Artículos al Blog

**Guía paso a paso para escribir y publicar artículos en CODEAMUS**

---

## 🚀 Inicio Rápido

```bash
# 1. Crear archivo nuevo
touch src/content/blog/tu-articulo-slug.md

# 2. Copiar template (ver más abajo)
# 3. Escribir contenido
# 4. Guardar y hacer commit
# 5. Push a main (deployment automático)
```

---

## 📋 Template Base

Copia este template y llena los campos:

```markdown
---
title: "Tu Título Principal Aquí"
description: "Descripción corta (150-160 caracteres para SEO)"
pubDate: 2026-04-10
author: "Matías"
keywords: ["palabra-clave-1", "palabra-clave-2", "palabra-clave-3"]
---

# Introducción
Primer párrafo (100-150 palabras) que enganche al lector.

## Sección 1
Contenido principal...

## Sección 2
Más contenido...

## Conclusión
Resumen y CTA final.

---

**Necesitas una web como esta?** [Contáctame →](https://wa.me/56912345678?text=...)
```

---

## 📂 Ubicación Correcta

```
✅ CORRECTO:   src/content/blog/astro-vs-nextjs.md
❌ INCORRECTO: src/blog/astro-vs-nextjs.md
❌ INCORRECTO: src/pages/blog/astro-vs-nextjs.md
```

---

## 🏷️ Formato del Frontmatter

```yaml
---
title: "String - Título del artículo (50-60 caracteres)"
description: "String - Meta description (150-160 caracteres para Google)"
pubDate: 2026-04-10  # Formato YYYY-MM-DD
author: "Matías"     # Tu nombre
keywords: ["keyword1", "keyword2", "keyword3"]  # Array de 3-5 palabras clave
---
```

**Ejemplos reales:**

```yaml
# ✅ BIEN
---
title: "Guía Completa: Landing Pages que Convierten en 2026"
description: "Aprende a crear landing pages efectivas. Estructura, copywriting, CTAs y ejemplos reales que generan leads."
pubDate: 2026-04-10
author: "Matías"
keywords: ["landing page", "conversión", "desarrollo web"]
---

# ❌ MAL
---
title: "articulo"
description: "mi articulo sobre cosas"
pubDate: 04-10-2026
author: Matías
keywords: cosas, articulo
---
```

---

## ✍️ Estructura Recomendada

### 1. **Introducción (150-200 palabras)**
- Plantea el problema
- Por qué es importante
- Lo que aprenderá el lector

### 2. **Desarrollo (500-1000 palabras)**
- 3-5 secciones principales
- Subtítulos claros (H2, H3)
- Ejemplos prácticos
- Código si aplica (con syntax highlighting)

### 3. **Conclusión (100-150 palabras)**
- Resumen puntos clave
- Call-to-action (CTA)
- Link a servicios si aplica

### 4. **Ejemplo Completo**

```markdown
---
title: "7 Errores de Desarrollo Web que Cuestan Dinero"
description: "Evita estos errores comunes que reducen conversión y SEO. Guía para empresas y freelancers."
pubDate: 2026-04-10
author: "Matías"
keywords: ["desarrollo web", "errores", "SEO", "conversión"]
---

# 7 Errores de Desarrollo Web que Cuestan Dinero

La mayoría de sitios web tienen problemas que directamente impactan el negocio. Desde velocidad lenta hasta diseño anticuado, estos errores pierden leads y clientes.

En esta guía te muestro los 7 más comunes y cómo evitarlos.

## 1. Ignorar Mobile First

Más del 70% del tráfico viene de móvil. Si tu sitio no es mobile-responsive, estás perdiendo clientes.

**El error:**
```html
<!-- ❌ NO HACER -->
<div style="width: 1200px;">Contenido</div>
```

**La solución:**
```html
<!-- ✅ HACER -->
<div class="w-full md:w-[1200px]">Contenido</div>
```

Usa Tailwind CSS o media queries para responsividad.

## 2. Pobre Core Web Vitals

Google penaliza sitios lentos. Si tus Core Web Vitals están rojos, tu ranking sufre.

**Checklist:**
- ✅ Imágenes optimizadas (WebP, lazy loading)
- ✅ CSS y JS minificados
- ✅ Favicon cargado
- ✅ Fuentes locales (no externas)

Usa [PageSpeed Insights](https://pagespeed.web.dev/) para auditar.

## 3. Sin SEO Técnico

Meta tags, keywords, schema markup... sin esto, Google no te encuentra.

**Lo mínimo:**
- ✅ Meta title (50-60 caracteres)
- ✅ Meta description (150-160 caracteres)
- ✅ H1 por página
- ✅ Alt text en imágenes
- ✅ Sitemap.xml

## 4. Formulario Complejo

Si pides 10 campos, el usuario abandona. Mantén formularios simples.

**Buena práctica:**
- Máximo 3 campos iniciales
- Validación en tiempo real
- Mensaje success claro

## 5. Sin Llamadas a la Acción (CTAs)

No basta tener botones. Deben ser estratégicos y claros.

**CTAs efectivos:**
- "Solicitar Demo" (no "Enviar")
- "Ver Precios" (no "Más info")
- "Agendar Llamada" (no "Contacto")

## 6. Colores Pobres e Inconsistencia

Cambiar colores en cada sección confunde al usuario. Mantén una paleta consistente.

**Plantilla:**
```
Primary: #5b5bff (Botones CTA)
Dark: #0f172a (Fondo)
Light: #ffffff (Texto)
Accent: #ffa14d (Énfasis)
```

## 7. Sin Analytics

Si no mides, no mejoras. Instala Google Analytics 4.

**Tracking básico:**
- Page views
- Click tracking en CTAs
- Form submissions
- Scroll depth

---

## Conclusión

Estos 7 errores cuesta dinero reales a tu negocio. Si tienes alguno, corregirlo puede duplicar tus conversiones.

¿Tu sitio web necesita una revisión? **[Contáctame →](https://wa.me/56912345678?text=Hola%20Matías...)**
```

---

## 🔑 SEO Guidelines para Artículos

### Meta Description
- **Largo**: 150-160 caracteres
- **Incluye**: palabra clave principal + propuesta de valor
- **Ejemplo**: "Aprende a crear landing pages efectivas. Estructura, copywriting, CTAs y ejemplos reales."

### Keywords
- **Cantidad**: 3-5 palabras clave máximo
- **Tipos**: 1 principal + 2-4 relacionadas
- **Ejemplo**: ["landing page", "conversión", "copywriting", "desarrollo web"]

### Estructura de Títulos
```
H1: Título principal único (uno solo por página)
H2: Secciones principales
H3: Subsecciones (opcional)
H4+: Rara vez (evitar)
```

### Internal Linking
- Enlaza a otros artículos cuando sea relevante
- Enlaza a servicios al final
- USA anchor text descriptivo

### Imágenes
```markdown
![Descripción relevante - incluye keyword si aplica](URL)
```

---

## 💡 Topics para Artículos (SEO)

**Tier 1 - Alto tráfico potencial:**
- "Guía: Landing Pages que Convierten (2026)"
- "Astro vs Next.js: Cuál elegir para tu proyecto"
- "React Native vs Flutter: Comparativa de apps móviles"
- "SEO Técnico Completo: Cómo posicionar en Google"

**Tier 2 - Conversión:**
- "7 Errores de Desarrollo Web que Cuestan Dinero"
- "Cuánto Cuesta una App Móvil: Guía de Precios"
- "Cómo Elegir Agencia Web: Checklist Completo"

**Tier 3 - Educacional (Autoridad):**
- "Mobile-First: Por qué ya no es opcional"
- "Mejores Prácticas: Core Web Vitals 2026"
- "Formspree vs Alternatives: Email Forms Comparison"

---

## 🚀 Publicar Cambios

```bash
# 1. Guardar archivo
# src/content/blog/nuevo-articulo.md guardado

# 2. Commit
git add src/content/blog/nuevo-articulo.md
git commit -m "docs(blog): agregar artículo sobre [tema]"

# 3. Push
git push origin main

# 4. Vercel despliega automáticamente (2-5 minutos)

# 5. Verificar
# Abre: https://codeamus.dev/blog/nuevo-articulo
```

---

## ✅ Checklist Pre-Publicación

- [ ] Archivo ubicado en: `src/content/blog/slug.md`
- [ ] Título: 50-60 caracteres
- [ ] Description: 150-160 caracteres, incluye keyword
- [ ] Keywords: 3-5 palabras relevantes
- [ ] Fecha: correcta (pubDate)
- [ ] H1: título principal único
- [ ] H2-H3: estructura jerárquica
- [ ] Imágenes: alt text descriptivo
- [ ] Links internos: 2-3 mínimo
- [ ] CTA final: claro y relevante
- [ ] Largo: 500-1500 palabras (mínimo 500)
- [ ] Sin faltas ortográficas
- [ ] Markdown correcto (sin errores de sintaxis)
- [ ] Commit message claro
- [ ] Push a main completado

---

## 🔍 Verificar Publicación

```bash
# 1. Local preview
npm run build
npm run preview
# Abre: http://localhost:3000/blog

# 2. En producción
# https://codeamus.dev/blog/tu-slug
```

---

## 📊 Monitorear Artículos

En Google Search Console:
1. Ve a: https://search.google.com/search-console
2. Selecciona: codeamus.dev
3. Performance → Nuevas páginas
4. Monitorea posicionamiento y clics

---

## 🎨 Markdown Tips

```markdown
# Título H1
## Subtítulo H2
### Sub-subtítulo H3

**Negrita**
*Cursiva*
~~Tachado~~

- Viñeta 1
- Viñeta 2

1. Numerado 1
2. Numerado 2

> Cita o destacado

[Link](https://ejemplo.com)

![Imagen](https://url)

`código inline`

\`\`\`javascript
código con syntax highlighting
\`\`\`
```

---

**Ver más**: [SEO y optimización](/docs/guias/SEO.md) | [Blog index](https://codeamus.dev/blog)
