import React from 'react';
import { FaRegEdit, FaRegUser, FaRegEnvelope, FaCommentAlt, FaReply, FaCalendarAlt } from 'react-icons/fa';

const BlogPost = ({ blog }) => {
  return (
    <div id={blog.id} className="mb-12 border-t pt-8 border-gray-200 first:border-t-0 first:pt-0">
      <span className="text-white bg-[#008080] text-xs font-semibold px-3 py-1 rounded">{blog.category}</span>
      <h1 className="text-3xl font-bold mt-4 text-gray-900">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg my-6" />

      {/* Blog Content */}
      {blog.content.map((section, index) => {
        if (section.type === 'heading') {
          return <h2 key={index} className="text-xl font-bold text-gray-900 mb-2 mt-6">{section.text}</h2>;
        }
        if (section.type === 'paragraph') {
          return <p key={index} className="text-gray-900 text-sm leading-relaxed mb-4">{section.text}</p>;
        }
        if (section.type === 'list') {
          return (
            <ul key={index} className="list-disc pl-6 text-gray-900 text-sm mb-4">
              {section.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>
              ))}
            </ul>
          );
        }
        if (section.type === 'cta') {
          return (
            <p key={index} className="text-gray-900 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: section.text }}></p>
          );
        }
        return null;
      })}

      {/* Comments Section */}
      <div className="mb-12 border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Comments</h2>
        <div className="space-y-6 mb-8">
          {blog.comments.map((comment, index) => (
            <div key={index} className="flex items-start pb-4">
              <img src={comment.avatar} alt="Comment Author" className="w-12 h-12 rounded-full mr-3 object-cover" />
              <div className="flex-1">
                <div className="flex justify-between w-full">
                  <div>
                    <p className="font-bold text-lg text-gray-900">{comment.author}</p>
                    <p className="text-gray-500 text-sm flex items-center"><FaCalendarAlt className="h-4 w-4 mr-1 text-[#008080]" /> {comment.date}</p>
                  </div>
                  <button className="mt-0.5 px-4 py-2 border border-[#008080] text-[#008080] font-semibold flex items-center transition duration-300 hover:bg-[#008080] hover:text-white">
                    <FaReply className="h-4 w-4 mr-1" /> Reply
                  </button>
                </div>
                <p className="text-gray-900 text-sm leading-normal mt-2">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comment Form */}
        <h3 className="text-xl font-bold mb-4 text-gray-900">Post Comment</h3>
        <form className="space-y-4 p-6 bg-[#F8F6F3] rounded-lg border-2 border-gray-200">
          <div className="relative">
            <textarea className="w-full p-4 border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#008080] pr-10 placeholder-gray-900 text-sm text-base rounded" rows="4" placeholder="Type your comments...."></textarea>
            <FaRegEdit className="absolute right-3 top-4 text-gray-900" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input type="text" className="w-full p-4 border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#008080] pr-10 placeholder-gray-900 text-sm text-base rounded" placeholder="Type your name...." />
              <FaRegUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-900" />
            </div>
            <div className="relative">
              <input type="email" className="w-full p-4 border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#008080] pr-10 placeholder-gray-900 text-sm text-base rounded" placeholder="Type your email...." />
              <FaRegEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-900" />
            </div>
          </div>
          <button type="submit" className="bg-[#008080] text-white font-bold py-3 px-6 hover:bg-[#006666] transition duration-300 flex items-center rounded">
            <FaCommentAlt className="h-5 w-5 mr-2" /> Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogPost; 