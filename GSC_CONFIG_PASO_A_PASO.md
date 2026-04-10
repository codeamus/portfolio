# 📊 GOOGLE SEARCH CONSOLE - CONFIGURACIÓN COMPLETA

**Objetivo**: Configurar GSC para que Google indexe y rankee tu sitio con blog

---

## PASO 1: Verificar que la Propiedad Existe ✅

1. Ve a: https://search.google.com/search-console
2. **¿Ves "codeamus.dev" en la lista?**
   - SÍ → Continúa a PASO 2
   - NO → Agrega la propiedad (dominio sin www)

---

## PASO 2: Enviar Sitemap (CRÍTICO) 🔴

**Esto es lo MÁS IMPORTANTE**

1. En GSC, selecciona: **codeamus.dev**
2. Panel izquierdo → **Sitemaps**
3. En el campo "Nueva URL de sitemap":
   ```
   https://codeamus.dev/sitemap.xml
   ```
4. Click **"Enviar"**

**Deberías ver:**
- ✅ Status: "Enviado"
- ✅ "Sitemaps válidos" (en verde)
- ✅ Información: "X URLs en el sitemap enviado"

**¿Qué pasa ahora?**
- Google descubre automáticamente: home + blog + proyectos
- Se indexan en 24-48 horas

---

## PASO 3: Solicitar Indexación de URLs Importantes 🟡

Opcionalmente, solicita indexación inmediata de:

1. Panel izquierdo → **URL Inspection** (o búsqueda por URL)
2. Copia y pega cada URL:
   ```
   https://codeamus.dev
   https://codeamus.dev/blog
   https://codeamus.dev/blog/crear-landing-page
   https://codeamus.dev/blog/desarrollo-apps-moviles
   https://codeamus.dev/blog/seo-tecnico-developers
   https://codeamus.dev/blog/astro-vs-nextjs
   https://codeamus.dev/blog/errores-desarrollo-web
   ```
3. Para cada una:
   - Click en **"Solicitar indexación"**
   - Espera confirmación

**Nota**: Esto acelera la indexación. Sin esto, Google indexa en 5-7 días naturalmente.

---

## PASO 4: Verificar Core Web Vitals 📱

1. Panel izquierdo → **Experiencia de página** (o "Core Web Vitals")
2. **¿Ves "BUENO" en verde?**
   - SÍ ✅ → Perfecto
   - "NECESITA MEJORA" 🟠 → Revisa Performance
   - "POBRE" 🔴 → Arregla urgente

**Si hay problemas:**
- Optimizar imágenes (comprimir)
- Revisar JavaScript pesado
- Verificar en pagespeed.web.dev

---

## PASO 5: Revisar Cobertura 🏠

1. Panel izquierdo → **Cobertura**

**Deberías ver:**
- ✅ "Cubierto" (verde) = páginas indexadas
- 0 errores
- 0 "Descubierta pero no indexada"

**Si hay problemas:**
- "Errores de cobertura" → Revisar qué URL tiene problema
- "Descubierta pero no indexada" → Página sin contenido suficiente

**Nota**: Después de subir sitemap, espera 24h. Luego verás todas las URLs.

---

## PASO 6: Revisar Rendimiento (Traffic) 📈

1. Panel izquierdo → **Rendimiento**
2. Ahora verás datos:
   - **Clics**: visitas desde Google
   - **Impresiones**: veces que saliste en resultados
   - **CTR**: Porcentaje de clicks
   - **Posición**: Ranking promedio

**En las próximas semanas:**
- Semana 1-2: Posición 20-40
- Semana 3-4: Posición 10-20
- Mes 2: Posición 5-15

---

## PASO 7: Verificar Structured Data (Schema) ✨

1. Panel izquierdo → **Enhancements** (o "Mejoras")

**Deberías ver:**
- ✅ LocalBusiness (1)
- ✅ Service (1)
- ✅ BreadcrumbList (1)
- ✅ FAQPage (1)
- ✅ Articles (5 - blog posts)

**Si ves errores:**
- Click en cada tipo
- Revisa qué está mal
- Sugerencias para fijar

**Herramienta de validación:**
- https://schema.org/validator
- Pega: https://codeamus.dev
- Verifica que todo sea válido (0 errores)

---

## PASO 8: Configurar Google Business Profile (Opcional pero Recomendado) 🗺️

Para mejorar búsquedas locales tipo "agencia web Santiago"

1. Ve a: https://business.google.com
2. Click **"Gestionar tu negocio en Google"**
3. Crear perfil:
   - **Nombre**: CODEAMUS
   - **Categoría**: Agencia de desarrollo web
   - **Ubicación**: Santiago, Chile
   - **Teléfono**: +56 9 85284259
   - **Sitio web**: https://codeamus.dev
   - **Email**: matias04041994@gmail.com

**Beneficios:**
- Aparecer en Google Maps
- "Caja de información" en búsquedas locales
- Reviews/calificaciones
- Horarios y contacto directo

---

## PASO 9: Conectar Google Analytics 4 (Si no está) 📊

1. En GSC → **Configuración** (engranaje abajo a la izquierda)
2. **Google Analytics**
3. Click **"Conectar"**
4. Selecciona tu propiedad de GA4

**¿Por qué?**
- Ver qué keywords traen tráfico
- Cuánto tiempo pasan en tu sitio
- Qué página convierte más

---

## PASO 10: Mobile Usability ✅

1. Panel izquierdo → **Experiencia de página** → **Mobile Usability**

**Deberías ver:**
- ✅ 0 errores
- ✅ "No se encontraron problemas"

**Si hay problemas:**
- Revisar responsive en móvil
- Testear en: https://search.google.com/test/mobile-friendly

---

## CHECKLIST FINAL EN GSC

```
✅ Propiedad verificada (codeamus.dev)
✅ Sitemap enviado (sitemap.xml)
✅ URLs indexadas (esperar 24-48h)
✅ Core Web Vitals: BUENO
✅ Cobertura: 0 errores
✅ Structured Data: Sin errores
✅ Mobile Usability: OK
✅ GA4 conectado (opcional)
✅ Google Business Profile creado (opcional)
```

---

## MONITOREO SEMANAL

### Semana 1 (Ahora)
- ✅ Enviar sitemap
- ✅ Revisar cobertura después de 24h
- ✅ Solicitar indexación de URLs principales

### Semana 2
- 📊 Revisar "Rendimiento" para primeros datos
- ✅ Validar structured data sin errores
- ✅ Revisar Core Web Vitals

### Semana 3-4
- 📈 Analizar keywords que rankean
- 🎯 Notar posiciones (esperado: bajan de 35 a 20)
- ✅ Ver primeros clics desde Google

### Mes 2+
- 📊 Monitorear tendencia de tráfico (debe subir)
- 🔍 Identificar keywords con potencial
- 🎯 Crear más contenido en keywords que convierten

---

## TIPS IMPORTANTES

### 🔴 NO HAGAS ESTO:
- ❌ No cambies URLs (rompe indexación)
- ❌ No borres contenido (mantén artículos)
- ❌ No bloquees robots.txt (deja Allow: /)
- ❌ No uses redirecciones innecesarias

### ✅ HAZLO:
- ✅ Crea contenido nuevo regularmente (1 artículo/mes)
- ✅ Actualiza artículos antiguos (newness factor)
- ✅ Monitorea rankings semanalmente
- ✅ Responde búsquedas reales (user intent)

---

## INTERPRETANDO DATOS EN GSC

### Clics Orgánicos
- Semana 1: 0-5 clics
- Semana 2-3: 5-15 clics
- Mes 2: 20-50 clics
- Mes 3: 50-150 clics

### Posición Promedio
- Semana 1: ~35 (estás atrás)
- Semana 4: ~22 (mejorando)
- Mes 2: ~15 (top 15)
- Mes 3: ~8 (top 10, primeras leads)

### CTR (Porcentaje de clics)
- Normal: 2-5%
- Bueno: 5-10%
- Excelente: 10%+

**Si CTR bajo:**
- Mejorar meta description (más clickable)
- Mejorar título (incluir keyword)

---

## ¿CUÁNDO VER RESULTADOS?

| Período | Qué esperar |
|---------|-----------|
| **Hoy-24h** | URLs descubiertas por Google |
| **1-2 semanas** | URLs indexadas, primeras impresiones |
| **3-4 semanas** | Primeros rankings (posición 20-30) |
| **Mes 2** | Ascenso a top 15-20, primeros clics |
| **Mes 3** | Top 5-10 para keywords, leads cualificados |

---

## RESUMEN EJECUTIVO

**LO MÁS IMPORTANTE AHORA:**

1. **Ve a Google Search Console**
2. **Selecciona codeamus.dev**
3. **Sitemaps → Envía sitemap.xml**
4. **Espera 24-48 horas**
5. **Monitorea "Rendimiento" para ver datos**

**Con esto:**
- ✅ Google descubre automáticamente blog + proyectos
- ✅ Apareces en búsquedas en 2-4 semanas
- ✅ Primeros leads en mes 2-3

---

**Tiempo total**: 5-10 minutos de configuración
**Beneficio**: Tráfico orgánico por 1 año (sin publicidad)