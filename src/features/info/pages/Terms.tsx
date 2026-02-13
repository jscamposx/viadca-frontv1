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

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans transition-colors duration-300">

      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-brand/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-315 mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-muted/20 text-brand text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md shadow-sm">
            <FileText className="w-3.5 h-3.5" />
            {TERMS_HERO.label}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground tracking-tight mb-6 leading-[1.1]">
            {TERMS_HERO.title}
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            {TERMS_HERO.description}
          </p>

          <div className="inline-flex items-center px-5 py-2 rounded-full bg-surface text-muted text-sm font-medium border border-muted/20 shadow-sm">
            Última actualización:
            <span className="ml-2 text-foreground font-bold">
              {TERMS_HERO.lastUpdate}
            </span>
          </div>
        </div>
      </section>

      <main className="grow max-w-315 mx-auto px-6 pb-24 space-y-6 md:space-y-8 w-full">

        <article className="bg-surface p-8 md:p-12 rounded-3xl border border-muted/10 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left transition-colors duration-300">
          <div className="w-24 h-24 rounded-3xl bg-background border border-muted/10 text-brand flex items-center justify-center shrink-0 shadow-inner">
            <FileText size={48} strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif mb-4">
              {TERMS_SECTIONS.introduction.title}
            </h2>
            <p className="text-muted leading-relaxed text-lg mb-6">
              {TERMS_SECTIONS.introduction.description}
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {TERMS_SECTIONS.introduction.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1.5 bg-background text-muted text-xs font-semibold rounded-lg border border-muted/20 hover:border-brand/30 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          <InfoCard
            icon={DollarSign}
            title={TERMS_SECTIONS.prices.title}
          >
            <ul className="space-y-4">
              {TERMS_SECTIONS.prices.items.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <Check className="mt-1 text-brand shrink-0 w-4 h-4" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </InfoCard>

          <InfoCard
            icon={CreditCard}
            title={TERMS_SECTIONS.payments.title}
          >
            <div className="space-y-6">
              <p className="text-sm">{TERMS_SECTIONS.payments.intro}</p>
              <div className="p-5 bg-background/50 rounded-2xl border border-muted/10 text-sm">
                <strong className="text-foreground">{TERMS_SECTIONS.payments.important.label} </strong>
                <span className="text-brand font-medium">{TERMS_SECTIONS.payments.important.highlight}</span>
                <span>{TERMS_SECTIONS.payments.important.text}</span>
              </div>
              <p className="text-xs text-muted/80">
                {TERMS_SECTIONS.payments.note}
              </p>
            </div>
          </InfoCard>

          <InfoCard
            icon={Globe}
            title={TERMS_SECTIONS.documentation.title}
          >
            <p className="text-sm mb-6">
              {TERMS_SECTIONS.documentation.description}
            </p>
            <div className="flex items-start gap-3 p-5 bg-background/50 rounded-2xl text-muted text-sm border border-muted/10">
              <AlertCircle className="mt-0.5 text-brand shrink-0 w-4 h-4" />
              <span>{TERMS_SECTIONS.documentation.recommendation}</span>
            </div>
          </InfoCard>

          <InfoCard
            icon={AlertTriangle}
            title={TERMS_SECTIONS.liability.title}
          >
            <p className="text-sm mb-6">
              {TERMS_SECTIONS.liability.description}
            </p>
            <div className="bg-background/50 p-5 rounded-2xl border border-muted/10">
              <h4 className="font-semibold text-foreground text-xs uppercase mb-2">
                {TERMS_SECTIONS.liability.forceMajeure.title}
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                {TERMS_SECTIONS.liability.forceMajeure.text}
              </p>
            </div>
          </InfoCard>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          <InfoCard
            icon={Shield}
            title={TERMS_SECTIONS.usage.title}
          >
            <p className="text-sm">
              {TERMS_SECTIONS.usage.description}
            </p>
          </InfoCard>

          <InfoCard
            icon={RefreshCw}
            title={TERMS_SECTIONS.modifications.title}
          >
            <p className="text-sm">
              {TERMS_SECTIONS.modifications.description}
            </p>
          </InfoCard>

        </div>

        <div className="pt-12 md:pt-16 border-t border-surface">
          <SupportCTA />
        </div>

      </main>
    </div>
  );
};

export default Terms;