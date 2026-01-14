

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


export const CONTENT_MAX_WIDTH = 1260;

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: "wide",
    title: "Modo Noche y fotos en lugares con poca luz.",
    description: "Lúcete con imágenes nítidas, repletas de detalles, brillantes y con colores naturales, incluso en la oscuridad.",
    imgSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=832&h=680&auto=format&fit=crop",
    imgPosition: "object-center",
  },
  {
    id: 2,
    type: "large",
    title: "Cámaras posteriores Pro.",
    description: "Toma fotos que sacan a la luz muchos más detalles gracias al motor Pro Fusion.",
    imgSrc: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=620&h=680&auto=format&fit=crop",
    imgPosition: "object-center",
  },
  {
    id: 3,
    type: "wide",
    title: "Ultra gran angular.",
    description: "Amplía los horizontes de tu creatividad con alucinantes tomas panorámicas.",
    imgSrc: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=832&h=680&auto=format&fit=crop",
    imgPosition: "object-center",
  },
  {
    id: 4,
    type: "narrow",
    title: "Retratos de última generación.",
    description: "Elige entre diferentes estilos predeterminados para personalizar el tono y el look.",
    imgSrc: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&h=680&auto=format&fit=crop",
    imgPosition: "object-center",
  },
];