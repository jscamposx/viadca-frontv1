import CookiesHero from "@/features/legal/components/CookiesHero";
import CookiesContent from "@/features/legal/components/CookiesContent";

const Cookies = () => (
  <div className="flex flex-col min-h-screen bg-background font-sans transition-colors duration-300">
    <CookiesHero />
    <CookiesContent />
  </div>
);

export default Cookies;
