export default function NewsFeedCard({ news }) {
  return (
    <div className="rounded-md overflow-hidden group cursor-pointer mt-4 font-poppins">
      <div className="relative h-74">
        <img
          src={news.image}
          alt={news.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="bg-gray-900 text-white p-6">
        <p className="mb-3">{news.date}</p>
        <h3 className="font-semibold mb-2">{news.title}</h3>
        <p className="font-poppins">{news.description}</p>
      </div>
    </div>
  );
}
