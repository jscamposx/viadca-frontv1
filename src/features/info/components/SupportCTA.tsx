import { ArrowLeft, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SupportCTAProps {
  onWhatsAppClick?: () => void;
  phoneHref?: string;
}

const SupportCTA = ({ 
  onWhatsAppClick = () => window.open('https://wa.me/5211234567890', '_blank'), 
  phoneHref = "tel:9992423321" 
}: SupportCTAProps) => {
  return (
    <section className="w-full mt-2 pt-5">
      <div className="bg-surface md:bg-transparent p-6 md:p-0 rounded-3xl md:rounded-none border border-muted/10 md:border-none shadow-sm md:shadow-none transition-all duration-300">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-between">
          <div className="max-w-lg text-center lg:text-left">
          <h2 className="text-2xl font-bold font-serif text-foreground mb-2">
            ¿Problemas técnicos?
          </h2>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            Si tienes dificultades navegando o dudas sobre tu privacidad, nuestro equipo técnico está listo para ayudarte.
          </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={onWhatsAppClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand hover:bg-brand/90 text-brand-foreground font-medium transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              Soporte Técnico
            </button>

            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-background text-foreground font-medium border border-muted/20 hover:bg-surface hover:border-brand/30 transition-all active:scale-95"
            >
              <Phone className="w-5 h-5 text-muted" />
              Llamar
            </a>
          </div>
        </div>
      </div>
      <footer className="pt-8 text-center">
        <nav aria-label="Navegación legal">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-bold text-muted hover:text-brand transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Volver al inicio
          </Link>
        </nav>
      </footer>
    </section>
  );
};

export default SupportCTA;