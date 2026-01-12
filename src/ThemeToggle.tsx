import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // 1. Inicializar el tema basado en localStorage o preferencia del sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  // 2. Función para alternar
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300
        bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700
        hover:scale-110 active:scale-95 text-brand"
        aria-label="Cambiar tema"
      >
        {isDark ? (
          <Sun className="w-6 h-6 transition-transform duration-500 rotate-0" />
        ) : (
          <Moon className="w-6 h-6 transition-transform duration-500 rotate-0" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;