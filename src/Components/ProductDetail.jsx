import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams(); // URL dagi id
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return 

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} width={200} />
      <p>{product.description}</p>
      <p>{product.price} so'm</p>
    </div>
  );
};

export default ProductDetail;
