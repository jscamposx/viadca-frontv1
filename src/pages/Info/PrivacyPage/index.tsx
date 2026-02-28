import PrivacyHero from "@/features/legal/components/PrivacyHero";
import PrivacyContent from "@/features/legal/components/PrivacyContent";

const Privacy = () => (
  <div className="flex flex-col min-h-screen bg-background font-sans transition-colors duration-300">
    <PrivacyHero />
    <PrivacyContent />
  </div>
);

export default Privacy;
