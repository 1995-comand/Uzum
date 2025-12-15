import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cardbek = () => {
  const [data, setData] = useState([]);
 


  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((req) => setData(req.products));
  }, []);

  return (
    <div className="flex gap-5 flex-wrap justify-center">
      {data.map((e) => (
        <Link to={`/product/${e.id}`}>
        <div className="w-[260px] bg-white rounded-2xl shadow-md p-4" key={e.id}>
          <div className="h-[220px] flex items-center justify-center bg-gray-100 rounded-xl">
            <img className="object-contain h-full" src={e.thumbnail} alt={e.title} />
          </div>
          <p className="text-green-600 text-xs mt-2 font-semibold">
            ● ORIGINAL
          </p>
          <h2 className="text-purple-600 font-bold text-lg">
            {e.price} so'm
          </h2>

          <p className="text-gray-400 text-sm line-through">
            {e.discountPercentage} so'm
          </p>

          <span className=" bg-yellow-300 text-xs px-2 py-1 rounded text-black">
            {Math.floor(e.price / 12)} so'm/oyiga
          </span>
          <p className="text-sm text-black mt-2"> {e.title.slice(0, 45)}</p>

        
          <p className="text-yellow-500 text-sm mt-1">⭐ {e.rating} </p>
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
