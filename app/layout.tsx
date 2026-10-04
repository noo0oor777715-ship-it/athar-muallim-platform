import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'أثر معلم | رسالة وفاء لمن يصنع المستقبل',
  description: 'منصة وطنية لتقدير المعلمين وتوثيق أثرهم في بناء الإنسان وصناعة المستقبل.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
