import ContactHero from "@/features/legal/components/ContactHero";
import ContactMethods from "@/features/legal/components/ContactMethods";
import ContactLocator from "@/features/legal/components/ContactLocator";
import SupportCTA from "@/features/legal/components/SupportCTA";

const Contact = () => (
  <div className="min-h-screen bg-background font-sans transition-colors duration-300 selection:bg-brand/10 selection:text-brand">
    <ContactHero />
    <main className="relative -mt-8 px-6 pb-20">
      <div className="max-w-315 w-full mx-auto space-y-24">
        <ContactMethods />
        <ContactLocator />
        <div className="border-t border-surface pt-12">
          <SupportCTA />
        </div>
      </div>
    </main>
  </div>
);

export default Contact;
