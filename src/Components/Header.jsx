import React, { useState } from 'react';
import { MapPin, ChevronDown, ShoppingCart, Heart, User, Search, Package, X } from 'lucide-react';
import uzumLogo from '../assets/uzumlogo.png';

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState('Русский');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length > 12) return phoneNumber;
    
    let formatted = '+998';
    if (numbers.length > 3) formatted += ' ' + numbers.slice(3, 5);
    if (numbers.length > 5) formatted += ' ' + numbers.slice(5, 8);
    if (numbers.length > 8) formatted += '-' + numbers.slice(8, 10);
    if (numbers.length > 10) formatted += '-' + numbers.slice(10, 12);
    
    return formatted;
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value.length < 4) {
      setPhoneNumber('+998');
      return;
    }
    const formatted = formatPhoneNumber(value);
    setPhoneNumber(formatted);
  };

  const handleGetCode = () => {
    const numbers = phoneNumber.replace(/\D/g, '');
    if (numbers.length === 12) {
      console.log('Phone:', phoneNumber);
      setStep(2);
    } else {
      alert('Iltimos, to\'liq telefon raqamini kiriting');
    }
  };

  const handleFinalSubmit = async () => {
    if (username && email) {
      try {
        const response = await fetch('http://localhost:3000/api/send-code', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
        
        const data = await response.json();
        
        if (data.success) {
          alert('Kod emailingizga yuborildi!');
          setStep(3);
        } else {
          alert(data.message || 'Xatolik yuz berdi');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Server bilan bog\'lanishda xatolik');
      }
    } else {
      alert('Iltimos, barcha maydonlarni to\'ldiring');
    }
  };

  const handleVerifyCode = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: verificationCode })
      });
      
      const data = await response.json();
      
      if (data.success) {
        alert('Muvaffaqiyatli ro\'yxatdan o\'tdingiz!');
        console.log('User data:', { username, email, phoneNumber });
        setIsLoginOpen(false);
        setStep(1);
        setPhoneNumber('');
        setUsername('');
        setEmail('');
        setVerificationCode('');
      } else {
        alert(data.message || 'Noto\'g\'ri kod');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Server bilan bog\'lanishda xatolik');
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsLoginOpen(false);
      setStep(1);
      setPhoneNumber('');
      setUsername('');
      setEmail('');
      setVerificationCode('');
    }
  };

  return (
    <>
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
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="flex flex-col items-center gap-1 text-gray-700 hover:text-purple-600 transition"
              >
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

      {isLoginOpen && (
        <div 
          className="fixed inset-0 z-50 absolute inset-0 bg-black/70 pointer-events-auto bg-opacity-30 flex items-center justify-center animate-fadeIn"
          onClick={handleOverlayClick}
        >
          <div 
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setIsLoginOpen(false);
                setStep(1);
                setPhoneNumber('');
                setUsername('');
                setEmail('');
                setVerificationCode('');
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">U</span>
                  </div>
                  <span className="text-purple-600 font-bold text-xl">uzumID</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
                {step === 1 ? 'Войти в Uzum Market' : step === 2 ? 'Завершить регистрацию' : 'Подтвердите Email'}
              </h2>

              {step === 1 && (
                <>
                  <div className="mb-6">
                    <input
                      type="tel"
                      placeholder="+998 00 000-00-00"
                      value={phoneNumber || '+998'}
                      onChange={handlePhoneChange}
                      onFocus={() => !phoneNumber && setPhoneNumber('+998')}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-lg"
                    />
                  </div>
                  <button
                    onClick={handleGetCode}
                    className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 transition transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Получить код
                  </button>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                      Продолжая, я соглашаюсь с{' '}
                      <a href="#" className="text-purple-600 hover:underline">политикой обработки персональных данных</a>
                      {' '}и{' '}
                      <a href="#" className="text-purple-600 hover:underline">офертой Uzum ID</a>
                    </p>
                  </div>
                  <div className="mt-4 text-center">
                    <a href="#" className="text-sm text-purple-600 hover:underline">Что такое Uzum ID?</a>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Имя пользователя</label>
                    <input
                      type="text"
                      placeholder="Введите имя"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-lg"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-lg"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold text-lg hover:bg-gray-300 transition"
                    >
                      Назад
                    </button>
                    <button
                      onClick={handleFinalSubmit}
                      className="flex-1 bg-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 transition transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Отправить код
                    </button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="mb-4 text-center">
                    <p className="text-sm text-gray-600 mb-4">
                      Код отправлен на <span className="font-semibold text-purple-600">{email}</span>
                    </p>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Введите код</label>
                    <input
                      type="text"
                      placeholder="000000"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      maxLength={6}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-lg text-center tracking-widest font-semibold"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold text-lg hover:bg-gray-300 transition"
                    >
                      Назад
                    </button>
                    <button
                      onClick={handleVerifyCode}
                      className="flex-1 bg-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 transition transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Подтвердить
                    </button>
                  </div>
                  <div className="mt-4 text-center">
                    <button 
                      onClick={handleFinalSubmit}
                      className="text-sm text-purple-600 hover:underline"
                    >
                      Отправить код повторно
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.2s ease-out; }
      `}</style>
    </>
  );
}