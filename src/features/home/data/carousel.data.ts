export type CardSize = "narrow" | "large" | "wide";

export interface GalleryItem {
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
    imgSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=832&h=680&auto=format&fit=crop",
    imgPosition: "object-center",
  },
  {
    id: 2,
    type: "large",
    title: "Ciudades icónicas para viajes express.",
    description: "Vuelos directos, hoteles boutique y guías locales para aprovechar cada hora.",
    imgSrc: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=620&h=680&auto=format&fit=crop",
    imgPosition: "object-center",
  },
  {
    id: 3,
    type: "wide",
    title: "Rutas de aventura con respaldo total.",
    description: "Circuitos confiables, seguros y acompañamiento en cada etapa del viaje.",
    imgSrc: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=832&h=680&auto=format&fit=crop",
    imgPosition: "object-center",
  },
  {
    id: 4,
    type: "narrow",
    title: "Ver todos los viajes.",
    description: "Explora el catálogo completo y encuentra tu próxima experiencia.",
    imgSrc: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&h=680&auto=format&fit=crop",
    imgPosition: "object-center",
  },
];