import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const useHeroAnimation = (isMediaReady: boolean) => {
  const container = useRef<HTMLDivElement>(null);
  const rightSideWrapper = useRef<HTMLDivElement>(null);
  const videoInner = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLDivElement>(null);
  const leftContent = useRef<HTMLDivElement>(null);
  const leftContentInner = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!isMediaReady) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.set(leftContent.current, {
          width: "0%",
          height: "100%",
          opacity: 0,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=250%",
            scrub: 1,
            pin: true,
            pinSpacing: true,
          },
        });

        tl.to(videoInner.current, {
          width: "95vw",
          height: "95vh",
          borderRadius: "0px",
          duration: 1,
        });

        tl.to(
          overlay.current,
          {
            opacity: 1,
            backdropFilter: "blur(16px)",
            backgroundColor: "rgba(0,0,0,0.4)",
            duration: 1,
          },
          ">-0.5"
        );

        tl.fromTo(
          text.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "<"
        );

        tl.to(text.current, { y: -50, opacity: 0, duration: 0.5 }, "+=0.2");
        tl.addLabel("splitMove");

        tl.to(
          leftContent.current,
          { width: "50%", opacity: 1, duration: 2 },
          "splitMove"
        );

        tl.fromTo(
          leftContentInner.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5 },
          "splitMove+=0.5"
        );

        tl.to(
          rightSideWrapper.current,
          { width: "50%", padding: "2rem", duration: 2 },
          "splitMove"
        );

        tl.to(
          videoInner.current,
          {
            width: "100%",
            height: "70vh",
            borderRadius: "32px",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
            duration: 2,
          },
          "splitMove"
        );

        tl.to(overlay.current, { opacity: 0, duration: 1 }, "splitMove+=1");
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(leftContent.current, {
          width: "100%",
          height: "0%",
          opacity: 0,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=200%",
            scrub: 1,
            pin: true,
          },
        });

        tl.to(videoInner.current, {
          width: "100%",
          height: "100vh",
          borderRadius: "0px",
          duration: 1,
        });

        tl.to(
          rightSideWrapper.current,
          { padding: "0px", duration: 1 },
          "<"
        );

        tl.to(
          overlay.current,
          {
            opacity: 1,
            backdropFilter: "blur(12px)",
            backgroundColor: "rgba(0,0,0,0.4)",
            duration: 1,
          },
          ">-0.5"
        );

        tl.fromTo(
          text.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "<"
        );

        tl.to(text.current, { opacity: 0, duration: 0.5 }, "+=0.2");
        tl.addLabel("mobileSplit");

        tl.to(
          rightSideWrapper.current,
          { height: "35%", width: "100%", padding: "1rem", duration: 2 },
          "mobileSplit"
        );

        tl.to(
          videoInner.current,
          { width: "100%", height: "100%", borderRadius: "20px", duration: 2 },
          "mobileSplit"
        );

        tl.to(
          leftContent.current,
          { height: "65%", width: "100%", opacity: 1, duration: 2 },
          "mobileSplit"
        );

        tl.fromTo(
          leftContentInner.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5 },
          "mobileSplit+=0.5"
        );

        tl.to(overlay.current, { opacity: 0, duration: 1 }, "mobileSplit+=1");
      });

      let raf1 = 0;
      let raf2 = 0;
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      });

      return () => {
        if (raf1) {
          cancelAnimationFrame(raf1);
        }
        if (raf2) {
          cancelAnimationFrame(raf2);
        }
        mm.revert();
      };
    },
    { scope: container, dependencies: [isMediaReady] }
  );

  return {
    container,
    rightSideWrapper,
    videoInner,
    overlay,
    text,
    leftContent,
    leftContentInner,
  };
};