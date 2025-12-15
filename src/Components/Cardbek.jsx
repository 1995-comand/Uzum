import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cardbek = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((e) => (
        <Link key={e.id} to={`/product/${e.id}`}>
          <div className="w-[260px] bg-white rounded-2xl shadow-md p-4 cursor-pointer">

            <div className="h-[220px] flex items-center justify-center bg-gray-100 rounded-xl">
              <img src={e.thumbnail} alt={e.title} className="object-contain h-full" />
            </div>

            <p className="text-green-600 text-xs mt-2 font-semibold">● ORIGINAL</p>

            <h2 className="text-purple-600 font-bold text-lg">
              {e.price} so'm
            </h2>

            <p className="text-gray-400 text-sm line-through">
              {e.price + 10000} so'm
            </p>

            <span className="bg-yellow-200 text-xs px-2 py-1 rounded">
              {Math.floor(e.price / 12)} so'm/oyiga
            </span>

            <p className="text-sm mt-2">
              {e.title.slice(0, 45)}
            </p>

            <p className="text-yellow-500 text-sm mt-1">⭐ {e.rating}</p>

            <button className="w-full mt-3 bg-purple-600 text-white py-2 rounded-xl">
              Ertaga
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cardbek;
