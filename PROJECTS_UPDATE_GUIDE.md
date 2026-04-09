# Guía de Actualización: Proyectos Portfolio

## ✅ Completado

### 1. Estructura de Datos
- [x] Schema actualizado (`src/content/config.ts`)
- [x] Soporte para appStore, googlePlay, type, technologies, metrics
- [x] Validación con Zod

### 2. Proyectos Creados
- [x] **ContaMacros** - `/src/content/projects/contamacros.md`
  - Full-Stack: Web + Apps iOS/Android (Expo)
  - Stack: React Native, Supabase, OpenAI Vision
  - Web: https://www.contamacros.cl/
  - Apps: Próximamente en tiendas

- [x] **Dayloop** - `/src/content/projects/dayloop.md`
  - Full-Stack: Web + Apps iOS/Android (Expo)
  - Stack: React Native, SQLite, Clean Architecture
  - Web: https://www.dayloop.cl/
  - Apps: 
    - iOS: https://apps.apple.com/us/app/dayloop-h%C3%A1bitos-diarios/id6757437094
    - Android: https://play.google.com/store/apps/details?id=com.codeamus.dayloop

### 3. Componente Projects.astro
- [x] Mejorado para soportar nuevos fields
- [x] Agregados íconos App Store y Google Play
- [x] Badges de tecnologías
- [x] Mejor UI para múltiples CTAs

### 4. Git Commit
```
feat: actualizar sección de proyectos - eliminar Cheffify, agregar ContaMacros y Dayloop
Commit: c9dc358
Branch: redesign
```

---

## 📝 Tareas Pendientes (Opcional)

### 1. Agregar Screenshots
Para mejorar la presentación visual, necesitas:

**Ubicación:** `/public/assets/images/projects/`

**Archivos a crear:**
```
contamacros-desktop.webp    (1200x675px, 60-100KB)
contamacros-mobile.webp     (600x1000px, 40-80KB)
dayloop-desktop.webp        (1200x675px, 60-100KB)
dayloop-mobile.webp         (600x1000px, 40-80KB)
```

**Tips:**
- Captura screenshot desktop (hero/landing)
- Captura screenshot mobile (app o responsive)
- Convierte a WebP para optimizar
- Usa compresión: ~70% quality

### 2. Validar Links
Verifica que todos los links funcionan:

```bash
# Validar links en tests
- https://www.contamacros.cl/ ✓
- https://www.dayloop.cl/ ✓
- https://apps.apple.com/us/app/dayloop-h%C3%A1bitos-diarios/id6757437094 ✓
- https://play.google.com/store/apps/details?id=com.codeamus.dayloop ✓
```

### 3. Optimizar Imágenes (si agregas)
```bash
# Convertir a WebP
npx sharp-cli input.png -o output.webp --quality 70

# O usar online tool
# https://cloudconvert.com/
```

### 4. Testing
```bash
# Build local
npm run build

# Check TypeScript
npm run astro check

# Preview
npm run preview
```

### 5. Deploy (cuando esté listo)
```bash
# Push a redesign branch
git push origin redesign

# Crear PR a main
# Vercel deployará automáticamente en preview
```

---

## 🎨 Cómo Usar el Nuevo Sistema

### Agregar un Nuevo Proyecto

1. **Crear archivo:** `src/content/projects/nuevo-proyecto.md`

2. **Estructura:**
```markdown
---
title: Mi Proyecto
slug: mi-proyecto
description: "Descripción breve del proyecto (2-3 líneas)"
type: web  # web | app | fullstack
image_desktop: /assets/images/projects/proyecto-desktop.webp
image_mobile: /assets/images/projects/proyecto-mobile.webp
website: "https://mi-proyecto.com"
appStore: "https://..." # opcional
googlePlay: "https://..." # opcional
technologies:
  - astro
  - react
  - tailwind
  - supabase
metaTitle: "Mi Proyecto | CODEAMUS"
metaDescription: "Descripción SEO del proyecto"
metrics:
  downloads: "5000+"
  rating: "4.9/5"
---

## Contenido del Caso de Estudio

Markdown aquí...
```

3. **Automático:**
   - Se agregará automáticamente a la galería
   - Los links aparecerán según si están definidos
   - Las tecnologías se mostrarán como badges

---

## 📊 Campos Disponibles

```typescript
{
  title: string,                    // Requerido: Nombre del proyecto
  slug: string,                     // Requerido: URL slug
  description: string,              // Requerido: Descripción breve
  image_desktop: string,            // Requerido: Ruta imagen desktop
  image_mobile: string,             // Requerido: Ruta imagen mobile
  website: string (URL),            // Requerido: URL del sitio web
  appStore?: string (URL),          // Opcional: URL App Store
  googlePlay?: string (URL),        // Opcional: URL Google Play
  github?: string (URL),            // Opcional: URL GitHub
  type?: "web" | "app" | "fullstack", // Default: "web"
  technologies?: string[],          // Opcional: Stack técnico
  metaTitle?: string,               // Opcional: SEO title
  metaDescription?: string,         // Opcional: SEO description
  metrics?: {                        // Opcional: Métricas
    downloads?: string,
    rating?: string,
    reviews?: string,
  }
}
```

---

## 🚀 Próxima Fase (Recomendado)

Después de validar que todo funciona:

1. **Blog Posts** - Crear artículos detallados:
   - "Cómo construimos ContaMacros"
   - "Dayloop: Simplicidad en tracking de hábitos"
   - Stack techniques: Expo OTA Updates, Clean Architecture, etc.

2. **Case Studies** - Expandir la sección de `[slug].astro` con:
   - Problema/Solución
   - Proceso de desarrollo
   - Resultados/Métricas
   - Testimonials (si aplica)

3. **Showcase Premium** - Agregar video o demostración interactiva:
   - Screenshots carrusel
   - Video demo de 30-60 segundos
   - Métricas en tiempo real

4. **SEO** - Optimizar:
   - Meta tags por proyecto
   - Schema.org markup
   - Sitemap inclusion
   - Open Graph tags

---

## 📞 Contacto / Preguntas

Si necesitas:
- Agregar más proyectos
- Cambiar estructura
- Agregar features
- Optimizar screenshots

Avísame y lo implementamos. 🎯
