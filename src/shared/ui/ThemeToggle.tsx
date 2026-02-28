import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Sun, Moon } from "lucide-react";

const COLOR_THEMES = [
  { key: "theme-blue",    light: "#00509d", dark: "#38bdf8", label: "Azul" },
  { key: "theme-rose",    light: "#e11d48", dark: "#fb7185", label: "Rosa" },
  { key: "theme-violet",  light: "#7c3aed", dark: "#a78bfa", label: "Violeta" },
  { key: "theme-emerald", light: "#059669", dark: "#34d399", label: "Esmeralda" },
  { key: "theme-amber",   light: "#d97706", dark: "#fbbf24", label: "Ámbar" },
] as const;

type ColorTheme = typeof COLOR_THEMES[number]["key"];

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [color, setColor] = useState<ColorTheme>(() => {
    if (typeof window === "undefined") return "theme-blue";
    return (localStorage.getItem("theme-color") as ColorTheme) ?? "theme-blue";
  });

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: globalThis.MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const root = document.documentElement;
    COLOR_THEMES.forEach(({ key }) => root.classList.remove(key));
    root.classList.add(color);
    localStorage.setItem("theme-color", color);
  }, [color]);

  const toggleDark = async (e: MouseEvent<HTMLButtonElement>) => {
    const nextState = !isDark;
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    };

    if (
      !doc.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsDark(nextState);
      return;
    }

    const { clientX, clientY } = e;
    const root = doc.documentElement;
    root.style.setProperty("--transition-x", `${clientX}px`);
    root.style.setProperty("--transition-y", `${clientY}px`);
    const transition = doc.startViewTransition(() => {
      if (nextState) root.classList.add("dark");
      else root.classList.remove("dark");
    });
    await transition.ready;
    setIsDark(nextState);
    root.style.removeProperty("--transition-x");
    root.style.removeProperty("--transition-y");
  };

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 p-2 rounded-2xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 shadow-xl">
          {COLOR_THEMES.map((t) => (
            <button
              key={t.key}
              onClick={() => { setColor(t.key); setOpen(false); }}
              aria-label={t.label}
              className="w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
              style={{
                background: isDark ? t.dark : t.light,
                borderColor: color === t.key ? (isDark ? t.dark : t.light) : "transparent",
                boxShadow: color === t.key ? `0 0 0 2px ${isDark ? t.dark : t.light}40` : "none",
                outline: color === t.key ? "2px solid white" : "none",
                outlineOffset: "-4px",
              }}
            />
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-12 h-12 rounded-full shadow-lg transition-all duration-300 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center"
          aria-label="Seleccionar color"
          style={{ color: isDark ? COLOR_THEMES.find(t => t.key === color)?.dark : COLOR_THEMES.find(t => t.key === color)?.light }}
        >
          <span className="w-5 h-5 rounded-full block" style={{ background: isDark ? COLOR_THEMES.find(t => t.key === color)?.dark : COLOR_THEMES.find(t => t.key === color)?.light }} />
        </button>

        <button
          onClick={toggleDark}
          className="w-12 h-12 rounded-full shadow-lg transition-all duration-300 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:scale-110 active:scale-95 text-brand cursor-pointer flex items-center justify-center"
          aria-label="Cambiar modo"
        >
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;

