import { defaultMetrics } from '@/lib/mock-data';

export function AdminDashboardSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {defaultMetrics.slice(0, 4).map((item) => (
        <div key={item.label} className="rounded-2xl border bg-white p-5 shadow-soft">
          <p className="text-sm text-slate-500">{item.label}</p>
          <p className="mt-2 text-3xl font-bold text-brand-800">{item.value.toLocaleString('ar-SA')}</p>
        </div>
      ))}
    </div>
  );
}
