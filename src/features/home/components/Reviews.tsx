import { Star, Quote } from "lucide-react";
import { useReviews } from "../hooks/useReviews";
import { REVIEWS_UI } from "../data/reviews.data";

const Reviews = () => {
  const { containerRef, trackRef, reviews, scroll } = useReviews();

  const renderStars = (score: number) => {
    const rounded = Math.round(score);
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={`star-${i}`}
        className={`w-4 h-4 ${
          i < rounded 
            ? "fill-foreground text-foreground" 
            : "text-muted/30"
        }`}
        aria-hidden="true"
      />
    ));
  };

  const initials = (name: string = "") => {
    const parts = name.trim().split(" ");
    const first = parts[0]?.[0] || "";
    const second = parts[1]?.[0] || "";
    return `${first}${second}`.toUpperCase();
  };

  return (
    <section
      ref={containerRef}
      className="bg-background w-full px-6 md:px-12 py-24 transition-colors duration-300"
      aria-labelledby="reviews-heading"
    >
      <style>{`
        .review-track::-webkit-scrollbar { display: none; }
        .review-track { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
      
      <div className="max-w-315 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <header className="lg:col-span-4 flex flex-col gap-8">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/80">
              {REVIEWS_UI.eyebrow}
            </p>
            <h2
              id="reviews-heading"
              className="text-4xl md:text-[56px] leading-[1.05] tracking-tight font-serif font-medium text-foreground"
            >
              {REVIEWS_UI.heading}
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-xl">
              {REVIEWS_UI.description}
            </p>
          </div>
        </header>

        <div className="lg:col-span-8 relative">
          
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <p className="text-sm text-muted">{REVIEWS_UI.recentLabel}</p>
            <div className="hidden md:flex gap-3">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-foreground/20 bg-background text-foreground hover:bg-foreground hover:text-background hover:shadow-sm transition flex items-center justify-center"
                aria-label="Ver anteriores"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-foreground/20 bg-background text-foreground hover:bg-foreground hover:text-background hover:shadow-sm transition flex items-center justify-center"
                aria-label="Ver siguientes"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            className="review-track flex gap-6 lg:gap-8 overflow-x-auto pb-4 md:pb-6 snap-x snap-mandatory scroll-smooth"
          >
            {reviews.map((review) => (
              <article
                key={review.id}
                className="review-card flex-none w-[88vw] sm:w-90 lg:w-105 snap-start relative rounded-3xl border border-border/10 bg-surface shadow-[0_25px_80px_-40px_rgba(0,0,0,0.2)] dark:shadow-none dark:border-white/10 p-7 md:p-8 flex flex-col gap-6"
              >
                <Quote
                  className="w-6 h-6 fill-foreground text-foreground absolute top-6 right-6 opacity-10"
                  aria-hidden="true"
                />

                <div className="flex items-center gap-4">
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-foreground/5 text-foreground flex items-center justify-center text-sm font-semibold">
                      {initials(review.name)}
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-base font-semibold text-foreground leading-tight">
                      {review.name}
                    </p>
                    {review.location && (
                      <p className="text-sm text-muted leading-snug mt-0.5">
                        {review.location}
                      </p>
                    )}
                  </div>
                </div>

                <blockquote className="text-[17px] text-foreground/90 leading-relaxed flex-1 m-0">
                  {review.quote}
                </blockquote>

                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <span
                    className="flex items-center gap-1"
                    role="img"
                    aria-label={REVIEWS_UI.ratingLabel(review.score)}
                  >
                    {renderStars(review.score)}
                  </span>
                  <span className="ml-1 text-foreground">{review.score}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;