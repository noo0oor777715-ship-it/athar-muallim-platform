"use client";

import { FormEvent, useState } from 'react';

export function RatingForm() {
  const [status, setStatus] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload = {
      ease: Number(formData.get('ease') || 5),
      design: Number(formData.get('design') || 5),
      clarity: Number(formData.get('clarity') || 5),
      accessibility: Number(formData.get('accessibility') || 5),
      usefulness: Number(formData.get('usefulness') || 5),
      suggestion: String(formData.get('suggestion') || ''),
    };

    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    setStatus(result.message || 'تم إرسال التقييم بنجاح.');
    if (result.success) event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
      {[
        ['ease', 'سهولة الاستخدام'],
        ['design', 'جمال التصميم'],
        ['clarity', 'وضوح المحتوى'],
        ['accessibility', 'سهولة الوصول'],
        ['usefulness', 'الفائدة'],
      ].map(([name, label]) => (
        <div key={name} className="rounded-2xl border p-4">
          <p className="mb-2 text-sm text-slate-500">{label}</p>
          <select name={name} defaultValue="5" className="w-full rounded-xl border p-2">
            {[1, 2, 3, 4, 5].map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>
      ))}
      <div className="md:col-span-2 lg:col-span-5">
        <textarea name="suggestion" className="mt-2 w-full rounded-2xl border p-4" rows={4} placeholder="اكتب اقتراحك لتطوير المنصة" />
      </div>
      <div className="md:col-span-2 lg:col-span-5 flex items-center justify-between gap-4">
        {status ? <span className="text-sm text-brand-800">{status}</span> : <span />}
        <button type="submit" className="rounded-full bg-brand-700 px-6 py-3 text-white">إرسال التقييم</button>
      </div>
    </form>
  );
}
