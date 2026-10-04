export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-brand-100 bg-white">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold text-brand-800">أثرُ معلّم</h3>
          <p className="mt-3 text-slate-600">صُنعت هذه المنصة وفاءً لمن علّم… وتقديرًا لمن ترك فينا أثرًا لا يُنسى.</p>
        </div>
        <div>
          <h4 className="font-bold text-brand-800">روابط سريعة</h4>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li><a href="#">سياسة الخصوصية</a></li>
            <li><a href="#">شروط الاستخدام</a></li>
            <li><a href="#">إمكانية الوصول</a></li>
            <li><a href="#">الدعم الفني</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-brand-800">معلومات المنصة</h4>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li>إعداد وتصميم: المعلمة عرفات الحرز</li>
            <li>مديرة المدرسة: بدرية العنزي</li>
            <li>المدرسة: عمارة بنت حمزة بن عبد المطلب الابتدائية</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-100 bg-brand-50 py-4 text-center text-sm text-slate-600">
        <p>© {currentYear} أثر معلم. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
