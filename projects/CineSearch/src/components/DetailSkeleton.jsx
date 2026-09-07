const DetailSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-950 animate-pulse">
      <div className="h-72 bg-gray-800" />
      <div className="max-w-5xl mx-auto px-4 py-8 flex gap-8">
        <div className="w-48 h-72 bg-gray-800 rounded-xl shrink-0" />
        <div className="flex-1 flex flex-col gap-4">
          <div className="h-8 bg-gray-800 rounded w-2/3" />
          <div className="h-4 bg-gray-800 rounded w-1/3" />
          <div className="h-4 bg-gray-800 rounded w-full" />
          <div className="h-4 bg-gray-800 rounded w-full" />
          <div className="h-4 bg-gray-800 rounded w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
