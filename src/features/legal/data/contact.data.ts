export const CONTACT_HERO = {
  label: "Estamos aquí para ayudarte",
  title: "Conectemos tu próxima aventura",
  description: "Diseñamos experiencias únicas. Contáctanos y comencemos a planear el viaje perfecto para ti."
};

export const CONTACT_METHODS = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    description: "Chat directo y rápido",
    value: "+52 618 123 4567",
    actionType: "whatsapp",
    gradient: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    iconColor: "text-green-600",
    btnColor: "bg-green-500 hover:bg-green-600",
    icon: "MessageCircle"
  },
  {
    id: "phone",
    title: "Llámanos",
    description: "Atención personalizada",
    value: "+52 618 123 4567",
    actionType: "phone",
    gradient: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    btnColor: "bg-blue-500 hover:bg-blue-600",
    icon: "Phone"
  },
  {
    id: "email",
    title: "Correo",
    description: "Solicita cotizaciones",
    value: "contacto@viadca.com",
    actionType: "email",
    gradient: "from-purple-500 to-pink-600",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
    btnColor: "bg-purple-500 hover:bg-purple-600",
    icon: "Mail"
  }
];

export const CONTACT_LOCATION = {
  address: "Durango, México",
  coords: { lat: 24.0277, lng: -104.6532 },
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=24.0277,-104.6532"
};

export const CONTACT_HOURS = [
  { dia: "Lunes - Viernes", horario: "9:00 AM - 6:00 PM" },
  { dia: "Sábado", horario: "10:00 AM - 2:00 PM" },
  { dia: "Domingo", horario: "Cerrado" }
];

export const SOCIAL_LINKS = [
  { name: "Facebook", url: "#", gradient: "from-[#1877F2] to-blue-600", icon: "Facebook" },
  { name: "Instagram", url: "#", gradient: "from-pink-500 via-purple-500 to-orange-500", icon: "Instagram" },
  { name: "TikTok", url: "#", gradient: "from-gray-900 to-black", icon: "Video" }, // Video como fallback
  { name: "YouTube", url: "#", gradient: "from-[#FF0000] to-red-600", icon: "Youtube" }
];

export const CONTACT_CTA = {
  title: "¿Aún necesitas ayuda?",
  description: "Escríbenos y un asesor te responderá personalmente para planificar tu viaje o aclarar cualquier duda que no encontraste arriba.",
  badges: [
    { text: "Asesoría personalizada", color: "bg-blue-500" },
    { text: "Respuestas rápidas", color: "bg-rose-500" },
    { text: "Experiencia en viajes", color: "bg-indigo-500" }
  ]
};