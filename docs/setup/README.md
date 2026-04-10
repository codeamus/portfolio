# 🛠️ Setup Inicial - CODEAMUS

**Guía completa para comenzar con el proyecto**

---

## 📋 Requisitos Previos

- Node.js 18+ instalado
- Git configurado
- Acceso a GitHub (https://github.com/codeamus)
- Acceso a Vercel (deployment automático)

---

## 🚀 Instalación Rápida

### Paso 1: Clonar repositorio
```bash
git clone https://github.com/codeamus/portfolio.git
cd portfolio
```

### Paso 2: Instalar dependencias
```bash
npm install
```

### Paso 3: Iniciar desarrollo
```bash
npm run dev
```

Abre: **http://localhost:4321**

---

## 🏗️ Estructura Base

```
portfolio/
├── docs/                    # 📚 Esta documentación
├── src/
│   ├── components/         # Componentes reutilizables
│   ├── layouts/            # Layouts de página
│   ├── pages/              # Rutas (páginas web)
│   │   ├── index.astro     # Home
│   │   ├── blog/           # Blog posts
│   │   ├── projects/       # Proyectos individuales
│   │   └── sitemap.xml.ts  # Sitemap dinámico
│   ├── content/            # Contenido (blog, proyectos)
│   │   ├── blog/           # Artículos del blog
│   │   └── projects/       # Proyectos
│   ├── utils/              # Funciones helper
│   └── styles/             # Estilos globales
├── public/                 # Archivos estáticos
├── astro.config.mjs        # Configuración Astro
├── tailwind.config.mjs     # Configuración Tailwind
└── package.json            # Dependencias
```

---

## 💻 Comandos Disponibles

```bash
# Desarrollo
npm run dev              # Servidor local con hot reload

# Build
npm run build            # Build para producción
npm run preview          # Preview del build

# Validación
npm run astro check      # Chequear errores TypeScript

# CLI Astro
npm run astro add        # Agregar integraciones
npm run astro -- --help  # Ver todos los comandos
```

---

## 🔧 Configuraciones Importantes

### Vercel (Deployment)
- **Automático**: cada `git push` a `main` despliega automáticamente
- **URL**: https://codeamus.dev
- **Adapter**: Vercel Node Adapter (ya configurado)

### Google Analytics
- ID: Configurado en Layout.astro
- Tracks: Página views, eventos, conversiones

### Formspree (Emails)
- Form ID: `mreowrjr`
- Emails van a: `contact@codeamus.dev`
- Integrado en: `src/components/ContactForm.astro`

---

## ✅ Verificación Post-Setup

Después de instalar, verifica que todo funciona:

```bash
# 1. Build sin errores
npm run build

# 2. Astro check sin TypeScript errors
npm run astro check

# 3. Dev server funciona
npm run dev
# (Abre navegador a http://localhost:4321)
```

---

## 🆘 Problemas Comunes

### "npm install falla"
```bash
# Limpia cache y reintentas
rm -rf node_modules package-lock.json
npm install
```

### "localhost:4321 no carga"
```bash
# Verifica que el puerto esté disponible
# O especifica otro puerto:
npm run dev -- --port 3000
```

### "Errores en Astro check"
→ Ver: [Troubleshooting - Linter](/docs/troubleshooting/LINTER.md)

---

## 📝 Próximos Pasos

1. **Desarrollo**: Lee [Estructura del Proyecto](/docs/guias/ESTRUCTURA.md)
2. **Blog**: [Cómo agregar artículos](/docs/guias/BLOG.md)
3. **Deploy**: [Cómo deployar a Vercel](/docs/setup/DEPLOY.md)
4. **SEO**: [Optimización SEO](/docs/guias/SEO.md)

---

**¿Problemas?** → [Ir a Troubleshooting](/docs/troubleshooting/README.md)
