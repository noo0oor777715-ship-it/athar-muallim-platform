"use client";

import { FormEvent, useState } from 'react';

export function SupportForm() {
  const [status, setStatus] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || ''),
    };

    const response = await fetch('/api/support', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    setStatus(result.message || 'تم إرسال طلبك بنجاح.');
    if (result.success) event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4 rounded-3xl border border-brand-100 bg-white p-6 shadow-soft">
      <input name="name" className="rounded-xl border p-3" placeholder="الاسم (اختياري)" />
      <input name="email" type="email" className="rounded-xl border p-3" placeholder="البريد الإلكتروني (اختياري)" />
      <textarea name="message" rows={5} className="rounded-xl border p-3" placeholder="اكتب سؤالك أو طلب الدعم" required />
      {status ? <p className="text-sm text-brand-800">{status}</p> : null}
      <button type="submit" className="rounded-full bg-brand-700 px-6 py-3 text-white">إرسال طلب الدعم</button>
    </form>
  );
}
