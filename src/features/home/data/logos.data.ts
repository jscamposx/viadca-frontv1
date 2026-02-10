import logo1 from "../assets/images/logos/logo1.avif";
import logo2 from "../assets/images/logos/logo2.avif";
import logo3 from "../assets/images/logos/logo3.avif";
import logo7 from "../assets/images/logos/logo7.avif";
import logo6 from "../assets/images/logos/logo6.avif";
import logo8 from "../assets/images/logos/logo8.avif";
import logo9 from "../assets/images/logos/logo9.avif";
import logo10 from "../assets/images/logos/logo10.avif";

export interface LogoItem {
  src: string;
  alt: string;
  h?: string;
  width: number;
  height: number;
  boxed?: boolean;
}

export const LOGOS_UI = {
  sectionLabel: "Galería de socios y colaboradores",
};

export const LOGOS_DATA: LogoItem[] = [
  { src: logo1, alt: "Partner 1", h: "h-24", width: 240, height: 96 },
  { src: logo2, alt: "Partner 2", h: "h-24", width: 240, height: 96 },
  { src: logo3, alt: "Partner 3", h: "h-24", width: 240, height: 96 },
  { src: logo7, alt: "Partner 4", h: "h-14", width: 240, height: 96 },
  { src: logo6, alt: "Partner 5", h: "h-12", width: 240, height: 96 },
  { src: logo8, alt: "Partner 6", h: "h-24", width: 240, height: 96 },
  { src: logo9, alt: "Partner 7", h: "h-24", width: 240, height: 96 },
  { src: logo10, alt: "Partner 8", h: "h-24", width: 240, height: 96 },
];