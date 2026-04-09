---
title: ContaMacros
slug: contamacros
description: App móvil para contar calorías y macronutrientes enfocada en el mercado chileno. Escanea productos con código de barras, usa IA para reconocer platos y ofrece Fitness Coach Pro conversacional.
type: fullstack
image_desktop: /assets/images/projects/contamacros-desktop.webp
image_mobile: /assets/images/projects/contamacros-mobile.webp
website: "https://www.contamacros.cl/"
appStore: "coming-soon"
googlePlay: "coming-soon"
technologies:
  - react-native
  - expo
  - supabase
  - postgresql
  - typescript
  - openai
metaTitle: ContaMacros - App de Conteo de Calorías y Macros con IA | CODEAMUS
metaDescription: App móvil de nutrición con escaneo de códigos de barras, reconocimiento de platos con IA y seguimiento de macros. Disponible próximamente en App Store y Google Play.
metrics:
  downloads: "Próximamente"
  rating: "En desarrollo"
---

## ContaMacros: Nutrición Inteligente al Alcance

**ContaMacros** es una app móvil revolucionaria diseñada específicamente para el mercado chileno que convierte el seguimiento nutricional en algo simple, visual y sin fricción.

### El Problema que Resuelve

Contar calorías y macronutrientes es aburrido y complicado. Los usuarios típicamente abandonan las apps de nutrición porque:
- Escribir alimentos manualmente es tedioso
- Las bases de datos genéricas no incluyen platos chilenos específicos
- No hay recomendaciones personalizadas basadas en objetivos

### La Solución

ContaMacros simplifica todo mediante:

**🔍 Escaneo Inteligente**
- Escanea códigos de barras de productos
- Integración con OpenFoodFacts para base de datos global
- Reconocimiento instantáneo de información nutricional

**🍽️ Reconocimiento de Platos con IA**
- Toma una foto de tu plato
- La IA (visión por computadora) identifica los ingredientes
- Calcula automáticamente calorías y macros
- Especialmente entrenada en platos chilenos: cazuela, pastel de choclo, empanadas, etc.

**🏋️ Fitness Coach Pro**
- Coach conversacional personalizado
- Recomendaciones basadas en tu objetivo (bajar/subir de peso)
- Sugerencias de recetas saludables
- Seguimiento automático de streaks

**📊 Sincronización Health**
- Integración con Apple Health (iOS)
- Integración con Health Connect (Android)
- Historial sincronizado automáticamente

### Stack Técnico

**Frontend:**
- React Native con Expo Router
- TypeScript para type safety
- UI responsiva para iOS y Android

**Backend:**
- Supabase (PostgreSQL)
- Autenticación RLS (Row Level Security)
- APIs externas: OpenFoodFacts, OpenAI Vision

**Infrastructure:**
- Expo Build para compilación
- Expo Submit para publicación
- Expo Updates para actualizaciones OTA (sin necesidad de app store update)

### Impacto Esperado

En desarrollo, pero con objetivos claros:
- 10,000+ downloads en primer trimestre
- Posicionamiento en top 10 categoría "Fitness" en App Store Chile
- Tasa de retención: 40%+ usuarios activos mensualmente
- Conversión a premium: 15%+ usuarios pagados

### Por Qué Construimos ContaMacros

Identificamos un mercado desatendido: apps de nutrición genéricas que no entienden la gastronomía y hábitos chilenos. ContaMacros fue construida por y para usuarios chilenos, con platos locales en mente desde el primer día.

El resultado es una app que siente nativa, intuitiva y pensada específicamente para el usuario chileno que quiere mejorar sus hábitos sin complicaciones.
