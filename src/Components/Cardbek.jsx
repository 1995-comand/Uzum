import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useOutletContext, Link } from "react-router-dom";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Cardbek = () => {
  const { searchQuery } = useOutletContext();
  const { addToCart, isInCart } = useContext(AppContext);
  const { t } = useTranslation();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((req) => setData(req.products))
      .catch((err) => console.error(err));
  }, []);
  const filteredData = data.filter((e) =>
    e.title ? e.title.toLowerCase().includes(searchQuery.toLowerCase()) : false
  );

  return (
    <div className="flex gap-5 flex-wrap justify-center">
      {filteredData.length > 0 ? (
        filteredData.map((e) => (
          <Link key={e.id} to={`/product/${e.id}`}>
            <div className="w-[260px] bg-white rounded-2xl shadow-md p-4">
              <div className="h-[220px] flex items-center justify-center bg-gray-100 rounded-xl">
                <img
                  className="object-contain h-full"
                  src={e.thumbnail}
                  alt={e.title}
                />
              </div>

              <p className="text-green-600 text-xs mt-2 font-semibold">
                ● {t("original")}
              </p>
              <h2 className="text-purple-600 font-bold text-lg">
                {e.price} {t("sum")}
              </h2>
              <p className="text-gray-400 text-sm line-through">
                {Math.floor(e.price + (e.price * e.discountPercentage) / 100)}{" "}
                {t("sum")}
              </p>
              <span className="bg-yellow-300 text-xs px-2 py-1 rounded text-black">
                {Math.floor(e.price / 12)} {t("sum_per_month")}
              </span>
              <p className="text-sm text-black mt-2">{e.title.slice(0, 45)}</p>
              <p className="text-yellow-500 text-sm mt-1">⭐ {e.rating}</p>
              <button
                onClick={(ev) => {
                  ev.preventDefault();
                  addToCart(e);
                }}
                className={`w-full mt-3 py-2 rounded-xl text-white transition-colors ${
                  isInCart(e.id)
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
              >
                {isInCart(e.id) ? t("in_cart") : t("tomorrow")}
              </button>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-gray-500 text-lg mt-8">{t("no_products_found")}</p>
      )}
    </div>
  );
};

export default Cardbek;
