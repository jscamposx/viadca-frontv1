import defaultVideo from "../assets/videos/destinations-hero.mp4";
import heroVideo1 from "../assets/videos/video1.webm";
import heroVideo2 from "../assets/videos/video2.webm";
import heroVideo3 from "../assets/videos/video3.webm";

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
    videoMp4: defaultVideo,
    videoWebm: heroVideo1,
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
    videoMp4: defaultVideo,
    videoWebm: heroVideo2,
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
    videoMp4: defaultVideo,
    videoWebm: heroVideo3,
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
    videoMp4: defaultVideo,
    videoWebm: null,
  },
};