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
    <div className="bg-white w-full overflow-x-hidden pt-24 md:pt-32">
      <section className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-6 relative pb-12 md:pb-20">
        <div className="w-full flex justify-center mb-4 md:mb-6">
          <span className="text-sm md:text-2xl font-bold uppercase text-gray-900 tracking-wider text-center block">
            Agencia de viajes
          </span>
        </div>

        <div className="w-full max-w-4xl mt-2 mb-8 md:mb-12">
          <h1
            className={`text-4xl sm:text-6xl md:text-[90px] leading-[1.1] md:leading-none font-serif text-center text-gray-900 font-medium tracking-tight transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            Vive experiencias únicas <br className="hidden md:block" /> y viaja
            tranquilo con Viadca
          </h1>
        </div>

        <div className="flex flex-row flex-wrap items-center gap-2 justify-center px-2 sm:px-0 w-full max-w-full">
          <button
            type="button"
            className="group inline-flex items-center justify-center min-h-11.5 sm:min-h-12 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full border-2 border-black bg-white text-black font-semibold text-xs sm:text-sm md:text-base leading-tight cursor-pointer transition-colors duration-200 hover:bg-gray-50 whitespace-nowrap"
          >
            <span className="block transition-transform duration-300 group-hover:scale-[0.952]">
              Consultar en WhatsApp
            </span>
          </button>
          <button
            type="button"
            className="group inline-flex items-center justify-center min-h-11.5 sm:min-h-12 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full border-2 border-black bg-black text-white font-semibold text-xs sm:text-sm md:text-base leading-tight cursor-pointer transition-colors duration-200 hover:bg-gray-800 whitespace-nowrap"
          >
            <span className="block transition-transform duration-300 group-hover:scale-[0.952]">
              Llamar ahora
            </span>
          </button>
        </div>
      </section>

      <div
        ref={container}
        className="w-full h-dvh flex flex-col lg:flex-row items-stretch overflow-hidden relative bg-white"
      >
        <div
          ref={leftContent}
          className="bg-white z-30 flex flex-col justify-start lg:justify-center relative border-r border-gray-100 order-2 lg:order-1 
          overflow-y-auto lg:overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div
            ref={leftContentInner}
            className="w-full max-w-xl mx-auto px-6 lg:px-12 flex flex-col justify-start lg:justify-center min-h-full py-6 pb-24 lg:py-0"
          >
            <div className="flex overflow-x-auto pb-2 lg:pb-0 gap-2 mb-6 lg:mb-8 mask-gradient -mx-6 px-6 lg:mx-0 lg:px-0 items-center min-h-14 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {Object.keys(HERO_CONTENT).map((key) => (
                <button
                  key={key}
                  onClick={() => handleTabChange(key)}
                  className={`inline-flex items-center justify-center h-10 px-2 rounded-full border text-xs sm:text-sm  sm:px-4 font-semibold leading-none transition-all duration-200 cursor-pointer hover:shadow-sm whitespace-nowrap shrink-0
                    ${
                      activeTab === key
                        ? "bg-black text-white border-black"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                    }`}
                >
                  {HERO_CONTENT[key].label}
                </button>
              ))}
            </div>

            <div className="w-full h-px bg-gray-200 mb-6 lg:mb-8 hidden lg:block"></div>

            <div
              className={`space-y-4 lg:space-y-6 transition-opacity duration-300 ${
                isTransitioning ? "opacity-50" : "opacity-100"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 font-serif leading-tight">
                {currentContent.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-md lg:max-w-none">
                {currentContent.desc}
              </p>

              <div>
                <p className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                  Te ayudamos con:
                </p>
                <ul className="space-y-2.5">
                  {currentContent.features.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm sm:text-base text-gray-700 font-medium"
                    >
                      <div className="mt-1 mr-3 p-0.5 bg-black rounded-full shrink-0">
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
                  className="inline-flex items-center text-base lg:text-lg font-bold text-black hover:underline group transition-all"
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
            className="relative overflow-hidden shadow-2xl bg-black w-full h-full lg:w-[85%] lg:h-[80vh] rounded-2xl lg:rounded-3xl"
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
              className="absolute inset-0 z-10 pointer-events-none opacity-0"
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
