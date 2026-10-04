import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@athar.com' },
    update: {},
    create: {
      name: 'مديرة المنصة',
      email: 'admin@athar.com',
      passwordHash: 'admin123',
      role: 'SUPER_ADMIN',
    },
  });

  await prisma.pageContent.upsert({
    where: { key: 'hero' },
    update: {},
    create: {
      key: 'hero',
      title: 'أثرُ معلّم',
      body: 'رسالة وفاء لمن يصنع المستقبل',
    },
  });

  console.log('Seeded admin user:', admin.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
