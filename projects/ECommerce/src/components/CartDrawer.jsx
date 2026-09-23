import { clearCart, closeCart, selectCartItems, selectIsCartOpen } from "../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { ShoppingCart, X } from "lucide-react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
const CartDrawer = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const isOpen = useAppSelector(selectIsCartOpen);

  if (!isOpen) return null;

  return (
    <>
      <div onClick={() => dispatch(closeCart())} className="fixed inset-0 bg-black/40 z-20" />

      {/* Drawer paneli */}
      <div className="fixed top-0 right-0 bottom-0 w-80 sm:w-96 bg-white z-30 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <h2 className="font-medium text-gray-900">
            Sepetim{" "}
            {items.length > 0 && (
              <span className="ml-2 text-sm font-normal text-gray-400">({items.length} çeşit)</span>
            )}
          </h2>

          <div className="flex items-center gap-3">
            {items.length > 0 && (
              <button
                onClick={() => dispatch(clearCart())}
                className="text-xs text-red-500 hover:text-red-700 "
              >
                Temizle
              </button>
            )}

            <button
              onClick={() => dispatch(closeCart())}
              className="text-gray-400 hover:text-red-700 text-xl cursor-pointer"
            >
              <X />
            </button>
          </div>
        </div>

        {/* Ürün listesi - scroll */}
        <div className="flex-1 overflow-y-auto px-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-3">
              <span className="text-5xl">
                <ShoppingCart />
              </span>
              <p className="text-sm">Sepetin boş</p>
              <p className="text-xs text-gray-300">Ürün eklemek için alışverişe devam et </p>
            </div>
          ) : (
            items.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        {/* Özet - sadece ürün varsa göster */}
        {items.length > 0 && (
          <div className="px-5 pb-6 pt-2 border-t border-gray-100">
            <CartSummary />
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
