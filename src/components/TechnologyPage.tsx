import { TrendingUp, Search, Bell } from "lucide-react";
import NewsCard from "./NewsCard";
import { technologyNews } from "./technologyData";

export default function TechnologyPage() {
  const handleSearch = () => {
    alert("Search functionality not yet implemented.");
  };

  const handleNotificationClick = () => {
    alert("No new notifications.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-950 to-purple-950 text-white">
      {/* Header */}
      <header className="relative border-b border-gray-800/50 backdrop-blur-sm py-6 animate-slideInDown">
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <img
              src="https://i.ibb.co/RpQ48KR/DALL-E-2024-11-09-10-59-20-A-modern-sleek-logo-for-a-media-company-called-Pulse-Media-The-logo-shoul.png"
              alt="PulseMedia Logo"
              className="w-14 h-14 transition-transform duration-500 hover:scale-110 will-change-transform"
              loading="lazy"
            />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text animate-pulse">
              PulseMedia
            </h1>
          </div>

          {/* Search and Notifications */}
          <div className="flex items-center gap-6">
            <div className="relative hidden md:flex items-center">
              <input
                type="text"
                placeholder="Search news..."
                className="bg-gray-900/50 border border-gray-800/50 rounded-full py-2 px-4 pl-10 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-64 transition duration-300 ease-in-out"
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
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[500px] mt-4 mb-4 overflow-hidden rounded-lg mx-4 lg:mx-10">
        <div
          className="absolute inset-0 w-[calc(150%+140px)] h-full rounded-lg transition-transform duration-1000 ease-in-out transform hover:scale-110 will-change-transform"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/gradient-technology-futuristic-background_23-2149115239.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(3px)",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 space-y-4 animate-fadeInUp">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Technology Insights
          </h1>
          <p className="text-base text-white">
            Discover the latest trends, innovations, and breakthroughs in the
            world of technology.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("latest-articles")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-2 px-4 py-2 text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white shadow-lg hover:shadow-indigo-500/40 transition-transform duration-500 transform hover:scale-110"
          >
            Explore
          </button>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 space-y-20">
        {/* Latest Articles Section */}
        <section id="latest-articles" className="space-y-12">
          <div className="flex items-center gap-4 mb-10 animate-fadeIn">
            <TrendingUp className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Latest Articles
            </h2>
          </div>
          <div className="space-y-12">
            {technologyNews.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 p-6 rounded-lg bg-gradient-to-r from-gray-800/60 to-gray-700/40 hover:shadow-xl transition-shadow duration-500 animate-fadeInUp"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full md:w-1/3 h-48 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 will-change-transform"
                  loading="lazy"
                />
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-400 bg-indigo-900/30 rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 leading-tight text-indigo-100">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-3">
                    {item.excerpt}
                  </p>
                  <a
                    href="https://www.bbc.com/innovation"
                    className="text-blue-400 mt-4 inline-block hover:underline"
                  >
                    Read more...
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI and Gadgets Section */}
        <section className="space-y-16 animate-fadeIn">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            AI and Gadgets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {technologyNews.slice(0, 2).map((item, index) => (
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

        {/* Cybersecurity and Blockchain Section */}
        <section className="space-y-16 animate-fadeInUp">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Cybersecurity & Blockchain
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {technologyNews.slice(2, 4).map((item, index) => (
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
