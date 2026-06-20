import React from 'react';
import { Phone, MapPin, Clock, Star, Scissors, Sparkles, Heart } from 'lucide-react';

export default function SalonIskandar() {
  return (
    <div className="min-h-screen bg-amber-50/30 text-stone-800 font-sans" dir="rtl">
      
      {/* Hero Section */}
      <header className="relative bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200')" }}></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4">
            <Sparkles className="w-4 h-4" /> جمالك يبدأ من هنا
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-l from-amber-200 to-amber-400 bg-clip-text text-transparent">
            صالون اسكندر للتزيين النسائي
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-stone-300 mb-10 leading-relaxed">
            نمنحكِ تجربة جمال فريدة ومتكاملة على أيدي أمهر الخبيرات، لتبهري الجميع بإطلالة ساحرة تناسب كل مناسباتك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+966503735564" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-500 text-stone-950 font-bold rounded-xl shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors">
              <Phone className="w-5 h-5" /> اتصلي بنا الآن
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-stone-800 text-white font-medium rounded-xl border border-stone-700 hover:bg-stone-700 transition-colors">
              اكتشفي خدماتنا
            </a>
          </div>
        </div>
      </header>

      {/* Quick Info Bar */}
      <section className="bg-white border-b border-stone-100 shadow-sm relative z-10 -mt-8 max-w-5xl mx-auto rounded-2xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-stone-100 p-4">
        <div className="flex items-center gap-4 p-4 justify-center md:justify-start">
          <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-stone-900">أوقات العمل</h3>
            <p className="text-sm text-stone-500">نعمل على مدار 24 ساعة طوال الأسبوع</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 justify-center md:justify-start">
          <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-stone-900">الموقع</h3>
            <p className="text-sm text-stone-500">البخاري، أبها، المملكة العربية السعودية</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 justify-center md:justify-start">
          <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
            <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
          </div>
          <div>
            <h3 className="font-bold text-stone-900">تقييم العملاء</h3>
            <p className="text-sm text-stone-500">4.2 نجوم من زبوناتنا المخلصات</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">خدماتنا المتميزة</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
          <p className="text-stone-600 max-w-xl mx-auto">نقدم لكِ باقة متكاملة من خدمات التزيين والعناية بأعلى معايير الجودة والنظافة.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
              <Scissors className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">تصفيف وقص الشعر</h3>
            <p className="text-stone-600 leading-relaxed mb-4">أحدث قصات وتسريحات الشعر التي تبرز جمال وجهك، بالإضافة إلى خدمات الصبغة والعلاجات المغذية.</p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">المكياج والتزيين</h3>
            <p className="text-stone-600 leading-relaxed mb-4">مكياج سينمائي، ومناسبات، وعرائس بأرقى المنتجات العالمية ليمنحكِ إطلالة ناعمة أو جريئة حسب رغبتك.</p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">العناية بالبشرة والأظافر</h3>
            <p className="text-stone-600 leading-relaxed mb-4">جلسات تنظيف بشرة عميقة، وخدمات المانيكير والباديكير الاحترافية ليدين وقدمين غاية في النعومة.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-amber-500 text-stone-950 py-16 px-4 text-center relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto z-10">
          <h2 className="text-3xl font-extrabold mb-4">هل أنتِ جاهزة للتألق؟</h2>
          <p className="text-lg text-amber-950/80 mb-8 max-w-xl mx-auto">
            احجزي موعدكِ الآن أو تفضلي بزيارتنا في أي وقت، أبوابنا مفتوحة دائمًا لخدمتكِ على مدار 24 ساعة.
          </p>
          <a href="tel:+966503735564" className="inline-flex items-center gap-2 px-8 py-4 bg-stone-950 text-white font-bold rounded-xl shadow-xl hover:bg-stone-900 transition-colors">
            <Phone className="w-5 h-5" /> اتصلي الآن: +966 50 373 5564
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12 px-4 border-t border-stone-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-white font-bold text-lg mb-1">صالون اسكندر النسائي</h4>
            <p className="text-sm">أبها - حي البخاري - المملكة العربية السعودية</p>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} جميع الحقوق محفوظة لصالون اسكندر.</p>
        </div>
      </footer>

    </div>
  );
}