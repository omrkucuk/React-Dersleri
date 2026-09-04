import { useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { getImageUrl } from "../api/tmdb";
import { HeartIcon, HeartIconFilled, MovieIcon, StartIcon } from "./icons/Icons";
import clsx from "clsx";

const MediaCard = ({ item }) => {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();

  const title = item.title || item.name || "Deneme";
  const year = (item.release_date || item.first_air_date || "").slice(0, 4);
  const mediaType = item.media_type || (item.title ? "movie" : "tv");
  const posterUrl = getImageUrl(item.poster_path, "w500");
  const favorited = isFavorite(item.id);

  const handleClick = () => {
    navigate(mediaType === "movie" ? `/movie/${item.id}` : `/tv/${item.id}`);
  };

  const handleFavorite = (e) => {
    e.stopPropagation(); // karta tıklamayı tetiklemesin
    toggleFavorite({ ...item, media_type: mediaType });
  };

  return (
    <div
      onClick={handleClick}
      className="group rounded-xl overflow-hidden cursor-pointer bg-gray-900 hover:ring-2 hover:ring-blue-500 transition-all duration-300"
    >
      {/* Poster */}
      <div className="relative aspect-2/3 overflow-hidden">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-gray-600 text-4xl">
              <MovieIcon />
            </span>
          </div>
        )}

        {/* Puan badge */}
        {item.vote_average > 0 && (
          <div className="absolute top-2 left-2 bg-black/70 text-yellow-400 text-xs font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
            <StartIcon />
            {item.vote_average.toFixed(1)}
          </div>
        )}

        {/* Favori Butonu */}

        <button
          onClick={handleFavorite}
          className={clsx(
            "absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center",
            "backdrop-blur-sm transition-colors text-sm cursor-pointer",
            favorited ? "bg-red-500 text-white" : "bg-black/50 text-white hover:bg-red-500",
          )}
        >
          {favorited ? <HeartIconFilled /> : <HeartIcon />}
        </button>

        {/* Film/Dizi badge */}
        <div className="absolute bottom-2 left-2 text-xs px-2 py-0.5 rounded-full bg-black/60 text-gray-300 backdrop-blur-sm">
          {mediaType === "movie" ? "Film" : "Dizi"}
        </div>

        {/* Bilgiler */}
        <div className="p-3">
          <h3 className="text-sm font-medium text-white mb-0.5">{title}</h3>
          <p className="text-xs text-gray-400">{year}</p>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
