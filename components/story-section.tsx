import { countryCards } from '@/lib/mock-data';

export function StorySection() {
  return (
    <section id="stories" className="container-shell py-16">
      <h2 className="text-3xl font-bold text-brand-800">بصمة معلّم</h2>
      <div className="mt-8 rounded-3xl border border-brand-100 bg-white p-6 shadow-soft">
        <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr]">
          <div className="rounded-3xl bg-gradient-to-br from-brand-100 to-gold-100 p-6">
            <p className="text-sm text-brand-700">قصة أثر</p>
            <p className="mt-4 text-3xl font-bold text-brand-800">أحلام المعلمة</p>
          </div>
          <div>
            <p className="text-slate-600">
              كانت معلمة الصف الابتدائي تملك طريقة فريدة في فهم كل طفل، فكانت تتابع أحلامه وتدعمه بجدية، حتى صار كل طالب يعتقد أن التعليم طريقٌ نحو المستقبل.
            </p>
            <p className="mt-4 text-slate-600">
              في يوم من الأيام، راهنت الطالبة على نفسها وحققت إنجازًا كبيرًا، واعتبرت المعلمة سببًا في ذلك، فكانت الرسالة هي: لا يوجد تعليم بلا أثر.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ValuesSection() {
  return (
    <section className="bg-white py-16">
      <div className="container-shell">
        <h2 className="text-3xl font-bold text-brand-800">المعلم… شريك في صناعة المستقبل</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            'بناء الإنسان',
            'تنمية القيم',
            'صناعة المعرفة',
            'تعزيز الهوية الوطنية',
            'مهارات المستقبل',
            'الابتكار والتفكير العلمي',
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-brand-100 bg-brand-50 p-5 text-center text-brand-800 shadow-soft">
              <p className="text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GlobalTeachersSection() {
  return (
    <section className="container-shell py-16">
      <h2 className="text-3xl font-bold text-brand-800">المعلم في ثقافات العالم</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {countryCards.map((card) => (
          <div key={card.country} className="rounded-3xl border border-brand-100 bg-white p-5 shadow-soft">
            <div className="mb-4 text-2xl">🌍</div>
            <h3 className="text-xl font-bold text-brand-800">{card.country}</h3>
            <p className="mt-3 text-slate-600">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
