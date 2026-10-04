import Link from 'next/link';
import { AdminDashboardCards, AdminQuickLinks } from '@/components/admin-dashboard-cards';

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">لوحة التحكم</p>
            <h1 className="text-3xl font-bold text-brand-900">لوحة المشرفة</h1>
          </div>
          <Link href="/" className="rounded-full bg-brand-700 px-4 py-2 text-white">العودة للموقع</Link>
        </div>

        <AdminDashboardCards />
        <div className="mt-8">
          <AdminQuickLinks />
        </div>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-brand-800">المشاركات بانتظار المراجعة</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full text-right">
              <thead>
                <tr className="bg-brand-50 text-brand-800">
                  <th className="p-3">الاسم</th>
                  <th className="p-3">العنوان</th>
                  <th className="p-3">الحالة</th>
                  <th className="p-3">الإجراء</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">سارة</td>
                  <td className="p-3">شكرًا لمدرستنا</td>
                  <td className="p-3">بانتظار المراجعة</td>
                  <td className="p-3"><button className="rounded-full bg-brand-700 px-3 py-2 text-white">اعتماد</button></td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">أمل</td>
                  <td className="p-3">رسالة إلى معلمتي</td>
                  <td className="p-3">محتاج تعديل</td>
                  <td className="p-3"><button className="rounded-full border border-brand-700 px-3 py-2 text-brand-700">مراجعة</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
