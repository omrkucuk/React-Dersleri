import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { posts } from "../data/posts";

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-400">Hoş geldin, {user.name}</p>
        </div>
        <Link
          to={"/admin/new-post"}
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
        >
          + Yeni Yazı
        </Link>
      </div>

      <div className="p-4 bg-gray-50 rounded-xl mb-6">
        <p className="text-xs text-gray-500">Toplam Yazı</p>
        <p className="text-3xl font-bold text-gray-900">{posts.length}</p>
      </div>

      <h2 className="text-sm font-semibold text-gray-700 mb-3">Son Yazılar</h2>
      <div className="flex flex-col gap-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex justify-between items-center p-3 border border-gray-200 rounded-lg bg-white"
          >
            <div>
              <p className="text-sm font-medium text-gray-900">{post.title}</p>
              <p className="text-xs text-gray-400">{post.date}</p>
            </div>
            <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full">
              {post.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
