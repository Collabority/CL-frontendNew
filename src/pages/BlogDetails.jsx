import React from 'react';
import PageHeader from '../components/PageHeader';
import BlogSidebar from '../components/BlogSidebar';
import { FaFacebookF, FaTwitter, FaBehance, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const BlogDetails = () => {
  return (
    <div className="flex-grow">
      <PageHeader title="News Details" breadcrumb="Home | Blog Details" />

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content area */}
        <div className="lg:col-span-2">
        </div>

        {/* Sidebar area */}
        <div className="lg:col-span-1">
          <div className="scroll-animate slide-in-right">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
