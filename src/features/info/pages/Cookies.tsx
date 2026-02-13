import { 
  Cookie, 
  Layers, 
  Settings, 
  Users, 
  Bell, 
  Shield, 
  ToggleRight, 
  Info, 
  Check
} from 'lucide-react';
import { COOKIES_HERO, COOKIES_SECTIONS } from "../data/cookies.data";
import SupportCTA from "../components/SupportCTA";

const InfoCard = ({ 
  icon: Icon, 
  title, 
  children, 
  className = "" 
}: { 
  icon: React.ElementType, 
  title: string, 
  children: React.ReactNode, 
  className?: string 
}) => (
  <article className={`bg-surface p-6 md:p-8 rounded-3xl border border-muted/10 hover:border-brand/20 shadow-sm transition-all duration-300 hover:shadow-lg group ${className}`}>
    <header className="flex items-center gap-4 mb-6">
      <div className="p-3 rounded-2xl bg-background border border-muted/10 text-brand group-hover:scale-110 group-hover:bg-brand/5 transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <h2 className="text-xl font-bold text-foreground font-serif">
        {title}
      </h2>
    </header>
    <div className="text-muted leading-relaxed text-sm md:text-base">
      {children}
    </div>
  </article>
);

const Cookies = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans transition-colors duration-300">
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-brand/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-315 mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-muted/20 text-brand text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md shadow-sm">
            <Cookie className="w-3.5 h-3.5" />
            {COOKIES_HERO.label}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground tracking-tight mb-6 leading-[1.1]">
            {COOKIES_HERO.title}
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            {COOKIES_HERO.description}
          </p>

          <div className="inline-flex items-center px-5 py-2 rounded-full bg-surface text-muted text-sm font-medium border border-muted/20 shadow-sm">
            Última actualización: 
            <span className="ml-2 text-foreground font-bold">
              {COOKIES_HERO.lastUpdate}
            </span>
          </div>
        </div>
      </section>

      <main className="grow max-w-315 mx-auto px-6 pb-24 space-y-6 md:space-y-8 w-full">

        <article className="bg-surface p-8 md:p-12 rounded-3xl border border-muted/10 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left transition-colors duration-300">
          <div className="w-24 h-24 rounded-3xl bg-background border border-muted/10 text-brand flex items-center justify-center shrink-0 shadow-inner">
            <Cookie size={48} strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif mb-4">
              {COOKIES_SECTIONS.definition.title}
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              {COOKIES_SECTIONS.definition.description}
            </p>
          </div>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          <InfoCard 
            icon={Layers} 
            title={COOKIES_SECTIONS.types.title}
          >
            <ul className="space-y-6">
              {COOKIES_SECTIONS.types.items.map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1 p-1.5 rounded-lg text-xs h-fit w-fit shrink-0 bg-background border border-muted/10 text-brand">
                      {item.icon === 'Shield' && <Shield size={16}/>}
                      {item.icon === 'Layers' && <Layers size={16}/>}
                      {item.icon === 'ToggleRight' && <ToggleRight size={16}/>}
                  </div>
                  <div>
                    <strong className="block text-foreground text-sm font-semibold mb-1">
                      {item.type}
                    </strong>
                    <p className="text-sm text-muted leading-snug">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </InfoCard>

          <InfoCard 
            icon={Settings} 
            title={COOKIES_SECTIONS.control.title}
          >
            <p className="mb-8">
              {COOKIES_SECTIONS.control.description}
            </p>

            <div className="bg-background/50 border border-brand/20 rounded-2xl p-6">
                <h3 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                  <Check className="text-brand w-4 h-4"/> 
                  Recomendación
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {COOKIES_SECTIONS.control.recommendation}
                </p>
            </div>
          </InfoCard>

          <InfoCard 
            icon={Users} 
            title={COOKIES_SECTIONS.thirdParty.title}
          >
            <p className="mb-6">
                {COOKIES_SECTIONS.thirdParty.description}
            </p>
            <div className="flex flex-wrap gap-2">
                {COOKIES_SECTIONS.thirdParty.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 bg-background text-muted text-xs font-semibold rounded-lg border border-muted/20 hover:border-brand/30 transition-colors">
                      {tag}
                  </span>
                ))}
            </div>
          </InfoCard>

          <InfoCard 
            icon={Bell} 
            title={COOKIES_SECTIONS.updates.title}
          >
            <div className="flex gap-4 items-start bg-background/50 p-5 rounded-2xl border border-muted/10">
                <Info className="mt-0.5 text-brand shrink-0 w-5 h-5" />
                <p className="text-sm text-muted font-medium leading-relaxed">
                    {COOKIES_SECTIONS.updates.description}
                </p>
            </div>
          </InfoCard>

        </div>

        <div className="pt-12 md:pt-16 border-t border-surface">
          <SupportCTA />
        </div>

      </main>
    </div>
  );
};

export default Cookies;