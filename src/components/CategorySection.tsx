import NewsCard from "./NewsCard";
import { Newspaper } from "lucide-react";

interface CategorySectionProps {
  title: string;
  news: Array<{
    title: string;
    excerpt: string;
    image: string;
  }>;
}

export default function CategorySection({ title, news }: CategorySectionProps) {
  return (
    <section className="space-y-12 animate-slideIn">
      {/* Section Header */}
      <div className="flex items-center gap-4">
        <div
          className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/20 rounded-full shadow-xl 
                        hover:shadow-blue-400/30 transition-shadow duration-700"
        >
          <Newspaper className="w-7 h-7 text-blue-400" />
        </div>
        <h2
          className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text 
                      transform transition-transform duration-500 hover:scale-105"
        >
          {title}
        </h2>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {news.map((item, index) => (
          <NewsCard
            key={index}
            category={title}
            title={item.title}
            excerpt={item.excerpt}
            image={item.image}
          />
        ))}
      </div>

      {/* Divider Line */}
      <div className="border-b border-gray-800/50 mt-10"></div>
    </section>
  );
}
