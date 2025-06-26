import React from "react";

const ClientTestimonial = ({title1, title2, data}) => {
  return (
    <section className="bg-[#F8F6F3]">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center py-12 sm:py-16 px-4">
          <h4 className="text-[#008080] font-semibold text-xl sm:text-2xl text-center">
            {title1}
          </h4>
          <h1 className="text-blue-950 font-extrabold text-4xl sm:text-5xl lg:text-6xl text-center">
            {title2}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-start mb-12 sm:mb-16 px-4 sm:px-6 max-w-7xl mx-auto">
          {data.map((items, idx) => (
            <div key={idx} className="w-full">
              <div
                className={`bg-white w-full h-auto p-8 border-t-4 border-red-700 text-sm sm:text-base`}
              >
                {items.text}
                <div className="mt-2 cursor-pointer">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</div>
              </div>
              <div className="flex gap-3 mt-5">
                <img
                  src={items.img}
                  alt={items.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col gap-1 sm:gap-3">
                  <h4 className="font-bold text-sm sm:text-base">
                    {items.name}
                  </h4>
                  <h6 className="text-gray-500 text-xs sm:text-sm">
                    {items.post}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonial;
