import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { MovieIcon } from "./icons/Icons";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { favorites } = useFavorites();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim().length < 2) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    setQuery("");
  };

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-4">
        {/* Logo */}
        <Link to={"/"} className="font-bold text-white text-lg flex items-center gap-2">
          <MovieIcon />
          CineSearch
        </Link>

        {/* Arama Formu */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Film veya dizi ara..."
              className="w-full px-4 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>

        {/* Navigasyon */}
        <nav className="flex items-center gap-4 ml-auto shrink-0">
          <Link
            to={"/"}
            className={`text-sm transition-colors ${location.pathname === "/" ? "text-white" : "text-gray-400 hover:text-white"}`}
          >
            Keşfet
          </Link>
          <Link
            to={"/favorites"}
            className={`text-sm transition-colors flex items-center gap-1 ${location.pathname === "/favorites" ? "text-white" : "text-gray-400 hover:text-white"}`}
          >
            Favoriler
            {favorites.length > 0 && (
              <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
