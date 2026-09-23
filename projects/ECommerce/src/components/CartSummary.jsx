import { clearCart, closeCart, selectCartCount, selectCartSubtotal } from "../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { selectIsLoggedIn } from "../store/userSlice";
import toast from "react-hot-toast";

const CartSummary = () => {
  const dispatch = useAppDispatch();
  const subtotal = useAppSelector(selectCartSubtotal);
  const itemCount = useAppSelector(selectCartCount);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  // 200$ üzeri kargo ücretsiz
  const shipping = subtotal > 200 ? 0 : 14.99;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    if (!isLoggedIn) {
      toast.error("Ödeme için giriş yapmalısınız!");
      return;
    }
    toast.success("Siparişin alındı! Teşekkürler 🎉");
    dispatch(clearCart());
    dispatch(closeCart());
  };

  return (
    <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
      {/* Ara Toplam */}
      <div className="flex justify-between text-sm text-gray-600">
        <span>Ara Toplam ({itemCount} ürün)</span>
        <span>{subtotal.toFixed(2)}</span>
      </div>

      {/* Kargo */}
      <div className="flex justify-between text-sm text-gray-600">
        <span>Kargo</span>
        <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
          {shipping === 0 ? "Ücretsiz" : `$${shipping.toFixed(2)}`}
        </span>
      </div>

      {/* Kargo bilgisi */}
      {shipping > 0 && (
        <p className="text-xs text-gray-400 bg-gray-50 p-2 rounded-lg">
          ${(200 - subtotal).toFixed(2)} daha alışveriş yaparsanız kargo ücretsiz!
        </p>
      )}

      {/* Toplam */}
      <div className="flex justify-between font-bold text-gray-900 pt-3 border-t border-gray-100">
        <span>Toplam</span>
        <span>${total.toFixed(2)}</span>
      </div>

      {/* Ödeme butonu */}
      <button
        onClick={handleCheckout}
        className="w-full py-3 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 mt-1"
      >
        {isLoggedIn ? "Ödemeye Geç" : "Ödeme İçin Giriş Yap"}
      </button>

      {/* Giriş yapmadan uyarı */}
      {!isLoggedIn && (
        <p className="text-xs text-center text-gray-400">
          Ödeme yapmak için giriş yapman gerekiyor
        </p>
      )}
    </div>
  );
};

export default CartSummary;
