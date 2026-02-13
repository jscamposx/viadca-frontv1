import { Link } from "react-router-dom";
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
import SupportCTA from "../../common/components/SupportCTA";

const sectionClass = "bg-background p-6 md:p-10 border-b border-muted/10 md:border md:border-muted/20 md:rounded-3xl md:shadow-sm transition-all hover:shadow-md h-full";

const Privacy= () => {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans selection:bg-blue-100 selection:text-blue-700">
      <section className="relative pt-32 pb-12 bg-background border-b border-muted/10 md:border-none">
        <div className="max-w-315 mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
            <Shield className="w-3.5 h-3.5" />
            {PRIVACY_HERO.label}
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-medium text-foreground tracking-tight mb-4">
            {PRIVACY_HERO.title}
          </h1>

          <p className="text-lg text-muted max-w-2xl mx-auto mb-6 leading-relaxed">
            {PRIVACY_HERO.description}
          </p>

          <div className="inline-block px-4 py-1.5 rounded-full bg-surface text-muted text-sm font-medium border border-muted/20">
            Última actualización: {PRIVACY_HERO.lastUpdate}
          </div>
        </div>
      </section>


      <main className="grow max-w-315 mx-auto px-6 pb-24 space-y-6 md:space-y-8">
        

        <div className={sectionClass}>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <UserCheck size={32} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">{PRIVACY_SECTIONS.commitment.title}</h2>
              <p className="text-muted leading-relaxed text-lg">
                {PRIVACY_SECTIONS.commitment.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
      
          <div className={sectionClass}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <Database className="w-5 h-5" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-foreground">{PRIVACY_SECTIONS.dataRequested.title}</h2>
            </div>
            <ul className="space-y-6">
              {PRIVACY_SECTIONS.dataRequested.items.map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1 text-indigo-500 shrink-0">
                    {item.icon === 'UserCheck' && <UserCheck size={20} />}
                    {item.icon === 'Cookie' && <Cookie size={20} />}
                  </div>
                  <div>
                    <strong className="block text-foreground text-sm font-semibold">{item.title}</strong>
                    <span className="text-sm text-muted block mt-1">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={sectionClass}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                <Globe className="w-5 h-5" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-foreground">{PRIVACY_SECTIONS.usage.title}</h2>
            </div>
            <div className="space-y-4">
              {PRIVACY_SECTIONS.usage.items.map((text, i) => (
                <div key={i} className="flex items-start gap-3 text-muted">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{text}</span>
                </div>
              ))}
              <div className="mt-6 pt-4 border-t border-muted/10">
                <p className="text-xs text-muted/60">{PRIVACY_SECTIONS.usage.note}</p>
              </div>
            </div>
          </div>
        </div>

    
        <div className="bg-blue-50/50 p-6 md:p-10 border border-blue-100 rounded-3xl relative overflow-hidden">
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                        <Lock size={20} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">{PRIVACY_SECTIONS.security.title}</h2>
                </div>

                <div className="grid sm:grid-cols-3 gap-8 md:gap-6">
                    {PRIVACY_SECTIONS.security.items.map((item, idx) => (
                        <div key={idx} className="flex flex-col gap-2">
                            <div className="text-blue-600 mb-1">
                                {item.icon === 'Server' && <Server size={24} />}
                                {item.icon === 'Shield' && <Shield size={24} />}
                                {item.icon === 'AlertTriangle' && <AlertTriangle size={24} />}
                            </div>
                            <h3 className="font-bold text-foreground text-sm uppercase tracking-wide">{item.title}</h3>
                            <p className="text-sm text-muted">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>


        <div className={sectionClass}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <Share2 className="w-5 h-5 text-rose-500" />
                        <h2 className="text-lg md:text-xl font-bold text-foreground">{PRIVACY_SECTIONS.sharing.title}</h2>
                    </div>
                    <p className="text-muted text-sm md:text-base max-w-xl">
                        {PRIVACY_SECTIONS.sharing.description}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                    {PRIVACY_SECTIONS.sharing.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-surface text-muted text-xs font-semibold rounded-md border border-muted/20">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        <SupportCTA />

        <div className="text-center pt-8">
          <Link to="/" className="text-sm font-semibold text-muted hover:text-blue-600 transition-colors">
            &larr; Volver al inicio
          </Link>
        </div>

      </main>
    </div>
  );
};

export default Privacy;