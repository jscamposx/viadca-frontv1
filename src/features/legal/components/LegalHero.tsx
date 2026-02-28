import type { LucideIcon } from "lucide-react";

interface LegalHeroData {
  label: string;
  title: string;
  description: string;
  lastUpdate: string;
}

interface LegalHeroProps {
  icon: LucideIcon;
  hero: LegalHeroData;
}

const LegalHero = ({ icon: Icon, hero }: LegalHeroProps) => (
  <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-brand/10 via-transparent to-transparent pointer-events-none" />
    <div className="relative max-w-315 mx-auto px-6 text-center z-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-muted/20 text-brand text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md shadow-sm">
        <Icon className="w-3.5 h-3.5" />
        {hero.label}
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground tracking-tight mb-6 leading-[1.1]">
        {hero.title}
      </h1>

      <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
        {hero.description}
      </p>

      <div className="inline-flex items-center px-5 py-2 rounded-full bg-surface text-muted text-sm font-medium border border-muted/20 shadow-sm">
        Última actualización:
        <span className="ml-2 text-foreground font-bold">{hero.lastUpdate}</span>
      </div>
    </div>
  </section>
);

export default LegalHero;
