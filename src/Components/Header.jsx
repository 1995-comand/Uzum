import React, { useState } from 'react';
import { MapPin, ChevronDown, ShoppingCart, Heart, User, Search, Package } from 'lucide-react';
import uzumLogo from '../assets/uzumlogo.png';

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState('Русский');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full bg-white">
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition">
                <MapPin size={16} />
                Ташкент
                <ChevronDown size={16} />
              </button>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition">
                Пункты выдачи
              </a>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-purple-600 hover:text-purple-700 transition">
                Стать продавцом
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-700 transition">
                Открыть пункт выдачи
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition">
                Вопрос-ответ
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition">
                Мои заказы
              </a>
              <select 
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="text-gray-700 hover:text-purple-600 cursor-pointer bg-transparent border-none outline-none"
              >
                <option value="Русский">🇷🇺 Русский</option>
                <option value="O'zbekcha">🇺🇿 O'zbekcha</option>
                <option value="English">🇬🇧 English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <img src={uzumLogo} alt="Uzum Market" className="h-8" />
          </a>
          <button className="flex items-center gap-2 px-6 py-3 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition font-medium">
            <Package size={20} />
            Каталог
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Искать товары и категории"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600">
              <Search size={20} />
            </button>
          </div>
          <div className="flex items-center gap-6">
            <button className="flex flex-col items-center gap-1 text-gray-700 hover:text-purple-600 transition">
              <User size={24} />
              <span className="text-xs">Войти</span>
            </button>
            
            <button className="flex flex-col items-center gap-1 text-gray-700 hover:text-purple-600 transition relative">
              <Heart size={24} />
              <span className="text-xs">Избранное</span>
            </button>
            
            <button className="flex flex-col items-center gap-1 text-gray-700 hover:text-purple-600 transition relative">
              <ShoppingCart size={24} />
              <span className="text-xs">Корзина</span>
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-8 py-3 overflow-x-auto">
            <a href="#" className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition whitespace-nowrap font-medium">
              <img className='w-[24px]' src="https://static.uzum.uz/fast_categories/Topsales.png" alt="" />
              Товары недели
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition whitespace-nowrap">
               <img className='w-[24px]' src="https://static.uzum.uz/baner/feshn3110.png" alt="" />
              Зимняя коллекция
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition whitespace-nowrap">
              <img className='w-[24px]' src="https://static.uzum.uz/baner/hobbi2110.png" alt="" />
              Хобби и творчество
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition whitespace-nowrap">
              <img className='w-[24px]' src="https://static.uzum.uz/baner/smart2010.png" alt="" />
              Смартфоны
            </a>
            <a href="#" className="text-sm text-gray-700 hover:text-purple-600 transition whitespace-nowrap">
              Туризм, рыбалка и охота
            </a>
            <a href="#" className="text-sm text-gray-700 hover:text-purple-600 transition whitespace-nowrap">
              Электроника
            </a>
            <a href="#" className="text-sm text-gray-700 hover:text-purple-600 transition whitespace-nowrap">
              Бытовая техника
            </a>
            <a href="#" className="text-sm text-gray-700 hover:text-purple-600 transition whitespace-nowrap">
              Одежда
            </a>
            <a href="#" className="text-sm text-gray-700 hover:text-purple-600 transition whitespace-nowrap">
              Обувь
            </a>
            <button className="text-sm text-purple-600 hover:text-purple-700 transition whitespace-nowrap font-medium">
              Ещё
              <ChevronDown size={16} className="inline ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}