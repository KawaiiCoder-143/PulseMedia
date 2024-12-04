import { useState, useEffect } from "react";
import CategorySection from "./CategorySection";
import { Search, Bell } from "lucide-react";

// News data
const newsData = {
  technology: [
    {
      title: "AI Revolutionizing Healthcare Diagnostics",
      excerpt:
        "Cutting-edge AI algorithms now outperform doctors in diagnosing critical diseases.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Breakthrough in Quantum Computing",
      excerpt:
        "Scientists develop a new quantum chip that solves complex equations instantly.",
      image:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Future of Smartphones: Foldable Tech",
      excerpt:
        "Foldable screens are set to revolutionize how we use mobile devices.",
      image:
        "https://images.unsplash.com/photo-1657731739861-b21d95062cbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  sports: [
    {
      title: "Epic Showdown in the Grand Slam",
      excerpt:
        "The final match between top players keeps fans on the edge of their seats.",
      image:
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "National Team Wins Historic Gold",
      excerpt:
        "A triumphant victory in the world championships after years of dedication.",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=2069",
    },
    {
      title: "Revolutionary Training Methods",
      excerpt: "How tech is transforming athlete preparation and performance.",
      image:
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&q=80&w=2068",
    },
  ],
  entertainment: [
    {
      title: "New Sci-Fi Thriller Breaks Box Office Records",
      excerpt:
        "The latest blockbuster leaves audiences stunned with its mind-bending plot.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2025",
    },
    {
      title: "Top Music Festival Goes Virtual",
      excerpt:
        "An immersive experience bringing fans together from around the world.",
      image:
        "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Gaming Streamer Raises Millions for Charity",
      excerpt:
        "The live event draws in millions of viewers and supports global causes.",
      image:
        "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&q=80&w=2056",
    },
  ],
  business: [
    {
      title: "Stock Market Hits Record Highs",
      excerpt: "Investors are optimistic despite economic uncertainty.",
      image:
        "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Startups Transforming the Tech Landscape",
      excerpt: "Innovative startups are disrupting traditional industries.",
      image:
        "https://images.unsplash.com/photo-1521540216272-a50305cd4421?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Green Energy Investments on the Rise",
      excerpt: "Investors shift focus to sustainable energy projects.",
      image:
        "https://img.freepik.com/free-photo/close-up-environment-project_23-2148894106.jpg?ga=GA1.1.969179014.1727619665&semt=ais_hybrid",
    },
  ],
  music: [
    {
      title: "Top Hits of 2024: Must-Listen Tracks",
      excerpt: "A roundup of the most popular songs dominating the charts.",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=2069",
    },
    {
      title: "Live Concerts Are Back",
      excerpt: "Ed Sheeran and Diljit Dosanjh jamming to a Punjabi song seems unbelievable. But they did. On March 16 this year.",
      image:
        "https://media.istockphoto.com/id/2160301694/photo/man-in-black-cowboy-hat-at-huercasa-country-festival-2018.webp?a=1&b=1&s=612x612&w=0&k=20&c=gKbsLJ3r0DwkU1aZWkP8bE0UNuE8g5p2JSqY8CK1I_4=",
    },
    {
      title: "Music Streaming Trends for 2025",
      excerpt: "How the industry is evolving with new streaming platforms.",
      image:
        "https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWMlMjBzdHJlYW1pbmd8ZW58MHx8MHx8fDA%3D",
    },
  ],
  gaming: [
    {
      title: "Top 5 Upcoming Games to Watch Out For",
      excerpt:
        "The most anticipated releases set to dominate the gaming world.",
      image:
        "https://i.pinimg.com/736x/28/11/f3/2811f3dce460bcb9040fb13ce9767865.jpg",
    },
    {
      title: "Esports Tournament Draws Record Viewership",
      excerpt: "Millions tune in for the thrilling championship matches.",
      image:
        "https://media.istockphoto.com/id/1408511405/photo/girl-in-video-game-club.webp?a=1&b=1&s=612x612&w=0&k=20&c=VgtsDdCt2NuFjVf3hTuXSL9k9GSQBoRRmjngbowB7dk=",
    },
    {
      title: "The Rise of VR Gaming",
      excerpt:
        "Virtual reality is set to transform the gaming industry forever.",
      image:
        "https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ],
};

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderImages = [
    "https://img.freepik.com/premium-vector/internet-technology-internationalization-globalization-futuristic-space-exhibition-hall-vector-backg_476006-583.jpg?ga=GA1.1.969179014.1727619665&semt=ais_hybrid",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=2070",
    "https://img.freepik.com/free-photo/planet-earth-background_23-2150564686.jpg?semt=ais_hybrid",
    "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=2070",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const handleSearch = () => {
    alert("Search functionality not yet implemented.");
  };

  const handleNotificationClick = () => {
    alert("No new notifications.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-purple-950 relative">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[400px] h-[400px] -top-36 -left-36 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bottom-20 right-0 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="relative border-b border-gray-800/50 backdrop-blur-sm py-6">
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-1 animate-fadeIn">
            <img
              src="/src/components/DALL_E_2024-11-09_10.59.20_-_A_modern__sleek_logo_for_a_media_company_called_PulseMedia._The_logo_should_feature_bold_and_clean_typography_for__PulseMedia__with_a_dynamic_pulse_or-removebg-preview.png"
              alt="PulseMedia Logo"
              className="w-14 h-14 transition-transform duration-500 hover:scale-110"
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

      {/* Image Slider */}
      <div className="relative w-full h-[450px] overflow-hidden mt-10 rounded-lg">
        {/* Image Container with Sliding Animation */}
        <div
          className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 bg-cover bg-center rounded-lg shadow-lg transition-transform duration-1000 ease-in-out animate-zoomIn"
              style={{
                backgroundImage: `url(${image})`,
                filter: "blur(3px)",
              }}
            ></div>
          ))}
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center py-10 rounded-lg bg-black/40">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text animate-fadeInUp">
            PulseMedia
          </h2>
          <p className="mt-2 text-lg text-white transition-opacity duration-500 ease-in-out">
            Bringing you the latest updates <br />
            from around the globe <br />
            in real-time.
          </p>

          {/* Explore Button with Smooth Scroll */}
          <button
            onClick={() =>
              document
                .getElementById("latest-articles")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:scale-105 transition-transform duration-300"
          >
            Explore
          </button>
        </div>
      </div>

      {/* Category Sections */}
      <div
        id="latest-articles"
        className="container mx-auto px-6 py-16 space-y-16 animate-slideIn"
      >
        <CategorySection title="Technology" news={newsData.technology} />
        <CategorySection title="Sports" news={newsData.sports} />
        <CategorySection title="Entertainment" news={newsData.entertainment} />
        <CategorySection title="Business" news={newsData.business} />
        <CategorySection title="Music" news={newsData.music} />
        <CategorySection title="Gaming" news={newsData.gaming} />
      </div>
    </div>
  );
}

export default Home;
