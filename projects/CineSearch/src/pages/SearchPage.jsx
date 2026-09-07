import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import { useSearch } from "../hooks/useMedia";
import SearchBar from "../components/SearchBar";
import { LeftIcon, RightIcon, SadFaceIcon, SearchIcon } from "../components/icons/Icons";
import MediaGrid from "../components/MediaGrid";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  // Url'deki q parametresini oku
  const urlQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(urlQuery);

  // Kullanıcı yazarken URL'i güncelle
  const debouncedQuery = useDebounce(query, 400);

  useEffect(() => {
    if (debouncedQuery) {
      setSearchParams({ q: debouncedQuery });
      setPage(1); // yeni arama -> sayfa 1'e dön
    }
  }, [debouncedQuery]);

  const { data, isLoading, isFetching, isPlaceholderData } = useSearch(debouncedQuery, page);

  // Film ve dizi sonuçlarını filtrele
  const results = data?.results?.filter(
    (item) => item.media_type === "movie" || item.media_type === "tv",
  );

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Arama Kutusu */}
        <div className="mb-8">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        {/* Sonuç bilgisi */}
        {data && debouncedQuery && (
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-400 text-sm">
              <span className="text-white font-medium">{debouncedQuery}</span>
              {"için"}
              <span className="text-white font-medium">{data.total_results}</span>
              {"sonuç bulundu"}
            </p>
            {isFetching && !isLoading && (
              <span className="text-xs text-blue-400">Güncelleniyor...</span>
            )}
          </div>
        )}

        {/* Boş durum */}
        {!debouncedQuery && (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">
              <SearchIcon />
            </p>
            <p className="text-gray-400">Film veya dizi adı yaz</p>
          </div>
        )}

        {/*Sonuç yok */}
        {data && results?.length === 0 && (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">
              <SadFaceIcon />
            </p>
            <p className="text-gray-400">Sonuç bulunamadı</p>
          </div>
        )}

        {/* Grid */}
        {debouncedQuery && <MediaGrid items={results} isLoading={isLoading} skeletonCount={10} />}

        {/* Pagination */}
        {data && results?.length > 0 && (
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

            <span className="text-sm text-gray-400">Sayfa {page}</span>

            <button
              onClick={() => {
                setPage((p) => p + 1);
                window.scroll({ top: 0, behavior: "smooth" });
              }}
              disabled={isPlaceholderData || !data.total_pages || page >= data.total_pages}
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

export default SearchPage;
