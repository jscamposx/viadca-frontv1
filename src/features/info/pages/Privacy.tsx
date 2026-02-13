import { 
  Shield, 
  UserCheck, 
  Database, 
  Cookie, 
  Globe, 
  Check, 
  Lock, 
  Server, 
  AlertTriangle, 
  Share2
} from 'lucide-react';
import { PRIVACY_HERO, PRIVACY_SECTIONS } from "../data/privacy.data";
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

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans transition-colors duration-300">
      
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))]from-brand/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative max-w-315 mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-muted/20 text-brand text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md shadow-sm">
            <Shield className="w-3.5 h-3.5" />
            {PRIVACY_HERO.label}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground tracking-tight mb-6 leading-[1.1]">
            {PRIVACY_HERO.title}
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            {PRIVACY_HERO.description}
          </p>

          <div className="inline-flex items-center px-5 py-2 rounded-full bg-surface text-muted text-sm font-medium border border-muted/20 shadow-sm">
            Última actualización: 
            <span className="ml-2 text-foreground font-bold">
              {PRIVACY_HERO.lastUpdate}
            </span>
          </div>
        </div>
      </section>

      <main className="grow max-w-315 mx-auto px-6 pb-24 space-y-6 md:space-y-8 w-full">

        <article className="bg-surface p-8 md:p-12 rounded-3xl border border-muted/10 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left transition-colors duration-300">
          <div className="w-24 h-24 rounded-3xl bg-background border border-muted/10 text-brand flex items-center justify-center shrink-0 shadow-inner">
            <UserCheck size={48} strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif mb-4">
              {PRIVACY_SECTIONS.commitment.title}
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              {PRIVACY_SECTIONS.commitment.description}
            </p>
          </div>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          <InfoCard 
            icon={Database} 
            title={PRIVACY_SECTIONS.dataRequested.title}
          >
            <ul className="space-y-6">
              {PRIVACY_SECTIONS.dataRequested.items.map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1 p-1.5 rounded-lg text-xs h-fit w-fit shrink-0 bg-background border border-muted/10 text-brand">
                    {item.icon === 'UserCheck' && <UserCheck size={16} />}
                    {item.icon === 'Cookie' && <Cookie size={16} />}
                  </div>
                  <div>
                    <strong className="block text-foreground text-sm font-semibold mb-1">
                      {item.title}
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
            icon={Globe} 
            title={PRIVACY_SECTIONS.usage.title}
          >
            <div className="space-y-4">
              {PRIVACY_SECTIONS.usage.items.map((text, i) => (
                <div key={i} className="flex items-start gap-3 text-muted text-sm md:text-base">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span>{text}</span>
                </div>
              ))}
              <div className="mt-6 pt-4 border-t border-muted/10">
                <p className="text-xs text-muted/80 font-medium">
                  {PRIVACY_SECTIONS.usage.note}
                </p>
              </div>
            </div>
          </InfoCard>

        </div>

        <article className="bg-surface/50 border border-brand/20 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-sm">
          <div className="relative z-10">
            <header className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-brand/10 text-brand">
                <Lock size={24} />
              </div>
              <h2 className="text-2xl font-bold text-foreground font-serif">
                {PRIVACY_SECTIONS.security.title}
              </h2>
            </header>

            <div className="grid sm:grid-cols-3 gap-8 md:gap-6">
              {PRIVACY_SECTIONS.security.items.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="text-brand">
                    {item.icon === 'Server' && <Server size={24} />}
                    {item.icon === 'Shield' && <Shield size={24} />}
                    {item.icon === 'AlertTriangle' && <AlertTriangle size={24} />}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm uppercase tracking-wide mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>

        <InfoCard 
          icon={Share2} 
          title={PRIVACY_SECTIONS.sharing.title}
          className="flex flex-col md:flex-row gap-6 md:items-center justify-between"
        >
          <div className="flex-1">
            <p className="text-muted leading-relaxed mb-6 md:mb-0">
              {PRIVACY_SECTIONS.sharing.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end md:max-w-xs">
            {PRIVACY_SECTIONS.sharing.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1.5 bg-background text-muted text-xs font-semibold rounded-lg border border-muted/20 hover:border-brand/30 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </InfoCard>

        <div className="pt-12 md:pt-16 border-t border-surface">
          <SupportCTA />
        </div>

      </main>
    </div>
  );
};

export default Privacy;