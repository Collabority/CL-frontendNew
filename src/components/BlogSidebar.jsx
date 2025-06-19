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
    <div className="space-y-11">

      {/*About me */}
      <div className="bg-[#F8F6F3] border-2 border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="w-4 h-8 bg-[#008080] rounded-none mr-3"></span>
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
          <h4 className="text-xl font-bold text-gray-900 mb-4">
            Rosalina D. Willaimson
          </h4>
          <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consecte-tur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              className="text-gray-500 hover:text-[#008080] transition-colors"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"  
              className="text-gray-500 hover:text-[#008080] transition-colors"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://behance.com"
              className="text-gray-500 hover:text-[#008080] transition-colors"
            >
              <FaBehance className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-500 hover:text-[#008080] transition-colors"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              className="text-gray-500 hover:text-[#008080] transition-colors"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/*Search objects */}
      <div className="bg-[#F8F6F3] rounded-none border-2 border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="w-4 h-8 bg-[#008080] rounded-none mr-3"></span>
          Search Objects
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search your keyword..."
            className="w-full pl-4 pr-12 py-3 bg-gray-50 text-sm text-gray-600 rounded-none focus:outline-none focus:ring-2 focus:ring-[#008080] transition-all"
          />
          <button className="absolute right-0 top-0 h-full btn-primary rounded-none border-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Popular feeds */}
      <div className="bg-[#F8F6F3] rounded-none border-2 border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="w-4 h-8 bg-[#008080] rounded-none mr-3"></span>
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
                <h4 className="text-gray-900 text-base mb-1 group-hover:text-[#008080] transition-colors">
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

      {/* categories */}
      <div className="bg-[#F8F6F3] rounded-none border-2 border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="w-4 h-8 bg-[#008080] rounded-none mr-3"></span>
          Categories
        </h3>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-4 bg-gray-900 text-white rounded-none cursor-pointer hover:bg-opacity-90 transition-colors"
            >
              <span>{category.name}</span>
              <span>{category.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/*Never miss news */}
      <div className="bg-[#F8F6F3] rounded-none border-2 border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="w-4 h-8 bg-[#008080] rounded-none mr-3"></span>
          Never Miss News
        </h3>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="text-gray-500 hover:text-[#008080] transition-colors">
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-[#008080] transition-colors">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-[#008080] transition-colors">
            <FaBehance className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-[#008080] transition-colors">
            <FaLinkedinIn className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-[#008080] transition-colors">
            <FaYoutube className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Twitter feeds */}
      <div className="bg-[#F8F6F3] rounded-none border-2 border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="w-4 h-8 bg-[#008080] rounded-none mr-3"></span>
          Twitter Feeds
        </h3>
        <div className="space-y-6">
          {twitterFeeds.map((feed, index) => (
            <div key={index} className="pb-4 border-b border-gray-200 last:border-b-0">
              <p className="text-gray-700 text-sm mb-2 leading-relaxed">
                {feed.content.split(' ').map((word, i) => (
                  word.startsWith('#') || word.startsWith('http') ? 
                    <a key={i} href={word.startsWith('http') ? word : `#`} className="text-[#008080] hover:underline">{word} </a> :
                    <span key={i}>{word} </span>
                ))}
              </p>
              <p className="text-gray-500 text-xs">{feed.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram feeds */}
      <div className="bg-[#F8F6F3] rounded-none border-2 border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="w-4 h-8 bg-[#008080] rounded-none mr-3"></span>
          Instagram Feeds
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {instagramImages.map((image, index) => (
            <div key={index} className="w-24 h-24 overflow-hidden rounded-none cursor-pointer group">
              <img 
                src={image} 
                alt={`Instagram ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Popular tags */}
      <div className="bg-[#F8F6F3] rounded-none border-2 border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="w-4 h-8 bg-[#008080] rounded-none mr-3"></span>
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-[#008080] hover:text-white transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Ad banner*/}
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