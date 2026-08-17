import React from "react";
import Navbar from "../components/Navbar";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const linkStyle = ({ isActive }) =>
    `block px-3 py-2 rounded-lg text-sm transition-colors duration-300 ${isActive ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-600 hover:text-gray-100"}`;

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8 flex gap-8">
        <aside className="w-44 shrink-0">
          <p className="text-xs font-semibold text-gray-400 uppercase mb-2 px-3">Admin Panel</p>
          <nav className="flex flex-col gap-1">
            <NavLink to="/admin" end className={linkStyle}>
              Dashboard
            </NavLink>
            <NavLink to={"/admin/new-post"} className={linkStyle}>
              Yeni Yazı
            </NavLink>
          </nav>
        </aside>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
