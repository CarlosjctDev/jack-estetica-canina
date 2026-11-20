export const brandName = "Jack";
export const siteUrl = "https://jack.bcarestyle.com";

export const proximamente = true;
export const disponibleDesde = "2026-12-01T00:00:00-05:00";
export const disponibleDesdeLabel = "01 de diciembre de 2026";
export const aperturaEtiqueta = "Gran apertura · descuento de lanzamiento";
export const aperturaTitulo = "Gran apertura con descuento.";
export const aperturaDetalle = "Descuento de apertura para las primeras citas. Además, tarifa preferencial para 2+ perros en la misma zona.";

export const whatsappNumber = "+57 302 840 0101";
export const whatsappDigits = whatsappNumber.replace(/\D/g, "");
export const instagramUrl = "https://www.instagram.com/jack.estetica.canina/";
export const instagramLabel = `@${new URL(instagramUrl).pathname.replace(/^\/|\/$/g, "")}`;
export const instagramBioUrl = `${siteUrl}/?utm_source=instagram&utm_medium=bio&utm_campaign=perfil`;
export const groupDiscountNote = "Tarifa preferencial para 2+ perros en la misma zona";
export const nearbyTownsNote = "¿Estás en un pueblo cercano? Escríbenos y gestionamos disponibilidad.";
export const whatsappMessage = `Hola ${brandName}, quiero agendar una cita de estética canina a domicilio.`;
export const whatsappUrl = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(whatsappMessage)}`;
