import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className=" text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">


          <div>
            <h4 className="text-lg font-semibold text-black mb-4">
              {t('about_us')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/points" className="hover:text-black transition text-gray-500">
                  {t('pickup_points')}
                </Link>
              </li>
              <li>
                <Link to="/vacancies" className="hover:text-black transition text-gray-500">
                  {t('vacancies')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">
              {t('for_users')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-black transition text-gray-500">
                  {t('contact_us')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-black transition text-gray-500">
                  {t('faq')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-black mb-4 ">
              {t('for_entrepreneurs')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/seller" className="hover:text-black transition text-gray-500">
                  {t('sell_on_uzum')}
                </Link>
              </li>
              <li>
                <Link to="/seller" className="hover:text-black transition text-gray-500">
                  {t('seller_cabinet')}
                </Link>
              </li>
              <li>
                <Link to="/open-point" className="hover:text-black transition text-gray-500">
                  {t('open_pickup_point')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-4 text-center text-sm text-gray-500">
          {t('copyright')}
        </div>

      </div>
    </footer>
  );
}
