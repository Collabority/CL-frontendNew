import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend or email service
    console.log("Subscribed email:", email);
    setSubscribed(true);
    setEmail("");
  };
  return (
    <section className="relative w-full py-16 px-4" id="newsletter ">
      <div className="absolute inset-0 w-full h-full scale-x-[-1] bg-[url('/src/assets/image3.avif')] bg-cover bg-center z-0"></div>
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center relative z-10 bg-white/10">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Stay Ahead with Collabority
        </h2>
        <p className="text-gray-600 mb-6 text-lg">
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
              className="px-6 py-3 bg-[#008080] text-white font-semibold rounded-xl hover:bg-gray-900 transition"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <p className="text-[#008080] font-medium text-lg">
            Thanks for subscribing!
          </p>
        )}

        <div className="mt-4 text-sm text-gray-500">
          Trusted by industry leaders · Expert-curated content anytime.
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
