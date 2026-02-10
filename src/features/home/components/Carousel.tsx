import { useCarousel } from "../hooks/useCarousel";
import { 
  galleryItems, 
  CARD_SIZES, 
  CONTENT_MAX_WIDTH 
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
      aria-labelledby="carousel-title"
      className="bg-background w-full min-h-[95vh] flex flex-col justify-center font-sans text-foreground py-12 md:py-0 overflow-hidden transition-colors duration-300"
    >
      <div
        className="w-full mx-auto mb-6 md:mb-10 px-6 flex items-end justify-between"
        style={{ maxWidth: `${CONTENT_MAX_WIDTH}px` }}
      >
        <h2 
          id="carousel-title"
          className="text-[24px] leading-tight md:leading-tight font-semibold tracking-[-0.015em] md:text-[32px] text-foreground"
        >
          Fotos pro hasta el último pixel.
        </h2>

        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Ver anteriores"
            className={`
              w-9 h-9 rounded-full flex items-center justify-center 
              transition-all duration-200 disabled:opacity-30 disabled:cursor-default
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
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Ver siguientes"
            className={`
              w-9 h-9 rounded-full flex items-center justify-center 
              transition-all duration-200 disabled:opacity-30 disabled:cursor-default
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
      </div>

    
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory gap-4 md:gap-8 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div
          aria-hidden="true"
          className="shrink-0 snap-center w-0 md:w-auto"
          style={{
            width: `max(0px, calc((100% - ${CONTENT_MAX_WIDTH}px) / 2 - 8px))`,
          }}
        />

        {galleryItems.map((item) => (
          <figure
            key={item.id}
            ref={addToRefs}
            className={`flex flex-col shrink-0 snap-center ${
              CARD_SIZES[item.type] || CARD_SIZES.narrow
            }`}
          >
            <div className="w-full h-120 md:h-170 rounded-3xl md:rounded-4xl overflow-hidden bg-surface relative group cursor-pointer border border-border/10 dark:border-white/10 shadow-sm">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <img
                src={item.imgSrc}
                alt={item.title}
                loading="lazy"
                className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${item.imgPosition}`}
              />
            </div>

            <figcaption className="max-w-190 mt-6 mx-3.75 mb-0">
              <p className="text-[14px] md:text-[17px] leading-snug tracking-[-0.022em]">
                <span className="font-semibold text-foreground">
                  {item.title}
                </span>{" "}
                <span className="font-normal text-muted">
                  {item.description}
                </span>
              </p>
            </figcaption>
          </figure>
        ))}

        <div
          aria-hidden="true"
          className="shrink-0 w-0 md:w-auto"
          style={{
            width: `max(0px, calc((100% - ${CONTENT_MAX_WIDTH}px) / 2 - 8px))`,
          }}
        />
      </div>
    </section>
  );
}