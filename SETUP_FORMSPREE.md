# 🚀 SETUP FORMSPREE - Recibir Emails Gratis

**Objetivo**: Conectar el formulario de contacto con Formspree para recibir emails en `contact@codeamus.dev`

**Tiempo de setup**: 5-10 minutos  
**Costo**: 🆓 GRATIS (50 emails/mes, sin código de tarjeta)

---

## 📋 PASO 1: Crear Cuenta en Formspree

1. Ve a: **https://formspree.io**
2. Haz click en **Sign Up**
3. Selecciona: **Continue with Email**
4. Ingresa tu email: `contact@codeamus.dev` (o tu email personal)
5. Verifica el email en tu bandeja de entrada
6. Crea una contraseña segura

---

## 📝 PASO 2: Crear Un Nuevo Form

Dentro del dashboard de Formspree:

1. Haz click en **+ New Form** (lado izquierdo)
2. Rellena:
   - **Form Name**: `Contacto CODEAMUS`
   - **Email**: `contact@codeamus.dev`
   - **Recapcha**: Deja sin activar (opcional)
3. Haz click en **Create Form**

Formspree te mostrará algo como:
```
Form ID: f_abcd1234efgh5678
```

---

## 🔑 PASO 3: Obtener tu Form ID

Después de crear el form, Formspree mostrará:

```
Endpoint: https://formspree.io/f/YOUR_FORM_ID
```

**Copia el `YOUR_FORM_ID`** (será algo como `f_xxxxx`)

---

## 💻 PASO 4: Actualizar el Código

En el archivo **`src/components/ContactForm.astro`**, busca la línea:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
```

Y reemplaza `YOUR_FORMSPREE_ID` con tu Form ID. Por ejemplo:

```typescript
// ANTES
const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {

// DESPUÉS (si tu Form ID es f_abc123xyz)
const response = await fetch('https://formspree.io/f/f_abc123xyz', {
```

---

## ✅ PASO 5: Verificar que Funciona

1. Haz git push y deploy a Vercel
2. Ve a: https://codeamus.dev/#contacto
3. Rellena el formulario con:
   - Nombre: Tu nombre
   - Email: Tu email personal
   - Servicio: Landing Page
   - Mensaje: "Test"
4. Haz click en **Enviar mensaje**
5. Deberías ver: ✓ ¡Mensaje enviado con éxito!

---

## 📧 PASO 6: Revisar tu Bandeja

1. Ve a: **contact@codeamus.dev** (tu email)
2. Busca un email de Formspree
3. Si recibiste el email de prueba → ✅ **FUNCIONA**

---

## 📊 Dashboard Formspree

Una vez configurado, en el dashboard de Formspree verás:

```
Submissions this month: 1/50
├── Email: [tu email personal]
├── Date: 2026-04-10
├── Status: ✓ Sent
└── Message: Test
```

Puedes:
- ✅ Ver todos los mensajes recibidos
- ✅ Descargar en CSV
- ✅ Marcar como read/unread
- ✅ Responder directamente desde el dashboard
- ✅ Recibir notificaciones por email

---

## 🎯 Planes Formspree

### Free (Gratis)
```
✅ 50 emails/mes
✅ 1 formulario
✅ Notificaciones por email
❌ Sin integraciones avanzadas
```

### Pro ($25/mes - Si necesitas más)
```
✅ 1000 emails/mes
✅ Múltiples formularios
✅ Integraciones (Slack, Discord, etc)
✅ Email confirmations
✅ File uploads
```

Para la mayoría de startups, el **plan Free es suficiente** (50 emails = ~5-6 leads/mes aprox).

---

## 🔐 Seguridad

**Formspree es seguro porque:**
- ✅ Usa HTTPS (encriptado)
- ✅ No guarda datos personales (solo los emails de mensajes)
- ✅ Verificado por Vercel (partner oficial)
- ✅ GDPR compliant

---

## 🚨 IMPORTANTE: Cambiar YOUR_FORMSPREE_ID

**⚠️ ASEGÚRATE DE REEMPLAZAR `YOUR_FORMSPREE_ID` CON TU FORM ID REAL**

Si no lo haces, el formulario mostrará error al enviar.

Ubicación: `src/components/ContactForm.astro` línea ~236

```typescript
// ❌ INCORRECTO (no funcionará)
const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {

// ✅ CORRECTO (reemplaza YOUR_FORMSPREE_ID con tu ID)
const response = await fetch('https://formspree.io/f/f_abc123xyz', {
```

---

## 📝 Checklist Final

- [ ] Cuenta en Formspree creada
- [ ] Form creado en Formspree dashboard
- [ ] Form ID copiado
- [ ] ContactForm.astro actualizado con tu Form ID
- [ ] Git push realizado
- [ ] Vercel deploy completado
- [ ] Formulario testeado
- [ ] Email de prueba recibido
- [ ] ✅ LISTO PARA PRODUCCIÓN

---

## 🆘 Troubleshooting

### El formulario no envía (error en consola)
```
❌ "Failed to fetch from formspree.io/f/YOUR_FORMSPREE_ID"
→ Verifica que YOUR_FORMSPREE_ID esté reemplazado con tu ID real
```

### No recibo emails
```
❌ "Email submitted but not received"
→ Revisa spam/junk folder
→ Verifica que email en Formspree sea correcto
```

### CORS error
```
❌ "Cross-Origin Request Blocked"
→ Formspree maneja CORS correctamente
→ Intenta desde incógnito (cache issue)
```

---

## 📞 Soporte Formspree

Si tienes problemas:
- Visita: https://formspree.io/help
- Email: support@formspree.io
- Discord: https://discord.com/invite/formspree

---

**Estado**: ✅ Listo para configurar  
**Última actualización**: 10 de Abril, 2026

El formulario enviará emails automáticamente a contact@codeamus.dev sin costo.
