import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TechnologyPage from "./components/TechnologyPage";
import NewSidebar from "./components/NewSidebar";
import SportsPage from "./components/SportsPage";
import EntertainmentPage from "./components/EntertainmentPage";
import BusinessPage from "./components/BusinessPage";
import MusicPage from "./components/MusicPage";
import GamesPage from "./components/GamingPage";
import LiveUpdatesPage from "./components/LiveUpdatesPage";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <NewSidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <div
          className={`flex-1 transition-all duration-500 ease-in-out ${
            isCollapsed ? "ml-24" : "ml-64"
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/sports" element={<SportsPage />} />
            <Route path="/entertainment" element={<EntertainmentPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/gaming" element={<GamesPage />} />
            <Route path="/updates" element={<LiveUpdatesPage />} />
            {/* Add more routes here as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
