import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Karzina = () => {
    const { t } = useTranslation();
    const { cartItems, removeFromCart, updateQuantity } = useContext(AppContext);

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
                <img src="https://uzum.uz/static/img/shopocat.490a4a1.png" alt="Empty Cart" className="w-32" />
                <h2 className="text-2xl font-bold">{t('cart_empty')}</h2>
                <p className="text-gray-500">{t('check_offers')}</p>
                <Link to="/" className="bg-purple-600 text-white px-6 py-2 rounded-xl">{t('to_main')}</Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">{t('cart')}, <span className="text-gray-500 text-lg font-normal">{cartItems.length} {t('items_count')}</span></h1>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 space-y-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4 border border-gray-200 p-4 rounded-xl bg-white">
                            <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-contain bg-gray-100 rounded-lg" />

                            <div className="flex-1 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-medium text-gray-800">{item.title}</h3>
                                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 flex items-center gap-1">
                                        <Trash2 size={18} /> {t('delete')}
                                    </button>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center border border-gray-300 rounded-lg">
                                        <button
                                            onClick={() => updateQuantity(item.id, 'dec')}
                                            className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className="px-3 py-1 font-medium">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, 'inc')}
                                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-lg">{item.price * item.quantity} {t('sum')}</p>
                                        {item.quantity > 1 && <p className="text-sm text-gray-500">{item.price} {t('sum_per_item')}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full lg:w-[360px] h-fit border border-gray-200 rounded-xl p-6 bg-white sticky top-4">
                    <h2 className="font-bold text-lg mb-4">{t('your_order')}</h2>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">{t('products')} ({cartItems.reduce((acc, item) => acc + item.quantity, 0)}):</span>
                        <span className="font-medium">{totalAmount} {t('sum')}</span>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-600">{t('delivery')}:</span>
                        <span className="text-green-600 font-medium">{t('free')}</span>
                    </div>

                    <div className="border-t pt-4 mb-6">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-lg">{t('total')}:</span>
                            <div className="text-right">
                                <span className="block font-bold text-xl text-purple-600">{totalAmount} {t('sum')}</span>
                                <span className="text-sm text-green-600 font-medium">{t('you_save')}: 0 {t('sum')}</span>
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition">
                        {t('checkout')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Karzina;
