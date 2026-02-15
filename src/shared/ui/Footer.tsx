import { Link } from "react-router-dom";
import { PATHS } from "@/app/config/paths";

const STATIC_CONTACT_INFO = {
  direccion: "Durango, México",
  telefono: "+52 618 000 0000",
  whatsapp: "+52 618 000 0000",
  email: "contacto@viadca.com",
};

const SOCIAL_LINKS = [
  {
    id: "facebook",
    url: "https://facebook.com",
    label: "Facebook de Viadca",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    hoverClass: "hover:bg-[#1877F2] hover:text-white border-blue-500/20 text-[#1877F2] dark:text-blue-400",
  },
  {
    id: "instagram",
    url: "https://instagram.com",
    label: "Instagram de Viadca",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    hoverClass: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:text-white border-purple-500/20 text-purple-600 dark:text-purple-400",
  },
];

const CONTACT_ITEMS = [
  {
    id: "address",
    label: "Dirección",
    value: STATIC_CONTACT_INFO.direccion,
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    colorClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500/20",
  },
  {
    id: "phone",
    label: "Teléfono",
    value: STATIC_CONTACT_INFO.telefono,
    href: `tel:${STATIC_CONTACT_INFO.telefono.replace(/\s+/g, '')}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    colorClass: "bg-green-500/10 text-green-600 dark:text-green-400 group-hover:bg-green-500/20",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: STATIC_CONTACT_INFO.whatsapp,
    href: `https://wa.me/526180000000`,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
      </svg>
    ),
    colorClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500/20",
  },
  {
    id: "email",
    label: "Email",
    value: STATIC_CONTACT_INFO.email,
    href: `mailto:${STATIC_CONTACT_INFO.email}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    colorClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:bg-purple-500/20",
  },
];

const LEGAL_LINKS = [
  { path: PATHS.INFO.CONTACT, label: "Contacto" },
  { path: PATHS.INFO.FAQ, label: "Ayuda / FAQ" },
  { path: PATHS.INFO.PRIVACY, label: "Privacidad" },
  { path: PATHS.INFO.TERMS, label: "Términos" },
  { path: PATHS.INFO.COOKIES, label: "Cookies" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      role="contentinfo"
      aria-labelledby="footer-heading"
      className="relative w-full bg-background border-t border-surface pt-20 pb-8 overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -left-32 w-64 h-64 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-48 h-48 rounded-full bg-purple-500/10 blur-2xl" />

        <div className="absolute top-10 left-10 opacity-20 dark:opacity-10" aria-hidden="true">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={`dot-${i}`}
                className="w-1 h-1 bg-brand rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 right-10 opacity-20 dark:opacity-10" aria-hidden="true">
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={`cross-${i}`}
                className="w-2 h-2 border border-brand/50 rotate-45"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full" aria-hidden="true">
        <svg className="w-full h-12 text-surface fill-current opacity-30 dark:opacity-10" viewBox="0 0 1440 64" preserveAspectRatio="none">
          <path d="M0 32L60 29.3C120 26.7 240 21.3 360 24C480 26.7 600 37.3 720 40C840 42.7 960 37.3 1080 29.3C1200 21.3 1320 10.7 1380 5.3L1440 0V64H1380C1320 64 1200 64 1080 64C960 64 840 64 720 64C600 64 480 64 360 64C240 64 120 64 60 64H0V32Z" />
        </svg>
      </div>

      <div className="max-w-315 mx-auto w-full px-6 md:px-12 relative z-10">
        <h2 id="footer-heading" className="sr-only">
          Información del pie de página
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <Link to={PATHS.HOME} className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg">
                <img
                  src="/viadcalogo.avif"
                  alt="VIADCA Agencia de Viajes"
                  width={200}
                  height={64}
                  className="h-16 w-auto drop-shadow-sm hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <h3 className="text-xl font-bold text-foreground">
                VIADCA by Zafiro Tours
              </h3>
              <p className="text-muted leading-relaxed max-w-sm text-sm">
                Tu agencia de viajes de confianza en Durango. Más de 15 años
                creando experiencias inolvidables y conectando sueños con
                destinos únicos alrededor del mundo.
              </p>
            </div>

            <ul className="grid grid-cols-3 gap-4 py-4 border-y border-surface" aria-label="Estadísticas rápidas">
              <li className="text-center">
                <div className="text-2xl font-bold text-brand">200+</div>
                <div className="text-xs text-muted uppercase tracking-wide">Destinos</div>
              </li>
              <li className="text-center">
                <div className="text-2xl font-bold text-brand">5K+</div>
                <div className="text-xs text-muted uppercase tracking-wide">Clientes</div>
              </li>
              <li className="text-center">
                <div className="text-2xl font-bold text-brand">15+</div>
                <div className="text-xs text-muted uppercase tracking-wide">Años</div>
              </li>
            </ul>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                Síguenos
              </h4>
              <nav className="flex items-center gap-3" aria-label="Redes sociales">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-11 h-11 bg-surface rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${social.hoverClass}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Contacto</h3>
            <address className="space-y-4 not-italic">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.id} className="group flex items-start gap-4 p-3 rounded-lg hover:bg-surface transition-colors duration-300">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${item.colorClass}`} aria-hidden="true">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs font-medium text-muted uppercase tracking-wide mb-1">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-foreground font-medium hover:text-brand transition-colors focus-visible:outline-none focus-visible:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-foreground font-medium">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </address>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Ubicación</h3>
            <div className="relative group">
              <div className="absolute inset-0 bg-brand/20 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" aria-hidden="true" />
              <div className="relative bg-surface rounded-2xl overflow-hidden shadow-sm border border-surface">
                <div className="aspect-video w-full bg-surface flex items-center justify-center">
                  <iframe
                    title="Mapa de ubicación"
                    src="https://maps.google.com/maps?q=Durango,Mexico&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                    className="w-full h-full border-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="p-4 bg-surface rounded-xl border border-surface">
              <p className="text-sm text-muted leading-relaxed">
                Nos encontramos en <span className="text-foreground font-medium">{STATIC_CONTACT_INFO.direccion}</span>. Te esperamos para planificar tu próxima aventura.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-surface flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <p className="text-sm text-muted">
              &copy; <time dateTime={currentYear.toString()}>{currentYear}</time>{" "}
              <span className="font-semibold text-foreground">VIADCA by Zafiro Tours</span>. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-1 text-xs text-muted" aria-hidden="true">
              <span>Hecho con</span>
              <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>en México</span>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm" aria-label="Enlaces legales y de ayuda">
            {LEGAL_LINKS.map((link, index) => (
              <div key={link.path} className="flex items-center gap-4">
                <Link
                  to={link.path}
                  className="text-muted hover:text-brand transition-colors duration-300 hover:underline focus-visible:outline-none focus-visible:text-brand"
                >
                  {link.label}
                </Link>
                {index < LEGAL_LINKS.length - 1 && (
                  <span className="text-surface-foreground/50 select-none" aria-hidden="true">•</span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;