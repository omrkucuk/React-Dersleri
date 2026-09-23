const ProductSkeleton = () => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-200" />
      <div className="p-4 flex flex-col gap-2">
        <div className="h-3 bg-gray-200 rounded w-1/4" />
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-8 bg-gray-200 rounded mt-2" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
