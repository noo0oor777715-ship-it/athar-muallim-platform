import { faqAnswers } from '@/lib/mock-data';

export function HeroSection() {
  return (
    <section className="container-shell grid gap-8 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
      <div>
        <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">أثرُ معلّم</p>
        <h1 className="mt-6 text-4xl font-black leading-tight text-brand-900 md:text-6xl">رسالة وفاء لمن يصنع المستقبل</h1>
        <p className="mt-5 max-w-xl text-lg text-slate-600">
          هنا لا نكتب رسالة شكر فحسب… بل نوثق أثرًا يبقى.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#submission" className="rounded-full bg-brand-700 px-5 py-3 text-white shadow-soft">شارك رسالة لمعلمك</a>
          <a href="#wall" className="rounded-full border border-brand-700 px-5 py-3 text-brand-700">استكشف رسائل الوفاء</a>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-white px-3 py-2">قصة التعليم</span>
          <span className="rounded-full bg-white px-3 py-2">مكانة المعلم</span>
          <span className="rounded-full bg-white px-3 py-2">لوحة الأثر</span>
          <span className="rounded-full bg-white px-3 py-2">قيّم المنصة</span>
          <span className="rounded-full bg-white px-3 py-2">إمكانية الوصول</span>
        </div>
      </div>

      <div className="rounded-[32px] bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 p-6 text-white shadow-soft">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs">مشهد تعليمي</span>
            <span className="text-xl">📚</span>
          </div>
          <div className="mt-10 rounded-3xl bg-white/10 p-6">
            <p className="text-sm text-brand-100">من المعلم إلى الأجيال</p>
            <p className="mt-4 text-3xl font-black">بصمةٌ تُبنى بالعلم والرحمة</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-white/5 p-3">
              <p className="text-brand-100">التحفيز</p>
              <p className="mt-2 text-2xl font-bold">98%</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-3">
              <p className="text-brand-100">الإنجاز</p>
              <p className="mt-2 text-2xl font-bold">24K</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
