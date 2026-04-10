# 📚 Documentación CODEAMUS

**Índice centralizado de toda la documentación del proyecto**

---

## 🚀 Inicio Rápido

- **Primera vez aquí?** → [Setup inicial](/docs/setup/README.md)
- **Quieres hacer deploy?** → [Deploy a Vercel](/docs/setup/DEPLOY.md)
- **Problemas técnicos?** → [Troubleshooting](/docs/troubleshooting/README.md)

---

## 📖 Secciones

### 📋 [Guías de Desarrollo](/docs/guias/)
Cómo trabajar con el proyecto día a día:
- [Estructura del Proyecto](/docs/guias/ESTRUCTURA.md)
- [Agregar Artículos al Blog](/docs/guias/BLOG.md)
- [Actualizar Proyectos (Portfolio)](/docs/guias/PROYECTOS.md)
- [SEO y Optimización](/docs/guias/SEO.md)

### 💰 [Precios y Comercial](/docs/precios/)
Información sobre tarifas y estrategia comercial:
- [Precios Realistas CODEAMUS](/docs/precios/PRECIOS.md)
- [Estrategia de Precios](/docs/precios/ESTRATEGIA.md)
- [Investigación de Mercado (Chile 2026)](/docs/precios/MERCADO.md)

### 🛠️ [Setup y Configuración](/docs/setup/)
Cómo configurar todo correctamente:
- [Setup Inicial del Proyecto](/docs/setup/README.md)
- [Deploy a Vercel](/docs/setup/DEPLOY.md)
- [Configurar Google Search Console](/docs/setup/GSC.md)
- [Integración Formspree (Emails)](/docs/setup/FORMSPREE.md)
- [Mensajes WhatsApp Contextuales](/docs/setup/WHATSAPP.md)

### 🔧 [Troubleshooting](/docs/troubleshooting/)
Solución a problemas comunes:
- [Emails no llegan](/docs/troubleshooting/EMAILS.md)
- [Errores de Linter](/docs/troubleshooting/LINTER.md)
- [Problemas de Navegación](/docs/troubleshooting/NAVEGACION.md)

### 📖 [Referencias](/docs/referencia/)
Documentación técnica y referencias:
- [Variables de Entorno](/docs/referencia/ENV.md)
- [Estructura de Componentes](/docs/referencia/COMPONENTES.md)
- [Schema Markup SEO](/docs/referencia/SCHEMA.md)

---

## 🎯 Por Caso de Uso

### 🌟 Recién comienzo con el proyecto
1. Lee: [Setup Inicial](/docs/setup/README.md)
2. Lee: [Estructura del Proyecto](/docs/guias/ESTRUCTURA.md)
3. Ejecuta: `npm install && npm run dev`

### 📝 Quiero escribir un artículo para el blog
1. Lee: [Agregar Artículos](/docs/guias/BLOG.md)
2. Crea el archivo en: `src/content/blog/[titulo-articulo].md`
3. Sigue la plantilla SEO

### 💻 Necesito deployar cambios a producción
1. Commitea tus cambios: `git add . && git commit -m "..."`
2. Haz push: `git push origin main`
3. Vercel deployará automáticamente
4. Verifica en: https://codeamus.dev

### 🔍 Algo no funciona
1. Busca tu problema en [Troubleshooting](/docs/troubleshooting/README.md)
2. Si no está documentado, crea un issue en GitHub

### 💰 Necesito actualizar precios
1. Lee: [Estrategia de Precios](/docs/precios/ESTRATEGIA.md)
2. Edita: `src/components/Services.astro`
3. Redeployea

---

## 📊 Información General del Proyecto

**Sitio**: https://codeamus.dev  
**GitHub**: https://github.com/codeamus  
**Stack**:
- Framework: Astro 5.16.4
- Styling: Tailwind CSS 3.4.1
- Hosting: Vercel
- Email: Formspree
- Analytics: Google Analytics 4 + Vercel Analytics

---

## 🔄 Flujo de Trabajo

```
Desarrollo Local
    ↓
git commit & git push
    ↓
Vercel Deploy (automático)
    ↓
https://codeamus.dev actualizado
    ↓
Google Search Console indexa cambios
```

---

## 📞 Contacto y Soporte

- **Email**: contact@codeamus.dev
- **WhatsApp**: +56 9 XXXX XXXX
- **GitHub Issues**: https://github.com/codeamus/portfolio/issues

---

## 📝 Últimas Actualizaciones

- **2026-04-10**: Reorganización completa de documentación
- Precios realistas actualizados
- Mensajes WhatsApp contextuales implementados
- Navegación móvil corregida
- GitHub URL actualizada

---

**Última revisión**: Abril 2026  
**Mantenedor**: Matías (matias04041994@gmail.com)

---

## 💡 Pro Tips

- 🔗 Los enlaces en esta documentación son relativos (funcional en GitHub)
- 📱 Leer en móvil: mejor en GitHub que localmente
- 🔍 Busca en GitHub (README search) para encontrar documentos rápido
- ⭐ Si algo está incompleto, crea un issue

**¿No encuentras lo que buscas?** Revisa el índice de archivos completo en `/docs/`
