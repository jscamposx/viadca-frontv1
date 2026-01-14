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

    const container = scrollRef.current;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    const cards = cardsRef.current;

    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      if (!card) return;

      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });


    let nextIndex = direction === "right" ? closestIndex + 1 : closestIndex - 1;

    if (nextIndex < 0) nextIndex = 0;
    if (nextIndex >= cards.length) nextIndex = cards.length - 1;

    const targetCard = cards[nextIndex];

    if (targetCard) {
 
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