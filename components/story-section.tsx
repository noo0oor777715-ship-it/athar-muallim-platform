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
