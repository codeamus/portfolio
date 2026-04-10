# 💬 MENSAJES DE WHATSAPP CONTEXTUALES

**Sistema de mensajes dinámicos según sección y servicio**

---

## 🎯 Concepto

Cada botón de WhatsApp ahora envía un mensaje **específico y contextual** dependiendo de:
- 📍 Dónde está el botón (Hero, Servicios, Contacto, Footer)
- 🎨 Qué servicio promociona (Landing, Sitio Web, App)
- 👤 Qué necesita el usuario en ese momento

---

## 📊 Matriz de Mensajes

### 🌐 LANDING PAGES

**Ubicación**: Tarjeta de Servicios (CTA: "Empezar")
```
Mensaje: "Hola Matías 👋\n\nMe interesa crear una landing page para mi negocio. ¿Cuál es tu disponibilidad?"

Por qué: 
- El usuario YA sabe que quiere landing page
- Solo necesita confirmar disponibilidad
- Corto y directo
```

---

### 🏢 SITIOS WEB + E-COMMERCE

**Ubicación**: Tarjeta de Servicios (CTA: "Cotizar")
```
Mensaje: "Hola Matías 👋\n\nNecesito un sitio web profesional con múltiples secciones. ¿Cuál es el presupuesto y tiempo?"

Por qué:
- El usuario YA sabe que quiere sitio web
- Necesita saber precio y timeline
- Específico y orientado a decisión
```

---

### 📱 APPS MÓVILES

**Ubicación**: Tarjeta de Servicios (CTA: "Consultar")
```
Mensaje: "Hola Matías 👋\n\nTengo una idea para una app móvil. ¿Podemos discutirla?"

Por qué:
- El usuario tiene una idea pero necesita validarla
- "Consultar" sugiere que es una idea temprana
- Invita a la conversación
```

---

### 🚀 HERO SECTION

**Ubicación**: Botón principal "Quiero mi web/app"
```
Mensaje: "Hola Matías 👋\n\nMe interesa crear un sitio web o app para mi negocio. ¿Cuál sería la mejor opción y cuál es el costo?"

Por qué:
- El usuario RECIÉN llegó al sitio
- No sabe exactamente qué necesita
- Ofrece ambas opciones (web/app)
- Pregunta sobre recomendación
```

---

### ✉️ CONTACTO

**Ubicación**: Botón alternativo "Escribir por WhatsApp" en formulario
```
Mensaje: "Hola Matías 👋\n\nMe interesa conocer más sobre tus servicios de desarrollo web y apps."

Por qué:
- Usuario está en formulario de contacto
- Quiere opción más rápida (WhatsApp)
- Mensaje genérico pero profesional
```

---

### 👣 FOOTER

**Ubicación**: CTA principal del footer
```
Mensaje: "Hola Matías 👋\n\nQuiero hablar sobre mi proyecto de desarrollo."

Por qué:
- Usuario ya leyó toda la página
- Conoce servicios pero necesita hablar
- Corto, directo, profesional
```

---

## 🔧 Cómo Funciona Técnicamente

### En `src/utils/const.ts`:

```typescript
export const WHATSAPP_MESSAGES = {
  // Landing Pages
  landing: {
    cta: "URL_WHATSAPP_1",
  },
  
  // Sitios Web
  sitio: {
    cta: "URL_WHATSAPP_2",
  },
  
  // Apps Móviles
  app: {
    cta: "URL_WHATSAPP_3",
  },
  
  // Hero Section
  hero: "URL_WHATSAPP_HERO",
  
  // Footer
  footer: "URL_WHATSAPP_FOOTER",
  
  // General
  general: "URL_WHATSAPP_GENERAL",
};
```

### En los Componentes:

```astro
<a href={WHATSAPP_MESSAGES.landing.cta}>Empezar</a>
<a href={WHATSAPP_MESSAGES.hero}>Quiero mi web/app</a>
<a href={WHATSAPP_MESSAGES.footer}>Hablemos por WhatsApp</a>
```

---

## 📈 Beneficios

### Para el usuario:
✅ Mensajes personalizados según contexto  
✅ No tiene que escribir el mensaje  
✅ Ahorra tiempo y fricción  
✅ Comunicación más clara

### Para ti (Matías):
✅ Recibes intención clara desde el inicio  
✅ Sabes qué servicio busca  
✅ Puedes calificar leads mejor  
✅ Conversación más eficiente

---

## 💡 Ejemplos de Flujo

### Flujo 1: Usuario Decidido
```
Usuario llega → Lee Landing Pages
            ↓
        Ve precio ($100-200K)
            ↓
        Click: "Empezar"
            ↓
WhatsApp abre con:
"Me interesa crear una landing page para mi negocio. 
¿Cuál es tu disponibilidad?"
            ↓
Matías sabe EXACTAMENTE qué quiere
```

### Flujo 2: Usuario Indeciso
```
Usuario llega → Lee todo
            ↓
        No sabe qué necesita
            ↓
Click en Hero: "Quiero mi web/app"
            ↓
WhatsApp abre con:
"Me interesa crear un sitio web o app. 
¿Cuál sería la mejor opción?"
            ↓
Matías puede ayudar con recomendación
```

### Flujo 3: Usuario Escéptico
```
Usuario llega → Lee
            ↓
        Casi al final de la página
            ↓
Click Footer: "Hablemos por WhatsApp"
            ↓
WhatsApp abre con mensaje genérico
            ↓
Oportunidad de cerrar la venta
```

---

## 📱 Mensajes Completos (Copiar-Pegar)

Si necesitas editar los mensajes manualmente:

### Landing
```
Hola Matías 👋

Me interesa crear una landing page para mi negocio. ¿Cuál es tu disponibilidad?
```

### Sitio Web
```
Hola Matías 👋

Necesito un sitio web profesional con múltiples secciones. ¿Cuál es el presupuesto y tiempo?
```

### App
```
Hola Matías 👋

Tengo una idea para una app móvil. ¿Podemos discutirla?
```

### Hero
```
Hola Matías 👋

Me interesa crear un sitio web o app para mi negocio. ¿Cuál sería la mejor opción y cuál es el costo?
```

### General
```
Hola Matías 👋

Me interesa conocer más sobre tus servicios de desarrollo web y apps.
```

### Footer
```
Hola Matías 👋

Quiero hablar sobre mi proyecto de desarrollo.
```

---

## 🎨 Visión Futura

### V2 (Próximo):
```
- Mensaje diferente si es primera vez vs repite
- Incluir nombre del usuario (si está en cookie)
- Emojis diferentes por servicio
- Mensajes en tiempo real según hora del día
```

### V3:
```
- Integración con chatbot automático
- Pre-calificar leads por WhatsApp
- Calendario integrado (Calendly)
- Seguimiento automático de leads
```

---

## ✅ Testing

Para verificar que funciona:

1. Ve a cada sección
2. Click en botón de WhatsApp
3. Verifica que el mensaje sea correcto
4. Prueba desde móvil (usuario típico)
5. Verifica que WhatsApp abra automáticamente

---

## 🔍 Métricas a Monitorear

En tu número de WhatsApp, monitorea:

```
📊 Mensajes recibidos por origen:
├── Landing Page: X mensajes
├── Sitio Web: Y mensajes
├── App: Z mensajes
├── Hero: A mensajes
└── Footer: B mensajes

Insight: 
- Si Landing domina → muchos usuarios saben qué quieren
- Si Hero domina → muchos usuarios indecisos
- Si Footer domina → usuarios que casi se van
```

---

## 🚀 Implementación

✅ **Estado**: Completado  
✅ **Commit**: `b7ac2da`  
✅ **Archivos**: 5 componentes actualizados  
✅ **Tests**: Manual (sigue checklist arriba)  

Próximo: Deploy a Vercel con `git push`

---

**Este sistema mejora significativamente la experiencia del usuario**  
**y la calidad de los leads que recibes en WhatsApp.**

¿Quieres agregar más contextos o cambiar algún mensaje?
