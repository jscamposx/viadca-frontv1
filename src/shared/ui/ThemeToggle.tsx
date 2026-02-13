import { useEffect, useState, type MouseEvent } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

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

  const toggleTheme = async (e: MouseEvent<HTMLButtonElement>) => {
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
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:scale-110 active:scale-95 text-brand cursor-pointer"
        aria-label="Cambiar tema"
      >
        {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default ThemeToggle;