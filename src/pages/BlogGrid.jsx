import React from "react";
import Herosection from "../components/Herosection";
import { ArrowLeft, Calendar, Heart,ArrowRight } from "lucide-react";

const BlogGrid = () => {
  return (
    <div>
      <Herosection title="Blog Grid" breadcrumb="Home | Blog" />

      <div className="p-6 max-w-7xl mx-auto">
        {/* Grid wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <div
              key={item}
              className="relative w-full h-[360px] overflow-hidden shadow-lg"
            >
              <img
                src={`/blogimages/b${item}.png`}
                alt={`Card background ${item}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay for text and tag */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 p-8 flex flex-col justify-between">
                <span className="bg-secondary text-white text-xs px-2 py-1 rounded w-fit font-semibold">
                  Design/SEO
                </span>
                <div className=" mb-5">
                  <h3 className="text-white text-lg font-bold leading-tight mb-2">
                    A series of iOS 7 inspired vector icons.
                  </h3>
                  <div className="flex justify-between items-center text-white text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      23rd January 2019
                    </span>
                    <Heart className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* {Pagination icons} */}
      <div className="flex justify-center items-center gap-3 py-6 mb-4">
      <button className="w-12 h-12 rounded-full flex items-center justify-center text-secondary bg-primary hover:bg-secondary hover:text-white">
        <ArrowLeft className="w-5 h-5" />
      </button>

      <button className="w-12 h-12 rounded-full text-secondary bg-primary hover:bg-secondary hover:text-white font-bold text-sm flex items-center justify-center">
        01
      </button>
      <button className="w-12 h-12 rounded-full text-secondary bg-primary hover:bg-secondary hover:text-white font-bold text-sm flex items-center justify-center">
        02
      </button>

      <div className="w-12 h-12 rounded-full text-secondary bg-primary hover:bg-secondary hover:text-white font-bold text-sm flex items-center justify-center">
        ...
      </div>

      <button className="w-12 h-12 rounded-full text-secondary bg-primary hover:bg-secondary hover:text-white font-bold text-sm flex items-center justify-center">
        10
      </button>

      <button className="w-12 h-12 rounded-full text-secondary bg-primary hover:bg-secondary hover:text-white flex items-center justify-center">
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
    </div>
  );
};

export default BlogGrid;
