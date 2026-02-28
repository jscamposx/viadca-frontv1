import TermsHero from "@/features/legal/components/TermsHero";
import TermsContent from "@/features/legal/components/TermsContent";

const Terms = () => (
  <div className="flex flex-col min-h-screen bg-background font-sans transition-colors duration-300">
    <TermsHero />
    <TermsContent />
  </div>
);

export default Terms;
