import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, ArrowRight, Target, BarChart, UserPlus, Truck, Warehouse, HandMetal, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Play, Instagram, Send, Youtube, Smartphone } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import img1 from "../assets/uzumsellerlogo.png"
import img2 from "../assets/uzumsellerperson.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function UzumSeller() {
    const { t, i18n } = useTranslation();
    const [isLangOpen, setIsLangOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsLangOpen(false);
    };

    const currentLang = i18n.language;
    const getLangLabel = (code) => {
        if (code === 'uz') return 'O\'Z';
        if (code === 'en') return 'EN';
        return 'RU';
    };

    const getFlag = (code) => {
        if (code === 'uz') return "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg";
        if (code === 'en') return "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";
        return "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg";
    };

    return (
        <div className="min-h-screen bg-[#1F1F26] text-white font-sans overflow-x-hidden">
            <header className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-2">
                    <div className="flex flex-col leading-none">
                        <img src={img1} className="w-[120px] h-[40px]" alt="" />
                    </div>
                </div>
                <div className="flex items-center gap-4 text-sm md:text-base">
                    <button className="hidden md:block text-gray-300 hover:text-white transition">{t('seller_instruction')}</button>

                    <div className="relative">
                        <div
                            className="flex items-center gap-1 text-gray-300 bg-[#2B2B33] px-3 py-2 rounded-md cursor-pointer hover:bg-gray-700 transition"
                            onClick={() => setIsLangOpen(!isLangOpen)}
                        >
                            <img src={getFlag(currentLang)} alt={currentLang} className="w-5 h-3 object-cover rounded-[2px]" />
                            <span className="font-medium">{getLangLabel(currentLang)}</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                        {isLangOpen && (
                            <div className="absolute top-full right-0 mt-2 bg-[#2B2B33] rounded-md shadow-lg py-1 z-50 w-full min-w-[80px]">
                                <div onClick={() => changeLanguage('ru')} className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 cursor-pointer">
                                    <span className="text-sm">RU</span>
                                </div>
                                <div onClick={() => changeLanguage('uz')} className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 cursor-pointer">
                                    <span className="text-sm">O'Z</span>
                                </div>
                                <div onClick={() => changeLanguage('en')} className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 cursor-pointer">
                                    <span className="text-sm">EN</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <button className="bg-[#2B2B33] px-6 py-2 rounded-md font-medium hover:bg-gray-700 transition">{t('login')}</button>
                    <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">{t('become_seller')}</button>
                </div>
            </header>


            <section className="max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-20 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                <div className="max-w-2xl w-full">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        {t('seller_hero_title')}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
                        {t('seller_hero_subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mb-12">
                        <div>
                            <div className="text-3xl md:text-5xl font-bold mb-2">{t('buyers_count')}</div>
                            <div className="text-xs md:text-sm text-gray-400 leading-snug">
                                <Trans i18nKey="registered_in_uzum" />
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-5xl font-bold mb-2">{t('sales_growth')}</div>
                            <div className="text-xs md:text-sm text-gray-400 leading-snug">
                                <Trans i18nKey="on_marketplace_last_year" />
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-5xl font-bold mb-2">{t('avg_time_first_revenue')}</div>
                            <div className="text-xs md:text-sm text-gray-400 leading-snug">
                                <Trans i18nKey="from_registration" />
                            </div>
                        </div>
                    </div>

                    <button className="bg-white text-black px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-200 transition">
                        {t('seller_hero_cta')}
                    </button>
                </div>


                <div className="relative w-full md:w-[500px] h-[400px] md:h-[600px] rounded-3xl overflow-hidden mt-8 md:mt-0">
                    <img
                        src={img2}
                        alt="Seller"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 text-black">
                        <div className="w-10 h-10 bg-[#7000FF] rounded-full flex items-center justify-center text-white font-bold">U</div>
                        <div>
                            <div className="font-bold text-sm">Uzum Sellers <span className="text-gray-500 font-normal">· Сейчас</span></div>
                            <div className="text-xs font-medium">Продажи за вчера: 3 189 000 сум</div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-[#D9D9FF] text-black py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center md:text-left">
                        <Trans
                            i18nKey="selling_is_simple"
                            components={{
                                1: <span className="relative inline-block px-1 bg-yellow-300"><div className="absolute inset-0 bg-yellow-300 -z-10 transform -rotate-1 rounded-sm"></div></span>
                            }}
                        />
                    </h2>
                    <p className="text-gray-600 mb-12 text-lg max-w-3xl text-center md:text-left">
                        {t('benefits_intro')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <BenefitCard icon={<Target size={32} />} title={t('benefit_1_title')} desc={t('benefit_1_desc')} />
                        <BenefitCard icon={<BarChart size={32} />} title={t('benefit_2_title')} desc={t('benefit_2_desc')} />
                        <BenefitCard icon={<UserPlus size={32} />} title={t('benefit_3_title')} desc={t('benefit_3_desc')} />
                        <BenefitCard icon={<Truck size={32} />} title={t('benefit_4_title')} desc={t('benefit_4_desc')} />
                        <BenefitCard icon={<Warehouse size={32} />} title={t('benefit_5_title')} desc={t('benefit_5_desc')} />
                        <BenefitCard icon={<HandMetal size={32} />} title={t('benefit_6_title')} desc={t('benefit_6_desc')} />
                    </div>
                </div>
            </section>


            <section className="bg-white text-black py-20 px-4 md:px-8 border-t border-gray-100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 rounded-3xl overflow-hidden h-[500px]">
                        <img src="https://seller.uzum.uz/_nuxt/second.B3RCPCpy.png" alt="Academy" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            {t('academy_title')}
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            {t('academy_desc')}
                        </p>
                        <button className="bg-[#1F1F26] text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition">
                            {t('learn_more')}
                        </button>
                    </div>
                </div>
            </section>


            <section className="bg-white text-black py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('work_anywhere')}
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            {t('work_anywhere_desc')}
                        </p>
                        <button className="bg-[#7000FF] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#5f00da] transition">
                            {t('seller_hero_cta')}
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div className="relative">
                            <img src="https://seller.uzum.uz/_nuxt/laptop.CFRYQ9RJ.jpg" alt="App" className="rounded-xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-[#F0F0F2] text-black py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1F1F26]">
                        <Trans
                            i18nKey="partners_say"
                            components={{
                                1: <span className="text-[#7000FF] relative"> <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#7000FF] opacity-30 transform -skew-x-12"></span></span>
                            }}
                        />
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TestimonialCard
                            name="Озод Хассанов"
                            role={t('testimonial_1_role')}
                            text={t('testimonial_1_text')}
                            img="https://randomuser.me/api/portraits/men/65.jpg"
                        />
                        <TestimonialCard
                            name="Шахзод Ходжаев"
                            role={t('testimonial_2_role')}
                            text={t('testimonial_2_text')}
                            img="https://randomuser.me/api/portraits/men/86.jpg"
                        />
                        <TestimonialCard
                            name="Аббос Халмуратов"
                            role={t('testimonial_3_role')}
                            text={t('testimonial_3_text')}
                        />
                        <div className="bg-white p-8 rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                                    <UserPlus className="text-gray-400 w-8 h-8" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-lg">{t('your_story')}</h3>
                                    <p className="text-gray-400 text-sm">{t('starts_now')}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {t('join_uzum_today')}
                            </p>
                            <button className="bg-[#7000FF] text-white w-full py-3 rounded-xl font-bold hover:bg-[#5f00da] transition">
                                {t('seller_hero_cta')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-white text-black py-20 px-4 md:px-8 rounded-t-[3rem]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">
                        <Trans i18nKey="start_selling_title" />
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <StepCard number="1" title={t('step_1_title')} desc={t('step_1_desc')} link={t('self_employed')} />
                        <StepCard number="2" title={t('step_2_title')} desc={t('step_2_desc')} />
                        <div className="md:col-span-2">
                            <StepCard number="3" title={t('step_3_title')} desc={t('step_3_desc')} cta={true} ctaText={t('step_3_cta')} />
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-white text-black py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">
                        {t('faq_title')}
                    </h2>
                    <div className="space-y-4">
                        <AccordionItem question={t('faq_q1')} answer={t('faq_answer_placeholder')} />
                        <AccordionItem question={t('faq_q2')} answer={t('faq_answer_placeholder')} />
                        <AccordionItem question={t('faq_q3')} answer={t('faq_answer_placeholder')} />
                        <AccordionItem question={t('faq_q4')} answer={t('faq_answer_placeholder')} />
                        <AccordionItem question={t('faq_q5')} answer={t('faq_answer_placeholder')} />
                        <AccordionItem question={t('faq_q6')} answer={t('faq_answer_placeholder')} />
                        <AccordionItem question={t('faq_q7')} answer={t('faq_answer_placeholder')} />
                        <AccordionItem question={t('faq_q8')} answer={t('faq_answer_placeholder')} />
                    </div>
                </div>
            </section>


            <section className="bg-white text-black py-20 px-4 md:px-8 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            {t('answering_questions')}
                        </h2>
                        <div className="flex gap-2">
                            <div className="swiper-button-prev-custom w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200">
                                <ChevronLeft />
                            </div>
                            <div className="swiper-button-next-custom w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200">
                                <ChevronRight />
                            </div>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                        }}
                    >
                        <SwiperSlide>
                            <VideoCard title="Как эффективно работать с моделью FBS на Uzum Market" image="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <VideoCard title="Как создать магазин на Uzum Market" image="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <VideoCard title="Как упаковать товар" image="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>


            <section className="bg-white text-black py-20 px-4 md:px-8 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            {t('news_title')}
                        </h2>
                        <div className="flex gap-2">
                            <div className="swiper-button-prev-news w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200">
                                <ChevronLeft />
                            </div>
                            <div className="swiper-button-next-news w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200">
                                <ChevronRight />
                            </div>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.swiper-button-prev-news',
                            nextEl: '.swiper-button-next-news',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        <SwiperSlide>
                            <NewsCard title="Uzum Market запускает новый аналитический инструмент" desc="С 29 декабря 2025 года в разделе «Аналитика» личного кабинета появится новый инструмент — «Анализ событий»." date="12.12.2025" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsCard title="Uzum Market обновляет комиссии по ряду категорий" desc="С 29 декабря 2025 года вступают в силу следующие изменения: 1. Категория Электронные и цифровые книги" date="12.12.2025" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsCard title="Как работать с анализом событий" desc="Что такое анализ событий? Это инструмент, который помогает понять, как маркетинговые события... влияют на показатели воронки продаж." date="12.12.2025" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsCard title="Изменение в оферте" desc="Мы обновили оферту для продавцов, теперь она еще прозрачнее." date="10.12.2025" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>


            <section className="bg-[#1F1F26] text-white py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        {t('ecosystem_title')}
                    </h2>
                    <p className="text-gray-400 mb-12 text-lg">
                        <Trans i18nKey="ecosystem_desc" />
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                        <div className="bg-[#2B2B33] p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-8">{t('installments')}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <EcosystemItem
                                    logo={<LogoNasiya />}
                                    title="Uzum Nasiya"
                                    desc={t('nasiya_desc')}
                                />
                                <EcosystemItem
                                    logo={<LogoNasiyaBusiness />}
                                    title="Uzum Nasiya Business"
                                    desc={t('nasiya_business_desc')}
                                />
                            </div>
                        </div>


                        <div className="bg-[#2B2B33] p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-8">{t('banking')}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <EcosystemItem
                                    logo={<LogoBank />}
                                    title="Uzum Bank"
                                    desc={t('bank_desc')}
                                />
                                <EcosystemItem
                                    logo={<LogoBankPartners />}
                                    title="Uzum Bank Partners"
                                    desc={t('bank_partners_desc')}
                                />
                            </div>
                        </div>

 
                        <div className="bg-[#2B2B33] p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-8">{t('business')}</h3>
                            <EcosystemItem
                                logo={<LogoBusiness />}
                                title="Uzum Business"
                                desc={t('business_desc')}
                            />
                        </div>

                        <div className="bg-[#2B2B33] p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-8">{t('delivery_service')}</h3>
                            <EcosystemItem
                                logo={<LogoTezkor />}
                                title="Uzum Tezkor"
                                desc={t('tezkor_desc')}
                            />
                        </div>


                        <div className="bg-[#2B2B33] p-8 rounded-3xl col-span-1 md:col-span-2 flex flex-col justify-center min-h-[150px]">
                            <h3 className="text-2xl font-bold mb-2">{t('new_service')}</h3>
                            <p className="text-gray-400">{t('stay_tuned')}</p>
                        </div>

                    </div>
                </div>
            </section>

            <footer className="bg-[#1F1F26] text-gray-300 py-16 px-4 md:px-8 border-t border-gray-800">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">{t('for_sellers')}</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="hover:text-white cursor-pointer underline decoration-1 underline-offset-4 decoration-gray-600 hover:decoration-white transition">{t('seller_instruction')}</li>
                            <li className="hover:text-white cursor-pointer underline decoration-1 underline-offset-4 decoration-gray-600 hover:decoration-white transition">{t('registration_instruction')}</li>
                            <li className="hover:text-white cursor-pointer underline decoration-1 underline-offset-4 decoration-gray-600 hover:decoration-white transition">{t('new_partners_support')}</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">{t('company')}</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="hover:text-white cursor-pointer underline decoration-1 underline-offset-4 decoration-gray-600 hover:decoration-white transition">{t('vacancies')}</li>
                            <li className="hover:text-white cursor-pointer underline decoration-1 underline-offset-4 decoration-gray-600 hover:decoration-white transition">{t('public_offer')}</li>
                            <li className="hover:text-white cursor-pointer underline decoration-1 underline-offset-4 decoration-gray-600 hover:decoration-white transition">{t('privacy_policy')}</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">{t('socials_sellers')}</h4>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
                                <Instagram className="text-black w-6 h-6" />
                            </div>
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
                                <Youtube className="text-black w-6 h-6" />
                            </div>
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
                                <Send className="text-black w-6 h-6 -ml-1" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6"><Trans i18nKey="seller_app" /></h4>
                        <div className="flex gap-4">
                            <button className="bg-white text-black px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-200 transition w-[140px]">
                                <Play className="fill-black w-6 h-6" />
                                <div className="flex flex-col items-start leading-none">
                                    <span className="text-[10px] font-medium">Google Play</span>
                                </div>
                            </button>
                            <button className="bg-white text-black px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-200 transition w-[140px]">
                                <Smartphone className="w-6 h-6" />
                                <div className="flex flex-col items-start leading-none">
                                    <span className="text-[10px] font-medium">App Store</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}

function BenefitCard({ icon, title, desc }) {
    return (
        <div className="bg-white p-6 rounded-2xl flex flex-col items-start gap-4 hover:shadow-lg transition">
            <div className="bg-[#F0F0F5] p-3 rounded-xl">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}

function TestimonialCard({ name, role, text, img }) {
    return (
        <div className="bg-white p-8 rounded-3xl flex flex-col gap-6 shadow-sm hover:shadow-md transition min-h-[300px]">
            <div className="flex items-center gap-4">
                {img ? (
                    <img src={img} alt={name} className="w-16 h-16 rounded-full object-cover border-2 border-gray-100" />
                ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-xl font-bold">{name ? name[0] : ''}</span>
                    </div>
                )}
                <div>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="text-gray-400 text-sm">{role}</p>
                </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
                {text}
            </p>
        </div>
    )
}

function StepCard({ number, title, desc, link, cta, ctaText }) {
    return (
        <div className="bg-[#F2F4F7] p-8 rounded-3xl flex flex-col items-start gap-4 relative overflow-hidden h-full">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#7000FF] font-bold text-xl shadow-sm">
                {number}
            </div>
            <h3 className="text-xl font-bold mt-2">{title}</h3>
            <p className="text-gray-500 leading-relaxed">
                {desc}
                {link && <span className="text-[#7000FF] ml-1 cursor-pointer">{link}</span>}
            </p>
            {cta && (
                <button className="bg-[#7000FF] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#5f00da] transition mt-4 w-full md:w-auto">
                    {ctaText}
                </button>
            )}
        </div>
    )
}

function AccordionItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-100 py-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{question}</h3>
                {isOpen ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
            </div>
            {isOpen && (
                <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                    {answer}
                </p>
            )}
        </div>
    )
}

function VideoCard({ title, image }) {
    return (
        <div className="relative rounded-3xl overflow-hidden group cursor-pointer aspect-video bg-black">
            <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-[#FF0000] rounded-xl flex items-center justify-center">
                    <Play className="text-white fill-white ml-1" />
                </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-bold text-xl md:text-2xl leading-tight">{title}</h3>
                <div className="mt-2 text-white/80 text-sm font-medium bg-[#7000FF] inline-block px-2 py-1 rounded">academy</div>
            </div>
        </div>
    )
}

function NewsCard({ title, desc, date }) {
    return (
        <div className="bg-white border border-gray-100 p-8 rounded-3xl h-full flex flex-col justify-between hover:shadow-lg transition">
            <div>
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <p className="text-gray-500 leading-relaxed line-clamp-4">{desc}</p>
            </div>
            <div className="mt-6 text-gray-300 text-sm font-medium">
                {date}
            </div>
        </div>
    )
}

function EcosystemItem({ logo, title, desc }) {
    return (
        <div className="flex flex-col items-start gap-4">
            <div className="mb-2">
                {logo}
            </div>
            <div>
                <div className="flex items-center gap-1 mb-2 hover:text-gray-300 cursor-pointer transition">
                    <h4 className="text-xl font-bold">{title}</h4>
                    <ChevronRight className="w-5 h-5" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">{desc}</p>
            </div>
        </div>
    )
}
function LogoNasiya() {
    return (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FF0055] to-[#7000FF] flex items-center justify-center text-white font-bold text-2xl">
            <div className="flex flex-col items-center leading-none">
                <span>U</span>
                <span className="text-[8px] font-normal mt-1">nasiya</span>
            </div>
        </div>
    )
}
function LogoNasiyaBusiness() {
    return (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#5500AA] to-[#330066] flex items-center justify-center text-white font-bold text-2xl border border-white/20">
            <div className="flex flex-col items-center leading-none">
                <span>U</span>
                <span className="text-[8px] font-normal mt-1 text-center">nasiya<br />business</span>
            </div>
        </div>
    )
}
function LogoBank() {
    return (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#00EE55] to-[#7000FF] flex items-center justify-center text-white font-bold text-2xl">
            <div className="flex flex-col items-center leading-none">
                <span>U</span>
                <span className="text-[8px] font-normal mt-1">bank</span>
            </div>
        </div>
    )
}
function LogoBankPartners() {
    return (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7000FF] via-[#444] to-[#222] flex items-center justify-center text-white font-bold text-2xl border border-white/20">
            <div className="flex flex-col items-center leading-none">
                <span>U</span>
                <span className="text-[8px] font-normal mt-1 text-center">bank<br />partners</span>
            </div>
        </div>
    )
}
function LogoBusiness() {
    return (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#444] to-[#7000FF] flex items-center justify-center text-white font-bold text-2xl">
            <div className="flex flex-col items-center leading-none">
                <span>U</span>
                <span className="text-[8px] font-normal mt-1">business</span>
            </div>
        </div>
    )
}
function LogoTezkor() {
    return (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#00CCFF] to-[#7000FF] flex items-center justify-center text-white font-bold text-2xl">
            <div className="flex flex-col items-center leading-none">
                <span>U</span>
                <span className="text-[8px] font-normal mt-1">tezkor</span>
            </div>
        </div>
    )
}
