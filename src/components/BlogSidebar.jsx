import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSearch } from 'react-icons/fa';

const BlogSidebar = () => {
  const popularPosts = [
    { 
      title: "Emerging Trends in IT", 
      date: "10th June 2024", 
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=200&auto=format&fit=crop" 
    },
    { 
      title: "Mastering Digital Marketing", 
      date: "5th June 2024", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=200&auto=format&fit=crop" 
    },
    { 
      title: "UI/UX Design Principles", 
      date: "1st June 2024", 
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=200&auto=format&fit=crop" 
    },
  ];

  const categories = [
    { name: "Information Technology", count: 42 },
    { name: "Digital Marketing", count: 27 },
    { name: "UI/UX Design", count: 22 },
    { name: "Product Management", count: 24 },
  ];

  const tags = ["IT", "Management", "Digital Marketing", "UI/UX", "AI"];

  return (
    <div className="space-y-11 sticky top-24">
      
      <div className="relative">
        <input 
          type="text" 
          aria-label="Search blog"
          placeholder="Search insights..." 
          className="w-full bg-[#F8F6F3] border-2 border-gray-200 py-4 px-6 focus:outline-none focus:border-[#008080] transition-all font-poppins text-sm" 
        />
        <FaSearch aria-hidden="true" className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      <div className="bg-[#F8F6F3] border-2 border-gray-200 p-8">
        <h3 className="text-2xl font-black text-[#002248] mb-8 flex items-center tracking-tighter uppercase text-[14px]">
          <span className="w-2 h-5 bg-[#008080] mr-3"></span> About Author
        </h3>
        <div className="text-center">
          <img 
            src="https://i.pravatar.cc/150?u=alexmorgan" 
            alt="Alex Morgan" 
            className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-white shadow-md object-cover grayscale hover:grayscale-0 transition-all duration-500" 
          />
          <h4 className="text-xl font-black text-[#002248] mb-2 tracking-tight">Alex Morgan</h4>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed font-medium">Exploring the intersections of IT innovation and strategic digital growth.</p>
          <div className="flex justify-center space-x-6 text-gray-400 text-lg">
            <FaFacebookF className="hover:text-[#008080] cursor-pointer transition-colors" />
            <FaTwitter className="hover:text-[#008080] cursor-pointer transition-colors" />
            <FaLinkedinIn className="hover:text-[#008080] cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      <div className="bg-[#F8F6F3] border-2 border-gray-200 p-8">
        <h3 className="text-2xl font-black text-[#002248] mb-8 flex items-center tracking-tighter uppercase text-[14px]">
          <span className="w-2 h-5 bg-[#008080] mr-3"></span> Popular Feeds
        </h3>
        <div className="space-y-8">
          {popularPosts.map((post, index) => (
            <div key={index} className="flex items-center space-x-4 group cursor-pointer">
              <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 border border-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="text-[#002248] text-[13px] font-bold leading-snug group-hover:text-[#008080] transition-colors mb-1">{post.title}</h4>
                <div className="text-[#008080] text-[9px] font-black uppercase tracking-widest">{post.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#F8F6F3] border-2 border-gray-200 p-8">
        <h3 className="text-2xl font-black text-[#002248] mb-8 flex items-center tracking-tighter uppercase text-[14px]">
          <span className="w-2 h-5 bg-[#008080] mr-3"></span> Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white border border-gray-100 hover:bg-[#002248] group transition-all duration-300 cursor-pointer shadow-sm">
              <span className="text-xs font-bold text-[#002248] group-hover:text-white transition-colors uppercase tracking-wider">{category.name}</span>
              <span className="text-[10px] font-black text-[#008080] group-hover:text-white transition-colors">{category.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative aspect-[3/5] border-2 border-gray-200 overflow-hidden group cursor-pointer rounded-2xl shadow-xl bg-[#002248]">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop" 
          alt="Business Solution Advertisement" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40"
          onLoad={(e) => e.target.classList.remove('opacity-0')}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#002248] via-[#002248]/20 to-transparent flex flex-col justify-end p-8 text-white">
          <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-[#008080]">Advertisement</div>
          <div className="text-3xl font-black leading-tight mb-6 tracking-tighter">Innovative Business Solutions.</div>
          <button className="w-fit px-8 py-4 bg-[#008080] text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#002248] transition-all transform group-hover:-translate-y-1">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;