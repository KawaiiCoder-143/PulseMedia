import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface NewsCardProps {
  category: string;
  title: string;
  excerpt: string;
  image: string;
}

export default function NewsCard({ category, title, excerpt, image }: NewsCardProps) {
  // Map categories to their respective URLs
  const categoryLinks: Record<string, string> = {
    Gaming: "https://www.bbc.com/news/topics/c008ql15vdxt",
    Music: "https://www.bbc.com/culture/music",
    Entertainment: "https://www.bbc.com/culture/entertainment-news",
    Technology: "https://www.bbc.com/innovation",
    Sports: "https://www.bbc.com/sport",
    Business: "https://www.bbc.com/business",
  };

  const redirectUrl = categoryLinks[category] || "#";

  return (
    <div className="group relative transform transition-transform duration-700 hover:scale-105 hover:z-10 hover:rotate-1">
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/90 to-gray-900/95 p-6 backdrop-blur-lg 
                      border border-gray-800/50 shadow-xl hover:shadow-blue-500/50 hover:shadow-lg transition-shadow duration-700">
        
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 border-[1.5px] border-transparent rounded-2xl group-hover:border-blue-400/50 transition-all duration-700"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/20 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Card Content */}
        <div className="relative z-10">
          {/* News Image */}
          <img
            src={image}
            alt={title}
            className="w-full h-52 object-cover rounded-lg mb-4 transform transition-transform duration-1000 
                     group-hover:scale-110 group-hover:rotate-1 group-hover:contrast-125"
          />

          {/* Category Badge */}
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-900/30 
                        rounded-full mb-3 shadow-sm">
            {category}
          </span>
          
          {/* News Title */}
          <h3 className="text-2xl font-bold text-white mb-2 leading-snug group-hover:text-blue-300 transition-colors duration-500">
            {title}
          </h3>
          
          {/* News Excerpt */}
          <p className="text-gray-400 text-sm mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors duration-500">
            {excerpt}
          </p>

          {/* Minimal Read More Button */}
          <a
            href={redirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-sm font-medium text-blue-400 underline decoration-transparent 
                       hover:text-blue-300 hover:decoration-blue-400 hover:decoration-2 transition-all duration-300"
          >
            Read More →
          </a>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-400 transition-colors duration-500 group">
              <Heart className="w-5 h-5 group-hover:scale-125 group-hover:text-red-500 transition-transform duration-300" />
              <span className="text-sm">124</span>
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-400 transition-colors duration-500 group">
              <MessageCircle className="w-5 h-5 group-hover:scale-125 group-hover:text-green-500 transition-transform duration-300" />
              <span className="text-sm">46</span>
            </button>
            <button className="ml-auto flex items-center gap-1 text-gray-500 hover:text-blue-400 transition-colors duration-500 group">
              <Share2 className="w-5 h-5 group-hover:scale-125 group-hover:text-yellow-500 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
