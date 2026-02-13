import { Link } from "react-router-dom";
import {
  FileText,
  DollarSign,
  CreditCard,
  Globe,
  AlertTriangle,
  Shield,
  RefreshCw,
  Check,
  AlertCircle
} from 'lucide-react';
import { TERMS_HERO, TERMS_SECTIONS } from "../data/terms.data";
import SupportCTA from "../../common/components/SupportCTA";

const sectionClass = "bg-background p-6 md:p-10 border-b border-muted/10 md:border md:border-muted/20 md:rounded-3xl md:shadow-sm transition-all hover:shadow-md h-full";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans selection:bg-orange-100 selection:text-orange-700">

      <section className="relative pt-32 pb-12 bg-background border-b border-muted/10 md:border-none">
        <div className="max-w-315 mx-auto px-6 text-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
                <FileText className="w-3.5 h-3.5" />
                {TERMS_HERO.label}
            </div>

             <h1 className="text-4xl md:text-6xl font-serif font-medium text-foreground tracking-tight mb-4">
                {TERMS_HERO.title}
            </h1>

            <p className="text-lg text-muted max-w-2xl mx-auto mb-6 leading-relaxed">
                {TERMS_HERO.description}
            </p>

            <div className="inline-block px-4 py-1.5 rounded-full bg-surface text-muted text-sm font-medium border border-muted/20">
                Última actualización: {TERMS_HERO.lastUpdate}
            </div>
        </div>
      </section>

    
      <main className="grow max-w-315 mx-auto px-6 pb-24 space-y-6 md:space-y-8">

        <div className={sectionClass}>
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                 <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                    <FileText size={32} />
                 </div>
                 <div>
                    <h2 className="text-xl font-bold text-foreground mb-2">{TERMS_SECTIONS.introduction.title}</h2>
                    <p className="text-muted leading-relaxed text-lg">
                        {TERMS_SECTIONS.introduction.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                        {TERMS_SECTIONS.introduction.tags.map((tag, i) => (
                             <span key={i} className="px-3 py-1 bg-surface text-muted text-xs font-semibold rounded-md border border-muted/20">
                                {tag}
                             </span>
                        ))}
                    </div>
                 </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

             <div className={sectionClass}>
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                        <DollarSign className="w-5 h-5" />
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-foreground">{TERMS_SECTIONS.prices.title}</h2>
                 </div>
                 <ul className="space-y-4 text-muted">
                    {TERMS_SECTIONS.prices.items.map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                            <Check className="mt-1 text-green-500 shrink-0 w-4 h-4" />
                            <span className="text-sm">{item}</span>
                        </li>
                    ))}
                 </ul>
             </div>

             <div className={sectionClass}>
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                        <CreditCard className="w-5 h-5" />
                    </div>
                     <h2 className="text-lg md:text-xl font-bold text-foreground">{TERMS_SECTIONS.payments.title}</h2>
                 </div>
                 <div className="space-y-4 text-muted">
                     <p className="text-sm">{TERMS_SECTIONS.payments.intro}</p>
                     <div className="p-4 bg-surface rounded-xl border border-muted/20 text-sm">
                         <strong>{TERMS_SECTIONS.payments.important.label} </strong>
                         <span className="text-rose-600 font-medium">{TERMS_SECTIONS.payments.important.highlight}</span>
                         <span>{TERMS_SECTIONS.payments.important.text}</span>
                     </div>
                     <p className="text-sm text-muted/80">
                         {TERMS_SECTIONS.payments.note}
                     </p>
                 </div>
             </div>

             <div className={sectionClass}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-foreground">{TERMS_SECTIONS.documentation.title}</h2>
                </div>
                <p className="text-muted text-sm mb-4">
                    {TERMS_SECTIONS.documentation.description}
                </p>
                <div className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-lg text-blue-800 text-sm border border-blue-100">
                    <AlertCircle className="mt-0.5 shrink-0 w-4 h-4" />
                    <span>{TERMS_SECTIONS.documentation.recommendation}</span>
                </div>
             </div>

             <div className={sectionClass}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-rose-50 text-rose-600 rounded-lg">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-foreground">{TERMS_SECTIONS.liability.title}</h2>
                </div>
                <p className="text-muted text-sm mb-4">
                    {TERMS_SECTIONS.liability.description}
                </p>
                <div className="bg-surface p-4 rounded-xl border border-muted/20">
                    <h4 className="font-semibold text-foreground text-xs uppercase mb-1">{TERMS_SECTIONS.liability.forceMajeure.title}</h4>
                    <p className="text-xs text-muted">
                        {TERMS_SECTIONS.liability.forceMajeure.text}
                    </p>
                </div>
             </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className={sectionClass}>
                <div className="flex gap-4">
                    <Shield className="text-muted/60 w-6 h-6 mt-1" />
                    <div>
                        <h3 className="font-bold text-foreground">{TERMS_SECTIONS.usage.title}</h3>
                        <p className="text-sm text-muted mt-1">
                            {TERMS_SECTIONS.usage.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className={sectionClass}>
                <div className="flex gap-4">
                    <RefreshCw className="text-muted/60 w-6 h-6 mt-1" />
                    <div>
                        <h3 className="font-bold text-foreground">{TERMS_SECTIONS.modifications.title}</h3>
                        <p className="text-sm text-muted mt-1">
                            {TERMS_SECTIONS.modifications.description}
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <SupportCTA />

        <div className="text-center pt-8">
          <Link to="/" className="text-sm font-semibold text-muted hover:text-orange-600 transition-colors">
            &larr; Volver al inicio
          </Link>
        </div>

      </main>
    </div>
  );
};

export default Terms;