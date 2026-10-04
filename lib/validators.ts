import { z } from 'zod';

export const submissionSchema = z.object({
  authorName: z.string().min(2).max(80),
  category: z.enum(['STUDENT', 'PARENT', 'TEACHER', 'STAFF', 'VISITOR']),
  teacherName: z.string().max(120).optional().or(z.literal('')),
  title: z.string().min(3).max(150),
  content: z.string().min(10).max(2000),
  publishName: z.coerce.boolean().optional(),
});

export const feedbackSchema = z.object({
  ease: z.coerce.number().min(1).max(5),
  design: z.coerce.number().min(1).max(5),
  clarity: z.coerce.number().min(1).max(5),
  accessibility: z.coerce.number().min(1).max(5),
  usefulness: z.coerce.number().min(1).max(5),
  suggestion: z.string().max(600).optional().or(z.literal('')),
});

export const supportSchema = z.object({
  name: z.string().max(80).optional().or(z.literal('')),
  email: z.string().email().max(120).optional().or(z.literal('')),
  message: z.string().min(10).max(2000),
});
