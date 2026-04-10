# 🔴 Errores de Linter - Troubleshooting

**Guía para resolver TypeScript, ESLint y Astro errors**

---

## 🎯 Diagnóstico Rápido

```bash
# Ver todos los errores
npm run astro check

# Resultado esperado:
# ✓ No errors (si todo está bien)
# ✗ X errors (si hay problemas)
```

---

## ❌ Errores Comunes

### Error: "Property 'xxx' does not exist"

```
TypeScript error: Property 'xxx' does not exist on type '{...}'
```

#### Causa: Campo no existe en la interfaz

```typescript
// ❌ MAL - "image" no existe en project
const image = project.data.image;  // Error si no en schema

// ✅ BIEN - verifica el schema
// En src/content/config.ts
const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),  // ← Asegúrate que existe
  })
});
```

#### Solución

```typescript
// 1. Verifica el schema en src/content/config.ts
// 2. Agrega el campo si falta
// 3. O remove la referencia si no aplica

// Alternativa: Haz campo opcional
const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),  // ← Ahora es opcional
  })
});
```

---

### Error: "Cannot find module"

```
Cannot find module '@layouts/Layout.astro' or its corresponding type declarations
```

#### Causa 1: Path alias no coincide

```bash
# En tsconfig.json
"paths": {
  "@layouts/*": ["src/layouts/*"],  // ← Verifica que existe
}

# Verifica que la carpeta existe
ls -la src/layouts/
```

#### Causa 2: Archivo no existe

```bash
# Error: @components/Header.astro not found

# Solución: Crea el archivo o arregla la ruta
touch src/components/Header.astro
```

#### Causa 3: Extensión incorrecta

```bash
# ❌ MAL
import Layout from '@layouts/Layout'

# ✅ BIEN
import Layout from '@layouts/Layout.astro'
```

---

### Error: "Expected x but got y"

```
Type 'string' is not assignable to type 'number'
```

#### Causa: Tipo de dato incorrecto

```typescript
// ❌ MAL
const count: number = "5";  // string, no number

// ✅ BIEN
const count: number = 5;
// O si es string:
const count: string = "5";
```

#### En Astro components

```astro
---
// ❌ MAL - pubDate debe ser Date
const posts = {
  pubDate: "2026-04-10"  // string
};

// ✅ BIEN
const posts = {
  pubDate: new Date("2026-04-10")  // Date object
};

// En content, mejor:
// Frontmatter: pubDate: 2026-04-10 (YAML date)
---
```

---

### Error: "Object is possibly 'null' or 'undefined'"

```
Object is possibly 'null'
```

#### Causa: Variable puede no existir

```typescript
// ❌ MAL - posts puede ser undefined
const firstPost = posts[0].title;

// ✅ BIEN - verifica primero
const firstPost = posts?.[0]?.title ?? "No posts";

// O más seguro:
if (posts && posts.length > 0) {
  const firstPost = posts[0].title;
}
```

---

### Error: "Argument of type 'unknown' is not assignable"

```
Argument of type 'unknown' is not assignable to parameter of type 'string'
```

#### Causa: TypeScript no sabe el tipo

```typescript
// ❌ MAL
const value = someFunction();  // desconocido
console.log(value.toUpperCase());

// ✅ BIEN - especifica tipo
const value: string = someFunction();
console.log(value.toUpperCase());

// O verifica tipo:
if (typeof value === 'string') {
  console.log(value.toUpperCase());
}
```

---

## 🏗️ Errores en Astro Components

### Error: "astro:jsx" issue

```
X-TypeScript error occurred while rendering the component template
```

#### Causa: Sintaxis JSX incorrecta en .astro

```astro
<!-- ❌ MAL - falta punto en eventos -->
<button onClick={() => alert('Hi')}>Click</button>

<!-- ✅ BIEN - Astro usa on:click -->
<button onclick={() => alert('Hi')}>Click</button>

<!-- O mejor, en scripts separados -->
<button id="btn">Click</button>
<script>
  document.getElementById('btn')?.addEventListener('click', () => {
    alert('Hi');
  });
</script>
```

### Error: Props validation

```
Expected 'title' but got 'xxx'
```

#### Define props correctamente en componentes

```astro
<!-- src/components/Card.astro -->
---
interface Props {
  title: string;
  description: string;
  image?: string;  // Optional
}

const { title, description, image } = Astro.props;
---

<div>
  <h1>{title}</h1>
  <p>{description}</p>
  {image && <img src={image} />}
</div>
```

---

## 🔧 Procedimiento para Resolver

### Paso 1: Ejecuta astro check

```bash
npm run astro check

# Copia el error exacto
# Ejemplo:
# src/components/Card.astro:5:3 - error: Property 'title' does not exist
```

### Paso 2: Identifica el error

```bash
# Formato: archivo:línea:columna - error: descripción

src/components/Card.astro:5:3
 ↑ Archivo
        ↑ Línea 5
          ↑ Columna 3
```

### Paso 3: Lee la línea específica

```bash
# Abre el archivo en tu editor en esa línea
# Busca qué está causando el error
```

### Paso 4: Aplica solución

```bash
# Basado en el tipo de error, usa las soluciones arriba
```

### Paso 5: Verifica

```bash
npm run astro check

# Debe mostrar: ✓ No errors
```

---

## 📋 Lista de Errores por Tipo

### TypeScript (Type Checking)

| Error | Causa | Solución |
|-------|-------|----------|
| Property 'x' does not exist | Campo no en schema | Agrega a schema o usa optional |
| Cannot find module | Path incorrecto | Verifica tsconfig paths |
| Type 'A' not assignable to 'B' | Tipo incorrecto | Cambia tipo o convierte valor |
| Object is possibly null | Variable undefined | Usa optional chaining (?.) |

### ESLint (Code Quality)

| Error | Causa | Solución |
|-------|-------|----------|
| Unused variable | Variable no usada | Elimina o usa |
| Variable declared but never assigned | Assignment falta | Asigna valor |
| No-explicit-any | Type es 'any' | Especifica tipo real |

### Astro (Compilation)

| Error | Causa | Solución |
|-------|-------|----------|
| astro:jsx error | Sintaxis JSX mal | Usa sintaxis Astro correcta |
| Component not found | Import incorrecto | Verifica path y extensión |
| Props validation | Props incorrectos | Define interface Props |

---

## 🚀 Fix Común: "Cannot find module"

```bash
# Error típico:
# Cannot find module '@components/Button' or type

# Paso 1: Verifica que existe
ls src/components/Button.astro

# Paso 2: Si no existe, crea
touch src/components/Button.astro

# Paso 3: Verifica tsconfig.json
grep "@components" tsconfig.json
# Debe mostrar: "@components/*": ["src/components/*"]

# Paso 4: Astro check
npm run astro check
# Debe pasar
```

---

## 💡 Pro Tips

### Disable Error Temporarily (Solo en dev)

```typescript
// @ts-ignore
const something = unknownType.property;
```

**Nota:** No uses en producción. Solo para debug.

### Check Without Fix

```bash
# Ver todos los errores sin intentar arreglar
npm run astro check

# VS

# Build y arregla automáticamente (si aplica)
npm run build
```

### Format Code (Prettier)

```bash
# Puede arreglar algunos errores automáticamente
npm run format

# O individual:
npx prettier --write src/components/Button.astro
```

---

## 🔄 Flujo Completo para Resolver

```bash
# 1. Build falla en Vercel
# → Ve a Vercel Dashboard → Deployments → Click deploy

# 2. Lee el error del log
# → Copia línea exacta del error

# 3. Reproduce en local
npm run astro check
# → Busca el mismo error

# 4. Abre el archivo en editor
# → Ve a línea específica

# 5. Identifica y fija
# → Aplica solución según tipo de error

# 6. Verifica
npm run astro check
# → Debe mostrar ✓ No errors

# 7. Commit y push
git add .
git commit -m "fix: resolver error de type"
git push origin main
```

---

## 🛠️ Herramientas Útiles

### VS Code Extensions

```
- TypeScript Vue Plugin (Si usas Vue, no aplica)
- Astro
- ESLint
- Prettier - Code formatter
```

### Commands

```bash
npm run astro check    # Check errors sin build
npm run build          # Build completo (find errors)
npm run lint           # Run ESLint
npm run format         # Format código
npm run preview        # Preview del build
```

---

## 📞 Cuándo Pedir Ayuda

**Puedo arreglarlo:**
- Error de TypeScript
- Component props incorrectos
- Path alias mal configurado
- Syntax error en Astro

**Crea issue en GitHub si:**
- Error que no aparece en local pero sí en Vercel
- Error incomprensible después de seguir la guía
- Necesitas refactoring de código

---

**Última actualización**: Abril 2026
**Relacionado**: [Setup](/docs/setup/README.md) | [Troubleshooting](/docs/troubleshooting/README.md)
