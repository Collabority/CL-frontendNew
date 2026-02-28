import React, { memo, useMemo } from 'react'

/** @BLOCK: PageHeader */
function PageHeader({ title, breadcrumb }) {
  
  const particles = useMemo(() => 
    [...Array(12)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.5 + 0.2,
      duration: `${3 + Math.random() * 4}s`,
      delay: `${Math.random() * 5}s`
    })), []);

  return (
    <header className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 md:py-32 lg:py-40 flex items-center justify-center min-h-[50vh] font-poppins overflow-hidden">
      
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #008080 1px, transparent 1px),
                           linear-gradient(to bottom, #008080 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#008080] rounded-full mix-blend-screen filter blur-[80px] md:blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#008080] rounded-full mix-blend-screen filter blur-[80px] md:blur-[100px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-8">
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#008080] to-transparent"></div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight">
          <span className="relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#008080]"></span>
          </span>
        </h1>

        <nav aria-label="Breadcrumb" className="relative inline-block">
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl font-medium tracking-wide">
            {breadcrumb}
          </p>
          <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#008080] to-transparent"></div>
        </nav>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#008080]"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#008080]"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#008080] rounded-full"
            style={{
              left: p.left,
              top: p.top,
              opacity: p.opacity,
              animation: `float ${p.duration} ease-in-out infinite`,
              animationDelay: p.delay,
              willChange: 'transform'
            }}
          />
        ))}
      </div>
    </header>
  );
}

export default memo(PageHeader);