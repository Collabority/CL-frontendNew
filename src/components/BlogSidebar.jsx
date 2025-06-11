import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaBehance, FaLinkedinIn, FaYoutube } from 'react-icons/fa';


const BlogSidebar = () => {
  const popularPosts = [
    {
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      date: "24th March 2019",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
    },
    {
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      date: "24th March 2019",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      date: "24th March 2019",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
    },
    { 
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      date: "24th March 2019",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
    }
  ]

  const categories = [
    { name: "Business", count: 26 },
    { name: "Consultant", count: 30 },
    { name: "Creative", count: 71 },
    { name: "UI/UX", count: 56 },
    { name: "Technology", count: 60 }
  ]

  const twitterFeeds = [
    {
      content: "Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest https://t.co/2r1POjOjgV C… https://t.co/rDAnPyClu1",
      date: "November 25, 2018"
    },
    {
      content: "Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest https://t.co/2r1POjOjgV C… https://t.co/rDAnPyClu1",
      date: "November 25, 2018"
    },
    {
      content: "Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest https://t.co/2r1POjOjgV C… https://t.co/rDAnPyClu1",
      date: "November 25, 2018"
    }
  ]

  const instagramImages = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    "https://images.unsplash.com/photo-1552664730-d307ca884978",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
  ]

  const tags = [
    "Popular", "desgin", "ux", "usability", "develop", "icon", 
    "business", "consult", "kit", "keyboard", "mouse", "tech"
  ]

  return (
    <div className="space-y-12">

      {/*About Me section */}
      <div className="bg-white rounded-none border-2 border-[#e2e8f0] p-8">
        <h3 className="text-2xl font-bold text-[#001233] mb-6 flex items-center">
          <span className="w-4 h-8 bg-blue-600 rounded-none mr-3"></span>
          About Me
        </h3>
        <div className="text-center">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1747734786792-317d1d8e8690?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
              alt="Rosalina D. Willaimson"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="text-xl font-bold text-[#001233] mb-4">
            Rosalina D. Willaimson
          </h4>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consecte-tur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              className="text-[#E2E8F0] hover:text-blue-600 transition-colors"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"  
              className="text-[#E2E8F0] hover:text-blue-600 transition-colors"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://behance.com"
              className="text-[#E2E8F0] hover:text-blue-600 transition-colors"
            >
              <FaBehance className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-[#E2E8F0] hover:text-blue-600 transition-colors"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              className="text-[#E2E8F0] hover:text-blue-600 transition-colors"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/*Search Objects section */}
      <div className="bg-white rounded-none border-2 border-[#e2e8f0] p-8">
        <h3 className="text-2xl font-bold text-[#001233] mb-6 flex items-center">
          <span className="w-4 h-8 bg-blue-600 rounded-none mr-3"></span>
          Search Objects
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search your keyword..."
            className="w-full pl-4 pr-12 py-3 bg-gray-50 text-gray-600 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
          />
          <button className="absolute right-0 top-0 h-full btn-primary rounded-none border-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Popular Feeds */}
      <div className="bg-white rounded-none border-2 border-[#e2e8f0] p-8">
        <h3 className="text-2xl font-bold text-[#001233] mb-6 flex items-center">
          <span className="w-4 h-8 bg-blue-600 rounded-none mr-3"></span>
          Popular Feeds
        </h3>
        <div className="space-y-6">
          {popularPosts.map((post, index) => (
            <div key={index} className="flex items-center space-x-4 group cursor-pointer">
              <div className="w-20 h-20 rounded-none overflow-hidden flex-shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="text-[#001233] font-medium mb-1 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h4>
                <div className="flex items-center text-gray-500 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {post.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-none border-2 border-[#e2e8f0] p-8">
        <h3 className="text-2xl font-bold text-[#001233] mb-6 flex items-center">
          <span className="w-4 h-8 bg-blue-600 rounded-none mr-3"></span>
          Categories
        </h3>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-4 bg-[#0A2647] text-white rounded-none cursor-pointer hover:bg-opacity-90 transition-colors"
            >
              <span>{category.name}</span>
              <span>{category.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/*Never Miss News section */}
      <div className="bg-white rounded-none border-2 border-[#e2e8f0] p-8">
        <h3 className="text-2xl font-bold text-[#001233] mb-6 flex items-center">
          <span className="w-4 h-8 bg-blue-600 rounded-none mr-3"></span>
          Never Miss News
        </h3>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            className="w-10 h-10 bg-[#0A2647] text-white flex items-center justify-center rounded-none hover:bg-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
          <a
            href="https://twitter.com"
            className="w-10 h-10 bg-[#0A2647] text-white flex items-center justify-center rounded-none hover:bg-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a
            href="https://behance.com"
            className="w-10 h-10 bg-[#0A2647] text-white flex items-center justify-center rounded-none hover:bg-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            className="w-10 h-10 bg-[#0A2647] text-white flex items-center justify-center rounded-none hover:bg-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
          </a>
          <a
            href="https://pinterest.com"
            className="w-10 h-10 bg-[#0A2647] text-white flex items-center justify-center rounded-none hover:bg-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>

      {/*Twitter Feeds section */}
      <div className="bg-white rounded-none border-2 border-[#e2e8f0] p-8">
        <h3 className="text-2xl font-bold text-[#001233] mb-6 flex items-center">
          <span className="w-4 h-8 bg-blue-600 rounded-none mr-3"></span>
          Twitter Feeds
        </h3>
        <div className="space-y-6">
          {twitterFeeds.map((tweet, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <p className="text-blue-600 hover:underline">{tweet.content}</p>
              </div>
              <p className="text-gray-500 text-sm">{tweet.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram Feeds section*/}
      <div className="bg-white rounded-none border-2 border-[#e2e8f0] p-8">
        <h3 className="text-2xl font-bold text-[#001233] mb-6 flex items-center">
          <span className="w-4 h-8 bg-blue-600 rounded-none mr-3"></span>
          Instagram Feeds
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {instagramImages.map((image, index) => (
            <div key={index} className="aspect-square rounded-none overflow-hidden group cursor-pointer">
              <img 
                src={image} 
                alt={`Instagram feed ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags section*/}
      <div className="bg-white rounded-none border-2 border-[#e2e8f0] p-8">
        <h3 className="text-2xl font-bold text-[#001233] mb-6 flex items-center">
          <span className="w-4 h-8 bg-blue-600 rounded-none mr-3"></span>
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-600 rounded-none hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Ad. Banner section*/}
      <div className="relative aspect-[3/5] rounded-none border-2 border-[#e2e8f0] overflow-hidden group cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
          alt="Advertisement"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001233]/90 via-[#001233]/50 to-transparent flex items-center justify-center">
          <div className="text-center text-white transform transition-transform duration-500 group-hover:translate-y-2">
            <div className="text-lg font-light mb-2">Advertisement</div>
            <div className="text-3xl font-bold">
              Business
              <br />
              Solutions
            </div>
            <div className="mt-4 inline-block px-6 py-2 border-2 border-white hover:bg-white hover:text-[#001233] transition-colors">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSidebar 