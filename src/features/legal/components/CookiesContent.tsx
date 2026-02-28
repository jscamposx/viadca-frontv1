import { Cookie, Layers, Settings, Users, Bell, Shield, ToggleRight, Info, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { COOKIES_SECTIONS } from "../data/cookies.data";
import InfoCard from "./InfoCard";
import SupportCTA from "./SupportCTA";

const COOKIE_TYPE_ICONS: Record<string, LucideIcon> = {
  Shield,
  Layers,
  ToggleRight,
};

const CookiesContent = () => (
  <main className="grow max-w-315 mx-auto px-6 pb-24 space-y-6 md:space-y-8 w-full">
    <article className="bg-surface p-8 md:p-12 rounded-3xl border border-muted/10 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left transition-colors duration-300">
      <div className="w-24 h-24 rounded-3xl bg-background border border-muted/10 text-brand flex items-center justify-center shrink-0 shadow-inner">
        <Cookie size={48} strokeWidth={1.5} />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif mb-4">
          {COOKIES_SECTIONS.definition.title}
        </h2>
        <p className="text-muted leading-relaxed text-lg">{COOKIES_SECTIONS.definition.description}</p>
      </div>
    </article>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <InfoCard icon={Layers} title={COOKIES_SECTIONS.types.title}>
        <ul className="space-y-6">
          {COOKIES_SECTIONS.types.items.map((item) => {
            const Icon = COOKIE_TYPE_ICONS[item.icon];
            return (
              <li key={item.type} className="flex gap-4">
                <div className="mt-1 p-1.5 rounded-lg h-fit w-fit shrink-0 bg-background border border-muted/10 text-brand">
                  {Icon && <Icon size={16} />}
                </div>
                <div>
                  <strong className="block text-foreground text-sm font-semibold mb-1">
                    {item.type}
                  </strong>
                  <p className="text-sm text-muted leading-snug">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </InfoCard>

      <InfoCard icon={Settings} title={COOKIES_SECTIONS.control.title}>
        <p className="mb-8">{COOKIES_SECTIONS.control.description}</p>
        <div className="bg-background/50 border border-brand/20 rounded-2xl p-6">
          <h3 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
            <Check className="text-brand w-4 h-4" />
            Recomendación
          </h3>
          <p className="text-sm text-muted leading-relaxed">{COOKIES_SECTIONS.control.recommendation}</p>
        </div>
      </InfoCard>

      <InfoCard icon={Users} title={COOKIES_SECTIONS.thirdParty.title}>
        <p className="mb-6">{COOKIES_SECTIONS.thirdParty.description}</p>
        <div className="flex flex-wrap gap-2">
          {COOKIES_SECTIONS.thirdParty.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-background text-muted text-xs font-semibold rounded-lg border border-muted/20 hover:border-brand/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </InfoCard>

      <InfoCard icon={Bell} title={COOKIES_SECTIONS.updates.title}>
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
);

export default CookiesContent;
