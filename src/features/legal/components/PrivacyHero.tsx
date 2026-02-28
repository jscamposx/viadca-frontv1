import { Shield } from "lucide-react";
import { PRIVACY_HERO } from "../data/privacy.data";
import LegalHero from "./LegalHero";

const PrivacyHero = () => <LegalHero icon={Shield} hero={PRIVACY_HERO} />;

export default PrivacyHero;
