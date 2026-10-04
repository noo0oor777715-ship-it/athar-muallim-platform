import { prisma } from '@/lib/prisma';

export async function getPublicStats() {
  const [totalPosts, approvedPosts, pendingPosts] = await Promise.all([
    prisma.post.count(),
    prisma.post.count({ where: { status: 'APPROVED' } }),
    prisma.post.count({ where: { status: 'PENDING' } }),
  ]);

  return { totalPosts, approvedPosts, pendingPosts };
}
