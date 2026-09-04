import MediaCard from "./MediaCard";
import MediaSkeleton from "./MediaSkeleton";

const MediaGrid = ({ items, isLoading, skeletonCount = 12 }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {isLoading
        ? Array.from({ length: skeletonCount }).map((_, i) => <MediaSkeleton key={i} />)
        : items?.map((item) => (
            <MediaCard key={`${item.media_type || "movie"}-${item.id}`} item={item} />
          ))}
    </div>
  );
};

export default MediaGrid;
