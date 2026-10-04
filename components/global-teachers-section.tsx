import { countryCards } from '@/lib/mock-data';

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
