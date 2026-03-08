
import { useRef, useState, useEffect } from "react";
import { loadGsap } from "@/shared/lib/gsap";
import { REVIEWS_DATA } from "../data/reviews.data";
import type { Review } from "../data/reviews.data";

export const useReviews = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [reviews] = useState<Review[]>(REVIEWS_DATA);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    const init = async () => {
      const { gsap } = await loadGsap();
      ctx = gsap.context(() => {
        gsap.from(".review-card", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 78%",
          },
        });
      }, containerRef);
    };

    init();
    return () => ctx?.revert();
  }, []);


  const scroll = (direction: "left" | "right") => {
    const node = trackRef.current;
    if (!node) return;

    const cards = node.querySelectorAll<HTMLElement>(".review-card");
    if (!cards.length) return;

    const styles = window.getComputedStyle(node);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");
    const cardWidth = cards[0].getBoundingClientRect().width;
    const step = cardWidth + gap;
    const amount = direction === "left" ? -step : step;

    node.scrollBy({ left: amount, behavior: "smooth" });
  };

  return {
    containerRef,
    trackRef,
    reviews,
    scroll,
  };
};