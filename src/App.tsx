import { Search, Heart, Bell, User, PlayCircle, Clock, BarChart2, Leaf, Croissant, Soup, Egg, Utensils, IceCream, Fish, Sprout, Wine, Share2, Instagram, Youtube, X, ShoppingCart, Truck, ChevronRight, Info, Target, TrendingUp, Lightbulb, Users, Gift, MousePointerClick, Activity, Database, Sparkles, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

interface PricingOption {
  id: string;
  label: string;
  price: string;
  desc: string;
}

interface ShortData {
  id: number;
  title: string;
  img: string;
  options: PricingOption[];
}

const SHORTS_DATA: ShortData[] = [
  { 
    id: 1,
    title: "Секрет ідеальної глазурі", 
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1328&auto=format&fit=crop",
    options: [
      { id: 'cheap', label: 'Економ', price: '189 ₴', desc: 'Базові інгредієнти за доступною ціною' },
      { id: 'optimal', label: 'Оптимальний', price: '276 ₴', desc: 'Найкраще співвідношення ціни та якості' },
      { id: 'premium', label: 'Преміум', price: '394 ₴', desc: 'Найкращі інгредієнти для ідеального смаку' }
    ]
  },
  { 
    id: 2,
    title: "Стір-фрай за 5 хвилин", 
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1472&auto=format&fit=crop",
    options: [
      { id: 'cheap', label: 'Економ', price: '145 ₴', desc: 'Базові овочі та соус' },
      { id: 'optimal', label: 'Оптимальний', price: '210 ₴', desc: 'Баланс свіжості та смаку' },
      { id: 'premium', label: 'Преміум', price: '320 ₴', desc: 'Фермерські продукти та авторський соус' }
    ]
  },
  { 
    id: 3,
    title: "Як працювати з тістом", 
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1472&auto=format&fit=crop",
    options: [
      { id: 'cheap', label: 'Економ', price: '98 ₴', desc: 'Борошно та дріжджі економ-класу' },
      { id: 'optimal', label: 'Оптимальний', price: '142 ₴', desc: 'Якісне борошно вищого гатунку' },
      { id: 'premium', label: 'Преміум', price: '215 ₴', desc: 'Італійське борошно "00" та жива закваска' }
    ]
  },
  { 
    id: 4,
    title: "Зберігаємо зелень свіжою", 
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1368&auto=format&fit=crop",
    options: [
      { id: 'cheap', label: 'Економ', price: '45 ₴', desc: 'Зелень з найближчого маркету' },
      { id: 'optimal', label: 'Оптимальний', price: '75 ₴', desc: 'Добірна зелень' },
      { id: 'premium', label: 'Преміум', price: '120 ₴', desc: 'Гідропонна свіжа зелень' }
    ]
  },
  { 
    id: 5,
    title: "Ідеальна домашня піца", 
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop",
    options: [
      { id: 'cheap', label: 'Економ', price: '210 ₴', desc: 'Готове тісто та звичайний сир' },
      { id: 'optimal', label: 'Оптимальний', price: '340 ₴', desc: 'Моцарела та томати пелаті' },
      { id: 'premium', label: 'Преміум', price: '520 ₴', desc: 'Буйволяча моцарела та пармська шинка' }
    ]
  },
  { 
    id: 6,
    title: "Освіжаючий літній напій", 
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1374&auto=format&fit=crop",
    options: [
      { id: 'cheap', label: 'Економ', price: '65 ₴', desc: 'Сезонні фрукти' },
      { id: 'optimal', label: 'Оптимальний', price: '110 ₴', desc: 'Екзотичні мікси' },
      { id: 'premium', label: 'Преміум', price: '195 ₴', desc: 'Органічні соки та суперфуди' }
    ]
  }
];

export default function App() {
  const [selectedShort, setSelectedShort] = useState<ShortData | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('optimal');
  const [showConcept, setShowConcept] = useState(false);

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary selection:text-white">
      {/* Presentation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[110] flex gap-4">
        <motion.button 
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 0 0 rgba(190, 48, 38, 0)",
              "0 0 0 15px rgba(190, 48, 38, 0.2)",
              "0 0 0 0 rgba(190, 48, 38, 0)"
            ]
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => setShowConcept(!showConcept)}
          className="bg-primary text-white px-12 py-6 rounded-full font-black shadow-[0_20px_50px_rgba(190,48,38,0.3)] flex items-center gap-4 hover:scale-105 active:scale-95 transition-all text-base md:text-xl border-[6px] border-white z-[120]"
        >
          {showConcept ? <X className="w-7 h-7 font-bold" /> : <Sparkles className="w-7 h-7 font-bold fill-white" />}
          {showConcept ? 'Продовжити перегляд' : 'Дивитись бізнес-концепцію ✨'}
        </motion.button>
      </div>

      {/* Header */}
      <header className="bg-surface sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 h-20 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <a href="/" className="font-serif text-3xl font-bold text-primary tracking-tight">SHUBA</a>
            <nav className="hidden lg:flex gap-8 items-center">
              <a href="#" className="font-sans text-sm font-bold text-primary border-b-2 border-primary pb-1">Рецепти</a>
              <a href="#" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">Техніки</a>
              <a href="#" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">Кухні світу</a>
              <a href="#" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">Здорове харчування</a>
              <a href="#" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">Події</a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Пошук рецептів..." 
                className="bg-secondary-container/50 border-none rounded-full px-6 py-2 w-64 text-sm focus:ring-2 focus:ring-primary-container outline-none appearance-none"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
            </div>
            <div className="flex gap-4">
              <button className="text-primary hover:scale-110 transition-transform"><Heart className="w-5 h-5" /></button>
              <button className="text-primary hover:scale-110 transition-transform relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
              </button>
              <button className="text-primary hover:scale-110 transition-transform"><User className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-10 py-10">
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative min-h-[520px] sm:min-h-[600px] lg:h-[650px] rounded-[40px] overflow-hidden bg-primary-container group mb-16 shadow-xl grayscale saturate-0 opacity-40 hover:opacity-60 transition-all duration-1000"
        >
          <img 
            src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1543&auto=format&fit=crop" 
            alt="Strawberry Ice Cream"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
          <div className="relative h-full flex flex-col justify-center px-6 py-12 sm:px-14 sm:py-14 lg:p-20 max-w-2xl text-white border-none">
            <motion.span 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-primary text-white text-[10px] font-bold px-5 py-1.5 rounded-full mb-6 w-fit tracking-[0.2em]"
            >
              РЕЦЕПТ ДНЯ
            </motion.span>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.05]"
            >
              Домашнє полуничне морозиво: смак літа
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg opacity-90 mb-8 font-sans max-w-lg leading-relaxed"
            >
              Найкращий десерт для спекотного дня — натуральний, ніжний та дуже ароматний. Готуємо без зайвих зусиль.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 mt-4"
            >
              <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:translate-y-[-4px] transition-all shadow-xl active:scale-95 leading-none text-base"> Дивитись рецепт </button>
              <div className="flex items-center gap-6 text-white/80 text-sm font-bold">
                <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> 45 хв</span>
                <span className="flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-primary" /> 
                  Легко
                </span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Share & Earn Section (Marketing Block) - Compact Banner Version */}
        <section className="bg-[#FAF9F6] -mx-4 sm:-mx-10 px-6 sm:px-12 py-10 rounded-[48px] mb-20 relative overflow-hidden border border-primary/5 flex flex-col xl:flex-row items-center gap-10 justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50 pointer-events-none" />
          
          {/* Left Column: Context */}
          <div className="flex items-center gap-6 max-w-xl">
             <div className="w-16 h-16 bg-[#E8E4D9] rounded-full flex items-center justify-center text-[#B5A48B] shadow-inner shrink-0 relative">
                <Star className="w-8 h-8 fill-current" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-[#FAF9F6]" />
             </div>
             <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1D1D1B] leading-tight mb-2 tracking-tight">
                  Рекомендуй улюблені товари <br className="hidden md:block" /> та отримуй <span className="text-primary italic">особисту знижку</span>
                </h2>
                <p className="text-[#4A4A4A] text-sm md:text-base opacity-70 leading-relaxed">
                  Поділись посиланням на свою добірку в Сільпо. Збери лайки – <br className="hidden lg:block"/> отримай персональну знижку <span className="text-primary font-black">10–20%</span>!
                </p>
             </div>
          </div>

          {/* Middle Column: Interactive Card */}
          <div className="bg-white p-6 rounded-[40px] shadow-xl border border-primary/5 flex flex-col gap-6 w-full max-w-[420px] relative group overflow-hidden">
             <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
             
             <div className="flex justify-between items-center">
                <h4 className="text-[10px] font-black text-[#1D1D1B] uppercase tracking-widest opacity-40">Товари з рецепта</h4>
                <div className="flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-full">
                   <Heart className="w-3.5 h-3.5 fill-primary text-primary" />
                   <span className="text-xs font-black text-primary">128</span>
                </div>
             </div>

             <div className="grid grid-cols-5 gap-3">
                {[
                  { img: "https://images.silpo.ua/v2/products/300x300/webp/b94f20d6-cda9-4e92-81a6-6cf575be30e5.png", name: "Креветки" },
                  { img: "https://images.silpo.ua/v2/products/300x300/webp/073a6e6b-e95b-4f63-a56b-8af61e9b2a7d.png", name: "Груша" },
                  { img: "https://images.silpo.ua/v2/products/300x300/webp/3bd77c16-b486-4815-bc83-762c21cb050e.png", name: "Томат" },
                  { img: "https://images.silpo.ua/v2/products/300x300/webp/6e37858b-4fc1-453f-9b00-5d4be6a448ef.png", name: "Суп" },
                  { img: "https://images.silpo.ua/v2/products/300x300/webp/b94f20d6-cda9-4e92-81a6-6cf575be30e5.png", name: "Креветки" },
                ].map((item, i) => (
                   <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="aspect-square rounded-2xl bg-[#F8F7F2] p-1.5 flex items-center justify-center border border-black/5 overflow-hidden shadow-sm"
                   >
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-full h-full object-contain mix-blend-multiply" 
                        referrerPolicy="no-referrer"
                      />
                   </motion.div>
                ))}
             </div>

             <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-[9px] font-black uppercase tracking-widest opacity-40">Ваш прогрес</span>
                   <span className="text-[9px] font-black uppercase tracking-widest text-[#B5A48B]">Потрібно ще 72 лайки</span>
                </div>
                <div className="h-2 w-full bg-[#F3F1E8] rounded-full overflow-hidden shadow-inner flex">
                   <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '64%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-primary"
                   />
                   <div className="h-full bg-white/30 border-r border-white/50 w-0" />
                </div>
             </div>
          </div>

          {/* Right Column: CTA */}
          <div className="flex flex-col sm:flex-row xl:flex-col items-center gap-6 xl:gap-8 w-full xl:w-auto">
             <div className="flex xl:flex-col gap-5">
                {[
                  { icon: Share2, title: '1. Поділись посиланням', desc: 'З друзями та у соцмережах' },
                  { icon: Heart, title: '2. Збери лайки', desc: 'Чим більше – вища знижка' },
                  { icon: Gift, title: '3. Отримай знижку', desc: 'Використай у Сільпо' },
                ].map((s, i) => (
                   <div key={i} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md border border-primary/5 group-hover:scale-110 transition-transform shrink-0">
                         <s.icon className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
                      </div>
                      <div className="hidden md:block">
                        <h5 className="text-[11px] font-black uppercase tracking-tight leading-none mb-1">{s.title}</h5>
                        <p className="text-[9px] font-medium opacity-40 leading-none">{s.desc}</p>
                      </div>
                   </div>
                ))}
             </div>
             
             <motion.button 
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 xl:flex-none w-full xl:w-72 bg-[#1D1D1B] text-white py-6 px-10 rounded-[32px] font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3 transition-all shadow-2xl hover:bg-black group"
             >
                Отримати посилання
                <MousePointerClick className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </motion.button>
          </div>
        </section>

        {/* New Recipes */}
        <section className="py-20 border-b border-secondary-container grayscale saturate-0 opacity-40 hover:opacity-60 transition-all duration-1000">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-2">Новинки сезону</h2>
              <p className="text-on-surface-variant">Свіжі рецепти, перевірені нашою редакцією</p>
            </div>
            <a href="#" className="hidden sm:block text-primary font-bold border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity">Переглянути всі</a>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { title: "Зелений салат з лососем та авокадо", tag: "САЛАТИ", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop", desc: "Легкий та поживний варіант для вашого ідеального обіду з добірними морепродуктами." },
              { title: "Крем-суп із запечених овочів", tag: "ПЕРШІ СТРАВИ", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1471&auto=format&fit=crop", desc: "Оксамитова текстура та глибокий аромат запечених томатів і перцю." },
              { title: "Тост з авокадо та яйцем пашот", tag: "СНІДАНКИ", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1480&auto=format&fit=crop", desc: "Сучасна класика сніданків. Секрет у правильному приготуванні пашоту." }
            ].map((recipe, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="bg-white rounded-[32px] overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-500 border border-secondary-container/50"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={recipe.img} alt={recipe.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold px-4 py-1.5 rounded-full mb-6 tracking-[0.1em]">{recipe.tag}</span>
                  <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{recipe.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">{recipe.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Categories Grid */}
        <section className="py-24 grayscale saturate-0 opacity-40 hover:opacity-60 transition-all duration-1000">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl font-serif font-bold mb-4">Що хочеш приготувати?</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {[
              { name: "Випічка", icon: Croissant },
              { name: "Супи", icon: Soup },
              { name: "Сніданки", icon: Egg },
              { name: "Вечеря", icon: Utensils },
              { name: "Десерти", icon: IceCream },
              { name: "М'ясо та риба", icon: Fish },
              { name: "Вегетаріанське", icon: Sprout },
              { name: "Напої", icon: Wine }
            ].map((cat, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -8, scale: 1.05 }}
                className="flex flex-col items-center gap-5 group cursor-pointer"
              >
                <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center shadow-md group-hover:bg-primary group-hover:shadow-primary/30 transition-all duration-300">
                  <cat.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="font-bold text-sm tracking-tight group-hover:text-primary transition-colors">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary-container mt-20 py-24 rounded-t-[64px]">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 text-on-secondary-container">
            <div className="col-span-1">
              <a href="/" className="font-serif text-4xl font-bold block mb-8 tracking-tighter">SHUBA</a>
              <p className="text-base opacity-70 leading-[1.8] font-medium max-w-xs">Ваш персональний провідник у світ кулінарної творчості та гастрономічних відкриттів.</p>
            </div>
            <div>
              <h4 className="text-xl font-serif font-bold mb-10">Навігація</h4>
              <ul className="space-y-5 text-sm font-bold opacity-60">
                <li className="hover:text-primary hover:opacity-100 cursor-pointer transition-all">Про проєкт</li>
                <li className="hover:text-primary hover:opacity-100 cursor-pointer transition-all">Редакційна етика</li>
                <li className="hover:text-primary hover:opacity-100 cursor-pointer transition-all">Вакансії</li>
                <li className="hover:text-primary hover:opacity-100 cursor-pointer transition-all">Співпраця</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-serif font-bold mb-10">Інфо</h4>
              <ul className="space-y-5 text-sm font-bold opacity-60">
                <li className="hover:text-primary hover:opacity-100 cursor-pointer transition-all">Контакти</li>
                <li className="hover:text-primary hover:opacity-100 cursor-pointer transition-all">Для рекламодавців</li>
                <li className="hover:text-primary hover:opacity-100 cursor-pointer transition-all">Конфіденційність</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-serif font-bold mb-10">Стежте за нами</h4>
              <div className="flex gap-4">
                {[Share2, Instagram, Youtube].map((Icon, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg hover:shadow-primary/20 cursor-pointer transition-all"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-on-secondary-container/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold tracking-[0.2em] opacity-40 uppercase">© 2024 SHUBA Culinary Media. Усі права захищено.</p>
            <p className="text-xs font-bold opacity-30 italic">Створено для тих, хто закоханий у смак.</p>
          </div>
        </div>
      </footer>

      {/* Shorts Modal */}
      <AnimatePresence>
        {selectedShort && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedShort(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] shadow-2xl"
            >
              <div className="md:w-2/5 h-[320px] md:h-auto bg-[#1a1a1a] relative group overflow-hidden shrink-0">
                <img 
                  src={selectedShort.img} 
                  alt={selectedShort.title} 
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-20 h-20 text-white/90 drop-shadow-2xl" />
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white text-2xl font-serif font-bold leading-tight drop-shadow-md">{selectedShort.title}</h3>
                </div>
              </div>

              <div className="flex-1 p-6 md:p-10 lg:p-12 flex flex-col bg-surface overflow-y-auto max-h-full">
                <div className="flex justify-between items-start mb-8 shrink-0">
                  <div className="max-w-md">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 tracking-tight leading-tight">Зберіть набір для рецепта</h2>
                    <p className="text-on-surface-variant text-sm md:text-base leading-relaxed opacity-80">Ми автоматично підібрали найкращі інгредієнти, щоб результат був бездоганним.</p>
                  </div>
                  <button 
                    onClick={() => setSelectedShort(null)}
                    className="p-2 hover:bg-secondary-container rounded-full transition-all shrink-0 ml-4"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-[#1D1D1B] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 mb-6 hover:bg-black transition-all shadow-lg text-base shrink-0"
                >
                  <ShoppingCart className="w-5 h-5 stroke-[2.5]" />
                  Додати всі інгредієнти
                </motion.button>

                <div className="bg-[#F8F7F2] p-6 rounded-2xl flex gap-4 mb-8 relative border border-primary/10 overflow-hidden group/truck shrink-0">
                  <div className="w-10 h-10 shrink-0 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm border border-primary/5">
                    <Truck className="w-5 h-5 transition-transform group-hover/truck:translate-x-1" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Приготуйте завтра ввечері</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Усі інгредієнти прибудуть до завтрашньої вечері. Ми піклуємося про ваш вільний час.
                    </p>
                  </div>
                  <div className="absolute top-2 right-2">
                    <div className="bg-primary/[0.08] text-primary text-[8px] px-3 py-1 rounded-full font-black tracking-widest uppercase border border-primary/10">
                      COOK TOMORROW
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-4">Виберіть бюджет набору</p>
                  <div className="grid gap-3">
                    {selectedShort.options.map((opt) => (
                      <div 
                        key={opt.id}
                        onClick={() => setSelectedOption(opt.id)}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex justify-between items-center group ${
                          selectedOption === opt.id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-secondary-container bg-white hover:border-primary/30'
                        }`}
                      >
                        <div className="flex gap-4">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedOption === opt.id ? 'border-primary' : 'border-on-surface-variant/20'}`}>
                            {selectedOption === opt.id && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                          </div>
                          <div>
                            <h5 className="font-bold text-sm group-hover:text-primary transition-colors">{opt.label}</h5>
                            <p className="text-[10px] text-on-surface-variant font-medium opacity-70">{opt.desc}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-serif font-black text-lg text-primary">{opt.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:text-primary transition-all mt-8 group w-fit shrink-0 pb-4">
                  <span className="border-b-2 border-transparent group-hover:border-primary">Налаштувати інгредієнти окремо</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Business Concept Presentation Overlay */}
      <AnimatePresence>
        {showConcept && (
          <div className="fixed inset-0 z-[150] overflow-y-auto bg-white/98 backdrop-blur-2xl">
            <div className="max-w-6xl mx-auto px-8 py-24 sm:py-32">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8"
              >
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-1 bg-primary rounded-full" />
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Strategic Presentation {new Date().getFullYear()}</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#1a1a1a] mb-8 leading-tight">Creator Commerce &<br /><span className="text-primary italic">Shareable Collections</span></h2>
                  <p className="text-2xl font-serif text-on-surface-variant leading-relaxed italic">Як перетворити користувачів на канал продажів і поширення через соціальну комерцію.</p>
                </div>
                <button 
                  onClick={() => setShowConcept(false)}
                  className="bg-black text-white p-6 rounded-[32px] shadow-2xl hover:scale-110 active:scale-95 transition-all self-start md:self-end"
                >
                  <X className="w-8 h-8 font-bold" />
                </button>
              </motion.div>

              {/* Context and Problem */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
                <div className="bg-[#F8F7F2] p-12 rounded-[48px] border border-primary/10">
                  <Activity className="w-12 h-12 text-primary mb-10" />
                  <h3 className="text-3xl font-serif font-bold mb-6">Контекст</h3>
                  <p className="text-lg opacity-80 leading-relaxed mb-8">Food-контент — це найсильніший драйвер соціальної взаємодії. Люди природно діляться рецептами, зберігають добірки та рекомендують продукти.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm font-bold opacity-60">
                    <div className="flex items-center gap-2">• Збереження</div>
                    <div className="flex items-center gap-2">• Рекомендації</div>
                    <div className="flex items-center gap-2">• Обговорення</div>
                    <div className="flex items-center gap-2">• Рецепти</div>
                  </div>
                </div>

                <div className="bg-[#1D1D1B] p-12 rounded-[48px] text-white shadow-2xl">
                  <X className="w-12 h-12 text-primary mb-10" />
                  <h3 className="text-3xl font-serif font-bold mb-6 text-white">Проблема</h3>
                  <p className="opacity-70 leading-relaxed text-lg mb-8">Зараз користувачі пасивно споживають контент. У них немає прямої мотивації створювати власні добірки чи активно приводити нові покупки для платформи.</p>
                  <div className="space-y-4 pt-8 border-t border-white/10">
                    <p className="text-sm font-bold opacity-90">• Пасивне споживання</p>
                    <p className="text-sm font-bold opacity-90">• Відсутність мотивації creators</p>
                    <p className="text-sm font-bold opacity-90">• Залежність від алгоритмів платформи</p>
                  </div>
                </div>
              </div>

              {/* Solution Section */}
              <div className="mb-32">
                <div className="flex flex-col items-center mb-16 text-center">
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-4">The Solution</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">“Share & Earn” Commerce Layer</h2>
                  <p className="text-xl font-serif text-on-surface-variant max-w-2xl italic">Користувач стає куратором, а контент — посиланням, що продає.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { icon: MousePointerClick, title: 'Creator Collections', desc: 'Автор збирає товари: «Вечеря до 400 грн», «BBQ weekend», «Студентське меню».' },
                    { icon: Gift, title: 'Reward System', desc: 'Винагорода не за лайки, а за дії: cart adds, saves, shares та покупки.' },
                    { icon: Users, title: 'Organic Reach', desc: 'Кожна добірка стає віральним інструментом органічного поширення.' },
                    { icon: Sparkles, title: 'Loyalty Rewards', desc: 'Автори отримують знижки, бонуси та особливий статус у системі.' }
                  ].map((s, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white p-10 rounded-[40px] shadow-sm border border-secondary-container hover:shadow-xl transition-all"
                    >
                      <div className="w-16 h-16 bg-primary/5 rounded-[24px] flex items-center justify-center text-primary mb-8">
                        <s.icon className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold mb-4">{s.title}</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed opacity-80">{s.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Strategy and Potential */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
                <div className="lg:col-span-2 bg-[#F8F7F2] p-12 rounded-[48px] border border-primary/10">
                  <h3 className="text-3xl font-serif font-bold mb-10">Стратегічне значення</h3>
                  <div className="flex flex-col md:flex-row items-start gap-12">
                    <div className="space-y-6 flex-1">
                      <div className="p-6 bg-white rounded-3xl shadow-sm">
                        <p className="text-sm font-bold mb-2 text-primary">Від звичайного контент-сайту</p>
                        <p className="text-2xl font-serif font-bold opacity-30">Content & Recipes</p>
                      </div>
                      <div className="flex justify-center">
                        <TrendingUp className="w-8 h-8 text-primary" />
                      </div>
                      <div className="p-6 bg-[#1D1D1B] text-white rounded-3xl shadow-xl">
                        <p className="text-sm font-bold mb-2 text-primary">До екосистеми соціальної комерції</p>
                        <p className="text-2xl font-serif font-bold">Creator-Driven Retail Media</p>
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      {[
                        'Organic Distribution (UGC)',
                        'Social Proof & Trust',
                        'Зниження вартості CAC',
                        'Affiliate Mechanics Integration',
                        'Influencer Partnership Ready'
                      ].map(item => (
                        <div key={item} className="flex items-center gap-3 text-sm font-bold">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-primary p-12 rounded-[48px] text-white flex flex-col justify-between">
                  <Database className="w-12 h-12 text-white/50 mb-10" />
                  <div>
                    <h3 className="text-3xl font-serif font-bold mb-6">Майбутній потенціал</h3>
                    <p className="opacity-90 leading-relaxed italic mb-8">"Система може вирости у персоналізовані Creator Storefronts та AI-керовані кошики на основі добірок лідерів думок."</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Storefronts', 'Influencers', 'AI Persona', 'Seasonality'].map(tag => (
                      <span key={tag} className="bg-white/20 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metrics Final Section */}
              <div className="bg-[#1D1D1B] rounded-[64px] p-12 md:p-24 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div>
                    <h3 className="text-white text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">Головне: це не просто ідеї для інтерфейсу.</h3>
                    <p className="text-white/60 text-lg leading-relaxed mb-10">Це commerce-механіки перетворення натхнення на продажі та мережа органічного поширення бренду через реальних користувачів.</p>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <p className="text-primary text-3xl font-serif font-bold">High</p>
                        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-2">Retention Rate</p>
                      </div>
                      <div>
                        <p className="text-primary text-3xl font-serif font-bold">Low</p>
                        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-2">Acquisition Cost</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 p-10 rounded-[48px] border border-white/10 backdrop-blur-sm">
                    <h4 className="text-white text-xl font-bold mb-8">Метрики для вимірювання</h4>
                    <div className="space-y-6">
                      {[
                        { label: 'Saves & Shares', icon: Share2 },
                        { label: 'Cart Adds per Collection', icon: ShoppingCart },
                        { label: 'Viral K-Factor', icon: Sparkles },
                        { label: 'Conversion to Purchase', icon: MousePointerClick }
                      ].map((m, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <m.icon className="w-5 h-5" />
                          </div>
                          <p className="text-white/80 font-bold text-sm tracking-tight">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
