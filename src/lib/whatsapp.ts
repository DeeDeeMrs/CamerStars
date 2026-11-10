const whatsappUrl = "https://wa.me/40750424671";

export function whatsappHref(message?: string) {
  return message ? `${whatsappUrl}?text=${encodeURIComponent(message)}` : whatsappUrl;
}
