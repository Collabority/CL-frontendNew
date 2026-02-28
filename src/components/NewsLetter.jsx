import React, { useState, memo } from "react";
import instance from "../lib/instance"; 

/** @BLOCK: NewsLetter */
const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /** @ACTION: Handle Subscription */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await instance.post("/newsletter/subscribe", { email });
      if (response.data?.success) {
        setSubscribed(true);
      } else {
        setError(response.data?.message || "Something went wrong.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-16 px-4 md:px-10 overflow-hidden" id="newsletter">
      
      <div 
        className="absolute inset-0 w-full h-full scale-x-[-1] bg-[url('/src/assets/image3.webp')] bg-cover bg-center z-0" 
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto text-center flex flex-col items-center relative z-10 bg-white/10 p-4 md:p-12 rounded-xl backdrop-blur-md shadow-2xl"> 
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Stay Ahead with Collabority
        </h2>

        <p className="text-gray-700 mb-8 text-lg md:text-xl leading-relaxed">
          Get expert insights and the latest trends delivered straight to your inbox.
        </p>

        {!subscribed ? (
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-4 w-full border-0 rounded-xl focus:ring-2 focus:ring-[#008080] shadow-inner text-gray-900"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-[#008080] text-white font-bold rounded-xl hover:bg-gray-900 transition-all duration-300 disabled:bg-gray-400 shadow-lg active:scale-95"
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </div>
            {error && <p className="mt-3 text-red-600 font-semibold text-sm bg-red-50 py-1 rounded-lg">{error}</p>}
          </form>
        ) : (
          <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-6 rounded-xl shadow-sm" role="status">
            <h3 className="font-bold text-xl mb-1">Success!</h3>
            <p>We've added <b>{email}</b> to our list.</p>
            <button 
              onClick={() => { setSubscribed(false); setEmail(""); }}
              className="text-xs font-bold uppercase tracking-widest mt-4 hover:text-[#008080]"
            >
              Add another email
            </button>
          </div>
        )}

        <div className="mt-6 text-sm text-gray-600 font-medium italic">
          Trusted by industry leaders · Expert-curated content.
        </div>
      </div>
    </section>
  );
};

export default memo(NewsLetter);