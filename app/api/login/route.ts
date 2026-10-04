import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const dashboard = {
    totalPosts: await prisma.post.count(),
    pending: await prisma.post.count({ where: { status: 'PENDING' } }),
    approved: await prisma.post.count({ where: { status: 'APPROVED' } }),
    rejected: await prisma.post.count({ where: { status: 'REJECTED' } }),
  };

  return NextResponse.json(dashboard);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ success: false, message: 'البيانات غير مكتملة.' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ success: false, message: 'المستخدم غير موجود.' }, { status: 404 });
  }

  return NextResponse.json({ success: true, user: { name: user.name, role: user.role } });
}
