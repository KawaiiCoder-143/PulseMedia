import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  Home as HomeIcon,
  Tv,
  Globe,
  Smartphone,
  Briefcase,
  Music,
  Gamepad2,
  Search,
  Rocket,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface NewSidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

function NewSidebar({ isCollapsed, toggleSidebar }: NewSidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const iconSizeClass = "w-5 h-5 sm:w-6 sm:h-6";
  const buttonSizeClass = isCollapsed ? "p-2 sm:p-3" : "p-2 sm:p-3 w-full";

  const options = [
    { label: "Home", icon: <HomeIcon className={iconSizeClass} />, path: "/" },
    {
      label: "Live Updates",
      icon: (
        <div className="relative">
          <Rocket className={iconSizeClass} />
        </div>
      ),
      path: "/updates",
      extraDot: (
        <span className="absolute -top-2 -right-2 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-red-600 rounded-full animate-pulse shadow-lg"></span>
      ),
    },
    {
      label: "Technology",
      icon: <Smartphone className={iconSizeClass} />,
      path: "/technology",
    },
    {
      label: "Sports",
      icon: <Globe className={iconSizeClass} />,
      path: "/sports",
    },
    {
      label: "Entertainment",
      icon: <Tv className={iconSizeClass} />,
      path: "/entertainment",
    },
    {
      label: "Business",
      icon: <Briefcase className={iconSizeClass} />,
      path: "/business",
    },
    {
      label: "Music",
      icon: <Music className={iconSizeClass} />,
      path: "/music",
    },
    {
      label: "Gaming",
      icon: <Gamepad2 className={iconSizeClass} />,
      path: "/gaming",
    },
  ];

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && filteredOptions.length > 0) {
      navigate(filteredOptions[0].path);
      setShowSuggestions(false);
      setSearchTerm("");
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 z-50 ${
        isCollapsed ? "w-16 sm:w-20 md:w-24" : "w-48 sm:w-60 md:w-64"
      } h-full bg-gradient-to-b from-slate-800 to-blue-900 text-gray-200 p-2 sm:p-4 md:p-5 shadow-lg transition-all duration-500 ease-in-out flex flex-col justify-between border-r border-gray-700`}
    >
      {/* Sidebar Top Section */}
      <div>
        {/* Logo and Menu Button */}
        <div className="flex items-center justify-start mb-4 sm:mb-6">
          <img
            src="https://i.ibb.co/RpQ48KR/DALL-E-2024-11-09-10-59-20-A-modern-sleek-logo-for-a-media-company-called-Pulse-Media-The-logo-shoul.png"
            alt="Logo"
            className="w-8 h-8 sm:w-12 sm:h-12 transform transition-transform duration-500 hover:scale-110"
          />
          {!isCollapsed && (
            <span className="ml-2 font-bold text-base sm:text-xl text-blue-200 transition-all duration-500 hover:text-blue-300">
              Pulse News
            </span>
          )}
        </div>

        {/* Centered Menu Button */}
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <button
            onClick={toggleSidebar}
            className="flex items-center gap-4 text-gray-400 hover:text-blue-200 transition-transform duration-300 transform hover:scale-105"
          >
            <Menu className={iconSizeClass} />
            {!isCollapsed && (
              <span className="font-bold text-base sm:text-lg">Menu</span>
            )}
          </button>
        </div>

        {/* Search Bar */}
        {isCollapsed ? (
          <button
            className={`flex items-center justify-center mb-4 sm:mb-6 ${buttonSizeClass} hover:bg-slate-700 rounded-lg transition-all`}
          >
            <Search className="w-4 h-4 sm:w-6 sm:h-6 text-gray-300 hover:text-blue-200" />
          </button>
        ) : (
          <div className="relative">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 p-2 sm:p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors shadow-inner">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyPress={handleSearchKeyPress}
                placeholder="Search..."
                className="w-full bg-transparent text-xs sm:text-sm text-gray-200 placeholder-gray-400 outline-none"
              />
            </div>
            {showSuggestions && searchTerm && (
              <div className="absolute top-full left-0 right-0 bg-slate-800 shadow-lg rounded-lg z-10 max-h-40 sm:max-h-48 overflow-auto">
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        navigate(option.path);
                        setShowSuggestions(false);
                        setSearchTerm("");
                      }}
                      className="px-2 sm:px-4 py-1 sm:py-2 cursor-pointer text-xs sm:text-sm text-gray-300 hover:bg-blue-700 hover:text-white transition-colors"
                    >
                      {option.label}
                    </div>
                  ))
                ) : (
                  <div className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-gray-400">
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Menu Options */}
        <div className="flex flex-col space-y-1 sm:space-y-3">
          {options.map((option, index) => (
            <Link to={option.path} key={index}>
              <div className="relative">
                <button
                  className={`flex items-center gap-2 sm:gap-4 justify-start ${buttonSizeClass} text-xs sm:text-base text-gray-300 transition-all duration-300 ease-in-out rounded-lg ${
                    location.pathname === option.path
                      ? "bg-blue-700 text-white"
                      : "hover:bg-slate-700 hover:text-blue-300"
                  }`}
                >
                  {option.icon}
                  {!isCollapsed && (
                    <span className="font-medium">{option.label}</span>
                  )}
                </button>
                {option.extraDot}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Collapse Button at the Bottom */}
      <div
        className={`flex ${
          isCollapsed ? "justify-center" : "justify-start"
        } mt-6`}
      >
        <button
          onClick={toggleSidebar}
          className={`${buttonSizeClass} text-gray-300 hover:text-blue-200 transition-all duration-300 ease-in-out`}
        >
          {isCollapsed ? (
            <ChevronRight className={iconSizeClass} />
          ) : (
            <ChevronLeft className={iconSizeClass} />
          )}
        </button>
      </div>
    </div>
  );
}

export default NewSidebar;
