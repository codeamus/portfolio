# 📧 Problemas con Emails - Troubleshooting

**Guía para resolver problemas con Formspree y correos que no llegan**

---

## 🎯 Diagnóstico Rápido

### Checklist Inmediato

```
¿El formulario se envía?
  ├─ NO → ve a "Formulario no se envía"
  └─ SÍ → ¿Llega el correo?
       ├─ NO → ve a "Correo no llega"
       └─ SÍ → ✅ Todo funciona
```

---

## ❌ El Formulario NO se Envía

### Error: "Form submission failed" o similar

#### 1. Verifica que Formspree esté configurado

```bash
# En src/components/ContactForm.tsx
# Busca la línea:

const FORMSPREE_ID = import.meta.env.PUBLIC_FORMSPREE_ID;
// Debe ser: mreowrjr
```

**Si es undefined:**

```bash
# 1. Crea archivo .env.local (gitignore)
echo "PUBLIC_FORMSPREE_ID=mreowrjr" > .env.local

# 2. Reinicia servidor
npm run dev

# 3. Prueba formulario de nuevo
```

#### 2. Verifica CORS

```bash
# Abre DevTools (F12)
# Ve a Network tab
# Rellena y envía formulario
# Busca request a formspree.io

# Si ves error CORS:
# → Formspree está bloqueando por origen

# Solución: Configura en Formspree
# https://formspree.io/dashboard
# → Proyecto codeamus
# → Settings → Allowed Domains
# → Agrega: codeamus.dev, localhost:4321
```

#### 3. Validación del formulario

```bash
# Abre Console (F12)
# Intenta enviar
# Busca mensajes de error

# Si dice "Zod validation error":
# → Uno de los campos no cumple el schema

# Schema actual:
# - nombre: string, 2+ caracteres
# - email: email válido
# - mensaje: string, 10+ caracteres
```

**Ejemplo de validación que falla:**

```javascript
// ❌ Esto no se envía
{
  nombre: "A",  // Menos de 2 caracteres
  email: "invalid",  // No es email válido
  mensaje: "Hola"  // Menos de 10 caracteres
}

// ✅ Esto sí se envía
{
  nombre: "Juan",  // 4 caracteres ✓
  email: "juan@example.com",  // Email válido ✓
  mensaje: "Hola, necesito ayuda"  // 26 caracteres ✓
}
```

#### 4. Verifica método POST

```bash
# En Network tab
# Busca request a https://formspree.io/f/mreowrjr
# Method debe ser: POST
# Si es GET → está mal configurado
```

---

## 📧 Correo NO Llega

### Caso 1: Formulario se envía (200 OK) pero correo no llega

#### Paso 1: Verifica en Formspree dashboard

```
1. Ve a: https://formspree.io/dashboard
2. Selecciona: Proyecto "codeamus"
3. Ve a: "Submissions" o "Emails"
4. ¿Ves el envío ahí?
   ├─ SÍ (pero no en inbox) → ve a Caso 2
   └─ NO → formulario no se envió realmente
```

#### Paso 2: Revisa logs de Formspree

```
https://formspree.io/dashboard
→ Proyecto codeamus
→ Activity/Logs
→ Busca la submisión
→ ¿Qué estado tiene?
   ├─ Pending → espera o verifica email
   ├─ Sent ✓ → está en inbox (chequea spam)
   └─ Failed → ve "Caso 3"
```

#### Paso 3: Chequea el email destino

```bash
# Verifica en configuración de Formspree
https://formspree.io/dashboard
→ Proyecto codeamus
→ Settings
→ "Email address" debe ser: contact@codeamus.dev
```

**Si es incorrecto:**
```
1. Edita el email en Formspree
2. Reenvía un test desde dashboard
3. Verifica que llegue
4. Luego prueba desde el sitio
```

---

### Caso 2: Email llega a Formspree pero no a inbox

#### Problema: El correo está en SPAM

**Solución 1: Whitelist en tu email**

```
1. Ve a tu Gmail/Outlook/etc
2. Busca el correo de Formspree
3. Agrega a contactos "no es spam"
4. Crea filtro para siempre permitir formspree.io
```

**Solución 2: Verifica SPF/DKIM en Formspree**

```
https://formspree.io/dashboard
→ Proyecto codeamus
→ Settings → Email Configuration
→ Verifica SPF y DKIM records
→ Copia records a tu registrador DNS
   (Godaddy, Namecheap, etc)
```

**Solución 3: Usa email corporativo**

En lugar de:
- ❌ contact@codeamus.dev (puede no existir)
- ✅ matias04041994@gmail.com (email real)

Cambia en Formspree → Settings → Email address

#### Problema: Formspree tiene límite de emails

```
Plan gratuito: 50 emails/mes
Plan pro: Ilimitado

Si pasaste 50, agrega plan pro o espera a fin de mes
```

---

### Caso 3: Error en Formspree (status Failed)

#### Error: "Invalid email"

```
Significa: El campo "email" no es un email válido

Solución:
1. Verifica que el usuario escriba un email real
2. Agrega validación HTML5: <input type="email" />
3. Usa Zod para validar antes de enviar
```

#### Error: "Spam detected"

```
Significa: Formspree detectó spam

Causas:
1. Demasiados envíos rápido (spam bot)
2. Contenido con palabras spam
3. IP está en blacklist

Solución:
1. Espera 24 horas
2. Intenta desde otra IP (VPN)
3. Limpia el mensaje de palabras spam
4. Contacta a Formspree si persiste
```

#### Error: "Rate limit exceeded"

```
Significa: Enviaste muchos emails en poco tiempo

Solución:
1. Implementa cooldown en formulario
   const [sending, setSending] = useState(false);
   // Deshabilita button mientras sending === true
   
2. Espera 1-2 horas
3. Reintenta
```

---

## 🔧 Debugging Paso a Paso

### Paso 1: Abrir DevTools (F12)

```
Press: F12 (Windows/Linux) or Cmd+Option+I (Mac)
→ Pestaña: Network
→ Filtro: XHR/Fetch
```

### Paso 2: Rellenar y enviar formulario

```
1. Completa todos los campos
2. Click en "Enviar"
3. En Network, busca request a:
   https://formspree.io/f/mreowrjr
```

### Paso 3: Analizar respuesta

```
Request URL: https://formspree.io/f/mreowrjr
Method: POST
Status: ???

Status 200 ✓ = Enviado correctamente
Status 403 ❌ = CORS o auth error
Status 429 ❌ = Rate limit
Status 500 ❌ = Error servidor Formspree
```

### Paso 4: Ver respuesta JSON

```
Network tab → Click en la request
→ Response tab
→ JSON response:

{
  "ok": true,           // true = enviado
  "next": "/thanks"     // URL redirect
}

vs

{
  "ok": false,
  "errors": [...]       // Array de errores
}
```

---

## 🔄 Flujo Correcto Completo

```
Usuario rellena form
    ↓
onClick → validación Zod
    ↓
Si falla validación → mostrar error local
    ↓
Si pasa → POST a formspree.io
    ↓
Response 200 + ok: true
    ↓
Mostrar success message
    ↓
Redirect a /thanks (opcional)
    ↓
Email llega a contact@codeamus.dev (o tu email)
```

---

## 📋 Checklist de Configuración

- [ ] Form ID correcto en .env: `PUBLIC_FORMSPREE_ID=mreowrjr`
- [ ] Email destino en Formspree: `contact@codeamus.dev`
- [ ] CORS configurado en Formspree (allowed domains)
- [ ] SPF/DKIM records en DNS (si es custom domain)
- [ ] Validación Zod correcta en ContactForm.tsx
- [ ] No hay rate limiting (no envíes 100 veces en 1 min)
- [ ] El email destino existe y está verificado
- [ ] Whitelist de remitente en tu email client

---

## 🚀 Alternativas a Formspree

Si Formspree sigue dando problemas, considera:

### Resend (Recomendado para Astro)

```javascript
// npm install resend
// Más fácil que Formspree para Astro

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'contact@codeamus.dev',
  subject: 'Nuevo mensaje de ' + nombre,
  html: mensaje,
});
```

### SendGrid

```
Pros: Más features, mejor deliverability
Cons: Más caro
```

### Mailgun

```
Pros: Flexible, barato
Cons: Más complejo de configurar
```

---

## 📞 Soporte

**Si persiste el problema:**

1. Crea account en Formspree
2. Ve a Settings → Support
3. Contacta su equipo directo

O contacta a: matias04041994@gmail.com

---

**Última actualización**: Abril 2026
**Formspree Form ID**: mreowrjr
**Email destino**: contact@codeamus.dev
