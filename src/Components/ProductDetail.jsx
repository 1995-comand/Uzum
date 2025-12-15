import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { CiDeliveryTruck } from "react-icons/ci";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { addToCart, addToFavorites, removeFromFavorites, isFavorite, isInCart } = useContext(AppContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <div className="flex justify-center items-center h-[60vh] text-xl text-gray-700">
      {t('loading')}
    </div>
  );

  if (!product) return (
    <div className="flex justify-center items-center h-[60vh] text-xl text-red-500">
      {t('product_not_found')}
    </div>
  );

  const oldPrice = Math.floor(product.price + (product.price * product.discountPercentage) / 100);
  const monthlyPrice = Math.floor(product.price / 12);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-purple-600 font-medium hover:underline flex items-center gap-2"
      >
        ← {t('back')}
      </button>

      <div className="bg-white rounded-3xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 rounded-2xl flex items-center justify-center p-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-[320px] object-contain"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-gray-500 mt-2">{product.description}</p>

          <div className="flex items-center gap-3 mt-4">
            <Star className="text-yellow-500" size={20} />
            <span className="text-gray-700">{product.rating}</span>
            <span className="text-sm text-gray-400">({product.stock} {t('in_stock')})</span>
          </div>

          <div className="mt-6">
            <p className="text-3xl font-bold text-purple-600">{product.price} {t('sum')}</p>
            <p className="text-gray-400 line-through">{oldPrice} {t('sum')}</p>
            <span className="inline-block mt-2 bg-yellow-300 px-3 py-1 rounded-lg text-sm">
              {monthlyPrice} {t('sum')} / {t('per_month')}
            </span>
          </div>

          <div className="flex gap-4 mt-6 flex-wrap">
            <button
              onClick={() => addToCart(product)}
              className={`flex-1 text-white py-3 rounded-xl text-lg transition flex items-center justify-center gap-2 ${isInCart(product?.id) ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'}`}
            >
              <ShoppingCart size={20} />
              {isInCart(product?.id) ? t('in_cart') : t('add_to_cart')}
            </button>

            <button
              onClick={() => {
                if (isFavorite(product?.id)) {
                  removeFromFavorites(product?.id);
                } else {
                  addToFavorites(product);
                }
              }}
              className={`flex-1 border py-3 rounded-xl text-lg transition flex items-center justify-center gap-2 ${isFavorite(product?.id) ? 'border-red-500 text-red-500 bg-red-50' : 'border-purple-600 text-purple-600 hover:bg-purple-50'}`}
            >
              <Heart size={20} fill={isFavorite(product?.id) ? "currentColor" : "none"} />
              {isFavorite(product?.id) ? t('saved') : t('save')}
            </button>

          </div>

          <p className="mt-4 text-green-600 font-semibold flex items-center gap-[5px]">
            <CiDeliveryTruck /> {t('delivery_tomorrow')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
