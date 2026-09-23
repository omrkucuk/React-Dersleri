import { openCart, selectCartCount } from "../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { login, logout, selectCurrentUser, selectIsLoggedIn } from "../store/userSlice";
import toast from "react-hot-toast";
import { Store, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const itemCount = useAppSelector(selectCartCount);
  const currentUser = useAppSelector(selectCurrentUser);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const handleLogin = () => {
    dispatch(login({ id: 1, name: "Ahmet Yılmaz", email: "ahmet@example.com" }));
    toast.success("Giriş yapıldı!");
  };

  const handleLogout = () => {
    dispatch(logout());
    toast("Çıkış yapılıd");
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <span className="font-bold text-gray-900 text-lg flex items-center gap-2">
          <Store /> ShopApp
        </span>

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <span className="text-sm text-gray-600 hidden sm:block">{currentUser.name}</span>
              <button
                onClick={handleLogout}
                className="text-sm text-gray-500 border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50 "
              >
                Çıkış
              </button>
            </>
          ) : (
            <button
              onClick={handleLogin}
              className="text-sm text-gray-600 border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50 "
            >
              Giriş Yap
            </button>
          )}

          <button
            onClick={() => dispatch(openCart())}
            className="relative flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
          >
            <ShoppingCart />
            Sepet
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center font-medium">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
