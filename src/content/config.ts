import { z, defineCollection } from 'astro:content';

const tomosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    volumen: z.number(),
    fecha: z.string(),
    descripcion: z.string(),
    portada: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  'tomos': tomosCollection,
};

