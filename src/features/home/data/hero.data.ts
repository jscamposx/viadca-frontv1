import heroVideo1 from "../assets/videos/hero-video1.mp4";
import heroVideo2 from "../assets/videos/hero-video2.webm";
import heroVideo3 from "../assets/videos/hero-video3.webm";
import heroVideo4 from "../assets/videos/hero-video4.webm";

export interface HeroContentItem {
  label: string;
  title: string;
  desc: string;
  features: string[];
  videoMp4: string;
  videoWebm: string | null;
}

export const HERO_CONTENT: Record<string, HeroContentItem> = {
  mexico: {
    label: "México",
    title: "Explora México con Viadca",
    desc: "Vuelos y hoteles en los destinos más queridos: playas, pueblos mágicos y escapadas urbanas.",
    features: [
      "Paquetes con vuelo + hotel",
      "Traslados y seguros opcionales",
      "Pagos en meses con costo financiero",
    ],
    videoMp4: heroVideo1,
    videoWebm: heroVideo2,
  },
  internacionales: {
    label: "Internacionales",
    title: "Aventura fuera de México",
    desc: "Circuitos y escapadas internacionales con operadores confiables y soporte en ruta.",
    features: [
      "Guías y traslados incluidos",
      "Reprogramaciones con el equipo Viadca",
      "Contacto 24/7",
    ],
    videoMp4: heroVideo1,
    videoWebm: heroVideo3,
  },
  destacados: {
    label: "Destacados",
    title: "Selección destacada por Viadca",
    desc: "Rutas favoritas de nuestra comunidad con tarifas negociadas y extras incluidos.",
    features: [
      "Tarifas especiales",
      "Bloqueos anticipados",
      "Bonos y upgrades sujetos a disponibilidad",
    ],
    videoMp4: heroVideo1,
    videoWebm: heroVideo4,
  },
  todos: {
    label: "Todos",
    title: "Explora todos los paquetes",
    desc: "Consulta el catálogo completo y encuentra tu próximo viaje en minutos.",
    features: [
      "Filtros por destino y fecha",
      "Opciones familiares y corporativas",
      "Asesoría de nuestro equipo",
    ],
    videoMp4: heroVideo1,
    videoWebm: null,
  },
};

export const HERO_UI = {
  eyebrow: "Agencia de viajes ",
  title: {
    line1: "Vive experiencias únicas",
    line2: "y viaja tranquilo con",
    brand: "Viadca",
  },
  ctas: {
    primary: {
      mobile: "WhatsApp",
      desktop: "Consultar en WhatsApp",
    },
    secondary: {
      mobile: "Llamar",
      desktop: "Llamar ahora",
    },
  },
  tabsAriaLabel: "Categorías de viajes",
  helpTitle: "Te ayudamos con:",
  packagesLink: {
    href: "/paquetes",
    label: "Ver paquetes",
  },
  overlay: {
    line1: "Planea tu siguiente viaje",
    line2: "con Viadca.",
  },
  captions: {
    srcLang: "es",
    label: "Español",
  },
};