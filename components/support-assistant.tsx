import { faqAnswers } from '@/lib/mock-data';

export function SupportAssistant() {
  return (
    <section id="support" className="container-shell py-16">
      <h2 className="text-3xl font-bold text-brand-800">مساعد المنصة</h2>
      <div className="mt-6 space-y-3 rounded-3xl border border-brand-100 bg-white p-6 shadow-soft">
        {faqAnswers.map((item) => (
          <div key={item.question} className="rounded-2xl border bg-brand-50 p-4">
            <p className="font-bold text-brand-800">{item.question}</p>
            <p className="mt-2 text-slate-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
