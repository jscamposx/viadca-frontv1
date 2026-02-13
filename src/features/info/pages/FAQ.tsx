import { Link } from "react-router-dom";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_HERO, FAQ_CATEGORIES } from "../data/faq.data";
import SupportCTA from "../../common/components/SupportCTA";

const Faq = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-10">
        
        {/* Sidebar Sticky */}
        <aside className="lg:col-span-1 hidden lg:block">
          <nav className="sticky top-32 space-y-4">
            <h2 className="text-sm font-bold tracking-wide text-muted uppercase">
              Categorías
            </h2>
            <ul className="space-y-1">
              {FAQ_CATEGORIES.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-muted hover:bg-surface hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Contenido Principal */}
        <div className="lg:col-span-3 space-y-16">
          
          <header className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
               <HelpCircle className="w-3.5 h-3.5" />
               {FAQ_HERO.label}
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium text-foreground leading-tight">
              {FAQ_HERO.title}
            </h1>
            <p className="text-lg text-muted">
              {FAQ_HERO.description}
            </p>
          </header>

          {/* Navegación Móvil */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {FAQ_CATEGORIES.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium bg-surface text-foreground border border-muted/20 whitespace-nowrap"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Secciones de Preguntas */}
          {FAQ_CATEGORIES.map((cat) => (
            <section
              key={cat.id}
              id={cat.id}
              className="space-y-6 scroll-mt-32"
            >
              <div className="border-b border-muted/20 pb-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {cat.title}
                </h2>
                <p className="text-muted mt-1">{cat.description}</p>
              </div>

              <div className="space-y-4">
                {cat.items.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-background rounded-xl border border-muted/20 hover:border-muted/40 transition-colors overflow-hidden"
                  >
                    <summary className="list-none px-6 py-5 cursor-pointer flex items-center justify-between gap-4 select-none outline-none">
                      <h3 className="font-semibold text-foreground text-base group-hover:text-blue-600 transition-colors">
                        {faq.q}
                      </h3>
                      <ChevronDown className="w-5 h-5 text-muted group-hover:text-blue-600 group-open:rotate-180 transition-transform duration-300 shrink-0" />
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-muted text-sm leading-relaxed border-t border-muted/10 pt-4">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}

          <SupportCTA />
          
           <div className="text-center pt-8">
            <Link to="/" className="text-sm font-semibold text-muted hover:text-blue-600 transition-colors">
              &larr; Volver al inicio
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Faq;