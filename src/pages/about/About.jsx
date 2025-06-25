import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const serviceCards = [
  {
    title: "Design & Development",
    desc: "The functional goal of technical content is to help people use a product.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Technical Support",
    desc: "The functional goal of technical content is to help people use a product.",
    img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Digital Marketing",
    desc: "The functional goal of technical content is to help people use a product.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
];

const timeline = [
  {
    year: "1990 - Startup",
    title: "Technical content may have persuasive objectives.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    desc: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.",
  },
  {
    year: "1995 - Growth",
    title: "Technical content may have persuasive objectives.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    desc: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.",
  },
  {
    year: "2000 - Expansion",
    title: "Technical content may have persuasive objectives.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    desc: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.",
  },
  {
    year: "2010 - Present",
    title: "Technical content may have persuasive objectives.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    desc: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.",
  },
];

const faqs = [
  {
    question: "Technical content may have persuasive objectives",
    answer:
      "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.",
  },
  {
    question: "Technical content may have persuasive objectives",
    answer:
      "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.",
  },
  {
    question: "Technical content may have persuasive objectives",
    answer:
      "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.",
  },
  {
    question: "Technical content may have persuasive objectives",
    answer:
      "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.",
  },
];

export default function About() {
  const [openFAQ, setOpenFAQ] = useState(0);

  return (
    <div className="bg-beige">
      {/* Hero/Breadcrumb Section */}
      <section className="bg-[#F8F6F3] pt-12 pb-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-6xl font-extrabold text-[#0a2256] mb-4">About Us</h1>
          <div className="text-xl text-[#7b8ca0] font-semibold mb-2">Home | About</div>
        </div>
      </section>

      {/* Experience/Intro Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0">
            <div className="text-[#2563eb] font-bold text-lg mb-2">25 Years Of Experience</div>
            <h2 className="text-5xl font-extrabold text-[#0a2256] leading-tight mb-4">Not only explore for job done.</h2>
          </div>
          <div className="max-w-xl text-[#7b8ca0] text-lg">
            Does any industry face a more complex audience journey and marketing sales process than B2B technology? Consider the number of people who influence a sale, the length of the decision-making cycle, the competing interests of the people who purchase, implement, manage, and use the technology. It's a lot meaningful content here.<br />
            <Link to="#" className="text-[#2563eb] font-semibold ml-1">Read More</Link>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((card, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden group shadow-lg">
              <img src={card.img} alt={card.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2256]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-white/90 mb-2">{card.desc}</p>
                  {card.title === "Technical Support" && (
                    <Link to="#" className="text-white underline font-semibold">Read More</Link>
                  )}
                </div>
              </div>
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">{card.title}</h3>
                <p className="text-white/90 drop-shadow-lg">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video/Intro Section */}
      <section className="bg-[#f3ede6] py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-full md:w-1/2 aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80" alt="Intro Video" className="w-full h-full object-cover rounded-xl border-4 border-[#008080]" />
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="bg-teal text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl shadow-lg border-4 border-white">
                <FontAwesomeIcon icon={faPlay} />
              </span>
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <div className="text-[#2563eb] font-bold mb-2">Intro Video</div>
            <h2 className="text-5xl font-extrabold text-[#0a2256] mb-4">How we growth our business.</h2>
            <p className="text-[#7b8ca0] text-lg mb-6">The introduction of cloud and mobile technologies into enterprise software.</p>
            <p className="text-[#7b8ca0] mb-8">Whether you are building an enterprise web portal or a state-of-the-art website, you always need the right modern tools. Well-built and maintained PHP frameworks provide those tools in abundance, allowing developers to save time, re-use code, and streamline the back end. As software development tools continuously.</p>
            <Link to="#" className="bg-teal text-white px-8 py-3 rounded-md font-semibold hover:bg-teal/80 transition-colors">Learn More</Link>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="bg-[#F8F6F3] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-[#0a2256] mb-2">Our History</h2>
            <p className="text-[#7b8ca0] text-lg">Does any industry face a more complex audience journey and marketing sales process than B2B technology.</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#eaf1fb] -translate-x-1/2 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 relative z-10">
              {timeline.map((item, idx) => (
                <div key={idx} className={`flex flex-col items-center ${idx % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}>
                  <div className="w-full flex flex-col items-center">
                    <img src={item.img} alt={item.title} className="w-full h-64 object-cover rounded-xl mb-4" />
                    <div className="flex items-center mb-2">
                      <span className="w-12 h-12 rounded-full border-4 border-[#2563eb] flex items-center justify-center text-[#2563eb] font-bold text-xl bg-white shadow">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="bg-white rounded-xl shadow p-6 w-full">
                      <div className="text-[#2563eb] font-bold mb-1">{item.year}</div>
                      <h3 className="text-2xl font-bold text-[#0a2256] mb-2">{item.title}</h3>
                      <p className="text-[#7b8ca0]">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-beige/80">
        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1600&q=80" alt="FAQ BG" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12">
            <div className="text-[#2563eb] font-bold mb-2">FAQ</div>
            <h2 className="text-5xl font-extrabold text-[#0a2256] mb-4">Get Every answer from here.</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow p-6 flex flex-col">
                <button
                  className={`flex items-center justify-between w-full text-left text-[#0a2256] font-semibold text-lg focus:outline-none px-6 py-4 rounded-full bg-teal text-white transition-colors duration-200 ${openFAQ === idx ? 'shadow-lg' : ''}`}
                  onClick={() => setOpenFAQ(openFAQ === idx ? -1 : idx)}
                >
                  <span>{faq.question}</span>
                  <FontAwesomeIcon icon={openFAQ === idx ? faMinus : faPlus} className="text-white text-xl" />
                </button>
                {openFAQ === idx && (
                  <div className="mt-4 text-[#7b8ca0] text-base bg-white rounded-2xl p-4 shadow-inner">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-darkblue text-white py-16 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-[#2563eb] rounded-tr-full opacity-30" />
        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">OmniVus.</h3>
            <p className="mb-4">The web has changed a lot since Vitaly posted his first article back in 2006. The team at Smashing has changed too, as have the things that we bring to our community conferences, books, and our membership added to the online magazine.</p>
            <p>One thing that hasn't changed is that we're a small team — with most of us not working</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Career</li>
              <li>Refund</li>
              <li>Terms</li>
              <li>Details</li>
              <li>Contact</li>
              <li>Business</li>
              <li>Affiliate</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Working Hours</h4>
            <ul className="space-y-2">
              <li>Monday - Friday: 7:00 - 17:00</li>
              <li>Saturday: 7:00 - 12:00</li>
              <li>Sunday and holidays: 8:00 - 10:00</li>
            </ul>
            <p className="mt-4"><span className="font-bold">For more then 30 years</span>, IT Service has been a reliable partner in the field of logistics and cargo forwarding.<br /><Link to="#" className="text-[#4fd1c5] underline">Discover More</Link></p>
          </div>
        </div>
        <div className="text-center mt-12 text-white/70">Copyright By@ WebTend - 2021</div>
      </footer>
    </div>
  );
} 