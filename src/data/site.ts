export const brandName = "Jack";
export const siteUrl = "https://jack.bcarestyle.com";

export const mantenimiento = true;

export const whatsappNumber = "+57 302 840 0101";
export const whatsappDigits = whatsappNumber.replace(/\D/g, "");
export const instagramUrl = "https://www.instagram.com/tu_usuario/";
export const instagramLabel = `@${instagramUrl.split("instagram.com/")[1]?.split(/[/?]/)[0] ?? "tu_usuario"}`;
export const instagramBioUrl = `${siteUrl}/?utm_source=instagram&utm_medium=bio&utm_campaign=perfil`;
export const groupDiscountNote = "Tarifa preferencial para 2+ perros en la misma zona";
export const nearbyTownsNote = "¿Estás en un pueblo cercano? Escríbenos y gestionamos disponibilidad.";
export const whatsappMessage = `Hola ${brandName}, quiero agendar una cita de estética canina a domicilio.`;
export const whatsappUrl = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(whatsappMessage)}`;
