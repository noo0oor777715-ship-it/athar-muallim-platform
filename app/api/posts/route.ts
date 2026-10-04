import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { submissionSchema } from '@/lib/validators';

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const payload = Object.fromEntries(form.entries());
    const validated = submissionSchema.parse(payload);

    const post = await prisma.post.create({
      data: {
        authorName: validated.authorName,
        category: validated.category,
        teacherName: validated.teacherName || 'غير محدد',
        title: validated.title,
        content: validated.content,
        publishName: Boolean(validated.publishName),
        status: 'PENDING',
      },
    });

    return NextResponse.json({
      success: true,
      message: 'شكرًا لمشاركتك الجميلة. وصلت رسالتك إلى لوحة المراجعة، وستظهر في جدار الوفاء بعد اعتمادها.',
      postId: post.id,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : 'حدث خطأ غير متوقع.',
    }, { status: 400 });
  }
}
