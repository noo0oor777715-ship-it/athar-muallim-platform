import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { MetricsStrip } from '@/components/metrics';
import { AppreciationWall } from '@/components/approval-wall';
import { StorySection } from '@/components/story-section';
import { TimelineSection } from '@/components/timeline-section';
import { ValuesSection } from '@/components/values-section';
import { GlobalTeachersSection } from '@/components/global-teachers-section';
import { SupportAssistant } from '@/components/support-assistant';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { SubmissionForm } from '@/components/submission-form';
import { RatingForm } from '@/components/rating-form';
import { SupportForm } from '@/components/support-form';

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
            <SubmissionForm />
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
          <RatingForm />
        </div>
      </section>

      <SupportAssistant />
      <section id="support-form" className="container-shell pb-16">
        <h2 className="text-3xl font-bold text-brand-800">تواصل مع إدارة المنصة</h2>
        <SupportForm />
      </section>

      <SiteFooter />
    </main>
  );
}
