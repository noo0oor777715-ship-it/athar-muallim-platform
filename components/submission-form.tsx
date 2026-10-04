"use client";

import { FormEvent, useState } from 'react';

export function SubmissionForm() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus('');

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setStatus(result.message || 'تم إرسال مشاركتك بنجاح.');
      if (result.success) {
        event.currentTarget.reset();
      }
    } catch (error) {
      setStatus('حدث خطأ أثناء إرسال المشاركة.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2" encType="multipart/form-data">
      <input name="authorName" className="rounded-xl border p-3" placeholder="الاسم أو اسم مستعار" required />
      <select name="category" className="rounded-xl border p-3" defaultValue="STUDENT">
        <option value="STUDENT">طالبة</option>
        <option value="PARENT">ولي أمر</option>
        <option value="TEACHER">معلمة</option>
        <option value="STAFF">موظفة</option>
        <option value="VISITOR">زائرة</option>
      </select>
      <input name="teacherName" className="rounded-xl border p-3 md:col-span-2" placeholder="اسم المعلم أو المعلمة المراد تكريمه" />
      <input name="title" className="rounded-xl border p-3 md:col-span-2" placeholder="عنوان الرسالة" required />
      <textarea name="content" rows={6} className="rounded-xl border p-3 md:col-span-2" placeholder="نص الرسالة" required />
      <div className="md:col-span-2">
        <label className="flex items-center gap-3">
          <input type="checkbox" name="publishName" value="true" />
          <span>أرغب في نشر اسمي مع المشاركة</span>
        </label>
      </div>
      <div className="md:col-span-2 rounded-2xl border border-dashed border-brand-300 bg-brand-50 p-4">
        <p className="font-medium text-brand-800">إرفاق ملف</p>
        <input type="file" name="attachment" className="mt-3 block w-full text-sm text-slate-600" multiple />
      </div>
      {status ? (
        <div className="md:col-span-2 rounded-xl border border-brand-200 bg-brand-50 p-3 text-sm text-brand-800">{status}</div>
      ) : null}
      <div className="md:col-span-2 flex justify-end">
        <button type="submit" disabled={loading} className="rounded-full bg-brand-700 px-6 py-3 text-white shadow-soft transition hover:bg-brand-800 disabled:opacity-70">
          {loading ? 'جارٍ الإرسال...' : 'إرسال المشاركة'}
        </button>
      </div>
    </form>
  );
}
