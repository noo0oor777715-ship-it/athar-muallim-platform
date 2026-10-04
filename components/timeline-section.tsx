import { timelineItems } from '@/lib/mock-data';

export function TimelineSection() {
  return (
    <section id="timeline" className="container-shell py-16">
      <h2 className="text-3xl font-bold text-brand-800">من الكتاتيب إلى التعليم الرقمي</h2>
      <div className="mt-8 space-y-6">
        {timelineItems.map((item, idx) => (
          <div key={item.year} className="rounded-3xl border border-brand-100 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-lg font-bold text-white">{idx + 1}</div>
              <div>
                <p className="text-sm text-brand-700">{item.year}</p>
                <h3 className="text-2xl font-bold text-brand-800">{item.title}</h3>
              </div>
            </div>
            <p className="mt-4 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-xl font-medium text-brand-800">وتستمر الرحلة… بالعلم نبني المستقبل.</p>
    </section>
  );
}
