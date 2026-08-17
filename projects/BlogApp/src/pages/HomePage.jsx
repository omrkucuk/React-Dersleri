import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, posts } from "../data/posts";
import PostCard from "../components/PostCard";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "tümü";

  const filteredPosts = useMemo(() => {
    if (activeCategory === "tümü") return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategory = (cat) => {
    cat === "tümü" ? setSearchParams({}) : setSearchParams({ category: cat });
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Yazılar</h1>
        <p className="text-sm text-gray-500">{filteredPosts.length} yazı</p>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm border ${activeCategory === cat ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="text-center text-gray-400 py-12 text-sm">Bu kategoride yazı bulunamadı.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
