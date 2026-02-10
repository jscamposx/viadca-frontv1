import { useState } from "react";
import { Plus, X } from "lucide-react";
import { useFeaturesListAnimation, useFeatureModal } from "../hooks/useFeatures";
import { FEATURES_DATA, FEATURES_UI } from "../data/features.data";
import type { Feature } from "../data/features.data";

interface FeatureModalProps {
  feature: Feature;
  onClose: () => void;
}

const FeatureModal = ({ feature, onClose }: FeatureModalProps) => {
  const { containerRef, backdropRef, modalRef, handleClose } = useFeatureModal(onClose);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-100 flex items-end md:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={backdropRef}
        onClick={handleClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px] cursor-pointer"
        aria-hidden="true"
      />

      <article
        ref={modalRef}
        className="relative bg-background w-full h-[90vh] md:w-[96%] md:max-w-250 md:h-[92vh] md:rounded-xl shadow-2xl flex flex-col overflow-hidden will-change-transform rounded-t-2xl"
      >
        <header className="flex justify-between items-start pt-10 px-8 md:pt-14 md:px-16 pb-8 bg-background shrink-0 border-b border-gray-200 dark:border-white/20">
          <h2 
            id="modal-title"
            className="text-3xl md:text-5xl font-bold text-foreground tracking-tight max-w-4xl font-serif"
          >
            {feature.title}
          </h2>
          <button
            onClick={handleClose}
            className="p-3 hover:bg-surface rounded-full transition-colors -mr-2 -mt-2 text-foreground"
            aria-label={FEATURES_UI.modalCloseLabel}
          >
            <X className="w-8 h-8" aria-hidden="true" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-8 md:px-16 pb-16 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 mt-8">
            {feature.modalDetails.map((item, idx) => (
              <section
                key={idx}
                className="flex flex-col gap-4 pt-8 border-t border-gray-200 dark:border-white/20"
              >
                <h3 className="text-lg font-bold text-foreground leading-snug">
                  {item.headline}
                </h3>
                <p className="text-[17px] text-muted leading-relaxed font-light">
                  {item.text}
                </p>
              </section>
            ))}
          </div>
          <div className="h-20" />
        </div>
      </article>
    </div>
  );
};

const Features = () => {
  const { containerRef } = useFeaturesListAnimation();
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  return (
    <>
      <section
        ref={containerRef}
        className="bg-background w-full px-6 md:px-12 py-24 transition-colors duration-300"
        aria-labelledby="features-heading"
      >
        <div className="max-w-315 mx-auto">
          <header className="mb-16">
            <h2 
              id="features-heading"
              className="mx-auto max-w-300 text-center text-4xl md:text-[64px] leading-[1.05] tracking-[-0.02em] text-foreground font-serif"
            >
              {FEATURES_UI.sectionTitle}
            </h2>
          </header>

          <div className="mt-16 border-t border-gray-200 dark:border-white/20" role="separator" />

          <div className="flex flex-col">
            {FEATURES_DATA.map((feature, index) => (
              <article key={feature.id} className="feature-card group">
                <div
                  className={`grid grid-cols-1 md:grid-cols-12 items-start gap-y-8 md:gap-x-20 py-14 ${
                    index !== 0 ? "border-t border-gray-200 dark:border-white/20" : ""
                  }`}
                >
                  <div className="col-span-1 md:col-span-5 w-full">
                    <button
                      className="overflow-hidden rounded-2xl cursor-pointer bg-surface aspect-video w-full max-w-130 border-0 p-0 block text-left"
                      onClick={() => setSelectedFeature(feature)}
                      aria-label={FEATURES_UI.detailAriaLabel(feature.title)}
                    >
                      <img
                        src={feature.image}
                        alt={feature.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                    </button>
                  </div>

                  <div className="col-span-1 md:col-span-7 flex flex-col justify-start">
                    <h3 className="text-2xl font-semibold text-foreground mb-0 leading-tight">
                      {feature.title}
                    </h3>

                    <p className="mt-4 max-w-130 text-base text-muted leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="mt-6">
                      <button
                        onClick={() => setSelectedFeature(feature)}
                        className="inline-flex items-center text-base font-bold text-brand hover:text-foreground hover:underline decoration-2 underline-offset-4 transition-all"
                        aria-label={FEATURES_UI.moreInfoAriaLabel(feature.title)}
                      >
                        {FEATURES_UI.ctaLabel}{" "}
                        <Plus className="w-4 h-4 ml-1 stroke-3" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedFeature && (
        <FeatureModal
          feature={selectedFeature}
          onClose={() => setSelectedFeature(null)}
        />
      )}
    </>
  );
};

export default Features;