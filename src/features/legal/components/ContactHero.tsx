import { CONTACT_HERO } from "../data/contact.data";

const ContactHero = () => (
  <header className="relative pt-32 pb-20 md:pb-32 overflow-hidden px-6">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-brand/10 via-transparent to-transparent pointer-events-none" />
    <div className="relative max-w-315 w-full mx-auto text-center z-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-muted/20 text-brand text-sm font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
        </span>
        {CONTACT_HERO.label}
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground font-serif tracking-tight mb-6 leading-[1.1]">
        Conectemos{" "}
        <span className="block text-transparent bg-clip-text bg-linear-to-r from-brand via-brand/80 to-brand/60 mt-2">
          tu próxima aventura
        </span>
      </h1>

      <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
        {CONTACT_HERO.description}
      </p>
    </div>
  </header>
);

export default ContactHero;
