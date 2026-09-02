const MediaSkeleton = () => {
  return (
    <div className="rounded-xl overflow-hidden animate-pulse">
      <div className="aspect-2/3 bg-gray-200" />
      <div className="p-3 flex flex-col gap-2">
        <div className="h-3 bg-gray-200 rounded w-1/4" />
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/3" />
      </div>
    </div>
  );
};

export default MediaSkeleton;
