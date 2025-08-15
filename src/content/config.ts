import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    order: z.number().optional(),
    tags: z.array(z.string()).optional(),
    lastUpdated: z.union([z.string(), z.date()]).optional(),
    author: z.string().optional(),
  }),
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    estimatedTime: z.string().optional(),
    tags: z.array(z.string()).optional(),
    lastUpdated: z.union([z.string(), z.date()]).optional(),
    author: z.string().optional(),
  }),
});

const specifications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    version: z.string().optional(),
    status: z.enum(['draft', 'active', 'deprecated']).optional(),
    order: z.number().optional(),
    tags: z.array(z.string()).optional(),
    lastUpdated: z.union([z.string(), z.date()]).optional(),
    author: z.string().optional(),
  }),
});

export const collections = {
  docs,
  guides,
  specifications,
};
