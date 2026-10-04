import Link from 'next/link';

export function AdminDashboardCards() {
  const stats = [
    { label: 'المشاركات', value: '1,260' },
    { label: 'بانتظار المراجعة', value: '88' },
    { label: 'المعتمدة', value: '1,104' },
    { label: 'الرسائل', value: '430' },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {stats.map((item) => (
        <div key={item.label} className="rounded-2xl border bg-white p-5 shadow-soft">
          <p className="text-sm text-slate-500">{item.label}</p>
          <p className="mt-2 text-3xl font-bold text-brand-800">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export function AdminQuickLinks() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {['المشاركات', 'قصص الأثر', 'التقييمات', 'الدعم الفني', 'الإحصاءات', 'إعدادات الموقع'].map((item) => (
        <Link href="/admin" key={item} className="rounded-2xl border bg-white p-4 text-brand-800 shadow-soft hover:bg-brand-50">
          {item}
        </Link>
      ))}
    </div>
  );
}
