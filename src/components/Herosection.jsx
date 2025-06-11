import React from 'react'

function Herosection({ title, breadcrumb }) {
  return (
    <div className="bg-primary py-24 md:py-32 lg:py-48 flex items-center justify-center min-h-[50vh] font-poppins">
      <div className="text-center px-4 pt-14">
        <h1 className="text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2">
          {title}
        </h1>
        <h2 className="text-gray-500 text-lg sm:text-xl md:text-2xl mt-2 md:mt-3 font-bold">
          {breadcrumb}
        </h2>
      </div>
    </div>
  )
}

export default Herosection
