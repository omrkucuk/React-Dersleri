import { useLocation } from "react-router-dom";

const CurrentPage = () => {
  const location = useLocation();

  console.log(location.pathname); // "/products"
  console.log(location.search); // "?category=elektronik&sort=price"
  console.log(location.hash); // "#reviews"

  return <p>Şu an :{location.pathname}</p>;
};

export default CurrentPage;
