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
    <div
      ref={containerRef}
      aria-label={CAROUSEL_UI.ariaLabel}
      className="bg-background w-full font-sans text-foreground py-16 md:py-24 overflow-hidden transition-colors duration-300"
    >
      <div className="w-full mx-auto mb-8 md:mb-12 px-6 md:px-12 flex items-end justify-between gap-4" style={{ maxWidth: "1260px" }}>
        <h2 className="text-[24px] leading-tight md:leading-tight font-semibold tracking-[-0.015em] md:text-[32px]">
            {CAROUSEL_UI.title}
        </h2>

        <div className="hidden md:flex gap-3" role="group" aria-label={CAROUSEL_UI.controlsLabel}>
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label={CAROUSEL_UI.controls.prevLabel}
            className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center cursor-pointer bg-surface hover:bg-foreground/10 border border-border text-foreground transition-all duration-200 disabled:opacity-30 disabled:cursor-default"
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" aria-hidden="true">
              <path d="M8.5 1.5L2 8L8.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label={CAROUSEL_UI.controls.nextLabel}
            className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center cursor-pointer bg-surface hover:bg-foreground/10 border border-border text-foreground transition-all duration-200 disabled:opacity-30 disabled:cursor-default"
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" aria-hidden="true">
              <path d="M1.5 1.5L8 8L1.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory gap-4 md:gap-8 pb-4 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div
          className="shrink-0 snap-start w-6 md:w-auto"
          style={{ width: "max(0px, calc((100% - 1260px) / 2 - 8px))" }}
        />

        {galleryItems.slice(0, 4).map((item) => (
          <div
            key={item.id}
            ref={(el) => addToRefs(el)}
            className={`flex flex-col shrink-0 snap-start ${
              CARD_SIZES[item.type] || CARD_SIZES.narrow
            }`}
          >
              <div className="w-full h-120 md:h-170 rounded-3xl md:rounded-4xl overflow-hidden bg-surface relative group cursor-pointer border border-transparent md:border-foreground/15">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${item.imgPosition}`}
                />
              </div>

            <div className="max-w-190 mt-6 mx-3.75 mb-0">
              <p className="text-[14px] md:text-[17px] leading-snug tracking-[-0.022em]">
                <span className="font-semibold text-foreground">{item.title}</span>{" "}
                <span className="font-normal text-muted">{item.description}</span>
              </p>
            </div>
          </div>
        ))}

        <div
          className="shrink-0 w-6 md:w-auto"
          style={{ width: "max(0px, calc((100% - 1260px) / 2 - 8px))" }}
        />
      </div>
    </div>
  );
}