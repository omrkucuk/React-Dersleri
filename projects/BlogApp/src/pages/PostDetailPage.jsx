import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { posts } from "../data/posts";

const PostDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  if (!post)
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 mb-4">Yazı bulunamadı.</p>
        <Link to={"/"} className="text-blue-600 text-sm hover:underline">
          Ana Sayfa
        </Link>
      </div>
    );

  return (
    <article className="max-w-2xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-blue-600 hover:text-blue-800 mb-6 flex items-center gap-1"
      >
        ‹– Geri
      </button>

      <span className="inline-block text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full mb-4">
        {post.category}
      </span>

      <h1 className="text-3xl font-bold text-gray-900 mb-3">{post.title}</h1>

      <div className="flex gap-4 text-sm text-gray-400 mb-8">
        <span>{post.author}</span>
        <span>{post.date}</span>
        <span>{post.readTime} dk okuma</span>
      </div>

      <p className="text-gray-700">{post.content}</p>
    </article>
  );
};

export default PostDetailPage;
