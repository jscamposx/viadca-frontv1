import { useCarousel } from "../hooks/useCarousel";
import { 
  galleryItems, 
  CARD_SIZES, 
  CAROUSEL_UI
} from "../data/carousel.data";

export default function Carousel() {
  const {
    containerRef,
    scrollRef,
    addToRefs,
    canScrollLeft,
    canScrollRight,
    scroll,
    checkScroll,
  } = useCarousel();

  return (
    <section
      ref={containerRef}
      aria-label={CAROUSEL_UI.ariaLabel}
      className="bg-background w-full min-h-[95vh] flex flex-col justify-center font-sans text-foreground py-12 md:py-0 overflow-y-visible transition-colors duration-300"
    >
      <div className="max-w-315 mx-auto ">
        <header className="mb-6 md:mb-10 flex items-end justify-between">
          <h2 className="text-[24px] leading-tight md:leading-tight font-semibold tracking-[-0.015em] md:text-[32px] text-foreground text-center md:text-left">
            {CAROUSEL_UI.title}
          </h2>

          <div className="hidden md:flex gap-3 min-w-22 justify-end" role="group" aria-label={CAROUSEL_UI.controlsLabel}>
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label={CAROUSEL_UI.controls.prevLabel}
              className={`
                w-9 h-9 rounded-full flex items-center justify-center 
                transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                bg-gray-200 hover:bg-gray-300 text-gray-900 
                dark:bg-[#333336] dark:hover:bg-[#464649] dark:text-[#f5f5f7]
              `}
            >
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" aria-hidden="true">
                <path
                  d="M8.5 1.5L2 8L8.5 14.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label={CAROUSEL_UI.controls.nextLabel}
              className={`
                w-9 h-9 rounded-full flex items-center justify-center 
                transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                bg-gray-200 hover:bg-gray-300 text-gray-900 
                dark:bg-[#333336] dark:hover:bg-[#464649] dark:text-[#f5f5f7]
              `}
            >
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" aria-hidden="true">
                <path
                  d="M1.5 1.5L8 8L1.5 14.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </header>

        <ul
          ref={scrollRef}
          onScroll={checkScroll}
          className="carousel-track py-12 flex w-full overflow-x-auto overflow-y-visible snap-x snap-proximity md:snap-mandatory gap-6 md:gap-8 scrollbar-hide touch-pan-x scroll-pl-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {galleryItems.map((item) => (
            <li
              key={item.id}
              ref={addToRefs}
              className={`flex flex-col shrink-0 snap-start ${
                CARD_SIZES[item.type] || CARD_SIZES.narrow
              } opacity-0`}
            >
              <figure className="carousel-card">
                <div className="carousel-card-media w-full h-120 md:h-170 rounded-3xl overflow-hidden bg-surface relative group cursor-pointer border border-border/10 dark:border-transparent">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    loading="lazy"
                    className={`carousel-card-image w-full h-full object-cover ${item.imgPosition}`}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 z-10 p-6">
                    <p className="font-serif text-white text-[17px] leading-snug">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </figcaption>
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}