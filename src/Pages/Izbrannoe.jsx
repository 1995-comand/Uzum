import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { Trash2, ShoppingCart } from "lucide-react";

const Izbrannoe = () => {
    const { t } = useTranslation();
    const { favoriteItems, removeFromFavorites, addToCart, isInCart } = useContext(AppContext);

    if (favoriteItems.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
                <img src="https://uzum.uz/static/img/hearts.cf414be.png" alt="Empty Favorites" className="w-32" />
                <h2 className="text-2xl font-bold">{t('add_favorites_title')}</h2>
                <p className="text-gray-500">{t('click_heart')}</p>
                <Link to="/" className="bg-purple-600 text-white px-6 py-2 rounded-xl">
                    {t('to_main')}
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">
                {t('my_wishes')} <span className="text-gray-500 text-lg font-normal">{favoriteItems.length} {t('items_count')}</span>
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {favoriteItems.map((e) => (
                    <div key={e.id} className="bg-white rounded-2xl shadow-md p-4 relative group hover:shadow-lg transition-shadow duration-300">
                        <button
                            onClick={(ev) => {
                                ev.preventDefault();
                                removeFromFavorites(e.id);
                            }}
                            className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-gray-100 text-red-500"
                        >
                            <Trash2 size={20} />
                        </button>
                        <Link to={`/product/${e.id}`}>
                            <div className="h-[220px] flex items-center justify-center bg-gray-100 rounded-xl mb-3 overflow-hidden">
                                <img className="object-contain h-full w-full hover:scale-105 transition-transform duration-300" src={e.thumbnail} alt={e.title} />
                            </div>

                            <div className="flex flex-col flex-1">
                                <h2 className="text-purple-600 font-bold text-lg">{e.price} {t('sum')}</h2>
                                <p className="text-gray-400 text-sm line-through">
                                    {Math.floor(e.price + (e.price * e.discountPercentage) / 100)} {t('sum')}
                                </p>
                                <p className="text-sm text-black mt-2 line-clamp-2 min-h-[40px]">{e.title}</p>

                                <button
                                    onClick={(ev) => {
                                        ev.preventDefault();
                                        addToCart(e);
                                    }}
                                    className={`nav-btn w-full mt-3 py-2 rounded-xl flex items-center justify-center gap-2 transition-colors ${isInCart(e.id) ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-purple-600 text-white hover:bg-purple-700'}`}
                                >
                                    <ShoppingCart size={18} />
                                    {isInCart(e.id) ? t('in_cart') : t('add_to_cart')}
                                </button>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Izbrannoe;
