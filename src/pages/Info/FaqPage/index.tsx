import FaqSidebar from "@/features/legal/components/FaqSidebar";
import FaqContent from "@/features/legal/components/FaqContent";

const Faq = () => (
  <div className="min-h-screen bg-background font-sans transition-colors duration-300 selection:bg-brand/10 selection:text-brand">
    <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-brand/5 via-transparent to-transparent z-0" />
    <div className="relative z-10 max-w-315 mx-auto px-6 pt-32 pb-24">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <FaqSidebar />
        <FaqContent />
      </div>
    </div>
  </div>
);

export default Faq;
