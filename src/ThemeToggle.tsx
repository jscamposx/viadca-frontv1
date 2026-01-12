import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  // Función auxiliar que realiza el cambio real
  const performToggle = (shouldBeDark) => {
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    }
  };

  const toggleTheme = async (e) => {
    const newThemeState = !isDark;

    // Verificar si el navegador soporta la API de View Transitions
    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      performToggle(newThemeState);
      return;
    }

    // 1. Capturar coordenadas del clic para el centro de la animación
    const x = e.clientX;
    const y = e.clientY;

    // 2. Pasar coordenadas a CSS mediante variables
    document.documentElement.style.setProperty("--transition-x", `${x}px`);
    document.documentElement.style.setProperty("--transition-y", `${y}px`);

    // 3. Iniciar la transición
    await document.startViewTransition(() => {
      // Aquí ocurre el cambio de estado del DOM
      performToggle(newThemeState);
    }).ready;

    // Limpieza opcional de variables
    document.documentElement.style.removeProperty("--transition-x");
    document.documentElement.style.removeProperty("--transition-y");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300
        bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700
        hover:scale-110 active:scale-95 text-brand cursor-pointer"
        aria-label="Cambiar tema"
      >
        {isDark ? (
          <Sun className="w-6 h-6" />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;