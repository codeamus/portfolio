# 🔧 TROUBLESHOOTING - No me llegan los emails

**Problema**: Formulario envía correctamente pero NO llegan los emails  
**Causa probable**: Email de Formspree va a spam o no fue confirmado

---

## ✅ DIAGNÓSTICO RÁPIDO

### Paso 1: Revisa la carpeta de SPAM
```
1. Abre Gmail (contact@codeamus.dev)
2. Click en "Spam" (lado izquierdo)
3. Busca email de "noreply@formspree.io"
4. Si está ahí → SOLUCIÓN ABAJO
```

### Paso 2: Abre DevTools y revisa logs
```
1. Ve a: https://codeamus.dev
2. Abre DevTools: F12 o Ctrl+Shift+I
3. Ve a pestaña "Console"
4. Completa el formulario y envía
5. Busca logs con: 📨, 📧, ✅, ❌
```

**Qué debería ver:**
```
📨 Enviando formulario a Formspree... {name: "Juan", email: "...", service: "landing"}
📧 Respuesta de Formspree: 200 OK
✅ Email enviado correctamente
```

Si ves `❌ Error` → Problema de conexión

---

## 🔴 SOLUCIÓN 1: Email en Spam (MÁS PROBABLE)

### Paso 1: Encontrar email en spam
```
1. Gmail → Spam folder
2. Busca: "noreply@formspree.io"
3. Click en el email
4. Click en botón: "Not spam" / "Mark as not spam"
```

### Paso 2: Agregar a contactos
```
1. Abre email de Formspree
2. Hover sobre "noreply@formspree.io"
3. Click en "Add to contacts"
```

### Paso 3: Crear regla en Gmail
```
1. Gmail settings ⚙️
2. Filters and Blocked Addresses
3. + Create new filter
4. From: noreply@formspree.io
5. Create filter
6. Selecciona: Never send to Spam
7. Click: Create filter
```

**Resultado**: Próximos emails de Formspree irán a Inbox ✅

---

## 🔴 SOLUCIÓN 2: Email No Fue Confirmado

Si **NO recibiste** email de confirmación de Formspree:

### Paso 1: Ir a Formspree
```
1. Ve a: https://formspree.io
2. Click: Sign In
3. Email: contact@codeamus.dev
4. Password: [tu contraseña]
```

### Paso 2: Revisar estado del email
```
1. Dashboard → Tu form (Contacto CODEAMUS)
2. Click en "Settings" ⚙️
3. Mira: "Recipient Email: contact@codeamus.dev"
4. Busca estado: "Verified" ✅ o "Not verified" ❌
```

### Paso 3: Si NO está verificado
```
1. Click en el email
2. Click: "Resend verification email"
3. Abre tu email (contact@codeamus.dev)
4. Busca email de Formspree
5. Click en link de verificación
6. Listo ✅
```

---

## 🔴 SOLUCIÓN 3: Verificar Form ID

El Form ID debe ser exacto: `mreowrjr`

### Verificar:
```
1. Ve a: https://formspree.io/dashboard
2. Selecciona tu form: "Contacto CODEAMUS"
3. Mira URL: https://formspree.io/forms/mreowrjr/...
4. El ID después de /forms/ es tu Form ID

Si es diferente a "mreowrjr" → Necesitamos actualizar el código
```

---

## 🔴 SOLUCIÓN 4: Test Directo en Formspree

### Paso 1: Ir al dashboard
```
1. https://formspree.io/dashboard
2. Selecciona: Contacto CODEAMUS
3. Click: "Test form"
```

### Paso 2: Envía test
```
1. Completa formulario test
2. Click: Submit
3. Debería decir: "✅ Success"
```

### Paso 3: Revisa email
```
1. Abre: contact@codeamus.dev
2. Busca email del test
3. Si llega → el problema es en el sitio
4. Si NO llega → problema en Formspree
```

---

## 🟢 SOLUCIÓN SI FUNCIONA EL TEST PERO NO EL SITIO

Si el test de Formspree funciona pero el sitio no:

### Problema: CORS (Cross-Origin)
```
El navegador puede estar bloqueando la request.

SOLUCIÓN:
1. Abre DevTools (F12)
2. Console tab
3. Busca errores tipo: "CORS", "403", "blocked"
4. Si hay error CORS → revisar configuración Formspree
```

### Problema: JavaScript error
```
Si ves error en console:
1. Nota el error exacto
2. Es probablemente en el código del formulario
3. Contacta con detalles del error
```

---

## 📋 CHECKLIST DE VERIFICACIÓN

Sigue en orden:

- [ ] ¿Email contact@codeamus.dev está verificado en Formspree?
- [ ] ¿Puedes recibir test desde Formspree dashboard?
- [ ] ¿Form ID es exacto: mreowrjr?
- [ ] ¿Revisaste spam en Gmail?
- [ ] ¿Agregaste a contactos/creaste regla en Gmail?
- [ ] ¿Abriste DevTools y viste logs verdes (✅)?
- [ ] ¿La respuesta de Formspree dice "200 OK"?

Si respondiste SÍ a todo → Los emails DEBEN funcionar

---

## 🆘 SI NADA FUNCIONA

### Opción 1: Verificar Email en Formspree

```
1. https://formspree.io/dashboard
2. Haz click en tu form
3. Mira "Email Submissions" (abajo)
4. ¿Ves entradas recientes?
5. Si SÍ → Los emails SÍ se envían, solo revisión spam
6. Si NO → Hay problema técnico
```

### Opción 2: Cambiar Email Destino

Si nada funciona con contact@codeamus.dev:

```
1. Formspree dashboard
2. Settings
3. Cambia recipient a: [tu email personal]
4. Confirma el nuevo email
5. Prueba formulario otra vez
```

Esto descarta problemas con ese email específico.

### Opción 3: Support de Formspree

Si después de todo sigue sin funcionar:
```
1. Copia el Form ID: mreowrjr
2. Ve a: https://formspree.io/help
3. Contacta support con:
   - Form ID: mreowrjr
   - Fecha del test: [hoy]
   - Screenshot del error (si hay)
```

---

## 🔍 LOGS Y DEBUGGING

### Qué significan los logs en console:

```
✅ 📨 Enviando formulario a Formspree...
   → Normal, el formulario se está enviando

✅ 📧 Respuesta de Formspree: 200 OK
   → Perfecto, Formspree recibió correctamente

✅ ✅ Email enviado correctamente
   → Todo OK, debería llegar el email en ~1 minuto

❌ 📧 Respuesta de Formspree: 403
   → Error de autenticación, posiblemente Form ID incorrecto

❌ ❌ Error de red
   → Sin conexión a internet o firewall bloqueando
```

---

## 📊 LÍNEA DE TIEMPO ESPERADA

```
T0: Usuario envía formulario
  └── Debería ver: ✅ ¡Mensaje enviado con éxito!

T0-5 segundos: Formspree procesa
  └── Si hay error, muestra: ⚠ Error al enviar...

T5-30 segundos: Email preparado
  └── Sin acción del usuario

T30 segundos - 5 minutos: Email llega a inbox
  └── Tú recibes notificación
  └── O va a spam (si no está configurado)

T5+ minutos: Email en spam
  └── Si no llegó a inbox
  └── Revisar carpeta de spam
```

---

## ✨ SOLUCIÓN RÁPIDA (PASOS CLAVE)

Si recién reportas esto:

```
1. Abre Gmail spam folder
2. Busca email de "formspree"
3. Click "Not spam"
4. Agrega a contactos
5. Crea regla de filtro
6. Prueba formulario de nuevo
7. ¡Debería funcionar!
```

**Tiempo total**: 2 minutos

---

## 📞 PRÓXIMO PASO

Una vez verifiques:

1. Completa formulario en: https://codeamus.dev/#contacto
2. Abre DevTools (F12 → Console)
3. **Captura screenshot de los logs**
4. Abre spam folder en Gmail
5. **Captura screenshot si está ahí**
6. Comparte conmigo si necesitas ayuda

Con eso puedo diagnosticar exactamente qué está pasando.

---

**Actualizado**: 10 de Abril, 2026  
**Versión formulario**: Con logs mejorados  
**Status**: Debugging en progreso
