import React, { useState } from "react";
import instance from "../lib/instance"; 

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Uses the 'instance' so it automatically handles the Base URL (http://localhost:5000)
      const response = await instance.post("/newsletter/subscribe", { email });
      
      const resData = response.data;

      console.log("Subscription response:", resData);

      if (resData?.success) {
        setSubscribed(true);
        // We clear the email only after success to show it in the success message if needed
        // but here the UI switches to a success banner, so clearing is fine.
        // alert(resData.message || "Subscription successful!"); // Optional: Alert removal since we show UI feedback
      } else {
        // Handle case where success is false but no error was thrown
        alert(resData.message);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      // Handle network errors or server errors (400, 500)
      const errorMsg = error.response?.data?.message || "Something went wrong. Please try again.";
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-16 px-4 md:px-10" id="newsletter">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full scale-x-[-1] bg-[url('/src/assets/image3.avif')] bg-cover bg-center z-0" />

      {/* Content Container */}
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center relative z-10 bg-white/10 p-4 md:p-8 rounded-xl backdrop-blur-sm"> 
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Stay Ahead with Collabority
        </h2>

        <p className="text-gray-600 mb-6 text-lg md:text-xl">
          Get expert insights, product updates, and the latest trends in IT and
          digital marketing—delivered straight to your inbox.
        </p>

        {!subscribed ? (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-3 w-full border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-[#008080] text-white font-semibold rounded-xl hover:bg-gray-900 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        ) : (
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl relative shadow-sm" role="alert">
            <strong className="font-bold text-lg">Thanks for subscribing!</strong>
            <span className="block mt-1"> We've added <b>{email}</b> to our list.</span>
            <button 
                onClick={() => { setSubscribed(false); setEmail(""); }}
                className="text-xs underline text-green-800 mt-2 hover:text-green-900"
            >
                Subscribe another email
            </button>
          </div>
        )}

        <div className="mt-4 text-sm md:text-base text-gray-500">
          Trusted by industry leaders · Expert-curated content anytime.
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;