# 🚀 Deploy a Vercel

**Cómo deployar los cambios a producción**

---

## 🎯 Proceso Automático

CODEAMUS usa **Vercel** con deployment automático. No necesitas hacer nada manual.

### Flujo
```
1. Haces cambios locales
   ↓
2. git commit
   ↓
3. git push origin main
   ↓
4. Vercel detecta el push
   ↓
5. Vercel ejecuta: npm run build
   ↓
6. Si build es exitoso → Despliega a producción
   ↓
7. https://codeamus.dev se actualiza automáticamente
```

---

## 📝 Paso a Paso

### 1. Haz cambios locales
```bash
# Edita archivos
# npm run dev para verificar localmente
```

### 2. Commitea cambios
```bash
git add .
git commit -m "feat: descripción de cambios"
```

### 3. Push a GitHub
```bash
git push origin main
```

### 4. Verifica deployment
- Ve a: https://vercel.com/dashboard
- Selecciona proyecto: **codeamus**
- Espera a que termine (2-5 min)
- Verifica: https://codeamus.dev

---

## 🔍 Monitorear Deploy en Vercel

### Ver logs de build
1. Ve a: https://vercel.com/dashboard
2. Selecciona: **codeamus**
3. Click en el commit reciente
4. Ver **Deployments** → click en el deploy

### Qué buscar
- ✅ **Build successful**: todo bien
- ⚠️ **Build warnings**: revisar pero generalmente OK
- ❌ **Build failed**: hay errores (ver logs)

---

## ❌ Si el Deploy Falla

### 1. Revisar errores
```bash
# En local, corre el mismo build que Vercel
npm run build
npm run astro check
```

### 2. Errores comunes
- **Linter errors**: Ver [Troubleshooting Linter](/docs/troubleshooting/LINTER.md)
- **Import errors**: Verificar rutas relativas
- **TypeScript errors**: Revisar tipos

### 3. Fijar y reintentar
```bash
# Arregla el error
git add .
git commit -m "fix: arreglar error de build"
git push origin main
```

---

## 🌐 URLs Importantes

| Ambiente | URL |
|----------|-----|
| **Producción** | https://codeamus.dev |
| **Vercel Dashboard** | https://vercel.com/dashboard |
| **GitHub Repo** | https://github.com/codeamus/portfolio |
| **Google Search Console** | https://search.google.com/search-console |

---

## 📊 Verificar Deploy Exitoso

Después del deploy, chequea:

1. **Sitio carga**: https://codeamus.dev
2. **Sin errores de JS**: Abre DevTools (F12) → Console
3. **Analytics funciona**: GA4 trackea page views
4. **Formulario funciona**: Prueba enviar formulario
5. **Blog actualizado**: Si agregaste artículos

---

## 🔐 Configuración Vercel (Ya está hecha)

Vercel está configurado con:
- **Framework**: Astro
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node version**: 18.x
- **Auto-deploy**: Habilitado (cada push a main)

No necesitas cambiar nada en Vercel, todo es automático.

---

## 💡 Pro Tips

- 🔄 Los deploys generalmente tardan 2-5 minutos
- 📱 Los cambios se ven en https://codeamus.dev después de terminar
- 🌍 Google cachea por 24h, cambios pueden tardar en indexar
- 🔌 Si falla el build, revisa `astro check` en local primero

---

**Volver a**: [Setup](/docs/setup/README.md)
