import { FileText } from "lucide-react";
import { TERMS_HERO } from "../data/terms.data";
import LegalHero from "./LegalHero";

const TermsHero = () => <LegalHero icon={FileText} hero={TERMS_HERO} />;

export default TermsHero;
