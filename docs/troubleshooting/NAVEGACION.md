# 🧭 Problemas de Navegación - Troubleshooting

**Guía para resolver problemas con menú móvil, links rotos y rutas dinámicas**

---

## 🎯 Diagnóstico Rápido

### Checklist Inmediato

```
¿Cuál es el problema?
├─ Menú móvil no se abre/cierra → ve a "Menú Móvil"
├─ Menú se abre pero no navega → ve a "Menú no navega"
├─ Página muestra 404 → ve a "Rutas Dinámicas"
├─ Links a blog/proyectos rotos → ve a "Links Internos"
└─ Transiciones no suave → ve a "Astro Transitions"
```

---

## 📱 Menú Móvil No Se Abre

### Problema: Click en hamburger no hace nada

#### Causa 1: JavaScript no cargó

```bash
# Abre DevTools (F12) → Console
# Si ves errores de JavaScript → problema

Solución:
1. Verifica que src/components/Navbar.astro tenga <script>
2. No debe tener atributo "type" (Astro maneja esto)
3. Script debe estar al final del archivo
```

**Código correcto en Navbar.astro:**

```astro
<nav>
  {/* HTML del navbar */}
  <button id="mobile-menu-button" aria-label="Toggle menu">
    <span class="hamburger-icon"></span>
  </button>
  <div id="mobile-menu" class="hidden">
    {/* Links del menú */}
  </div>
</nav>

<script>
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  menuButton?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });
</script>
```

#### Causa 2: CSS oculta el menú en desktop

```bash
# En Tailwind, usa breakpoints correctamente

✅ CORRECTO:
<div id="mobile-menu" class="hidden md:flex">

❌ INCORRECTO:
<div id="mobile-menu" class="hidden">
```

#### Causa 3: Z-index del menú es bajo

```bash
# Si el menú aparece pero está detrás de otros elementos

✅ Solución: Agrega z-index alto al menú
<div id="mobile-menu" class="fixed inset-0 z-50 ...">
```

---

## 🚫 Menú Móvil Se Abre Pero No Navega

### Problema: Menú se abre, pero click en link no funciona

**Información del usuario**: "cuando entro al blog luego presiono le menu de nuevo no navega"

#### Causa 1: Evento click no cierra el menú antes de navegar

```astro
<script>
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLinks = mobileMenu?.querySelectorAll('a');
  
  // ✅ Cierra menú al hacer click en un link
  menuLinks?.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
      menuButton?.classList.remove('rotate-90'); // Reset icon
    });
  });
  
  // ✅ También cierra con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      mobileMenu?.classList.add('hidden');
      menuButton?.classList.remove('rotate-90');
    }
  });
</script>
```

#### Causa 2: Astro transitions previenen navegación

```javascript
// ✅ Escucha eventos de Astro transitions

document.addEventListener('astro:before-preparation', () => {
  // Se ejecuta ANTES de navegar
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu?.classList.add('hidden');
});

document.addEventListener('astro:page-load', () => {
  // Se ejecuta DESPUÉS de cargar nueva página
  // Reinicializa el script
  initMobileMenu();
});
```

#### Causa 3: Links están mal configurados

```bash
# ❌ INCORRECTO (sin href válido)
<a>Ir a blog</a>

# ✅ CORRECTO (href absoluto)
<a href="/blog">Blog</a>

# ✅ TAMBIÉN CORRECTO (href relativo)
<a href="blog">Blog</a>

# ❌ INCORRECTO (JavaScript onClick)
<span onclick="navigate()">Blog</span>
```

**Solución: Verifica todos los links en Navbar:**

```bash
src/components/Navbar.astro
→ Cada <a> debe tener href válido
→ Sin "#" al inicio (a menos que sea ancla)
→ Rutas deben ser absolutas: /blog, /projects, etc
```

---

## ❌ Página Muestra 404

### Problema: Entro a un link y veo página no encontrada

#### Causa 1: Ruta no existe en `/src/pages/`

**Estructura correcta:**

```
src/pages/
├── index.astro           → /
├── blog/
│   ├── index.astro       → /blog
│   └── [slug].astro      → /blog/article-title
├── projects/
│   ├── index.astro       → /projects
│   └── [slug].astro      → /projects/dayloop
└── dayloop/
    ├── index.astro       → /dayloop
    └── pricing.astro     → /dayloop/pricing
```

**Solución: Si falta `/blog/index.astro`**

```bash
# Crea el archivo
touch src/pages/blog/index.astro

# Contenido básico:
---
import Layout from '@layouts/Layout.astro';
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
---

<Layout title="Blog">
  <main>
    <h1>Blog</h1>
    <ul>
      {posts.map(post => (
        <li>
          <a href={`/blog/${post.slug}`}>{post.data.title}</a>
        </li>
      ))}
    </ul>
  </main>
</Layout>
```

#### Causa 2: Parámetro dinámico no coincide con collection

```bash
# Si el archivo es: src/pages/blog/[slug].astro
# Debe leer de: src/content/blog/*.md

✅ CORRECTO:
src/pages/blog/[slug].astro
← Lee de →
src/content/blog/mi-articulo.md

❌ INCORRECTO:
src/pages/blog/[slug].astro
← Lee de →
src/content/posts/mi-articulo.md
```

**Código correcto en `[slug].astro`:**

```astro
---
import Layout from '@layouts/Layout.astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await post.render();
---

<Layout title={post.data.title}>
  <h1>{post.data.title}</h1>
  <Content />
</Layout>
```

#### Causa 3: Markdown collection no está en `config.ts`

```bash
# Verifica src/content/config.ts

✅ DEBE TENER:
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    // ... más campos
  })
});

export const collections = { blog };
```

---

## 🔗 Links Internos Rotos

### Problema: Link a proyecto/artículo no funciona

#### Paso 1: Verifica la URL en HTML

```bash
Abre DevTools (F12) → Inspector
Busca el <a> element
Verifica href attribute

✅ Debe ser: href="/projects/dayloop"
❌ No: href="projects/dayloop"
❌ No: href="#dayloop"
```

#### Paso 2: Verifica que existe el archivo

```bash
# Si el link es: /blog/astro-vs-nextjs
# Debe existir: src/content/blog/astro-vs-nextjs.md

Comando para listar:
ls src/content/blog/

# Verifica el nombre del archivo
# (sin extensión .md en la URL)
```

#### Paso 3: Verifica slugs en content

```bash
# En src/content/blog/astro-vs-nextjs.md
---
title: "Astro vs Next.js"
---

# La URL será: /blog/astro-vs-nextjs
# (Astro infiere el slug del nombre del archivo)
```

---

## ⚡ Astro Transitions No Funcionan

### Problema: Cambio de página es instantáneo (sin transición suave)

#### Causa 1: Transitions no están habilitadas en Layout

```astro
<!-- ✅ CORRECTO en Layout.astro -->
<html transition:animate="fade">
  <head>
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>

<!-- ❌ SIN TRANSITIONS -->
<html>
  <head>...</head>
  <body>...</body>
</html>
```

#### Causa 2: Necesitas actualizar astro.config.mjs

```javascript
export default defineConfig({
  // ... otras opciones
  integrations: [
    // Asegúrate que transition está integrado
  ],
});
```

---

## 📊 Debugging de Rutas

### Paso 1: Ver todas las rutas generadas

```bash
# Después de hacer build
npm run build

# Verifica dist/
ls -la dist/

# Debe tener:
# - index.html (home)
# - blog/index.html (listado blog)
# - blog/astro-vs-nextjs/index.html (artículos)
# - projects/dayloop/index.html (proyectos)
```

### Paso 2: Preview local

```bash
npm run preview
# Abre: http://localhost:3000

# Navega por las páginas
# Si funciona en preview, está bien
```

### Paso 3: Check en producción

```bash
# Si funciona en local pero no en producción (Vercel)
# → Problema probablemente es redirección de dominio

Vercel Dashboard:
1. Ve a: codeamus → Settings → Domains
2. Verifica que el dominio está configurado
3. Verifica que no hay redirecciones circulares
```

---

## 🔍 Verificar Enlaces en DevTools

```javascript
// En Console (F12), ejecuta:

// Ver todos los links del sitio
document.querySelectorAll('a').forEach(a => {
  console.log(a.href, a.textContent);
});

// Ver si hay links rotos (404)
fetch('/blog/articulo-inexistente')
  .then(r => console.log(r.status))
  // 404 = rotos, 200 = OK
```

---

## 📋 Checklist de Navegación

- [ ] Todas las rutas existen en `/src/pages/`
- [ ] Los links usan hrefs absolutos (`/blog` no `blog`)
- [ ] Las colecciones están configuradas en `config.ts`
- [ ] Los archivos `.md` tienen nombres válidos
- [ ] Menú móvil cierra después de navegar
- [ ] Transitions están habilitadas en Layout
- [ ] Build local (`npm run build`) no muestra errores
- [ ] Preview funciona: `npm run preview`
- [ ] Vercel deployment se completó sin errores

---

## 🚀 Comandos Útiles

```bash
# Verifica errores de Astro
npm run astro check

# Build completo
npm run build

# Ver output de build
ls dist/

# Preview local
npm run preview

# Limpia cache
rm -rf .astro dist node_modules
npm install && npm run build
```

---

**Última actualización**: Abril 2026
**Relacionado**: [Estructura del Proyecto](/docs/guias/ESTRUCTURA.md)
