import { defineCollection, z } from 'astro:content';

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    stage: z.string(),
    grade: z.string(),
    duration: z.string(),
    order: z.number(),
    highlights: z.array(z.string()),
    icon: z.string().optional(),
  }),
});

const successCases = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    company: z.string(),
    image: z.string().optional(),
    category: z.enum(['business', 'academic']),
    description: z.string(),
    order: z.number(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  courses,
  'success-cases': successCases,
  pages,
};
