import { useRef, useEffect, useState } from "react";
import { loadGsap } from "@/shared/lib/gsap";

export const useCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    const init = async () => {
      const { gsap } = await loadGsap();
      ctx = gsap.context(() => {
        gsap.fromTo(
          cardsRef.current,
          {
            y: 100,
            opacity: 0,
            immediateRender: false,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }, containerRef);
    };

    init();
    return () => ctx?.revert();
  }, []);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const isMobile = window.innerWidth < 768;
    
    const scrollAmount = isMobile ? 352 + 16 : 650 + 32;

    if (direction === "left") {
      const currentScroll = scrollRef.current.scrollLeft;
      if (currentScroll - scrollAmount < 200) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    setTimeout(checkScroll, 600);
  };

  const addToRefs = (el: HTMLElement | null) => {
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
