import { defaultMetrics } from '@/lib/mock-data';

export function MetricsStrip() {
  return (
    <section className="bg-brand-900 text-white">
      <div className="container-shell grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-6">
        {defaultMetrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-3xl font-bold">{metric.value.toLocaleString('ar-SA')}</p>
            <p className="mt-2 text-sm text-brand-100">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
