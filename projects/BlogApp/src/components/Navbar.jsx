import React from "react";
import { useAuth } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const linkStyle = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-300 ${isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`;

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <NavLink to="/" className="font-bold text-gray-900 text-lg">
          BlogApp
        </NavLink>
        <nav className="flex items-center gap-6">
          <NavLink to="/" end className={linkStyle}>
            Yazılar
          </NavLink>
          {user ? (
            <>
              <NavLink to="/admin" className={linkStyle}>
                Admin
              </NavLink>
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="text-sm text-gray-500 hover:text-gray-800 transition-colors duration-300"
              >
                Çıkış ({user.name})
              </button>
            </>
          ) : (
            <NavLink to="/login" className={linkStyle}>
              Giriş Yap
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
