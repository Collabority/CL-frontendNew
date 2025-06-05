import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8 mb-8">
          {/* logo and text */}
          <div className="col-span-1">
            <div className="text-white text-2xl font-bold mb-4">OmniVus.</div>
            <p className="text-sm leading-relaxed mb-4">
              The web has changed a lot since Vitaly posted his first article back in 2006. The team at Smashing has changed too, as have the things that we bring to our community onferences, books, and our membership added to the online magazine.
            </p>
            <p className="text-sm leading-relaxed">
              One thing that hasn't changed is that we're a small team - with most of us not working
            </p>
          </div>

          {/* pages links*/}
          <div className="col-span-1 md:ml-24">
            <h4 className="text-white text-lg font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white"> Home</a></li>
              <li><a href="#" className="hover:text-white"> About</a></li>
              <li><a href="#" className="hover:text-white"> Services</a></li>
            </ul>
          </div>

          {/* working hours */}
          <div className="col-span-1">
            <h4 className="text-white text-lg font-semibold mb-4">Working Hours</h4>
            <p className="text-sm mb-4">Monday - Friday: 7:00 - 17:00</p>
            <p className="text-sm mb-4">Saturday: 7:00 - 12:00</p>
            <p className="text-sm mb-4">Sunday and holidays: 8:00 - 10:00</p>
            <p className="text-sm mt-6 mb-2">For more then 30 years, IT Service has been a reliable partner in the field of logistics and cargo forwarding.</p>
            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">&gt; Discover More</a>
          </div>
        </div>

        {/* copyright */}
        <div className="text-center text-sm">
          Copyright By@ WebTend - 2025
        </div>
    
      </div>
    </footer>
  );
};

export default Footer; 