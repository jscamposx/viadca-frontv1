import { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LOGOS_DATA } from "../data/logos.data";
import type { LogoItem } from "../data/logos.data";

gsap.registerPlugin(ScrollTrigger);

export const useLogosCarousel = (logosProp?: LogoItem[]) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSeqRef = useRef<HTMLUListElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const marqueeTween = useRef<gsap.core.Tween | null>(null);
  const [seqWidth, setSeqWidth] = useState(0);

  const base = useMemo(
    () => (logosProp && logosProp.length ? logosProp : LOGOS_DATA),
    [logosProp]
  );

  const sequences = useMemo(() => [base, base, base], [base]);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { y: 40, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, { scope: sectionRef });


  useEffect(() => {
    const el = firstSeqRef.current;
    if (!el) return;

    const measure = () => {
   
        const width = el.scrollWidth || el.offsetWidth || 0;
        setSeqWidth(width);
    };
    

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);

    const t = setTimeout(measure, 500);

    return () => {
      ro.disconnect();
      clearTimeout(t);
    };
  }, [base]);

 
  useEffect(() => {
    if (!trackRef.current || seqWidth <= 0) return;

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    const speed = isMobile ? 100 : isTablet ? 80 : 50; 
    const duration = seqWidth / speed;

    if (marqueeTween.current) marqueeTween.current.kill();

   
    marqueeTween.current = gsap.to(trackRef.current, {
      x: -seqWidth,
      duration: duration,
      ease: "none", 
      repeat: -1, 
    });

    return () => {
      if (marqueeTween.current) marqueeTween.current.kill();
    };
  }, [seqWidth]);

  const setPaused = (isPaused: boolean) => {
    if (!marqueeTween.current) return;
    if (isPaused) {
      marqueeTween.current.pause();
    } else {
      marqueeTween.current.play();
    }
  };

  return {
    sectionRef,
    containerRef,
    trackRef,
    firstSeqRef,
    sequences,
    setPaused,
  };
};  