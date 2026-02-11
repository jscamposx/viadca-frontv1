import { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useCarousel = () => {
  const scrollRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  const canScrollLeft = true;
  const canScrollRight = true;

  const checkScroll = () => {
    return;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardsRef.current, { autoAlpha: 0, y: 40, scale: 0.98 });
      gsap.fromTo(
        cardsRef.current,
        {
          y: 40,
          autoAlpha: 0,
          scale: 0.98,
        },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          immediateRender: true,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play reverse play reverse",
            invalidateOnRefresh: false,
          },
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const handleThemeChange = () => {
      ScrollTrigger.refresh();
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const styles = getComputedStyle(container);
    const paddingLeft = parseFloat(styles.paddingLeft || "0");
    const cards = cardsRef.current;

    if (cards.length === 0) return;

    const currentLeft = container.scrollLeft + paddingLeft;
    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      if (!card) return;
      const distance = Math.abs(currentLeft - card.offsetLeft);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    let nextIndex = direction === "right" ? closestIndex + 1 : closestIndex - 1;

    if (nextIndex < 0) nextIndex = cards.length - 1;
    if (nextIndex >= cards.length) nextIndex = 0;

    const targetCard = cards[nextIndex];
    const target = targetCard ? targetCard.offsetLeft - paddingLeft : container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const clampedScroll = Math.min(Math.max(target, 0), maxScroll);

    container.scrollTo({
      left: clampedScroll,
      behavior: "smooth",
    });

    setTimeout(checkScroll, 350);
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