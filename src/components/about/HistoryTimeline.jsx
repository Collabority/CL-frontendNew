import React, { useRef, useEffect, useState } from "react";
import historyTimelineData from "../../constants/historyTimelineData";

const HistoryTimeline = () => {
  const [visibleTiles, setVisibleTiles] = useState([]);
  const tileRefs = useRef([]);

  useEffect(() => {
    const observers = tileRefs.current.map((ref, idx) => {
      if (!ref) return null;
      return new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleTiles((prev) => {
              if (prev.includes(idx)) return prev;
              return [...prev, idx];
            });
          }
        },
        { threshold: 0.2 }
      );
    });

    tileRefs.current.forEach((ref, idx) => {
      if (ref && observers[idx]) observers[idx].observe(ref);
    });

    return () => {
      observers.forEach((observer, idx) => {
        if (observer && tileRefs.current[idx]) observer.disconnect();
      });
    };
  }, []);

  return (
    <section className="py-20 bg-[#F8F6F2]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-center mb-4 text-[#002248]">Our History</h2>
        <p className="text-center text-sm sm:text-base text-gray-400 mb-16 max-w-2xl mx-auto">
          Does any industry face a more complex audience journey and marketing sales process than B2B technology.
        </p>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-blue-100 -translate-x-1/2 z-0" />

          <div className="space-y-20">
            {historyTimelineData.map((item, idx) => (
              <div
                key={idx}
                ref={(el) => (tileRefs.current[idx] = el)}
                className={`flex flex-col md:flex-row items-center md:items-stretch relative z-10 transition-all duration-700 ease-in-out
                ${visibleTiles.includes(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                {/* Left (Even Index) */}
                {idx % 2 === 0 ? (
                  <div className="md:w-1/2 flex justify-end pr-0 md:pr-6 lg:pr-12 mb-10 md:mb-0">
                    <div className="w-full md:w-[95%] lg:w-[520px] bg-white shadow-[0_4px_24px_0_#F5F9FE] rounded-none overflow-hidden">
                      <img src={item.image} alt={item.year} className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover" />
                      <div className="p-6 sm:p-8 md:p-10">
                        <div className="text-[#008080] text-sm font-bold mb-2 tracking-wide">{item.year}</div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#002248] mb-2">{item.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="md:w-1/2 hidden md:block" />
                )}

                {/* Timeline Marker */}
                <div className="relative w-full md:w-0 flex items-center justify-center mb-6 md:mb-0">
                  <div className="flex flex-col items-center relative z-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-[#9EDAFE] bg-white flex items-center justify-center text-xl sm:text-2xl font-bold text-[#616161]">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* Right (Odd Index) */}
                {idx % 2 !== 0 ? (
                  <div className="md:w-1/2 flex justify-start pl-0 md:pl-6 lg:pl-12">
                    <div className="w-full md:w-[95%] lg:w-[520px] bg-white shadow-[0_4px_24px_0_#F5F9FE] rounded-none overflow-hidden">
                      <img src={item.image} alt={item.year} className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover" />
                      <div className="p-6 sm:p-8 md:p-10">
                        <div className="text-[#008080] text-sm font-bold mb-2 tracking-wide">{item.year}</div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#002248] mb-2">{item.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="md:w-1/2 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
