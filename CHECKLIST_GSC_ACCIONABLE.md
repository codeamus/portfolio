# 📋 CHECKLIST GSC - Qué Revisar HOY Mismo

**Tiempo**: 30 minutos  
**Objetivo**: Diagnosticar estado actual de codeamus.dev en Google

---

## PASO 1: Acceso a Google Search Console

```
1. Ve a: https://search.google.com/search-console
2. Selecciona propiedad: codeamus.dev
3. (Si acabas de agregarla, espera 5-10 minutos para que Google la procese)
```

---

## PASO 2: SECCIÓN "COBERTURA" (Indexación)

**¿Dónde está?** Panel izq → "Cobertura"

### Checklist:

```
□ ¿Dice "Cubierto" o "No cubierto"?
   Si dice "No cubierto" = problema CRÍTICO (revisar robots.txt)
   Si dice "Cubierto" = OK, continuar

□ ¿Cuántas páginas están "Indexadas"?
   Número esperado: 10-20 (home, servicios, portfolio, contacto, blog si existe)
   Nota este número: _____ páginas

□ ¿Hay errores?
   Ver columna "Problemas":
   - Si dice 0 errores = ✅ PERFECTO
   - Si hay "Errores de cobertura" = ⚠️ Revisar

□ ¿Hay "Descubierta pero no indexada"?
   Si la cantidad es >5 = problema (contenido de baja calidad)
   Nota: _____ páginas no indexadas

□ ¿Sitemap enviado?
   Scroll down → "Sitemaps"
   □ Debe mostrar: sitemap.xml
   □ Estado: "Éxito" (verde)
   Si no está = AGREGAR AHORA: https://codeamus.dev/sitemap.xml
```

**ACCIÓN SI VES PROBLEMAS:**
- "Descubierta pero no indexada" → Las páginas existen pero Google no las considera relevantes. Necesita más contenido o mejor meta description.
- Errores de cobertura → Revisar qué página reporta error en "Detalles"

---

## PASO 3: SECCIÓN "RENDIMIENTO" (Tráfico y Rankings)

**¿Dónde está?** Panel izq → "Rendimiento"

### Checklist:

```
□ ¿Hay datos de tráfico?
   El sitio es nuevo, así que probablemente:
   - Si <1 mes online = 0-100 impresiones (normal)
   - Si >1 mes = debe haber algo (50-500 es normal para sitio sin SEO)

□ ¿Qué keywords traen tráfico?
   Haz clic en pestaña "Consultas" 
   Nota las TOP 5 keywords:
   1. ________________
   2. ________________
   3. ________________
   4. ________________
   5. ________________

□ ¿En qué posición promedio estás?
   Ejemplo: Si sale "28" = estás en posición 28 en Google
   Posición promedio actual: _______
   (Objetivo: <10 en 3 meses)

□ ¿CTR (Click Through Rate)?
   Ejemplo: "2.1%" 
   CTR actual: _______
   (Normal es 2-3% en posición 15-20)

□ ¿Qué páginas traen tráfico?
   Pestaña "Páginas"
   Top 3 páginas:
   1. _______________
   2. _______________
   3. _______________

□ ¿Dispositivos?
   Mobile vs Desktop:
   - Mobile: _____ %
   - Desktop: _____ %
   (Debe ser >50% mobile, si no = problema UX)
```

**GRÁFICO A GUARDAR:**
Toma screenshot de la línea de impresiones/clics de los últimos 28 días. Te servirá para comparar en 1 mes.

---

## PASO 4: SECCIÓN "CORE WEB VITALS" (Performance)

**¿Dónde está?** Panel izq → "Experiencia de página" → "Core Web Vitals"

### Checklist:

```
□ ¿Estado general?
   □ BUENO (verde) = ✅ PERFECTO
   □ NECESITA MEJORA (naranja) = ⚠️ Revisar
   □ POBRE (rojo) = 🔴 URGENTE ARREGLAR

□ Si ves POBRE o NECESITA MEJORA:
   
   Métrica LCP (Largest Contentful Paint)
   □ Estado: _______________
   □ Valor actual: _____ ms (debe ser <2500ms)
   □ Páginas afectadas: _____
   
   Métrica FID (First Input Delay)
   □ Estado: _______________
   □ Valor actual: _____ ms (debe ser <100ms)
   □ Páginas afectadas: _____
   
   Métrica CLS (Cumulative Layout Shift)
   □ Estado: _______________
   □ Valor actual: _____ (debe ser <0.1)
   □ Páginas afectadas: _____

□ ¿Hay problemas mobile vs desktop?
   Nota cuál es peor: [ ] Mobile [ ] Desktop
```

**SI VES POBRE:**
Esto impacta **directamente** en rankings. Prioridad: arreglar en los próximos 5 días.

---

## PASO 5: SECCIÓN "ENHANCEMENTS" (Structured Data)

**¿Dónde está?** Panel izq → "Enhancements" o "Mejoras"

### Checklist:

```
□ ¿Qué tipos de structured data detecta?
   Ejemplos: Article, LocalBusiness, Product, FAQ, BreadcrumbList
   
   Tipos detectados:
   □ Article: _____ páginas
   □ LocalBusiness: _____ (debe tener 1)
   □ Service: _____ páginas
   □ FAQ: _____ (si existe sección FAQ)
   □ Otros: _____________

□ ¿Hay errores en structured data?
   Si dice "Errores": nota cantidad _____ y tipos

□ ¿Hay advertencias?
   Si dice "Advertencias": nota cantidad _____ (menos crítico que errores)

IMPORTANTE: Si NO detecta nada = necesitas agregar schema markup al HTML
```

---

## PASO 6: SECCIÓN "MOBILE USABILITY" (Responsividad)

**¿Dónde está?** Panel izq → "Experiencia de página" → "Mobile Usability"

### Checklist:

```
□ ¿Hay errores de usabilidad mobile?
   □ 0 errores = ✅ PERFECTO
   □ >0 errores = ⚠️ Revisar

Si hay errores, típicamente son:
   □ Texto pequeño (< 16px)
   □ Tap targets pequeños (< 48px)
   □ Content wider than screen
   □ Flash content

Nota cualquier error encontrado:
_________________________________
```

---

## PASO 7: SECCIÓN "LINKS" (Backlinks y Enlaces Internos)

**¿Dónde está?** Panel izq → "Links"

### Checklist:

```
□ ¿Cuántos backlinks tienes?
   Total backlinks: _______
   (Esperado para sitio nuevo: 0-5, normal)

□ ¿De qué dominios vienen?
   Nota si hay:
   □ Directorios tech (ejemplo: alternativeto.net)
   □ Foros (Stack Overflow, Dev.to)
   □ Menciones (GitHub, Medium)
   □ Otros: _____________

□ ¿Páginas más enlazadas internamente?
   1. ________________
   2. ________________
   3. ________________
```

---

## PASO 8: SECCIÓN "ROBOTS.TXT" Y SITEMAP

**¿Dónde está?** Panel izq → "Configuración" → "Robots.txt" y "Sitemaps"

### Checklist:

```
ROBOTS.TXT:
□ ¿Está validado?
   Debe decir "El fichero robots.txt es válido"
□ ¿Bloquea rutas innecesarias?
   Revisar que NO bloquea:
   □ / (root)
   □ /servicios
   □ /portfolio
   □ /blog

SITEMAPS:
□ Sitemap.xml enviado: [ ] Sí [ ] No
   Si NO → Envía: https://codeamus.dev/sitemap.xml
   
□ Estado del sitemap:
   [ ] Éxito (verde)
   [ ] Error (rojo)
   
□ Cantidad de URLs en sitemap:
   Número: _____ URLs
```

---

## RESUMEN: HOJA DE RESULTADOS

Después de revisar todo, completa esto:

```
DIAGNÓSTICO GENERAL
==================

Indexación: [ ] Bien [ ] Problemas
Detalle: _________________________

Traffic/Rankings: [ ] Nuevo site [ ] Bajando [ ] Creciendo
Posición promedio: _______
Top keyword: _________________

Core Web Vitals: [ ] Bueno [ ] Necesita mejora [ ] Pobre
Métrica más afectada: LCP / FID / CLS (marcar)

Mobile: [ ] OK [ ] Problemas
Principales errores: __________

Backlinks: _____ dominios enlazando

Schema Markup: [ ] Presente [ ] Falta agregar

PRIORIDAD INMEDIATA (Ranking 1-5):
1. _______________________
2. _______________________
3. _______________________

PRÓXIMO PASO:
□ Optimizar Core Web Vitals
□ Agregar schema markup
□ Crear contenido de blog
□ Mejorar meta descriptions
```

---

## COMANDOS ÚTILES (En tu navegador)

Desde la consola del navegador (F12 → Console), copia y pega:

```javascript
// Ver todos los meta descriptions del sitio
Array.from(document.querySelectorAll('meta[name="description"]')).map(el => el.content)

// Ver todos los H1s
Array.from(document.querySelectorAll('h1')).map(el => el.textContent)

// Ver imágenes sin alt-text
Array.from(document.querySelectorAll('img:not([alt])')).length
```

---

## PRÓXIMAS ACCIONES (Después de este checklist)

Una vez hayas completado esto:

1. **Comparte los resultados** (screenshot o notas del checklist)
2. **Identificamos problemas principales**
3. **Creamos plan de fixes prioritarios**
4. **Comenzamos con artículos de blog**

¿Necesitas ayuda con cualquier paso? Avísame dónde te quedas.