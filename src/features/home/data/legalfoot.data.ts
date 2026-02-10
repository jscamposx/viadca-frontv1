
interface LegalSegment {
  text: string;
  link?: string; 
}

interface LegalItem {
  id: string;
  segments: LegalSegment[];
}

export const LEGAL_CONTENT: { column1: LegalItem[]; column2: LegalItem[] } = {
  column1: [
    {
      id: "c1-p1",
      segments: [{ text: "Viadca actúa como agencia intermediaria; la emisión final y cumplimiento del servicio corresponden a las aerolíneas, hoteles u operadores locales." }]
    },
    {
      id: "c1-p2",
      segments: [{ text: "Los precios son dinámicos hasta la emisión del boleto o voucher. Las tarifas promocionales son limitadas y algunas pueden ser no reembolsables; te informamos las condiciones antes de pagar." }]
    },
    {
      id: "c1-p3",
      segments: [{ text: "El viajero es responsable de contar con pasaporte, visas y vacunas vigentes. Recomendamos validar requisitos migratorios al menos 60 días antes de la salida." }]
    },
    {
      id: "c1-p4",
      segments: [{ text: "Cambios o cancelaciones quedan sujetos a políticas de cada proveedor y pueden implicar cargos adicionales o pérdida total de la tarifa en casos no reembolsables." }]
    },
    {
      id: "c1-p5",
      segments: [{ text: "Eventuales retrasos, clima o fuerza mayor pueden afectar tu itinerario. Te acompañamos en la gestión, pero la responsabilidad operativa recae en el proveedor del servicio." }]
    },
  ],
  column2: [
    {
      id: "c2-p1",
      segments: [
        { text: "Privacidad: no vendemos tus datos y los usamos solo para gestionar tus viajes. Puedes ejercer tus derechos ARCO según nuestra " },
        { text: "Política de Privacidad", link: "/privacidad" },
        { text: "." }
      ],
    },
    {
      id: "c2-p2",
      segments: [
        { text: "Cookies: utilizamos cookies esenciales, analíticas y de preferencias para mejorar la experiencia. Puedes gestionarlas en tu navegador o revisar la " },
        { text: "Política de Cookies", link: "/cookies" },
        { text: "." }
      ],
    },
    {
      id: "c2-p3",
      segments: [
        { text: "Actualizaciones: podemos modificar términos y avisos legales. Consulta la versión vigente en " },
        { text: "Términos y Condiciones", link: "/terminos" },
        { text: "." }
      ],
    },
    {
      id: "c2-p4",
      segments: [{ text: "Conservamos tus datos solo el tiempo necesario para la gestión de viajes y cumplimiento legal; luego aplicamos eliminación o anonimización segura." }]
    },
    {
      id: "c2-p5",
      segments: [{ text: "Puedes ejercer tus derechos de acceso, rectificación o cancelación escribiendo a nuestro canal de soporte; responderemos con la misma transparencia que en nuestras políticas." }]
    },
  ],
};