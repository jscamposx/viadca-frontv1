
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Review, REVIEWS_DATA } from "../data/reviews.data";

gsap.registerPlugin(ScrollTrigger);

export const useReviews = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [reviews] = useState<Review[]>(REVIEWS_DATA);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
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

      return () => ctx.revert();
    },
    { scope: containerRef }
  );


  const scroll = (direction: "left" | "right") => {
    const node = trackRef.current;
    if (!node) return;
    const cardWidth = 360;
    const gap = 24;
    const amount = direction === "left" ? -(cardWidth + gap) : cardWidth + gap;
    node.scrollBy({ left: amount, behavior: "smooth" });
  };

  return {
    containerRef,
    trackRef,
    reviews,
    scroll,
  };
};