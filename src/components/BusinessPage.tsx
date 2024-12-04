import { TrendingUp, BarChart } from "lucide-react";
import NewsCard from "./NewsCard";
import { businessNews } from "./businessData";
import { Search, Bell } from "lucide-react";

export default function BusinessPage() {
  const handleSearch = () => {
    alert("Search functionality not yet implemented.");
  };

  const handleNotificationClick = () => {
    alert("No new notifications.");
  };

  // Split business news into two halves
  const articlesNews = businessNews.slice(
    0,
    Math.ceil(businessNews.length / 2)
  );
  const cardNews = businessNews.slice(Math.ceil(businessNews.length / 2));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-gray-800 text-white">
      {/* Header */}
      <header className="relative border-b border-gray-800/50 backdrop-blur-sm py-6">
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-1 animate-fadeIn">
            <img
              src="src\components\DALL_E_2024-11-09_10.59.20_-_A_modern__sleek_logo_for_a_media_company_called_PulseMedia._The_logo_should_feature_bold_and_clean_typography_for__PulseMedia__with_a_dynamic_pulse_or-removebg-preview.png"
              alt="PulseMedia Logo"
              className="w-14 h-14 transition-transform duration-500 hover:scale-110"
            />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text animate-pulse">
              PulseMedia
            </h1>
          </div>

          {/* Search and Notifications */}
          <div className="flex items-center gap-6">
            <div className="relative hidden md:flex items-center">
              <input
                type="text"
                placeholder="Search business news..."
                className="bg-gray-900/50 border border-gray-800/50 rounded-full py-2 px-4 pl-10 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 w-64 transition duration-300 ease-in-out"
              />
              <button
                onClick={handleSearch}
                className="absolute left-3 top-2.5 text-gray-500 hover:text-white transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleNotificationClick}
              className="relative text-gray-400 hover:text-white transition-colors"
            >
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full"></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[500px] mt-4 mb-8 overflow-hidden rounded-lg mx-4 lg:mx-10">
        {/* Animated Background Image */}
        <div
          className="absolute inset-0 w-full h-full rounded-lg transition-transform duration-1000 ease-in-out transform hover:scale-110"
          style={{
            backgroundImage:
              "url('https://www.shutterstock.com/image-illustration/economy-forex-market-growth-concept-600nw-2303672707.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 space-y-4">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-500 text-transparent bg-clip-text animate-fadeInUp">
            Business World
          </h1>
          <p className="text-base text-gray-200">
            Stay updated on the latest business trends, market updates, and
            insights.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("latest-articles")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-2 px-4 py-2 text-sm font-bold bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white shadow-lg hover:shadow-purple-500/40 transition-transform duration-500 transform hover:scale-110"
          >
            Discover
          </button>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 space-y-20">
        <section id="latest-articles" className="space-y-12 animate-slideIn">
          <div className="flex items-center gap-4 mb-10">
            <TrendingUp className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-500 text-transparent bg-clip-text">
              Latest Articles
            </h2>
          </div>

          <div className="space-y-8">
            {articlesNews.map((item, index) => (
              <article
                key={index}
                className="flex flex-col sm:flex-row items-center gap-6 p-6 border border-gray-800/50 rounded-lg bg-gray-900/50 shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-purple-500/50"
              >
                {/* Image */}
                <div
                  className="w-full sm:w-1/3 h-48 bg-cover bg-center rounded-lg transform transition-transform duration-500 hover:scale-110"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                ></div>

                {/* Text Content */}
                <div className="sm:w-2/3 space-y-2">
                  <h3 className="text-xl font-bold text-white mb-2 transition-opacity duration-300 hover:opacity-80">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">{item.excerpt}</p>
                  <a
                    href="#"
                    className="text-sm font-bold text-purple-500 hover:text-cyan-500 transition-colors"
                  >
                    Read more...
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Categorized News in Card Format */}
        <section id="news-cards" className="space-y-12">
          <div className="flex items-center gap-4 mb-10">
            <BarChart className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-500 text-transparent bg-clip-text">
              Explore by Category
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardNews.map((item, index) => (
              <NewsCard
                key={index}
                category={item.category}
                title={item.title}
                excerpt={item.excerpt}
                image={item.image}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
