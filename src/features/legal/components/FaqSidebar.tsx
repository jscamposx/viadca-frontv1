import { FAQ_CATEGORIES } from "../data/faq.data";

const FaqSidebar = () => (
  <aside className="hidden lg:block lg:col-span-3 sticky top-32">
    <nav aria-label="Navegación de categorías" className="space-y-6">
      <h2 className="text-xs font-bold tracking-widest text-muted uppercase ml-3">Categorías</h2>
      <ul className="space-y-1">
        {FAQ_CATEGORIES.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-muted transition-all duration-200 hover:bg-surface hover:text-foreground hover:shadow-sm"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);

export default FaqSidebar;
