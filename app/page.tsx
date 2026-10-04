import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { MetricsStrip } from '@/components/metrics';
import { AppreciationWall } from '@/components/approval-wall';
import { StorySection } from '@/components/story-section';
import { TimelineSection } from '@/components/timeline-section';
import { ValuesSection } from '@/components/values-section';
import { GlobalTeachersSection } from '@/components/global-teachers-section';
import { FeedbackSection } from '@/components/feedback-section';
import { SupportAssistant } from '@/components/support-assistant';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ivory text-slate-800">
      <SiteHeader />
      <HeroSection />
      <MetricsStrip />

      <section id="submission" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-bold text-brand-800">رسالة إلى معلمي</h2>
            <p className="mt-2 text-slate-600">أرسل رسالة شكر وتقدير لمعلم أو معلمة ترك أثرًا فيك.</p>
            <form className="mt-6 grid gap-4 md:grid-cols-2">
              <input className="rounded-xl border p-3" placeholder="الاسم أو اسم مستعار" />
              <select className="rounded-xl border p-3">
                <option>طالبة</option>
                <option>ولي أمر</option>
                <option>معلمة</option>
                <option>موظفة</option>
                <option>زائرة</option>
              </select>
              <input className="rounded-xl border p-3 md:col-span-2" placeholder="اسم المعلم أو المعلمة المراد تكريمه" />
              <input className="rounded-xl border p-3 md:col-span-2" placeholder="عنوان الرسالة" />
              <textarea rows={6} className="rounded-xl border p-3 md:col-span-2" placeholder="نص الرسالة" />
              <div className="md:col-span-2">
                <label className="flex items-center gap-3">
                  <input type="checkbox" />
                  <span>أرغب في نشر اسمي مع المشاركة</span>
                </label>
              </div>
              <div className="md:col-span-2 rounded-2xl border border-dashed border-brand-300 bg-brand-50 p-4">
                <p className="font-medium text-brand-800">إرفاق ملف</p>
                <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-600">
                  <span className="rounded-full bg-white px-3 py-1">صورة</span>
                  <span className="rounded-full bg-white px-3 py-1">PDF</span>
                  <span className="rounded-full bg-white px-3 py-1">فيديو</span>
                  <span className="rounded-full bg-white px-3 py-1">بطاقة شكر</span>
                </div>
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button type="submit" className="rounded-full bg-brand-700 px-6 py-3 text-white shadow-soft transition hover:bg-brand-800">
                  إرسال المشاركة
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-brand-900 p-6 text-white shadow-soft">
              <p className="text-lg font-medium">رسالة وفاء</p>
              <p className="mt-4 text-2xl font-bold">هنا لا نكتب رسالة شكر فحسب… بل نوثق أثرًا يبقى.</p>
              <p className="mt-4 text-sm text-brand-100">سيتم مراجعة مشاركتك من قبل المشرفة قبل النشر، وستظهر بعد الاعتماد.</p>
            </div>
            <div className="rounded-3xl border border-brand-100 bg-white p-6">
              <h3 className="text-xl font-bold text-brand-800">نظام اعتماد المشاركة</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>تم الاستلام</li>
                <li>بانتظار المراجعة</li>
                <li>معتمد / مرفوض / يحتاج تعديل</li>
                <li>منشور</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AppreciationWall />
      <StorySection />
      <TimelineSection />
      <ValuesSection />
      <GlobalTeachersSection />

      <section id="evaluation" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-brand-800">رأيك يصنع التطوير</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {['سهولة الاستخدام', 'جمال التصميم', 'وضوح المحتوى', 'سهولة الوصول', 'الفائدة'].map((label, idx) => (
              <div key={label} className="rounded-2xl border p-4">
                <p className="mb-2 text-sm text-slate-500">{label}</p>
                <div className="flex gap-1 text-2xl text-gold-300">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <span key={starIdx}>{starIdx <= idx ? '★' : '☆'}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <textarea className="mt-6 w-full rounded-2xl border p-4" rows={4} placeholder="اكتب اقتراحك لتطوير المنصة" />
          <div className="mt-4 flex justify-end">
            <button className="rounded-full bg-brand-700 px-6 py-3 text-white">إرسال التقييم</button>
          </div>
        </div>
      </section>

      <SupportAssistant />
      <SiteFooter />
    </main>
  );
}
