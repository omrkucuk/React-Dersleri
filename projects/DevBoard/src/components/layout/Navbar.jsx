import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { logout } from "../../store/authSlice";
import { LayoutDashboard, LogOut, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 sticky top-0 z-10 shadow-sm">
      {/* Logo */}
      <Link
        to={"/dashboard"}
        className="flex items-center gap-2 font-bold text-lg text-indigo-600 dark:text-indigo-400"
      >
        <LayoutDashboard className="w-5 h-5" />
        DevBoard
      </Link>

      <div className="flex items-center gap-3">
        {/* Kullanıcı Adı */}
        {user && (
          <span className="text-sm text-gray-600 dark:text-gray-300 hidden sm:block">
            {user.firstName}
          </span>
        )}

        {/* Dark mode toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          aria-label="Tema değiştir"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600" />
          )}
        </button>

        {/* Çıkış */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50"
        >
          <LogOut className="w-4 h-4" />
          Çıkış
        </button>
      </div>
    </header>
  );
};

export default Navbar;
