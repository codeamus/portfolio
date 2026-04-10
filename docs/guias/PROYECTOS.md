# 🎯 Cómo Agregar y Actualizar Proyectos

**Guía para gestionar el portfolio de proyectos en CODEAMUS**

---

## 🚀 Inicio Rápido

```bash
# 1. Crear archivo nuevo
touch src/content/projects/nombre-proyecto.md

# 2. Copiar template (ver más abajo)
# 3. Guardar archivo
# 4. El proyecto aparecerá automáticamente en home
```

---

## 📂 Ubicación Correcta

```
✅ CORRECTO:   src/content/projects/nombre-proyecto.md
❌ INCORRECTO: src/projects/nombre-proyecto.md
❌ INCORRECTO: src/pages/projects/nombre-proyecto.md
```

---

## 🏷️ Template Base

Copia este template para nuevos proyectos:

```markdown
---
title: "Nombre del Proyecto"
description: "Descripción breve del proyecto (para listado)"
image: "/images/projects/nombre-proyecto.jpg"
link: "https://proyecto.com" # URL del proyecto live (opcional)
technologies: ["React", "Tailwind CSS", "TypeScript"]
featured: true # false para no mostrar en home
---

# Nombre del Proyecto

## Desafío
Descripción del problema/desafío que se resolvió.

## Solución
Cómo se resolvió el problema. Explicación técnica y visual.

### Características principales
- Feature 1
- Feature 2
- Feature 3

## Resultado
Métricas o resultados medibles del proyecto.

---

**Tecnologías usadas:**
Astro, React, Tailwind CSS, TypeScript

**Duración:** 3 semanas

**Cliente testimonial:** (opcional)
> "Quote del cliente sobre el proyecto"
```

---

## 📋 Campos del Frontmatter

```yaml
---
title: String              # Nombre del proyecto (50-70 caracteres)
description: String        # Breve resumen para listado
image: String             # Path a imagen: /images/projects/xxx.jpg
link: String (opcional)   # URL del proyecto live
technologies: Array       # ["Tech1", "Tech2", "Tech3"]
featured: Boolean         # true = mostrar en home, false = solo en portfolio
---
```

**Ejemplo Real:**

```yaml
---
title: "Dayloop - Plataforma de Delivery Intelligence"
description: "Sistema de gestión de entregas en tiempo real con mapas, tracking y análisis de rutas"
image: "/images/projects/dayloop.jpg"
link: "https://dayloop.dev"
technologies: ["React", "Node.js", "PostgreSQL", "Google Maps"]
featured: true
---
```

---

## 🖼️ Imágenes de Proyectos

### Dónde guardar

```
public/images/projects/
├── dayloop.jpg
├── contamacros.jpg
└── [más proyectos...]
```

### Tamaño recomendado

```
Ancho: 1200px (mínimo 800px)
Alto: 600-700px (proporción 16:9 o similar)
Formato: JPG (optimizado) o PNG
Tamaño archivo: < 200KB
```

### Optimizar imágenes

```bash
# Usando ImageMagick (si tienes instalado)
convert proyecto.png -resize 1200x600 -quality 85 proyecto.jpg

# Online tool: https://imageoptim.com
```

---

## 📝 Estructura de Contenido Recomendada

### 1. Introducción (50-100 palabras)
- Nombre del proyecto
- Tipo (landing page, app, sitio web, etc)
- Industria/cliente

### 2. Desafío (100-150 palabras)
- Problema que tenía el cliente
- Limitaciones anteriores
- Objetivo del proyecto

### 3. Solución (200-300 palabras)
- Cómo se resolvió
- Tecnologías usadas
- Features principales
- Arquitectura (opcional)

### 4. Resultado (50-100 palabras)
- Métricas medibles
- Beneficios para el cliente
- Feedback positivo

### 5. Testimonial (opcional)
- Quote del cliente
- Nombre y posición

---

## 🎨 Ejemplo Completo

```markdown
---
title: "ContaMacros - Plataforma de Contabilidad Clínica"
description: "App web para gestión de macronutrientes y dietas personalizadas con integración Firebase"
image: "/images/projects/contamacros.jpg"
link: "https://contamacros.com"
technologies: ["React", "Firebase", "Tailwind CSS", "Chart.js"]
featured: true
---

# ContaMacros - Sistema de Contabilidad Nutricional

## Desafío

Una clínica nutricionista necesitaba herramienta para:
- Registrar pacientes y sus planes dietéticos
- Seguimiento diario de macronutrientes
- Generar reportes de progreso
- Integración con wearables (Apple Health, Google Fit)

El cliente usaba Excel manualmente, lo que era ineficiente y propenso a errores.

## Solución

Desarrollé plataforma web fullstack con:

### Features principales
- Autenticación con Firebase
- Dashboard personalizado por paciente
- Cálculo automático de macros
- Gráficas de progreso en tiempo real
- Reportes exportables en PDF
- Mobile responsive

### Tecnología

**Frontend:**
- React 18 + TypeScript
- Tailwind CSS para diseño
- Chart.js para gráficas
- React Query para state management

**Backend:**
- Firebase Firestore (base de datos)
- Firebase Auth (autenticación)
- Cloud Functions para cálculos complejos

**Hosting:**
- Vercel (frontend)
- Firebase (backend + hosting)

## Resultado

Después del deploy:
- ✅ 150+ pacientes registrados en primer mes
- ✅ 45% reducción en tiempo de consulta
- ✅ 98% de satisfacción del cliente
- ✅ Escalabilidad para 10,000+ usuarios

### Feedback del Cliente

> "Excelente plataforma. Nuestros clientes pueden monitorear su progreso en tiempo real. Recomendado para otras clínicas nutricionales."
> 
> **— Dra. María Rodríguez, Directora Nutricionista**

---

**Stack:** React, Firebase, Tailwind CSS, Chart.js  
**Duración:** 4 semanas  
**Tipo:** Web App (SaaS)  
**Status:** ✅ En Producción
```

---

## 🏷️ Campos Especiales

### `featured: true` vs `featured: false`

```
featured: true   → Aparece en home (máximo 3-4 proyectos)
featured: false  → Solo en página /portfolio completa
```

**Estrategia:**
- Muestra en home: 3 proyectos más impactantes
- Guarda otros en portfolio para que vean el volumen de trabajo

### `technologies: []`

```javascript
// Array de strings con tecnologías usadas
technologies: [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Firebase",
  "Vercel"
]

// Máximo 5-6 tecnologías por proyecto
// Las más relevantes primero
```

### `link: "https://proyecto.com"`

```yaml
# Si el proyecto está live
link: "https://ejemplo.com"

# Si no está disponible (cliente confidencial)
# Omite el campo completamente
# No uses: link: ""
```

---

## 🚀 Publicar Cambios

```bash
# 1. Guardar archivo
# src/content/projects/nuevo-proyecto.md guardado

# 2. Asegurar que imagen existe
# public/images/projects/nuevo-proyecto.jpg guardado

# 3. Commit
git add src/content/projects/
git add public/images/projects/
git commit -m "feat(projects): agregar proyecto nuevo-proyecto"

# 4. Push
git push origin main

# 5. Vercel despliega automáticamente
# Verifica: https://codeamus.dev/projects/nuevo-proyecto
```

---

## 🔄 Actualizar Proyecto Existente

```bash
# 1. Edita el archivo
# nano src/content/projects/dayloop.md

# 2. Commit cambios
git add src/content/projects/dayloop.md
git commit -m "docs(projects): actualizar descripción dayloop"

# 3. Push
git push origin main
```

---

## ✅ Checklist Pre-Publicación

- [ ] Archivo ubicado en: `src/content/projects/slug.md`
- [ ] Imagen guardada en: `public/images/projects/slug.jpg`
- [ ] Título: 30-70 caracteres
- [ ] Description: 60-120 caracteres
- [ ] Image path: correcto y archivo existe
- [ ] Technologies: 3-6 items, strings válidos
- [ ] Featured: true o false (sin comillas)
- [ ] Link: URL válida o campo omitido
- [ ] Contenido: mínimo 200 palabras
- [ ] Markdown: sin errores de sintaxis
- [ ] Imágenes optimizadas: < 200KB
- [ ] Sin faltas ortográficas
- [ ] Commit message claro
- [ ] Push a main completado

---

## 🎨 Gallery/Grid de Proyectos

El grid en home muestra:
- Todos los proyectos con `featured: true`
- Ordenados por fecha (más reciente primero)

En `/portfolio`:
- Todos los proyectos (featured y no featured)
- Con filtros por tecnología (opcional)

```astro
<!-- En src/components/Projects.astro -->
const projects = await getCollection('projects');
const featured = projects.filter(p => p.data.featured);
```

---

## 🔍 Cómo Ver Proyectos en Producción

```bash
# Home (ve últimos 3-4 featured)
https://codeamus.dev

# Portfolio completo
https://codeamus.dev/portfolio

# Proyecto individual
https://codeamus.dev/projects/dayloop
```

---

## 📊 Estrategia de Casos de Estudio

### Qué Mostrar

**✅ BUEN CASO:**
- Proyecto completado y en producción
- Resultados medibles (usuarios, conversión, etc)
- Cliente satisfecho
- Tecnologías modernas

**❌ NO MOSTRAR:**
- Proyectos en desarrollo o cancelados
- Sin resultados verificables
- Código legacy/viejo
- Cliente pidió confidencialidad

### Rotación Recomendada

```
Cada mes:
1. Actualiza "featured" con proyectos más recientes
2. Agrega 1-2 nuevos casos de estudio
3. Archiva proyectos antiguos (featured: false)
```

---

## 🏷️ Nomenclatura de Archivos

```
✅ BIEN:
nombre-proyecto.md
mí-app-web.md
proyecto-cliente-2026.md

❌ MAL:
NombreProyecto.md (usa kebab-case)
nombre_proyecto.md (usa - no _)
nombreproject.md (sin acentos si aplica)
proyecto (sin extensión .md)
```

---

## 🖼️ Alt Text para Imágenes

Si usas imágenes dentro del contenido:

```markdown
![Descripción de imagen - incluye keyword si aplica](URL)

# ✅ BIEN:
![Dashboard de ContaMacros mostrando gráficas de macronutrientes](/images/projects/contamacros-dashboard.jpg)

# ❌ MAL:
![imagen](/images/projects/img1.jpg)
```

---

## 📝 Preguntas Frecuentes

**P: ¿Cuántos proyectos debo mostrar?**  
R: Mínimo 3, máximo 6-8 en home. Todos en portfolio.

**P: ¿Puedo mostrar proyectos de clientes confidenciales?**  
R: Sí, pero sin mostrar datos sensibles o de identificación.

**P: ¿Debo actualizar proyectos viejos?**  
R: Mantenlos actualizado si el proyecto sigue vigente. Si es viejo/cancelado, archívalo.

**P: ¿Qué pasa con los archivos que elimino?**  
R: Desaparecen del sitio. Git guarda el historial si necesitas recuperar.

---

**Ver más**: [Blog guía](/docs/guias/BLOG.md) | [Estructura proyecto](/docs/guias/ESTRUCTURA.md)
