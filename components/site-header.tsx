import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-brand-100 bg-white/80 backdrop-blur-sm">
      <div className="container-shell flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-700 text-xl font-bold text-white">أ</div>
          <div>
            <p className="text-lg font-bold text-brand-800">أثرُ معلّم</p>
            <p className="text-xs text-slate-500">رسالة وفاء لمن يصنع المستقبل</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          <Link href="#submission">شارك رسالة</Link>
          <Link href="#wall">جدار الوفاء</Link>
          <Link href="#stories">قصص الأثر</Link>
          <Link href="#timeline">رحلة التعليم</Link>
          <Link href="#support">الدعم الفني</Link>
        </nav>

        <div className="flex gap-2">
          <Link href="#submission" className="rounded-full border border-brand-700 px-4 py-2 text-sm text-brand-700">شارك رسالة</Link>
          <Link href="/admin" className="rounded-full bg-brand-700 px-4 py-2 text-sm text-white">لوحة المشرف</Link>
        </div>
      </div>
    </header>
  );
}
