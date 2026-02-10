import featuresMedidaImg from "../assets/images/features/features-medida.avif";
import featuresDocumentacionImg from "../assets/images/features/features-documentacion.avif";
import featuresAsesoriaImg from "../assets/images/features/features-asesoria.avif";
import featuresPagosImg from "../assets/images/features/features-pagos.avif";

export interface ModalDetail {
  headline: string;
  text: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  modalDetails: ModalDetail[];
}

export const FEATURES_UI = {
  sectionTitle: "Viaja con respaldo total en cada etapa",
  ctaLabel: "Más información",
  modalCloseLabel: "Cerrar modal",
  detailAriaLabel: (title: string) => `Ver detalles de ${title}`,
  moreInfoAriaLabel: (title: string) => `Más información sobre ${title}`,
};

export const FEATURES_DATA: Feature[] = [
  {
    id: "tailor",
    title: "Viajes a tu medida",
    description:
      "Diseñamos tu viaje con vuelos, hotel y traslados ajustados a fechas, presupuesto y preferencias.",
    image: featuresMedidaImg,
    alt: "Planeación de viaje con mapas y maletas",
    modalDetails: [
      {
        headline: "Itinerarios personalizados",
        text: "Escogemos horarios y conexiones cómodas con proveedores confiables.",
      },
      {
        headline: "Flexibilidad",
        text: "Opciones con cambios permitidos y políticas claras antes de pagar.",
      },
      {
        headline: "Ajustes y upgrades",
        text: "Revisamos opciones de categoría de hotel, traslados privados y asistencia en aeropuerto para mejorar tu experiencia.",
      },
    ],
  },
  {
    id: "docs",
    title: "Asesoría y documentación",
    description:
      "Te indicamos qué visas, seguros y requisitos sanitarios necesitas antes de viajar.",
    image: featuresDocumentacionImg,
    alt: "Documentación de viaje y pasaportes",
    modalDetails: [
      {
        headline: "Revisión de requisitos",
        text: "Validamos pasaporte, visas y vacunas según tu destino.",
      },
      {
        headline: "Seguros de viaje",
        text: "Coberturas médicas, equipaje y cancelación recomendadas para tu ruta.",
      },
      {
        headline: "Checklists y recordatorios",
        text: "Enviamos recordatorios de check-in, visados electrónicos y tiempos de llegada al aeropuerto.",
      },
    ],
  },
  {
    id: "care",
    title: "Soporte dedicado 24/7",
    description:
      "Acompañamiento de nuestro equipo antes, durante y después del viaje para ajustes, reprogramaciones o emergencias.",
    image: featuresAsesoriaImg,
    alt: "Asesoría de viaje personalizada",
    modalDetails: [
      {
        headline: "Gestión de cambios",
        text: "Te ayudamos con vuelos, hoteles y traslados cuando surgen imprevistos.",
      },
      {
        headline: "Comunicación clara",
        text: "Canales directos por WhatsApp y teléfono con tiempos de respuesta rápidos.",
      },
      {
        headline: "Seguimiento en destino",
        text: "Confirmamos servicios clave (traslados, tours) y damos soporte en español durante el viaje.",
      },
    ],
  },
  {
    id: "perks",
    title: "Beneficios y pagos flexibles",
    description:
      "Accede a promos, pagos en meses con costo financiero y tarifas negociadas para maximizar tu presupuesto.",
    image: featuresPagosImg,
    alt: "Pagos y beneficios para viajes",
    modalDetails: [
      {
        headline: "Financiamiento",
        text: "Pagos en meses con costo financiero y anticipos para asegurar tu lugar.",
      },
      {
        headline: "Tarifas negociadas",
        text: "Mejores condiciones con hoteles, tours y cruceros aliados.",
      },
      {
        headline: "Extras y amenidades",
        text: "Buscamos upgrades, desayunos incluidos o late check-out según disponibilidad del proveedor.",
      },
    ],
  },
];