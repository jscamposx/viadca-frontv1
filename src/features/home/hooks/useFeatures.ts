
import { useRef, useEffect } from "react";
import { loadGsap } from "@/shared/lib/gsap";


export const useFeaturesListAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    const init = async () => {
      const { gsap } = await loadGsap();
      ctx = gsap.context(() => {
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
      }, containerRef);
    };

    init();
    return () => ctx?.revert();
  }, []);

  return { containerRef };
};


export const useFeatureModal = (onClose: () => void) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const isClosing = useRef(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gsapRef = useRef<any>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    const init = async () => {
      const { gsap } = await loadGsap();
      gsapRef.current = gsap;
      ctx = gsap.context(() => {
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
      }, containerRef);
    };

    init();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
      ctx?.revert();
    };
  }, []);

  const handleClose = () => {
    if (isClosing.current) return;
    isClosing.current = true;

    const gsap = gsapRef.current;
    if (!gsap) {
      onClose();
      return;
    }

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