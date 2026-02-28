import { useEffect, useRef, useState } from "react";
import { Sun, Moon, Sparkles, Leaf, Heart, Flame, Star } from "lucide-react";

const THEMES = [
  { key: "light",    label: "Claro",       Icon: Sun,      dark: false },
  { key: "dark",     label: "Oscuro",      Icon: Moon,     dark: true  },
  { key: "violet",   label: "Violeta",     Icon: Sparkles, dark: true  },
  { key: "emerald",  label: "Esmeralda",   Icon: Leaf,     dark: true  },
  { key: "rose",     label: "Rosa",        Icon: Heart,    dark: true  },
  { key: "amber",    label: "Ambar",       Icon: Flame,    dark: false },
  { key: "midnight", label: "Medianoche",  Icon: Star,     dark: true  },
] as const;

type Theme = typeof THEMES[number]["key"];

const THEME_CLASSES = ["dark", "theme-violet", "theme-emerald", "theme-rose", "theme-amber", "theme-midnight"] as const;

const applyTheme = (t: Theme) => {
  const root = document.documentElement;
  THEME_CLASSES.forEach((c) => root.classList.remove(c));
  const entry = THEMES.find((x) => x.key === t)!;
  if (entry.dark) root.classList.add("dark");
  if (t !== "light" && t !== "dark") root.classList.add(`theme-${t}`);
  localStorage.setItem("theme", t);
};

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored && THEMES.some((t) => t.key === stored)) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [open, setOpen]   = useState(false);
  const containerRef      = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const changeTheme = async (next: Theme, e: React.MouseEvent) => {
    if (next === theme) { setOpen(false); return; }

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    };

    setOpen(false);

    if (!doc.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyTheme(next);
      setTheme(next);
      return;
    }

    const root = document.documentElement;
    root.style.setProperty("--transition-x", `${e.clientX}px`);
    root.style.setProperty("--transition-y", `${e.clientY}px`);

    const transition = doc.startViewTransition(() => {
      applyTheme(next);
      setTheme(next);
    });

    await transition.ready;
    root.style.removeProperty("--transition-x");
    root.style.removeProperty("--transition-y");
  };

  const current = THEMES.find((t) => t.key === theme)!;
  const { Icon: CurrentIcon } = current;

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="flex flex-col gap-1 p-2 rounded-2xl bg-background border border-foreground/10 shadow-2xl">
          {THEMES.map(({ key, label, Icon }) => (
            <button
              key={key}
              onClick={(e) => changeTheme(key, e)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer w-full whitespace-nowrap ${
                theme === key
                  ? "bg-brand text-brand-foreground"
                  : "text-foreground hover:bg-surface"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="w-12 h-12 rounded-full shadow-lg bg-background border border-foreground/15 text-brand hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center [box-shadow:0_4px_24px_color-mix(in_srgb,var(--brand)_20%,transparent)]"
        aria-label="Cambiar tema"
      >
        <CurrentIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ThemeToggle;
