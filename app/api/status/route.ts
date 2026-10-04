import { prisma } from '@/lib/prisma';

export async function GET() {
  return {
    message: 'النظام يعمل بشكل صحيح.',
    environment: process.env.NODE_ENV || 'development',
  };
}
