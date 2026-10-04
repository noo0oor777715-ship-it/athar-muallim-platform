import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { feedbackSchema } from '@/lib/validators';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = feedbackSchema.parse(body);

    await prisma.feedback.create({
      data: {
        ease: data.ease,
        design: data.design,
        clarity: data.clarity,
        accessibility: data.accessibility,
        usefulness: data.usefulness,
        suggestion: data.suggestion || '',
      },
    });

    return NextResponse.json({ success: true, message: 'تم إرسال التقييم بنجاح.' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'بيانات غير صالحة.' }, { status: 400 });
  }
}
