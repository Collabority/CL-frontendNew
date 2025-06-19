import React from 'react';
import PageHeader from '../components/PageHeader';
import BlogSidebar from '../components/BlogSidebar';
import { FaFacebookF, FaTwitter, FaBehance, FaLinkedinIn, FaYoutube, FaRegEdit, FaRegUser, FaRegEnvelope, FaGlobe, FaCommentAlt, FaReply, FaCalendarAlt } from 'react-icons/fa';

const BlogDetails = () => {
  return (
    <div className="flex-grow">
      <PageHeader title="News Details" breadcrumb="Home | Blog Details" />

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl">

        {/* Main content area */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-8">
              <span className="text-white bg-[#008080] text-xs font-semibold px-3 py-1 rounded">BUSINESS</span>
              <h1 className="text-3xl font-bold mt-4 text-gray-900">Business contents insurance is a type business insurance that can protect</h1>
              <div>
              </div>
              <p className="mt-6 text-sm text-gray-900 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p>
              <p className="mt-4 text-sm text-gray-900 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="my-8">
              <img src="src/assets/images/blog-image-1.jpg" alt="Blog Post Image" className="w-full h-auto rounded-lg" />
              <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900">A cleansing hot shower or bath</h2>
              <p className="text-gray-900 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="my-8">
              <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900">Setting the mood with incense</h2>
              <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
                <img src="src/assets/images/blog-image-2.jpg" alt="Incense Image" className="w-full md:w-1/3 h-auto rounded-lg mr-6 mb-4 md:mb-0" />
                <p className="text-gray-900 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <ul className="list-none text-sm space-y-2 mt-4">
                <li className="flex items-center text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#008080] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Lorem ipsum dolor sit amet, consectetur</li>
                <li className="flex items-center text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#008080] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Lorem ipsum dolor sit amet, consectetur</li>
                <li className="flex items-center text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#008080] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Lorem ipsum dolor sit amet, consectetur</li>
                <li className="flex items-center text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#008080] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Lorem ipsum dolor sit amet, consectetur</li>
                <li className="flex items-center text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#008080] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Lorem ipsum dolor sit amet, consectetur</li>
                <li className="flex items-center text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#008080] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Lorem ipsum dolor sit amet, consectetur</li>
              </ul>
            </div>

            <div className="bg-[#F8F6F3] p-8 my-8 rounded-lg text-center">
              <p className="text-xl italic font-semibold text-gray-900">by Hetmayar</p>
              <p className="text-2xl md:text-3xl font-bold mt-4 leading-relaxed text-gray-900">
                Choices to take a holiday and travelling out in this pandemic situation are limited. Why not take a staycation.
              </p>
            </div>

            <p className="mt-8 text-gray-900 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="flex flex-col md:flex-row items-start md:items-center mt-8 mb-8">
              <img src="src/assets/images/blog-image-3.jpg" alt="Consulting Image" className="w-full md:w-1/3 h-auto rounded-lg mr-6 mb-4 md:mb-0" />
              <p className="text-gray-900 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            <div className="flex justify-between items-center my-8 pt-8 border-t border-gray-200">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Releted Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-200 text-gray-900 text-sm px-3 py-1 rounded-full">Popular</span>
                  <span className="bg-gray-200 text-gray-900 text-sm px-3 py-1 rounded-full">Desgin</span>
                  <span className="bg-gray-200 text-gray-900 text-sm px-3 py-1 rounded-full">UX</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Social Share</h3>
                <div className="flex space-x-3 text-gray-900">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaBehance /></a>
                  <a href="#"><FaLinkedinIn /></a>
                  <a href="#"><FaYoutube /></a>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center my-8 py-4 border-y border-gray-200">
              <div className="font-semibold text-gray-900">
                <p className="text-sm text-gray-900">Prev Post</p>
                Tips On Minimalist
              </div>
              <div className="text-[#008080]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              </div>
              <div className="font-semibold text-right text-gray-900">
                <p className="text-sm text-gray-900">Next Post</p>
                Less Is More
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-900">Releted Post</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="border-gray-500 overflow-hidden shadow-sm">
                <img src="src/assets/images/related-blog-1.jpg" alt="Related Post Image" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <p className="text-gray-900 text-sm mb-2 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h.01M12 11h.01M16 11h.01M9 15h.01M12 15h.01M16 15h.01M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> 24th March 2020</p>
                  <h3 className="font-bold text-lg leading-snug mb-2 text-gray-900">A series of IOS 7 inspire vector icons sense.</h3>
                  <p className="text-gray-900 text-sm">Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed do doing.</p>
                </div>
              </div>
              <div className="border-gray-500 overflow-hidden shadow-sm">
                <img src="src/assets/images/related-blog-2.jpg" alt="Related Post Image" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <p className="text-gray-900 text-sm mb-2 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h.01M12 11h.01M16 11h.01M9 15h.01M12 15h.01M16 15h.01M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> 24th March 2020</p>
                  <h3 className="font-bold text-lg leading-snug mb-2 text-gray-900">A series of IOS 7 inspire vector icons sense.</h3>
                  <p className="text-gray-900 text-sm">Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed do doing.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 border border-gray-300 mb-8">
              <div className="flex items-center">
                <img src="src/assets/images/author.jpg" alt="Author" className="w-64 h-40 mr-8 object-cover" />
                <div>
                  <h3 className="font-bold text-base text-[#008080]">Written by</h3>
                  <p className="text-3xl font-bold text-gray-900 mb-2">Rosalina D. William</p>
                  <p className="text-gray-900 leading-relaxed text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">03 Comments</h2>
            <div className="space-y-8 mb-8">
              {/* Comment 1 */}
              <div className="flex items-start pb-8 border-b border-gray-300">
                <img src="src/assets/images/comment-author-1.jpg" alt="Comment Author" className="w-12 h-12 rounded-full mr-3 object-cover" />
                <div className="flex-1">
                  <div className="flex justify-between w-full">
                    <div>
                      <p className="font-bold text-lg text-gray-900">Rosalina Kelian</p>
                      <p className="text-gray-500 text-sm flex items-center"><FaCalendarAlt className="h-4 w-4 mr-1 text-[#008080]" /> 24th March 2020</p>
                    </div>
                    <button className="mt-0.5 px-4 py-2 border border-[#008080] text-[#008080] font-semibold flex items-center transition duration-300 hover:bg-[#008080] hover:text-white">
                      <FaReply className="h-4 w-4 mr-1" /> Reply
                    </button>
                  </div>
                  <p className="text-gray-900 text-sm leading-normal mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              {/* Comment 2 */}
              <div className="flex items-start pb-8 border-b border-gray-300">
                <img src="src/assets/images/comment-author-2.jpg" alt="Comment Author" className="w-12 h-12 rounded-full mr-3 object-cover" />
                <div className="flex-1">
                  <div className="flex justify-between w-full">
                    <div>
                      <p className="font-bold text-lg text-gray-900">Rosalina Kelian</p>
                      <p className="text-gray-500 text-sm flex items-center"><FaCalendarAlt className="h-4 w-4 mr-1 text-[#008080]" /> 24th March 2020</p>
                    </div>
                    <button className="mt-0.5 px-4 py-2 border border-[#008080] text-[#008080] font-semibold flex items-center transition duration-300 hover:bg-[#008080] hover:text-white">
                      <FaReply className="h-4 w-4 mr-1" /> Reply
                    </button>
                  </div>
                  <p className="text-gray-900 text-sm leading-normal mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              {/* Comment 3 */}
              <div className="flex items-start pb-8 border-b border-gray-300">
                <img src="src/assets/images/comment-author-3.jpg" alt="Comment Author" className="w-12 h-12 rounded-full mr-3 object-cover" />
                <div className="flex-1">
                  <div className="flex justify-between w-full">
                    <div>
                      <p className="font-bold text-lg text-gray-900">Rosalina Kelian</p>
                      <p className="text-gray-500 text-sm flex items-center"><FaCalendarAlt className="h-4 w-4 mr-1 text-[#008080]" /> 24th March 2020</p>
                    </div>
                    <button className="mt-0.5 px-4 py-2 border border-[#008080] text-[#008080] font-semibold flex items-center transition duration-300 hover:bg-[#008080] hover:text-white">
                      <FaReply className="h-4 w-4 mr-1" /> Reply
                    </button>
                  </div>
                  <p className="text-gray-900 text-sm leading-normal mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-900">Post Comment</h2>
            <form className="space-y-4 p-8 bg-[#F8F6F3]">
              <div className="relative">
                <textarea className="w-full p-4 border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#008080] pr-10 placeholder-gray-900 text-sm text-base" rows="6" placeholder="Type your comments...."></textarea>
                <FaRegEdit className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-900" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input type="text" className="w-full p-4 border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#008080] pr-10 placeholder-gray-900 text-sm text-base" placeholder="Type your name...." />
                  <FaRegUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-900" />
                </div>
                <div className="relative">
                  <input type="email" className="w-full p-4 border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#008080] pr-10 placeholder-gray-900 text-sm text-base" placeholder="Type your email...." />
                  <FaRegEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-900" />
                </div>
              </div>
              <div className="relative">
                <input type="text" className="w-full p-4 border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#008080] pr-10 placeholder-gray-900 text-sm text-base" placeholder="Type your website...." />
                <FaGlobe className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-900" />
              </div>
              <button type="submit" className="bg-[#008080] text-white font-bold py-3 px-6 hover:bg-[#006666] transition duration-300 flex items-center">
                <FaCommentAlt className="h-5 w-5 mr-2" /> Post Comment
              </button>
            </form>
          </div>
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
