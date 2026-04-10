# 🏗️ Estructura del Proyecto

**Guía completa de cómo está organizado CODEAMUS**

---

## 📁 Estructura Completa

```
portfolio/
├── docs/                          # 📚 DOCUMENTACIÓN CENTRALIZADA
│   ├── README.md                  # Índice principal
│   ├── guias/
│   │   ├── ESTRUCTURA.md          # Este archivo
│   │   ├── BLOG.md                # Cómo agregar artículos
│   │   ├── PROYECTOS.md           # Cómo agregar proyectos
│   │   └── SEO.md                 # Optimización SEO
│   ├── precios/
│   │   ├── PRECIOS.md             # Tabla de precios actual
│   │   ├── ESTRATEGIA.md          # Cómo se calculan precios
│   │   └── MERCADO.md             # Análisis de mercado
│   ├── setup/
│   │   ├── README.md              # Setup inicial
│   │   ├── DEPLOY.md              # Deploy a Vercel
│   │   ├── FORMSPREE.md           # Integración de emails
│   │   ├── GSC.md                 # Google Search Console
│   │   └── WHATSAPP.md            # Mensajes contextuales
│   ├── troubleshooting/
│   │   ├── README.md              # Índice troubleshooting
│   │   ├── EMAILS.md              # Problemas con emails
│   │   ├── LINTER.md              # Errores de linter
│   │   └── NAVEGACION.md          # Problemas de navegación
│   └── referencia/
│       ├── ENV.md                 # Variables de entorno
│       ├── COMPONENTES.md         # Estructura de componentes
│       └── SCHEMA.md              # Schema markup SEO
│
├── src/
│   ├── components/
│   │   ├── Navbar.astro           # Barra de navegación + móvil
│   │   ├── Footer.astro           # Pie de página
│   │   ├── Principal.astro        # Sección hero
│   │   ├── Services.astro         # 3 servicios con precios
│   │   ├── Projects.astro         # Grid de proyectos
│   │   ├── HowWork.astro          # 4 pasos de proceso
│   │   ├── About.astro            # Sección "Sobre nosotros"
│   │   ├── Faq.astro              # Preguntas frecuentes
│   │   └── ContactForm.tsx        # Formulario (React Island)
│   │
│   ├── layouts/
│   │   └── Layout.astro           # Layout base con meta tags
│   │
│   ├── pages/
│   │   ├── index.astro            # Home principal
│   │   ├── projects/
│   │   │   └── [slug].astro       # Detalle de proyecto dinámico
│   │   ├── blog/
│   │   │   ├── index.astro        # Listado de artículos
│   │   │   └── [slug].astro       # Artículo individual dinámico
│   │   ├── dayloop/
│   │   │   ├── index.astro        # Landing Dayloop
│   │   │   └── pricing.astro      # Precios Dayloop
│   │   ├── robots.txt             # Directives para bots
│   │   └── sitemap.xml.ts         # Sitemap dinámico
│   │
│   ├── content/
│   │   ├── config.ts              # Configuración de collections
│   │   ├── projects/              # Colección de proyectos
│   │   │   ├── cheffify.md        # Proyecto Cheffify (archived)
│   │   │   ├── contamacros.md     # Proyecto ContaMacros
│   │   │   └── dayloop.md         # Proyecto Dayloop
│   │   └── blog/                  # Colección de artículos
│   │       ├── astro-vs-nextjs.md
│   │       ├── seo-tecnico.md
│   │       └── [más artículos...]
│   │
│   ├── styles/
│   │   ├── global.css             # Estilos globales
│   │   ├── animations.css         # Keyframes y animaciones
│   │   └── variables.css          # Variables CSS personalizadas
│   │
│   ├── utils/
│   │   ├── const.ts               # Constantes + WHATSAPP_MESSAGES
│   │   └── seo.ts                 # Funciones helper SEO
│   │
│   └── scripts/
│       └── animations.js          # ScrollReveal, GSAP
│
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── og-image.jpg           # Open Graph image
│   │   └── projects/              # Screenshots de proyectos
│   ├── fonts/
│   │   └── [tipografías locales]
│   └── manifest.json              # PWA manifest
│
├── .github/
│   └── workflows/                 # CI/CD workflows (opcional)
│
├── astro.config.mjs               # Configuración Astro
├── tailwind.config.mjs            # Configuración Tailwind
├── tsconfig.json                  # Configuración TypeScript
├── package.json                   # Dependencias + scripts
├── package-lock.json              # Lock file
├── .gitignore                     # Archivos a ignorar
├── .prettierrc                    # Configuración Prettier
├── .eslintrc.json                 # Configuración ESLint
├── README.md                      # Entry point principal
└── CLAUDE.md                      # Plan maestro del proyecto
```

---

## 📂 Detalles por Carpeta

### `/src/components`

**Archivos principales:**

- **Navbar.astro** - Barra de navegación
  - Logo clickeable
  - Links: home, servicios, portfolio, blog, contacto
  - Menú móvil con hamburger icon
  - CTA button (WhatsApp contextual)
  - Responde a eventos de Astro transitions

- **Footer.astro** - Pie de página
  - Logo + copyright
  - Links rápidos
  - Social links (GitHub, LinkedIn, etc)
  - CTA WhatsApp
  - Email de contacto

- **Principal.astro** - Hero section
  - Headline principal
  - Subheader
  - 2 CTAs (primario + secundario)
  - Imagen o video de fondo
  - Fade-in animations

- **Services.astro** - Cards de servicios
  - 3 cards: Landing, Sitio Web, App Móvil
  - Cada card muestra: rango de precio, tiempo, features
  - Label con complejidad (Rápido/Mediano/Complejo)
  - Hover effects y CTA contextual

- **Projects.astro** - Grid de proyectos
  - Usa `getCollection("projects")`
  - Cards con imagen, título, descripción
  - Links a `/projects/[slug]`
  - Filtros por tipo (opcional)

- **HowWork.astro** - Proceso en 4 pasos
  - Paso 1: Consulta
  - Paso 2: Propuesta
  - Paso 3: Desarrollo
  - Paso 4: Deploy

- **About.astro** - Sección informativa
  - Historia breve
  - Valores/filosofía
  - Tecnologías especializadas

- **Faq.astro** - Accordion de preguntas
  - 6-8 preguntas frecuentes
  - Expandible/contraíble
  - Animated arrow indicator

- **ContactForm.tsx** - Formulario (React Island)
  - Campos: nombre, email, tipo de proyecto, presupuesto, mensaje
  - Validación con Zod
  - Integración Formspree (form ID: mreowrjr)
  - Estados: idle, loading, success, error

### `/src/pages`

**Rutas dinámicas:**

- **index.astro** - Home
  - Importa todos los componentes principales
  - SEO optimizado

- **projects/[slug].astro** - Detalle de proyecto
  - Dinámico basado en `content/projects/*.md`
  - Muestra imagen, descripción, tecnologías
  - Link al proyecto live (si aplica)

- **blog/index.astro** - Listado de blog
  - Todos los artículos
  - Pagination (opcional)

- **blog/[slug].astro** - Artículo individual
  - Contenido del blog
  - Table of contents (opcional)
  - CTA al final

- **dayloop/index.astro** - Landing Dayloop
  - Página especial para proyecto Dayloop

- **dayloop/pricing.astro** - Precios Dayloop
  - Tabla de precios específica

- **robots.txt** - Directives para motores de búsqueda
  - Allow/Disallow rules
  - Sitemap reference

- **sitemap.xml.ts** - Sitemap dinámico
  - Genera XML con todas las rutas
  - Se actualiza automáticamente al hacer build

### `/src/content`

**Content Collections (Astro):**

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    link: z.string().url().optional(),
    technologies: z.array(z.string()),
    featured: z.boolean().optional(),
  })
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    keywords: z.array(z.string()),
  })
});

export const collections = { projects, blog };
```

**Estructura de archivos:**

- `projects/contamacros.md` - Metadata + contenido
- `projects/dayloop.md` - Metadata + contenido
- `blog/astro-vs-nextjs.md` - Artículo con frontmatter
- `blog/*.md` - Más artículos...

### `/src/utils`

- **const.ts** - Constantes globales
  - `WHATSAPP_MESSAGES` con mensajes contextuales
  - URLs externas importantes
  - Configuración de contacto

- **seo.ts** - Helpers SEO
  - Función para generar meta tags
  - Función para Schema.org markup
  - Función para Open Graph tags

### `/src/styles`

- **global.css** - Estilos base
  - Reset CSS
  - Utilidades globales
  - Colores variables

- **animations.css** - Animaciones
  - @keyframes para fade, slide, scale
  - Clases reutilizables

- **variables.css** - Variables CSS
  - Colores
  - Espaciados (8px grid)
  - Tipografía

---

## 🔄 Flujo de Datos

### Blog

```
Escribir artículo: /src/content/blog/nuevo-articulo.md
                ↓
Astro compila: getCollection("blog")
                ↓
Se genera: /blog/nuevo-articulo/ (URL dinámica)
                ↓
Aparece en: /blog/ (index con listado)
```

### Proyectos

```
Agregar proyecto: /src/content/projects/nuevo-proyecto.md
                ↓
Astro compila: getCollection("projects")
                ↓
Se genera: /projects/nuevo-proyecto/ (URL dinámica)
                ↓
Aparece en: Home + /portfolio (grid)
```

### Formulario

```
Usuario completa form → ContactForm.tsx
                  ↓
Validación Zod
                  ↓
POST a Formspree (mreowrjr)
                  ↓
Email a contact@codeamus.dev
```

---

## 🔧 Configuraciones Importantes

### astro.config.mjs

```javascript
export default defineConfig({
  integrations: [react()],
  output: 'static', // o 'server' si usas SSR
  adapter: vercel(),
});
```

### tailwind.config.mjs

```javascript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: { /* paleta custom */ },
      fontFamily: { /* tipografías */ },
    },
  },
};
```

### tsconfig.json

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@layouts/*": ["src/layouts/*"],
      "@utils/*": ["src/utils/*"],
    }
  }
}
```

---

## 📊 Variables de Entorno

Archivo: `.env` (no committear, solo en local)

```
# Formspree
PUBLIC_FORMSPREE_ID=mreowrjr

# Google Analytics
PUBLIC_GA_ID=G-XXXXXXXXXX

# WhatsApp
PUBLIC_WHATSAPP_NUMBER=56912345678
```

---

## 🚀 Build Process

```bash
# Desarrollo
npm run dev
# Astro genera /dist/ en memoria
# Servidor en localhost:4321
# Hot reload automático

# Build para producción
npm run build
# Genera /dist/ final
# Optimiza CSS, JS, imágenes
# Ready para deploy

# Preview local
npm run preview
# Simula servidor de producción
```

---

## ✅ Checklist de Navegación

- [x] Home: `/` (Principal + Services + Projects + How + FAQ)
- [x] Projects: `/projects/[slug]` (detalles individuales)
- [x] Blog: `/blog/` (listado) + `/blog/[slug]` (artículos)
- [x] Dayloop: `/dayloop/` + `/dayloop/pricing/` (landing específico)
- [x] Formulario: en contacto CTA (modal o inline)
- [x] Social: GitHub, LinkedIn, WhatsApp (footer)

---

**Ver más**: [Setup inicial](/docs/setup/README.md) | [Cómo agregar artículos](/docs/guias/BLOG.md)
