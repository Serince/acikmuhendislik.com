import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // Ders sayfalarına özel alanlar (Pages CMS formunda da bunlar görünür)
        youtube: z.union([z.string(), z.array(z.string())]).optional(),
        ozet: z.string().optional(),
        teaser: z.string().optional(), // kutuda gosterilen bagimsiz cumle // "Bu derste" kutusunun kaynagi; govdede tekrar etmez
        kapak: z.string().optional(), // ders kartı resmi; yoksa kurs kapağı kullanılır
        yazar: z.string().optional(),
        yazarKanal: z.string().url().optional(),
        yazilim: z.string().optional(),
        tarih: z.coerce.date().optional(),
        dogrulama: z.boolean().optional(), // eşleşme elle doğrulanmalı
      }),
    }),
  }),
};
