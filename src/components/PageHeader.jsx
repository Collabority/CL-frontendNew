import React from 'react'

function PageHeader({ title, breadcrumb }) {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 md:py-32 lg:py-45 flex items-center justify-center min-h-[50vh] font-poppins overflow-hidden">

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #008080 1px, transparent 1px),
                           linear-gradient(to bottom, #008080 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#008080] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#008080] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center">

          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#008080] to-transparent"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white">
            <span className="relative inline-block">
              {title}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#008080] via-[#008080] to-[#008080]"></span>
            </span>
          </h1>

          <div className="relative inline-block">
            <h2 className="text-gray-300 text-lg sm:text-xl md:text-2xl font-medium tracking-wide">
              {breadcrumb}
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#008080] to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#008080] animate-pulse"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#008080] animate-pulse animation-delay-1000"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#008080] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default PageHeader 