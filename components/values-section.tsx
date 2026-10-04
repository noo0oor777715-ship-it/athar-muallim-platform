import { countryCards } from '@/lib/mock-data';

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
