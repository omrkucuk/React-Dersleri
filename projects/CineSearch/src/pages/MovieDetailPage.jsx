import { useNavigate, useParams } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useMovieCredits, useMovieDetail } from "../hooks/useMedia";
import DetailSkeleton from "../components/DetailSkeleton";
import { getImageUrl } from "../api/tmdb";
import {
  HeartIcon,
  HeartIconFilled,
  LeftIcon,
  StartIcon,
  TimeIcon,
  UserProfileIcon,
} from "../components/icons/Icons";
import clsx from "clsx";

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();

  const { data: movie, isLoading: movieLoading } = useMovieDetail(id);
  const { data: credits, isLoading: creditsLoading } = useMovieCredits(id);

  if (movieLoading) return <DetailSkeleton />;

  if (!movie)
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <p className="text-gray-400">Film bulunamadı.</p>
      </div>
    );

  const favorited = isFavorite(movie.id);
  const backdropUrl = getImageUrl(movie.backdrop_path, "original");
  const posterUrl = getImageUrl(movie.poster_path, "w500");
  const year = movie.release_date?.slice(0, 4);
  const runtime = movie.runtime
    ? `${Math.floor(movie.runtime / 60)}s ${movie.runtime % 60}d`
    : null;

  // Kadrodan ilk 8 oyuncu al
  const cast = credits?.cast?.slice(0, 8) || [];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Backdrop */}
      {backdropUrl && (
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img src={backdropUrl} alt={movie.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/60 to-transparent" />
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Geri butonu */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-400 hover:text-white mb-6 duration-300 flex gap-2 cursor-pointer"
        >
          <LeftIcon /> Geri
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          {posterUrl && (
            <div className="shrink-0">
              <img
                src={posterUrl}
                alt={movie.title}
                className="w-48 rounded-xl shadow-2xl mx-auto md:mx-0"
              />
            </div>
          )}

          {/* Detaylar */}
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h1 className="text-2xl md:text-3xl font-bold">{movie.title}</h1>
              {/* Favori butonu */}
              <button
                onClick={() => toggleFavorite({ ...movie, media_type: "movie" })}
                className={clsx(
                  `shrink-0 px-4 py-2 rounded-lg text-sm font-medium duration-300`,
                  favorited
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-gray-800 hover:bg-gray-700 text-white",
                )}
              >
                {favorited ? (
                  <span className="flex items-center gap-2 cursor-pointer">
                    {<HeartIconFilled />} Favorilerden kaldır
                  </span>
                ) : (
                  <span className="flex items-center gap-2 cursor-pointer">
                    {<HeartIcon />} Favoriye ekle
                  </span>
                )}
              </button>
            </div>

            {/* Bilgiler */}
            <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-400 items-center">
              {year && <span>{year}</span>}
              {runtime && (
                <span className="flex gap-1 items-center">
                  <TimeIcon />
                  {runtime}
                </span>
              )}

              {movie.vote_average > 0 && (
                <span className="text-yellow-400 flex gap-1">
                  <StartIcon /> {movie.vote_average.toFixed(1)}
                  <span className="text-gray-500">({movie.vote_count?.toLocaleString()} oy)</span>
                </span>
              )}
            </div>

            {/* Türler */}
            {movie.genres?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            {/* Özet */}
            {movie.overview && <p className="text-gray-300 text-sm mb-6">{movie.overview}</p>}

            {/* Ek bilgiler */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              {movie.original_language && (
                <div>
                  <p className="text-gray-500 text-xs mb-1">Orijinal Dil</p>
                  <p className="text-gray-300 uppercase">{movie.original_language}</p>
                </div>
              )}
              {movie.status && (
                <div>
                  <p className="text-gray-500 text-xs mb-1">Durum</p>
                  <p className="text-gray-300">{movie.status}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Oyuncu Kadrosu */}
        {cast.length > 0 && (
          <div className="mt-10">
            <h2 className="text-lg font-semibold mb-4">Oyuncular</h2>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
              {cast.map((actor) => (
                <div key={actor.id} className="text-center">
                  <div className="w-full aspect-square rounded-full overflow-hidden bg-gray-800 mb-2">
                    {actor.profile_path ? (
                      <img
                        src={getImageUrl(actor.profile_path, "w200")}
                        alt={actor.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-2xl">
                        <UserProfileIcon />
                      </div>
                    )}
                    <p className="text-xs text-white font-medium">{actor.name}</p>
                    <p className="text-xs text-gray-500">{actor.character}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailPage;
