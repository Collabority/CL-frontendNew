import React, { memo } from 'react';
import { Link } from 'react-router-dom';

function NewsFeedCard({ news }) {
  if (!news) return null;

  // Determine if this is a standard post or an insight key-based post
  const detailPath = news.key 
    ? `/blog/insight/${news.key}` 
    : `/blog/post/${news.id || news._id}`;

  return (
    <article className="flex flex-col rounded-[2rem] overflow-hidden group cursor-pointer font-poppins shadow-lg transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,128,128,0.15)] bg-gray-900 border border-white/5 h-full">
      <Link to={detailPath} className="flex flex-col h-full">
        
        {/* MEDIA: Image container with hover zoom effect */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-800">
          <img
            src={news.image}
            alt={news.title}
            loading="lazy"
            className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-60" />
        </div>

        {/* CONTENT: Information body */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#008080]" aria-hidden="true" />
            <time className="text-[10px] font-black tracking-widest text-[#008080] uppercase" dateTime={news.date}>
              {news.date}
            </time>
          </div>
          
          <h3 className="text-xl md:text-2xl font-black text-white mb-4 group-hover:text-[#008080] transition-colors leading-[1.2] tracking-tight">
            {news.title}
          </h3>
          
          <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed font-medium mb-8">
            {news.description}
          </p>

          <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase group-hover:text-white transition-colors">
              Read Insight
            </span>
            <span className="text-[#008080] transform translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default memo(NewsFeedCard);