import React from 'react';
import { FaRegEdit, FaRegUser, FaRegEnvelope, FaCommentAlt, FaReply, FaCalendarAlt } from 'react-icons/fa';

const BlogModal = ({ isOpen, onClose, blog, comments, author }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 backdrop-blur-sm">
      <div className="bg-white max-w-2xl w-full rounded-lg shadow-lg overflow-y-auto max-h-[90vh] relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-[#008080] text-2xl font-bold z-10"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="p-6">
          {/* Blog content */}
          <span className="text-white bg-[#008080] text-xs font-semibold px-3 py-1 rounded">{blog.category}</span>
          <h1 className="text-2xl font-bold mt-4 text-gray-900">{blog.title}</h1>
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
            <form className="space-y-3 p-4 bg-[#F8F6F3] rounded-lg border-2 border-gray-200">
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
              <button type="submit" className="bg-[#008080] text-white font-bold py-2 px-4 hover:bg-[#006666] transition duration-300 flex items-center rounded text-xs">
                <FaCommentAlt className="h-4 w-4 mr-2" /> Post Comment
              </button>
            </form>
          </div>

          {/* Written by */}
          <div className="bg-white p-6 border border-gray-300 mt-8 rounded-lg">
            <div className="flex items-center">
              <img src={author.avatar} alt="Author" className="w-20 h-20 mr-4 object-cover rounded-full" />
              <div>
                <h3 className="font-bold text-sm text-[#008080]">Written by</h3>
                <p className="text-lg font-bold text-gray-900 mb-1">{author.name}</p>
                <p className="text-gray-900 leading-relaxed text-xs mb-1">{author.title}</p>
                <p className="text-gray-900 leading-relaxed text-xs">{author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal; 