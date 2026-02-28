import {
  MapPin,
  ExternalLink,
  Clock,
  Calendar,
  MessageSquare,
  Facebook,
  Instagram,
  Youtube,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CONTACT_LOCATION, CONTACT_HOURS, SOCIAL_LINKS } from "../data/contact.data";

const SOCIAL_ICONS: Record<string, LucideIcon> = {
  Facebook,
  Instagram,
  Youtube,
  Video,
};

const ContactLocator = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
    <section className="lg:col-span-2 flex flex-col h-full rounded-3xl overflow-hidden shadow-sm border border-muted/10 relative min-h-100 bg-surface/50">
      <div className="absolute top-6 left-6 z-20 max-w-[calc(100%-3rem)]">
        <div className="flex items-center gap-4 p-4 bg-background/95 backdrop-blur-md rounded-2xl border border-muted/20 shadow-sm">
          <div className="p-3 bg-brand/10 rounded-xl shrink-0">
            <MapPin className="w-6 h-6 text-brand" />
          </div>
          <address className="min-w-0 not-italic">
            <h2 className="text-foreground font-bold text-base leading-tight">Nuestra Ubicación</h2>
            <p className="text-muted text-sm mt-0.5 font-medium leading-snug wrap-break-word">
              {CONTACT_LOCATION.address}
            </p>
          </address>
        </div>
      </div>

      <a
        href={CONTACT_LOCATION.googleMapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 right-6 bg-background hover:bg-surface text-foreground py-3 px-5 rounded-xl shadow-sm transition-all duration-300 flex items-center gap-3 text-sm font-bold border border-muted/20 hover:scale-105 z-30"
      >
        <ExternalLink className="w-4 h-4 text-brand" />
        Abrir en Google Maps
      </a>
    </section>

    <div className="space-y-8 flex flex-col w-full">
      <section className="bg-surface rounded-3xl p-8 shadow-sm border border-muted/10 w-full">
        <header className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-brand/10 rounded-xl shrink-0">
            <Clock className="w-6 h-6 text-brand" />
          </div>
          <div>
            <h2 className="font-bold text-foreground text-xl font-serif">Horarios</h2>
            <p className="text-muted text-sm">Te esperamos</p>
          </div>
        </header>

        <ul className="space-y-4">
          {CONTACT_HOURS.map((item) => {
            const isClosed = item.horario.toLowerCase().includes("cerrado");
            return (
              <li
                key={item.dia}
                className="flex flex-wrap justify-between items-center p-4 rounded-xl bg-background border border-muted/10 gap-3"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-muted shrink-0" />
                  <span className="text-foreground font-medium">{item.dia}</span>
                </div>
                <time
                  className={`px-3 py-1.5 rounded-lg font-bold text-xs whitespace-nowrap ${
                    isClosed ? "bg-muted/10 text-muted" : "bg-brand/10 text-brand"
                  }`}
                >
                  {item.horario}
                </time>
              </li>
            );
          })}
        </ul>
      </section>

      {SOCIAL_LINKS.length > 0 && (
        <section className="bg-surface rounded-3xl p-8 shadow-sm border border-muted/10 w-full">
          <header className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-brand/10 rounded-xl shrink-0">
              <MessageSquare className="w-6 h-6 text-brand" />
            </div>
            <div>
              <h2 className="font-bold text-foreground text-xl font-serif">Síguenos</h2>
              <p className="text-muted text-sm">Únete a la comunidad</p>
            </div>
          </header>

          <ul className="grid grid-cols-2 gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.icon];
              return (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden p-4 rounded-2xl bg-background hover:bg-surface transition-all duration-300 border border-muted/10 hover:border-brand/30 flex flex-col items-center justify-center gap-3 h-full"
                  >
                    <div className="transform group-hover:scale-110 transition-transform duration-300 text-foreground group-hover:text-brand">
                      {Icon && <Icon className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-bold text-muted group-hover:text-foreground transition-colors text-center">
                      {social.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  </div>
);

export default ContactLocator;
