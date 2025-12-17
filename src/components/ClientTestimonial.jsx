import React from "react";
import { useEffect } from "react";
import instance from "../lib/axios";
import { useState } from "react";

const ClientTestimonial = ({ title1, title2 }) => {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    const getReviewData = async () => {
      try {
        const response = await instance.get("/reviews/getAll");
        const data = response.data?.data;
        setMyData(data?.reviews || []);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
        setMyData([]);
      }
    };
    getReviewData();
  }, []);

  return (
    <section className="bg-[#F8F6F3]">
      <div className="flex flex-col">
        {/* Title Section */}
        <div className="flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 px-4 md:px-8">
          <h4 className="text-[#008080] font-semibold text-xl sm:text-2xl md:text-2xl text-center">
            {title1}
          </h4>
          <h1 className="text-blue-950 font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-center mt-2">
            {title2}
          </h1>
        </div>
        {/* name , companyNamme , profilePicture , rating, reviewContent */}

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center items-start mb-12 sm:mb-16 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
          {myData &&
            myData?.map((items, idx) => (
              <div key={idx} className="w-full">
                {/* Testimonial Text Box */}
                <div className="bg-white w-full h-auto p-6 md:p-8 border-t-4 border-red-700 text-sm sm:text-base md:text-[15px]">
                  {items.reviewContent}
                  <div className="mt-2 cursor-pointer text-base md:text-lg">
                    {" ⭐️ ".repeat(items.rating)}
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex gap-3 mt-5 items-center">
                  <img
                    src={items.profilePicture}
                    alt={items.name}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full"
                  />
                  <div className="flex flex-col gap-1 sm:gap-2 md:gap-1">
                    <h4 className="font-bold text-sm sm:text-base md:text-[16px]">
                      {items.name}
                    </h4>
                    <h6 className="text-gray-500 text-xs sm:text-sm md:text-sm">
                      {items.designation}, {items.companyName}
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
