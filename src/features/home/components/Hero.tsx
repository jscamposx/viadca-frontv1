import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { useHeroAnimation } from "../hooks/useHeroAnimation";
import { HERO_CONTENT } from "../data/hero.data";

const Hero = () => {
  const [activeTab, setActiveTab] = useState<string>("mexico");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const {
    container,
    rightSideWrapper,
    videoInner,
    overlay,
    text,
    leftContent,
    leftContentInner,
  } = useHeroAnimation();
  const currentContent = HERO_CONTENT[activeTab];

  const handleTabChange = (key: string) => {
    if (key === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(key);
    }, 300);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [activeTab]);

  return (
    <div className="bg-background w-full overflow-x-hidden pt-24 md:pt-32 transition-colors duration-300">
      <section className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-6 relative pb-12 md:pb-20">
        <div className="w-full flex justify-center mb-4 md:mb-6">
          <span className="text-sm md:text-2xl font-bold uppercase text-brand tracking-wider text-center block">
            Agencia de viajes
          </span>
        </div>

        <div className="w-full max-w-6xl mb-8 md:mb-12">
          <h1
            className={`text-4xl sm:text-6xl md:text-[90px] leading-[1.1] md:leading-none font-serif text-center text-foreground font-medium tracking-tight transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            Vive experiencias únicas <br className="hidden md:block" /> y viaja
            tranquilo con <span className="text-brand">Viadca</span>
          </h1>
        </div>

        <div className="flex flex-row items-center gap-3 w-full sm:w-auto px-4 sm:px-0">
          <button
            type="button"
            className="group w-full sm:w-auto inline-flex items-center justify-center h-12 md:h-14 px-8 rounded-full border-2 border-brand bg-transparent text-brand font-bold text-sm md:text-base cursor-pointer transition-all duration-200 hover:bg-brand/10"
          >
            <span className="block transition-transform duration-300 group-hover:scale-95">
              <span className="md:hidden">WhatsApp</span>
              <span className="hidden md:inline">Consultar en WhatsApp</span>
            </span>
          </button>

          <button
            type="button"
            className="group w-full sm:w-auto inline-flex items-center justify-center h-12 md:h-14 px-8 rounded-full border-2 border-brand bg-brand text-brand-foreground font-bold text-sm md:text-base cursor-pointer transition-all duration-200 hover:brightness-110 shadow-[0_0_20px_rgba(5,169,236,0.3)]"
          >
            <span className="block transition-transform duration-300 group-hover:scale-95">
              <span className="md:hidden">Llamar</span>
              <span className="hidden md:inline">Llamar ahora</span>
            </span>
          </button>
        </div>
      </section>

      <div
        ref={container}
        className="w-full h-dvh flex flex-col lg:flex-row items-stretch overflow-hidden relative bg-background"
      >
        <div
          ref={leftContent}
          className="bg-background z-30 flex flex-col justify-start lg:justify-center relative border-r border-surface/50 order-2 lg:order-1 
          overflow-y-auto lg:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div
            ref={leftContentInner}
            className="w-full max-w-xl mx-auto px-6 lg:px-12 flex flex-col justify-start lg:justify-center py-6 pb-24 lg:py-0 lg:pb-0 lg:h-auto"
          >
            <div className="flex overflow-x-auto pb-2 lg:pb-0 gap-2 mb-6 lg:mb-8 mask-gradient -mx-6 px-6 lg:mx-0 lg:px-0 lg:flex-wrap items-center min-h-14 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {Object.keys(HERO_CONTENT).map((key) => (
                <button
                  key={key}
                  onClick={() => handleTabChange(key)}
                  className={`inline-flex items-center justify-center h-10 px-4 rounded-full border text-xs sm:text-sm font-semibold leading-none transition-all duration-200 cursor-pointer hover:shadow-sm whitespace-nowrap shrink-0
                    ${
                      activeTab === key
                        ? "bg-foreground text-background border-foreground"
                        : "bg-transparent text-muted border-surface hover:border-brand hover:text-brand"
                    }`}
                >
                  {HERO_CONTENT[key].label}
                </button>
              ))}
            </div>

            <div className="w-full h-px bg-surface mb-6 lg:mb-8 hidden lg:block"></div>

            <div
              className={`space-y-4 lg:space-y-6 transition-opacity duration-300 ${
                isTransitioning ? "opacity-50" : "opacity-100"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground font-serif leading-tight">
                {currentContent.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted leading-relaxed max-w-md lg:max-w-none">
                {currentContent.desc}
              </p>

              <div>
                <p className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wide mb-3">
                  Te ayudamos con:
                </p>
                <ul className="space-y-2.5">
                  {currentContent.features.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm sm:text-base text-muted font-medium"
                    >
                      <div className="mt-1 mr-3 p-0.5 bg-brand rounded-full shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 lg:pt-2">
                <a
                  href="/paquetes"
                  className="inline-flex items-center text-base lg:text-lg font-bold text-brand hover:text-foreground hover:underline group transition-all"
                >
                  Ver paquetes
                  <ArrowUpRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={rightSideWrapper}
          className="grow h-full flex items-center justify-center relative z-20 order-1 lg:order-2 p-4 lg:p-0"
        >
          <div
            ref={videoInner}
            className="relative overflow-hidden shadow-2xl bg-surface w-full h-full lg:w-[85%] lg:h-[80vh] rounded-2xl lg:rounded-3xl border border-surface/10"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              onCanPlay={() => setIsTransitioning(false)}
              className={`w-full h-full object-cover absolute inset-0 z-0 transition-opacity duration-500 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              {currentContent.videoWebm && (
                <source src={currentContent.videoWebm} type="video/webm" />
              )}
              {currentContent.videoMp4 && (
                <source src={currentContent.videoMp4} type="video/mp4" />
              )}
            </video>

            <div
              ref={overlay}
              className="absolute inset-0 z-10 pointer-events-none opacity-0 bg-black/40"
              style={{ backdropFilter: "blur(0px)" }}
            ></div>

            <div
              ref={text}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center pointer-events-none opacity-0"
            >
              <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight drop-shadow-lg font-serif">
                Planea tu siguiente viaje <br /> con Viadca.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;