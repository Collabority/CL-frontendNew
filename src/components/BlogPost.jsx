import React, { useState } from 'react';
import { FaRegEdit, FaRegUser, FaRegEnvelope, FaCommentAlt, FaCalendarAlt } from 'react-icons/fa';
import instance from "../lib/instance"; // Ensure this points to your configured axios instance

const BlogPost = ({ blog }) => {
  // Initialize comments from the blog prop
  const [comments, setComments] = useState(blog?.comments || []);
  
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: ""
  });
  
  // Loading state for the submit button
  const [submitting, setSubmitting] = useState(false);

  if (!blog) return null;

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.comment) {
      alert("Please fill in all fields.");
      return;
    }

    setSubmitting(true);

    try {
      // POST request to backend
      const response = await instance.post(`/blogs/comment/${blog._id}`, {
        name: formData.name,
        email: formData.email,
        comment: formData.comment
      });

      // The backend returns the updated blog object with the new comment
      const updatedBlog = response.data.data;

      // Update the comments list immediately
      setComments(updatedBlog.comments);

      // Reset the form
      setFormData({ name: "", email: "", comment: "" });
      alert("Comment posted successfully!");

    } catch (error) {
      console.error("Error posting comment:", error);
      alert(error.response?.data?.message || "Failed to post comment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Safe Image & Date Handling
  const displayImage = blog.coverImage || blog.image || "https://placehold.co/800x400";
  const displayDate = blog.createdAt 
    ? new Date(blog.createdAt).toLocaleDateString() 
    : blog.date || "Recent";

  return (
    <div id={blog._id || blog.id} className="mb-12 border-t pt-8 border-gray-200 first:border-t-0 first:pt-0">
      
      {/* Category & Title */}
      <span className="text-white bg-[#008080] text-xs font-semibold px-3 py-1 rounded">
        {blog.category || "General"}
      </span>
      <h1 className="text-3xl font-bold mt-4 text-gray-900 leading-tight">
        {blog.title}
      </h1>

      {/* Blog Image */}
      <img 
        src={displayImage} 
        alt={blog.title} 
        className="w-full h-auto max-h-[500px] object-cover rounded-lg my-6 shadow-sm" 
      />

      {/* --- CONTENT SECTION --- */}
      <div className="blog-content text-gray-900 leading-relaxed text-lg">
        {Array.isArray(blog.content) ? (
          // Handle OLD Hardcoded Data Structure (Array of sections)
          blog.content.map((section, index) => {
            if (section.type === 'heading') {
              return <h2 key={index} className="text-xl font-bold text-gray-900 mb-2 mt-6">{section.text}</h2>;
            }
            if (section.type === 'paragraph') {
              return <p key={index} className="text-gray-900 text-base mb-4">{section.text}</p>;
            }
            if (section.type === 'list') {
              return (
                <ul key={index} className="list-disc pl-6 text-gray-900 text-base mb-4">
                  {section.items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>
                  ))}
                </ul>
              );
            }
            return null;
          })
        ) : (
          // Handle NEW Backend Data (HTML String)
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        )}
      </div>


      {/* --- COMMENTS SECTION --- */}
      <div className="mb-12 border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Comments ({comments.length})
        </h2>
        
        {/* Comment List */}
        <div className="space-y-6 mb-8">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
                <img 
                    src={comment.avatar || `https://ui-avatars.com/api/?name=${comment.author || "User"}&background=random`} 
                    alt="Author" 
                    className="w-12 h-12 rounded-full mr-3 object-cover bg-gray-200" 
                />
                <div className="flex-1">
                  <div className="flex justify-between w-full">
                    <div>
                      <p className="font-bold text-lg text-gray-900">{comment.author || "Anonymous"}</p>
                      <p className="text-gray-500 text-sm flex items-center">
                        <FaCalendarAlt className="h-4 w-4 mr-1 text-[#008080]" /> 
                        {comment.date || displayDate}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-800 text-sm mt-2">{comment.text}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">No comments yet. Be the first to share your thoughts!</p>
          )}
        </div>

        {/* --- COMMENT FORM --- */}
        <h3 className="text-xl font-bold mb-4 text-gray-900">Post Comment</h3>
        <form className="space-y-4 p-6 bg-[#F8F6F3] rounded-lg border border-gray-200" onSubmit={handleSubmit}>
          
          <div className="relative">
            <textarea 
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#008080] pr-10 placeholder-gray-500 text-sm rounded transition-shadow" 
                rows="4" 
                placeholder="Type your comments...."
                required
            ></textarea>
            <FaRegEdit className="absolute right-3 top-4 text-gray-400" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#008080] pr-10 placeholder-gray-500 text-sm rounded" 
                placeholder="Type your name...." 
                required
              />
              <FaRegUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <div className="relative">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#008080] pr-10 placeholder-gray-500 text-sm rounded" 
                placeholder="Type your email...." 
                required
              />
              <FaRegEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={submitting}
            className={`bg-[#008080] text-white font-bold py-3 px-6 hover:bg-[#006666] transition duration-300 flex items-center rounded shadow-sm ${submitting ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            <FaCommentAlt className="h-4 w-4 mr-2" /> 
            {submitting ? "Posting..." : "Post Comment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogPost;