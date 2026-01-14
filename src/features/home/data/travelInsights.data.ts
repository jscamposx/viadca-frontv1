import insightsInspirateImg from "../assets/images/insights/insights-inspirate.avif";
import insightsBloqueosImg from "../assets/images/insights/insights-bloqueos.avif";
import insightsRutaImg from "../assets/images/insights/insights-ruta.avif";
import insightsMesesImg from "../assets/images/insights/insights-meses.avif";

export interface InsightItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const TRAVEL_INSIGHTS_DATA: InsightItem[] = [
  {
    id: 1,
    title: "Inspírate y elige",
    description: "Curamos destinos y rutas populares cada semana para darte ideas claras según tu presupuesto.",
    image: insightsInspirateImg
  },
  {
    id: 2,
    title: "Promos y bloqueos anticipados",
    description: "Te avisamos de tarifas especiales y bloqueamos lugares mientras confirmas con tu equipo o familia.",
    image: insightsBloqueosImg
  },
  {
    id: 3,
    title: "Acompañamiento en ruta",
    description: "Equipo Viadca para cambios, reacomodos y tips locales mientras viajas.",
    image: insightsRutaImg
  },
  {
    id: 4,
    title: "Pagos y seguros flexibles",
    description: "Pagos en meses con costo financiero, anticipos y seguros de viaje para proteger tu inversión.",
    image: insightsMesesImg
  }
];