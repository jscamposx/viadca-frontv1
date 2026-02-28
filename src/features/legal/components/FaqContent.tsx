import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_HERO, FAQ_CATEGORIES } from "../data/faq.data";
import SupportCTA from "./SupportCTA";

const FaqContent = () => (
  <main className="lg:col-span-9 space-y-20">
    <header className="space-y-6 max-w-3xl">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-muted/20 text-brand text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm">
        <HelpCircle className="w-3.5 h-3.5" />
        {FAQ_HERO.label}
      </div>
      <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1]">
        {FAQ_HERO.title}
      </h1>
      <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
        {FAQ_HERO.description}
      </p>
    </header>

    <div className="space-y-24">
      {FAQ_CATEGORIES.map((cat) => (
        <section key={cat.id} id={cat.id} className="scroll-mt-40 lg:scroll-mt-32">
          <div className="mb-8 pl-6 border-l-4 border-brand">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif">{cat.title}</h2>
            <p className="text-muted mt-2 text-lg">{cat.description}</p>
          </div>

          <div className="space-y-4">
            {cat.items.map((faq) => (
              <article key={faq.q}>
                <details className="group bg-surface p-1 rounded-2xl border border-muted/10 open:border-muted/20 hover:border-brand/20 transition-all duration-300 overflow-hidden shadow-sm">
                  <summary className="list-none px-6 py-5 cursor-pointer flex items-start justify-between gap-4 select-none outline-none">
                    <h3 className="font-semibold text-foreground text-base md:text-lg leading-snug group-hover:text-brand transition-colors">
                      {faq.q}
                    </h3>
                    <span className="p-1 rounded-full bg-background border border-muted/20 group-hover:border-brand/30 group-open:bg-brand group-open:border-brand transition-all duration-300 mt-0.5 shrink-0">
                      <ChevronDown className="w-5 h-5 text-muted group-hover:text-brand group-open:text-surface group-open:rotate-180 transition-all duration-300" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <div className="h-px w-full bg-muted/10 mb-4" />
                    <p className="text-muted text-base leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>

    <div className="pt-12 border-t border-muted/10">
      <SupportCTA />
    </div>
  </main>
);

export default FaqContent;
