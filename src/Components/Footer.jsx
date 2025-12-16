import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">


          <div>
            <h4 className="text-lg font-semibold text-black mb-4">
              Biz haqimizda
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/points" className="hover:text-black transition text-gray-500">
                  Topshirish punktlari
                </Link>
              </li>
              <li>
                <Link to="/vacancies" className="hover:text-black transition text-gray-500">
                  Vakansiyalar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">
              Foydalanuvchilarga
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-black transition text-gray-500">
                  Biz bilan bog‘lanish
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-black transition text-gray-500">
                  Savol-javob
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-black mb-4 ">
              Tadbirkorlarga
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sell" className="hover:text-black transition text-gray-500">
                  Uzumda sotish
                </Link>
              </li>
              <li>
                <Link to="/seller" className="hover:text-black transition text-gray-500">
                  Sotuvchi kabineti
                </Link>
              </li>
              <li>
                <Link to="/open-point" className="hover:text-black transition text-gray-500">
                  Punkt ochish
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-4 text-center text-sm text-gray-500">
          © 2025 Uzum Market. Barcha huquqlar himoyalangan.
        </div>

      </div>
    </footer>
  );
}
