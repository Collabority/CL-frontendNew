export default function PricingCard({ plan }) {
  return (
    <div className="group bg-white bg-opacity-60 p-6 sm:p-8 md:p-10 lg:p-12 h-full flex flex-col justify-between items-center text-center text-black hover:bg-secondary hover:text-white transition-colors duration-300 rounded-lg shadow-md hover:shadow-lg">
      <h3 className="font-semibold text-lg mb-4 text-gray-900 group-hover:text-white">{plan.name}</h3>
      <h4 className="text-xl sm:text-2xl font-bold group-hover:text-white">
                ${" "}
                <span className="text-5xl sm:text-6xl group-hover:text-white">
                  {plan.price}
                </span>
              </h4>
      <p className="text-gray-400 mt-4">{plan.duration}</p>
      <span className="text-gray-400 group-hover:text-white mb-6">
        _____
      </span>
      
      <p className="text-xs sm:text-sm mb-6 text-gray-400 group-hover:text-white flex-grow">
        The functional goal of technical content is to help people use
        a product successfully.
      </p>
    
      <button className="inline-block mt-auto bg-primary text-gray-900 font-semibold px-5 py-2.5 rounded-md group-hover:bg-white group-hover:text-secondary transition-colors duration-300 shadow-sm hover:shadow-md">
        Purchase Now
      </button>
    </div>
  );
}
