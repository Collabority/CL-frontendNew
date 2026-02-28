import React, { useEffect, useState, memo } from "react";

const API_BASE_URL = "https://cl-adminpanelbackend.onrender.com";
const CACHE_KEY = "client_testimonials";
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

const fetchReviews = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/reviews/getAll`);
    if (!response.ok) throw new Error("Network response was not ok");
    const result = await response.json();
    const reviews = result?.data?.reviews || [];
    return reviews.filter(r => r.status === "Published");
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    return [];
  }
};

const TestimonialSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="animate-pulse flex flex-col h-full">
        <div className="bg-white p-8 border-t-4 border-gray-200 shadow-sm flex-grow">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="mt-4 flex gap-1">
            {[...Array(5)].map((_, j) => (
              <div key={j} className="w-4 h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-6 items-center px-2">
          <div className="w-14 h-14 bg-gray-200 rounded-full"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ClientTestimonial = ({ title1, title2 }) => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setError(false);

    const loadReviews = async () => {
      // Check cache first
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_TTL) {
            if (isMounted) setReviews(data);
            return; // Use cached data, don't fetch
          }
        }
      } catch (e) {
        // Ignore cache errors
      }

      // Fetch fresh data
      const data = await fetchReviews();
      if (isMounted) {
        setReviews(data);
        // Save to cache
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
        } catch (e) {
          // Ignore storage errors
        }
      }
    };

    loadReviews().catch(() => {
      if (isMounted) setError(true);
    });

    return () => { isMounted = false; };
  }, []);

  if (reviews === null) {
    return (
      <section className="bg-[#F8F6F3]">
        <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <header className="py-12 sm:py-20 text-center">
            <h4 className="text-[#008080] font-semibold text-xl md:text-2xl">{title1}</h4>
            <h2 className="text-blue-950 font-extrabold text-4xl md:text-6xl mt-2">{title2}</h2>
          </header>
          <TestimonialSkeleton />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-[#F8F6F3]">
        <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 text-center">
          <p className="text-red-600">Failed to load testimonials. Please try again later.</p>
        </div>
      </section>
    );
  }

  if (reviews.length === 0) {
    return (
      <section className="bg-[#F8F6F3]">
        <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 text-center">
          <p className="text-gray-500">No testimonials available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F8F6F3]">
      <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <header className="py-12 sm:py-20 text-center">
          <h4 className="text-[#008080] font-semibold text-xl md:text-2xl">{title1}</h4>
          <h2 className="text-blue-950 font-extrabold text-4xl md:text-6xl mt-2">{title2}</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 items-stretch">
          {reviews.map((item, idx) => (
            <article key={item._id || idx} className="flex flex-col h-full">
              <div className="bg-white p-8 border-t-4 border-red-700 shadow-sm flex flex-col flex-grow relative">
                <p className="text-gray-700 leading-relaxed break-words flex-grow italic">
                  "{item.reviewContent}"
                </p>

                <div className="mt-4 flex text-yellow-500" aria-label={`Rating: ${item.rating} stars`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} aria-hidden="true">{i < item.rating ? "★" : "☆"}</span>
                  ))}
                </div>

                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white rotate-45 border-b border-r border-gray-100"></div>
              </div>

              <footer className="flex gap-4 mt-6 items-center px-2">
                <picture>
                  <source srcSet={item.profilePicture?.replace(/\.(png|jpe?g)$/, '.webp')} type="image/webp" />
                  <img
                    src={item.profilePicture || "/webp/avatar-placeholder.webp"}
                    alt={item.name}
                    width="56"
                    height="56"
                    loading="lazy"
                    className="w-14 h-14 rounded-full object-cover bg-gray-200"
                  />
                </picture>
                <div>
                  <h4 className="font-bold text-gray-900 text-base leading-tight">{item.name}</h4>
                  <p className="text-[#008080] text-sm font-medium mt-1">
                    {item.designation}{item.companyName ? `, ${item.companyName}` : ""}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ClientTestimonial);