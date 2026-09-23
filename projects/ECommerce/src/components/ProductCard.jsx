import { addItem, selectIsInCart } from "../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import toast from "react-hot-toast";
import { Star } from "lucide-react";
import clsx from "clsx";

const ProductCard = ({ product }) => {
  const dispatch = useAppDispatch();

  const inCart = useAppSelector(selectIsInCart(product.id));

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail,
        category: product.category,
      }),
    );

    dispatch(openCart());

    toast.success(`${product.title.slice(0, 20)}... eklendi`);
  };

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md bg-white flex flex-col">
      {/* Ürün Resmi */}
      <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        {/* Kategori */}
        <span className="text-xs text-gray-400 capitalize">{product.category}</span>

        {/* Başlık */}
        <h3 className="text-sm font-medium text-gray-900 flex-1">{product.title}</h3>

        {/* Puan */}
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 text-xs">
            <Star />
          </span>
          <span className="text-xs text-gray-500">{product.rating}</span>
        </div>

        {/* Fiyat + Buton */}
        <div className="flex items-center justify-between mt-1">
          <span className="font-bold text-blue-600">${product.price}</span>
          <button
            onClick={handleAddToCart}
            className={clsx(
              "px-3 py-1.5 rounded-lg text-xs font-medium border cursor-pointer",
              inCart
                ? "bg-green-50 text-green-600 border-green-200"
                : "bg-blue-600 text-white border-transparent hover:bg-blue-700",
            )}
          >
            {inCart ? "Sepette" : "Ekle"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
