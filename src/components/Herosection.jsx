import React, { memo, useMemo } from 'react';

const Herosection = ({ title, breadcrumb }) => {
  
  const particles = useMemo(() => 
    [...Array(15)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.5 + 0.2,
      duration: 5 + Math.random() * 5
    })), []);

  return (
    <section className="relative bg-[#002248] py-24 md:py-40 flex items-center justify-center min-h-[50vh] overflow-hidden">

      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #008080 1px, transparent 1px),
                           linear-gradient(to bottom, #008080 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* UI: Ambient Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#008080] rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#008080] rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* CONTENT: Main Typography & Navigation */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-10">
          <div className="h-[2px] w-12 bg-[#008080]"></div>
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-8 text-white tracking-tighter leading-none">
          {title}<span className="text-[#008080]">.</span>
        </h1>

        <nav className="relative inline-flex items-center" aria-label="Breadcrumb">
          <div className="text-white/60 text-xs md:text-sm font-black uppercase tracking-[0.4em]">
            {breadcrumb}
          </div>
        </nav>
      </div>

      {/* UI: Floating Particle Engine */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#008080] rounded-full animate-float will-change-transform"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: `${p.duration}s`,
              opacity: p.opacity
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(Herosection);