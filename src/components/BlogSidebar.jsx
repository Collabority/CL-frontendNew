import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaBehance, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter, FaFacebookF as FaFacebookF6, FaLinkedinIn as FaLinkedinIn6, FaYoutube as FaYoutube6, FaInstagram, FaEnvelope } from 'react-icons/fa6';


const BlogSidebar = () => {
  const popularPosts = [
    {
      title: "Emerging Trends in Information Technology",
      date: "10th June 2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Mastering Digital Marketing in 2024",
      date: "5th June 2024",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
    },
    {
      title: "UI/UX Design Principles for Modern Products",
      date: "1st June 2024",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    },
    {
      title: "Financial Modelling: Skills for Bankers & Analysts",
      date: "28th May 2024",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    }
  ]

  const categories = [
    { name: "Information Technology", count: 42 },
    { name: "Digital Marketing", count: 27 },
    { name: "Banking Sales", count: 18 },
    { name: "UI/UX Design", count: 22 },
    { name: "Product Management", count: 24 },
    { name: "Financial Modelling", count: 16 },
    { name: "Full Stack Development", count: 30 },
    { name: "Data Science", count: 28 },
    { name: "Business", count: 31 },
  ]

  const twitterFeeds = [
    {
      content: "Just launched a new Full Stack Development bootcamp! #FullStack #WebDev https://t.co/fullstack2024",
      date: "June 10, 2024"
    },
    {
      content: "Digital marketing strategies are evolving with AI. Stay ahead! #DigitalMarketing #AI https://t.co/digimktg",
      date: "June 7, 2024"
    },
    {
      content: "UI/UX design is at the heart of great product experiences. #UIUX #Design https://t.co/uiuxdesign",
      date: "June 3, 2024"
    },
    {
      content: "Financial modelling is a must-have skill for banking professionals. #Finance #Modelling https://t.co/finmodelling",
      date: "May 29, 2024"
    }
  ]

  const instagramImages = [
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1503676382389-4809596d5290",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  ]

  const tags = [
    "IT", "Management", "Digital Marketing", "UI/UX Design", "Human Resource Management", "Product Management", "Financial Modelling", "Data Science", "Business", "Innovation", "AI"
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
              src="https://randomuser.me/api/portraits/men/43.jpg"
              alt="Alex Morgan"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-4">
            Alex Morgan
          </h4>
          <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
            Blogger, educator, and tech enthusiast. I write about IT, management, digital marketing, UI/UX design, financial modelling, and more. Join me as I explore the latest trends and share insights from the world of professional education and innovation!
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
                <h4 className="text-gray-900 text-sm mb-1 group-hover:text-[#008080] transition-colors">
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
        <div className="flex justify-center space-x-4 mb-4 mt-4">
          <a href="https://x.com/Collabority" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 hover:text-black text-xl"><FaXTwitter /></a>
          <a href="https://facebook.com/collaborityofficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-[#1877F3] text-xl"><FaFacebookF6 /></a>
          <a href="https://www.linkedin.com/company/collaborityofficial/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-[#0A66C2] text-xl"><FaLinkedinIn6 /></a>
          <a href="https://youtube.com/@collaborityofficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-500 hover:text-[#FF0000] text-xl"><FaYoutube6 /></a>
          <a href="https://www.instagram.com/collaborityofficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-[#E4405F] text-xl"><FaInstagram /></a>
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
            <div key={index} className="w-21 h-21 overflow-hidden rounded-none cursor-pointer group">
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