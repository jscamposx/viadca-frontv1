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
  Share2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PRIVACY_HERO, PRIVACY_SECTIONS } from "../data/privacy.data";
import InfoCard from "./InfoCard";
import LegalHero from "./LegalHero";
import SupportCTA from "./SupportCTA";

const SECURITY_ICONS: Record<string, LucideIcon> = {
  Server,
  Shield,
  AlertTriangle,
};

const DATA_ICONS: Record<string, LucideIcon> = {
  UserCheck,
  Cookie,
};

const PrivacyContent = () => (
  <div className="flex flex-col min-h-screen bg-background font-sans transition-colors duration-300">
    <LegalHero icon={Shield} hero={PRIVACY_HERO} />
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
      <InfoCard icon={Database} title={PRIVACY_SECTIONS.dataRequested.title}>
        <ul className="space-y-6">
          {PRIVACY_SECTIONS.dataRequested.items.map((item) => {
            const Icon = DATA_ICONS[item.icon];
            return (
              <li key={item.title} className="flex gap-4">
                <div className="mt-1 p-1.5 rounded-lg h-fit w-fit shrink-0 bg-background border border-muted/10 text-brand">
                  {Icon && <Icon size={16} />}
                </div>
                <div>
                  <strong className="block text-foreground text-sm font-semibold mb-1">
                    {item.title}
                  </strong>
                  <p className="text-sm text-muted leading-snug">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </InfoCard>

      <InfoCard icon={Globe} title={PRIVACY_SECTIONS.usage.title}>
        <div className="space-y-4">
          {PRIVACY_SECTIONS.usage.items.map((text) => (
            <div key={text} className="flex items-start gap-3 text-muted text-sm md:text-base">
              <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
              <span>{text}</span>
            </div>
          ))}
          <div className="mt-6 pt-4 border-t border-muted/10">
            <p className="text-xs text-muted/80 font-medium">{PRIVACY_SECTIONS.usage.note}</p>
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
          {PRIVACY_SECTIONS.security.items.map((item) => {
            const Icon = SECURITY_ICONS[item.icon];
            return (
              <div key={item.title} className="flex flex-col gap-3">
                <div className="text-brand">{Icon && <Icon size={24} />}</div>
                <div>
                  <h3 className="font-bold text-foreground text-sm uppercase tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
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
        {PRIVACY_SECTIONS.sharing.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 bg-background text-muted text-xs font-semibold rounded-lg border border-muted/20 hover:border-brand/30 transition-colors cursor-default"
          >
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

export default PrivacyContent;
