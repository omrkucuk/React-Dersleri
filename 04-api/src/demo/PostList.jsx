import { useDeletePost, usePosts } from "./hooks/usePosts";

const PostList = () => {
  const { data: posts, isLoading } = usePosts();
  const deletePost = useDeletePost();

  if (isLoading) return <p className="text-gray-400 text-sm p-4">Yükleniyor...</p>;

  return (
    <ul className="flex flex-col gap-2">
      {posts?.map((post) => (
        <li key={post.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-800">{post.title}</span>
          <button
            onClick={() => deletePost.mutate(post.id)}
            disabled={deletePost.isPending}
            className="text-xs text-red-500   hover:text-red-700 "
          >
            Sil
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
