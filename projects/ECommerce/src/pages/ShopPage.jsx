import { useState } from "react";
import { useCategories, useProducts } from "../hooks/useProducts";
import clsx from "clsx";
import ProductSkeleton from "../components/ProductSkeleton";
import ProductCard from "../components/ProductCard";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const { data: products, isLoading: productsLoading } = useProducts(selectedCategory || undefined);
  const { data: categories } = useCategories();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Ürünler
          {products && (
            <span className="ml-2 text-base font-normal text-gray-400">({products.length})</span>
          )}
        </h1>
      </div>

      {/* Kategori filtreleri */}
      <div className="flex gap-2 mb-6 flex-wrap">
        <button
          onClick={() => setSelectedCategory("")}
          className={clsx(
            "px-4 py-1.5 rounded-full text-sm border cursor-pointer",
            !selectedCategory
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-600 border-gray-300 hover:border-gray-400",
          )}
        >
          Tümü
        </button>
        {categories?.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={clsx(
              "px-4 py-1.5 rounded-full text-sm border cursor-pointer capitalize",
              selectedCategory === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600 border-gray-300 hover:border-gray-400",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Ürün grid'i */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {productsLoading
          ? Array.from({ length: 10 }).map((_, i) => <ProductSkeleton key={i} />)
          : products?.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default ShopPage;
