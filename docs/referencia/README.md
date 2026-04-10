# 📖 Referencia - Documentación Técnica

**Guías de referencia rápida y documentación técnica**

---

## 📚 Archivos de Referencia

### [Variables de Entorno](ENV.md) (PRÓXIMAMENTE)
- Todas las variables `.env` necesarias
- Configuración por ambiente (dev, staging, prod)
- Secrets y API keys

### [Estructura de Componentes](COMPONENTES.md) (PRÓXIMAMENTE)
- Cómo crear componentes en Astro
- Componentes reutilizables
- React Islands
- Props y tipos

### [Schema Markup SEO](SCHEMA.md) (PRÓXIMAMENTE)
- JSON-LD examples
- LocalBusiness schema
- BlogPosting schema
- Product/Service schema

---

## 🔧 Configuración Rápida

### tailwind.config.mjs

```javascript
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5b5bff',
        dark: '#0f172a',
        light: '#ffffff',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

### astro.config.mjs

```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/node';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  adapter: vercel(),
});
```

### package.json (Scripts)

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  }
}
```

---

## 🏗️ Estructura TypeScript

### Tipos Comunes

```typescript
// Proyecto
interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  technologies: string[];
  featured: boolean;
}

// Blog Post
interface BlogPost {
  title: string;
  description: string;
  pubDate: Date;
  author: string;
  keywords: string[];
}

// Service
interface Service {
  name: string;
  price: [number, number]; // Range
  time: string;
  features: string[];
}
```

---

## 📝 Markdown Cheat Sheet

```markdown
# H1 - Título principal
## H2 - Subtítulo
### H3 - Sub-subtítulo

**Negrita**
*Cursiva*
~~Tachado~~

- Viñeta
- Viñeta

1. Numerado
2. Numerado

[Link](url)
![Imagen](url)

> Cita

`código inline`

\`\`\`language
código multilinea
\`\`\`

| Tabla | Contenido |
|-------|-----------|
| Celda | Celda |
```

---

## 🔍 Útiles en DevTools

### Console

```javascript
// Ver estructura HTML
document.body.innerHTML

// Encontrar elemento
document.querySelector('.class-name')

// Listeners de evento
getEventListeners(document)

// Performance
performance.timing.navigationStart
```

### Network

```
Ver requests XHR/Fetch
Chequear status codes
Revisar headers
Monitorear tamaño
```

### Storage

```
localStorage - persistente
sessionStorage - sesión
Cookies - con expiración
```

---

## 🚀 Deploy Checklist

```bash
# Antes de hacer push
□ npm run astro check    # Sin errores
□ npm run build          # Build exitoso
□ npm run preview        # Previsualizacion OK
□ git status             # Sin cambios sin committear
□ git log               # Último commit relevante

# Push
git push origin main
# Vercel despliega automáticamente

# Verificar
□ Abre https://codeamus.dev
□ Revisa página en browser
□ F12 Console sin errores
□ Formulario funciona
□ Analytics trackea
```

---

## 📊 Equivalencias Útiles

### Tailwind → CSS

```css
/* Tailwind */
class="w-full md:w-1/2 p-4"

/* CSS equivalente */
width: 100%;

@media (min-width: 768px) {
  width: 50%;
}
padding: 1rem;
```

### Astro → HTML

```astro
{/* Condicional */}
{condition && <div>Show</div>}

{/* Loop */}
{array.map(item => <li>{item}</li>)}

{/* Props */}
const { title, description } = Astro.props;
```

---

## 🔐 Seguridad

### Jamás Commitear

```
.env (archivo local con secrets)
node_modules/ (generado con npm install)
dist/ (build output)
*.log (logs)
private keys
```

### Variables Seguras

```bash
# LOCAL ONLY (.env.local - no committear)
API_SECRET=xxx
DATABASE_URL=xxx

# SEGURO (PUBLIC_ - commitear OK)
PUBLIC_GA_ID=G-xxx
PUBLIC_SITE_URL=https://codeamus.dev
```

---

## 🎨 Design Tokens

### Colores

```css
--primary: #5b5bff
--dark: #0f172a
--light: #ffffff
--accent: #ffa14d
--success: #a8e6cf
--warning: #ffd93d
--error: #ff6b6b
```

### Espaciado (8px Grid)

```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
```

### Tipografía

```
Display: Playfair Display (headings)
Body: Poppins (text)
Code: JetBrains Mono (code)
```

---

## 📈 Métricas Importantes

### Rendimiento

```
Lighthouse: 90+
Core Web Vitals: Todos verdes
First Contentful Paint (FCP): < 1.8s
Largest Contentful Paint (LCP): < 2.5s
```

### SEO

```
Posicionamiento Tier 1: Top 10 en 6 meses
Organic traffic: 200+ visits/mes
Click-through rate: 3-5%
Backlinks: 10+ referencias
```

### Conversión

```
Form conversion: 2-3%
CTA clicks: 5-10%
Blog engagement: 30+ segundos
Portfolio visits: 10+ clientes/mes
```

---

## 🆘 Recursos Rápidos

### Documentación Oficial

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [React](https://react.dev)

### Herramientas Útiles

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Schema.org Validator](https://schema.org)
- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

### Generadores

- [Favicon Generator](https://favicon.io)
- [Color Palette](https://coolors.co)
- [Typography Scale](https://type-scale.com)

---

## 🎯 Quick Links

| Recurso | URL |
|---------|-----|
| Sitio | https://codeamus.dev |
| GitHub | https://github.com/codeamus |
| Vercel | https://vercel.com/dashboard |
| GSC | https://search.google.com/search-console |
| Analytics | https://analytics.google.com |
| Formspree | https://formspree.io/dashboard |

---

**Última actualización**: Abril 2026
**Mantenedor**: Matías (matias04041994@gmail.com)

**← [Volver a Documentación Principal](/docs/README.md)**
