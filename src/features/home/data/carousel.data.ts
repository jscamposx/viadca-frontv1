type CardSize = "narrow" | "large" | "wide";

interface GalleryItem {
  id: number;
  type: CardSize;
  title: string;
  description: string;
  imgSrc: string;
  imgPosition: string;
}

export const CARD_SIZES: Record<CardSize, string> = {
  narrow: "w-[352px] md:w-[400px]",
  large: "w-[352px] md:w-[620px]",
  wide: "w-[352px] md:w-[832px]",
};

export const CAROUSEL_UI = {
  ariaLabel: "Galería de experiencias de viaje",
  title: "Fotos pro hasta el último pixel.",
  controlsLabel: "Controles del carrusel",
  controls: {
    prevLabel: "Ver anteriores",
    nextLabel: "Ver siguientes",
  },
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: "wide",
    title: "Escapadas a la playa con todo resuelto.",
    description: "Hoteles frente al mar, traslados incluidos y experiencias para desconectar sin preocupaciones.",
    imgSrc: "https://picsum.photos/seed/beach-wide/832/680",
    imgPosition: "object-center",
  },
  {
    id: 2,
    type: "large",
    title: "Ciudades icónicas para viajes express.",
    description: "Vuelos directos, hoteles boutique y guías locales para aprovechar cada hora.",
    imgSrc: "https://picsum.photos/seed/city-large/620/680",
    imgPosition: "object-center",
  },
  {
    id: 3,
    type: "wide",
    title: "Rutas de aventura con respaldo total.",
    description: "Circuitos confiables, seguros y acompañamiento en cada etapa del viaje.",
    imgSrc: "https://picsum.photos/seed/mountain-wide/832/680",
    imgPosition: "object-center",
  },
  {
    id: 4,
    type: "narrow",
    title: "Ver todos los viajes.",
    description: "Explora el catálogo completo y encuentra tu próxima experiencia.",
    imgSrc: "https://picsum.photos/seed/travel-narrow/400/680",
    imgPosition: "object-center",
  },
];
