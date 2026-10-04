import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const count = await prisma.post.count();
  return NextResponse.json({ status: 'ok', posts: count });
}
