import { useTravelInsights } from '../hooks/useTravelInsights';
import { TRAVEL_INSIGHTS_DATA, TRAVEL_INSIGHTS_UI } from '../data/travelInsights.data';

const TravelInsights = () => {
  const { activeId, setActiveId } = useTravelInsights();

  return (
    <section 
      className="bg-background w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 font-sans transition-colors duration-300"
      aria-labelledby="insights-heading"
    >
      <div className="max-w-315 mx-auto">
        <header className="mb-12 lg:mb-24 max-w-4xl">
          <h2 
            id="insights-heading"
            className="text-4xl md:text-[56px] lg:text-[64px] font-serif font-medium text-foreground tracking-tight leading-[1.05]"
          >
            {TRAVEL_INSIGHTS_UI.heading}
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 xl:gap-x-24 items-start">
          <div className="w-full lg:col-span-5 flex flex-col pt-0 lg:pt-4">
            {TRAVEL_INSIGHTS_DATA.map((item) => {
              const isOpen = activeId === item.id;

              return (
                <div 
                  key={item.id} 
                  className="border-t border-gray-200 dark:border-white/10 first:border-t-0 md:first:border-t"
                >
                  <button
                    onClick={() => setActiveId(item.id)}
                    className="w-full py-6 md:py-8 flex items-start justify-between group text-left focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${item.id}`}
                    id={`tab-${item.id}`}
                  >
                    <span 
                      className={`text-xl md:text-[19px] font-bold pr-6 transition-colors ${
                        isOpen 
                          ? 'text-foreground' 
                          : 'text-muted hover:text-foreground'
                      }`}
                    >
                      {item.title}
                    </span>
                    
                    <div className="relative w-3.5 h-3.5 shrink-0 mt-2 md:mt-1.5" aria-hidden="true">
                      <span className="absolute top-1/2 left-0 w-full h-0.5 bg-foreground -translate-y-1/2" />
                      <span 
                        className={`absolute top-0 left-1/2 w-0.5 h-full bg-foreground -translate-x-1/2 transition-transform duration-300 ease-out origin-center ${
                          isOpen ? 'scale-y-0' : 'scale-y-100'
                        }`} 
                      />
                    </div>
                  </button>

                  <div 
                    id={`panel-${item.id}`}
                    aria-labelledby={`tab-${item.id}`}
                    hidden={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                      isOpen ? 'grid-rows-[1fr] pb-8' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[17px] text-muted leading-relaxed max-w-[90%] mb-6">
                        {item.description}
                      </p>

                      <figure className="block lg:hidden w-full m-0">
                          <div className="bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full max-h-75 object-cover drop-shadow-sm rounded-2xl"
                              loading="lazy"
                            />
                          </div>
                      </figure>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <figure className="hidden lg:block lg:col-span-7 sticky top-12 m-0">
            <div 
              className="bg-gray-100 dark:bg-white/5 rounded-4xl w-full max-w-216 relative overflow-hidden flex items-center justify-center p-12 mx-auto lg:mx-0 transition-colors duration-300"
              style={{ aspectRatio: '864 / 692' }}
            >
               {TRAVEL_INSIGHTS_DATA.map((item) => (
                 <div
                   key={item.id}
                   className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out ${
                     activeId === item.id 
                       ? 'opacity-100 translate-y-0' 
                       : 'opacity-0 translate-y-4'
                   }`}
                   aria-hidden={activeId !== item.id}
                 >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover drop-shadow-sm"
                      loading="lazy"
                    />
                 </div>
               ))}
            </div>
          </figure>

        </div>
      </div>
    </section>
  );
};

export default TravelInsights;