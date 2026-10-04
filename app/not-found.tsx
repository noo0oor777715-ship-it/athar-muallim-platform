export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-50 p-6 text-center">
      <div>
        <p className="text-sm text-brand-700">404</p>
        <h1 className="mt-2 text-4xl font-bold text-brand-900">الصفحة غير موجودة</h1>
        <p className="mt-3 text-slate-600">الرجاء مراجعة الرابط أو العودة إلى الصفحة الرئيسية.</p>
      </div>
    </main>
  );
}
