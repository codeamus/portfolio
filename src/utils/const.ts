const PHONE_NUMBER = "56985284259";
const BASE_URL = "https://wa.me";

// Función para codificar el texto para WhatsApp
const encodeWhatsAppText = (text: string): string => {
  return encodeURIComponent(text);
};

// URLs de WhatsApp por contexto
export const WHATSAPP_MESSAGES = {
  // Landing Pages
  landing: {
    cta: `${BASE_URL}/${PHONE_NUMBER}?text=${encodeWhatsAppText("Hola Matías 👋\n\nMe interesa crear una landing page para mi negocio. ¿Cuál es tu disponibilidad?")}`,
    hero: `${BASE_URL}/${PHONE_NUMBER}?text=${encodeWhatsAppText("Hola Matías 👋\n\nQuiero una landing page rápida y efectiva. ¿Podemos hablar sobre mi proyecto?")}`,
  },

  // Sitios Web
  sitio: {
    cta: `${BASE_URL}/${PHONE_NUMBER}?text=${encodeWhatsAppText("Hola Matías 👋\n\nNecesito un sitio web profesional con múltiples secciones. ¿Cuál es el presupuesto y tiempo?")}`,
    consulta: `${BASE_URL}/${PHONE_NUMBER}?text=${encodeWhatsAppText("Hola Matías 👋\n\nMe gustaría cotizar un sitio web. Tengo un presupuesto de...")}`,
  },

  // E-commerce
  ecommerce: {
    cta: `${BASE_URL}/${PHONE_NUMBER}?text=${encodeWhatsAppText("Hola Matías 👋\n\nNecesito crear una tienda online. ¿Cuál es el costo y cuánto demora?")}`,
    consulta: `${BASE_URL}/${PHONE_NUMBER}?text=${encodeWhatsAppText("Hola Matías 👋\n\nQuiero vender online. ¿Cuál es la mejor solución para mi negocio?")}`,
  },

  // Apps Móviles
  app: {
    cta: `${BASE_URL}/${PHONE_NUMBER}?text=${encodeWhatsAppText("Hola Matías 👋\n\nTengo una idea para una app móvil. ¿Podemos discutirla?")}`,
    consulta: `${BASE_URL}/${PHONE_NUMBER}?text=${encodeWhatsAppText("Hola Matías 👋\n\nNecesito desarrollar una app para iOS y Android. ¿Cuáles son los tiempos y costos?")}`,
  },

  // Hero Section
  hero: `${BASE_URL}/${PHONE_NUMBER}?text=${encodeWhatsAppText("Hola Matías 👋\n\nMe interesa crear un sitio web o app para mi negocio. ¿Cuál sería la mejor opción y cuál es el costo?")}`,

  // General / Contacto
  general: `${BASE_URL}/${PHONE_NUMBER}?text=${encodeWhatsAppText("Hola Matías 👋\n\nMe interesa conocer más sobre tus servicios de desarrollo web y apps.")}`,

  // Footer
  footer: `${BASE_URL}/${PHONE_NUMBER}?text=${encodeWhatsAppText("Hola Matías 👋\n\nQuiero hablar sobre mi proyecto de desarrollo.")}`,

  // Blog
  blog: `${BASE_URL}/${PHONE_NUMBER}?text=${encodeWhatsAppText("Hola Matías 👋\n\nMe interesó el artículo que leí. ¿Podemos hablar sobre cómo aplicarlo a mi proyecto?")}`,
};

// URL genérica para compatibilidad hacia atrás
export const WHATSAPP_URL = WHATSAPP_MESSAGES.general;
