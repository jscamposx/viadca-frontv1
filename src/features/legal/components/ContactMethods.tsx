import { ArrowRight, MessageCircle, Phone, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CONTACT_METHODS } from "../data/contact.data";

const METHOD_ICONS: Record<string, LucideIcon> = {
  MessageCircle,
  Phone,
  Mail,
};

const ContactMethods = () => (
  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {CONTACT_METHODS.map((method) => {
      const Icon = METHOD_ICONS[method.icon];
      return (
        <article
          key={method.id}
          className="group relative bg-surface rounded-3xl p-8 shadow-sm hover:shadow-xl border border-muted/10 hover:border-brand/20 transition-all duration-300 overflow-hidden transform hover:-translate-y-1 flex flex-col h-full"
        >
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-linear-to-br ${method.gradient} transition-opacity duration-500`}
          />
          <div className="relative z-10 flex flex-col flex-1">
            <div className="w-20 h-20 rounded-2xl bg-background border border-muted/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500 shrink-0">
              {Icon && <Icon className="w-10 h-10 text-brand" />}
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2 font-serif">{method.title}</h2>
            <p className="text-muted text-sm mb-6 flex-1">{method.description}</p>
            <address className="font-mono text-foreground font-medium text-sm mb-6 not-italic">
              {method.value}
            </address>
            <div className="inline-flex items-center gap-2 text-brand font-bold text-sm transition-all duration-300 group-hover:gap-3 mt-auto">
              Contactar
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </article>
      );
    })}
  </section>
);

export default ContactMethods;
