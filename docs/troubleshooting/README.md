# 🆘 Troubleshooting - Soluciona Problemas Comunes

**Guía para resolver problemas que puedan surgir en desarrollo o producción**

---

## 🎯 Problemas por Categoría

### 📧 [Problemas con Emails](/docs/troubleshooting/EMAILS.md)

Si el formulario no envía correos o los correos no llegan:

- ✅ Formulario se envía pero correo no llega
- ✅ Error 403/401 en Formspree
- ✅ Correos van a spam
- ✅ Formspree return status no es 200

**Solución rápida**: Verifica que Formspree esté configurado correctamente

→ [Ir a EMAILS.md](/docs/troubleshooting/EMAILS.md)

---

### 🔴 [Errores de Linter](/docs/troubleshooting/LINTER.md)

Si `npm run build` falla o `astro check` muestra errores:

- ✅ TypeScript type errors
- ✅ ESLint warnings
- ✅ Astro component errors
- ✅ Undefined imports

**Solución rápida**: Ejecuta `npm run astro check` para ver errores específicos

→ [Ir a LINTER.md](/docs/troubleshooting/LINTER.md)

---

### 🧭 [Problemas de Navegación](/docs/troubleshooting/NAVEGACION.md)

Si el menú móvil no funciona o los links no navegan:

- ✅ Menú móvil se abre pero no navega
- ✅ Links a blog/proyectos rotos
- ✅ 404 en rutas dinámicas
- ✅ Transitions no funcionan

**Solución rápida**: Verifica que los archivos estén en `/src/pages/` con estructura correcta

→ [Ir a NAVEGACION.md](/docs/troubleshooting/NAVEGACION.md)

---

## 🔍 Diagnóstico Rápido

### Mi sitio no carga en localhost

```bash
# 1. Verifica que npm install se completó
npm list

# 2. Prueba con puerto diferente
npm run dev -- --port 3000

# 3. Limpia cache
rm -rf node_modules package-lock.json
npm install

# 4. Verifica Node version
node --version
# Debe ser 18+
```

### El build falla en Vercel pero funciona en local

```bash
# 1. Simula el build exacto de Vercel en local
npm run build

# 2. Verifica errores de TypeScript
npm run astro check

# 3. Revisa los logs en Vercel Dashboard
# https://vercel.com/dashboard → codeamus → Deployments
```

### El formulario no envía

```bash
# 1. Abre DevTools (F12)
# 2. Ve a Network tab
# 3. Rellena y envía el formulario
# 4. Busca la request a formspree.io
# 5. Chequea el status code y respuesta
```

---

## 📋 Checklist de Troubleshooting

Cuando algo falla, sigue este orden:

1. **¿Es un error de desarrollo o producción?**
   - Local (`npm run dev`): ve a LINTER.md
   - Vercel (producción): ve a DEPLOY troubleshooting

2. **¿Qué tipo de error?**
   - TypeScript/Build: LINTER.md
   - Navegación/404: NAVEGACION.md
   - Email no llega: EMAILS.md
   - Rendimiento: Lighthouse en DevTools

3. **¿Qué cambió recientemente?**
   - Revisa `git log` para ver último commit
   - Usa `git diff HEAD~1` para ver cambios
   - Revierte si es necesario: `git revert [commit]`

4. **¿Consultaste la documentación?**
   - Busca tu problema en `/docs`
   - Revisa el archivo README.md de la sección relevante

5. **¿Todavía no se resuelve?**
   - Crea un issue en GitHub
   - Contacta a matias04041994@gmail.com

---

## 🛠️ Herramientas Útiles

### Desarrollo Local

```bash
# Validar TypeScript
npm run astro check

# Build local (igual que Vercel)
npm run build

# Preview local del build
npm run preview

# Linter
npm run lint

# Prettier (formatear código)
npm run format
```

### Debugging en Browser

```javascript
// En console (F12)
// Ver estructura de Astro
document.body.innerHTML

// Ver performance
performance.timing

// Monitorear network
// Network tab → XHR/Fetch
```

### Vercel Dashboard

- **Deployments**: Ver logs de build
- **Environment**: Variables de entorno
- **Analytics**: Page views, performance
- **Domains**: DNS, SSL

URL: https://vercel.com/dashboard

---

## 🚀 Procedimiento para Investigar

### Paso 1: Aislar el problema

```bash
# ¿Es local o producción?
# ¿Qué sección: navbar, formulario, blog?
# ¿Desde cuándo sucede?
```

### Paso 2: Replicar en DevTools

```javascript
// F12 → Console
// Verificar errores JavaScript
// Chequear Network requests
// Revisar Storage (localStorage)
```

### Paso 3: Revisar Git history

```bash
git log --oneline --all
# Busca último cambio que rompió algo

git diff HEAD~5 HEAD
# Ve cambios de últimos 5 commits

git bisect
# Si necesitas encontrar el commit exacto
```

### Paso 4: Revertir si es necesario

```bash
git revert [commit-hash]
# Crea un nuevo commit que revierte cambios
```

---

## 📞 Cuándo Contactar

**Crea un issue en GitHub si:**
- Un error afecta múltiples usuarios
- Encontraste un bug reproducible
- Necesitas una feature nueva
- Hay incompatibilidad con versión de dependencia

**Contacta directamente si:**
- Problema urgente en producción
- Necesitas ayuda rápida
- Configuración de hosting

📧 matias04041994@gmail.com

---

## 📚 Guías Relacionadas

- [Setup Inicial](/docs/setup/README.md)
- [Deploy a Vercel](/docs/setup/DEPLOY.md)
- [Estructura del Proyecto](/docs/guias/ESTRUCTURA.md)

---

**Última actualización**: Abril 2026
