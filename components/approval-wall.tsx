export function AppreciationWall() {
  const cards = [
    { name: 'أميرة', title: 'رسالة شكر', text: 'شكراً لك على صبرك وتوجيهك. كنت سببًا في ثقتي بنفسي.' },
    { name: 'سارة', title: 'صورة', text: 'للمعلم الذي زرع فينا حب القراءة والبحث.' },
    { name: 'يوسف', title: 'فيديو', text: 'رؤية صاحب القلب الكبير تترك أثرًا لا يُمحى.' },
  ];

  return (
    <section id="wall" className="bg-brand-50 py-16">
      <div className="container-shell">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-brand-700">جدار الوفاء الرقمي</p>
            <h2 className="mt-2 text-3xl font-bold text-brand-800">المشاركات المعتمدة فقط</h2>
          </div>
          <div className="flex gap-2 text-sm">
            <button className="rounded-full bg-white px-3 py-2">الأحدث</button>
            <button className="rounded-full border px-3 py-2">الرسائل</button>
            <button className="rounded-full border px-3 py-2">الصور</button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.name} className="rounded-3xl bg-white p-5 shadow-soft">
              <div className="mb-5 h-40 rounded-2xl bg-gradient-to-br from-brand-100 to-gold-100" />
              <span className="rounded-full bg-brand-50 px-2 py-1 text-xs text-brand-700">{card.title}</span>
              <h3 className="mt-3 text-xl font-bold text-brand-800">{card.name}</h3>
              <p className="mt-2 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
