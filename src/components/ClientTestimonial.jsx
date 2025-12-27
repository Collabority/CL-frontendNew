import React, { useEffect, useState } from "react";
import instance from "../lib/instance";

const ClientTestimonial = ({ title1, title2 }) => {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    const getReviewData = async () => {
      try {
        const response = await instance.get("/reviews/getAll"); // Use .get explicitly
        const data = response.data?.data;
        
        // Optional: Filter only Published reviews if the API returns everything
        const reviews = data?.reviews || [];
        const publishedReviews = reviews.filter(r => r.status === "Published");
        
        // If you want to show all, just use 'reviews'
        setMyData(publishedReviews.length > 0 ? publishedReviews : reviews);
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

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center items-stretch mb-12 sm:mb-16 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
          {myData && myData.length > 0 ? (
            myData.map((items, idx) => (
              // Wrapper: h-full ensures the card takes full height of the grid row
              <div key={idx} className="w-full h-full flex flex-col">
                
                {/* Testimonial Text Box */}
                {/* flex-grow pushes the author info down so they align across cards */}
                <div className="bg-white w-full p-6 md:p-8 border-t-4 border-red-700 text-sm sm:text-base md:text-[15px] shadow-sm flex flex-col flex-grow relative">
                  
                  {/* Review Content with overflow protection */}
                  <p className="text-gray-700 leading-relaxed break-words whitespace-pre-wrap flex-grow">
                    {items.reviewContent}
                  </p>

                  {/* Rating Stars */}
                  <div className="mt-4 text-yellow-500 text-lg tracking-wide">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={i < items.rating ? "text-yellow-500" : "text-gray-300"}>
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Small decorative arrow at the bottom of the white box */}
                  <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white transform rotate-45 border-b border-r border-gray-100"></div>
                </div>

                {/* Author Info */}
                <div className="flex gap-4 mt-5 items-center px-2">
                  <img
                    src={items.profilePicture || "https://placehold.co/100"}
                    alt={items.name}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shadow-sm bg-gray-200"
                  />
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-[16px] leading-tight">
                      {items.name}
                    </h4>
                    <h6 className="text-[#008080] text-xs sm:text-sm md:text-sm font-medium mt-1">
                      {items.designation}{items.companyName ? `, ${items.companyName}` : ""}
                    </h6>
                  </div>
                </div>
              </div>
            ))
          ) : (
             // Fallback if no reviews
             <div className="col-span-full text-center text-gray-500 py-10">
               No reviews available at the moment.
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonial;