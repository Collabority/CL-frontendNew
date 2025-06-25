import React, { useState } from "react";

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const [visibleIdx, setVisibleIdx] = useState(null);
  const isAnyOpen = openIdx !== null;
  const answerText =
    "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.";

  const handleToggle = (idx) => {
    if (openIdx === idx) {
      setOpenIdx(null);
      setTimeout(() => {
        setVisibleIdx(null);
      }, 700);
    } else {
      setOpenIdx(idx);
      setVisibleIdx(idx);
    }
  };

  const faqData = [
    {
      question: "What services does Collabority offer?",
      answer: "We provide IT solutions, digital marketing, creative design, and professional video production to help businesses grow in the digital era.",
    },
    {
      question: "How does Collabority help with digital transformation?",
      answer: "Our team delivers custom software, cloud integration, and secure infrastructure, ensuring seamless digital transformation for your business.",
    },
    {
      question: "Can Collabority handle branding and creative needs?",
      answer: "Absolutely! We offer branding, UI/UX, graphic design, and video production to make your brand stand out and engage your audience.",
    },
    {
      question: "What makes Collabority different from other agencies?",
      answer: "Our integrated approach combines IT, marketing, design, and video expertise, providing holistic solutions for sustainable brand growth.",
    },
    {
      question: "How can I get started with Collabority?",
      answer: "Contact us for a free consultation. We'll discuss your goals and create a tailored strategy to help your business thrive.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#F5FAFE] transition-all duration-700 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]">
      {/* Background image wrapper that expands with content */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1500&q=80"
          alt="FAQ background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
      </div>
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* FAQ label and heading */}
        <div className="mb-2 flex items-center gap-2">
          <span className="text-[#2563eb] font-semibold text-base">FAQ</span>
          <span className="w-8 h-1 bg-blue-200 rounded-full inline-block" />
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#0a2256] mb-12 leading-tight max-w-xl">
          Get Every answer<br />from here.
        </h2>
        <div className="space-y-8">
          {faqData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="w-full flex justify-start">
                <div className={`w-full max-w-xl ml-0 mr-auto bg-[#fdf6f0] shadow-lg overflow-hidden transition-[border-radius] duration-100 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] rounded-full`}
                  style={{
                    borderRadius: '2rem',
                  }}
                >
                  <button
                    onClick={() => handleToggle(idx)}
                    className={`flex items-center w-full px-6 py-6 focus:outline-none bg-transparent`}
                  >
                    <span className="flex items-center mr-4 text-[#3b82f6]">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="14" y="2" width="8" height="2" rx="1" transform="rotate(45 14 2)" />
                        <path d="M15 7l-1.5-1.5M9 17l-1.5 1.5M7 9l-1.5-1.5M17 15l1.5 1.5M8 8l8 8M21 21l-6-6" />
                      </svg>
                    </span>
                    <span
                      className={`font-semibold text-[#4a5b7d] transition-all duration-200 ${isOpen ? 'text-sm' : 'text-base'}`}
                    >
                      {faq.question}
                    </span>
                    <span className="ml-auto flex items-center text-[#3b82f6]">
                      {isOpen ? (
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 12H4"/></svg>
                      ) : (
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
                      )}
                    </span>
                  </button>
                  {/* Collapsible answer */}
                  <div
                    className="transition-all duration-700 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"
                    style={{
                      maxHeight: isOpen ? 200 : 0,
                      opacity: isOpen ? 1 : 0,
                      padding: isOpen ? "0 2rem 1.25rem 4.5rem" : "0 2rem 0 4.5rem",
                    }}
                  >
                    {visibleIdx === idx && (
                      <div
                        className="text-[#7b8bb2] pt-2 font-medium transition-all duration-200"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 