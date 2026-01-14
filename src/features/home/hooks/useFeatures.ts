// src/hooks/useFeatures.ts
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Hook para la animación de la lista principal
export const useFeaturesListAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const rows = gsap.utils.toArray<HTMLElement>(".feature-card");
      rows.forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return { containerRef };
};

// Hook para la animación y lógica del Modal
export const useFeatureModal = (onClose: () => void) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const isClosing = useRef(false);

  // Animación de entrada
  useGSAP(
    () => {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(
        modalRef.current,
        { y: "100%" },
        { y: "0%", duration: 0.5, ease: "power3.out" }
      );
    },
    { scope: containerRef }
  );

  // Bloquear scroll del body
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Manejador de cierre con animación
  const handleClose = () => {
    if (isClosing.current) return;
    isClosing.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: onClose });
      tl.to(modalRef.current, {
        y: "100%",
        duration: 0.4,
        ease: "power3.in",
      });
      tl.to(backdropRef.current, { opacity: 0, duration: 0.4 }, "<");
    }, containerRef);
    
    return () => ctx.revert();
  };

  return { containerRef, backdropRef, modalRef, handleClose };
};