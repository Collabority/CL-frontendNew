export default function NewsFeedCard({ imageNum }) {
  return (
    <div className="rounded-md overflow-hidden group cursor-pointer mt-4 font-poppins">
      <div className="relative h-74">
        <img
          src=""
          alt={`News feed ${imageNum}`}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="bg-gray-900 text-white p-6">
        <p className="mb-3">2024 May 22</p>
        <h3 className="font-semibold mb-2">Solution for marketing automation</h3>
        <p className="font-poppins">
          To maximize the performance of your content marketing strategy, you
          must understand how to use the technology available to marketers today.
        </p>
      </div>
    </div>
  );
}