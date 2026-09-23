import { Minus, Plus, X } from "lucide-react";
import { useAppDispatch } from "../store/hook";
import { decrementQuantity, incrementQuantity, removeItem } from "../store/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-3 py-3 border-b border-gray-100 last:border-0">
      {/* Ürün Resmi  */}
      <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-full max-w-full object-contain p-1"
        />
      </div>

      <div className="flex-1 min-w-0">
        {/* Başlık */}
        <p className="text-xs font-medium text-gray-900 mb-1">{item.title}</p>

        {/* Birim Fiyat */}
        <p className="text-xs text-gray-400 mb-2">${item.price} / adet</p>

        {/* Miktar Kontrolü */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch(decrementQuantity(item.id))}
            className="w-6 h-6 border border-gray-300 rounded flex 
            items-center justify-center text-gray-600 hover:bg-gray-100"
          >
            <Minus />
          </button>

          <span className="text-sm font-medium w-5 text-center">{item.quantity}</span>

          <button
            onClick={() => dispatch(incrementQuantity(item.id))}
            className="w-6 h-6 border border-gray-300 rounded flex 
            items-center justify-center text-gray-600 hover:bg-gray-100"
          >
            <Plus />
          </button>

          {/* Toplam Fiyat */}
          <span className="ml-auto text-sm font-bold text-blue-600">
            ${(item.price * item.quantity).toFixed(2)}
          </span>

          {/* Sil */}
          <button
            onClick={() => dispatch(removeItem(item.id))}
            className="text-red-400 hover:text-red-600 text-xs ml-1"
          >
            <X />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
