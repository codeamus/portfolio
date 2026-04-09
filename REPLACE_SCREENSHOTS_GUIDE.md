# Guía: Reemplazar Mockups SVG con Screenshots Reales

## Estado Actual

He creado **mockups SVG** para ambos proyectos como placeholders visuales. Los SVGs se ven bien pero definitivamente prefieres usar **screenshots reales de los sitios web y aplicaciones**.

## Archivos Actuales (SVG Placeholders)

```
✅ /public/assets/images/projects/contamacros-desktop.svg    (Placeholder)
✅ /public/assets/images/projects/contamacros-mobile.svg     (Placeholder)
✅ /public/assets/images/projects/dayloop-desktop.svg        (Placeholder)
✅ /public/assets/images/projects/dayloop-mobile.svg         (Placeholder)
```

---

## Paso 1: Capturar Screenshots Reales

### Para ContaMacros

**Desktop (Web):**
1. Abre https://www.contamacros.cl/
2. Redimensiona navegador a **1200x675px**
3. Captura screenshot completo del hero
4. Guarda como `contamacros-desktop.jpg`

**Mobile (App):**
- Opción A: Captura de emulador de Android/iOS
- Opción B: Mockup de phone frame mostrando pantalla de la app
- Guarda como `contamacros-mobile.jpg`

### Para Dayloop

**Desktop (Web):**
1. Abre https://www.dayloop.cl/
2. Redimensiona navegador a **1200x675px**
3. Captura screenshot completo
4. Guarda como `dayloop-desktop.jpg`

**Mobile (App):**
- Captura de app funcionando o emulador
- Muestra la interfaz de tracking de hábitos
- Guarda como `dayloop-mobile.jpg`

---

## Paso 2: Optimizar Imágenes a WebP

Tienes varias opciones:

### Opción A: Usando Online Tools (Más fácil)

1. Ve a: https://cloudconvert.com/
2. Sube el JPG/PNG
3. Selecciona formato: **WebP**
4. Calidad: **70-80%**
5. Descarga el archivo

### Opción B: Usando Comando Local

```bash
# Si tienes ImageMagick instalado
convert contamacros-desktop.jpg -quality 75 contamacros-desktop.webp

# Si tienes cwebp (Google WebP tool)
cwebp -quality 75 contamacros-desktop.jpg -o contamacros-desktop.webp
```

### Opción C: Usando Python

```python
from PIL import Image

# Abrir imagen
img = Image.open('contamacros-desktop.jpg')

# Convertir y optimizar
img.save('contamacros-desktop.webp', 'WEBP', quality=75)

print("✓ Guardado como WebP optimizado")
```

---

## Paso 3: Reemplazar Archivos

Una vez que tengas los `.webp` optimizados:

1. **Elimina los SVG placeholder:**
   ```bash
   cd /public/assets/images/projects/
   rm contamacros-desktop.svg contamacros-mobile.svg
   rm dayloop-desktop.svg dayloop-mobile.svg
   ```

2. **Copia los nuevos WebP:**
   ```bash
   cp ~/Downloads/contamacros-desktop.webp .
   cp ~/Downloads/contamacros-mobile.webp .
   cp ~/Downloads/dayloop-desktop.webp .
   cp ~/Downloads/dayloop-mobile.webp .
   ```

3. **Actualiza los archivos de proyecto** (cambiar `.svg` a `.webp`):

   En `src/content/projects/contamacros.md`:
   ```markdown
   image_desktop: /assets/images/projects/contamacros-desktop.webp
   image_mobile: /assets/images/projects/contamacros-mobile.webp
   ```

   En `src/content/projects/dayloop.md`:
   ```markdown
   image_desktop: /assets/images/projects/dayloop-desktop.webp
   image_mobile: /assets/images/projects/dayloop-mobile.webp
   ```

---

## Paso 4: Validar

```bash
# Verificar que las imágenes están en el lugar correcto
ls -lh public/assets/images/projects/

# Debería ver:
# -rw-r--r-- contamacros-desktop.webp (60-100KB)
# -rw-r--r-- contamacros-mobile.webp  (40-80KB)
# -rw-r--r-- dayloop-desktop.webp     (60-100KB)
# -rw-r--r-- dayloop-mobile.webp      (40-80KB)
```

---

## Recomendaciones

### Tamaños de Archivo (Óptimos)

| Imagen | Resolución | Tamaño Óptimo |
|--------|-----------|--------------|
| Desktop | 1200x675 | 60-100 KB |
| Mobile | 600x1000 | 40-80 KB |

### Calidad WebP

- **Calidad 70-75%**: Balance perfecto entre tamaño y calidad
- **Calidad 80%+**: Mejora mínima, archivos más grandes
- **Calidad <70%**: Pérdida visible de calidad

### Herramientas Recomendadas

```bash
# Verificar tamaño y propiedades
file contamacros-desktop.webp
identify contamacros-desktop.webp  # ImageMagick

# Optimizar aún más
cwebp -quality 70 -m 6 contamacros-desktop.webp
```

---

## Nota Importante

Los **SVG placeholders funcionan perfectamente** mientras tanto. El sitio se ve bien con ellos. Solo reemplázalos cuando tengas screenshots reales listos.

---

## Script Automático (Opcional)

Si quieres hacer todo en Python de una vez:

```python
#!/usr/bin/env python3
from PIL import Image
import os
import glob

# Carpeta destino
dest_folder = "public/assets/images/projects"

# Procesar todos los JPG en la carpeta actual
for jpg_file in glob.glob("*.jpg"):
    webp_file = jpg_file.replace(".jpg", ".webp")
    
    # Abrir y convertir
    img = Image.open(jpg_file)
    img.save(
        os.path.join(dest_folder, webp_file), 
        'WEBP', 
        quality=75,
        method=6  # Mejor compresión
    )
    
    file_size = os.path.getsize(os.path.join(dest_folder, webp_file))
    print(f"✓ {webp_file} ({file_size/1024:.1f} KB)")

print("\n✓ Todas las imágenes optimizadas a WebP")
```

Guarda como `convert_to_webp.py` y ejecuta:
```bash
python3 convert_to_webp.py
```

---

## ¿Necesitas Ayuda?

Cuando tengas los screenshots reales listos, avísame y puedo:
1. Optimizarlos a WebP
2. Actualizar los paths en los archivos de proyecto
3. Verificar que se vean bien

¡Listo para cuando lo necesites! 🚀
