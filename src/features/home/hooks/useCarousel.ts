import { useRef, useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // ----------------------------------------------------------------------
  // [LÓGICA] Animaciones GSAP
  // ----------------------------------------------------------------------
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // ----------------------------------------------------------------------
  // [LÓGICA] Control del Scroll
  // ----------------------------------------------------------------------
  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 2);
    // Margen de error pequeño para detectar el final
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  /**
   * Nueva lógica de scroll basada en índices y centrado matemático.
   * Esto asegura que la tarjeta siempre quede en el medio del contenedor.
   */
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    const cards = cardsRef.current;

    // 1. Encontrar el índice de la tarjeta que está actualmente más cerca del centro
    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      if (!card) return;
      // Calculamos el centro de la tarjeta
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    // 2. Determinar el siguiente índice basado en la dirección
    let nextIndex = direction === "right" ? closestIndex + 1 : closestIndex - 1;

    // 3. Validar límites para no salirnos del array
    if (nextIndex < 0) nextIndex = 0;
    if (nextIndex >= cards.length) nextIndex = cards.length - 1;

    // 4. Calcular la posición exacta para centrar la tarjeta objetivo
    const targetCard = cards[nextIndex];

    if (targetCard) {
      // Fórmula: Posición Tarjeta - (Mitad Contenedor) + (Mitad Tarjeta)
      const scrollPos =
        targetCard.offsetLeft -
        container.clientWidth / 2 +
        targetCard.offsetWidth / 2;

      container.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
    }

    setTimeout(checkScroll, 600);
  };

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return {
    containerRef,
    scrollRef,
    addToRefs,
    canScrollLeft,
    canScrollRight,
    scroll,
    checkScroll,
  };
};