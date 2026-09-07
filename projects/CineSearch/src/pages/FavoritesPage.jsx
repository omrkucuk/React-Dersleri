import { HeartIcon, MovieIcon } from "../components/icons/Icons";
import MediaCard from "../components/MediaCard";
import { useFavorites } from "../context/FavoritesContext";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0)
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center gap-3">
        <p className="text-5xl">
          {" "}
          <MovieIcon />
        </p>
        <p className="text-gray-400">Henüz favori eklemedin</p>
        <p className="text-gray-600 text-sm">Kart üzerindeki {<HeartIcon />} ikonuna tıkla</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">
          Favorilerim
          <span className="ml-2 text-base font-normal text-gray-400">({favorites.length})</span>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {favorites.map((item) => (
            <MediaCard key={`${item.media_type}-${item.id}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
