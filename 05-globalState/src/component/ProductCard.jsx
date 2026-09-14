import { useDispatch, useSelector } from "react-redux";
import { addItem, openCart, selectCartCount } from "../store/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const inCart = useSelector(selectIsInCart(product.id));
  const count = useSelector(selectCartCount);

  const handleAddToCart = () => {
    dispatch(addItem(product)); // action payload = product
    dispatch(openCart()); // sepet drawer'ı aç
  };

  return <div>{count}</div>;
};

export default ProductCard;
