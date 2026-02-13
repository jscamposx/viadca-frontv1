import { useLogosCarousel } from "../hooks/useLogosCarousel";
import { LOGOS_UI, type LogoItem } from "../data/logos.data";

interface LogosProps {
  logos?: LogoItem[];
}

const Logos = ({ logos }: LogosProps) => {
  const {
    sectionRef,
    containerRef,
    trackRef,
    firstSeqRef,
    sequences,
    setPaused,
  } = useLogosCarousel(logos);

  const handleMouseEnter = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      setPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      setPaused(false);
    }
  };

  return (
    <section
      id="socios"
      ref={sectionRef}
      aria-label={LOGOS_UI.sectionLabel}
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative scroll-mt-32 bg-background overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-315 mx-auto">
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative overflow-hidden"
        >
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 lg:w-32 bg-linear-to-r from-background to-transparent z-10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 lg:w-32 bg-linear-to-l from-background to-transparent z-10"
            aria-hidden="true"
          />

          <div
            ref={trackRef}
            className="flex w-max items-center py-6 px-2 sm:px-4 will-change-transform select-none"
            style={{ transform: "translate3d(0,0,0)" }}
          >
            {sequences.map((seq, sIdx) => (
              <ul
                key={`seq-${sIdx}`}
                ref={sIdx === 0 ? firstSeqRef : undefined}
                className="flex w-max shrink-0 items-center"
              >
                {seq.map((logo, idx) => (
                  <li
                    key={`logo-${sIdx}-${idx}`}
                    className="shrink-0 pr-16 sm:pr-20 lg:pr-24"
                  >
                    <div className="flex items-center justify-center">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width || undefined}
                        height={logo.height || undefined}
                        className={`${
                          logo.h || "h-16"
                        } w-auto opacity-100 hover:scale-105`}
                        style={{
                          filter: "var(--logo-filter)",
                          transition: "opacity 0.3s ease-linear, transform 0.3s ease-linear",
                        }}
                        decoding="async"
                        loading="lazy"
                        draggable="false"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;