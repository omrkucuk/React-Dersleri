import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import api from "../lib/axios";

const PaginatedPosts = () => {
  const [page, setPage] = useState(1);

  const {
    data: posts,
    isLoading,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => api.get("/posts", { params: { _page: page, _limit: 10 } }).then((r) => r.data),

    // keepPreviousData - yeni sayfa yüklenirken eski sayfayı gösterir
    placeholderData: keepPreviousData,
  });

  return (
    <div className="flex flex-col gap-4">
      {isLoading ? (
        <p className="text-center text-gray-400 py-8 text-sm">Yükleniyor...</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {posts?.map((post) => (
            <li key={post.id} className="p-3 bg-gray-50 rounded-lg text-sm text-gray-800">
              {post.title}
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 1}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-40 hover:bg-gray-50"
        >
          Önceki
        </button>
        <span className="text-sm text-gray-500">Sayfa {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          // isPlaceholderData - yeni sayfa henüz yüklenmedi, eski veri gösteriliyor
          disabled={isPlaceholderData || (posts && posts.length < 10)}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-40 hover:bg-gray-50"
        >
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default PaginatedPosts;
