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
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-6xl font-extrabold text-center mb-4 text-[#002248]">Our History</h2>
        <p className="text-center text-sm text-gray-400 mb-16 max-w-2xl mx-auto">
          Does any industry face a more complex audience journey and marketing sales process than B2B technology.
        </p>
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-blue-100 -translate-x-1/2 z-0" />
          <div className="space-y-24">
            {historyTimelineData.map((item, idx) => (
              <div
                key={idx}
                ref={el => tileRefs.current[idx] = el}
                className={`flex flex-col md:flex-row items-stretch relative z-10 mb-16 transition-all duration-700 ease-in-out
                  ${visibleTiles.includes(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                {/* Left tile (even rows) */}
                {idx % 2 === 0 ? (
                  <div className="md:w-1/2 flex flex-col items-end pr-12 justify-center">
                    <div className="bg-white shadow-[0_4px_24px_0_#F5F9FE] w-[520px] rounded-none overflow-hidden">
                      <img src={item.image} alt={item.year} className="w-full h-[320px] object-cover" />
                      <div className="p-10">
                        <div className="text-blue-600 text-sm font-bold mb-2 tracking-wide">{item.year}</div>
                        <div className="text-2xl font-bold text-[#002248] leading-tight tracking-wide">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="md:w-1/2" />
                )}
                {/* Center: vertical line, number circle, trailing line */}
                <div className="relative flex flex-col items-center md:w-0 w-full">
                  {/* Vertical line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-blue-100 z-0" style={{ minHeight: '100%' }} />
                  {/* Number circle and trailing line */}
                  <div className="flex flex-col items-center justify-center h-full relative z-10">
                    <div className="flex items-center">
                      {/* Trailing line (left for even, right for odd) */}
                      {idx % 2 === 0 && (
                        <div style={{ width: '0.5px', height: '32px', backgroundColor: '#E3EEFE' }} />
                      )}
                      {/* Number circle */}
                      <div className="w-16 h-16 rounded-full border-4" style={{ borderColor: '#9EDAFE', backgroundColor: '#fff' }}>
                        <div className="flex items-center justify-center h-full text-2xl font-bold tracking-wide" style={{ color: '#616161' }}>
                          {String(idx + 1).padStart(2, '0')}
                        </div>
                      </div>
                      {/* Trailing line (right for odd, left for even) */}
                      {idx % 2 !== 0 && (
                        <div style={{ width: '0.5px', height: '32px', backgroundColor: '#E3EEFE' }} />
                      )}
                    </div>
                  </div>
                </div>
                {/* Right tile (odd rows) */}
                {idx % 2 !== 0 ? (
                  <div className="md:w-1/2 flex flex-col items-start pl-12 justify-center">
                    <div className="bg-white shadow-[0_4px_24px_0_#F5F9FE] w-[520px] rounded-none overflow-hidden">
                      <img src={item.image} alt={item.year} className="w-full h-[320px] object-cover" />
                      <div className="p-10">
                        <div className="text-blue-600 text-sm font-bold mb-2 tracking-wide">{item.year}</div>
                        <div className="text-2xl font-bold text-[#002248] leading-tight tracking-wide">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="md:w-1/2" />
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