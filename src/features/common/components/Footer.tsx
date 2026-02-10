import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { SITE_INFO } from "../data/site-info.data";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { brand, stats, contact, socials } = SITE_INFO;

  return (
    <footer
      id="footer"
      role="contentinfo"
      aria-labelledby="footer-heading"
      className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 text-slate-700 dark:text-slate-300 pt-20 pb-8 overflow-hidden transition-colors duration-300"
    >
      {/* --- Elementos Decorativos (Adaptados a Dark Mode) --- */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -left-32 w-64 h-64 rounded-full bg-blue-200/40 dark:bg-blue-900/10 blur-3xl" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-orange-200/30 dark:bg-orange-900/10 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-48 h-48 rounded-full bg-purple-200/20 dark:bg-purple-900/10 blur-2xl" />

        {/* Patrón de puntos */}
        <div className="absolute top-10 left-10 opacity-10 dark:opacity-5">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* --- Divisor en Ola (SVG) --- */}
      <div className="absolute -top-[1px] left-0 w-full" aria-hidden="true">
        <svg
          className="w-full h-16 fill-background" // fill-background usa tu variable CSS global
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
        >
          <path d="M0 32L60 29.3C120 26.7 240 21.3 360 24C480 26.7 600 37.3 720 40C840 42.7 960 37.3 1080 29.3C1200 21.3 1320 10.7 1380 5.3L1440 0V64H1380C1320 64 1200 64 1080 64C960 64 840 64 720 64C600 64 480 64 360 64C240 64 120 64 60 64H0V32Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="footer-heading" className="sr-only">
          Información del pie de página
        </h2>

        {/* --- Contenido Principal (Grid) --- */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Columna 1: Marca y Redes */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                {/* Usamos img estándar para evitar dependencias, asegúrate de que la ruta sea correcta */}
                <img
                  src={brand.logo}
                  alt="Logo VIADCA"
                  width={200}
                  height={64}
                  className="h-16 w-auto drop-shadow-sm hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {brand.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
                {brand.description}
              </p>
            </div>

            {/* Stats */}
            <ul className="grid grid-cols-3 gap-4 py-4 border-y border-slate-200 dark:border-white/5">
              {stats.map((stat, idx) => (
                <li key={idx} className="text-center">
                  <div className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider font-semibold opacity-70">
                    {stat.label}
                  </div>
                </li>
              ))}
            </ul>

            {/* Redes Sociales */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wide opacity-80">
                Síguenos
              </h4>
              <div className="flex items-center gap-3">
                <SocialLink href={socials.facebook} label="Facebook" color="bg-blue-600">
                   <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </SocialLink>
                <SocialLink href={socials.instagram} label="Instagram" color="bg-pink-600">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </SocialLink>
                <SocialLink href={socials.tiktok} label="TikTok" color="bg-black">
                     <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05 0-12.07z" /></svg>
                </SocialLink>
              </div>
            </div>
          </div>

          {/* Columna 2: Contacto (Iconos Lucide) */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              Contacto
            </h3>
            <div className="space-y-4">
              <ContactItem 
                icon={MapPin} 
                title="Dirección" 
                content={contact.address} 
                href={contact.googleMapsUrl}
                color="text-blue-600 bg-blue-100 dark:bg-blue-900/30"
              />
              <ContactItem 
                icon={Phone} 
                title="Teléfono" 
                content={contact.phone} 
                href={contact.phoneHref}
                color="text-green-600 bg-green-100 dark:bg-green-900/30"
              />
              <ContactItem 
                icon={Mail} 
                title="Email" 
                content={contact.email} 
                href={`mailto:${contact.email}`}
                color="text-purple-600 bg-purple-100 dark:bg-purple-900/30"
              />
              <ContactItem 
                icon={Clock} 
                title="Horario" 
                content={contact.schedule} 
                color="text-orange-600 bg-orange-100 dark:bg-orange-900/30"
              />
            </div>
          </div>

          {/* Columna 3: Mapa y Ubicación */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              Ubicación
            </h3>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-zinc-700">
                <div className="aspect-[4/3] w-full bg-slate-200 dark:bg-zinc-900">
                  <iframe
                    title="Mapa de ubicación"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(contact.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    loading="lazy"
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm rounded-xl border border-white/80 dark:border-white/10">
              <p className="text-sm leading-relaxed flex items-start gap-2">
                 <MapPin className="w-4 h-4 mt-1 shrink-0 text-brand" />
                 <span>Te esperamos en nuestra oficina para planificar tu próxima aventura.</span>
              </p>
            </div>
          </div>

        </div>

        {/* --- Bottom Section (Legales) --- */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-sm">
              <p>
                © {currentYear} <span className="font-bold text-slate-900 dark:text-white">VIADCA</span>. Todos los derechos reservados.
              </p>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-400" />
              <div className="flex items-center gap-1">
                <span>Hecho con</span>
                <span className="text-red-500 animate-pulse">❤</span>
                <span>en México</span>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-4 text-sm font-medium">
              <FooterLink to="/contacto">Contacto</FooterLink>
              <span className="text-slate-300 dark:text-zinc-700">•</span>
              <FooterLink to="/privacidad">Privacidad</FooterLink>
              <span className="text-slate-300 dark:text-zinc-700">•</span>
              <FooterLink to="/terminos">Términos</FooterLink>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* --- Subcomponentes para limpiar el código principal --- */

const SocialLink = ({ href, children, label, color }: { href: string; children: React.ReactNode; label: string; color: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300 transition-all duration-300 hover:scale-110 hover:text-white hover:${color} group`}
    aria-label={label}
  >
    {children}
  </a>
);

const ContactItem = ({ icon: Icon, title, content, href, color }: any) => (
  <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300 group">
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${color}`}>
      <Icon className="w-5 h-5" />
    </div>
    <div className="min-w-0 flex-1">
      <div className="text-[10px] uppercase tracking-wider font-bold opacity-60 mb-0.5">{title}</div>
      {href ? (
        <a href={href} className="text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-brand transition-colors block truncate">
          {content}
        </a>
      ) : (
        <div className="text-sm font-medium text-slate-800 dark:text-slate-200">{content}</div>
      )}
    </div>
  </div>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="hover:text-brand dark:hover:text-blue-400 transition-colors"
  >
    {children}
  </Link>
);

export default Footer;