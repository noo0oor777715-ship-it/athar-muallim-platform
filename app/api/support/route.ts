import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { supportSchema } from '@/lib/validators';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = supportSchema.parse(body);

    await prisma.supportRequest.create({
      data: {
        name: data.name || 'زائر',
        email: data.email || '',
        message: data.message,
        status: 'OPEN',
      },
    });

    return NextResponse.json({ success: true, message: 'تم إرسال طلب الدعم الفني بنجاح.' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'بيانات غير صالحة.' }, { status: 400 });
  }
}
