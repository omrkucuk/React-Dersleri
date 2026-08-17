import React from "react";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/posts/${post.id}`)}
      className="p-5 bg-white border border-gray-200 rounded-xl cursor-pointer hover:shadow-md transition-shadow duration-300"
    >
      <span className="inline-block text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full mb-3">
        {post.category}
      </span>
      <h2 className="text-base font-semibold text-gray-900 mb-2">{post.title}</h2>
      <p className="text-sm text-gray-500 mb-4">{post.excerpt}</p>
      <div className="flex justify-between text-xs text-gray-400">
        <span>{post.author}</span>
        <span>{post.readTime} dk okuma</span>
      </div>
    </article>
  );
};

export default PostCard;
