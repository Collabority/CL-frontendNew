import React, { useState, useMemo } from 'react';
import { FaRegEdit, FaRegUser, FaRegEnvelope, FaCommentAlt, FaCalendarAlt } from 'react-icons/fa';
import instance from "../lib/instance";

/** @BLOCK: BlogPost */
const BlogPost = ({ blog }) => {
  const [comments, setComments] = useState(blog?.comments || []);
  const [formData, setFormData] = useState({ name: "", email: "", comment: "" });
  const [submitting, setSubmitting] = useState(false);

  const displayImage = useMemo(() => blog?.coverImage || blog?.image || "/webp/default.webp", [blog]);
  const displayDate = useMemo(() => blog?.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "Recent", [blog]);

  if (!blog) return null;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await instance.post(`/blogs/comment/${blog._id}`, formData);
      setComments(response.data.data.comments);
      setFormData({ name: "", email: "", comment: "" });
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <article id={blog._id} className="mb-12 border-t pt-8 border-gray-200 first:border-t-0 first:pt-0">
      <header>
        <span className="text-white bg-[#008080] text-xs font-semibold px-3 py-1 rounded">
          {blog.category || "General"}
        </span>
        <h1 className="text-3xl font-bold mt-4 text-gray-900 leading-tight">{blog.title}</h1>
      </header>

      <img 
        src={displayImage} 
        alt={blog.title} 
        width="800"
        height="450"
        loading="eager"
        className="w-full h-auto max-h-[500px] object-cover rounded-lg my-6 shadow-sm" 
      />

      <div className="blog-content text-gray-900 leading-relaxed text-lg prose max-w-none">
        {Array.isArray(blog.content) ? (
          blog.content.map((section, index) => (
            <div key={index}>
              {section.type === 'heading' && <h2 className="text-xl font-bold mt-6 mb-2">{section.text}</h2>}
              {section.type === 'paragraph' && <p className="text-base mb-4">{section.text}</p>}
              {section.type === 'list' && (
                <ul className="list-disc pl-6 text-base mb-4">
                  {section.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
            </div>
          ))
        ) : (
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        )}
      </div>

      <section className="mb-12 border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Comments ({comments.length})</h2>
        <div className="space-y-6 mb-8">
          {comments.map((comment, index) => (
            <div key={index} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
              <img 
                src={comment.avatar || `https://ui-avatars.com/api/?name=${comment.author}&background=random`} 
                alt="" width="48" height="48" loading="lazy"
                className="w-12 h-12 rounded-full mr-3 object-cover bg-gray-200" 
              />
              <div className="flex-1">
                <p className="font-bold text-lg text-gray-900">{comment.author || "Anonymous"}</p>
                <time className="text-gray-500 text-sm flex items-center">
                  <FaCalendarAlt aria-hidden="true" className="h-4 w-4 mr-1 text-[#008080]" /> 
                  {comment.date || displayDate}
                </time>
                <p className="text-gray-800 text-sm mt-2">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="space-y-4 p-6 bg-[#F8F6F3] rounded-lg border border-gray-200" onSubmit={handleSubmit}>
          <div className="relative">
            <textarea 
              name="comment" value={formData.comment} onChange={handleChange}
              aria-label="Write a comment"
              className="w-full p-4 border border-gray-300 bg-white focus:ring-2 focus:ring-[#008080] text-sm rounded" 
              rows="4" placeholder="Type your comments...." required
            ></textarea>
            <FaRegEdit aria-hidden="true" className="absolute right-3 top-4 text-gray-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input 
                type="text" name="name" value={formData.name} onChange={handleChange}
                className="w-full p-4 border border-gray-300 bg-white focus:ring-2 focus:ring-[#008080] text-sm rounded" 
                placeholder="Name" required 
              />
              <FaRegUser aria-hidden="true" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <div className="relative">
              <input 
                type="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full p-4 border border-gray-300 bg-white focus:ring-2 focus:ring-[#008080] text-sm rounded" 
                placeholder="Email" required 
              />
              <FaRegEnvelope aria-hidden="true" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <button 
            type="submit" disabled={submitting}
            className={`bg-[#008080] text-white font-bold py-3 px-6 hover:bg-[#006666] transition-all rounded ${submitting ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {submitting ? "Posting..." : "Post Comment"}
          </button>
        </form>
      </section>
    </article>
  );
};

export default React.memo(BlogPost);