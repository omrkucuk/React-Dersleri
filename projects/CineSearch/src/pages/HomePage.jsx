import { useState } from "react";
import { usePopularMovies, usePopularTv } from "../hooks/useMedia";
import MediaGrid from "../components/MediaGrid";
import { LeftIcon, RightIcon } from "../components/icons/Icons";

const TABS = [
  { id: "movies", label: "Popüler Filmler" },
  { id: "tv", label: "Popüler Diziler" },
];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("movies");
  const [page, setPage] = useState(1);

  const {
    data: moviesData,
    isLoading: moviesLoading,
    isPlaceholderData: moviesPlaceholder,
  } = usePopularMovies(page);

  console.log(moviesData);
  const {
    data: tvData,
    isLoading: tvLoading,
    isPlaceholderData: tvPlaceholder,
  } = usePopularTv(page);

  const isMovies = activeTab === "movies";

  // Aktif sekmeye göre veriyi seç
  const data = isMovies ? moviesData : tvData;
  const isLoading = isMovies ? moviesLoading : tvLoading;
  const isPlaceholder = isMovies ? moviesPlaceholder : tvPlaceholder;

  const items = data?.results?.map((item) => ({ ...item, media_type: isMovies ? "movie" : "tv" }));

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setPage(1); // Sekme değişince sayfayı sıfırla
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Sekme başlıkları */}
        <div className="flex gap-1 mb-8 bg-gray-900 p-1 rounded-xl w-fit">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.id ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <MediaGrid items={items} isLoading={isLoading} />

        {/* Pagination */}
        {data && (
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-800">
            <button
              onClick={() => {
                setPage((p) => p - 1);
                window.scroll({ top: 0, behavior: "smooth" });
              }}
              disabled={page === 1}
              className="px-5 py-2 bg-gray-800 text-white rounded-lg text-sm disabled:opacity-40 hover:bg-gray-700 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <LeftIcon /> <span>Önceki</span>
            </button>

            <span className="text-sm text-gray-400">
              {page} / {data.total_pages > 500 ? 500 : data.total_pages}
            </span>

            <button
              onClick={() => {
                setPage((p) => p + 1);
                window.scroll({ top: 0, behavior: "smooth" });
              }}
              disabled={isPlaceholder || page >= 500}
              className="px-5 py-2 bg-gray-800 text-white rounded-lg text-sm disabled:opacity-40 hover:bg-gray-700 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Sonraki</span> <RightIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
