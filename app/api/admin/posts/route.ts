import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
  });
  return NextResponse.json({ posts });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { action, id } = body;

  if (action === 'approve' && id) {
    await prisma.post.update({
      where: { id },
      data: { status: 'APPROVED' },
    });
    return NextResponse.json({ success: true, status: 'APPROVED' });
  }

  if (action === 'reject' && id) {
    await prisma.post.update({
      where: { id },
      data: { status: 'REJECTED' },
    });
    return NextResponse.json({ success: true, status: 'REJECTED' });
  }

  return NextResponse.json({ success: false, message: 'إجراء غير صالح.' }, { status: 400 });
}
