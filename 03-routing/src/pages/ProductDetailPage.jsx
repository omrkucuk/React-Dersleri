import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams(); // Url'deki :id değerini al
  const [product, setProducts] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]); // id değişirse tekrar yeni ürün çek

  if (!product) return <p>Yükleniyor...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetailPage;

// Birden fazla parametre durumunda
// <Route path="/categories/:categoryId/products/:productId" element={<ProductPage/>}/>
// Kulanımı:
// const {categoryId, productId} = useParams()
