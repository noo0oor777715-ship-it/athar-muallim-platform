import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!email || !password || !name) {
      return NextResponse.json({ success: false, message: 'البيانات غير مكتملة.' }, { status: 400 });
    }

    await prisma.user.create({
      data: {
        name,
        email,
        passwordHash: password,
        role: 'SUPER_ADMIN',
      },
    });

    return NextResponse.json({ success: true, message: 'تم إنشاء المستخدم بنجاح.' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'تعذر إنشاء المستخدم.' }, { status: 400 });
  }
}
