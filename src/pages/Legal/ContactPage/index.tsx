import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ArrowRight, 
  ExternalLink, 
  Calendar,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Video
} from "lucide-react";

import { 
  CONTACT_HERO, 
  CONTACT_METHODS, 
  CONTACT_LOCATION, 
  CONTACT_HOURS, 
  SOCIAL_LINKS
} from "../data/contact.data";
import SupportCTA from "../components/SupportCTA";
const Contact = () => {
  const handleAction = (type: string, value: string) => {
    const cleanValue = value.replace(/\D/g, "");
    if (type === 'whatsapp') window.open(`https://wa.me/${cleanValue}`, "_blank", "noopener,noreferrer");
    else if (type === 'phone') window.open(`tel:${cleanValue}`, "_self");
    else if (type === 'email') window.open(`mailto:${value}`, "_self");
  };

  const osmMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${CONTACT_LOCATION.coords.lng - 0.008},${CONTACT_LOCATION.coords.lat - 0.008},${CONTACT_LOCATION.coords.lng + 0.008},${CONTACT_LOCATION.coords.lat + 0.008}&layer=mapnik&marker=${CONTACT_LOCATION.coords.lat},${CONTACT_LOCATION.coords.lng}`;

  return (
    <div className="min-h-screen bg-background font-sans transition-colors duration-300 selection:bg-brand/10 selection:text-brand">
      
      <header className="relative pt-32 pb-20 md:pb-32 overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-brand/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative max-w-315 mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-muted/20 text-brand text-sm font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            {CONTACT_HERO.label}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground font-serif tracking-tight mb-6 leading-[1.1]">
            Conectemos <span className="block text-transparent bg-clip-text bg-linear-to-r from-brand via-brand/80 to-brand/60 mt-2">tu próxima aventura</span>
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            {CONTACT_HERO.description}
          </p>
        </div>
      </header>

      <main className="relative -mt-8 px-6 pb-20">
        <div className="max-w-315 mx-auto space-y-24">
          
          <section className="grid md:grid-cols-3 gap-6">
            {CONTACT_METHODS.map((method) => (
              <article
                key={method.id}
                onClick={() => handleAction(method.actionType, method.value)}
                className="group relative bg-surface rounded-3xl p-8 shadow-sm hover:shadow-xl border border-muted/10 hover:border-brand/20 transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-linear-to-br ${method.gradient} transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-background border border-muted/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-all duration-500`}>
                    {method.icon === 'MessageCircle' && <MessageCircle className={`w-10 h-10 text-brand`} />}
                    {method.icon === 'Phone' && <Phone className={`w-10 h-10 text-brand`} />}
                    {method.icon === 'Mail' && <Mail className={`w-10 h-10 text-brand`} />}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2 font-serif">
                    {method.title}
                  </h3>
                  <p className="text-muted text-sm mb-6">
                    {method.description}
                  </p>
                  <p className="font-mono text-foreground font-medium text-sm mb-6">
                    {method.value}
                  </p>

                  <div className="inline-flex items-center gap-2 text-brand font-bold text-sm transition-all duration-300 group-hover:gap-3">
                    Contactar
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </section>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            
            <section className="lg:col-span-2 flex flex-col h-full rounded-3xl overflow-hidden shadow-lg border border-muted/10 relative min-h-125">
              <div className="absolute top-6 left-6 z-20 pointer-events-none max-w-[90%]">
                <div className="flex items-center gap-4 p-4 bg-surface/90 backdrop-blur-md rounded-2xl border border-muted/20 shadow-xl pointer-events-auto">
                  <div className="p-3 bg-brand/10 rounded-xl shrink-0">
                    <MapPin className="w-6 h-6 text-brand" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-foreground font-bold text-base leading-tight">Nuestra Ubicación</h3>
                    <p className="text-muted text-sm mt-0.5 font-medium leading-snug wrap-break-word">
                      {CONTACT_LOCATION.address}
                    </p>
                  </div>
                </div>
              </div>

              <iframe
                src={osmMapUrl}
                className="w-full h-full grayscale-[0.5] hover:grayscale-0 transition-all duration-700 bg-muted/10"
                style={{ border: 0 }}
                loading="lazy"
                title="Mapa de Ubicación"
              />

              <a
                href={CONTACT_LOCATION.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 bg-surface hover:bg-background text-foreground py-3 px-5 rounded-xl shadow-xl transition-all duration-300 flex items-center gap-3 text-sm font-bold border border-muted/20 hover:scale-105 z-30"
              >
                <ExternalLink className="w-4 h-4 text-brand" />
                Abrir en Google Maps
              </a>
            </section>

            <div className="space-y-6 flex flex-col">
              <section className="bg-surface rounded-3xl p-8 shadow-sm border border-muted/10 flex-1">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-brand/10 rounded-xl">
                    <Clock className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-xl font-serif">Horarios</h3>
                    <p className="text-muted text-sm">Te esperamos</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {CONTACT_HOURS.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 rounded-xl bg-background border border-muted/10">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-muted" />
                        <span className="text-foreground font-medium">{item.dia}</span>
                      </div>
                      <span className={`px-3 py-1.5 rounded-lg font-bold text-xs ${
                        item.horario.toLowerCase().includes("cerrado")
                          ? "bg-muted/10 text-muted"
                          : "bg-brand/10 text-brand"
                      }`}>
                        {item.horario}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {SOCIAL_LINKS.length > 0 && (
                <section className="bg-surface rounded-3xl p-8 shadow-sm border border-muted/10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-brand/10 rounded-xl">
                      <MessageSquare className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-xl font-serif">Síguenos</h3>
                      <p className="text-muted text-sm">Únete a la comunidad</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {SOCIAL_LINKS.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden p-4 rounded-2xl bg-background hover:bg-surface transition-all duration-300 border border-muted/10 hover:border-brand/30 flex flex-col items-center justify-center gap-3"
                      >
                        <div className="transform group-hover:scale-110 transition-transform duration-300 text-foreground group-hover:text-brand">
                           {social.icon === 'Facebook' && <Facebook className="w-6 h-6" />}
                           {social.icon === 'Instagram' && <Instagram className="w-6 h-6" />}
                           {social.icon === 'Youtube' && <Youtube className="w-6 h-6" />}
                           {social.icon === 'Video' && <Video className="w-6 h-6" />}
                        </div>
                        <span className="text-xs font-bold text-muted group-hover:text-foreground transition-colors">
                          {social.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
                   <div className=" border-t border-surface">
                        <SupportCTA />
                      </div>

        </div>
      </main>
    </div>
  );
};

export default Contact;