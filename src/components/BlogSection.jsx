import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const BlogSection = ({ posts }) => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <header className="text-center mb-20">
          <span className="text-[#008080] font-black uppercase tracking-[0.3em] text-xs">
            Knowledge Base
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-[#002248] tracking-tighter mt-4">
            Latest Insights
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((item, idx) => (
            <article
              key={idx}
              className="group bg-[#F8F6F3] rounded-[2.5rem] overflow-hidden border border-transparent hover:border-teal-100 hover:bg-white transition-all duration-500"
            >
              <div className="overflow-hidden h-72">
                <img
                  src={item.img}
                  alt={item.des}
                  width="400"
                  height="300"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="p-10">
                <time className="text-[#008080] font-black text-xs uppercase tracking-widest">
                  {item.date}
                </time>
                <h3 className="text-2xl font-black text-[#002248] mt-4 mb-6 line-clamp-2 leading-tight group-hover:text-[#008080] transition-colors">
                  {item.des}
                </h3>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-[#008080] transition-colors"
                >
                  Read Article <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;