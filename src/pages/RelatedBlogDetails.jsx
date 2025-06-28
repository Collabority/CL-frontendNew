import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaRegEdit, FaRegUser, FaRegEnvelope, FaCommentAlt, FaReply, FaCalendarAlt } from 'react-icons/fa';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';


const relatedBlogsData = [
  {
    key: 'digital-marketing',
    category: 'Digital Marketing',
    title: 'Maximizing Reach with Data-Driven Digital Marketing',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    content: [
      {
        heading: 'Why Digital Marketing Matters',
        text: "Digital marketing is essential for modern businesses to reach and engage their target audience. At Collabority, we use data-driven strategies to maximize your brand's online presence and ROI."
      },
      {
        heading: 'Key Components of Digital Marketing',
        list: [
          'Search Engine Optimization (SEO) for organic visibility',
          'Content marketing to educate and engage audiences',
          'Social media management for brand awareness and community building',
          'Email marketing for nurturing leads and driving conversions',
          'Paid advertising (PPC, social ads) for targeted reach',
          'Analytics and reporting for continuous improvement',
        ]
      },
      {
        heading: 'Our Approach',
        list: [
          'SEO and content marketing for organic growth',
          'Social media campaigns to build community',
          'Performance analytics for continuous improvement',
        ]
      },
      {
        heading: 'Real-World Example',
        text: 'We helped a retail client increase their online sales by 60% in six months through targeted digital campaigns and conversion optimization.'
      },
      {
        heading: 'Client Success Story',
        text: 'A B2B SaaS company partnered with us to overhaul their digital marketing. Within a year, they saw a 3x increase in qualified leads and a 40% reduction in cost per acquisition.'
      },
      {
        heading: 'Key Takeaways',
        list: [
          "Digital marketing is a long-term investment with measurable ROI.",
          "A data-driven approach ensures continuous growth and adaptation.",
          "Collabority tailors strategies to each client's unique needs."
        ]
      }
    ]
  },
  {
    key: 'financial-modelling',
    category: 'Financial Modelling',
    title: 'Empowering Decisions with Advanced Financial Modelling',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    content: [
      {
        heading: 'The Power of Financial Modelling',
        text: "Financial modelling enables organizations to make informed, strategic decisions. Collabority's experts build robust models for forecasting, budgeting, and scenario analysis."
      },
      {
        heading: 'Types of Financial Models We Build',
        list: [
          'Three-statement models for comprehensive financial analysis',
          'Discounted cash flow (DCF) models for valuation',
          'Budgeting and forecasting models for planning',
          'Scenario and sensitivity analysis for risk management',
          'Custom Excel and software-based models',
        ]
      },
      {
        heading: 'Our Services',
        list: [
          'Custom Excel and software-based models',
          'Risk and sensitivity analysis',
          'Training for finance teams',
        ]
      },
      {
        heading: 'Real-World Example',
        text: 'A banking client used our models to secure funding and optimize their investment portfolio, resulting in a 25% increase in returns.'
      },
      {
        heading: 'Client Impact',
        text: 'A manufacturing firm leveraged our scenario analysis to navigate market volatility, protecting their margins during a downturn.'
      },
      {
        heading: 'Key Takeaways',
        list: [
          "Robust financial models are essential for strategic planning.",
          "Collabority's models are tailored to each client's industry and goals.",
          "Training and support ensure clients can use and adapt models independently."
        ]
      }
    ]
  },
  {
    key: 'product-management',
    category: 'Product Management',
    title: 'Driving Innovation through Strategic Product Management',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    content: [
      {
        heading: 'What is Product Management?',
        text: "Product management bridges the gap between business, technology, and user experience. Collabority helps organizations launch and scale successful products."
      },
      {
        heading: 'Our Product Management Solutions',
        list: [
          'Market research and user feedback',
          'Agile product development',
          'Go-to-market strategy and launch support',
        ]
      },
      {
        heading: 'Stages of Product Development',
        list: [
          'Ideation and market validation',
          'Prototyping and MVP development',
          'User testing and iteration',
          'Launch and post-launch optimization',
        ]
      },
      {
        heading: 'Case Study',
        text: 'We partnered with a SaaS startup to launch a new platform, achieving 10,000+ users in the first quarter.'
      },
      {
        heading: 'Client Success Story',
        text: 'A fintech client used our go-to-market strategy to successfully launch a new app, reaching 50,000 downloads in three months.'
      },
      {
        heading: 'Key Takeaways',
        list: [
          "Effective product management drives innovation and growth.",
          "Collabority's cross-functional teams ensure holistic solutions.",
          "Continuous feedback and iteration are key to product success."
        ]
      }
    ]
  }
];

const relatedComments = {
  'digital-marketing': [
    {
      author: 'Amit Singh',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      date: '10th June 2024',
      text: "The digital marketing insights here are spot on! Helped my business grow."
    }
  ],
  'financial-modelling': [
    {
      author: 'Neha Gupta',
      avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
      date: '8th June 2024',
      text: "Collabority's financial models are robust and easy to use. Highly recommended."
    }
  ],
  'product-management': [
    {
      author: 'Rohit Mehra',
      avatar: 'https://randomuser.me/api/portraits/men/48.jpg',
      date: '5th June 2024',
      text: "Great overview of product management best practices!"
    }
  ]
};

const authorInfo = {
  name: 'Priya Sharma',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  title: 'Head of Digital Transformation, Collabority',
  bio: "Priya leads Collabority's digital transformation initiatives, helping clients modernize their IT, marketing, and creative strategies. With over 12 years of experience, she's passionate about driving innovation and measurable results for businesses of all sizes."
};

const RelatedBlogDetails = () => {
  const { key } = useParams();
  const navigate = useNavigate();
  const blog = relatedBlogsData.find(b => b.key === key);
  const comments = relatedComments[key] || [];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [key]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Blog Not Found</h2>
          <button onClick={() => navigate(-1)} className="bg-[#008080] text-white px-6 py-2 rounded hover:bg-[#006666]">Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <span className="text-white bg-[#008080] text-xs font-semibold px-3 py-1 rounded">{blog.category}</span>
        <h1 className="text-3xl font-bold mt-4 text-gray-900">{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg my-6" />
        {blog.content.map((section, idx) => (
          <div key={idx} className="mb-4">
            {section.heading && <h2 className="text-lg font-bold text-gray-900 mb-2 mt-4">{section.heading}</h2>}
            {section.text && <p className="text-gray-900 text-sm leading-relaxed mb-2">{section.text}</p>}
            {section.list && (
              <ul className="list-disc pl-6 text-gray-900 text-sm mb-2">
                {section.list.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
          </div>
        ))}

        {/* Comments */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Comments</h2>
          <div className="space-y-4 mb-6">
            {comments.map((comment, idx) => (
              <div key={idx} className="flex items-start pb-4">
                <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full mr-3 object-cover" />
                <div className="flex-1">
                  <div className="flex justify-between w-full">
                    <div>
                      <p className="font-bold text-base text-gray-900">{comment.author}</p>
                      <p className="text-gray-500 text-xs flex items-center"><FaCalendarAlt className="h-3 w-3 mr-1 text-[#008080]" /> {comment.date}</p>
                    </div>
                    <button className="mt-0.5 px-3 py-1 border border-[#008080] text-[#008080] font-semibold flex items-center text-xs transition duration-300 hover:bg-[#008080] hover:text-white">
                      <FaReply className="h-3 w-3 mr-1" /> Reply
                    </button>
                  </div>
                  <p className="text-gray-900 text-xs leading-normal mt-1">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Comment form */}
          <h3 className="text-base font-bold mb-2 text-gray-900">Post Comment</h3>
          <form className="space-y-3 p-4 bg-[#F8F6F3] border-2 border-gray-200">
            <div className="relative">
              <textarea className="w-full p-3 border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#008080] pr-10 placeholder-gray-900 text-xs rounded" rows="3" placeholder="Type your comments...."></textarea>
              <FaRegEdit className="absolute right-3 top-3 text-gray-900" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="relative">
                <input type="text" className="w-full p-3 border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#008080] pr-10 placeholder-gray-900 text-xs rounded" placeholder="Type your name...." />
                <FaRegUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-900" />
              </div>
              <div className="relative">
                <input type="email" className="w-full p-3 border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#008080] pr-10 placeholder-gray-900 text-xs rounded" placeholder="Type your email...." />
                <FaRegEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-900" />
              </div>
            </div>
            <button type="submit" className="bg-[#008080] text-white font-bold py-2 px-4 hover:bg-[#006666] transition duration-300 flex items-center text-xs">
              <FaCommentAlt className="h-4 w-4 mr-2" /> Post Comment
            </button>
          </form>
        </div>

        {/* Written by */}
        <div className="bg-white p-6 border border-gray-300 mt-8">
          <div className="flex items-center">
            <img src={authorInfo.avatar} alt="Author" className="w-20 h-20 mr-4 object-cover rounded-full" />
            <div>
              <h3 className="font-bold text-sm text-[#008080]">Written by</h3>
              <p className="text-lg font-bold text-gray-900 mb-1">{authorInfo.name}</p>
              <p className="text-gray-900 leading-relaxed text-xs mb-1">{authorInfo.title}</p>
              <p className="text-gray-900 leading-relaxed text-xs">{authorInfo.bio}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RelatedBlogDetails; 