import { useState } from "react";
import { Bell } from "lucide-react";
import axios from "axios";

export default function EnhancedLiveUpdatesPage() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);

  interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
  }

  interface Suggestion {
    title: string;
  }

  const fetchSuggestions = async (query: string): Promise<void> => {
    try {
      const response = await axios.get<{ articles: Suggestion[] }>(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=57d768345f574230841e82f469f658b0`
      );
      setSuggestions(response.data.articles.slice(0, 5));
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleSearch = async () => {
    if (!query) {
      alert("Please enter a search query.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=57d768345f574230841e82f469f658b0`
      );
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
      alert("Failed to fetch news. Please try again.");
    }
    setLoading(false);
    setSuggestions([]);
  };

  const handleNotificationClick = () => {
    alert("No new notifications.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-gray-800 text-white animate-fadeInSlow">
      {/* Header */}
      <header className="relative border-b border-gray-800/50 backdrop-blur-sm py-6">
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-1 animate-fadeIn">
            <img
              src="https://i.ibb.co/RpQ48KR/DALL-E-2024-11-09-10-59-20-A-modern-sleek-logo-for-a-media-company-called-Pulse-Media-The-logo-shoul.png"
              alt="PulseMedia Logo"
              className="w-14 h-14 transition-transform duration-500 hover:scale-110"
            />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text animate-pulse">
              PulseMedia
            </h1>
          </div>

          {/* Notifications */}
          <button
            onClick={handleNotificationClick}
            className="relative text-gray-400 hover:text-white transition-colors"
          >
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full"></span>
          </button>
        </nav>
      </header>

      {/* Search Bar */}
      <section className="relative container mx-auto px-6 py-10">
        <div className="relative flex items-center justify-center animate-slideIn space-x-4">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search for live news..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (e.target.value.length > 2) fetchSuggestions(e.target.value);
              }}
              className="bg-gray-900/50 border border-gray-800/50 rounded-full py-3 px-6 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 w-full transition duration-300 ease-in-out"
            />
            {suggestions.length > 0 && (
              <ul className="absolute top-12 left-0 right-0 bg-gray-800/70 rounded-lg shadow-lg z-10 overflow-hidden animate-fadeIn">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="py-2 px-4 hover:bg-gray-700/70 text-sm text-gray-300 cursor-pointer"
                    onClick={() => {
                      setQuery(suggestion.title);
                      setSuggestions([]);
                    }}
                  >
                    {suggestion.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            onClick={handleSearch}
            className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white shadow-lg hover:shadow-purple-500/40 transition-transform duration-500 transform hover:scale-110"
          >
            Search
          </button>
        </div>
        {/* Hardcoded Suggestions */}
        <div className="mt-4 flex justify-center gap-4 animate-fadeIn">
          {["Sports", "Technology", "Business", "Health", "Entertainment"].map(
            (category, index) => (
              <button
                key={index}
                onClick={() => {
                  setQuery(category);
                  handleSearch();
                }}
                className="px-3 py-1 text-sm bg-gray-700/50 rounded-full text-gray-300 hover:bg-purple-500/70 hover:text-white transition-colors"
              >
                {category}
              </button>
            )
          )}
        </div>
      </section>

      {/* Articles Section */}
      <div className="container mx-auto px-6 py-10">
        {loading ? (
          <p className="text-center text-lg text-gray-300 animate-pulse">
            Loading news...
          </p>
        ) : articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeInSlow">
            {articles.map((article, index) => (
              <article
                key={index}
                className="flex flex-col items-start gap-4 p-6 border border-gray-800/50 rounded-lg bg-gray-900/50 shadow-lg hover:shadow-purple-500/20 transform transition-all duration-500 hover:scale-105"
              >
                {/* Article Image */}
                {article.urlToImage && (
                  <div
                    className="w-full h-48 bg-cover bg-center rounded-lg"
                    style={{
                      backgroundImage: `url(${article.urlToImage})`,
                    }}
                  ></div>
                )}

                {/* Article Content */}
                <h3 className="text-lg font-bold text-white">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-300">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-purple-500 hover:text-cyan-500 transition-colors"
                >
                  Read more...
                </a>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-400">
            No articles to display. Start searching!
          </p>
        )}
      </div>
    </div>
  );
}
