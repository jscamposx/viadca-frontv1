import { ArrowRight } from 'lucide-react';
import { CONTACT_CONTENT } from '../data/contact.data';

const ContactCTA = () => {
  return (
    <section className="w-full bg-background py-24 md:py-40 px-6 md:px-12 border-t border-muted/20 transition-colors duration-300">
      {/* AQUI ESTÁ LA CLAVE: max-w-315 para igualar a Reviews */}
      <div className="max-w-315 mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        
        <div className="max-w-4xl">
          <h2 className="text-6xl md:text-[100px] font-serif font-medium text-foreground leading-[0.9] tracking-tight mb-4 transition-colors duration-300">
            {CONTACT_CONTENT.title}
          </h2>

          <p className="text-lg md:text-xl text-muted max-w-3xl transition-colors duration-300">
            {CONTACT_CONTENT.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button
            type="button"
            onClick={() => console.log('Click en WhatsApp')}
            className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-background bg-foreground rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground w-full sm:w-auto cursor-pointer"
          >
            <span className="relative z-10 flex items-center">
              {CONTACT_CONTENT.ctaWhatsApp}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-foreground bg-background border-2 border-muted/20 rounded-full transition-all duration-300 hover:border-foreground hover:bg-surface focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-muted w-full sm:w-auto"
          >
            {CONTACT_CONTENT.ctaCall}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;