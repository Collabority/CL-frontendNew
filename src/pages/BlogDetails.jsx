import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import BlogSidebar from '../components/BlogSidebar';
import BlogPost from '../components/BlogPost';
import { blogsData } from '../constants/blogs';

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
        heading: 'Our Approach',
        list: [
          'SEO and content marketing for organic growth',
          'Social media campaigns to build community',
          'Performance analytics for continuous improvement',
        ]
      },
      {
        heading: 'Success Story',
        text: 'We helped a retail client increase their online sales by 60% in six months through targeted digital campaigns and conversion optimization.'
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
        heading: 'Our Services',
        list: [
          'Custom Excel and software-based models',
          'Risk and sensitivity analysis',
          'Training for finance teams',
        ]
      },
      {
        heading: 'Client Impact',
        text: 'A banking client used our models to secure funding and optimize their investment portfolio, resulting in a 25% increase in returns.'
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
        heading: 'Case Study',
        text: 'We partnered with a SaaS startup to launch a new platform, achieving 10,000+ users in the first quarter.'
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

const BlogDetails = () => {
  const navigate = useNavigate();
  const handleRelatedClick = (key) => {
    navigate(`/blog-details/${key}`);
  };

  return (
    <div className="flex-grow">
      <PageHeader title="News Details" breadcrumb="Home | Blog Details" />

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl">

        {/* Main content area */}
        <div className="lg:col-span-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            
            {/* Render blogs from data */}
            <BlogPost blog={blogsData[0]} />

            {/* Related posts */}
            <h2 className="border-t pt-6 border-gray-200 text-2xl font-bold mb-6 text-gray-900">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

              {/* Digital marketing */}
              <div className="border-gray-500 overflow-hidden shadow-sm cursor-pointer" onClick={() => handleRelatedClick('digital-marketing')}>
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" alt="Digital Marketing" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <p className="text-gray-900 text-sm mb-2 flex items-center">Digital Marketing</p>
                  <h3 className="font-bold text-lg leading-snug mb-2 text-gray-900">Maximizing Reach with Data-Driven Digital Marketing</h3>
                  <p className="text-gray-900 text-sm">Learn how Collabority crafts digital marketing strategies that boost engagement and drive measurable growth.</p>
                </div>
              </div>

              {/* Financial modelling */}
              <div className="border-gray-500 overflow-hidden shadow-sm cursor-pointer" onClick={() => handleRelatedClick('financial-modelling')}>
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" alt="Financial Modelling" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <p className="text-gray-900 text-sm mb-2 flex items-center">Financial Modelling</p>
                  <h3 className="font-bold text-lg leading-snug mb-2 text-gray-900">Empowering Decisions with Advanced Financial Modelling</h3>
                  <p className="text-gray-900 text-sm">Discover how our financial modelling expertise helps businesses make informed, strategic decisions.</p>
                </div>
              </div>

              {/* Product management */}
              <div className="border-gray-500 overflow-hidden shadow-sm cursor-pointer" onClick={() => handleRelatedClick('product-management')}>
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" alt="Product Management" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <p className="text-gray-900 text-sm mb-2 flex items-center">Product Management</p>
                  <h3 className="font-bold text-lg leading-snug mb-2 text-gray-900">Driving Innovation through Strategic Product Management</h3>
                  <p className="text-gray-900 text-sm">Explore Collabority's approach to building and scaling successful products in dynamic markets.</p>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Sidebar area */}
        <div className="lg:col-span-4">
          <div className="scroll-animate slide-in-right max-w-xs">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
